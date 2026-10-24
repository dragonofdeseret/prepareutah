/* Guide tools: the family communication plan and the neighborhood worksheet.
   Each form[data-store] saves its fields to localStorage under that key as you type.
   Nothing leaves the browser. The family plan also prints folding wallet cards. */
(function () {
  var UR = window.UR, esc = UR.esc;
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("form[data-store]").forEach(function (form) {
      var key = form.dataset.store, out = form.querySelector("[data-saved]"), timer;
      var fields = [].slice.call(form.elements).filter(function (el) { return el.name; });
      function read() {
        var o = {};
        fields.forEach(function (el) { o[el.name] = el.type === "checkbox" ? el.checked : el.value.trim(); });
        return o;
      }
      var saved = UR.store.get(key, {});
      fields.forEach(function (el) {
        if (!(el.name in saved)) return;
        if (el.type === "checkbox") el.checked = !!saved[el.name]; else el.value = saved[el.name];
      });
      if (out && Object.keys(saved).length) out.textContent = "Your saved answers are filled in.";
      form.addEventListener("input", function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
          var ok = UR.store.set(key, read());
          if (out) out.textContent = ok ? "Saved in this browser." : "Couldn't save in this browser (private mode?). Print before you leave the page.";
        }, 300);
      });
      form.addEventListener("submit", function (e) { e.preventDefault(); });
      var clear = form.querySelector("[data-clear]");
      if (clear) clear.addEventListener("click", function () {
        if (!confirm("Clear everything in this form? This can't be undone.")) return;
        fields.forEach(function (el) { if (el.type === "checkbox") el.checked = false; else el.value = ""; });
        try { localStorage.removeItem(key); } catch (e) {}
        if (out) out.textContent = "Cleared.";
      });
      if (form.dataset.tool === "family-plan") wallet(form, read);
    });
  });

  // Folding wallet cards: front (people, contact, meeting places) beside back (numbers).
  function wallet(form, read) {
    var sheet = document.querySelector("[data-wallet]"), btn = form.querySelector("[data-cards]");
    if (!sheet || !btn) return;
    function line(label, v) { return v ? '<p><b>' + esc(label) + '</b> ' + esc(v) + '</p>' : ""; }
    function card(d) {
      var people = [1, 2, 3, 4, 5, 6].map(function (i) {
        var n = d["m" + i + ".name"]; if (!n) return "";
        return '<li>' + esc(n) + (d["m" + i + ".phone"] ? " &middot; " + esc(d["m" + i + ".phone"]) : "") + (d["m" + i + ".med"] ? ' <i>(' + esc(d["m" + i + ".med"]) + ')</i>' : "") + '</li>';
      }).join("");
      var front = '<div class="wc-side"><p class="wc-title">Family emergency card</p>' + (people ? '<ul>' + people + '</ul>' : "") +
        line("Out-of-area contact:", [d["contact.name"], d["contact.phone"]].filter(Boolean).join(", ")) +
        line("Outside home:", d["meet.home"]) + line("Neighborhood:", d["meet.near"]) + line("Away from home:", d["meet.out"]) + line("Out of town:", d["meet.town"]) + '</div>';
      var back = '<div class="wc-side"><p class="wc-title">In an emergency, call 911</p>' +
        line("Doctor:", d["num.doctor"]) + line("Pharmacy:", d["num.pharmacy"]) + line("Vet:", d["num.vet"]) + line("Insurance:", d["num.insurance"]) +
        line("Power:", d["num.power"]) + line("Gas:", d["num.gas"]) + line("Other:", d["num.other"]) +
        '<p class="wc-foot">Fold on the line. prepareutah.com</p></div>';
      return '<div class="wallet-card">' + front + back + '</div>';
    }
    btn.addEventListener("click", function () {
      var d = read();
      sheet.innerHTML = '<p class="wc-help">Cut out each card, fold it in half, and keep one in every wallet and go-bag.</p>' + [1, 2, 3, 4].map(function () { return card(d); }).join("");
      document.body.classList.add("print-cards");
      window.print();
    });
    window.addEventListener("afterprint", function () { document.body.classList.remove("print-cards"); });
  }
})();
