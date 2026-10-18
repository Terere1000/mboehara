# Mbo'ehára — project guide for Claude Code

Mbo'ehára is a fun, gamified web app for learning **Guaraní** (Paraguay's co-official
native language). Its 12 levels mirror how Guaraní is taught in Paraguayan schools
(grades 1–12), following the MEC *Ñe'ẽ* program progression.

## How to run it
No build step, no runtime dependencies. (Node is installed via Homebrew and is needed only
for `tools/build-pages.mjs`, never to run the app.)
- Open `index.html` directly in a browser, **or**
- Serve the folder: `python3 -m http.server` then visit the printed URL
  (`.claude/launch.json` wires this up for Claude Code's preview pane).

## Architecture (vanilla JS, no framework)
Scripts load in this order (see `index.html`):
1. `js/data/curriculum.js` — `CURRICULUM`: the 12 grades → lessons → vocab. **Most content edits happen here.**
2. `js/data/index.js` — `grades` alias + learner `RANKS` / `rankForLevel()`.
2b. `js/data/expressions.js` — `EXPRESSIONS` (200 `{guarani, spanish, english, category}`), `EXPRESSION_CATEGORIES`, and `EXPRESSION_CATEGORY_LABELS` ({es,en} per category), powering the standalone "Expresiones Comunes" section (`App.expressions()` — filter bar + search). Card gloss + category labels follow the ES/EN toggle; the `category` field stays the canonical Spanish key. Regenerate from `guarani-expressions.ts` if that reference file is added.
2c. `js/data/teach.js` — `TEACH`: the **lesson notes** shown before the quiz, keyed `"<gradeId>:<lessonIdx>"` (same identity `Progress` uses), plus `teachFor(gradeId, idx)`. Written for absolute beginners. All 12 grades are authored (45 lessons); a lesson with no entry just skips the Learn step.
3. `js/i18n.js` — `i18n` object: ES/EN UI strings (`I18N`), language toggle, `i18n.meaning({es,en})`.
4. `js/progress.js` — `Progress`: localStorage state (XP, level, streak, completed lessons, stars, lessons read, grade unlocks).
4b. `js/teach.js` — `Teach`: the Learn screen. Pages a lesson's notes (concept → vocab cards → examples → culture) and hands off to `Game` via the Practice button.
5. `js/game.js` — `Game`: builds exercises from a lesson's vocab and runs the lesson loop (hearts, scoring, stars).
5b. `js/search.js` — `Search`: the site-wide dictionary search behind the 🔎 in the top bar
   (also `/` or Ctrl/Cmd-K). Flattens `CURRICULUM` vocab, `EXPRESSIONS` and the `TEACH`
   notes into one in-memory index on first use — no index file, no network. A hit opens a
   definition card (word, pronunciation, both glosses, where it's taught, related words);
   from there `Search.go()` opens the lesson, ignoring grade locks like `openFromLink()`.
5c. `js/account.js` — `Account`: **optional** accounts (username + password, no email),
   backed by Supabase. Entirely additive — with `js/supabase-config.js` blank, the CDN
   blocked or no network, nothing renders and progress stays in localStorage exactly as
   before. Setup and the reasoning live in `supabase/README.md`; the schema and RLS
   policies in `supabase/schema.sql`. `Account.init()` wraps `Progress.save()` so every
   save debounces a push; sign-in **merges** rather than overwrites.
6. `js/app.js` — `App`: the three screens (Home/world-map, Grade/lesson-list, Profile) + top-bar. `App.openLesson()` is the Learn → Practice entry point.

`js/audio.js` — `Pron.guide(gn)` builds the approximate written phonetic guide from Guaraní
spelling, used in both the Expresiones Comunes cards and Teach's vocab/example cards.
`ExprAudio` (plays a user's own recording from IndexedDB "mboehara-audio" else browser TTS;
records via MediaRecorder) is **defined but currently unused** — audio playback/recording UI
was temporarily removed from `app.js` (expressions) and `js/teach.js` (Learn step) until
real voice recordings are ready. To re-enable: reintroduce the 🔊/🎤/🗑 buttons and
`ExprAudio.play/startRecord/stopRecord/del` calls that were stripped from those two files
(see git history around "temporarily remove the audio"); `ExprAudio.init()` also needs to be
called again from `App.init`.

Other files: `css/styles.css` (white minimalist theme, CSS variables in `:root`),
`assets/mascot.png` (the toucan teacher — glasses, cut out on transparency).
`assets/mascot-sad.png` is the wrong-answer variant; every `<img>` that points at it carries
`onerror="this.remove()"`, so the app degrades gracefully if the file is missing.
Mascot CSS sets `height` only with `width: auto` — never both, or the art gets squashed.

## Static lesson pages (SEO)
The app is one JS-rendered page, so search engines see little text on it. `aprender/` holds one
crawlable HTML page per lesson plus an index, and `sitemap.xml` lists them — all **generated** by
`node tools/build-pages.mjs` from `CURRICULUM`, `TEACH` and `Pron`. Never hand-edit them.
- **After editing `curriculum.js` or `teach.js`, re-run the script and commit its output**,
  or the public pages go stale. Node is installed (Homebrew, `/opt/homebrew/bin/node`), so
  `node tools/build-pages.mjs` runs locally. It is deterministic: re-running with no source
  changes leaves the working tree clean.
- Lesson URLs come from the `SLUGS` map in the script. They are public URLs: once indexed,
  don't rename them. A new lesson fails the build until it gets a slug.
- Canonical host is `https://www.mboehara.com.py` (the `SITE` constant, and the canonical/OG
  tags in `index.html`). Change both together if that ever changes.
- Pages link into the app with `/?leccion=g2-1`; `App.openFromLink()` opens that lesson,
  ignoring grade locks on purpose.
- `assets/og-image.png` (1200×630) is the link-preview image for every page.

## Data shape
- A grade: `{ id, num, color, icon, title:{es,en}, lessons:[...] }`
- A lesson: `{ title:{es,en}, vocab:[ {gn, es, en, pron?}, ... ] }`
- `pron` is an **optional** hand-written phonetic guide that overrides the one `Pron.guide()`
  generates (written without brackets, e.g. `pron: "ÑA-nde re-KO"`). Only add it where the
  generator gets the stress wrong — it already handles written accents, a lone nasal tilde,
  gua/kué glides and falling diphthongs. The same optional field works on `TEACH` examples
  and, as a 4th column, on expression rows in `js/data/expressions.js`.
- **Overrides go stale.** They are frozen text, so improving `Pron.syllabify()` does not
  update them and they can end up *worse* than the generator. After changing the generator,
  re-check every override: it should differ from `Pron.guide(word)` only in which syllable
  is capitalised, unless it is deliberately correcting a syllable boundary (`che paraguáyo`
  treats y as a consonant; `tu-PÃO` and `te-tã-ɨ-GUA` fix a diphthong and a morpheme edge).
- Exercises are **generated** from `vocab` by `Game.build()` — you don't author exercises by hand.
  Types: multiple choice (both directions), build-the-word, true/false, matching.
- Lesson notes (`TEACH["g1:0"]`): `{ focus:{es,en}, intro:[{es,en}], points:[{es,en}],
  examples:[{gn,es,en}], culture:{ title:{es,en}, body:{es,en} } }`. Don't list the lesson's
  vocab here — the word cards are generated from `lesson.vocab`.

## Conventions
- Every user-facing string is bilingual `{es, en}`; render with `i18n.meaning(pair)` or `i18n.t(key)`.
  When adding UI text, add the key to **both** `es` and `en` in `js/i18n.js`.
- Guaraní orthography matters: nasal tildes (ã ẽ ĩ õ ũ ỹ) and the glottal stop `'` are significant.
- **Searching is accent-blind on purpose.** `Search.fold()` strips nasal tildes, accents and the
  puso before matching, so "nande" finds "Ñande" and "mbaeichapa" finds "Mba'éichapa" — most
  learners have no Guaraní keyboard. Folding is for *matching only*: results always render the
  true spelling. Any new filter over Guaraní text should call `Search.fold()` rather than
  `toLowerCase()` (the Expresiones filter in `app.js` does).
- A one-letter query matches Guaraní **headwords only** — `y` is water, not a prefix sweep.
- The top bar is full at 375px. Anything added there needs a `@media (max-width: 520px)` rule;
  the level chip already drops its rank name (`.rank-name`) to make room.
- Keep the aesthetic white/minimalist; reuse existing CSS variables and classes.
- Progress persists in `localStorage` under `mboehara.progress.v1`; bump the key if the shape changes.
- **Local storage is the source of truth, the server is a backup.** Write locally first and
  sync after; the app must stay fully usable with no account and no network.
- **Never collect personal data from learners.** Accounts take a username and a password and
  nothing else — no email, no real name, no birthday — because many learners are children.
  If you add a field, the question is whether the app genuinely cannot work without it.
- `Progress.merge()` is max-based and idempotent on purpose: signing in must never cost
  somebody the lessons they did as a guest, and syncing twice must not change the answer.

## Common tasks
- **Add/fix vocabulary** → edit `CURRICULUM` in `js/data/curriculum.js`.
- **Write the lesson for a module** → add a `TEACH["gN:i"]` entry in `js/data/teach.js`. Assume the
  student has never seen Guaraní: explain the concept before naming it, and prefer one honest
  insight (base-5 counting, triform nouns, nasal harmony) over a list of rules.
- **Add a new grade/lesson** → add to `CURRICULUM` following the data shape; unlock logic is automatic.
- **Add UI text** → add the key to both languages in `js/i18n.js`.
- **Tune gamification** (XP, hearts, unlock threshold) → `js/progress.js` and `js/game.js`.

## Content caveat
The Guaraní vocabulary is an educational **draft** from standard references — worth a
native-speaker/teacher review before classroom use.

## Repo
GitHub: https://github.com/Terere1000/mboehara (push with `gh`, authenticated as Terere1000).
End commit messages with the project's normal trailer.
