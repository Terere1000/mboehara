// Builds the static, crawlable lesson pages from the app's own data.
//
//   node tools/build-pages.mjs
//
// Reads js/data/curriculum.js, js/data/teach.js and Pron from js/audio.js, and writes:
//   aprender/index.html            — every lesson, grouped by grade
//   aprender/<slug>/index.html     — one page per lesson (notes + vocab + examples)
//   sitemap.xml
//
// The app itself is a single JS-rendered page, so search engines see almost no text on it.
// These pages give each lesson its own URL with real HTML. They are generated output:
// edit the data files, then re-run this script and commit the result.

import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SITE = "https://www.mboehara.com.py";   // canonical host — keep in sync with index.html

// ---------- load the app's data ----------
const ctx = vm.createContext({});
for (const f of ["js/data/curriculum.js", "js/data/teach.js", "js/audio.js"]) {
  vm.runInContext(fs.readFileSync(path.join(ROOT, f), "utf8"), ctx, { filename: f });
}
const { CURRICULUM, TEACH, Pron } = vm.runInContext("({ CURRICULUM, TEACH, Pron })", ctx);

// ---------- slugs ----------
// Spanish, matching how people search ("números en guaraní"). Changing a slug changes a
// public URL, so once these are indexed treat them as permanent.
const SLUGS = {
  "g1:0": "vocales-orales",      "g1:1": "saludos",             "g1:2": "familia",               "g1:3": "palabras-basicas",
  "g2:0": "vocales-nasales",     "g2:1": "numeros-1-al-10",     "g2:2": "colores",               "g2:3": "animales",
  "g3:0": "partes-del-cuerpo",   "g3:1": "numeros-11-al-100",   "g3:2": "dias-y-meses",          "g3:3": "frases-cotidianas",
  "g4:0": "verbos-areales",      "g4:1": "comida",              "g4:2": "la-casa",               "g4:3": "objetos",
  "g5:0": "pronombres",          "g5:1": "posesivos",           "g5:2": "palabras-de-pregunta",  "g5:3": "verbos-chendales",
  "g6:0": "adjetivos",           "g6:1": "el-clima",            "g6:2": "naturaleza",            "g6:3": "armar-oraciones",
  "g7:0": "pasado-kuri",         "g7:1": "futuro-ta",           "g7:2": "verbos-nasales",        "g7:3": "adverbios-de-tiempo",
  "g8:0": "posposiciones",       "g8:1": "comparativos",        "g8:2": "rutina-diaria",         "g8:3": "lugares",
  "g9:0": "conjunciones",        "g9:1": "conectores-de-relato","g9:2": "verbos-de-relato",      "g9:3": "sentimientos",
  "g10:0": "poesia-neepoty",     "g10:1": "refranes-neenga",    "g10:2": "cultura-guarani",
  "g11:0": "guaraniete-y-jopara","g11:1": "escritura-formal",   "g11:2": "variantes-regionales",
  "g12:0": "vocabulario-avanzado","g12:1": "sociedad",          "g12:2": "identidad",
};

