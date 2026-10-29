/* Static page generator. Run: node scripts/build.js (from the project root or anywhere).
   Content lives in site/assets/js/*.js and is shared with the browser. Output: *.html in site/. */
const fs = require("fs"), path = require("path");
const ROOT = path.resolve(__dirname, "..", "site");
["sources", "hazards", "planner", "icons", "render", "alerts", "guides"].forEach(f => require(path.join(ROOT, "assets/js", f + ".js")));
const UR = globalThis.UR;
const ic = UR.icon, cite = UR.cite, esc = UR.esc;
const NAME = "Prepare Utah";
const SITE = "https://prepareutah.com/";
const VERSION = "2026-10-24";
// Sister site. Linked from the footer, home page, earthquake page, Sources and About.
const SISTER = { name: "FaultLine Utah", url: "https://faultlineutah.com/" };
const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}<span class="sr-only"> (opens in a new tab)</span></a>`;

// Words in the page frame. Only the Spanish essentials page uses "es" so far; everything else is English.
const T = {
  en: {
    skip: "Skip to main content", menu: "Menu", tagline: "Utah household readiness", home: `${NAME} home`,
    strip: root => `<strong>In an emergency, call 911.</strong> Education and preparedness only; not medical, engineering, or legal advice. <a href="${root}es/index.html" lang="es" hreflang="es">En español</a>`,
    nav: ["Home", "Make my plan", "Hazards", "Guides", "Alerts", "Sources", "About"],
    disclaimer: `<p><strong>For education and preparedness only.</strong> Not medical, engineering, legal, insurance, or financial advice, and not an official alert or risk rating. Hazard priorities are general guidance. <strong>In an emergency, call 911.</strong> For health questions, contact your clinician or local health department. For your building, consult a licensed professional.</p>
          <p style="margin:0">Not affiliated with the State of Utah or its <a href="https://beready.utah.gov/" target="_blank" rel="noopener">Be Ready Utah</a> program, which we recommend.</p>`,
    explore: "Explore", links: ["Make my plan", "My plan", "All hazards", "Guides", "Alerts by county", "Sources", "About &amp; privacy"],
    sister: "Sister site", sisterText: "earthquake hazards for any Utah address, in plain language.",
    data: "Your data", dataText: "Your answers stay in this browser (localStorage). No accounts, no tracking, no analytics.", erase: "Erase my data",
    fine: `Content checked ${esc(UR.SOURCES_CHECKED)}. Every factual claim links to its source; items marked <em>(estimate)</em> are planning guesses and items in [brackets] are not yet verified.`
  },
  es: {
    skip: "Saltar al contenido principal", menu: "Menú", tagline: "Preparación para hogares de Utah", home: `${NAME}: inicio`,
    strip: root => `<strong>En una emergencia, llame al 911.</strong> Solo para educación y preparación; no es asesoría médica, de ingeniería ni legal. <a href="${root}index.html" lang="en" hreflang="en">In English</a>`,
    nav: ["Inicio", "Hacer mi plan", "Peligros", "Guías", "Alertas", "Fuentes", "Acerca de"],
    disclaimer: `<p><strong>Solo para educación y preparación.</strong> No es asesoría médica, de ingeniería, legal, de seguros ni financiera, ni una alerta o clasificación de riesgo oficial. <strong>En una emergencia, llame al 911.</strong> Para preguntas de salud, consulte a su médico o al departamento de salud local.</p>
          <p style="margin:0">No está afiliado al Estado de Utah ni a su programa <a href="https://beready.utah.gov/" target="_blank" rel="noopener">Be Ready Utah</a>, que recomendamos.</p>`,
    explore: "Explorar (en inglés)", links: ["Hacer mi plan", "Mi plan", "Peligros", "Guías", "Alertas por condado", "Fuentes", "Acerca de y privacidad"],
    sister: "Sitio hermano", sisterText: "riesgos de terremoto para cualquier dirección de Utah (en inglés).",
    data: "Sus datos", dataText: "Sus respuestas se quedan en este navegador. Sin cuentas, sin rastreo, sin análisis.", erase: "Borrar mis datos",
    fine: `Contenido revisado el ${esc(UR.SOURCES_CHECKED)} (en inglés). Cada dato enlaza a su fuente.`
  }
};

function layout({ rel, title, desc, root = "", active = "", body, scripts = [], page = "", lang = "en", alternates = null }) {
  const t = T[lang];
  const nav = [["index.html", "home"], ["start.html", "start"], ["hazards/index.html", "hazards"], ["guides/index.html", "guides"], ["alerts.html", "alerts"], ["sources.html", "sources"], ["about.html", "about"]];
  const navHtml = nav.map(([href, id], i) => `<li><a href="${root}${href}"${active === id ? ' aria-current="page"' : ""}${id === "start" ? ' class="cta"' : ""}>${t.nav[i]}</a></li>`).join("");
  const footLinks = ["start.html", "plan.html", "hazards/index.html", "guides/index.html", "alerts.html", "sources.html", "about.html"].map((href, i) => `<li><a href="${root}${href}">${t.links[i]}</a></li>`).join("");
  const url = rel && rel !== "404.html" ? SITE + rel.replace(/(^|\/)index\.html$/, "$1") : "";
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<meta name="theme-color" content="#1F3A5F">
<meta name="referrer" content="strict-origin-when-cross-origin">${url ? `
<link rel="canonical" href="${url}">
<meta property="og:url" content="${url}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${NAME}">` : ""}${alternates ? Object.entries(alternates).map(([l, href]) => `
<link rel="alternate" hreflang="${l}" href="${SITE}${href}">`).join("") : ""}
<link rel="icon" href="${root}assets/favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="${root}assets/css/style.css?v=${VERSION}">
</head>
<body data-page="${page}">
<a class="skip" href="#main">${t.skip}</a>
<div class="strip" role="note">${t.strip(root)}</div>
<header class="site-header">
  <div class="wrap">
    <a class="brand" href="${root}index.html" aria-label="${t.home}">
      <span class="logo">${ic("hive")}</span>
      <span><b>${NAME}</b><small>${t.tagline}</small></span>
    </a>
    <button class="nav-toggle" aria-expanded="false" aria-controls="site-nav">${ic("list")} ${t.menu}</button>
    <nav id="site-nav" class="site-nav" aria-label="Main"><ul>${navHtml}</ul></nav>
  </div>
</header>
<main id="main">
${body}
</main>
<footer class="site-footer">
  <div class="wrap">
    <div class="cols">
      <div class="disclaimer-col">
        <h2>${NAME}</h2>
        <div class="disclaimer">
          ${t.disclaimer}
        </div>
      </div>
      <div>
        <h2>${t.explore}</h2>
        <ul>${footLinks}</ul>
        <h2 style="margin-top:18px">${t.sister}</h2>
        <p class="small" style="margin:0">${ext(SISTER.url, SISTER.name)}: ${t.sisterText}</p>
      </div>
      <div>
        <h2>${t.data}</h2>
        <p class="small">${t.dataText}</p>
        <button class="erase" type="button" data-erase>${ic("trash")} ${t.erase}</button>
      </div>
    </div>
    <p class="fine">${t.fine}</p>
  </div>
</footer>
${["sources", "hazards", "planner", "icons", "render", "common"].concat(scripts).map(s => `<script src="${root}assets/js/${s}.js?v=${VERSION}"></script>`).join("\n")}
</body>
</html>
`;
}

