/* Persistent progress in localStorage: XP, level, streak, completed lessons + stars. */
const Progress = {
  KEY: "mboehara.progress.v1",
  data: null,

  load() {
    try { this.data = JSON.parse(localStorage.getItem(this.KEY)); } catch (e) { this.data = null; }
    if (!this.data) {
      this.data = this._blank();
    }
    // `taught` was added after v1 shipped — fill it in for older saves instead of
    // bumping the storage key, so nobody loses their XP over a new field.
    if (!this.data.taught) this.data.taught = {};
    this._touchStreak();
    return this.data;
  },

  _blank() { return { xp: 0, lessons: {}, taught: {}, streak: 0, lastDay: null }; },

  save() { localStorage.setItem(this.KEY, JSON.stringify(this.data)); },

  reset() {
    this.data = this._blank();
    this.save();
  },

  _today() { return new Date().toISOString().slice(0, 10); },

  _touchStreak() {
    // Initialize streak day on first ever load without breaking it.
    if (this.data.lastDay === null) { return; }
  },

  // Call when a lesson is completed (counts as activity today).
  markActivity() {
    const today = this._today();
    if (this.data.lastDay === today) return;
    const yesterday = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
    this.data.streak = (this.data.lastDay === yesterday) ? this.data.streak + 1 : 1;
    this.data.lastDay = today;
    this.save();
  },

  // ----- XP & level -----
  addXp(n) { this.data.xp += n; this.save(); },
  get level() { return Math.floor(this.data.xp / 100) + 1; },
  get xpInLevel() { return this.data.xp % 100; },

  // ----- lessons -----
  lessonId(gradeId, lessonIdx) { return gradeId + ":" + lessonIdx; },

  getLesson(gradeId, lessonIdx) {
    return this.data.lessons[this.lessonId(gradeId, lessonIdx)] || null;
  },

  // ----- Learn step: has the student read this lesson's notes at least once? -----
  wasTaught(gradeId, lessonIdx) {
    return !!(this.data.taught && this.data.taught[this.lessonId(gradeId, lessonIdx)]);
  },

  markTaught(gradeId, lessonIdx) {
    if (!this.data.taught) this.data.taught = {};
    if (this.data.taught[this.lessonId(gradeId, lessonIdx)]) return;
    this.data.taught[this.lessonId(gradeId, lessonIdx)] = true;
    this.addXp(5); // small reward for reading the lesson — once per lesson
    this.save();
  },

  // record best stars for a lesson (1-3)
  completeLesson(gradeId, lessonIdx, stars) {
    const id = this.lessonId(gradeId, lessonIdx);
    const prev = this.data.lessons[id];
    if (!prev || stars > prev.stars) {
      this.data.lessons[id] = { stars, done: true };
    }
    this.markActivity();
    this.save();
  },

  // fraction (0-1) of a grade's lessons completed
  gradeProgress(grade) {
    const total = grade.lessons.length;
    let done = 0;
    grade.lessons.forEach((_, i) => { if (this.getLesson(grade.id, i)?.done) done++; });
    return total ? done / total : 0;
  },

  gradeDone(grade) { return this.gradeProgress(grade) >= 1; },

  // a grade unlocks when the previous grade reaches the threshold (or it's the first)
  gradeUnlocked(grades, index, threshold = 0.6) {
    if (index === 0) return true;
    return this.gradeProgress(grades[index - 1]) >= threshold;
  },

  totalLessonsDone() { return Object.values(this.data.lessons).filter(l => l.done).length; },
  totalStars() { return Object.values(this.data.lessons).reduce((a, l) => a + (l.stars || 0), 0); },
  gradesComplete(grades) { return grades.filter(g => this.gradeDone(g)).length; },

  // ---------- account sync ----------
  // Fold a remote save into the local one. Signing in must never cost somebody the
  // lessons they did as a guest, and syncing twice must not change the answer, so
  // every field merges by "keep the better of the two" rather than by overwriting.
  merge(remote) {
    if (!remote || typeof remote !== "object") return this.data;
    const a = this.data, b = remote;

    a.xp     = Math.max(a.xp || 0, b.xp || 0);
    a.streak = Math.max(a.streak || 0, b.streak || 0);
    // ISO yyyy-mm-dd sorts lexically, so the later string is the later day
    if (b.lastDay && (!a.lastDay || b.lastDay > a.lastDay)) a.lastDay = b.lastDay;

    Object.entries(b.lessons || {}).forEach(([id, r]) => {
      const mine = a.lessons[id];
      a.lessons[id] = mine
        ? { done: !!(mine.done || r.done), stars: Math.max(mine.stars || 0, r.stars || 0) }
        : { done: !!r.done, stars: r.stars || 0 };
    });

    Object.keys(b.taught || {}).forEach(id => { if (b.taught[id]) a.taught[id] = true; });

    this.save();
    return a;
  },

  // A plain snapshot to hand to the server.
  snapshot() { return JSON.parse(JSON.stringify(this.data)); },

  // Replace local state wholesale (used when switching accounts, never on sign-in).
  replace(data) {
    this.data = data && typeof data === "object" ? data : this._blank();
    if (!this.data.lessons) this.data.lessons = {};
    if (!this.data.taught) this.data.taught = {};
    this.save();
    return this.data;
  }
};
