/* Site-wide dictionary search: one box that looks up any word, expression or lesson.

   The whole corpus (255 vocab entries, 200 expressions, 45 lessons) is already in memory
   from js/data/*.js, so this needs no index file, no network and no build step — it just
   flattens those globals once on first use.

   Folding is the part that matters. Guaraní writes nasal vowels (ã ẽ ĩ õ ũ ỹ), ñ and the
   puso (') as distinct letters, but almost nobody typing into a search box has them on the
   keyboard. So queries and haystacks are both folded to plain ASCII: "nande" finds "Ñande",
   "mbaeichapa" finds "Mba'éichapa". Folding is for MATCHING ONLY — every result is rendered
   with its true spelling. */

const Search = {
  MAX: 24,

  // ---------- normalization ----------
  // NFD splits "ã" into "a" + combining tilde; stripping the marks leaves bare letters.
  // The puso and typographic apostrophes are dropped so word-shape is all that's left.
  fold(s) {
    return (s || "")
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/['’ʼ`´]/g, "")
      .toLowerCase()
      .trim();
  },

  // ---------- index ----------
  build() {
    if (this._index) return this._index;
    const out = [];

    grades.forEach((g, gradeIdx) => {
      g.lessons.forEach((l, lessonIdx) => {
        const notes = typeof teachFor === "function" ? teachFor(g.id, lessonIdx) : null;

        // the lesson itself — so "colores" or "numbers" finds the lesson, not just words
        out.push({
          kind: "lesson", gradeIdx, lessonIdx,
          gn: l.title.es,          // stable fallback; display goes through label()
          title: l.title,          // the {es,en} pair — resolved per render
          focus: notes ? notes.focus : null,
          fields: [l.title.es, l.title.en, g.title.es, g.title.en,
                   notes && notes.focus ? notes.focus.es : "",
                   notes && notes.focus ? notes.focus.en : ""],
          // The lesson prose is searched too (so "jaguarete" finds the culture note that
          // explains it), but scored low — a headword must always outrank body text.
          prose: notes ? [
            ...notes.intro.flatMap(x => [x.es, x.en]),
            ...notes.points.flatMap(x => [x.es, x.en]),
            ...(notes.examples || []).flatMap(x => [x.gn, x.es, x.en]),
            notes.culture ? notes.culture.title.es : "", notes.culture ? notes.culture.title.en : "",
            notes.culture ? notes.culture.body.es : "", notes.culture ? notes.culture.body.en : ""
          ] : []
        });

        l.vocab.forEach(v => out.push({
          kind: "vocab", gradeIdx, lessonIdx,
          gn: v.gn, es: v.es, en: v.en,
          fields: [v.gn, v.es, v.en]
        }));
      });
    });

    EXPRESSIONS.forEach(e => out.push({
      kind: "expr",
      gn: e.guarani, es: e.spanish, en: e.english,
      cat: e.category, pron: e.pron,
      fields: [e.guarani, e.spanish, e.english]
    }));

    // pre-fold once; querying then costs nothing but string compares
    out.forEach(r => {
      r._f = r.fields.map(f => this.fold(f)).filter(Boolean);
      r._lo = r._f.length;                                   // prose begins here
      (r.prose || []).forEach(f => { const g = this.fold(f); if (g) r._f.push(g); });
    });
    this._index = out;
    return out;
  },

  // ---------- scoring ----------
  // Guaraní field (index 0) outranks the glosses: someone who types a Guaraní word wants
  // that headword first, not every entry whose Spanish translation happens to contain it.
  _score(rec, q) {
    let best = 0;
    for (let i = 0; i < rec._f.length; i++) {
      const hay = rec._f[i];
      let s = 0;
      if (hay === q) s = 100;
      else if (hay.startsWith(q)) s = 70;
      else if (new RegExp("\\b" + q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).test(hay)) s = 50;
      else if (hay.includes(q)) s = 30;
      if (!s) continue;
      if (i >= rec._lo) s = Math.min(s, 20);    // prose match: findable, never top-ranked
      else if (i === 0) s += 8;                 // Guaraní headword bonus
      s -= Math.min(6, hay.length / 12);        // prefer tight matches over long sentences
      if (s > best) best = s;
    }
    return best;
  },

  query(raw) {
    const q = this.fold(raw);
    if (!q) return [];
    const hits = [];
    for (const rec of this.build()) {
      // A one-letter query is a word, not a prefix sweep: "y" means water, not every
      // entry containing a y. Match the Guaraní headword only.
      const s = q.length === 1
        ? (rec._f[0] === q ? 100 : 0)
        : this._score(rec, q);
      if (s > 0) hits.push({ rec, s });
    }
    hits.sort((a, b) => b.s - a.s || a.rec.gn.length - b.rec.gn.length);
    return hits.slice(0, this.MAX).map(h => h.rec);
  },

  // words taught alongside this one — the "related content" half of a definition
  related(rec, limit = 6) {
    if (rec.gradeIdx == null) {
      return EXPRESSIONS.filter(e => e.category === rec.cat && e.guarani !== rec.gn)
        .slice(0, limit)
        .map(e => ({ kind: "expr", gn: e.guarani, es: e.spanish, en: e.english,
                     cat: e.category, pron: e.pron, fields: [] }));
    }
    const lesson = grades[rec.gradeIdx].lessons[rec.lessonIdx];
    return lesson.vocab.filter(v => v.gn !== rec.gn).slice(0, limit)
      .map(v => ({ kind: "vocab", gradeIdx: rec.gradeIdx, lessonIdx: rec.lessonIdx,
                   gn: v.gn, es: v.es, en: v.en, fields: [] }));
  },

  // ---------- UI ----------
  esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g,
      c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  },

  // Guaraní headwords are language-independent; lesson titles are not.
  label(rec) { return rec.title ? i18n.meaning(rec.title) : rec.gn; },

  meaning(rec) {
    const m = i18n.lang === "en" ? (rec.en || rec.es) : (rec.es || rec.en);
    return m || "";
  },

  mount() {
    if (document.getElementById("search-panel")) return;

    document.getElementById("search-open").onclick = () => this.open();

    const panel = document.createElement("div");
    panel.id = "search-panel";
    panel.className = "search-panel";
    panel.hidden = true;
    panel.innerHTML = `
      <div class="search-sheet" role="dialog" aria-modal="true" aria-label="${this.esc(i18n.t("search.title"))}">
        <div class="search-bar">
          <span class="search-icon" aria-hidden="true">🔎</span>
          <input type="search" id="search-input" autocomplete="off" autocapitalize="off"
                 spellcheck="false" placeholder="${this.esc(i18n.t("search.placeholder"))}"
                 aria-label="${this.esc(i18n.t("search.placeholder"))}">
          <button class="search-close" id="search-close" aria-label="${this.esc(i18n.t("search.close"))}">✕</button>
        </div>
        <div class="search-body" id="search-body"></div>
      </div>`;
    document.body.appendChild(panel);

    panel.addEventListener("mousedown", e => { if (e.target === panel) this.close(); });
    document.getElementById("search-close").onclick = () => this.close();

    const input = document.getElementById("search-input");
    input.addEventListener("input", () => this.render(input.value));
    input.addEventListener("keydown", e => {
      if (e.key === "Escape") { this.close(); return; }
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        this._move(e.key === "ArrowDown" ? 1 : -1);
      } else if (e.key === "Enter") {
        const active = document.querySelector(".search-hit.active");
        if (active) { e.preventDefault(); active.click(); }
      }
    });

    // "/" anywhere, or Ctrl/Cmd-K, opens search — standard, and cheap to support
    document.addEventListener("keydown", e => {
      const typing = /^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName);
      if ((e.key === "/" && !typing) || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k")) {
        e.preventDefault();
        this.open();
      }
    });
  },

  open() {
    const panel = document.getElementById("search-panel");
    if (!panel) return;
    panel.hidden = false;
    document.body.classList.add("search-lock");
    const input = document.getElementById("search-input");
    input.placeholder = i18n.t("search.placeholder");
    input.focus();
    input.select();
    this.render(input.value);
  },

  close() {
    const panel = document.getElementById("search-panel");
    if (!panel) return;
    panel.hidden = true;
    document.body.classList.remove("search-lock");
  },

  _move(dir) {
    const hits = [...document.querySelectorAll(".search-hit")];
    if (!hits.length) return;
    const cur = hits.findIndex(h => h.classList.contains("active"));
    const next = cur < 0 ? (dir > 0 ? 0 : hits.length - 1)
                         : (cur + dir + hits.length) % hits.length;
    hits.forEach(h => h.classList.remove("active"));
    hits[next].classList.add("active");
    hits[next].scrollIntoView({ block: "nearest" });
  },

  badge(rec) {
    if (rec.kind === "expr") return i18n.t("search.kind.expr");
    if (rec.kind === "lesson") return i18n.t("search.kind.lesson");
    return i18n.t("grade") + " " + grades[rec.gradeIdx].num;
  },

  hitHTML(rec, i) {
    const pron = rec.kind === "lesson" || typeof Pron === "undefined"
      ? "" : `<span class="search-hit-pron">${this.esc(Pron.guide(rec.gn, rec.pron))}</span>`;
    const sub = rec.kind === "lesson"
      ? (rec.focus ? this.esc(i18n.meaning(rec.focus)) : "")
      : this.esc(this.meaning(rec));
    return `
      <button class="search-hit" data-i="${i}">
        <span class="search-hit-main">
          <span class="search-hit-gn">${this.esc(this.label(rec))}</span>
          ${pron}
          <span class="search-hit-es">${sub}</span>
        </span>
        <span class="search-hit-badge">${this.esc(this.badge(rec))}</span>
      </button>`;
  },

  render(raw) {
    const body = document.getElementById("search-body");
    const q = (raw || "").trim();

    if (!this.fold(q)) {
      body.innerHTML = `<p class="search-hint muted">${this.esc(i18n.t("search.hint"))}</p>`;
      return;
    }

    this._hits = this.query(q);
    if (!this._hits.length) {
      body.innerHTML = `<p class="search-hint muted">${this.esc(i18n.t("search.none"))} “${this.esc(q)}”</p>`;
      return;
    }

    body.innerHTML =
      `<p class="search-count muted">${this._hits.length}${this._hits.length === this.MAX ? "+" : ""} ${this.esc(i18n.t("search.results"))}</p>` +
      `<div class="search-hits">${this._hits.map((r, i) => this.hitHTML(r, i)).join("")}</div>`;

    body.querySelectorAll(".search-hit").forEach(b => {
      b.onclick = () => this.detail(this._hits[+b.dataset.i]);
    });
  },

  // A definition card: the word, how to say it, what it means, where it's taught,
  // and the words it's taught with.
  detail(rec) {
    const body = document.getElementById("search-body");
    const rel = this.related(rec);
    const where = rec.gradeIdx != null
      ? `${i18n.t("grade")} ${grades[rec.gradeIdx].num} · ${this.esc(i18n.meaning(grades[rec.gradeIdx].lessons[rec.lessonIdx].title))}`
      : (rec.cat || "");

    const other = i18n.lang === "en" ? rec.es : rec.en;
    const pron = rec.kind === "lesson" || typeof Pron === "undefined"
      ? "" : `<p class="search-def-pron">${this.esc(Pron.guide(rec.gn, rec.pron))}</p>`;

    body.innerHTML = `
      <button class="search-back" id="search-back">← ${this.esc(i18n.t("search.backToResults"))}</button>
      <article class="search-def">
        <p class="search-def-gn">${this.esc(this.label(rec))}</p>
        ${pron}
        <p class="search-def-es">${this.esc(this.meaning(rec))}</p>
        ${other ? `<p class="search-def-alt muted">${this.esc(other)}</p>` : ""}
        <p class="search-def-where muted">${where}</p>
        ${rec.kind === "lesson" || rec.gradeIdx != null
          ? `<button class="btn search-def-go" id="search-go">${this.esc(i18n.t("search.openLesson"))} →</button>`
          : `<button class="btn search-def-go" id="search-go">${this.esc(i18n.t("search.openExpr"))} →</button>`}
        ${rel.length ? `
          <h4 class="search-rel-head">${this.esc(i18n.t("search.related"))}</h4>
          <div class="search-rel">
            ${rel.map((r, i) => `
              <button class="search-rel-item" data-i="${i}">
                <span class="search-rel-gn">${this.esc(r.gn)}</span>
                <span class="search-rel-es">${this.esc(this.meaning(r))}</span>
              </button>`).join("")}
          </div>` : ""}
      </article>`;

    document.getElementById("search-back").onclick = () =>
      this.render(document.getElementById("search-input").value);

    document.getElementById("search-go").onclick = () => this.go(rec);

    body.querySelectorAll(".search-rel-item").forEach(b => {
      b.onclick = () => this.detail(rel[+b.dataset.i]);
    });
  },

  // Like App.openFromLink(), a search result opens its lesson regardless of grade locks:
  // the learner asked for this word by name.
  go(rec) {
    this.close();
    if (rec.gradeIdx != null) {
      const g = grades[rec.gradeIdx];
      App.grade(rec.gradeIdx);
      App.openLesson(g, rec.lessonIdx, rec.gradeIdx);
    } else {
      App._expr = { cat: "*", q: rec.gn };
      App.expressions();
    }
  }
};
