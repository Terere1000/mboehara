/* Lesson engine: builds varied exercises from a lesson's vocab list, then runs the
   lesson loop (hearts, scoring, stars). UI rendering helpers live here; app.js wires
   navigation. Exercise types: multiple choice (both directions), build-the-word,
   true/false, and a matching round. */

const Game = {
  HEARTS: 5,

  // ---------- exercise generation ----------
  shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  },

  pick(arr, n, exclude) {
    return this.shuffle(arr.filter(x => x !== exclude)).slice(0, n);
  },

  // Build a list of exercises from a lesson's vocab.
  build(lesson) {
    const vocab = lesson.vocab;
    const ex = [];
    const pool = this.shuffle(vocab);

    pool.forEach((word, i) => {
      const roll = i % 4;
      if (roll === 0 && vocab.length >= 4) {
        ex.push({ t: "mc", dir: "toGn", word, options: this._mcOptions(vocab, word, "gn") });
      } else if (roll === 1 && vocab.length >= 4) {
        ex.push({ t: "mc", dir: "fromGn", word, options: this._mcOptions(vocab, word, "meaning") });
      } else if (roll === 2 && word.gn.replace(/\s/g, "").length >= 3 && word.gn.length <= 14) {
        ex.push({ t: "build", word });
      } else {
        // true/false: sometimes show a wrong meaning
        const correct = Math.random() > 0.45;
        const shown = correct ? word : this.pick(vocab, 1, word)[0] || word;
        ex.push({ t: "tf", word, shown, correct });
      }
    });

    // One matching round if there's enough vocab.
    if (vocab.length >= 4) {
      ex.splice(Math.min(2, ex.length), 0, { t: "match", pairs: this.pick(vocab, Math.min(4, vocab.length)) });
    }
    return ex;
  },

  _mcOptions(vocab, word, kind) {
    const distractors = this.pick(vocab, 3, word);
    const opts = this.shuffle([word, ...distractors]);
    return opts.map(w => ({ word: w, label: kind === "gn" ? w.gn : i18n.meaning(w) }));
  },

  // ---------- lesson runner ----------
  start(grade, lessonIdx, onExit) {
    const lesson = grade.lessons[lessonIdx];
    this.state = {
      grade, lessonIdx, lesson, onExit,
      exercises: this.build(lesson),
      step: 0, hearts: this.HEARTS, correct: 0, total: 0, answered: false
    };
    this.renderStep();
  },

  renderStep() {
    const s = this.state;
    const app = document.getElementById("app");
    if (s.step >= s.exercises.length) return this.finish(true);

    const ex = s.exercises[s.step];
    const progress = Math.round((s.step / s.exercises.length) * 100);
    s.answered = false;

    app.innerHTML = `
      <section class="lesson">
        <div class="lesson-top">
          <button class="icon-btn" id="lesson-quit" aria-label="quit">✕</button>
          <div class="progressbar"><div class="progressbar-fill" style="width:${progress}%"></div></div>
          <div class="hearts">${"❤️".repeat(s.hearts)}${"🤍".repeat(this.HEARTS - s.hearts)}</div>
        </div>
        <div class="exercise" id="exercise"></div>
        <div class="feedback" id="feedback"></div>
        <div class="lesson-actions">
          <button class="btn btn-primary" id="lesson-check" disabled>${i18n.t("btn.check")}</button>
        </div>
      </section>`;

    document.getElementById("lesson-quit").onclick = () => s.onExit();
    this["render_" + ex.t](ex);
  },

  // ----- renderers per type -----
  render_mc(ex) {
    const box = document.getElementById("exercise");
    const ask = ex.dir === "toGn" ? i18n.t("ask.translateToGn") : i18n.t("ask.translateFromGn");
    const prompt = ex.dir === "toGn" ? i18n.meaning(ex.word) : ex.word.gn;
    box.innerHTML = `
      <p class="ask">${ask}</p>
      <p class="prompt-word">${prompt}</p>
      <div class="options">${ex.options.map((o, i) =>
        `<button class="option" data-i="${i}">${o.label}</button>`).join("")}</div>`;
    let chosen = null;
    box.querySelectorAll(".option").forEach(btn => {
      btn.onclick = () => {
        if (this.state.answered) return;
        box.querySelectorAll(".option").forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
        chosen = ex.options[+btn.dataset.i];
        this._enableCheck(() => this._gradeChoice(chosen.word === ex.word, ex.word));
      };
    });
  },

  render_tf(ex) {
    const box = document.getElementById("exercise");
    box.innerHTML = `
      <p class="ask">${i18n.t("ask.trueFalse")}</p>
      <p class="prompt-word">${ex.word.gn}</p>
      <p class="prompt-sub">= ${i18n.meaning(ex.shown)}</p>
      <div class="options options-tf">
        <button class="option" data-v="true">✅ ${i18n.t("tf.true")}</button>
        <button class="option" data-v="false">❌ ${i18n.t("tf.false")}</button>
      </div>`;
    let chosen = null;
    box.querySelectorAll(".option").forEach(btn => {
      btn.onclick = () => {
        if (this.state.answered) return;
        box.querySelectorAll(".option").forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
        chosen = btn.dataset.v === "true";
        this._enableCheck(() => this._gradeChoice(chosen === ex.correct, ex.word));
      };
    });
  },

  render_build(ex) {
    const box = document.getElementById("exercise");
    const letters = this.shuffle(ex.word.gn.split(""));
    box.innerHTML = `
      <p class="ask">${i18n.t("ask.buildWord")}</p>
      <p class="prompt-word">${i18n.meaning(ex.word)}</p>
      <div class="build-slot" id="build-slot"></div>
      <div class="build-bank" id="build-bank">${letters.map((c, i) =>
        `<button class="tile" data-i="${i}">${c === " " ? "␣" : c}</button>`).join("")}</div>
      <button class="btn btn-ghost" id="build-clear">${i18n.t("btn.clear")}</button>`;
    const slot = box.querySelector("#build-slot");
    let current = "";
    const refresh = () => {
      slot.textContent = current;
      this._enableCheck(() => this._gradeChoice(current.trim() === ex.word.gn.trim(), ex.word));
    };
    box.querySelectorAll(".tile").forEach(t => {
      t.onclick = () => {
        if (this.state.answered) return;
        t.disabled = true;
        current += (t.textContent === "␣" ? " " : t.textContent);
        refresh();
      };
    });
    box.querySelector("#build-clear").onclick = () => {
      if (this.state.answered) return;
      current = "";
      box.querySelectorAll(".tile").forEach(t => t.disabled = false);
      refresh();
    };
  },

  render_match(ex) {
    const box = document.getElementById("exercise");
    const left = this.shuffle(ex.pairs);
    const right = this.shuffle(ex.pairs);
    box.innerHTML = `
      <p class="ask">${i18n.t("ask.matchPairs")}</p>
      <div class="match">
        <div class="match-col" id="match-left">${left.map(w =>
          `<button class="match-item" data-gn="${w.gn}">${w.gn}</button>`).join("")}</div>
        <div class="match-col" id="match-right">${right.map(w =>
          `<button class="match-item" data-gn="${w.gn}">${i18n.meaning(w)}</button>`).join("")}</div>
      </div>`;
    let selLeft = null, matched = 0, wrongOnce = false;
    const total = ex.pairs.length;
    const clear = sel => sel && sel.classList.remove("selected");
    box.querySelectorAll("#match-left .match-item").forEach(b => {
      b.onclick = () => {
        if (b.classList.contains("done")) return;
        clear(selLeft); selLeft = b; b.classList.add("selected");
      };
    });
    box.querySelectorAll("#match-right .match-item").forEach(b => {
      b.onclick = () => {
        if (!selLeft || b.classList.contains("done")) return;
        if (selLeft.dataset.gn === b.dataset.gn) {
          selLeft.classList.add("done"); b.classList.add("done");
          selLeft.classList.remove("selected"); selLeft = null; matched++;
          if (matched === total) this._gradeChoice(!wrongOnce, null, true);
        } else {
          wrongOnce = true;
          b.classList.add("shake");
          setTimeout(() => b.classList.remove("shake"), 400);
          clear(selLeft); selLeft = null;
        }
      };
    });
    // matching has no Check button; it auto-completes
    document.getElementById("lesson-check").style.display = "none";
  },

  // ----- grading & flow -----
  _enableCheck(graderFn) {
    const btn = document.getElementById("lesson-check");
    btn.disabled = false;
    btn.onclick = () => { if (!this.state.answered) graderFn(); };
  },

  _gradeChoice(isRight, word, auto) {
    const s = this.state;
    s.answered = true;
    s.total++;
    const fb = document.getElementById("feedback");
    const btn = document.getElementById("lesson-check");

    if (isRight) {
      s.correct++;
      Progress.addXp(10);
      fb.className = "feedback show ok";
      fb.innerHTML = `<img src="assets/mascot.svg" class="fb-mascot happy" alt=""><span>${i18n.t("fb.correct")}</span>`;
    } else {
      s.hearts--;
      fb.className = "feedback show bad";
      const ans = word ? `<b>${word.gn}</b> — ${i18n.meaning(word)}` : "";
      fb.innerHTML = `<img src="assets/mascot.svg" class="fb-mascot sad" alt=""><span>${i18n.t("fb.wrong")} ${ans}</span>`;
    }

    if (btn) {
      btn.style.display = "";
      btn.disabled = false;
      btn.textContent = i18n.t("btn.continue");
      btn.classList.add(isRight ? "btn-ok" : "btn-bad");
      btn.onclick = () => this._next();
    }
    if (s.hearts <= 0) setTimeout(() => this.finish(false), 700);
    if (auto && btn) { /* matching: still requires Continue tap */ }
  },

  _next() {
    this.state.step++;
    this.renderStep();
  },

  finish(passed) {
    const s = this.state;
    const app = document.getElementById("app");
    const accuracy = s.total ? Math.round((s.correct / s.total) * 100) : 0;

    if (!passed) {
      app.innerHTML = `
        <section class="complete fail">
          <img src="assets/mascot.svg" class="complete-mascot sad" alt="">
          <h2>${i18n.t("complete.failTitle")}</h2>
          <div class="complete-actions">
            <button class="btn btn-primary" id="retry">${i18n.t("complete.retry")}</button>
            <button class="btn btn-ghost" id="back">${i18n.t("complete.back")}</button>
          </div>
        </section>`;
      document.getElementById("retry").onclick = () => this.start(s.grade, s.lessonIdx, s.onExit);
      document.getElementById("back").onclick = () => s.onExit();
      return;
    }

    const stars = accuracy >= 90 ? 3 : accuracy >= 70 ? 2 : 1;
    const bonus = 20 + stars * 10;
    Progress.addXp(bonus);
    Progress.completeLesson(s.grade.id, s.lessonIdx, stars);

    app.innerHTML = `
      <section class="complete">
        <img src="assets/mascot.svg" class="complete-mascot happy" alt="">
        <h2>${i18n.t("complete.title")}</h2>
        <div class="stars big">${"⭐".repeat(stars)}${"☆".repeat(3 - stars)}</div>
        <div class="complete-stats">
          <div><span class="num">+${s.correct * 10 + bonus}</span><span class="lbl">${i18n.t("complete.xp")}</span></div>
          <div><span class="num">${accuracy}%</span><span class="lbl">${i18n.t("complete.accuracy")}</span></div>
        </div>
        <button class="btn btn-primary" id="cont">${i18n.t("complete.continue")}</button>
      </section>`;
    document.getElementById("cont").onclick = () => s.onExit();
  }
};
