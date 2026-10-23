/* Questionnaire: multi-step, saves to localStorage only, then opens plan.html */
(function () {
  var UR = window.UR;
  document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("q-form"); if (!form) return;
    var stepsEls = [].slice.call(form.querySelectorAll(".q-step"));
    var bars = [].slice.call(document.querySelectorAll(".q-progress span"));
    var titleEl = document.querySelector("[data-steptitle]"), numEl = document.querySelector("[data-stepnum]");
    var prev = form.querySelector("[data-prev]"), next = form.querySelector("[data-next]"), err = form.querySelector(".q-error");
    var cur = 0;
    var saved = UR.store.get("ur.profile", null);
    var p = Object.assign(UR.defaultProfile(), saved || {});
    p.med = Object.assign(UR.defaultProfile().med, (saved && saved.med) || {});
    p.diet = Object.assign(UR.defaultProfile().diet, (saved && saved.diet) || {});
    p.diet.allergens = Object.assign(UR.defaultProfile().diet.allergens, (saved && saved.diet && saved.diet.allergens) || {});
    p.work = Object.assign(UR.defaultProfile().work, (saved && saved.work) || {});

    function getPath(o, k) { return k.split(".").reduce(function (a, s) { return a ? a[s] : undefined; }, o); }
    function setPath(o, k, v) { var s = k.split("."), last = s.pop(); s.reduce(function (a, x) { return a[x] = a[x] || {}; }, o)[last] = v; }

    // populate
    [].slice.call(form.elements).forEach(function (el) {
      if (!el.name || el.name === "hz") return;
      var v = getPath(p, el.name);
      if (el.type === "radio") el.checked = (v === el.value);
      else if (el.type === "checkbox") el.checked = !!v;
      else if (v !== undefined && v !== null) el.value = v;
    });
    if (p.hazards && p.hazards.length) form.querySelectorAll('input[name="hz"]').forEach(function (c) { c.checked = p.hazards.indexOf(c.value) !== -1; });

    // Sub-questions (allergens, more diets) show only when their parent box is checked.
    function syncReveal() {
      form.querySelectorAll("[data-reveal]").forEach(function (r) {
        var c = form.querySelector('[name="' + r.dataset.reveal + '"]'); r.hidden = !(c && c.checked);
      });
    }
    // The free-text diet box checks the boxes it recognizes. It remembers which ones it checked,
    // so editing the text can uncheck them again, and it never re-checks a box the person unchecked.
    var dietBox = form.querySelector('[name="diet.otherText"]'), dietOut = form.querySelector("[data-detect]");
    var auto = {}, dismissed = {};
    var LABEL = { celiac: "Celiac or gluten-free", allergy: "Food allergies", formula: "Infant formula" };
    UR.DIETS.forEach(function (d) { LABEL[d.id] = d.label; });
    UR.ALLERGENS.forEach(function (a) { LABEL["a-" + a.id] = a.one || a.label; });
    function detect(apply) {
      if (!dietBox) return;
      var r = UR.detectDiets(dietBox.value);
      var names = r.diets.map(function (d) { return "diet." + d; }).concat(r.allergens.map(function (a) { return "diet.allergens." + a; }));
      var labels = r.diets.filter(function (d) { return d !== "allergy" || !r.allergens.length; }).map(function (d) { return LABEL[d]; })
        .concat(r.allergens.map(function (a) { return LABEL["a-" + a] + " allergy"; }));
      if (apply) {
        Object.keys(auto).forEach(function (n) {
          if (names.indexOf(n) !== -1) return;
          var c = form.querySelector('[name="' + n + '"]'); if (c) c.checked = false; delete auto[n];
        });
        names.forEach(function (n) {
          var c = form.querySelector('[name="' + n + '"]');
          if (c && !c.checked && !dismissed[n]) { c.checked = true; auto[n] = true; }
        });
        syncReveal();
      }
      dietOut.textContent = labels.length ? "We recognized: " + labels.join(", ") + ". The matching boxes are checked; uncheck anything that doesn't fit."
        : dietBox.value.trim() ? "We'll keep your note with your plan as written." : "";
    }
    if (dietBox) dietBox.addEventListener("input", function () { detect(true); });
    form.addEventListener("change", function (e) {
      var n = e.target.name; if (!n) return;
      if (auto[n] && !e.target.checked) { delete auto[n]; dismissed[n] = true; }
      if (form.querySelector('[data-reveal="' + n + '"]')) syncReveal();
    });
    syncReveal(); detect(false);

    function read() {
      var o = UR.defaultProfile();
      [].slice.call(form.elements).forEach(function (el) {
        if (!el.name || el.name === "hz") return;
        if (el.type === "radio") { if (el.checked) setPath(o, el.name, el.value); }
        else if (el.type === "checkbox") setPath(o, el.name, el.checked);
        else if (el.type === "number") setPath(o, el.name, Math.max(0, Math.min(20, parseInt(el.value, 10) || 0)));
        else setPath(o, el.name, el.value);
      });
      o.hazards = [].slice.call(form.querySelectorAll('input[name="hz"]:checked')).map(function (c) { return c.value; });
      // Hidden sub-answers don't count once their parent box is unchecked.
      if (!o.diet.other) { UR.DIETS.forEach(function (d) { o.diet[d.id] = false; }); o.diet.otherText = ""; }
      if (!o.diet.allergy) UR.ALLERGENS.forEach(function (a) { o.diet.allergens[a.id] = false; });
      o.diet.otherText = String(o.diet.otherText || "").trim().slice(0, 200);
      return o;
    }
    function updateBands() {
      var o = read(); if (!o.county) { form.querySelectorAll("[data-band-for]").forEach(function (s) { s.textContent = ""; s.className = "rel"; }); return; }
      var pr = UR.priorities(o);
      form.querySelectorAll("[data-band-for]").forEach(function (s) {
        var b = pr[s.dataset.bandFor].band; s.className = "rel band band-" + b; s.textContent = UR.BANDS[b];
        var lbl = s.closest("label"); if (lbl) lbl.querySelector("input").setAttribute("aria-description", "Priority for your area: " + UR.BANDS[b]);
      });
    }
    function validate(i) {
      var o = read(), m = "";
      if (i === 0) { if (!o.county) m = "Please choose your county."; else if (!o.setting) m = "Please choose the setting closest to yours."; }
      if (i === 1) { if (!o.homeType) m = "Please choose your type of home."; else if (!o.brick) m = "Please answer the older-brick question (\"Not sure\" is fine)."; else if (!o.tenure) m = "Please tell us whether you own or rent."; }
      if (i === 2) { if (o.adults + o.seniors + o.children + o.infants < 1) m = "Please include at least one person."; else if (o.adults + o.seniors < 1) m = "Please include at least one adult."; }
      if (i === 5) { if (!o.car) m = "Please answer the car question."; else if (!o.budget) m = "Please choose a budget level."; else if (!o.space) m = "Please choose how much storage space you have."; }
      if (i === 6 && !o.hazards.length) m = "Please include at least one hazard.";
      err.textContent = m;
      if (m) { var first = stepsEls[i].querySelector("select, input"); if (first) first.focus(); }
      return !m;
    }
    function show(i, focus) {
      cur = i;
      stepsEls.forEach(function (s, j) { s.classList.toggle("active", j === i); });
      bars.forEach(function (b, j) { b.className = j < i ? "done" : j === i ? "on" : ""; });
      titleEl.textContent = stepsEls[i].dataset.title; numEl.textContent = "Step " + (i + 1);
      prev.style.visibility = i === 0 ? "hidden" : "visible";
      next.innerHTML = i === stepsEls.length - 1 ? "Build my plan " + UR.icon("arrow") : "Next " + UR.icon("arrow");
      err.textContent = "";
      if (i === stepsEls.length - 1) updateBands();
      if (focus) { titleEl.setAttribute("tabindex", "-1"); titleEl.focus({ preventScroll: true }); window.scrollTo({ top: 0, behavior: "smooth" }); }
    }
    function saveDraft() { var o = read(); o.draft = true; if (saved && !saved.draft) o.draft = false; UR.store.set("ur.profile", o); }
    next.addEventListener("click", function () {
      if (!validate(cur)) return;
      if (cur < stepsEls.length - 1) { saveDraft(); show(cur + 1, true); return; }
      var o = read(); o.draft = false; o.savedAt = new Date().toISOString();
      UR.store.set("ur.profile", o);
      location.href = "plan.html";
    });
    prev.addEventListener("click", function () { if (cur > 0) show(cur - 1, true); });
    form.addEventListener("submit", function (e) { e.preventDefault(); next.click(); });
    form.addEventListener("keydown", function (e) { if (e.key === "Enter" && e.target.tagName === "INPUT" && e.target.type !== "checkbox" && e.target.type !== "radio") { e.preventDefault(); next.click(); } });
    form.addEventListener("change", function () { if (cur === stepsEls.length - 1) updateBands(); });
    form.querySelectorAll("[data-step]").forEach(function (b) {
      if (b.tagName !== "BUTTON") return;
      b.addEventListener("click", function () { var inp = form.querySelector('[name="' + b.dataset.for + '"]'); inp.value = Math.max(+inp.min || 0, Math.min(20, (parseInt(inp.value, 10) || 0) + (+b.dataset.step))); inp.dispatchEvent(new Event("change", { bubbles: true })); });
    });
    var all = form.querySelector("[data-hz-all]"), rel = form.querySelector("[data-hz-relevant]");
    all.addEventListener("click", function () { form.querySelectorAll('input[name="hz"]').forEach(function (c) { c.checked = true; }); });
    rel.addEventListener("click", function () {
      var o = read(); if (!o.county) return; var pr = UR.priorities(o);
      form.querySelectorAll('input[name="hz"]').forEach(function (c) { c.checked = pr[c.value].band >= 2; });
    });
    // If the user returns, ?step=N jumps (used by "edit answers").
    var m = /step=(\d)/.exec(location.search); show(m ? Math.min(+m[1], stepsEls.length - 1) : 0, false);
  });
})();