function write(rel, html) { const p = path.join(ROOT, rel); fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, html); console.log("wrote", rel, html.length); }
const pages = [];
function emit(rel, opts) { if (rel !== "404.html") pages.push(rel); write(rel, layout({ ...opts, rel })); }

const heroArt = `<div class="hero-art" aria-hidden="true"><svg viewBox="0 0 1440 220" preserveAspectRatio="none">
<path d="M0 150 L120 95 L210 130 L330 60 L420 110 L520 40 L640 120 L760 70 L860 115 L990 50 L1100 105 L1210 75 L1320 120 L1440 85 L1440 220 L0 220Z" fill="#9FB3C8" opacity=".55"/>
<path d="M0 175 L150 120 L260 160 L380 105 L500 150 L610 100 L740 160 L880 110 L1000 155 L1130 115 L1260 150 L1440 120 L1440 220 L0 220Z" fill="#8FA382" opacity=".75"/>
<path d="M0 200 L180 165 L330 190 L480 158 L640 192 L820 160 L990 195 L1160 165 L1320 190 L1440 170 L1440 220 L0 220Z" fill="#C8794A" opacity=".85"/>
<path d="M0 214 L240 198 L520 212 L800 196 L1100 212 L1440 200 L1440 220 L0 220Z" fill="#8A4524"/>
<circle cx="1180" cy="52" r="26" fill="#D9A441" opacity=".85"/></svg></div>`;

function sisterCard() {
  return `<div class="card sister" style="margin-top:16px">
  <span class="eyebrow">Sister site</span>
  <h3>Know the ground you live on</h3>
  <p class="small">${SISTER.name} looks up nearby faults, liquefaction, and building-code shaking for any Utah address, maps every fault in the state, and has a self-check for older brick homes.</p>
  <a class="btn small secondary" href="${SISTER.url}" target="_blank" rel="noopener">Visit ${SISTER.name} ${ic("arrow")}<span class="sr-only"> (opens in a new tab)</span></a>
</div>`;
}

function guideCard(g, root) {
  return `<a class="card hazard-card" href="${root}guides/${g.id}.html"><span class="hz-icon" style="background:${g.color}">${ic(g.icon)}</span><span><h3>${esc(g.name)}</h3><p>${esc(g.short)}</p></span></a>`;
}

function hazardCard(h, root) {
  return `<a class="card hazard-card" href="${root}hazards/${h.id}.html"><span class="hz-icon" style="background:${h.color}">${ic(h.icon)}</span><span><h3>${esc(h.name)}</h3><p>${esc(h.short)}</p></span></a>`;
}

// ---------------- index
emit("index.html", {
  title: `${NAME} · A personalized preparedness plan for Utah households`,
  desc: "Answer a few questions about your Utah home and household and get a calm, sourced, personalized plan for earthquakes, wildfire, outbreaks, drought, air quality, floods, and more.",
  active: "home", page: "home", scripts: ["quakes"], alternates: { en: "", es: "es/" },
  body: `
<section class="hero">
  <div class="wrap">
    <span class="eyebrow">For every Utah household</span>
    <h1>Ready for what Utah brings,<br>without the fear.</h1>
    <p class="lede">Answer a few questions about your county, your home, and the people (and pets) you care for. You'll get a personal preparedness plan for earthquakes, wildfire, outbreaks, drought, inversions, and more, with checklists sized to your household and a source behind every fact.</p>
    <div class="btn-row"><a class="btn gold" href="start.html">Make my plan ${ic("arrow")}</a><a class="btn secondary" href="hazards/index.html">Browse hazards</a></div>
    <div class="trust"><span>${ic("lock")} Stays on your device</span><span>${ic("shield")} No accounts, no tracking</span><span>${ic("link")} Every fact sourced</span></div>
  </div>
  ${heroArt}
</section>
<section class="block">
  <div class="wrap">
    <div class="grid two" style="align-items:center">
      <div>
        <span class="eyebrow">How it works</span>
        <h2>About five minutes, then a plan that's yours</h2>
        <ol class="steps">
          <li><strong>Tell us about your situation.</strong> County, type of home, household, health and diet needs, budget, and storage space.</li>
          <li><strong>See what matters most where you live.</strong> Plain-language priority bands for each hazard, with the reasons and sources.</li>
          <li><strong>Build it like a staircase.</strong> Checklists for 7, 14, 30, and 90 days with quantities for your household. Shared items show up once. Check things off as you go.</li>
        </ol>
        <a class="btn" href="start.html">Start my plan ${ic("arrow")}</a>
      </div>
      <div class="card">
        <h3>Utah already knows how to do this</h3>
        <p>Home storage, a little at a time, is part of Utah culture. This site builds on that habit and on the state's own guidance, like Be Ready Utah's call to store at least <strong>14 gallons of water per person</strong>. ${cite("[[br-water]]")}</p>
        <p class="small muted" style="margin:0">We translate official sources into one household plan. We don't replace them. For live alerts, follow your county and the National Weather Service. ${cite("[[nws-slc]]")}</p>
      </div>
    </div>
  </div>
</section>
<section class="block alt">
  <div class="wrap">
    <span class="eyebrow">${["", "", "", "", "", "", "", "", "", "", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen"][UR.hazards.length - 1] || UR.hazards.length - 1} hazards plus money</span>
    <h2>Every Utah hazard, one calm place</h2>
    <p class="muted">Each page stands on its own: why it matters in Utah, who's most affected, what to do before, during, and after, and where to check live conditions.</p>
    <div class="grid three">${UR.hazards.map(h => hazardCard(h, "")).join("")}</div>
  </div>
</section>
<section class="block">
  <div class="wrap">
    <span class="eyebrow">Guides</span>
    <h2>Beyond any one hazard</h2>
    <p class="muted">Insurance, food storage, when to leave, what to do afterward, and plans for your family and your neighbors.</p>
    <div class="grid three">${UR.guides.map(g => guideCard(g, "")).join("")}</div>
  </div>
</section>
<section class="block">
  <div class="wrap grid two">
    <div class="card quakes" id="quake-widget" aria-live="polite">
      <h3>${ic("quake")} Recent Utah earthquakes</h3>
      <p class="small muted">Magnitude 1.5 and up in the past 14 days, straight from the USGS feed. Small quakes happen in Utah all the time; this is for curiosity, not alerts.</p>
      <div data-quakes><p class="small muted">Loading from USGS&hellip;</p></div>
      <p class="small" style="margin:10px 0 0">More: ${cite("[[usgs-map]] [[uuss]]")}</p>
    </div>
    <div>
      <div class="card">
        <h3>${ic("shield")} What this site is, and isn't</h3>
        <ul class="small">
          <li><strong>Is:</strong> a free planning tool that turns official guidance into a household checklist.</li>
          <li><strong>Isn't:</strong> an alert system. Utah has no public earthquake early warning, and we never imply one. ${cite("[[ugs-eew]]")}</li>
          <li><strong>Isn't:</strong> medical, engineering, legal, or financial advice. Talk to your clinician, a licensed engineer, or your insurer about your situation.</li>
          <li><strong>Private by design:</strong> your answers never leave your browser. <a href="about.html#privacy">Read more</a>.</li>
        </ul>
      </div>
      ${sisterCard()}
    </div>
  </div>
</section>`
});

