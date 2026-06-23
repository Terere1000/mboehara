# Mbo'ehára 🇵🇾

**Aprendé guaraní jugando · Learn Guaraní by playing**

Mbo'ehára (*"teacher"* in Guaraní) is a fun, gamified web app for learning **Guaraní**, the co-official native language of Paraguay. Its 12 levels mirror how Guaraní is taught in Paraguayan schools — one "World" per grade, from 1st through 12th — following the MEC *Ñe'ẽ* program progression.

The mascot is **Jasy Jateré**, the fair-haired forest spirit of Guaraní mythology, drawn as a friendly stick figure.

## Features
- **12 grades / Worlds**, unlocked in sequence as you progress (finish ~60% of a grade to unlock the next).
- **Gamified**: XP, learner levels & ranks (Mitã → Mbo'ehára), hearts/lives per lesson, daily streak, and 1–3 stars per lesson based on accuracy.
- **Varied exercises** auto-generated from each lesson's vocabulary: multiple choice (both directions), build-the-word, true/false, and matching.
- **Bilingual UI**: toggle between **Español** and **English** anytime (the language being taught is always Guaraní).
- **White, minimalist** design with stick figures.
- **No backend, no build step** — progress is saved locally in your browser.

## Curriculum (by grade)
1. Achegety (alphabet), oral vowels, greetings, family
2. Nasal vowels, numbers 1–10, colors, animals
3. Body, numbers 11–100, days & months, everyday phrases
4. Areal verbs, food, home & objects
5. Pronouns, possessives, question words, *chendal* verbs
6. Adjectives, weather, nature, building sentences
7. Past (*-kuri*) & future (*-ta*) tenses, nasal verbs, time adverbs
8. Postpositions, comparatives, daily routine, places
9. Conjunctions, story connectors, narration verbs, feelings
10. *Ñe'ẽpoty* (poetry), *ñe'ẽnga* (proverbs), Guaraní culture
11. *Guaraniete* vs *jopara*, formal writing, regional variants
12. Advanced vocabulary, society, identity

## Run it
No installation needed. Either:
- Double-click `index.html` to open it in any browser, **or**
- Serve the folder (e.g. `python3 -m http.server`) and visit the printed URL.

## Play online (GitHub Pages)
In the repo: **Settings → Pages → Build from branch → `main` / root**, then open the published URL.

## Tech
Plain HTML, CSS and vanilla JavaScript. The curriculum lives in `js/data/curriculum.js`; the exercise engine in `js/game.js`; screens/navigation in `js/app.js`; progress persistence in `js/progress.js`; UI strings in `js/i18n.js`.

## Note on content
The Guaraní vocabulary is an **educational draft** drawn from standard references and the MEC program structure. A native-speaker / teacher review is recommended before classroom use. Audio pronunciation is a planned future addition.

---
*Made with care · Ojejapo mborayhúpe*
