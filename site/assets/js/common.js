/* Site-wide behavior: nav, erase data, storage, print helpers. Nothing leaves the browser. */
(function () {
  var UR = window.UR = window.UR || {};
  var KEYS = ["ur.profile", "ur.checks", "ur.tab"];
  UR.store = {
    get: function (k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set: function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch (e) { return false; } },
    eraseAll: function () { try { KEYS.forEach(function (k) { localStorage.removeItem(k); }); Object.keys(localStorage).forEach(function (k) { if (k.indexOf("ur.") === 0) localStorage.removeItem(k); }); } catch (e) {} }
  };
  UR.toast = function (msg) {
    var t = document.createElement("div"); t.className = "toast"; t.setAttribute("role", "status"); t.textContent = msg;
    document.body.appendChild(t); setTimeout(function () { t.remove(); }, 3200);
  };
  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.querySelector(".nav-toggle"), nav = document.getElementById("site-nav");
    if (btn && nav) {
      btn.addEventListener("click", function () {
        var open = nav.classList.toggle("open"); btn.setAttribute("aria-expanded", open ? "true" : "false");
      });
      document.addEventListener("keydown", function (e) { if (e.key === "Escape" && nav.classList.contains("open")) { nav.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); btn.focus(); } });
    }
    document.querySelectorAll("[data-erase]").forEach(function (b) {
      b.addEventListener("click", function () {
        if (!confirm("Erase your answers and checklist progress from this browser? This can't be undone.")) return;
        UR.store.eraseAll();
        UR.toast("Your data has been erased from this browser.");
        if (document.body.dataset.page === "plan" || document.body.dataset.page === "start") setTimeout(function () { location.reload(); }, 900);
      });
    });
    document.querySelectorAll("[data-print]").forEach(function (b) { b.addEventListener("click", function () { window.print(); }); });
  });
  // Open all <details> while printing so nothing is hidden on paper.
  var reopened = [];
  window.addEventListener("beforeprint", function () { reopened = []; document.querySelectorAll("details:not([open])").forEach(function (d) { d.setAttribute("open", ""); reopened.push(d); }); });
  window.addEventListener("afterprint", function () { reopened.forEach(function (d) { d.removeAttribute("open"); }); });
})();