// ---------- helpers ----------
const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const plain = s => String(s).replace(/[—–\-,.?!¿¡:;«»"]/g, " ").replace(/\s+/g, " ").trim(); // same as Teach._plain
const json = o => JSON.stringify(o).replace(/</g, "\\u003c");
const clip = (s, n) => s.length <= n ? s : s.slice(0, s.lastIndexOf(" ", n - 1)).replace(/[,;:]$/, "") + "…";
const h1For = t => /guaran|jopara/i.test(t) ? t : `${t} en guaraní`;

// ---------- collect lessons in order ----------
const lessons = [];
for (const g of CURRICULUM) {
  g.lessons.forEach((l, i) => {
    const key = `${g.id}:${i}`;
    const slug = SLUGS[key];
    if (!slug) throw new Error(`No slug for ${key} (${l.title.es}) — add one to SLUGS`);
    lessons.push({ g, i, l, key, slug, teach: TEACH[key] || null, url: `/aprender/${slug}/` });
  });
}
const seen = new Set();
for (const x of lessons) { if (seen.has(x.slug)) throw new Error(`Duplicate slug ${x.slug}`); seen.add(x.slug); }

// ---------- shared chrome ----------
const head = ({ title, description, canonical, ld }) => `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}" />
  <link rel="canonical" href="${SITE}${canonical}" />
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="Mbo'ehára" />
  <meta property="og:locale" content="es_PY" />
  <meta property="og:title" content="${esc(title)}" />
  <meta property="og:description" content="${esc(description)}" />
  <meta property="og:url" content="${SITE}${canonical}" />
  <meta property="og:image" content="${SITE}/assets/og-image.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:card" content="summary_large_image" />
  <link rel="stylesheet" href="/css/pages.css" />
  <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml" />
  <link rel="icon" href="/assets/favicon-32.png" sizes="32x32" type="image/png" />
  <link rel="apple-touch-icon" href="/assets/apple-touch-icon.png" />
  <script type="application/ld+json">${json(ld)}</script>
</head>
<body>
  <header class="topbar">
    <a class="brand" href="/">
      <img src="/assets/mascot.png" alt="" class="brand-mascot" width="41" height="36" />
      <span class="brand-name">Mbo'ehára</span>
    </a>
    <a class="btn-app" href="/">Abrir la app</a>
  </header>
  <main class="page">`;

const foot = `
  </main>
  <footer class="footer">
    <a href="/aprender/">Todas las lecciones</a> · <a href="/">Mbo'ehára</a> · Borrador educativo de guaraní 🇵🇾
    <a class="footer-contact" href="mailto:mbaeteko@mboehara.com.py">mbaeteko@mboehara.com.py</a>
  </footer>
</body>
</html>
`;

const crumbsLd = items => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, n) => ({ "@type": "ListItem", position: n + 1, name: it.name, item: SITE + it.url })),
});

// ---------- lesson page ----------
function lessonPage(x, prev, next) {
  const { g, i, l, teach: t } = x;
  const title = l.title.es;
  const h1 = h1For(title);
  const descBase = t ? t.focus.es : `${title}: vocabulario en guaraní con pronunciación.`;
  const description = clip(`${descBase} Vocabulario con pronunciación, ejemplos y práctica gratis.`, 158);
  const crumbs = [
    { name: "Aprender guaraní", url: "/aprender/" },
    { name: `Grado ${g.num}`, url: `/aprender/#grado-${g.num}` },
    { name: title, url: x.url },
  ];
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LearningResource",
        name: h1,
        description: descBase,
        url: SITE + x.url,
        inLanguage: "es",
        teaches: `${title} (guaraní)`,
        educationalLevel: `Grado ${g.num}`,
        learningResourceType: "Lección",
        isAccessibleForFree: true,
        isPartOf: { "@type": "WebSite", name: "Mbo'ehára", url: SITE + "/" },
      },
      crumbsLd(crumbs),
    ],
  };

  const vocabRows = l.vocab.map(w => `
          <tr><td lang="gn" class="gn">${esc(w.gn)}</td><td class="pron">${esc(Pron.guide(w.gn, w.pron))}</td><td>${esc(w.es)}</td></tr>`).join("");

  const body = t ? `
    <p class="lead">${esc(t.focus.es)}</p>
    ${t.intro.map(p => `<p>${esc(p.es)}</p>`).join("\n    ")}

    <section class="box">
      <h2>Para recordar</h2>
      <ul class="checks">
        ${t.points.map(p => `<li>${esc(p.es)}</li>`).join("\n        ")}
      </ul>
    </section>` : "";

  const examples = t && t.examples.length ? `
    <h2>Ejemplos</h2>
    <ul class="examples">
      ${t.examples.map(ex => `<li><span lang="gn" class="gn">${esc(ex.gn)}</span><span class="pron">${esc(Pron.guide(plain(ex.gn), ex.pron))}</span><span class="tr">${esc(ex.es)}</span></li>`).join("\n      ")}
    </ul>` : "";

  const culture = t && t.culture ? `
    <aside class="culture">
      <h2>¿Sabías que…? ${esc(t.culture.title.es)}</h2>
      <p>${esc(t.culture.body.es)}</p>
    </aside>` : "";

  return head({ title: `${h1} · Grado ${g.num} | Mbo'ehára`, description, canonical: x.url, ld }) + `
    <nav class="crumbs" aria-label="Ruta">
      <a href="/aprender/">Aprender guaraní</a> › <a href="/aprender/#grado-${g.num}">Grado ${g.num}</a> › <span>${esc(title)}</span>
    </nav>
    <p class="kicker" style="--accent:${g.color}">${g.icon} Grado ${g.num} · Lección ${i + 1} · ${esc(g.title.es)}</p>
    <h1>${esc(h1)}</h1>
    ${body}

    <h2>Vocabulario</h2>
    <div class="table-wrap">
      <table class="vocab">
        <thead><tr><th>Guaraní</th><th>Pronunciación</th><th>Español</th></tr></thead>
        <tbody>${vocabRows}
        </tbody>
      </table>
    </div>
    <p class="note">La pronunciación escrita es aproximada: la sílaba en mayúsculas es la fuerte.</p>
    ${examples}
    ${culture}

    <div class="cta">
      <img src="/assets/mascot-ok.png" alt="" width="48" height="50" />
      <div>
        <p><b>¿Lo practicamos?</b> Ejercicios con estas palabras, gratis y sin registrarte.</p>
        <a class="btn" href="/?leccion=${g.id}-${i}">Abrir esta lección en la app →</a>
      </div>
    </div>

    <nav class="pager">
      ${prev ? `<a href="${prev.url}">← ${esc(prev.l.title.es)}</a>` : "<span></span>"}
      ${next ? `<a href="${next.url}">${esc(next.l.title.es)} →</a>` : "<span></span>"}
    </nav>` + foot;
}