// ---------------- questionnaire
const radio = (name, value, label, hint, extra = "") => `<label class="choice"><input type="radio" name="${name}" value="${value}"${extra}><span class="box"><span><b>${label}</b>${hint ? `<small>${hint}</small>` : ""}</span></span></label>`;
const check = (name, label, hint, extra = "") => `<label class="choice"><input type="checkbox" name="${name}"${extra}><span class="box"><span><b>${label}</b>${hint ? `<small>${hint}</small>` : ""}</span></span></label>`;
const chip = (name, label) => `<label class="choice chip"><input type="checkbox" name="${name}"><span class="box"><span><b>${label}</b></span></span></label>`;
const counter = (name, label, hint, min = 0) => `<div class="counter"><div class="lbl" id="lbl-${name}"><b>${label}</b><small>${hint}</small></div><div class="stepper"><button type="button" data-step="-1" data-for="${name}" aria-label="Fewer: ${label}">&minus;</button><input type="number" inputmode="numeric" min="${min}" max="20" name="${name}" id="f-${name}" aria-labelledby="lbl-${name}" value="${min}"><button type="button" data-step="1" data-for="${name}" aria-label="More: ${label}">+</button></div></div>`;
const steps = [
  { t: "Where you live", b: `
    <fieldset><legend><label for="f-county">Which county do you live in?</label></legend>
      <select id="f-county" name="county" required><option value="">Choose your county&hellip;</option>${UR.counties.map(c => `<option value="${c}">${c} County</option>`).join("")}</select></fieldset>
    <fieldset><legend>What's your setting like?</legend><p class="hint">Pick the closest match. It shapes wildfire, landslide, flood, and air-quality priorities.</p>
      <div class="choices cols-2">${UR.settings.map(s => radio("setting", s.id, s.label, s.hint)).join("")}</div></fieldset>` },
  { t: "Your home", b: `
    <fieldset><legend>What kind of home?</legend><div class="choices">${radio("homeType", "house", "House or townhome", "")}${radio("homeType", "apartment", "Apartment or condo", "")}${radio("homeType", "mobile", "Mobile or manufactured home", "")}</div></fieldset>
    <fieldset><legend>Is it older brick, built before about 1975?</legend><p class="hint">Older brick buildings may be unreinforced masonry (URM), which matters a lot in earthquakes.</p><div class="choices cols-2">${radio("brick", "yes", "Yes", "")}${radio("brick", "no", "No", "")}${radio("brick", "unsure", "Not sure", "We'll show you the warning signs")}</div></fieldset>
    <fieldset><legend>Do you own or rent?</legend><div class="choices cols-2">${radio("tenure", "own", "Own", "")}${radio("tenure", "rent", "Rent", "We'll add questions for your landlord")}</div></fieldset>
    <fieldset><legend>How do you cool your home in summer?</legend><p class="hint">Optional. It shapes your extreme-heat priority.</p><div class="choices cols-2">${radio("cooling", "central", "Central air conditioning", "")}${radio("cooling", "window", "Window or portable AC", "")}${radio("cooling", "swamp", "Evaporative (swamp) cooler", "")}${radio("cooling", "none", "Fans only, or nothing", "")}</div></fieldset>` },
  { t: "Who's at home", b: `
    <fieldset><legend>People in your household</legend><p class="hint">Water and food quantities are computed from these numbers.</p>
      ${counter("adults", "Adults (18&ndash;64)", "", 0)}${counter("seniors", "Older adults (65+)", "", 0)}${counter("children", "Children (2&ndash;17)", "", 0)}${counter("infants", "Babies and toddlers (under 2)", "", 0)}</fieldset>
    <fieldset><legend>Animals</legend>
      ${counter("petsSmall", "Cats, small dogs, other small pets", "", 0)}${counter("petsLarge", "Large dogs", "", 0)}
      <div class="choices" style="margin-top:12px">${check("livestock", "Horses or livestock", "")}${check("flock", "Backyard chickens or other birds", "")}</div></fieldset>` },
  { t: "Health needs", b: `
    <div class="privacy-note">${ic("lock")}<span>These answers stay in this browser and are only used to tailor your plan. We never see them. You can erase them anytime.</span></div>
    <fieldset style="margin-top:16px"><legend>Does anyone at home have these needs? <span class="muted" style="font-weight:400">(check all that apply)</span></legend><div class="choices">
      ${check("med.rx", "Daily prescription medicines", "")}
      ${check("med.controlled", "A controlled-substance prescription", "For example, some pain, ADHD, or sleep medicines")}
      ${check("med.refrigerated", "Medicine that must be refrigerated", "For example, insulin")}
      ${check("med.powered", "Powered medical equipment", "Oxygen concentrator, CPAP/BiPAP, power wheelchair, home dialysis, etc.")}
      ${check("med.mobility", "Mobility limits", "Would need help evacuating or moving quickly")}
      ${check("med.lungHeart", "Lung or heart conditions", "Asthma, COPD, heart disease")}
      ${check("med.pregnancy", "Pregnancy", "")}
    </div></fieldset>` },
  { t: "Food needs", b: `
    <fieldset><legend>Any dietary needs to plan around? <span class="muted" style="font-weight:400">(check all that apply)</span></legend><div class="choices">
      ${check("diet.allergy", "Food allergies", "", ' aria-controls="reveal-allergens"')}
      <div class="reveal" id="reveal-allergens" data-reveal="diet.allergy" hidden><p class="hint">Which ones? (optional)</p><div class="chips">${UR.ALLERGENS.map(a => chip("diet.allergens." + a.id, a.label)).join("")}</div></div>
      ${check("diet.celiac", "Celiac disease or gluten-free", "")}${check("diet.formula", "Infant formula", "")}
      ${check("diet.other", "Another diet or food need", "Diabetes, kidney disease, vegetarian, halal, soft foods, and more", ' aria-controls="reveal-diets"')}
      <div class="reveal" id="reveal-diets" data-reveal="diet.other" hidden>
        <div class="choices cols-2">${UR.DIETS.map(d => check("diet." + d.id, d.label, d.hint)).join("")}</div>
        <label class="q-label" for="f-diet-text" style="display:block;margin-top:16px">Something else? Describe it in your own words</label>
        <p class="hint">For example "type 1 diabetes and vegan" or "low potassium." We'll check the boxes that match. This stays in your browser.</p>
        <input type="text" class="text-input" id="f-diet-text" name="diet.otherText" maxlength="200" autocomplete="off" spellcheck="true">
        <p class="detect small" data-detect aria-live="polite"></p>
      </div>
    </div></fieldset>` },
  { t: "Your resources", b: `
    <fieldset><legend>Do you have a car?</legend><div class="choices cols-2">${radio("car", "yes", "Yes, reliably", "")}${radio("car", "shared", "Shared or sometimes", "")}${radio("car", "no", "No car", "")}</div></fieldset>
    <fieldset><legend>What budget feels realistic for preparedness right now?</legend><div class="choices">${radio("budget", "tight", "Tight", "Free and low-cost steps first")}${radio("budget", "moderate", "Moderate", "Can spend a little each month")}${radio("budget", "comfortable", "Comfortable", "Can invest in bigger items")}</div></fieldset>
    <fieldset><legend>How much storage space do you have?</legend><div class="choices">${radio("space", "small", "Very little", "A closet, under the bed")}${radio("space", "medium", "Some", "A pantry, a few closets")}${radio("space", "large", "Plenty", "Garage, basement, or storage room")}</div></fieldset>
    <fieldset><legend>Work and getting around <span class="muted" style="font-weight:400">(check all that apply)</span></legend><p class="hint">Shapes your commute, outage, heat, and money plans. Skip it if none fit.</p><div class="choices">${UR.WORK.map(w => (w.id === "travel" ? check("selfEmployed", "I'm self-employed, a gig worker, or my income is irregular", "We'll suggest a bigger emergency fund") : "") + check("work." + w.id, w.label, w.hint)).join("")}</div></fieldset>` },
  { t: "Hazards to include", b: `
    <p class="hint">All are included by default. The bands come from your county and setting (general guidance, not an official rating).</p>
    <div class="btn-row" style="margin-bottom:12px"><button type="button" class="btn small secondary" data-hz-all>Select all</button><button type="button" class="btn small secondary" data-hz-relevant>Only higher &amp; elevated</button></div>
    <fieldset><legend class="sr-only">Hazards</legend><div class="choices">${UR.hazards.map(h => `<label class="choice"><input type="checkbox" name="hz" value="${h.id}" checked><span class="box"><span class="hz-icon" style="background:${h.color};width:34px;height:34px;border-radius:9px">${ic(h.icon)}</span><span><b>${esc(h.name)}</b><small>${esc(h.short)}</small></span><span class="rel" data-band-for="${h.id}"></span></span></label>`).join("")}</div></fieldset>
    <fieldset><legend>Winter backcountry</legend><div class="choices">${check("backcountry", "Someone at home skis, snowmobiles, or hikes in the backcountry in winter", "Adds avalanche gear and training")}</div></fieldset>` }
];
emit("start.html", {
  title: `Make my plan · ${NAME}`, desc: "A friendly questionnaire that builds your personal Utah preparedness plan. Your answers stay in your browser.",
  active: "start", page: "start", scripts: ["start"],
  body: `<div class="q-shell">
  <span class="eyebrow">Your plan &middot; <span data-stepnum>Step 1</span> of ${steps.length}</span>
  <h1 style="font-size:clamp(1.7rem,5vw,2.3rem)" data-steptitle>${steps[0].t}</h1>
  <div class="q-progress" aria-hidden="true">${steps.map((s, i) => `<span${i === 0 ? ' class="on"' : ""}></span>`).join("")}</div>
  <form id="q-form" novalidate>
    ${steps.map((s, i) => `<section class="q-step${i === 0 ? " active" : ""}" data-step="${i}" data-title="${esc(s.t)}" aria-label="Step ${i + 1}: ${esc(s.t)}">${s.b}</section>`).join("\n")}
    <p class="q-error" role="alert" aria-live="assertive"></p>
    <div class="q-nav"><button type="button" class="btn secondary" data-prev>${ic("back")} Back</button><button type="button" class="btn" data-next>Next ${ic("arrow")}</button></div>
  </form>
  <p class="small muted" style="margin-top:8px">Saved only in this browser. <button type="button" class="btn small danger" data-erase>${ic("trash")} Erase my data</button></p>
</div>`
});

