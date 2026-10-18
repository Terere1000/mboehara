/* Optional accounts, so progress survives a cleared browser or a second device.

   Sign-up collects a USERNAME and a password. Nothing else — no email, no real name,
   no birthday. This follows Duolingo's "Child User" model: many learners here are
   schoolchildren, and the safest personal data is the kind you never collect.

   Supabase Auth needs an email internally, so one is derived from the username
   (maria_1 → maria_1@no-mail.mboehara.com.py). It is never sent to, never delivered,
   and never shown. Email confirmation must be OFF in the Supabase dashboard
   (Authentication → Providers → Email → "Confirm email"), or sign-up will hang
   waiting for a click on mail that cannot arrive.

   Everything here is additive: with no config, a blocked CDN or no network, the app
   behaves exactly as it did before — localStorage only, no account UI. Progress is
   always written locally first; the server is a backup, never the source of truth. */

const Account = {
  EMAIL_DOMAIN: "no-mail.mboehara.com.py",
  PUSH_DEBOUNCE: 1500,

  client: null,
  user: null,
  username: null,
  _pushTimer: null,
  _status: "off",            // off | ready | busy | error

  configured() {
    return !!(typeof SUPABASE_CONFIG !== "undefined" && SUPABASE_CONFIG.url && SUPABASE_CONFIG.anonKey);
  },

  available() { return !!this.client; },
  signedIn() { return !!this.user; },

  // ---------- identity ----------
  // Reuse the search folder so "Maríañe" and "mariane" are the same account name;
  // the synthetic email has to be plain ASCII anyway.
  foldName(name) {
    const base = typeof Search !== "undefined" ? Search.fold(name) : String(name || "").toLowerCase();
    return base.replace(/[^a-z0-9_]/g, "");
  },

  emailFor(name) { return this.foldName(name) + "@" + this.EMAIL_DOMAIN; },

  // Returns an i18n key on failure, null when fine.
  validate(name, password) {
    const key = this.foldName(name);
    if (key.length < 3 || key.length > 20) return "acct.errName";
    if (!/^[a-z0-9_]+$/.test(key)) return "acct.errName";
    if (!password || password.length < 8) return "acct.errPass";
    return null;
  },

  // ---------- lifecycle ----------
  async init() {
    if (!this.configured() || typeof window.supabase === "undefined") return false;
    try {
      this.client = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey, {
        auth: { persistSession: true, autoRefreshToken: true }
      });
    } catch (e) {
      console.warn("[account] could not start Supabase client:", e);
      return false;
    }

    // Progress.save() is called from all over the app; piggyback on it rather than
    // asking every caller to remember to sync.
    const localSave = Progress.save.bind(Progress);
    Progress.save = () => { localSave(); this.schedulePush(); };

    try {
      const { data } = await this.client.auth.getSession();
      if (data && data.session) {
        this.user = data.session.user;
        await this._loadUsername();
        await this.pull();
      }
    } catch (e) {
      console.warn("[account] session restore failed:", e);
    }
    this._status = "ready";
    return true;
  },

  async _loadUsername() {
    if (!this.user) return;
    const { data } = await this.client.from("profiles").select("username").eq("id", this.user.id).maybeSingle();
    this.username = data ? data.username : null;
  },

  // ---------- sign up / in / out ----------
  async signUp(name, password) {
    const bad = this.validate(name, password);
    if (bad) return { error: bad };

    const key = this.foldName(name);
    try {
      const { data: taken } = await this.client.rpc("username_taken", { name_key: key });
      if (taken) return { error: "acct.errTaken" };

      const { data, error } = await this.client.auth.signUp({
        email: this.emailFor(name), password
      });
      if (error) return { error: "acct.errSignUp", detail: error.message };
      if (!data.user) return { error: "acct.errSignUp" };

      this.user = data.user;
      const { error: pErr } = await this.client.from("profiles")
        .insert({ id: data.user.id, username: name.trim(), username_key: key });
      if (pErr) return { error: "acct.errSignUp", detail: pErr.message };

      this.username = name.trim();
      // A new account starts from whatever the guest already earned.
      await this.push();
      return { ok: true };
    } catch (e) {
      return { error: "acct.errNetwork", detail: String(e) };
    }
  },

  async signIn(name, password) {
    if (!name || !password) return { error: "acct.errName" };
    try {
      const { data, error } = await this.client.auth.signInWithPassword({
        email: this.emailFor(name), password
      });
      if (error) return { error: "acct.errSignIn" };
      this.user = data.user;
      await this._loadUsername();
      await this.pull();          // merges — guest progress is never discarded
      await this.push();
      return { ok: true };
    } catch (e) {
      return { error: "acct.errNetwork", detail: String(e) };
    }
  },

  async signOut() {
    try { await this.client.auth.signOut(); } catch (e) { /* local sign-out regardless */ }
    this.user = null;
    this.username = null;
  },

  // ---------- sync ----------
  // Pull merges rather than replaces: a learner who practised offline as a guest and
  // then signs in keeps both sides.
  async pull() {
    if (!this.user) return;
    try {
      const { data, error } = await this.client.from("progress")
        .select("data").eq("user_id", this.user.id).maybeSingle();
      if (error) throw error;
      if (data && data.data) Progress.merge(data.data);
    } catch (e) {
      console.warn("[account] pull failed:", e);
    }
  },

  async push() {
    if (!this.user) return;
    this._status = "busy";
    try {
      const { error } = await this.client.from("progress")
        .upsert({ user_id: this.user.id, data: Progress.snapshot() }, { onConflict: "user_id" });
      if (error) throw error;
      this._status = "ready";
    } catch (e) {
      this._status = "error";
      console.warn("[account] push failed:", e);
    }
    if (typeof App !== "undefined" && App.route && App.route.name === "profile") App.refreshAccountStatus();
  },

  // The app saves on every answered question; batch those into one write.
  schedulePush() {
    if (!this.signedIn()) return;
    clearTimeout(this._pushTimer);
    this._pushTimer = setTimeout(() => this.push(), this.PUSH_DEBOUNCE);
  },

  statusKey() {
    if (!this.signedIn()) return null;
    return this._status === "error" ? "acct.syncError"
         : this._status === "busy" ? "acct.syncing"
         : "acct.synced";
  }
};
