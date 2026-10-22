/* Recent Utah earthquakes from the public USGS feed. Fails quietly with a link. */
(function () {
  var UR = window.UR;
  var BBOX = { minlatitude: 36.9, maxlatitude: 42.1, minlongitude: -114.1, maxlongitude: -109.0 };
  function fdsnUrl() {
    var start = new Date(Date.now() - 14 * 864e5).toISOString().slice(0, 10);
    var q = "format=geojson&orderby=time&limit=8&minmagnitude=1.5&starttime=" + start;
    for (var k in BBOX) q += "&" + k + "=" + BBOX[k];
    return "https://earthquake.usgs.gov/fdsnws/event/1/query?" + q;
  }
  var FEED = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_week.geojson";
  function inBox(f) { var c = f.geometry && f.geometry.coordinates; return c && c[1] >= BBOX.minlatitude && c[1] <= BBOX.maxlatitude && c[0] >= BBOX.minlongitude && c[0] <= BBOX.maxlongitude; }
  function ago(t) { var m = Math.round((Date.now() - t) / 60000); if (m < 60) return m + " min ago"; var h = Math.round(m / 60); if (h < 48) return h + " hr ago"; return Math.round(h / 24) + " days ago"; }
  function get(url, ms) {
    var ctrl = window.AbortController ? new AbortController() : null;
    var timer = setTimeout(function () { if (ctrl) ctrl.abort(); }, ms || 8000);
    return fetch(url, { signal: ctrl ? ctrl.signal : undefined, credentials: "omit", referrerPolicy: "no-referrer" })
      .then(function (r) { clearTimeout(timer); if (!r.ok) throw new Error(r.status); return r.json(); });
  }
  function render(el, feats) {
    if (!feats.length) { el.innerHTML = '<p class="small muted">No Utah earthquakes of magnitude 1.5+ in the past 14 days in the USGS feed.</p>'; return; }
    el.innerHTML = "<ol>" + feats.slice(0, 6).map(function (f) {
      var pr = f.properties, m = pr.mag == null ? "?" : pr.mag.toFixed(1);
      var when = new Date(pr.time);
      return '<li><span class="mag" aria-label="Magnitude ' + m + '">' + m + '</span><span><a class="where" href="' + UR.esc(pr.url) + '" target="_blank" rel="noopener">' + UR.esc(pr.place || "Utah region") + '</a><br><span class="when">' + ago(pr.time) + " &middot; " + when.toLocaleString("en-US", { timeZone: "America/Denver", month: "short", day: "numeric", hour: "numeric", minute: "2-digit" }) + " MT</span></span></li>";
    }).join("") + "</ol>";
  }
  function fail(el) { el.innerHTML = '<p class="small muted">The USGS feed couldn\'t be reached right now. See the <a href="https://earthquake.usgs.gov/earthquakes/map/" target="_blank" rel="noopener">USGS latest earthquakes map</a> or the <a href="https://quake.utah.edu/" target="_blank" rel="noopener">University of Utah Seismograph Stations</a>.</p>'; }
  document.addEventListener("DOMContentLoaded", function () {
    var el = document.querySelector("[data-quakes]"); if (!el || !window.fetch) { if (el) fail(el); return; }
    get(fdsnUrl()).then(function (d) { render(el, d.features || []); })
      .catch(function () { return get(FEED).then(function (d) { render(el, (d.features || []).filter(inBox)); }); })
      .catch(function () { fail(el); });
  });
})();
