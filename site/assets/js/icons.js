/* Simple inline SVG icons (24x24, stroke). Decorative: aria-hidden by default. */
(function (root) {
  var P = {
    hive: '<path d="M12 2.5l7.5 4.3v8.4L12 19.5l-7.5-4.3V6.8z"/><path d="M8 9.5h8M7.5 12.5h9M8.5 15.5h7"/><path d="M12 19.5v2"/>',
    quake: '<path d="M2 12h3l2-5 3 10 3-12 3 9 2-2h4"/>',
    virus: '<circle cx="12" cy="12" r="5"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/><circle cx="10.5" cy="11" r=".8" fill="currentColor"/><circle cx="13.5" cy="13.5" r=".8" fill="currentColor"/>',
    lake: '<path d="M3 15c2 0 2-1.5 4.5-1.5S10 15 12 15s2-1.5 4.5-1.5S19 15 21 15"/><path d="M3 19c2 0 2-1.5 4.5-1.5S10 19 12 19s2-1.5 4.5-1.5S19 19 21 19"/><path d="M12 3s-4 4.5-4 7a4 4 0 008 0c0-2.5-4-7-4-7z"/>',
    fire: '<path d="M12 22c4 0 7-2.7 7-6.5 0-4.5-4-6.5-4.5-10.5C11 7 9 9.5 9.5 12.5 8 12 7.2 10.8 7 9.5 5.7 11 5 13 5 15.5 5 19.3 8 22 12 22z"/><path d="M12 22c-1.7 0-3-1.2-3-2.8 0-2 2-3 2.5-5 1.8 1.2 3.5 2.6 3.5 5 0 1.6-1.3 2.8-3 2.8z"/>',
    air: '<path d="M3 8h11a3 3 0 10-3-3"/><path d="M3 12h16a3 3 0 11-3 3"/><path d="M3 16h7"/>',
    flood: '<path d="M3 11l9-7 9 7"/><path d="M5 10v4M19 10v4"/><path d="M2 17c2 0 2-1.5 5-1.5s3 1.5 5 1.5 2-1.5 5-1.5 3 1.5 5 1.5"/><path d="M2 21c2 0 2-1.5 5-1.5s3 1.5 5 1.5 2-1.5 5-1.5 3 1.5 5 1.5"/>',
    slide: '<path d="M3 20h18"/><path d="M3 20L10 6l4 6 3-3 4 11"/><circle cx="16" cy="17" r="1.2"/><circle cx="12.5" cy="18.5" r=".9"/>',
    radon: '<path d="M4 20V10l8-6 8 6v10z"/><path d="M9 20v-4h6v4"/><path d="M8 13c1-1 2 1 3 0s2 1 3 0 2 1 3 0" />',
    power: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
    snow: '<path d="M2 20l7-12 4 6 2-3 7 9z"/><path d="M7.5 11l1.5 1.5L10.5 11"/>',
    coin: '<circle cx="12" cy="12" r="9"/><path d="M15 9.5c-.5-1-1.6-1.5-3-1.5-1.7 0-3 .9-3 2s1 1.7 3 2 3 .9 3 2-1.3 2-3 2c-1.4 0-2.5-.5-3-1.5M12 6.5v11"/>',
    check: '<path d="M4 12.5l5 5L20 6.5"/>',
    print: '<path d="M6 9V3h12v6"/><rect x="3" y="9" width="18" height="8" rx="2"/><path d="M6 14h12v7H6z"/>',
    trash: '<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    back: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
    pill: '<rect x="3" y="8.5" width="18" height="7" rx="3.5" transform="rotate(-35 12 12)"/><path d="M9.5 8.5l5 7"/>',
    plug: '<path d="M9 2v5M15 2v5M7 7h10v4a5 5 0 01-10 0z"/><path d="M12 16v6"/>',
    access: '<circle cx="12" cy="4.5" r="1.8"/><path d="M8 8.5h8M12 8.5v5M12 13.5l-3 7M12 13.5l3 7"/>',
    lungs: '<path d="M12 3v8M12 11c-1 1-2 1.5-3 1.5M12 11c1 1 2 1.5 3 1.5"/><path d="M9 7.5C6 7 3.5 11 3.5 16c0 3 1.5 4.5 3.5 4 2-.5 3-2 3-5V8.5"/><path d="M15 7.5c3-.5 5.5 3.5 5.5 8.5 0 3-1.5 4.5-3.5 4-2-.5-3-2-3-5V8.5"/>',
    heart: '<path d="M12 20s-7.5-4.6-7.5-10A4.5 4.5 0 0112 7a4.5 4.5 0 017.5 3c0 5.4-7.5 10-7.5 10z"/>',
    kids: '<circle cx="8" cy="6" r="2.5"/><circle cx="17" cy="8" r="2"/><path d="M4 21v-6a4 4 0 018 0v6M13.5 21v-4.5a3.5 3.5 0 017 0V21"/>',
    bottle: '<path d="M10 2h4v3l2 3v12a2 2 0 01-2 2h-4a2 2 0 01-2-2V8l2-3z"/><path d="M8 12h8"/>',
    bowl: '<path d="M3 11h18a9 9 0 01-18 0z"/><path d="M8 7c0-1.5 1-2 1-3.5M12 7c0-1.5 1-2 1-3.5M16 7c0-1.5 1-2 1-3.5"/>',
    older: '<circle cx="11" cy="4.5" r="2"/><path d="M11 7.5v6l-3 7M11 13.5l3 7M8 10.5l3-1 3 2M17 11v10"/>',
    paw: '<circle cx="7" cy="9" r="1.8"/><circle cx="11" cy="6" r="1.8"/><circle cx="15.5" cy="6.5" r="1.8"/><circle cx="18.5" cy="10" r="1.8"/><path d="M8 17c0-3 2.5-5 4.5-5s4.5 2 4.5 5c0 2-1.5 3-3 3-1 0-1.3-.5-2-.5s-1.3.5-2 .5C9 20 8 19 8 17z"/>',
    key: '<circle cx="8" cy="14" r="4"/><path d="M11 11l9-9M16 6l3 3M14 8l2 2"/>',
    brick: '<rect x="3" y="5" width="18" height="14" rx="1"/><path d="M3 9.7h18M3 14.3h18M9 5v4.7M15 5v4.7M6 9.7v4.6M12 9.7v4.6M18 9.7v4.6M9 14.3V19M15 14.3V19"/>',
    home: '<path d="M3 11l9-7 9 7v9H3z"/><path d="M9 20v-6h6v6"/>',
    walk: '<circle cx="13" cy="4" r="2"/><path d="M10 21l2-6-2-3 1-4 4 3 3 1M11 8l-3 2-1 4M12 15l3 6"/>',
    box: '<path d="M3 7l9-4 9 4v10l-9 4-9-4z"/><path d="M3 7l9 4 9-4M12 11v10"/>',
    mountain: '<path d="M2 20l7-12 4 6 2-3 7 9z"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    live: '<path d="M3 12h4l2-6 4 12 2-6h6"/>',
    link: '<path d="M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 00-5.7 0l-3 3a4 4 0 005.7 5.7l1-1"/>',
    shield: '<path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
    lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/>',
    list: '<path d="M9 6h11M9 12h11M9 18h11"/><path d="M4 6l1 1 2-2M4 12l1 1 2-2M4 18l1 1 2-2"/>',
    map: '<path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2z"/><path d="M9 4v14M15 6v14"/>',
    storm: '<path d="M7 15.5a4 4 0 01.3-8A5.5 5.5 0 0118 8.5a3.5 3.5 0 01-.5 7"/><path d="M13 12l-3 5h4l-2 4.5"/>',
    tap: '<path d="M3 10h10a4 4 0 014 4v1h-4v-1H3z"/><path d="M8 10V6M5 6h6"/><path d="M15 19c0 1.1-.9 2-2 2s-2-.9-2-2c0-1.2 2-3.5 2-3.5s2 2.3 2 3.5z"/>',
    flask: '<path d="M9 3h6M10 3v6l-5 9a2 2 0 001.7 3h10.6a2 2 0 001.7-3l-5-9V3"/><path d="M7.5 15h9"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    bell: '<path d="M6 16v-5a6 6 0 0112 0v5l2 2H4z"/><path d="M10 20a2 2 0 004 0"/>',
    heat: '<path d="M9 14.5V5a2 2 0 014 0v9.5a4 4 0 11-4 0z"/><path d="M11 9v7"/><path d="M17 5.5l2-1.5M17.5 9.5H20M17 13.5l2 1.5"/>',
    homefire: '<path d="M3 11l9-7 9 7"/><path d="M5 9.5V20h14V9.5"/><path d="M12 18c1.7 0 3-1.1 3-2.7 0-1.9-1.7-2.7-1.9-4.3-1.4.8-2.2 1.9-2 3.2-.6-.2-1-.7-1.1-1.3-.6.7-1 1.4-1 2.4 0 1.6 1.3 2.7 3 2.7z"/>',
    briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2"/><path d="M3 12.5h18"/>'
  };
  function icon(name, cls, label) {
    var body = P[name] || P.hive;
    var a = label ? ' role="img" aria-label="' + label + '"' : ' aria-hidden="true" focusable="false"';
    return '<svg class="icon ' + (cls || "") + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"' + a + '>' + body + '</svg>';
  }
  root.UR = root.UR || {};
  root.UR.icon = icon;
  root.UR.iconNames = Object.keys(P);
})(typeof window !== "undefined" ? window : globalThis);
