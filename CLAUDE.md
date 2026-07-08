# Mbo'ehára — project guide for Claude Code

Mbo'ehára is a fun, gamified web app for learning **Guaraní** (Paraguay's co-official
native language). Its 12 levels mirror how Guaraní is taught in Paraguayan schools
(grades 1–12), following the MEC *Ñe'ẽ* program progression.

## How to run it
No build step, no dependencies (Node/npm are not installed and not needed).
- Open `index.html` directly in a browser, **or**
- Serve the folder: `python3 -m http.server` then visit the printed URL.

## Architecture (vanilla JS, no framework)
Scripts load in this order (see `index.html`):
1. `js/data/curriculum.js` — `CURRICULUM`: the 12 grades → lessons → vocab. **Most content edits happen here.**
2. `js/data/index.js` — `grades` alias + learner `RANKS` / `rankForLevel()`.
2b. `js/data/expressions.js` — `EXPRESSIONS` (200 `{guarani, spanish, english, category}`), `EXPRESSION_CATEGORIES`, and `EXPRESSION_CATEGORY_LABELS` ({es,en} per category), powering the standalone "Expresiones Comunes" section (`App.expressions()` — filter bar + search). Card gloss + category labels follow the ES/EN toggle; the `category` field stays the canonical Spanish key. Regenerate from `guarani-expressions.ts` if that reference file is added.
3. `js/i18n.js` — `i18n` object: ES/EN UI strings (`I18N`), language toggle, `i18n.meaning({es,en})`.
4. `js/progress.js` — `Progress`: localStorage state (XP, level, streak, completed lessons, stars, grade unlocks).
5. `js/game.js` — `Game`: builds exercises from a lesson's vocab and runs the lesson loop (hearts, scoring, stars).
6. `js/app.js` — `App`: the three screens (Home/world-map, Grade/lesson-list, Profile) + top-bar.

`js/audio.js` — used only by the Expresiones Comunes section. `Pron.guide(gn)` builds an
approximate written phonetic guide from Guaraní spelling. `ExprAudio` plays a user's own
recording when present (stored in IndexedDB "mboehara-audio", keyed by expression `id`)
else browser TTS (Spanish voice), and records via MediaRecorder. Loaded before `game.js`;
init'd in `App.init`. Recording needs a secure context (localhost / https).

Other files: `css/styles.css` (white minimalist theme, CSS variables in `:root`),
`assets/mascot.svg` (Jasy Jateré stick-figure mascot).

## Data shape
- A grade: `{ id, num, color, icon, title:{es,en}, lessons:[...] }`
- A lesson: `{ title:{es,en}, vocab:[ {gn, es, en}, ... ] }`
- Exercises are **generated** from `vocab` by `Game.build()` — you don't author exercises by hand.
  Types: multiple choice (both directions), build-the-word, true/false, matching.

## Conventions
- Every user-facing string is bilingual `{es, en}`; render with `i18n.meaning(pair)` or `i18n.t(key)`.
  When adding UI text, add the key to **both** `es` and `en` in `js/i18n.js`.
- Guaraní orthography matters: nasal tildes (ã ẽ ĩ õ ũ ỹ) and the glottal stop `'` are significant.
- Keep the aesthetic white/minimalist; reuse existing CSS variables and classes.
- Progress persists in `localStorage` under `mboehara.progress.v1`; bump the key if the shape changes.

## Common tasks
- **Add/fix vocabulary** → edit `CURRICULUM` in `js/data/curriculum.js`.
- **Add a new grade/lesson** → add to `CURRICULUM` following the data shape; unlock logic is automatic.
- **Add UI text** → add the key to both languages in `js/i18n.js`.
- **Tune gamification** (XP, hearts, unlock threshold) → `js/progress.js` and `js/game.js`.

## Content caveat
The Guaraní vocabulary is an educational **draft** from standard references — worth a
native-speaker/teacher review before classroom use.

## Repo
GitHub: https://github.com/Terere1000/mboehara (push with `gh`, authenticated as Terere1000).
End commit messages with the project's normal trailer.