// ---------------- plan (dashboard shell)
emit("plan.html", {
  title: `My plan · ${NAME}`, desc: "Your personalized Utah preparedness plan.", active: "", page: "plan", scripts: ["alerts", "plan"],
  body: `<div id="plan-root"><div class="wrap empty"><p>Loading your plan&hellip;</p><noscript><p>This page needs JavaScript to build your personal plan. Every hazard page works without it: <a href="hazards/index.html">browse hazards</a>.</p></noscript></div></div>`
});

// ---------------- hazard pages
function list(arr) { return `<ul>${arr.map(x => `<li>${cite(x)}</li>`).join("")}</ul>`; }
UR.hazards.forEach(h => {
  const root = "../";
  const others = UR.hazards.filter(o => o.id !== h.id);
  const body = `
<section class="hz-hero"><div class="wrap">
  <p class="small" style="margin:0 0 10px"><a href="index.html">${ic("back")} All hazards</a></p>
  <div class="head"><span class="hz-icon" style="background:${h.color}">${ic(h.icon)}</span><h1>${esc(h.name)}</h1></div>
  <p class="lede" style="font-size:1.12rem;max-width:46em">${cite(h.tagline)}</p>
  <div class="btn-row no-print"><a class="btn small" href="${root}start.html">Add this to my plan ${ic("arrow")}</a><button class="btn small secondary" type="button" data-print>${ic("print")} Print this page</button></div>
</div></section>
<div class="wrap hz-body">
  <div>
    <p style="font-size:1.05rem">${cite(h.summary)}</p>
    <h2>Why it matters in Utah</h2>
    ${list(h.why)}
    ${h.science ? `<details class="science"><summary>Show the science</summary>${list(h.science)}</details>` : ""}
    <h2 style="margin-top:28px">Who's most affected</h2>
    ${list(h.who)}
    ${h.id === "earthquake" ? `<div class="note sage"><strong>Look up your own address.</strong> Our sister site, ${ext(SISTER.url, SISTER.name)}, shows the nearby faults, liquefaction, and building-code shaking for any Utah address, in plain language. It also has a ${ext(SISTER.url + "faults.html", "statewide fault map")}, an ${ext(SISTER.url + "brick.html", "Is It Brick?")} self-check for older homes, and the ${ext(SISTER.url + "magna.html", "story of the 2020 Magna earthquake")}.</div>` : ""}
    <h2 style="margin-top:28px">What to do</h2>
    <div class="bda">
      <div class="card"><h3><span class="num">1</span> Before</h3>${list(h.before)}</div>
      <div class="card"><h3><span class="num" style="background:var(--rock)">2</span> During</h3>${list(h.during)}</div>
      <div class="card"><h3><span class="num" style="background:var(--sage-dark)">3</span> After</h3>${list(h.after)}</div>
    </div>
    ${h.extra ? `<h2 style="margin-top:28px">${esc(h.extraTitle)}</h2><div>${cite(h.extra)}</div>` : ""}
  </div>
  <aside class="hz-aside">
    <div class="card">
      <h3>${ic("live")} ${esc(h.liveTitle || "Live conditions")}</h3>
      <p class="small muted">${esc(h.liveNote || "Official sources, updated by the agencies themselves.")}</p>
      <ul class="live-list">${h.live.map(l => `<li><a href="${esc(UR.sources[l.src].url)}" target="_blank" rel="noopener"><span class="dot" aria-hidden="true"></span>${esc(l.label)}<span class="sr-only"> (opens in a new tab)</span></a></li>`).join("")}</ul>
      ${h.id === "earthquake" ? `<div class="quakes" id="quake-widget" style="margin-top:12px"><h3 style="font-size:1rem">Recent Utah quakes (M1.5+, 14 days)</h3><div data-quakes><p class="small muted">Loading from USGS&hellip;</p></div></div>` : ""}
    </div>
    <div class="card" style="margin-top:14px">
      <h3>Learn more</h3>
      <ul class="small">${h.learn.map(id => `<li><a href="${esc(UR.sources[id].url)}" target="_blank" rel="noopener">${esc(UR.sources[id].title)}</a> <span class="muted">(${esc(UR.sources[id].pub)})</span></li>`).join("")}</ul>
    </div>
    <div class="card no-print" style="margin-top:14px">
      <h3>Other hazards</h3>
      <ul class="small">${others.map(o => `<li><a href="${o.id}.html">${esc(o.name)}</a></li>`).join("")}</ul>
    </div>
  </aside>
</div>`;
  emit(`hazards/${h.id}.html`, { title: `${h.name} in Utah · ${NAME}`, desc: h.summary.replace(/<[^>]+>/g, ""), root, active: "hazards", page: "hazard", body, scripts: h.id === "earthquake" ? ["quakes"] : [] });
});
emit("hazards/index.html", {
  title: `Utah hazards · ${NAME}`, desc: "Plain-language, sourced guides to every major Utah hazard.", root: "../", active: "hazards", page: "hazards",
  body: `<section class="hz-hero"><div class="wrap"><span class="eyebrow">Hazard guides</span><h1>Utah hazards, one at a time</h1><p class="lede" style="max-width:44em">Each guide stands on its own: why it matters here, who's most affected, what to do before, during, and after, and links to live official conditions. Want it all sized to your household? <a href="../start.html">Make your plan</a>.</p></div></section>
<section class="block"><div class="wrap"><div class="grid three">${UR.hazards.map(h => hazardCard(h, "../")).join("")}</div></div></section>`
});

