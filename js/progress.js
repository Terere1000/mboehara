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
  gradesComplete(grades) { return grades.filter(g => this.gradeDone(g)).length; }
};