// ---------- index page ----------
function indexPage() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        name: "Aprender guaraní — 12 grados",
        description: "Curso gratuito de guaraní en 45 lecciones, del 1.º al 12.º grado: vocabulario con pronunciación, explicaciones para principiantes y práctica.",
        url: SITE + "/aprender/",
        inLanguage: "es",
        isAccessibleForFree: true,
        provider: { "@type": "Organization", name: "Mbo'ehára", url: SITE + "/" },
      },
      crumbsLd([{ name: "Aprender guaraní", url: "/aprender/" }]),
    ],
  };
  const grades = CURRICULUM.map(g => `
    <section class="grade" id="grado-${g.num}" style="--accent:${g.color}">
      <h2>${g.icon} Grado ${g.num} · ${esc(g.title.es)}</h2>
      <ol>
        ${lessons.filter(x => x.g === g).map(x => `<li><a href="${x.url}">${esc(h1For(x.l.title.es))}</a>${x.teach ? ` <span class="muted">— ${esc(x.teach.focus.es)}</span>` : ""}</li>`).join("\n        ")}
      </ol>
    </section>`).join("");

  return head({
    title: "Aprender guaraní gratis: 45 lecciones del 1.º al 12.º grado | Mbo'ehára",
    description: "Curso gratuito de guaraní para principiantes: vocales, saludos, números, colores, verbos y más, con pronunciación, ejemplos y práctica.",
    canonical: "/aprender/",
    ld,
  }) + `
    <h1>Aprender guaraní</h1>
    <p class="lead">Las ${lessons.length} lecciones de Mbo'ehára, ordenadas como en la escuela paraguaya: del 1.º al 12.º grado. Cada una explica una idea clave para principiantes, con vocabulario, pronunciación y ejemplos.</p>
    ${grades}
    <div class="cta">
      <img src="/assets/mascot-ok.png" alt="" width="48" height="50" />
      <div>
        <p><b>Aprendé jugando.</b> Ejercicios, estrellas y rachas — gratis y sin registrarte.</p>
        <a class="btn" href="/">Empezar en la app →</a>
      </div>
    </div>` + foot;
}

// ---------- sitemap ----------
function sitemap() {
  const urls = ["/", "/aprender/", ...lessons.map(x => x.url)];
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url><loc>${SITE}${u}</loc></url>`).join("\n")}
</urlset>
`;
}

// ---------- write ----------
const out = path.join(ROOT, "aprender");
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
fs.writeFileSync(path.join(out, "index.html"), indexPage());
lessons.forEach((x, n) => {
  fs.mkdirSync(path.join(out, x.slug), { recursive: true });
  fs.writeFileSync(path.join(out, x.slug, "index.html"), lessonPage(x, lessons[n - 1], lessons[n + 1]));
});
fs.writeFileSync(path.join(ROOT, "sitemap.xml"), sitemap());
console.log(`Wrote ${lessons.length} lesson pages, aprender/index.html and sitemap.xml`);