// ---------------- interactive guide tools (saved only in this browser by assets/js/tools.js)
const field = (name, label, type = "text", hint = "") => `<label class="tool-field"><span>${label}${hint ? ` <small>${hint}</small>` : ""}</span><input class="text-input" type="${type}" name="${name}" autocomplete="off"></label>`;
const keepNote = `<div class="privacy-note no-print">${ic("lock")}<span>What you type is saved only in this browser, so you can come back and print again. It's never sent anywhere, and "Erase my data" removes it.</span></div>`;
const TOOLS = {
  "family-plan": () => `
<form class="tool-form card" data-store="ur.familyPlan" data-tool="family-plan" autocomplete="off">
  ${keepNote}
  <h2>Who's at home</h2>
  <div class="tool-rows">${[1, 2, 3, 4, 5, 6].map(i => `<fieldset class="tool-row"><legend>Person ${i}</legend>${field(`m${i}.name`, "Name")}${field(`m${i}.phone`, "Cell phone", "tel")}${field(`m${i}.where`, "Work, school, or child care")}${field(`m${i}.med`, "Allergies or medical needs")}</fieldset>`).join("")}</div>
  <h2>Out-of-area contact</h2>
  <p class="hint">Someone outside your area that everyone checks in with, since long-distance calls and texts may get through when local ones don't.</p>
  <div class="tool-grid">${field("contact.name", "Name")}${field("contact.phone", "Phone", "tel")}${field("contact.email", "Email", "email")}</div>
  <h2>Meeting places</h2>
  <div class="tool-grid">${field("meet.home", "Right outside home", "text", "for a fire")}${field("meet.near", "In your neighborhood")}${field("meet.out", "Outside your neighborhood", "text", "if you can't get home")}${field("meet.town", "Out of town", "text", "if you have to evacuate")}</div>
  <h2>Important numbers</h2>
  <div class="tool-grid">${field("num.doctor", "Doctor")}${field("num.pharmacy", "Pharmacy")}${field("num.vet", "Veterinarian")}${field("num.insurance", "Insurance company and policy number")}${field("num.power", "Power company")}${field("num.gas", "Gas company")}${field("num.other", "Other")}</div>
  <div class="btn-row no-print" style="margin-top:18px"><button type="button" class="btn" data-cards>${ic("print")} Print wallet cards</button><button type="button" class="btn secondary" data-print>Print the full plan</button><button type="button" class="btn small danger" data-clear>${ic("trash")} Clear this form</button></div>
  <p class="small muted no-print" data-saved aria-live="polite" style="margin:10px 0 0"></p>
</form>
<div class="wallet-sheet" data-wallet></div>`,
  "neighbors": () => `
<form class="tool-form card" data-store="ur.neighbors" autocomplete="off">
  ${keepNote}
  <h2>Our gathering place</h2>
  <div class="tool-grid">${field("gather", "Where neighbors meet after a disaster", "text", "a driveway, park, or church parking lot")}${field("leader", "Who keeps this list")}</div>
  <h2>Neighbors</h2>
  <div class="table-wrap"><table class="tool-table"><thead><tr><th>Name</th><th>Address or unit</th><th>Phone</th><th>Skills</th><th>Equipment</th><th>May need help</th></tr></thead><tbody>${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => `<tr>${["name", "addr", "phone", "skills", "gear"].map(k => `<td><input class="text-input" type="${k === "phone" ? "tel" : "text"}" name="n${i}.${k}" aria-label="Neighbor ${i}: ${{ name: "name", addr: "address or unit", phone: "phone", skills: "skills", gear: "equipment" }[k]}"></td>`).join("")}<td><input type="checkbox" name="n${i}.help" aria-label="Neighbor ${i} may need help"></td></tr>`).join("")}</tbody></table></div>
  <h2>Gas meters and shutoffs</h2>
  <div class="tool-grid">${field("gas", "Where each home's gas meter is, and who has a wrench")}${field("water", "Where each home's main water shutoff is")}</div>
  <div class="btn-row no-print" style="margin-top:18px"><button type="button" class="btn" data-print>${ic("print")} Print the worksheet</button><button type="button" class="btn small danger" data-clear>${ic("trash")} Clear this form</button></div>
  <p class="small muted no-print" data-saved aria-live="polite" style="margin:10px 0 0"></p>
</form>`
};

