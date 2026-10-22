/* Shared rendering helpers (browser + build script). */
(function (root) {
  var UR = root.UR = root.UR || {};
  var SHORT = {
    "Utah Geological Survey": "UGS", "Ready.gov (FEMA)": "Ready.gov", "Utah DHHS": "Utah DHHS",
    "Utah DEQ, Division of Air Quality": "Utah DEQ", "Utah DEQ, Utah Radon Program": "Utah Radon Program",
    "Utah Division of Water Resources": "Utah Water Resources", "Utah Seismic Safety Commission / Utah DEM": "Utah DEM",
    "Utah Seismic Safety Commission": "Utah Seismic Safety Commission", "Office of Gov. Spencer J. Cox": "Governor's Office",
    "Utah Division of Forestry, Fire & State Lands": "Utah FFSL", "University of Utah Seismograph Stations": "UUSS",
    "The Church of Jesus Christ of Latter-day Saints": "Church home storage", "Consumer Financial Protection Bureau": "CFPB",
    "U.S. Bureau of Labor Statistics": "BLS", "U.S. Small Business Administration": "SBA", "National Weather Service": "NWS",
    "Great Salt Lake Commissioner (State of Utah)": "GSL Strategic Plan", "Utah USGS Water Science Center": "USGS",
    "USGS Utah Water Science Center": "USGS", "NOAA / NIDIS": "Drought.gov", "AirNow (EPA & partners)": "AirNow",
    "American Red Cross": "Red Cross", "Utah Legislature": "Utah Code", "World Health Organization": "WHO",
    "CDC / NIOSH": "NIOSH", "CDC / NCHS": "CDC/NCHS", "HHS / ASPR": "HHS", "CDC (archive)": "CDC",
    "Influenza Encyclopedia (Univ. of Michigan)": "Influenza Encyclopedia", "NFPA / Firewise USA": "NFPA Firewise",
    "U.S. EPA": "EPA", "U.S. FDA": "FDA", "Utah Department of Workforce Services": "Utah DWS",
    "Utah Division of Emergency Management": "Utah DEM", "FloodSmart (NIPF)": "FloodSmart", "FloodSmart (NFIP)": "FloodSmart",
    "NOAA Colorado Basin River Forecast Center": "NOAA CBRFC", "Utah Avalanche Center": "Utah Avalanche Center",
    "Seismological Research Letters": "Moschetti et al. 2021", "Geophysical Research Letters": "Pang et al. 2020",
    "Clinical Infectious Diseases": "Shrestha et al. 2011", "PNAS": "Hatchett et al. 2007", "USDA Forest Service": "USDA Forest Service"
  };
  UR.shortName = function (id) { var s = UR.sources[id]; if (!s) return "source"; return s.short || SHORT[s.pub] || s.pub; };
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;"); }
  UR.esc = esc;
  UR.cite = function (text) {
    if (text == null) return "";
    return String(text)
      .replace(/\[\[([a-z0-9\-]+)(?:\|([^\]]+))?\]\]/gi, function (m, id, label) {
        var s = UR.sources[id];
        if (!s) return '<span class="cite cite-missing">[source missing]</span>';
        return '<a class="cite" href="' + esc(s.url) + '" target="_blank" rel="noopener" title="' + esc(s.pub + ": " + s.title) + '">' + esc(label || UR.shortName(id)) + '<span class="sr-only"> (opens source in a new tab)</span></a>';
      })
      .replace(/\[((?:unverified|verify|confirm)[^\]]*)\]/gi, '<span class="flag" title="Marked uncertain in the founder\'s research">[$1]</span>')
      .replace(/\(estimate([^)]*)\)/gi, '<span class="est">(estimate$1)</span>');
  };
})(typeof window !== "undefined" ? window : globalThis);
