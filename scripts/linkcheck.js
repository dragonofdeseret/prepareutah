/* Checks every outside link the site depends on: the source registry and the county alert sign-ups.
   Run: node scripts/linkcheck.js    (Node 18+; prints a Markdown report; exits 1 if anything is broken)
   Runs monthly on GitHub through .github/workflows/linkcheck.yml, which files the report as an issue. */
const path = require("path");
const JS = path.resolve(__dirname, "..", "site", "assets", "js");
["sources", "hazards", "planner", "icons", "render", "alerts", "guides"].forEach(f => require(path.join(JS, f + ".js")));
const UR = globalThis.UR;

// These sites refuse scripted requests (403, 429, even a fake 404), at least from GitHub's servers,
// but load in a browser: "check by hand."
const BLOCKS_BOTS = ["cdc.gov", "nhtsa.gov", "fema.gov", "cpsc.gov", "bls.gov", "doi.gov", "fda.gov", "usda.gov", "foodsafety.gov", "ftc.gov", "osha.gov", "travel.state.gov", "oley.org", "deseret.com",
  "doi.org", "naic.org", "ncbi.nlm.nih.gov", "utahavalanchecenter.org", "shakeout.org", "fcc.gov", "byu.edu"];
const UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36";

const links = new Map();  // url -> where it's used
function add(url, where) { if (url) links.set(url, (links.get(url) || []).concat(where)); }
Object.entries(UR.sources).forEach(([id, s]) => add(s.url, `source \`${id}\``));
Object.entries(UR.countyAlerts).forEach(([county, c]) => {
  add(c.url, `${county} County sign-up`); add(c.via, `${county} County official page`);
  (c.cities || []).forEach(x => add(x.url, `${county} County: ${x.name}`));
  if (c.evac) add(c.evac.url, `${county} County evacuation map`);
});

async function check(url) {
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const r = await fetch(url, { redirect: "follow", headers: { "User-Agent": UA, Accept: "text/html,application/pdf,*/*" }, signal: AbortSignal.timeout(30000) });
      if (r.ok || attempt === 1) return r.status;
    } catch (e) { if (attempt === 1) return e.name === "TimeoutError" ? "timeout" : "no connection"; }
    await new Promise(res => setTimeout(res, 3000));
  }
}

(async () => {
  const urls = [...links.keys()], results = [];
  for (let i = 0; i < urls.length; i += 8) {
    const batch = urls.slice(i, i + 8);
    (await Promise.all(batch.map(check))).forEach((status, j) => results.push({ url: batch[j], status }));
  }
  const host = u => new URL(u).hostname;
  const blocked = results.filter(r => typeof r.status === "number" && r.status >= 400 && r.status < 500 && BLOCKS_BOTS.some(d => host(r.url).endsWith(d)));
  const ok = r => typeof r.status === "number" && r.status >= 200 && r.status < 300;
  const broken = results.filter(r => !ok(r) && !blocked.includes(r));
  const row = r => `| ${r.status} | ${r.url} | ${links.get(r.url).join("; ")} |`;
  console.log(`# Link check, ${new Date().toISOString().slice(0, 10)}\n`);
  console.log(`Checked ${results.length} links: ${results.length - broken.length - blocked.length} OK, ${broken.length} broken, ${blocked.length} blocked to scripts.\n`);
  if (broken.length) console.log(`## Broken\n\nFix these in \`site/assets/js/sources.js\` or \`site/assets/js/alerts.js\`, then rebuild.\n\n| Status | Link | Used by |\n|---|---|---|\n${broken.map(row).join("\n")}\n`);
  if (blocked.length) console.log(`## Check by hand\n\nThese sites block scripts. Open each in a browser to confirm it still loads.\n\n| Status | Link | Used by |\n|---|---|---|\n${blocked.map(row).join("\n")}\n`);
  process.exit(broken.length ? 1 : 0);
})();