// ---------------- guides
UR.guides.forEach(g => {
  const others = UR.guides.filter(o => o.id !== g.id);
  const body = `
<section class="hz-hero"><div class="wrap">
  <p class="small" style="margin:0 0 10px"><a href="index.html">${ic("back")} All guides</a></p>
  <div class="head"><span class="hz-icon" style="background:${g.color}">${ic(g.icon)}</span><h1>${esc(g.name)}</h1></div>
  <p class="lede" style="font-size:1.12rem;max-width:46em">${cite(g.tagline)}</p>
  <div class="btn-row no-print">${g.tool ? "" : `<a class="btn small" href="../start.html">Make my plan ${ic("arrow")}</a>`}<button class="btn small secondary" type="button" data-print>${ic("print")} Print this page</button></div>
</div></section>
<div class="wrap hz-body">
  <div class="guide-body">
    ${g.summary ? `<p style="font-size:1.05rem">${cite(g.summary)}</p>` : ""}
    ${g.tool ? TOOLS[g.tool]() : ""}
    ${g.sections.map(s => `<h2${s.id ? ` id="${s.id}"` : ""}>${esc(s.title)}</h2>${s.intro ? `<p>${cite(s.intro)}</p>` : ""}${s.items ? list(s.items) : ""}`).join("\n    ")}
  </div>
  <aside class="hz-aside">
    ${g.help ? `<div class="card"><h3>${ic("live")} Where to get help</h3><ul class="live-list">${g.help.map(l => `<li><a href="${esc(UR.sources[l.src].url)}" target="_blank" rel="noopener"><span class="dot" aria-hidden="true"></span>${esc(l.label)}<span class="sr-only"> (opens in a new tab)</span></a></li>`).join("")}</ul></div>` : ""}
    <div class="card"${g.help ? ' style="margin-top:14px"' : ""}>
      <h3>Learn more</h3>
      <ul class="small">${g.learn.map(id => `<li><a href="${esc(UR.sources[id].url)}" target="_blank" rel="noopener">${esc(UR.sources[id].title)}</a> <span class="muted">(${esc(UR.sources[id].pub)})</span></li>`).join("")}</ul>
    </div>
    <div class="card no-print" style="margin-top:14px">
      <h3>Other guides</h3>
      <ul class="small">${others.map(o => `<li><a href="${o.id}.html">${esc(o.name)}</a></li>`).join("")}</ul>
    </div>
  </aside>
</div>`;
  emit(`guides/${g.id}.html`, { title: `${g.name} · ${NAME}`, desc: g.tagline.replace(/<[^>]+>|\[\[[^\]]+\]\]/g, "").trim(), root: "../", active: "guides", page: "guide", body, scripts: g.tool ? ["tools"] : [] });
});
emit("guides/index.html", {
  title: `Guides · ${NAME}`, desc: "Plain-language guides to insurance, food storage, evacuating, recovering, and planning with your family and neighbors in Utah.", root: "../", active: "guides", page: "guides",
  body: `<section class="hz-hero"><div class="wrap"><span class="eyebrow">Guides</span><h1>Guides for every household</h1><p class="lede" style="max-width:44em">The things that matter in every kind of emergency: paying for it, feeding everyone, deciding when to leave, getting back on your feet, and planning with the people around you.</p></div></section>
<section class="block"><div class="wrap"><div class="grid three">${UR.guides.map(g => guideCard(g, "../")).join("")}</div></div></section>
<section class="block alt"><div class="wrap">
  <span class="eyebrow">Beyond your household</span>
  <h2>For businesses, schools, and communities</h2>
  <p class="muted" style="max-width:46em">Prepare Utah is for households. The State of Utah's Be Ready Utah program has guidance for everyone else, and it's the place to find volunteer training near you.</p>
  <div class="grid two">${UR.beyond.map(b => `<a class="card hazard-card" href="${esc(UR.sources[b.src].url)}" target="_blank" rel="noopener"><span class="hz-icon" style="background:#5B6F8A">${ic(b.icon)}</span><span><h3>${esc(b.name)}</h3><p>${esc(b.text)}</p></span><span class="sr-only"> (opens in a new tab)</span></a>`).join("")}</div>
</div></section>`
});

