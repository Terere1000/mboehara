/* Grade list + learner-rank titles. CURRICULUM is defined in curriculum.js (loaded first). */
const grades = CURRICULUM;

// Learner rank shown next to the mascot, derived from level. Bilingual.
const RANKS = [
  { es: "Mitã (Aprendiz)", en: "Beginner" },
  { es: "Temimbo'e (Estudiante)", en: "Student" },
  { es: "Katupyry (Hábil)", en: "Skilled" },
  { es: "Arandu (Sabio)", en: "Wise" },
  { es: "Mbo'ehára (Maestro)", en: "Master" }
];

function rankForLevel(level) {
  const idx = Math.min(RANKS.length - 1, Math.floor((level - 1) / 3));
  return RANKS[idx];
}
