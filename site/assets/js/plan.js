/* Dashboard: renders the personalized plan from localStorage. */
(function () {
  var UR = window.UR, ic = UR.icon, cite = UR.cite, esc = UR.esc;
  var TAG = { earthquake: "Earthquake", pandemic: "Outbreaks", gsl: "Drought & lake", wildfire: "Wildfire", air: "Air quality", flood: "Flood", landslide: "Landslide", radon: "Radon", power: "Power", avalanche: "Avalanche", economic: "Money", heat: "Heat", fire: "Home fire" };
  var COST = ["Free", "$", "$$", "$$$"];
  function hz(id) { for (var i = 0; i < UR.hazards.length; i++) if (UR.hazards[i].id === id) return UR.hazards[i]; }
  function money(n) { return "$" + Math.round(n).toLocaleString("en-US"); }
  function pct(a, b) { return b ? Math.round(a / b * 100) : 0; }
  function bar(p, label) { return '<div class="progress"><div class="bar" role="progressbar" aria-label="' + esc(label) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + p + '"><span style="width:' + p + '%"></span></div><span class="pct">' + p + '%</span></div>'; }

  document.addEventListener("DOMContentLoaded", function () {
    var rootEl = document.getElementById("plan-root");
    var p = UR.store.get("ur.profile", null);
    if (!p || p.draft || !p.county) {
      rootEl.innerHTML = '<div class="wrap empty"><span class="hz-icon" style="background:var(--gold);margin:0 auto 14px;width:64px;height:64px;border-radius:18px;color:var(--blue)">' + ic("hive") + '</span><h1>Let\'s make your plan</h1><p class="muted" style="max-width:34em;margin:0 auto 18px">' + (p && p.draft ? "You started the questionnaire but haven't finished. Pick up where you left off." : "Answer a few questions and your personal plan will appear here. Your answers stay in this browser.") + '</p><a class="btn gold" href="start.html">' + (p && p.draft ? "Finish my answers " : "Start my plan ") + ic("arrow") + '</a></div>';
      return;
    }
    var checks = UR.store.get("ur.checks", {});
    var h = UR.household(p);
    var sel = p.hazards && p.hazards.length ? p.hazards : UR.hazards.map(function (x) { return x.id; });
    var pr = UR.priorities(p);
    var cl = UR.buildChecklist(p);
    var allItems = [1, 2, 3, 4].reduce(function (a, t) { return a.concat(cl[t]); }, []);
    var w14 = UR.water(p, 14);
    var setting = UR.settings.filter(function (s) { return s.id === p.setting; })[0];

    var who = [];
    if (h.adults) who.push(h.adults + " adult" + (h.adults > 1 ? "s" : ""));
    if (h.seniors) who.push(h.seniors + " older adult" + (h.seniors > 1 ? "s" : ""));
    if (h.kids) who.push(h.kids + " child" + (h.kids > 1 ? "ren" : ""));
    if (h.infants) who.push(h.infants + " baby" + (h.infants > 1 ? "/toddlers" : "/toddler"));
    if (h.petsSmall) who.push(h.petsSmall + " small pet" + (h.petsSmall > 1 ? "s" : ""));
    if (h.petsLarge) who.push(h.petsLarge + " large dog" + (h.petsLarge > 1 ? "s" : ""));
    var homeTxt = { house: "house", apartment: "apartment", mobile: "manufactured home" }[p.homeType] || "home";
    if (p.brick === "yes") homeTxt = "older brick " + homeTxt;
    var html = "";

    // ---------- hero
    html += '<section class="dash-hero"><div class="wrap">' +
      '<p class="print-only"><strong>Prepare Utah &middot; personal preparedness plan</strong> &middot; prepareutah.com &middot; printed ' + new Date().toLocaleDateString("en-US") + '</p>' +
      '<span class="eyebrow" style="color:var(--gold-light)">Your plan</span>' +
      '<h1>' + esc(p.county) + ' County, ' + esc(setting ? setting.label.toLowerCase() : "") + '</h1>' +
      '<p>' + esc(who.join(", ")) + ' &middot; ' + (p.tenure === "rent" ? "renting" : "owning") + ' a' + (/^[aeiou]/.test(homeTxt) ? "n " : " ") + esc(homeTxt) + '</p>' +
      '<div class="stat-row">' +
      '<div class="stat"><b data-testid="people">' + h.people + '</b><span>' + (h.people === 1 ? "person" : "people") + (h.pets ? " + " + h.pets + " pet" + (h.pets > 1 ? "s" : "") : "") + '</span></div>' +
      '<div class="stat"><b data-testid="water14">' + w14.total + ' gal</b><span>water for 14 days</span></div>' +
      '<div class="stat"><b>' + sel.length + '</b><span>hazards in your plan</span></div>' +
      '<div class="stat"><b data-overall-pct>0%</b><span>of your checklist done</span></div>' +
      '</div>' +
      '<div class="toolbar no-print" style="margin-top:18px"><button class="btn gold small" type="button" data-print>' + ic("print") + ' Print or save as PDF</button><a class="btn small secondary" style="color:#fff;border-color:rgba(255,255,255,.5)" href="start.html">Edit my answers</a><button class="btn small secondary" style="color:#fff;border-color:rgba(255,255,255,.5)" type="button" data-erase>' + ic("trash") + ' Erase my data</button></div>' +
      '</div></section>';

    // ---------- first hour (free steps; ids shared with the checklist where they match)
    var fh = UR.firstHour(p), fhIds = fh.map(function (s) { return s.id; });
    var fhMins = fh.reduce(function (a, s) { return a + s.mins; }, 0);
    html += '<section class="dash-section" id="first-hour"><div class="wrap"><div class="card first-hour">' +
      '<h2>' + ic("clock") + ' Start here: your first hour</h2>' +
      '<p class="muted small">' + fh.length + ' free steps, about ' + fhMins + ' minutes in all <span class="est">(estimate)</span>. Each one protects you right away.</p>' +
      '<ol class="checklist fh-list">' + fh.map(function (s) {
        return '<li data-id="' + s.id + '"' + (checks[s.id] ? ' class="done"' : "") + '><label><input type="checkbox" data-check="' + s.id + '"' + (checks[s.id] ? " checked" : "") + '><span class="nm">' + esc(s.name) + '</span></label>' +
          '<div class="meta"><span class="tag free">Free</span><span class="tag">' + s.mins + ' min</span></div><div class="det">' + cite(s.detail) + '</div></li>';
      }).join("") + '</ol><p class="small" data-fh-progress style="margin:10px 0 0"></p></div></div></section>';

    // ---------- priorities
    var order = sel.slice().sort(function (a, b) { return pr[b].band - pr[a].band || sel.indexOf(a) - sel.indexOf(b); });
    html += '<section class="dash-section" id="priorities"><div class="wrap"><h2>' + ic("shield") + ' What matters most for you</h2>' +
      '<p class="muted small">General guidance from your county, setting, and household, not an official risk rating. Tap a hazard to see why. Even "Lower" hazards can happen.</p><div class="prio-list">' +
      order.map(function (id) {
        var x = hz(id), r = pr[id];
        return '<details class="prio"><summary><span class="hz-icon" style="background:' + x.color + '">' + ic(x.icon) + '</span><span class="nm">' + esc(x.name) + '</span><span class="band band-' + r.band + '">' + UR.BANDS[r.band] + '</span></summary><div class="why"><ul>' +
          r.reasons.map(function (s) { return "<li>" + cite(s) + "</li>"; }).join("") + '</ul><p style="margin:8px 0 0"><a href="hazards/' + id + '.html">Read the ' + esc(x.name.toLowerCase()) + ' guide</a></p></div></details>';
      }).join("") + '</div></div></section>';

    // ---------- county alerts
    if (UR.alertsCard) html += '<section class="dash-section" id="alerts"><div class="wrap"><h2>' + ic("bell") + ' Alerts for ' + esc(p.county) + ' County</h2>' +
      '<p class="muted small">Local alerts in Utah are mostly opt-in: signing up is how evacuation orders reach you. Do this once for every adult at home.</p>' + UR.alertsCard(p.county) + '</div></section>';

    // ---------- buy first / free first (re-rendered on change)
    html += '<section class="dash-section" id="first"><div class="wrap"><h2>' + ic("list") + ' Where to start</h2><div class="grid two">' +
      '<div class="card"><h3>Buy first</h3><p class="small muted">The most protective items for your household' + (p.budget === "tight" ? ", favoring low-cost ones because you said money is tight" : p.budget === "moderate" ? ", within a moderate budget" : "") + '. Medical needs come first.</p><ol class="buy-list" data-buy></ol></div>' +
      '<div class="card"><h3>Free this week</h3><p class="small muted">No-cost steps that protect you right away.</p><ol class="buy-list" data-free></ol></div>' +
      '</div></div></section>';

    // ---------- checklist
    html += '<section class="dash-section" id="checklist"><div class="wrap"><h2>' + ic("check") + ' Your checklist</h2>' +
      '<p class="muted small">Build it like a staircase: finish 7 days, then grow to 14, 30, and 90. Water and food amounts are totals for that length of time, sized for your household, so each tier replaces the one before. Items shared by several hazards appear once, tagged with the hazards they cover.</p>' +
      '<div class="card" style="margin-bottom:14px"><strong>Overall progress</strong>' + '<div data-overall-bar></div></div>' +
      '<div class="tier-tabs no-print" role="tablist" aria-label="Checklist tiers">' +
      UR.TIERS.map(function (t, i) { return '<button role="tab" id="tab-' + t.id + '" aria-controls="panel-' + t.id + '" aria-selected="' + (i === 0) + '" tabindex="' + (i === 0 ? 0 : -1) + '" data-tier="' + t.n + '">' + esc(t.short) + '<span class="mini" data-tier-mini="' + t.n + '"></span></button>'; }).join("") + '</div>' +
      UR.TIERS.map(function (t, i) {
        var items = cl[t.n], cats = [];
        items.forEach(function (it) { if (cats.indexOf(it.cat) === -1) cats.push(it.cat); });
        var lo = UR.COST_PER_ADULT[t.n][0] * h.people, hi = UR.COST_PER_ADULT[t.n][1] * h.people;
        return '<div class="tier-panel' + (i === 0 ? " active" : "") + '" role="tabpanel" id="panel-' + t.id + '" aria-labelledby="tab-' + t.id + '" data-panel="' + t.n + '">' +
          '<h3 class="print-only">' + esc(t.label) + '</h3>' +
          '<div class="card" style="margin-bottom:10px"><p style="margin:0 0 8px"><strong>' + esc(t.label) + '.</strong> ' + cite(t.blurb) + '</p>' +
          '<div data-tier-bar="' + t.n + '"></div>' +
          '<p class="small muted" style="margin:8px 0 0">Rough cost to build this tier from scratch: ' + money(lo) + '&ndash;' + money(hi) + ' for ' + h.people + ' ' + (h.people === 1 ? "person" : "people") + ' <span class="est">(estimate from the HiveWatch Utah plan, per adult; children usually cost less, and what you already own counts)</span>.'+'</p></div>' +
          cats.map(function (c) {
            return '<h4 class="cat-h">' + esc(c) + '</h4><ul class="checklist">' + items.filter(function (it) { return it.cat === c; }).map(function (it) {
              var tags = it.tags[0] === "all" ? '<span class="tag all">All hazards</span>' : it.tags.map(function (g) { return '<span class="tag">' + esc(TAG[g] || g) + '</span>'; }).join("");
              var cost = it.cost === 0 ? '<span class="tag free">Free</span>' : '<span class="tag cost" title="Rough cost (estimate)">' + COST[it.cost] + '</span>';
              return '<li data-id="' + it.id + '"' + (checks[it.id] ? ' class="done"' : "") + '><label><input type="checkbox" data-check="' + it.id + '"' + (checks[it.id] ? " checked" : "") + '><span class="nm">' + it.name + '</span></label>' +
                '<div class="meta">' + tags + cost + (it.kind === "do" ? '<span class="tag kind">To do</span>' : "") + (it.crit ? '<span class="tag" style="background:#F6DCCB;color:#7E3A1B">Medical priority</span>' : "") + '</div>' +
                (it.detail ? '<div class="det">' + cite(it.detail) + '</div>' : "") + '</li>';
            }).join("") + '</ul>';
          }).join("") + '</div>';
      }).join("") + '</div></section>';

    // ---------- additions
    var adds = UR.additions(p);
    if (adds.length) html += '<section class="dash-section" id="household"><div class="wrap"><h2>' + ic("home") + ' Just for your household</h2><p class="muted small">Based on your answers about health, home, family, and resources.</p><div class="add-grid">' +
      adds.map(function (a) { return '<div class="card add-card" data-add="' + a.id + '"><h3>' + ic(a.icon) + esc(a.title) + '</h3><ul>' + a.items.map(function (s) { return "<li>" + cite(s) + "</li>"; }).join("") + '</ul></div>'; }).join("") + '</div></div></section>';

    // ---------- action plans
    html += '<section class="dash-section" id="actions"><div class="wrap"><h2>' + ic("walk") + ' Before, during, and after</h2><p class="muted small">Quick action plans for each hazard you included, ordered by priority. Each links to live conditions.</p>' +
      order.map(function (id, i) {
        var x = hz(id);
        function ul(a) { return "<ul>" + a.map(function (s) { return "<li>" + cite(s) + "</li>"; }).join("") + "</ul>"; }
        return '<details class="action"' + (i === 0 ? " open" : "") + '><summary><span class="hz-icon" style="background:' + x.color + ';width:34px;height:34px;border-radius:9px">' + ic(x.icon) + '</span>' + esc(x.name) + ' <span class="band band-' + pr[id].band + '" style="margin-left:6px">' + UR.BANDS[pr[id].band] + '</span></summary><div class="inner"><div class="bda">' +
          '<div class="card"><h3><span class="num">1</span> Before</h3>' + ul(x.before) + '</div>' +
          '<div class="card"><h3><span class="num" style="background:var(--rock)">2</span> During</h3>' + ul(x.during) + '</div>' +
          '<div class="card"><h3><span class="num" style="background:var(--sage-dark)">3</span> After</h3>' + ul(x.after) + '</div></div>' +
          '<p class="small" style="margin:12px 0 0"><strong>' + esc(x.liveTitle || "Live conditions") + ':</strong> ' + x.live.map(function (l) { return '<a href="' + esc(UR.sources[l.src].url) + '" target="_blank" rel="noopener">' + esc(l.label) + '</a>'; }).join(" &middot; ") + ' &middot; <a href="hazards/' + id + '.html">Full guide</a></p></div></details>';
      }).join("") + '</div></section>';

    html += '<section class="dash-section"><div class="wrap"><div class="note warm small">This plan is general education based on your answers, not medical, engineering, or legal advice. Quantities marked <em>(estimate)</em> are planning guesses. <strong>In an emergency, call 911.</strong></div></div></section>';
    rootEl.innerHTML = html;

    // ---------- behavior
    function refresh() {
      var done = 0;
      allItems.forEach(function (it) { if (checks[it.id]) done++; });
      var op = pct(done, allItems.length);
      rootEl.querySelector("[data-overall-pct]").textContent = op + "%";
      rootEl.querySelector("[data-overall-bar]").innerHTML = bar(op, "Overall checklist progress") + '<p class="small muted" style="margin:4px 0 0">' + done + " of " + allItems.length + " items done</p>";
      UR.TIERS.forEach(function (t) {
        var its = cl[t.n], d = its.filter(function (it) { return checks[it.id]; }).length, tp = pct(d, its.length);
        rootEl.querySelector('[data-tier-bar="' + t.n + '"]').innerHTML = bar(tp, t.label + " progress") + '<p class="small muted" style="margin:4px 0 0">' + d + " of " + its.length + " done</p>";
        rootEl.querySelector('[data-tier-mini="' + t.n + '"]').textContent = tp + "%";
      });
      function li(it) { return '<li><span><strong>' + it.name + '</strong> <span class="tag ' + (it.cost ? "cost" : "free") + '">' + COST[it.cost] + '</span><br><span class="small muted">' + esc(UR.TIERS[it.tier - 1].short) + ' list &middot; ' + esc(it.cat) + '</span></span></li>'; }
      var b = UR.buyFirst(p, cl, checks), f = UR.freeFirst(p, cl, checks, fhIds);
      var fd = fhIds.filter(function (id) { return checks[id]; }).length;
      rootEl.querySelector("[data-fh-progress]").innerHTML = fd === fh.length
        ? "<strong>First hour done.</strong> Next up: <a href=\"#checklist\">your 7-day checklist</a>."
        : fd + " of " + fh.length + " done";
      rootEl.querySelector("[data-buy]").innerHTML = b.length ? b.map(li).join("") : '<li><span>All of your first items are done. Nice work.</span></li>';
      rootEl.querySelector("[data-free]").innerHTML = f.length ? f.map(li).join("") : '<li><span>All free steps done.</span></li>';
    }
    rootEl.addEventListener("change", function (e) {
      var id = e.target.getAttribute("data-check"); if (!id) return;
      if (e.target.checked) checks[id] = true; else delete checks[id];
      UR.store.set("ur.checks", checks);
      rootEl.querySelectorAll('li[data-id="' + id + '"]').forEach(function (l) { l.classList.toggle("done", e.target.checked); });
      rootEl.querySelectorAll('[data-check="' + id + '"]').forEach(function (c) { c.checked = e.target.checked; });
      refresh();
    });
    var tabs = [].slice.call(rootEl.querySelectorAll('[role="tab"]'));
    function sel_(i, focus) {
      tabs.forEach(function (t, j) { t.setAttribute("aria-selected", j === i); t.tabIndex = j === i ? 0 : -1; });
      rootEl.querySelectorAll(".tier-panel").forEach(function (pn, j) { pn.classList.toggle("active", j === i); });
      if (focus) tabs[i].focus();
      UR.store.set("ur.tab", i);
    }
    tabs.forEach(function (t, i) {
      t.addEventListener("click", function () { sel_(i); });
      t.addEventListener("keydown", function (e) { if (e.key === "ArrowRight") sel_((i + 1) % tabs.length, true); if (e.key === "ArrowLeft") sel_((i + tabs.length - 1) % tabs.length, true); });
    });
    var lastTab = UR.store.get("ur.tab", 0); if (lastTab > 0 && lastTab < 4) sel_(lastTab);
    // Re-bind erase/print buttons that were rendered after common.js ran.
    rootEl.querySelectorAll("[data-print]").forEach(function (b) { b.addEventListener("click", function () { window.print(); }); });
    rootEl.querySelectorAll("[data-erase]").forEach(function (b) { b.addEventListener("click", function () { if (!confirm("Erase your answers and checklist progress from this browser? This can't be undone.")) return; UR.store.eraseAll(); UR.toast("Your data has been erased from this browser."); setTimeout(function () { location.reload(); }, 900); }); });
    refresh();
  });
})();