// ---------------- Spanish essentials (translated here; pending review by a native speaker)
const esLi = arr => `<ul>${arr.map(s => `<li>${cite(s)}</li>`).join("")}</ul>`;
const esRes = groups => groups.map(([h, ids]) => `<h3>${h}</h3><ul class="small">${ids.map(id => `<li><a href="${esc(UR.sources[id].url)}" target="_blank" rel="noopener">${esc(UR.sources[id].title)}</a> <span class="muted">(${esc(UR.sources[id].short || UR.sources[id].pub)})</span></li>`).join("")}</ul>`).join("");
emit("es/index.html", {
  lang: "es", root: "../", page: "es", alternates: { en: "", es: "es/" },
  title: `Prepárese en Utah · ${NAME}`,
  desc: "Lo esencial para prepararse en Utah, en español: alertas de emergencia por condado, primeros pasos gratis y recursos oficiales en español.",
  body: `<section class="hz-hero"><div class="wrap"><span class="eyebrow">En español</span><h1>Prepárese para emergencias en Utah</h1>
<p class="lede" style="max-width:46em">Lo más importante para su hogar: cómo recibir alertas, qué hacer en la primera hora y dónde encontrar información oficial en español. Por ahora, el plan personalizado de Prepare Utah está solo en inglés.</p>
<div class="note warm" style="max-width:46em"><strong>Traducción en revisión.</strong> Prepare Utah tradujo esta página, y todavía la está revisando una persona hispanohablante. Si algo no está claro, consulte los recursos oficiales en español de esta página.</div></div></section>
<section class="block"><div class="wrap hz-body">
<div>
  <h2>1. Reciba alertas de emergencia</h2>
  ${esLi([
    "En Utah, la mayoría de las alertas locales requieren inscripción: las órdenes de evacuación y de hervir el agua llegan a quienes se inscribieron. Inscriba el celular de cada adulto de su hogar. [[kutv-alerts-2026]] [[dem-be-informed]]",
    "Busque el enlace de su condado en la <a href=\"../alerts.html\">página de alertas por condado</a> (en inglés). Al inscribirse, busque la opción de idioma: los formularios de AlertSense, que usan condados como Beaver y Carbon, permiten elegir el español. [[alertsense-lang]]",
    "Mantenga activadas las alertas de emergencia del celular: llegan según su ubicación, gratis y sin inscripción. En iPhone: Ajustes, Notificaciones, Alertas gubernamentales. En Android: Ajustes, Notificaciones, Alertas de emergencia inalámbricas (el menú cambia según el teléfono). [[ready-es-alertas]] [[apple-alerts]] [[android-alerts]]",
    "Las reglas federales exigen que las compañías de celulares transmitan correctamente las alertas en español cuando las autoridades las envían en español. [[fcc-wea-es]]",
    "En el condado de Summit hay un canal de WhatsApp en español para avisos del condado. [[summit-notify]]",
    "En 2021, las órdenes de evacuación del incendio de Parleys Canyon llegaron solo en inglés. Si recibe una alerta que no entiende, pida ayuda a un vecino o llame al 2-1-1. [[kuer-es-parleys]] [[utah-211]]"
  ])}
  <h3>Los tres niveles de evacuación (Ready, Set, Go)</h3>
  <dl class="rsg-list">
    <dt>Ready (nivel 1: listos)</dt><dd>${cite("Existe una posible amenaza. Repase su plan y tenga lista su mochila de emergencia, a su familia y a sus mascotas. [[northfork-rsg]]")}</dd>
    <dt>Set (nivel 2: prepárense)</dt><dd>${cite("Hay una amenaza importante, y es posible que tenga que salir con poco aviso. Si necesita más tiempo para salir o tiene animales grandes, considere irse ya. [[northfork-rsg]]")}</dd>
    <dt>Go (nivel 3: váyanse)</dt><dd>${cite("El peligro es actual o inminente. Salga de inmediato. [[northfork-rsg]]")}</dd>
  </dl>
  <h2 style="margin-top:28px">2. Su primera hora: pasos gratis</h2>
  <ol class="alert-steps">${[
    "Active las alertas de emergencia del celular e inscríbase en las alertas de su condado (10 minutos).",
    "Elija dos lugares de reunión, uno cerca de casa y otro fuera de su vecindario, y un contacto fuera del área. Envíelos por mensaje de texto a todos en casa (15 minutos). [[ready-es-plan]]",
    "Presione el botón de prueba de cada alarma de humo. Cambie las que no suenen o que tengan más de 10 años (5 minutos). [[usfa-alarms]]",
    "Ubique las llaves de paso del gas, el agua y la electricidad. Si renta, pregúntele al dueño (10 minutos). [[br-fire]]",
    "Empiece su reserva de agua: llene botellas limpias con agua de la llave. Calcule 1 galón por persona al día (10 minutos). [[br-water]]",
    "Guarde en su celular el número del Centro de Control de Envenenamientos de Utah: 1-800-222-1222 (5 minutos). [[utah-poison]]"
  ].map(s => `<li>${cite(s)}</li>`).join("")}</ol>
  <h2 style="margin-top:28px">3. Riesgos importantes en Utah</h2>
  <h3>Incendio en casa</h3>
  ${esLi(["Si hay un incendio, salga, quédese afuera y llame al 911. Duerma con las puertas de las habitaciones cerradas. [[redcross-es-fuego]] [[fsri-close]]", "La Cruz Roja instala hasta tres alarmas de humo gratis en hogares de Utah, y puede pedir la visita en español. [[redcross-ut-hfc]] [[redcross-es-alarma]]"])}
  <h3>Calor extremo</h3>
  ${esLi(["Nunca deje a un niño ni a una mascota en un carro estacionado. [[nhtsa-heatstroke]]", "Si hace más de 90 °F dentro de la casa, un ventilador no basta: vaya a un lugar con aire acondicionado. Para encontrar un lugar fresco, llame al 2-1-1. [[cdc-heat-es]] [[cdc-heat-about]] [[utah-211]]"])}
  <h3>Terremotos</h3>
  ${esLi(["Agáchese, cúbrase y agárrese hasta que deje de temblar. [[ready-es-terremotos]]", "La guía de Utah sobre terremotos, “Echando raíces en tierra de terremotos”, está en español. [[ugs-roots-es]]"])}
  <h3>Agua</h3>
  ${esLi(["Si su sistema de agua ordena hervirla, hiérvala a borbotones durante 1 minuto (3 minutos a más de 5,000 pies) antes de tomarla, cocinar o lavarse los dientes. Si la orden dice que no la tome, hervirla no sirve: use agua embotellada. [[cdc-water-es]] [[epa-disinfect]]"])}
  <h3>Humo de incendios forestales</h3>
  ${esLi(["Consulte la calidad del aire en AirNow en español y siga los consejos de la EPA para protegerse del humo. [[airnow-es]] [[epa-humo-es]]"])}
</div>
<aside class="hz-aside">
  <div class="card">
    <h2 style="font-size:1.25rem">Recursos oficiales en español</h2>
    ${esRes([
      ["Ready.gov (FEMA)", ["ready-es", "ready-es-plan", "ready-es-plan-form", "ready-es-kit", "ready-es-alertas", "ready-es-calor", "ready-es-terremotos", "ready-es-forestales", "ready-es-apagones", "ready-es-hogar"]],
      ["Utah", ["ugs-roots-es", "eq-es", "br-es-principios", "br-es-kit", "br-es-comunicacion", "br-es-higiene", "br-es-agua"]],
      ["Salud y aire", ["cdc-heat-es", "cdc-water-es", "epa-humo-es", "airnow-es"]],
      ["Cruz Roja", ["redcross-es-fuego", "redcross-es-alarma"]],
      ["Noticias de Utah en español", ["kuer-es", "kpcw-es"]]
    ])}
  </div>
  <div class="card" style="margin-top:14px">
    <h2 style="font-size:1.25rem">Ayuda</h2>
    ${esLi(["Emergencias: llame al 911.", "211 Utah conecta con servicios locales y atiende en español: marque 2-1-1. [[utah211-dir]]", "Línea de ayuda para desastres, gratis y las 24 horas: llame o envíe un texto al 1-800-985-5990 y oprima 2 para español. [[samhsa-ddh]]"])}
  </div>
</aside>
</div></section>`
});

// ---------------- alerts by county
emit("alerts.html", {
  title: `Emergency alerts in Utah, county by county · ${NAME}`, active: "alerts", page: "alerts",
  desc: "How to get emergency alerts anywhere in Utah: county sign-up links, phone settings, evacuation zones, and what Ready, Set, Go means.",
  body: `<section class="hz-hero"><div class="wrap"><span class="eyebrow">Alerts</span><h1>Get emergency alerts where you live</h1><p class="lede" style="max-width:46em">${cite(UR.alertsLede || "")}</p></div></section>
<section class="block"><div class="wrap grid two" style="align-items:start">
  <div>
    <h2>Everyone in Utah</h2>
    <ol class="alert-steps">${UR.alertSteps.map(s => `<li><strong>${esc(s.title)}.</strong> ${cite(s.text)}</li>`).join("")}</ol>
    <h2 id="ready-set-go" style="margin-top:28px">What "Ready, Set, Go" means</h2>
    <dl class="rsg-list">${UR.readySetGo.map(s => `<dt>${esc(s.term)}</dt><dd>${cite(s.text)}</dd>`).join("")}</dl>
    <p class="small muted">Links checked ${esc(UR.ALERTS_CHECKED)}. Agencies change alert vendors from time to time; if a link is out of date, your county sheriff or emergency manager can point you to the current one.</p>
  </div>
  <div>
    <h2>Your county</h2>
    <p class="no-print"><label for="county-jump" class="q-label" style="display:block">Jump to your county</label><select id="county-jump" data-jump><option value="">Choose your county&hellip;</option>${UR.counties.map(c => `<option value="county-${c.toLowerCase().replace(/\s+/g, "-")}">${c} County</option>`).join("")}</select></p>
    <div class="county-list">${UR.counties.map(c => UR.alertsCard(c, { heading: true })).join("")}</div>
  </div>
</div></section>`
});

