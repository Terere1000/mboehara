/* Learn step: the teaching half of a lesson, shown before the quiz.

   Teach.start(grade, lessonIdx, onExit, onPractice) walks the student through a few
   short pages built from TEACH (js/data/teach.js) plus the lesson's own vocab:

     1. Concept       — what this lesson is about, in plain language + key points
     2. Vocab (×n)    — word cards with the written pronunciation guide
     3. Examples      — the words used in real sentences
     4. Culture       — a "did you know" note, ending in the Practice button

   Lessons with no TEACH entry never reach here — app.js sends them straight to Game. */

const Teach = {
  PER_PAGE: 3, // vocab cards per page

  start(grade, lessonIdx, onExit, onPractice) {
    const lesson = grade.lessons[lessonIdx];
    const notes = teachFor(grade.id, lessonIdx);
    if (!notes) return onPractice();

    this.state = {
      grade, lessonIdx, lesson, notes, onExit, onPractice,
      seen: Progress.wasTaught(grade.id, lessonIdx),
      pages: this._pages(lesson, notes),
      step: 0
    };
    this.render();
  },

  _pages(lesson, notes) {
    const pages = [{ t: "concept" }];
    const vocab = lesson.vocab || [];
    for (let i = 0; i < vocab.length; i += this.PER_PAGE) {
      pages.push({ t: "vocab", from: i, words: vocab.slice(i, i + this.PER_PAGE) });
    }
    if (notes.examples && notes.examples.length) pages.push({ t: "examples" });
    if (notes.culture) pages.push({ t: "culture" });
    return pages;
  },

  _esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;"); },

  // Punctuation makes the phonetic guide unreadable in full sentences — strip it first.
  _plain(s) { return String(s).replace(/[—–\-,.?!¿¡:;«»"]/g, " ").replace(/\s+/g, " ").trim(); },

  // ---------- shell ----------
  render() {
    const s = this.state;
    const app = document.getElementById("app");
    const last = s.step === s.pages.length - 1;
    const progress = Math.round(((s.step + 1) / s.pages.length) * 100);

    app.innerHTML = `
      <section class="teach" style="--accent:${s.grade.color}">
        <div class="lesson-top">
          <button class="icon-btn" id="teach-quit" aria-label="${i18n.t("teach.quit")}">✕</button>
          <div class="progressbar teach-bar"><div class="progressbar-fill" style="width:${progress}%"></div></div>
          <span class="teach-count">${s.step + 1}/${s.pages.length}</span>
        </div>
        <p class="teach-kicker">${i18n.t("grade")} ${s.grade.num} · ${i18n.t("teach.badge")}</p>
        <h2 class="teach-title">${i18n.meaning(s.lesson.title)}</h2>
        <div class="teach-body" id="teach-body"></div>
        <div class="teach-actions">
          <button class="btn btn-ghost" id="teach-back" ${s.step === 0 ? "disabled" : ""}>${i18n.t("teach.back")}</button>
          <button class="btn btn-primary" id="teach-next">${last ? i18n.t("teach.practice") : i18n.t("teach.next")}</button>
        </div>
      </section>`;

    this["page_" + s.pages[s.step].t](s.pages[s.step]);

    document.getElementById("teach-quit").onclick = () => s.onExit();
    document.getElementById("teach-back").onclick = () => { if (s.step > 0) { s.step--; this.render(); } };
    document.getElementById("teach-next").onclick = () => {
      if (last) return this.toPractice();
      s.step++;
      this.render();
      window.scrollTo(0, 0);
    };
  },

  toPractice() {
    const s = this.state;
    Progress.markTaught(s.grade.id, s.lessonIdx);
    s.onPractice();
  },

  // ---------- pages ----------
  page_concept() {
    const s = this.state, n = s.notes;
    const box = document.getElementById("teach-body");
    const paras = (n.intro || []).map(p => `<p class="teach-p">${i18n.meaning(p)}</p>`).join("");
    const points = (n.points || []).length
      ? `<ul class="teach-points">${n.points.map(p => `<li>${i18n.meaning(p)}</li>`).join("")}</ul>`
      : "";
    const skip = s.seen
      ? `<button class="teach-skip" id="teach-skip">${i18n.t("teach.skip")} →</button>`
      : "";

    box.innerHTML = `
      ${n.focus ? `<p class="teach-focus">${i18n.meaning(n.focus)}</p>` : ""}
      ${paras}
      ${points ? `<h3 class="teach-h3">${i18n.t("teach.keyPoints")}</h3>${points}` : ""}
      ${skip}`;

    if (s.seen) document.getElementById("teach-skip").onclick = () => this.toPractice();
  },

  page_vocab(page) {
    const s = this.state;
    const box = document.getElementById("teach-body");
    const cards = page.words.map(w => {
      return `
        <article class="teach-word">
          <p class="teach-gn">${this._esc(w.gn)}</p>
          <p class="teach-pron">${Pron.guide(w.gn)}</p>
          <p class="teach-mean">${this._esc(i18n.meaning(w))}</p>
        </article>`;
    }).join("");

    box.innerHTML = `
      <h3 class="teach-h3">${i18n.t("teach.newWords")}</h3>
      <div class="teach-words">${cards}</div>
      <p class="teach-note muted">${i18n.t("expr.pronNote")}</p>`;
  },

  page_examples() {
    const s = this.state;
    const box = document.getElementById("teach-body");
    const rows = s.notes.examples.map(ex => `
      <article class="teach-ex">
        <p class="teach-ex-gn">${this._esc(ex.gn)}</p>
        <p class="teach-pron">${Pron.guide(this._plain(ex.gn))}</p>
        <p class="teach-mean">${this._esc(i18n.meaning(ex))}</p>
      </article>`).join("");

    box.innerHTML = `
      <h3 class="teach-h3">${i18n.t("teach.examples")}</h3>
      <div class="teach-exs">${rows}</div>`;
  },

  page_culture() {
    const c = this.state.notes.culture;
    const box = document.getElementById("teach-body");
    box.innerHTML = `
      <div class="teach-culture">
        <span class="teach-culture-icon">🇵🇾</span>
        <div>
          <h3 class="teach-culture-title">${i18n.meaning(c.title)}</h3>
          <p class="teach-p">${i18n.meaning(c.body)}</p>
        </div>
      </div>
      <div class="teach-ready">
        <img src="assets/mascot.png" class="teach-mascot" alt="">
        <p>${i18n.t("teach.ready")}</p>
      </div>`;
  }
};
