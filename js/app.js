/* App shell: top-bar stats, language toggle, and the three screens —
   Home (world map), Grade (lesson list), Profile. The lesson player lives in game.js. */

const App = {
  init() {
    Progress.load();
    i18n.apply();

    document.getElementById("brand-home").onclick = () => this.home();
    document.getElementById("lang-toggle").onclick = () => {
      i18n.toggle();
      i18n.apply();
      this.refreshTopbar();
      this.rerender();
    };
    Search.mount();
    // Accounts are optional and load late; the app is fully usable before this resolves.
    if (typeof Account !== "undefined") {
      Account.init().then(ok => { if (ok) { this.refreshTopbar(); this.rerender(); } });
    }
    this.route = { name: "home" };
    this.refreshTopbar();
    this.home();
    this.openFromLink();
  },

  // Deep link from the static lesson pages (aprender/…): /?leccion=g2-1 opens grade 2,
  // lesson 2. Deliberately ignores grade locks — someone arriving from a search result
  // asked for that lesson. The query is then dropped so a reload lands on the map.
  openFromLink() {
    if (!location.search) return;
    const m = /^(g\d+)-(\d+)$/.exec(new URLSearchParams(location.search).get("leccion") || "");
    history.replaceState(null, "", location.pathname + location.hash);
    if (!m) return;
    const gradeIdx = grades.findIndex(g => g.id === m[1]);
    const g = grades[gradeIdx];
    if (!g || !g.lessons[+m[2]]) return;
    this.grade(gradeIdx);
    this.openLesson(g, +m[2], gradeIdx);
  },

  refreshTopbar() {
    document.querySelector("#stat-streak b").textContent = Progress.data.streak;
    document.querySelector("#stat-xp b").textContent = Progress.data.xp;
    const rank = rankForLevel(Progress.level);
    // The rank name is wrapped so narrow screens can drop it and keep just "Lv N"
    // (the full rank is always on the profile screen).
    document.getElementById("stat-level").innerHTML =
      "Lv " + Progress.level + '<span class="rank-name"> · ' + i18n.meaning(rank) + "</span>";
    document.getElementById("lang-toggle").textContent = i18n.lang === "es" ? "EN" : "ES";
    const sb = document.getElementById("search-open");
    if (sb) { sb.setAttribute("aria-label", i18n.t("search.open")); sb.title = i18n.t("search.open") + " (/)"; }
  },

  rerender() {
    if (this.route.name === "home") this.home();
    else if (this.route.name === "grade") this.grade(this.route.gradeIdx);
    else if (this.route.name === "profile") this.profile();
    else if (this.route.name === "expressions") this.expressions();
  },

  // ---------- Home / world map ----------
  home() {
    this.route = { name: "home" };
    const app = document.getElementById("app");
    const cards = grades.map((g, i) => {
      const unlocked = Progress.gradeUnlocked(grades, i);
      const prog = Math.round(Progress.gradeProgress(g) * 100);
      const done = Progress.gradeDone(g);
      return `
        <button class="world ${unlocked ? "" : "locked"} ${done ? "done" : ""}"
                data-i="${i}" ${unlocked ? "" : "disabled"} style="--accent:${g.color}">
          <span class="world-icon">${unlocked ? g.icon : "🔒"}</span>
          <span class="world-meta">
            <span class="world-grade">${i18n.t("grade")} ${g.num}</span>
            <span class="world-title">${i18n.meaning(g.title)}</span>
            <span class="world-sub">${g.lessons.length} ${i18n.t("world.lessons")}${unlocked ? "" : " · " + i18n.t("world.locked")}</span>
            <span class="world-bar"><span class="world-bar-fill" style="width:${prog}%"></span></span>
          </span>
          ${done ? '<span class="world-check">✓</span>' : ""}
        </button>`;
    }).join("");

    app.innerHTML = `
      <section class="hero">
        <img src="assets/mascot.png" class="hero-mascot" alt="Mbo'ehára">
        <div class="hero-text">
          <h1>Mbo'ehára</h1>
          <p data-i18n="hero.tagline">${i18n.t("hero.tagline")}</p>
        </div>
      </section>
      <section class="path-head">
        <h2>${i18n.t("home.path")}</h2>
        <p class="muted">${i18n.t("home.pathSub")}</p>
      </section>
      <section class="worlds">${cards}</section>
      <section class="path-head"><h2>${i18n.t("expr.title")}</h2></section>
      <button class="expr-entry" id="expr-entry">
        <span class="expr-entry-icon">💬</span>
        <span class="world-meta">
          <span class="world-title">${i18n.t("expr.title")}</span>
          <span class="world-sub">${i18n.t("expr.sub")}</span>
        </span>
        <span class="expr-entry-go">${i18n.t("expr.open")} →</span>
      </button>`;

    app.querySelectorAll(".world:not(.locked)").forEach(b => {
      b.onclick = () => this.grade(+b.dataset.i);
    });
    document.getElementById("expr-entry").onclick = () => this.expressions();
    this.refreshTopbar();
  },

  // ---------- Expresiones Comunes (standalone section) ----------
  expressions() {
    this.route = { name: "expressions" };
    if (!this._expr) this._expr = { cat: "*", q: "" };
    const app = document.getElementById("app");

    const catLabel = c => {
      const l = EXPRESSION_CATEGORY_LABELS[c];
      return l ? i18n.meaning(l) : c;
    };

    const pills = ['<button class="filter-pill" data-cat="*">' + i18n.t("expr.all") + "</button>"]
      .concat(EXPRESSION_CATEGORIES.map(c =>
        `<button class="filter-pill" data-cat="${c}">${catLabel(c)}</button>`)).join("");

    app.innerHTML = `
      <section class="grade-head">
        <button class="back" id="back">←</button>
        <span class="grade-icon">💬</span>
        <div>
          <h2>${i18n.t("expr.title")}</h2>
          <p class="muted">${i18n.t("expr.sub")}</p>
        </div>
      </section>
      <input type="search" class="expr-search" id="expr-search"
             placeholder="${i18n.t("expr.search")}" value="${this._expr.q.replace(/"/g, "&quot;")}">
      <div class="filterbar" id="filterbar">${pills}</div>
      <p class="expr-pron-note muted">${i18n.t("expr.pronNote")}</p>
      <div class="expr-count muted" id="expr-count"></div>
      <section class="expr-grid" id="expr-grid"></section>`;

    document.getElementById("back").onclick = () => this.home();

    const grid = document.getElementById("expr-grid");
    const countEl = document.getElementById("expr-count");
    const searchEl = document.getElementById("expr-search");
    const bar = document.getElementById("filterbar");

    const catColor = c => {
      const i = Math.max(0, EXPRESSION_CATEGORIES.indexOf(c));
      return `hsl(${(i * 47) % 360} 55% 45%)`;
    };

    const exprMeaning = e => (i18n.lang === "en" && e.english) ? e.english : e.spanish;

    const render = () => {
      const q = Search.fold(this._expr.q);
      const cat = this._expr.cat;
      const list = EXPRESSIONS.filter(e =>
        (cat === "*" || e.category === cat) &&
        (!q || Search.fold(e.guarani).includes(q) ||
               Search.fold(e.spanish).includes(q) ||
               (e.english && Search.fold(e.english).includes(q))));

      bar.querySelectorAll(".filter-pill").forEach(p =>
        p.classList.toggle("active", p.dataset.cat === cat));
      countEl.textContent = list.length + " " + i18n.t("expr.count");

      grid.innerHTML = list.length
        ? list.map(e => `
            <article class="expr-card" data-id="${e.id}">
              <p class="expr-gn">${e.guarani}</p>
              <p class="expr-pron">${Pron.guide(e.guarani, e.pron)}</p>
              <p class="expr-es">${exprMeaning(e)}</p>
              <span class="expr-badge" style="--badge:${catColor(e.category)}">${catLabel(e.category)}</span>
            </article>`).join("")
        : `<p class="expr-empty muted">${i18n.t("expr.none")}</p>`;
    };

    searchEl.oninput = () => { this._expr.q = searchEl.value; render(); };
    bar.querySelectorAll(".filter-pill").forEach(p => {
      p.onclick = () => { this._expr.cat = p.dataset.cat; render(); };
    });
    render();
    this.refreshTopbar();
  },

  // ---------- Grade / lesson list ----------
  grade(gradeIdx) {
    this.route = { name: "grade", gradeIdx };
    const g = grades[gradeIdx];
    const app = document.getElementById("app");
    const lessons = g.lessons.map((l, i) => {
      const rec = Progress.getLesson(g.id, i);
      const stars = rec ? rec.stars : 0;
      const notes = teachFor(g.id, i);
      // Lessons with teaching notes open the Learn step first; label the button for it.
      const cta = rec?.done ? i18n.t("world.review")
                : (notes && !Progress.wasTaught(g.id, i)) ? i18n.t("teach.learn")
                : i18n.t("lesson.start");
      return `
        <button class="lesson-card" data-i="${i}">
          <span class="lesson-num">${i + 1}</span>
          <span class="lesson-info">
            <span class="lesson-title">${i18n.meaning(l.title)}${
              notes ? ` <span class="lesson-badge" title="${i18n.t("teach.hasNotes")}">📖</span>` : ""}</span>
            <span class="stars">${"⭐".repeat(stars)}${"☆".repeat(3 - stars)}</span>
          </span>
          <span class="lesson-go">${cta}</span>
        </button>`;
    }).join("");

    app.innerHTML = `
      <section class="grade-head" style="--accent:${g.color}">
        <button class="back" id="back">←</button>
        <span class="grade-icon">${g.icon}</span>
        <div>
          <h2>${i18n.t("grade")} ${g.num}</h2>
          <p class="muted">${i18n.meaning(g.title)}</p>
        </div>
      </section>
      <section class="lessons">${lessons}</section>`;

    document.getElementById("back").onclick = () => this.home();
    app.querySelectorAll(".lesson-card").forEach(b => {
      b.onclick = () => this.openLesson(g, +b.dataset.i, gradeIdx);
    });
  },

  // Learn → Practice. Lessons without teaching notes go straight to the quiz.
  openLesson(g, lessonIdx, gradeIdx) {
    const exit = () => { this.grade(gradeIdx); this.refreshTopbar(); };
    // refresh first: reading the notes may have just awarded XP
    const practice = () => { this.refreshTopbar(); Game.start(g, lessonIdx, exit); };
    if (teachFor(g.id, lessonIdx)) Teach.start(g, lessonIdx, exit, practice);
    else practice();
  },

  // ---------- Account (optional; see js/account.js) ----------
  // Renders nothing at all when Supabase isn't configured, so an unconfigured copy of
  // the app looks and behaves exactly as it did before accounts existed.
  accountHTML() {
    if (typeof Account === "undefined" || !Account.available()) return "";

    if (Account.signedIn()) {
      return `
        <section class="account" id="account">
          <h3>${i18n.t("acct.title")}</h3>
          <p class="account-who">${i18n.t("acct.signedInAs")} <b>${Search.esc(Account.username || "")}</b></p>
          <p class="account-status muted" id="account-status">${i18n.t(Account.statusKey())}</p>
          <button class="btn btn-ghost" id="acct-signout">${i18n.t("acct.signOut")}</button>
        </section>`;
    }

    const mode = this._acctMode || "up";          // "up" = create, "in" = sign in
    return `
      <section class="account" id="account">
        <h3>${i18n.t("acct.title")}</h3>
        <p class="account-lead">${i18n.t("acct.guest")}</p>
        <p class="muted account-note">${i18n.t("acct.guestNote")}</p>
        <div class="account-form">
          <label class="account-label" for="acct-user">${i18n.t("acct.username")}</label>
          <input id="acct-user" class="account-input" type="text" autocomplete="username"
                 autocapitalize="off" spellcheck="false" maxlength="20">
          ${mode === "up" ? `<p class="account-hint muted">${i18n.t("acct.usernameHint")}</p>` : ""}
          <label class="account-label" for="acct-pass">${i18n.t("acct.password")}</label>
          <input id="acct-pass" class="account-input" type="password"
                 autocomplete="${mode === "up" ? "new-password" : "current-password"}">
          ${mode === "up" ? `<p class="account-warn">${i18n.t("acct.noRecovery")}</p>` : ""}
          <p class="account-error" id="acct-error" hidden></p>
          <button class="btn" id="acct-go">${i18n.t(mode === "up" ? "acct.signUp" : "acct.signIn")}</button>
          <button class="account-switch" id="acct-switch">
            ${i18n.t(mode === "up" ? "acct.haveAccount" : "acct.newAccount")}
          </button>
        </div>
      </section>`;
  },

  wireAccount() {
    if (typeof Account === "undefined" || !Account.available()) return;

    const out = document.getElementById("acct-signout");
    if (out) {
      out.onclick = async () => { await Account.signOut(); this.profile(); };
      return;
    }

    const go = document.getElementById("acct-go");
    const sw = document.getElementById("acct-switch");
    const err = document.getElementById("acct-error");
    const user = document.getElementById("acct-user");
    const pass = document.getElementById("acct-pass");
    if (!go) return;

    sw.onclick = () => { this._acctMode = this._acctMode === "in" ? "up" : "in"; this.profile(); };

    const submit = async () => {
      err.hidden = true;
      go.disabled = true;
      const label = go.textContent;
      go.textContent = i18n.t("acct.working");
      const mode = this._acctMode || "up";
      const res = mode === "up"
        ? await Account.signUp(user.value, pass.value)
        : await Account.signIn(user.value, pass.value);
      go.disabled = false;
      go.textContent = label;
      if (res.error) {
        err.textContent = i18n.t(res.error);
        err.hidden = false;
        if (res.detail) console.warn("[account]", res.detail);
        return;
      }
      this.refreshTopbar();
      this.profile();
    };

    go.onclick = submit;
    [user, pass].forEach(el => { el.onkeydown = e => { if (e.key === "Enter") submit(); }; });
  },

  refreshAccountStatus() {
    const el = document.getElementById("account-status");
    if (el && typeof Account !== "undefined" && Account.statusKey()) {
      el.textContent = i18n.t(Account.statusKey());
    }
  },

  // ---------- Profile ----------
  profile() {
    this.route = { name: "profile" };
    const app = document.getElementById("app");
    const rank = rankForLevel(Progress.level);
    app.innerHTML = `
      <section class="profile">
        <button class="back" id="back">←</button>
        <img src="assets/mascot.png" class="profile-mascot" alt="">
        <h2>${i18n.t("profile.title")}</h2>
        <p class="rank">${i18n.meaning(rank)}</p>
        <div class="profile-grid">
          <div class="pcard"><span class="num">${Progress.level}</span><span class="lbl">${i18n.t("profile.level")}</span></div>
          <div class="pcard"><span class="num">${Progress.data.xp}</span><span class="lbl">${i18n.t("profile.xp")}</span></div>
          <div class="pcard"><span class="num">${Progress.data.streak}</span><span class="lbl">${i18n.t("profile.streak")}</span></div>
          <div class="pcard"><span class="num">${Progress.totalLessonsDone()}</span><span class="lbl">${i18n.t("profile.lessons")}</span></div>
          <div class="pcard"><span class="num">${Progress.totalStars()}</span><span class="lbl">${i18n.t("profile.stars")}</span></div>
          <div class="pcard"><span class="num">${Progress.gradesComplete(grades)}/12</span><span class="lbl">${i18n.t("profile.grades")}</span></div>
        </div>
        ${this.accountHTML()}
        <button class="btn btn-ghost danger" id="reset">${i18n.t("profile.reset")}</button>
      </section>`;
    this.wireAccount();
    document.getElementById("back").onclick = () => this.home();
    document.getElementById("reset").onclick = () => {
      if (confirm(i18n.t("profile.resetConfirm"))) {
        Progress.reset();
        this.refreshTopbar();
        this.home();
      }
    };
  }
};

// profile entry via the level chip
document.addEventListener("DOMContentLoaded", () => {
  App.init();
  document.getElementById("stat-level").style.cursor = "pointer";
  document.getElementById("stat-level").onclick = () => App.profile();
});