// ---------------- sources
const byPub = {};
Object.entries(UR.sources).forEach(([id, s]) => { (byPub[s.pub] = byPub[s.pub] || []).push([id, s]); });
const pubs = Object.keys(byPub).sort((a, b) => a.localeCompare(b));
emit("sources.html", {
  title: `Sources · ${NAME}`, desc: "Every source used on this site, grouped by publisher.", active: "sources", page: "sources",
  body: `<section class="hz-hero"><div class="wrap"><span class="eyebrow">Sources</span><h1>Where every fact comes from</h1><p class="lede" style="max-width:46em">Every factual claim on this site links to one of the ${Object.keys(UR.sources).length} sources below. Links were checked on ${esc(UR.SOURCES_CHECKED)}. Many figures are reused from the founder's two verified plans: <em>${ext(SISTER.url, SISTER.name)}</em>, our sister site for earthquakes, and <em>HiveWatch Utah</em> for outbreaks.</p>
<div class="note warm"><strong>How to read numbers here.</strong> Anything marked <em>(estimate)</em> is a planning guess, not a fact. Anything in [brackets] has not been confirmed and should be checked before you rely on it. Official figures carry the "as of" date their source gave. Some federal sites (CDC, BLS, DOI) block automated link checkers; those links were confirmed in a real browser.</div></div></section>
<section class="block"><div class="wrap">${pubs.map(p => `<div class="src-group"><h2 style="font-size:1.25rem">${esc(p)}</h2><ul>${byPub[p].map(([id, s]) => `<li id="src-${id}"><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.title)}</a><small>${esc(s.url)}</small></li>`).join("")}</ul></div>`).join("")}</div></section>`
});

// ---------------- about
emit("about.html", {
  title: `About · ${NAME}`, desc: "About this project, its founder, and how your privacy is protected.", active: "about", page: "about",
  body: `<section class="hz-hero"><div class="wrap"><span class="eyebrow">About</span><h1>About this project</h1><p class="lede" style="max-width:44em">A calm, sourced, Utah-specific place to get your household ready, from a neighbor who lives here.</p></div></section>
<section class="block"><div class="wrap grid two" style="align-items:start">
  <div>
    <div class="note warm" style="margin-bottom:18px"><strong>Placeholder text.</strong> The founder will replace this section. Everything below in this column is a draft to edit.</div>
    <h2>Why I built this</h2>
    <p>[Founder: a few sentences in your own voice. For example: I'm a Utah writer, artist, and speaker. I live on the Wasatch Front, I've felt the ground move, and I've breathed inversion air for more winters than I can count. I wanted one calm place that turns all of Utah's good-but-scattered guidance into something a family can actually do this weekend.]</p>
    <h2>Who I am</h2>
    <p>[Founder bio.]</p>
    <h2>How this is made</h2>
    <p>This site translates official sources (Be Ready Utah, the Utah Geological Survey, Utah DHHS, Utah DEQ, USGS, NWS, the Utah Avalanche Center, Ready.gov, CDC, USU Extension, and others) into plain language. It doesn't run its own hazard models. Figures are reused from the founder's ${SISTER.name} and HiveWatch Utah plans, which were checked in October 2026. See <a href="sources.html">all sources</a>.</p>
    <p>Before a public launch, the plan is to have a seismologist, a medical advisor, and a pharmacist review the hazard and health wording. [Founder: update when advisors sign on.]</p>
    <h2 id="sister">Our sister site</h2>
    <p>${NAME} covers every hazard at the household level. For earthquakes in depth, visit ${ext(SISTER.url, SISTER.name)}. Type in an address to see nearby faults, liquefaction, and building-code shaking, explore the statewide fault map, or check whether an older brick building may be unreinforced masonry. Both sites follow the same rules: plain language, a source behind every fact, and no tracking.</p>
    <h2>Independent</h2>
    <p>${NAME} is an independent project. It is not affiliated with the State of Utah or its <a href="https://beready.utah.gov/" target="_blank" rel="noopener">Be Ready Utah</a> program, which we recommend and link to often.</p>
  </div>
  <div>
    <div class="card" id="privacy">
      <h2>${ic("lock")} Privacy</h2>
      <ul>
        <li><strong>No accounts, no tracking, no analytics, no cookies.</strong></li>
        <li>Your answers and checklist progress are saved only in your browser's localStorage, so they're there when you come back on the same device.</li>
        <li>Nothing you enter is sent to any server. The only outside request is the optional recent-earthquake list, which loads public data directly from USGS.</li>
        <li>Clearing your browser data, or the button below, removes everything.</li>
      </ul>
      <button type="button" class="btn danger" data-erase>${ic("trash")} Erase my data</button>
    </div>
    <div class="card" style="margin-top:16px">
      <h2>Disclaimer</h2>
      <p>For education and preparedness only. This site is not medical, engineering, legal, insurance, or financial advice, not an inspection or a risk rating, and not an official alert. Hazard priority bands are general guidance based on county and setting. Utah has no public earthquake early warning. <strong>In an emergency, call 911.</strong></p>
    </div>
    <div class="card" style="margin-top:16px">
      <h2>Contact</h2>
      <p>[Founder: add a contact email or form link. Corrections are welcome; please include a source.]</p>
    </div>
  </div>
</div></section>`
});

// favicon
write("assets/favicon.svg", `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="#D9A441"/><g fill="none" stroke="#1F3A5F" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"><path d="M16 4l9.5 5.5v11L16 26l-9.5-5.5v-11z"/><path d="M11 13h10M10.5 16.5h11M11.5 20h9"/></g></svg>`);
// Root-relative links, because hosts serve this page at whatever URL was missing.
emit("404.html", { title: `Not found · ${NAME}`, desc: "Page not found", root: "/", body: `<div class="wrap empty"><h1>That page isn't here</h1><p>It may have moved, or the link may be mistyped.</p><div class="btn-row" style="justify-content:center"><a class="btn" href="/">Go home</a><a class="btn secondary" href="/start.html">Make my plan</a></div></div>` });

// Search engines: every public page except the personal dashboard, which is empty until someone fills it in.
write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.filter(p => p !== "plan.html").map(p => `  <url><loc>${SITE}${p.replace(/(^|\/)index\.html$/, "$1")}</loc></url>`).join("\n")}
</urlset>
`);
