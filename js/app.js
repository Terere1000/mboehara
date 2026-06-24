/* App shell: top-bar stats, language toggle, and the three screens —
   Home (world map), Grade (lesson list), Profile. The lesson player lives in game.js. */

const App = {
  init() {
    Progress.load();
    Speech.init();
    i18n.apply();

    document.getElementById("brand-home").onclick = () => this.home();
    document.getElementById("lang-toggle").onclick = () => {
      i18n.toggle();
      i18n.apply();
      this.refreshTopbar();
      this.rerender();
    };
    this.route = { name: "home" };
    this.refreshTopbar();
    this.home();
  },

  refreshTopbar() {
    document.querySelector("#stat-streak b").textContent = Progress.data.streak;
    document.querySelector("#stat-xp b").textContent = Progress.data.xp;
    const rank = rankForLevel(Progress.level);
    document.getElementById("stat-level").textContent = "Lv " + Progress.level + " · " + i18n.meaning(rank);
    document.getElementById("lang-toggle").textContent = i18n.lang === "es" ? "EN" : "ES";
  },

  rerender() {
    if (this.route.name === "home") this.home();
    else if (this.route.name === "grade") this.grade(this.route.gradeIdx);
    else if (this.route.name === "profile") this.profile();
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
        <img src="assets/mascot.svg" class="hero-mascot" alt="Jasy Jateré">
        <div class="hero-text">
          <h1>Mbo'ehára</h1>
          <p data-i18n="hero.tagline">${i18n.t("hero.tagline")}</p>
        </div>
      </section>
      <section class="path-head">
        <h2>${i18n.t("home.path")}</h2>
        <p class="muted">${i18n.t("home.pathSub")}</p>
      </section>
      <section class="worlds">${cards}</section>`;

    app.querySelectorAll(".world:not(.locked)").forEach(b => {
      b.onclick = () => this.grade(+b.dataset.i);
    });
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
      return `
        <button class="lesson-card" data-i="${i}">
          <span class="lesson-num">${i + 1}</span>
          <span class="lesson-info">
            <span class="lesson-title">${i18n.meaning(l.title)}</span>
            <span class="stars">${"⭐".repeat(stars)}${"☆".repeat(3 - stars)}</span>
          </span>
          <span class="lesson-go">${rec?.done ? i18n.t("world.review") : i18n.t("lesson.start")}</span>
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
      b.onclick = () => Game.start(g, +b.dataset.i, () => { this.grade(gradeIdx); this.refreshTopbar(); });
    });
  },

  // ---------- Profile ----------
  profile() {
    this.route = { name: "profile" };
    const app = document.getElementById("app");
    const rank = rankForLevel(Progress.level);
    app.innerHTML = `
      <section class="profile">
        <button class="back" id="back">←</button>
        <img src="assets/mascot.svg" class="profile-mascot happy" alt="">
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
        <button class="btn btn-ghost danger" id="reset">${i18n.t("profile.reset")}</button>
      </section>`;
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
