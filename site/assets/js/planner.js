/* Prepare Utah - the personalization engine.
   Pure functions: profile in, plan out. No network, no storage here.
   Quantities follow the founder's plans: water 1 gal/person/day (Be Ready Utah),
   food ~2,000 kcal/adult/day (estimate), N95 counts per person (estimates from HiveWatch Utah). */
(function (root) {
  var UR = root.UR = root.UR || {};

  // ---------------------------------------------------------------- counties
  // Bands per hazard: 3 higher, 2 elevated, 1 present, 0 lower. This is a reasoned,
  // general-guidance mapping (see README), NOT an official risk rating.
  // Order: eq, gsl, wildfire, air, flood, landslide, power, avalanche
  var K = ["earthquake", "gsl", "wildfire", "air", "flood", "landslide", "power", "avalanche"];
  var C = {
    "Beaver":     { b: [2,2,2,1,2,1,2,1], f: ["central", "south"] },
    "Box Elder":  { b: [3,3,2,2,2,2,2,1], f: ["wasatch", "lake"], uac: "Ogden" },
    "Cache":      { b: [3,2,2,3,2,2,2,2], f: ["wasatch", "valley"], uac: "Logan" },
    "Carbon":     { b: [1,2,2,1,2,2,2,1], f: ["east"], uac: "Skyline" },
    "Daggett":    { b: [1,2,2,1,2,1,3,2], f: ["mountain", "rural"], uac: "Uintas" },
    "Davis":      { b: [3,3,2,3,2,3,2,2], f: ["wasatch", "lake", "valley"], uac: "Ogden" },
    "Duchesne":   { b: [1,2,2,2,2,1,2,2], f: ["uinta", "rural"], uac: "Uintas" },
    "Emery":      { b: [1,2,2,1,3,1,2,1], f: ["desert", "east"], uac: "Skyline" },
    "Garfield":   { b: [1,3,3,1,3,2,3,1], f: ["south", "desert", "rural"], uac: "Southwest" },
    "Grand":      { b: [1,3,2,1,3,2,2,2], f: ["south", "desert"], uac: "Moab" },
    "Iron":       { b: [2,3,3,1,2,2,2,1], f: ["central", "south"], uac: "Southwest" },
    "Juab":       { b: [2,2,2,1,2,1,2,1], f: ["central"], uac: "Skyline" },
    "Kane":       { b: [1,3,2,1,3,2,3,1], f: ["south", "desert", "rural"], uac: "Southwest" },
    "Millard":    { b: [2,2,2,1,2,1,2,0], f: ["central", "rural"] },
    "Morgan":     { b: [2,2,3,2,2,2,2,2], f: ["wasatch", "mountain"], uac: "Ogden" },
    "Piute":      { b: [1,3,2,1,2,1,3,1], f: ["south", "rural"] },
    "Rich":       { b: [2,2,2,1,2,1,3,2], f: ["mountain", "rural"], uac: "Logan" },
    "Salt Lake":  { b: [3,3,2,3,2,2,2,2], f: ["wasatch", "lake", "valley"], uac: "Salt Lake" },
    "San Juan":   { b: [1,3,2,1,3,2,3,2], f: ["south", "desert", "rural"], uac: "Abajos & Moab" },
    "Sanpete":    { b: [2,2,2,1,2,2,2,2], f: ["central"], uac: "Skyline" },
    "Sevier":     { b: [2,2,2,1,2,1,2,1], f: ["central"] },
    "Summit":     { b: [2,2,3,1,2,2,3,3], f: ["mountain"], uac: "Salt Lake & Uintas" },
    "Tooele":     { b: [2,3,2,2,2,1,2,1], f: ["lake"] },
    "Uintah":     { b: [1,2,2,2,2,1,2,1], f: ["uinta", "rural"], uac: "Uintas" },
    "Utah":       { b: [3,2,2,3,2,3,2,2], f: ["wasatch", "valley"], uac: "Provo" },
    "Wasatch":    { b: [2,2,3,1,2,2,3,3], f: ["mountain"], uac: "Provo & Salt Lake" },
    "Washington": { b: [2,3,3,1,3,2,2,0], f: ["south", "desert", "central"], uac: "Southwest" },
    "Wayne":      { b: [1,3,2,1,3,1,3,1], f: ["south", "desert", "rural"] },
    "Weber":      { b: [3,3,2,3,2,3,2,2], f: ["wasatch", "lake", "valley"], uac: "Ogden" }
  };
  UR.counties = Object.keys(C).sort();
  UR.countyData = C;

  UR.settings = [
    { id: "valley",  label: "Valley floor", hint: "Flat neighborhoods in the valley, often near rivers or old lakeshores" },
    { id: "foothill",label: "Foothill or bench", hint: "Sloped neighborhoods at the edge of the mountains" },
    { id: "canyon",  label: "Canyon or mountain", hint: "In a canyon, mountain town, or forested area" },
    { id: "rural",   label: "Rural or desert", hint: "Farm, ranch, small town, or desert, farther from services" }
  ];

  UR.BANDS = ["Lower", "Present", "Elevated", "Higher priority"];

  function pl(n, one, many) { return n + " " + (n === 1 ? one : (many || one + "s")); }
  function has(arr, x) { return arr && arr.indexOf(x) !== -1; }
  function clamp(n) { return Math.max(0, Math.min(3, n)); }

  // ---------------------------------------------------------------- household math
  UR.household = function (p) {
    var adults = +p.adults || 0, seniors = +p.seniors || 0, kids = +p.children || 0, infants = +p.infants || 0;
    var people = adults + seniors + kids + infants;
    if (people < 1) { people = 1; adults = Math.max(adults, 1); }
    var petsSmall = +p.petsSmall || 0, petsLarge = +p.petsLarge || 0;
    // Pet water: planning estimate, not an official figure (ask your vet).
    var petGalDay = petsSmall * 0.25 + petsLarge * 1;
    return { adults: adults, seniors: seniors, kids: kids, infants: infants, people: people,
      grownups: adults + seniors, petsSmall: petsSmall, petsLarge: petsLarge, pets: petsSmall + petsLarge,
      petGalDay: petGalDay };
  };

  function fmtGal(n) { var r = Math.round(n * 10) / 10; return (r % 1 === 0 ? r.toFixed(0) : r.toFixed(1)); }
  UR.water = function (p, days) {
    var h = UR.household(p);
    var people = h.people * days, pets = h.petGalDay * days;
    return { people: people, pets: pets, total: Math.ceil(people + pets) };
  };

  // ---------------------------------------------------------------- hazard priorities
  UR.priorities = function (p) {
    var c = C[p.county] || { b: [2,2,2,2,2,2,2,1], f: [] };
    var med = p.med || {};
    var out = {};
    function set(id, band, reasons) { out[id] = { band: band, reasons: reasons }; }
    K.forEach(function (k, i) { out[k] = { band: c.b[i], reasons: [] }; });
    out.pandemic = { band: 2, reasons: ["Outbreaks happen statewide every year (flu, measles, West Nile). [[dhhs-dash]]"] };
    out.radon = { band: 2, reasons: ["About 1 in 3 Utah homes have elevated radon; only a test tells you yours. [[deq-radon]]"] };
    out.economic = { band: 2, reasons: ["Income shocks and price spikes affect every household. [[bls-2020]]"] };
    var f = c.f, s = p.setting;

    // county reasons
    var R = out;
    if (has(f, "wasatch")) R.earthquake.reasons.push("Your county is along the Wasatch Front, where about 85% of Utahns live within 15 miles of the Wasatch fault. [[ugs-eew]]");
    else if (has(f, "central") || has(f, "south")) R.earthquake.reasons.push("Northern, central, and southwestern Utah are the state's most seismically active areas. [[ugs-liq]]");
    else R.earthquake.reasons.push("Earthquakes can be felt statewide, but your county is farther from Utah's most active faults. [[ugs-eq]]");
    if (has(f, "lake")) R.gsl.reasons.push("Your county borders Great Salt Lake, where exposed lakebed can send dust into communities on windy days. [[deq-gsl-pm]]");
    if (has(f, "south")) R.gsl.reasons.push("Drought has hit southern Utah eight of the last 10 years. [[dwre-drought]]");
    R.gsl.reasons.push("All 29 counties were in severe drought when the state declared a drought emergency in May 2026. [[gov-drought-2026]]");
    R.wildfire.reasons.push("Utah's 2026 fire season has been severe; at least 75% of fires through late June were human-caused. [[eo-2026-04]]");
    if (has(f, "mountain")) R.wildfire.reasons.push("Mountain and forest communities sit in the wildland-urban interface. [[br-fire]]");
    if (has(f, "valley") || has(f, "wasatch")) R.air.reasons.push("Mountain valleys along the Wasatch Front and in Cache Valley trap pollution during winter inversions. [[deq-inv]]");
    else if (has(f, "uinta")) R.air.reasons.push("The Uinta Basin sees winter ozone events during cold inversions. [[deq-uinta]]");
    else R.air.reasons.push("Wildfire smoke can reach any county; inversions are strongest in populated mountain valleys. [[deq-inv]]");
    if (has(f, "desert") || has(f, "south")) R.flood.reasons.push("Desert washes and slot canyons are prone to flash floods from summer storms. [[nws-flood]]");
    R.flood.reasons.push("Big snow years bring spring runoff; 2023's record snowpack raised flood and debris-flow risk statewide. [[dwre-2023-flood]]");
    if (has(f, "wasatch") || has(f, "mountain")) R.landslide.reasons.push("Benches, canyon mouths, and alluvial fans are where debris flows deposit, and also where many homes are built. [[ugs-debris]]");
    else R.landslide.reasons.push("Landslides tend to recur where they've happened before; check the UGS map for your area. [[ugs-portal]]");
    R.power.reasons.push("Outages come with winter storms, wind, and wildfire shutoffs anywhere in the state. [[br-power]]");
    if (has(f, "south")) R.power.reasons.push("Rocky Mountain Power used wildfire safety shutoffs in southern Utah in June 2026. [[rmp-psps-2026]]");
    if (has(f, "rural") || has(f, "mountain")) R.power.reasons.push("Rural and mountain areas may wait longer for repairs (general guidance).");
    if (c.uac) R.avalanche.reasons.push("The Utah Avalanche Center forecasts for mountains near you (" + c.uac + " region). [[uac-forecast]]");
    else R.avalanche.reasons.push("Few avalanche-prone mountains are close by, but travelers can be exposed elsewhere. [[uac-forecast]]");

    // setting modifiers
    function bump(id, d, why) { R[id].band = clamp(R[id].band + d); if (why) R[id].reasons.push(why); }
    if (s === "valley") {
      if (R.earthquake.band >= 2) R.earthquake.reasons.push("Valley floors near rivers, streams, and old lakeshores are where liquefaction is most likely. [[ugs-liq]]");
      if (R.air.band >= 2) bump("air", 1, "Inversions are strongest on valley floors. [[deq-inv]]");
    } else if (s === "foothill") {
      bump("wildfire", 1, "Foothill and bench homes are at the edge of wildland fuels. [[br-fire]]");
      bump("landslide", 1, "Bench slopes and canyon mouths are common landslide and debris-flow settings. [[ugs-debris]]");
    } else if (s === "canyon") {
      bump("wildfire", 1, "Canyon and mountain homes are surrounded by wildland fuels and may have one road out. [[br-fire]]");
      bump("landslide", 1, "Steep slopes and canyon channels raise landslide and debris-flow exposure. [[ugs-debris]]");
      bump("flood", 1, "Canyon bottoms channel snowmelt and flash floods. [[nws-flood]]");
      bump("power", 1, "Canyon and mountain homes often wait longer for power restoration (general guidance).");
      bump("air", -1, "Higher elevations are often above the worst inversion air.");
    } else if (s === "rural") {
      bump("power", 1, "Rural homes can be farther down the repair list and farther from warming centers (general guidance).");
      bump("flood", 1, "Desert and rural washes can flash flood from distant storms. [[nws-flood]]");
      bump("air", -1);
    }
    // household modifiers
    if (med.lungHeart) {
      ["air", "wildfire", "gsl"].forEach(function (id) { bump(id, 1, "Someone in your home has a lung or heart condition, which makes smoke, dust, and inversion air more serious. [[epa-filtration]]"); });
      bump("pandemic", 1, "Lung and heart conditions raise the stakes of respiratory illness.");
    }
    if (med.pregnancy || (+p.infants > 0) || (+p.seniors > 0)) bump("pandemic", 1, "Infants, pregnant people, and older adults are more vulnerable to some outbreaks (e.g., measles in infants). [[dhhs-measles]]");
    if (med.powered) bump("power", 1, "You rely on powered medical equipment, so outages are a health issue, not just an inconvenience. [[ready-power]]");
    if (p.homeType === "mobile") bump("power", 1, "Manufactured homes can lose heat quickly in winter outages (general guidance).");
    if (p.brick === "yes" || p.brick === "unsure") {
      R.earthquake.band = Math.max(R.earthquake.band, 2);
      R.earthquake.reasons.push(p.brick === "yes" ? "You live in older brick (pre-1975), which may be unreinforced masonry, the building type most likely to collapse in an earthquake. [[eq-urm]]" : "You're not sure whether your building is older brick; it's worth checking the URM signs. [[eq-urm]]");
      if (R.earthquake.band < 3 && p.brick === "yes") R.earthquake.band = 3;
    }
    if (p.backcountry) bump("avalanche", 1, "Someone in your home goes into the backcountry in winter. [[br-aval]]");
    else if (R.avalanche.band > 1) { R.avalanche.band = 1; R.avalanche.reasons.push("Avalanche victims are mostly backcountry travelers; you said no one in your home goes into the backcountry in winter. [[br-aval]]"); }
    if (p.budget === "tight") bump("economic", 1, "You said money is tight, so an emergency buffer is one of your most protective steps. [[cfpb-fund]]");
    if ((+p.petsLarge || 0) + (+p.petsSmall || 0) > 0 && R.pandemic) { /* pets handled in additions */ }
    return out;
  };

  // ---------------------------------------------------------------- item catalog
  // tier: 1 = 72 hours to 7 days, 2 = 14 days, 3 = 30 days, 4 = 90 days
  // hz: hazards that need it ("all" = every hazard). cost: 0 free, 1 $, 2 $$, 3 $$$ (rough, estimate).
  // pri: 1-10 importance for the "buy first" list. kind: buy | do
  UR.TIERS = [
    { n: 1, id: "t7",  label: "72 hours to 7 days", short: "7 days", days: 7, blurb: "Start here. Enough to get through the first days of almost anything." },
    { n: 2, id: "t14", label: "14 days", short: "14 days", days: 14, blurb: "The core goal. Be Ready Utah asks for at least two weeks of water. [[br-water]]" },
    { n: 3, id: "t30", label: "30 days", short: "30 days", days: 30, blurb: "A month of everyday living, built gradually as space and budget allow." },
    { n: 4, id: "t90", label: "90 days", short: "90 days", days: 90, blurb: "A three-month supply of foods you eat, plus the ability to treat more water. [[church-storage]]" }
  ];
  UR.CATS = ["Water", "Food", "Health & medicine", "Sanitation & hygiene", "Power, light & communication", "Warmth & shelter", "Safety & tools", "Air quality", "Home protection", "Documents & money", "Kids & family", "Pets & animals", "Backcountry"];

  var ALL = ["all"];
  var LUNG = ["pandemic", "wildfire", "air", "gsl"];
  function anyPets(p) { var h = UR.household(p); return h.pets > 0; }
  function rx(p) { return !!(p.med && p.med.rx); }

  function waterItem(tier, days) {
    return {
      id: "water-" + days, tier: tier, cat: "Water", hz: ALL, cost: tier === 1 ? 1 : 2, pri: 10, kind: "buy",
      name: function (p) { var w = UR.water(p, days); return "Store " + w.total + " gallons of water (" + days + "-day total)"; },
      detail: function (p) {
        var h = UR.household(p), w = UR.water(p, days);
        var s = h.people + " " + (h.people === 1 ? "person" : "people") + " &times; 1 gal &times; " + days + " days = " + fmtGal(w.people) + " gal";
        if (w.pets) s += ", plus about " + fmtGal(w.pets) + " gal for pets (estimate; ask your vet)";
        s += ". [[br-water]]";
        var n7 = Math.ceil(w.total / 7);
        if (p.space === "large" && w.total >= 55) s += " That's about " + pl(Math.ceil(w.total / 55), "55-gallon barrel") + ", or " + pl(n7, "seven-gallon container") + ".";
        else s += " That's about " + pl(n7, "seven-gallon container") + " (each about 58 lb full, estimate), or 2-liter bottles tucked into closets.";
        if (tier >= 3 && p.space === "small") s += " Short on space? Store what fits and lean on treatment supplies (90-day list).";
        return s;
      }
    };
  }
  function foodItem(tier, days) {
    return {
      id: "food-" + days, tier: tier, cat: "Food", hz: ALL, cost: tier === 1 ? 1 : 2, pri: 9, kind: "buy",
      name: function (p) { var h = UR.household(p); return (h.people * days) + " person-days of food you already eat (" + days + "-day total)"; },
      detail: function (p) {
        var s = "Plan roughly 2,000 calories per adult per day (estimate; needs vary). ";
        if (tier === 1) s += "Choose ready-to-eat foods that need no cooking or water. [[ready-kit]]";
        else if (tier === 2) s += "Two weeks of normal meals from your pantry, rotated. [[usu-food]]";
        else if (tier === 3) s += "A month of everyday pantry foods. Store between 32&deg;F and 70&deg;F; cooler keeps quality longer. [[usu-food]]";
        else s += "A three-month supply of everyday foods, then long-term staples (wheat, rice, beans, oats). [[church-storage]] [[church-hsc]]";
        if (p.diet && (p.diet.allergy || p.diet.celiac)) s += " Store only foods everyone in your home can safely eat, and check labels when you rotate.";
        return s;
      }
    };
  }

  UR.items = [
    // ---------------- Tier 1: 72 hours to 7 days
    { id: "plan-family", tier: 1, cat: "Kids & family", hz: ALL, cost: 0, pri: 9, kind: "do", name: "Make a family emergency plan: meeting places, an out-of-area contact, and who picks up whom", detail: "Write it down and practice it. [[ready-plan]] [[br-plan]]" },
    { id: "alerts", tier: 1, cat: "Power, light & communication", hz: ALL, cost: 0, pri: 9, kind: "do", name: "Turn on emergency alerts on every phone and sign up for county alerts", detail: "Have several ways to receive alerts. [[ready-fire]]" },
    waterItem(1, 7),
    foodItem(1, 7),
    { id: "can-opener", tier: 1, cat: "Food", hz: ALL, cost: 1, pri: 6, kind: "buy", name: "Manual can opener", detail: "[[ready-kit]]" },
    { id: "first-aid", tier: 1, cat: "Health & medicine", hz: ALL, cost: 1, pri: 8, kind: "buy", name: "First-aid kit", detail: "[[ready-kit]] [[redcross-kit]]" },
    { id: "flashlights", tier: 1, cat: "Power, light & communication", hz: ALL, cost: 1, pri: 8, kind: "buy",
      name: function (p) { return pl(UR.household(p).people, "flashlight") + " (one per person) plus extra batteries"; }, detail: "Ready.gov suggests flashlights for every household member. [[ready-power]]" },
    { id: "radio", tier: 1, cat: "Power, light & communication", hz: ALL, cost: 1, pri: 7, kind: "buy", name: "Battery or hand-crank radio (NOAA Weather Radio if possible)", detail: "[[ready-kit]] [[br-fire]]" },
    { id: "power-bank", tier: 1, cat: "Power, light & communication", hz: ALL, cost: 1, pri: 8, kind: "buy",
      name: function (p) { return pl(UR.household(p).grownups, "phone power bank") + ", kept charged"; }, detail: "[[ready-power]]" },
    { id: "alarms", tier: 1, cat: "Safety & tools", hz: ALL, cost: 1, pri: 9, kind: "do", name: "Test smoke alarms and install a carbon monoxide alarm with battery backup", detail: "[[ready-winter]]" },
    { id: "extinguisher", tier: 1, cat: "Safety & tools", hz: ["earthquake", "wildfire", "power"], cost: 1, pri: 6, kind: "buy", name: "Fire extinguisher (know how to use it)", detail: "[[redcross-kit]]" },
    { id: "whistle", tier: 1, cat: "Safety & tools", hz: ["earthquake", "landslide", "avalanche"], cost: 1, pri: 5, kind: "buy", name: "A whistle per person, to signal for help", detail: "If trapped, use a whistle instead of shouting. [[ready-quake]]" },
    { id: "bed-kit", tier: 1, cat: "Safety & tools", hz: ["earthquake"], cost: 1, pri: 7, kind: "buy",
      name: function (p) { return "Sturdy shoes, gloves, and a flashlight by each bed (" + UR.household(p).people + ")"; }, detail: "Broken glass is common after shaking. [[ready-quake]]" },
    { id: "shutoffs", tier: 1, cat: "Safety & tools", hz: ["earthquake", "wildfire", "flood"], cost: 0, pri: 7, kind: "do",
      name: function (p) { return p.tenure === "rent" ? "Ask your landlord where the gas, water, and electric shutoffs are" : "Find your gas, water, and electric shutoffs and learn when to use them"; }, detail: "[[br-fire]]" },
    { id: "go-bag", tier: 1, cat: "Safety & tools", hz: ["wildfire", "flood", "landslide", "earthquake"], cost: 1, pri: 8, kind: "buy",
      name: function (p) { return (UR.household(p).people === 1 ? "A grab-and-go bag" : pl(UR.household(p).people, "grab-and-go bag") + ", one per person") + (p.car === "no" ? ", light enough to carry" : ""); },
      detail: "Water, snacks, flashlight, medicines, copies of documents, phone charger, a change of clothes. [[ready-kit]] [[ready-fire]]" },
    { id: "n95-7", tier: 1, cat: "Air quality", hz: LUNG, cost: 1, pri: 7, kind: "buy",
      name: function (p) { return (UR.household(p).people * 5) + " NIOSH-approved N95 respirators (about 5 per person, estimate)"; },
      detail: "Look for the TC approval number and check it on the NIOSH list; KN95s are not NIOSH-approved. Fit varies, so try sizes, and ask your pediatrician about children. [[niosh-cel]]" },
    { id: "rx-list", tier: 1, cat: "Health & medicine", hz: ALL, cost: 0, pri: 8, kind: "do", when: rx, name: "Write a one-page medication list (drug, dose, prescriber, pharmacy, Rx number)", detail: "Keep a copy in your go-bag and on your phone. [[ready-disab]]" },
    { id: "rx-7", crit: true, tier: 1, cat: "Health & medicine", hz: ALL, cost: 1, pri: 10, kind: "buy", when: rx, name: "At least 7 days of every prescription on hand", detail: "Refill on time rather than at the last minute. [[utah-rx-refill]]" },
    { id: "fever", tier: 1, cat: "Health & medicine", hz: ["pandemic"], cost: 1, pri: 6, kind: "buy", name: "Thermometer and fever reducers", detail: "From the HiveWatch Utah tier list. [[ready-pandemic]]" },
    { id: "glasses", tier: 1, cat: "Health & medicine", hz: ALL, cost: 1, pri: 4, kind: "buy", name: "Spare glasses, contact supplies, hearing-aid batteries (as needed)", detail: "[[ready-kit]]" },
    { id: "sanit-7", tier: 1, cat: "Sanitation & hygiene", hz: ALL, cost: 1, pri: 6, kind: "buy", name: "A week of toilet paper, menstrual products, wipes, soap, and heavy trash bags", detail: "[[ready-kit]]" },
    { id: "emergency-toilet", tier: 1, cat: "Sanitation & hygiene", hz: ["earthquake", "flood"], cost: 1, pri: 6, kind: "buy", name: "An emergency toilet: a bucket with a lid, heavy bags, and kitty litter or similar", detail: "Sewer lines can break in earthquakes. Garbage bags and plastic ties are on the Ready.gov kit list. [[ready-kit]]" },
    { id: "docs", tier: 1, cat: "Documents & money", hz: ALL, cost: 1, pri: 7, kind: "do", name: "Copies of IDs, insurance cards, and key documents in a waterproof folder (and an encrypted cloud copy)", detail: "[[ready-fin]]" },
    { id: "cash-small", tier: 1, cat: "Documents & money", hz: ["economic", "power", "earthquake"], cost: 1, pri: 6, kind: "buy", name: "Some cash in small bills", detail: "Card readers and ATMs may not work in an outage. [[br-power]]" },
    { id: "blankets", tier: 1, cat: "Warmth & shelter", hz: ["power", "earthquake"], cost: 1, pri: 6, kind: "buy",
      name: function (p) { return (UR.household(p).people === 1 ? "Warm layers and a blanket or sleeping bag" : "Warm layers and a blanket or sleeping bag for each of " + UR.household(p).people + " people"); }, detail: "[[br-power]] [[ready-winter]]" },
    { id: "car-kit", tier: 1, cat: "Warmth & shelter", hz: ["power", "wildfire", "avalanche"], cost: 1, pri: 5, kind: "buy", when: function (p) { return p.car !== "no"; }, name: "Winter car emergency kit; keep the fuel tank at least half full", detail: "[[br-severe]] [[br-fire]]" },
    { id: "radon-test", tier: 1, cat: "Home protection", hz: ["radon"], cost: 1, pri: 7, kind: "buy", name: function (p) { return p.tenure === "rent" ? "Ask whether your unit has been radon-tested, or test it yourself with a low-cost kit" : "Test your home for radon with a low-cost kit"; }, detail: "Mitigate at 4 pCi/L or higher. [[deq-radon]]" },
    { id: "drill", tier: 1, cat: "Kids & family", hz: ["earthquake"], cost: 0, pri: 7, kind: "do", name: "Practice Drop, Cover, and Hold On with everyone at home", detail: "Utah drills every April in the Great Utah ShakeOut. [[br-quake]] [[ready-quake]]" },
    { id: "hazard-map", tier: 1, cat: "Home protection", hz: ["earthquake", "landslide", "flood"], cost: 0, pri: 6, kind: "do", name: "Look up your address on the hazard maps", detail: "FaultLine Utah's Know Your Ground for earthquake hazards, the UGS Geologic Hazards Portal for landslides, and the flood maps. [[fl-ground]] [[ugs-portal]] [[br-flood]]" },
    { id: "evac-routes", tier: 1, cat: "Safety & tools", hz: ["wildfire", "flood", "landslide"], cost: 0, pri: 7, kind: "do",
      name: function (p) { return p.car === "no" ? "Plan how you'll evacuate without a car: who will drive you, and when to leave early" : "Plan two evacuation routes in different directions and where you'd go"; }, detail: "[[br-fire]] [[ready-fire]]" },
    { id: "air-bookmark", tier: 1, cat: "Air quality", hz: ["air", "wildfire", "gsl"], cost: 0, pri: 5, kind: "do", name: "Bookmark air.utah.gov and the AirNow Fire and Smoke Map", detail: "[[air-utah]] [[airnow-map]]" },
    { id: "water-sources", tier: 1, cat: "Water", hz: ["gsl"], cost: 0, pri: 4, kind: "do", name: "Follow your city's watering schedule and the Weekly Lawn Watering Guide", detail: "[[slowtheflow]]" },

    // ---------------- Tier 2: 14 days
    waterItem(2, 14),
    foodItem(2, 14),
    { id: "sanit-14", tier: 2, cat: "Sanitation & hygiene", hz: ALL, cost: 1, pri: 5, kind: "buy", name: "Two weeks of toilet paper, menstrual products, soap, and diapers if needed", detail: "In 2020, these ran out first. (HiveWatch Utah plan)" },
    { id: "sickroom", tier: 2, cat: "Health & medicine", hz: ["pandemic"], cost: 1, pri: 5, kind: "buy", name: "Sick-room supplies: disposable gloves, tissues, separate towels, extra bedding", detail: "Plan a room where a sick person can rest apart. [[ready-pandemic]]" },
    { id: "ors", tier: 2, cat: "Health & medicine", hz: ["pandemic"], cost: 1, pri: 5, kind: "buy", name: "Oral rehydration salts", detail: "For vomiting and diarrhea illnesses. (HiveWatch Utah tier list)" },
    { id: "pulseox", tier: 2, cat: "Health & medicine", hz: ["pandemic"], cost: 1, pri: 4, kind: "buy", name: "An FDA-cleared pulse oximeter", detail: "Readings can be off with cold hands, nail polish, movement, or darker skin; use the trend alongside symptoms, never alone. [[fda-pulseox]]" },
    { id: "disinfect", tier: 2, cat: "Sanitation & hygiene", hz: ["pandemic", "flood"], cost: 1, pri: 4, kind: "buy", name: "Unscented bleach and an EPA-registered disinfectant", detail: "Bleach also treats water (90-day list). [[epa-disinfect]]" },
    { id: "n95-14", tier: 2, cat: "Air quality", hz: LUNG, cost: 1, pri: 5, kind: "buy",
      name: function (p) { var n = UR.household(p).people; return (n * 10) + " to " + (n * 15) + " N95 respirators in total (10 to 15 per person, estimate)"; }, detail: "[[niosh-cel]]" },
    { id: "clean-air-room", tier: 2, cat: "Air quality", hz: ["wildfire", "air", "gsl"], cost: 2, pri: 6, kind: "buy",
      name: function (p) { return p.budget === "tight" ? "A clean-air room: DIY box-fan filter with a MERV 13 filter" : "A clean-air room: portable HEPA air cleaner sized for the room"; },
      detail: function (p) { return (p.budget === "tight" ? "EPA explains how to build a DIY air cleaner from a box fan and a MERV 13 filter. [[epa-diy]]" : "Choose a model sized for the room's square footage and run it on high during smoke. [[epa-cleanroom]] [[epa-filtration]]") + (p.med && p.med.lungHeart ? " Higher priority for your household because of lung or heart conditions." : ""); } },
    { id: "merv13", tier: 2, cat: "Air quality", hz: ["wildfire", "air"], cost: 1, pri: 4, kind: "buy", when: function (p) { return p.homeType !== "apartment" || p.tenure === "own"; }, name: "MERV 13 (or higher) furnace filters, if your system can take them", detail: "[[epa-filtration]]" },
    { id: "water-heater", tier: 2, cat: "Home protection", hz: ["earthquake"], cost: 1, pri: 8, kind: "do",
      name: function (p) { return p.tenure === "rent" ? "Ask your landlord to strap the water heater" : "Strap your water heater to the wall studs"; }, detail: "It protects you and the 30-plus gallons of water inside. [[br-water]]" },
    { id: "secure-furniture", tier: 2, cat: "Home protection", hz: ["earthquake"], cost: 1, pri: 8, kind: "do",
      name: function (p) { return "Secure tall furniture, TVs, and heavy wall hangings" + (p.tenure === "rent" ? " (ask about renter-friendly anchors)" : ""); }, detail: "Move heavy things off high shelves, especially above beds. [[ready-quake]] [[eq-roots]]" },
    { id: "contacts-paper", tier: 2, cat: "Power, light & communication", hz: ALL, cost: 0, pri: 5, kind: "do", name: "A family contact list on paper", detail: "Phones die. (HiveWatch Utah tier list) [[ready-plan]]" },
    { id: "cash-2wk", tier: 2, cat: "Documents & money", hz: ["economic", "power"], cost: 2, pri: 5, kind: "buy", name: "About two weeks of essential spending in cash, stored securely (estimate)", detail: "(HiveWatch Utah money plan) [[ready-fin]]" },
    { id: "flood-ins", tier: 2, cat: "Documents & money", hz: ["flood", "landslide", "earthquake"], cost: 0, pri: 5, kind: "do",
      name: function (p) { return p.tenure === "rent" ? "Check renters insurance: does it cover earthquake or flood? (Usually not without add-ons)" : "Check your insurance for flood and earthquake coverage"; },
      detail: "Most homeowners policies don't cover flood or earthquake. A new NFIP flood policy usually takes 30 days to start. [[br-flood]] [[ready-quake]] [[floodsmart-buy]]" },
    { id: "defensible", tier: 2, cat: "Home protection", hz: ["wildfire"], cost: 1, pri: 7, kind: "do", when: function (p) { return p.tenure === "own" && p.homeType !== "apartment"; },
      name: "Clear the Immediate Zone (0 to 5 ft): gutters, roof, mulch and firewood away from walls; 1/8-inch mesh on vents", detail: "[[nfpa-hiz]]" },
    { id: "cooler", tier: 2, cat: "Health & medicine", hz: ["power", "earthquake"], cost: 1, pri: 6, kind: "buy", when: function (p) { return p.med && p.med.refrigerated; }, name: "A cooler and ice plan for refrigerated medicine, plus a fridge thermometer", detail: "Ask your pharmacist how long each medicine is safe at room temperature. [[ready-power]]" },
    { id: "slope-drain", tier: 2, cat: "Home protection", hz: ["landslide"], cost: 1, pri: 4, kind: "do", when: function (p) { return p.tenure === "own" && (p.setting === "foothill" || p.setting === "canyon"); }, name: "Direct downspouts and driveway runoff away from slopes", detail: "[[br-land]]" },
    { id: "aerator", tier: 2, cat: "Water", hz: ["gsl"], cost: 1, pri: 3, kind: "buy", name: "Low-flow faucet aerators and a WaterSense showerhead", detail: "[[br-drought]] [[slowtheflow]]" },
    { id: "pipes", tier: 2, cat: "Warmth & shelter", hz: ["power"], cost: 1, pri: 4, kind: "do", name: "Insulate exposed pipes; know how to let faucets drip in a freeze", detail: "[[br-power]]" },

    // ---------------- Tier 3: 30 days
    waterItem(3, 30),
    foodItem(3, 30),
    { id: "rx-30", tier: 3, cat: "Health & medicine", hz: ALL, cost: 1, pri: 7, kind: "do", when: rx, name: "Ask your prescriber and insurer about 90-day fills or mail order", detail: "[[utah-rx-refill]]" },
    { id: "n95-30", tier: 3, cat: "Air quality", hz: LUNG, cost: 2, pri: 3, kind: "buy", name: function (p) { return (UR.household(p).people * 30) + " N95 respirators in total (about 30 per person, estimate)"; }, detail: "[[niosh-cel]]" },
    { id: "sanit-30", tier: 3, cat: "Sanitation & hygiene", hz: ALL, cost: 2, pri: 3, kind: "buy", name: "A month of hygiene supplies, laundry detergent, and dish soap", detail: "(HiveWatch Utah tier list)" },
    { id: "two-sick", tier: 3, cat: "Health & medicine", hz: ["pandemic"], cost: 1, pri: 3, kind: "do", name: "Supplies and a plan to care for two sick people at once", detail: "In 1918 the real problem was everyone sick at once. [[cdc-1918]]" },
    { id: "neighbors", tier: 3, cat: "Kids & family", hz: ALL, cost: 0, pri: 5, kind: "do", name: "Set up a neighbor check-in plan (phone tree or group text)", detail: "Neighbors and congregations are often the first help. [[br-plan]]" },
    { id: "fund-start", tier: 3, cat: "Documents & money", hz: ["economic"], cost: 2, pri: 6, kind: "do", name: "Start an emergency fund: a starter buffer of $500 to $2,000 or one month of essentials (estimate)", detail: "[[cfpb-fund]]" },
    { id: "directive", tier: 3, cat: "Documents & money", hz: ["pandemic"], cost: 0, pri: 3, kind: "do", name: "Advance directive and medical power of attorney", detail: "(HiveWatch Utah tier list)" },
    { id: "backup-heat", tier: 3, cat: "Warmth & shelter", hz: ["power"], cost: 2, pri: 4, kind: "do", name: "A safe backup plan for heat: where you'd go, and any heater rated for indoor use", detail: "Never use outdoor heaters, grills, or generators indoors. [[cdc-generator]] [[br-power]]" },

    // ---------------- Tier 4: 90 days
    { id: "water-treat", tier: 4, cat: "Water", hz: ALL, cost: 1, pri: 6, kind: "buy", name: "Water treatment: unscented bleach, a quality filter, and the know-how",
      detail: function (p) { var s = "Boil at a rolling boil for 1 minute"; if (p.setting === "canyon" || ["Summit", "Wasatch", "Rich", "Daggett", "Garfield", "Piute", "Wayne"].indexOf(p.county) !== -1) s += " (3 minutes above 6,500 feet, which may apply to you)"; else s += " (3 minutes above 6,500 feet)"; return s + ", or use 8 drops of 5 to 9% bleach per gallon and wait 30 minutes. A practical 90-day plan is 14 to 30 days stored plus the ability to treat more. [[cdc-water]] [[epa-disinfect]]"; } },
    { id: "water-90", tier: 4, cat: "Water", hz: ALL, cost: 1, pri: 5, kind: "do",
      name: function (p) { return "Keep at least " + UR.water(p, 30).total + " gallons (30 days) stored and rotated"; },
      detail: "During a long event, stored water plus the ability to treat more is the practical goal. [[br-water]] [[church-storage]]" },
    foodItem(4, 90),
    { id: "rx-90", tier: 4, cat: "Health & medicine", hz: ALL, cost: 2, pri: 5, kind: "do", when: rx, name: "A standing 30 to 90-day medication buffer where legally and medically allowed", detail: function (p) { return "Utah pharmacists may give a one-time emergency refill of a non-controlled drug in some cases; controlled substances are excluded. [[utah-rx-refill]]" + (p.med && p.med.controlled ? " Make a written plan with your prescriber for controlled medications." : ""); } },
    { id: "n95-90", tier: 4, cat: "Air quality", hz: LUNG, cost: 2, pri: 2, kind: "buy", name: function (p) { var n = UR.household(p).grownups; return (n * 50) + " to " + (n * 100) + " N95s for adults, or a reusable elastomeric respirator with filters (estimate)"; }, detail: "[[niosh-cel]]" },
    { id: "fund-3mo", tier: 4, cat: "Documents & money", hz: ["economic"], cost: 3, pri: 4, kind: "do", name: function (p) { return p.selfEmployed ? "Work toward 6 to 12 months of expenses saved (self-employed, estimate)" : "Work toward 3 to 6 months of essential expenses saved"; }, detail: "[[cfpb-fund]] [[church-storage]]" },
    { id: "will", tier: 4, cat: "Documents & money", hz: ["economic", "pandemic"], cost: 1, pri: 2, kind: "do", name: "An updated will and account-access instructions for a trusted person", detail: "(HiveWatch Utah tier list)" },
    { id: "sanit-90", tier: 4, cat: "Sanitation & hygiene", hz: ALL, cost: 2, pri: 2, kind: "buy", name: "Three months of hygiene and cleaning supplies, rotated", detail: "Bleach weakens over months, so rotate it [verify shelf-life guidance]. (HiveWatch Utah)" },

    // ---------------- household-specific items
    { id: "power-backup", crit: true, tier: 1, cat: "Health & medicine", hz: ["power", "earthquake", "wildfire"], cost: 3, pri: 10, kind: "buy", when: function (p) { return p.med && p.med.powered; },
      name: "Backup power for medical equipment (battery or portable power station sized to your device)", detail: "Ask your equipment supplier how long the device runs on battery and what backup they recommend. If you use oxygen, ask about backup cylinders. [[ready-power]] [[ready-disab]]" },
    { id: "rmp-medcert", tier: 1, cat: "Health & medicine", hz: ["power"], cost: 0, pri: 9, kind: "do", when: function (p) { return p.med && p.med.powered; }, name: "Ask Rocky Mountain Power about its Medical Certificate program (if they're your utility)", detail: "A qualified medical professional completes the application. [[rmp-afn]]" },
    { id: "mobility-plan", tier: 1, cat: "Kids & family", hz: ALL, cost: 0, pri: 8, kind: "do", when: function (p) { return p.med && p.med.mobility; }, name: "Set up a buddy who can help you evacuate, and keep mobility aids by your bed", detail: "If you use a walker or wheelchair during an earthquake, lock your wheels and cover your head and neck. [[ready-quake]] [[ready-disab]]" },
    { id: "asthma-plan", tier: 1, cat: "Health & medicine", hz: LUNG, cost: 0, pri: 8, kind: "do", when: function (p) { return p.med && p.med.lungHeart; }, name: "Ask your clinician for a written action plan for smoke, dust, and inversion days", detail: "[[air-utah]] [[epa-filtration]]" },
    { id: "formula", crit: true, tier: 1, cat: "Kids & family", hz: ALL, cost: 2, pri: 10, kind: "buy", when: function (p) { return p.diet && p.diet.formula; }, name: "At least 7 days of infant formula (ready-to-feed needs no water), bottles, and diapers", detail: "The 2022 formula shortage showed the value of a buffer; ask your pediatrician about alternatives. [[ready-kids]]" },
    { id: "kids-kit", tier: 1, cat: "Kids & family", hz: ALL, cost: 1, pri: 6, kind: "buy", when: function (p) { return (+p.children || 0) + (+p.infants || 0) > 0; }, name: "Comfort items, snacks, and an activity kit for the kids", detail: "[[ready-kids]]" },
    { id: "school-plan", tier: 1, cat: "Kids & family", hz: ALL, cost: 0, pri: 7, kind: "do", when: function (p) { return (+p.children || 0) > 0; }, name: "Learn each school's emergency release plan and update who's allowed to pick up", detail: "[[ready-kids]]" },
    { id: "pet-kit", tier: 1, cat: "Pets & animals", hz: ALL, cost: 1, pri: 8, kind: "buy", when: anyPets,
      name: function (p) { var h = UR.household(p); return "Pet kit: 7 days of food, water bowls, medicine, and a carrier or leash for " + (h.pets === 1 ? "your pet" : "each of your " + h.pets + " pets"); },
      detail: "Many shelters and hotels don't allow pets, so plan where you'd go and set up a buddy who could take them. [[ready-pets]]" },
    { id: "pet-14", tier: 2, cat: "Pets & animals", hz: ALL, cost: 1, pri: 4, kind: "buy", when: anyPets, name: "14 days of pet food and medicine; flea control for cats and dogs", detail: "Flea control helps prevent plague, which cats often carry to people after hunting rodents. [[dhhs-plague]]" },
    { id: "pet-90", tier: 4, cat: "Pets & animals", hz: ALL, cost: 2, pri: 2, kind: "buy", when: anyPets, name: "Up to 90 days of pet food in rotation, and a care plan if you're hospitalized", detail: "[[ready-pets]]" },
    { id: "microchip", tier: 2, cat: "Pets & animals", hz: ALL, cost: 1, pri: 4, kind: "do", when: anyPets, name: "Microchip your pets and keep the contact info current", detail: "[[ready-pets]]" },
    { id: "livestock", tier: 1, cat: "Pets & animals", hz: ["wildfire", "flood", "gsl"], cost: 0, pri: 7, kind: "do", when: function (p) { return p.livestock; }, name: "Livestock plan: ID for every animal, trailers and handlers lined up, two routes, a destination with feed and water", detail: "Evacuate large animals earlier whenever possible. [[ready-pets]]" },
    { id: "flock", tier: 1, cat: "Pets & animals", hz: ["pandemic"], cost: 0, pri: 6, kind: "do", when: function (p) { return p.flock; }, name: "Backyard flock biosecurity; don't handle sick or dead birds bare-handed", detail: "[[cdc-birdflu]] [[dhhs-birdflu]]" },
    { id: "aval-gear", tier: 1, cat: "Backcountry", hz: ["avalanche"], cost: 3, pri: 9, kind: "buy", when: function (p) { return p.backcountry; }, name: "Avalanche transceiver, shovel, and probe for each backcountry traveler", detail: "[[br-aval]]" },
    { id: "aval-course", tier: 2, cat: "Backcountry", hz: ["avalanche"], cost: 2, pri: 8, kind: "do", when: function (p) { return p.backcountry; }, name: "Take an avalanche course and practice rescue", detail: "[[uac-edu]] [[uac-kbyg]]" },
    { id: "aval-forecast", tier: 1, cat: "Backcountry", hz: ["avalanche"], cost: 0, pri: 9, kind: "do", when: function (p) { return p.backcountry; }, name: "Read the Utah Avalanche Center forecast every day you go", detail: "[[uac-forecast]]" },
    { id: "generator", tier: 3, cat: "Power, light & communication", hz: ["power"], cost: 3, pri: 3, kind: "buy", when: function (p) { return p.budget === "comfortable" && !(p.med && p.med.powered); },
      name: "Optional: a portable power station or generator (outdoor use only)", detail: "Connect to home wiring only through a transfer switch installed by a licensed electrician. [[br-power]] [[cdc-generator]]" }
  ];

  function resolve(v, p) { return typeof v === "function" ? v(p) : v; }

  // ---------------------------------------------------------------- build the checklist
  UR.buildChecklist = function (p) {
    var sel = p.hazards && p.hazards.length ? p.hazards : UR.hazards.map(function (h) { return h.id; });
    var tiers = { 1: [], 2: [], 3: [], 4: [] };
    UR.items.forEach(function (it) {
      if (it.when && !it.when(p)) return;
      var tags;
      if (it.hz[0] === "all") tags = ["all"];
      else { tags = it.hz.filter(function (h) { return sel.indexOf(h) !== -1; }); if (!tags.length) return; }
      tiers[it.tier].push({ id: it.id, tier: it.tier, cat: it.cat, name: resolve(it.name, p), detail: resolve(it.detail, p) || "", tags: tags, cost: it.cost, pri: it.pri, kind: it.kind, crit: !!it.crit });
    });
    Object.keys(tiers).forEach(function (t) {
      tiers[t].sort(function (a, b) { return UR.CATS.indexOf(a.cat) - UR.CATS.indexOf(b.cat) || b.pri - a.pri; });
    });
    return tiers;
  };

  // Budget-aware "buy first": most protective, affordable items from the first two tiers.
  UR.buyFirst = function (p, checklist, done) {
    done = done || {};
    var pool = checklist[1].concat(checklist[2]).filter(function (i) { return i.kind === "buy" && !done[i.id]; });
    var maxCost = p.budget === "tight" ? 1 : p.budget === "moderate" ? 2 : 3;
    pool.forEach(function (i) {
      var s = i.pri * 10 - (i.tier - 1) * 15;
      if (i.cost > maxCost && !i.crit) s -= 40;          // over budget: push down, keep if critical (medical)
      if (p.budget === "tight" && !i.crit) s -= i.cost * 6;
      if (i.crit) s += 30;
      i._score = s;
    });
    pool.sort(function (a, b) { return b._score - a._score; });
    return pool.slice(0, 10);
  };
  UR.freeFirst = function (p, checklist, done) {
    done = done || {};
    return checklist[1].concat(checklist[2]).filter(function (i) { return i.cost === 0 && !done[i.id]; })
      .sort(function (a, b) { return b.pri - a.pri; }).slice(0, 6);
  };

  // Rough cost ranges per tier for ONE adult, from the HiveWatch Utah plan (ALL ESTIMATES).
  UR.COST_PER_ADULT = { 1: [75, 250], 2: [150, 450], 3: [300, 900], 4: [700, 2500] };

  // ---------------------------------------------------------------- household additions
  UR.additions = function (p) {
    var a = [], med = p.med || {}, diet = p.diet || {}, h = UR.household(p);
    function add(id, title, items, icon) { a.push({ id: id, title: title, items: items, icon: icon || "heart" }); }
    if (med.rx || med.controlled) add("meds", "Medication continuity", [
      "Keep a one-page medication list (drug, dose, prescriber, pharmacy, Rx number) in your go-bag and on your phone. On an iPhone, the Health app's Medical ID can show allergies and conditions on the lock screen.",
      "Refill early and on time. Ask your insurer about 90-day fills or mail order for maintenance medicines.",
      "Utah rule: if your prescriber can't be reached, a pharmacist may give a one-time emergency refill of a <strong>non-controlled</strong> drug you already take (normally just enough for the emergency, sometimes up to 30 days). <strong>Controlled substances are excluded.</strong> [[utah-rx-refill]]",
      med.controlled ? "Because you take a controlled medication, make a written plan now with your prescriber: early-refill policy, telehealth, and a backup prescriber." : null,
      med.refrigerated ? "Refrigerated medicine: ask your pharmacist how long each is safe unrefrigerated, and keep a cooler and ice plan. [[ready-power]]" : null
    ], "pill");
    if (med.powered) add("powered", "Powered medical equipment", [
      "Talk to your medical provider and equipment supplier about a power-outage plan: battery run time, backup batteries, and (for oxygen) backup cylinders. [[ready-power]]",
      "If Rocky Mountain Power is your utility, ask about the Medical Certificate program; a qualified medical professional completes the application. [[rmp-afn]]",
      "Decide in advance where you'd go if an outage lasts (a relative with power, a facility your provider recommends).",
      "If you use a generator or power station, run fuel-burning generators only outdoors, at least 20 feet from windows, doors, and vents. [[cdc-generator]]",
      "Wildfire safety shutoffs and earthquakes can cause long outages; keep devices charged on high-risk days. [[rmp-psps-2026]]"
    ], "plug");
    if (med.mobility) add("mobility", "Mobility needs", [
      "Arrange a buddy who can help you leave quickly, and tell them where your go-bag is. [[ready-disab]]",
      "Earthquake with a walker or wheelchair: lock your wheels and cover your head and neck; with a cane, sit and cover your head and neck. [[ready-quake]]",
      "Keep mobility aids, glasses, and a flashlight within reach of your bed.",
      p.car === "no" ? "Without a car, plan your evacuation ride now and leave early when officials warn of danger." : null
    ], "access");
    if (med.lungHeart) add("lungs", "Lung or heart conditions", [
      "Ask your clinician for a written action plan for smoke, dust, and inversion days.",
      "Set up a clean-air room with a HEPA air cleaner sized for the room (or a DIY box-fan filter). [[epa-cleanroom]] [[epa-diy]]",
      "Check air.utah.gov daily in inversion season and the AirNow Fire and Smoke Map in summer. [[air-utah]] [[airnow-map]]",
      "A pulse oximeter can help you track trends, but readings have limits; never rely on it alone. [[fda-pulseox]]"
    ], "lungs");
    if (med.pregnancy) add("pregnancy", "Pregnancy", [
      "Ask your prenatal provider what to do if you can't reach your usual hospital (road closures, outages), and keep your prenatal records in your go-bag.",
      "Limit smoke and dust exposure: use your clean-air room on bad-air days. [[epa-cleanroom]]",
      "Know your measles vaccination status; measles is especially dangerous in pregnancy and for infants. [[dhhs-measles]]"
    ], "heart");
    if (h.kids + h.infants > 0) add("kids", "Kids", [
      "Learn each school's emergency release plan and keep your pickup list current. [[ready-kids]]",
      "Practice Drop, Cover, and Hold On and your meeting place together; kids do better when they've practiced. [[ready-kids]]",
      "Pack comfort items, snacks, and activities in their go-bags.",
      "Keep their vaccination records handy; measles exposure means a 21-day watch window. [[dhhs-measles]]",
      h.infants > 0 ? "Infants: diapers, wipes, and a formula or feeding plan for at least 7 days." : null
    ], "kids");
    if (diet.formula) add("formula", "Infant formula", [
      "Keep a buffer of the formula your baby uses; the 2022 U.S. shortage showed how fast shelves can empty.",
      "Ready-to-feed formula needs no water, which helps if your water is unsafe. Ask your pediatrician about safe alternatives in a shortage.",
      "If you mix powdered formula, keep treated or bottled water set aside just for the baby. [[cdc-water]]"
    ], "bottle");
    if (diet.allergy || diet.celiac || diet.other) add("diet", "Dietary needs", [
      "Tailor stored foods to what everyone can safely eat, read labels, and rotate accordingly.",
      diet.allergy ? "Food allergies: keep extra epinephrine auto-injectors (if prescribed) with your medication supply, and check expiration dates when you rotate." : null,
      diet.celiac ? "Celiac disease: store certified gluten-free staples you already use, and keep them separate from shared bulk staples." : null,
      "Emergency food handouts may not fit your needs, so your own storage matters more."
    ], "bowl");
    if (h.seniors > 0) add("older", "Older adults", [
      "Set up a daily check-in with a neighbor or relative during heat, cold, outages, and outbreaks. [[ready-older]]",
      "Keep spare glasses, hearing-aid batteries, and a medication list in the go-bag. [[ready-kit]]",
      "Older adults are more vulnerable to cold; plan a warm place to go in long winter outages. [[ready-winter]]"
    ], "older");
    if (h.pets > 0 || p.livestock || p.flock) add("pets", "Pets and animals", [
      h.pets > 0 ? "Your water totals include about " + fmtGal(h.petGalDay) + " gal/day for pets (planning estimate: about 1 quart per cat or small dog, 1 gallon per large dog; ask your vet)." : null,
      h.pets > 0 ? "Many public shelters and hotels don't allow pets. Know where you'd go, and set up a buddy who can take them. [[ready-pets]]" : null,
      h.pets > 0 ? "Microchip pets, keep a photo of you with each pet, and keep carriers handy. [[ready-pets]]" : null,
      h.pets > 0 ? "Flea control matters in Utah: cats often bring plague to people after hunting rodents. Don't let outdoor cats sleep on beds. [[dhhs-plague]]" : null,
      p.livestock ? "Livestock: ID every animal, line up trailers and handlers, map two routes, and evacuate earlier. [[ready-pets]]" : null,
      p.flock ? "Backyard flock: practice biosecurity and don't handle sick or dead birds bare-handed (H5N1). [[cdc-birdflu]]" : null
    ], "paw");
    if (p.tenure === "rent") add("renters", "Questions to ask your landlord", [
      p.brick !== "no" ? "Is this building unreinforced masonry (URM), and has it had a seismic retrofit? [[eq-urm]]" : "Has the building had any earthquake upgrades, and are heavy fixtures anchored?",
      "Is the water heater strapped? May I anchor tall furniture to the wall? [[br-water]]",
      "Has the unit been tested for radon? Is there a mitigation system? [[deq-radon]]",
      "Where are the gas, water, and electric shutoffs, and who handles them in an emergency?",
      "Are smoke and carbon monoxide alarms installed and working? [[ready-winter]]",
      "What's the evacuation route, and is there a building emergency plan or meeting point?",
      "And for you: renters insurance covers your belongings; ask whether earthquake or flood coverage is available as an add-on. [[ready-quake]] [[br-flood]]"
    ], "key");
    if (p.brick === "yes" || p.brick === "unsure") add("brick", "Older brick (pre-1975) earthquake notes", [
      "Check the URM signs: rows of endways bricks every five to six rows, deeply recessed windows, rows of bolt heads or rosettes. No single sign proves it. [[eq-urm]] FaultLine Utah's Is It Brick? walks you through them. [[fl-brick]]",
      "URM buildings can collapse inward and outward and crumble onto sidewalks and cars. During shaking, Drop, Cover, and Hold On inside rather than running out past falling brick. [[eq-urm]] [[ready-quake]]",
      "Sleep away from brick walls and chimneys if you can, and keep heavy objects off shelves over beds.",
      p.tenure === "own" ? "Talk to a licensed structural engineer about retrofit options. Salt Lake City's Fix the Bricks program is closed with a 10+ year wait, and lists an average retrofit cost of $20,000. [[slc-ftb]]" : "Ask your landlord about retrofit status, and know your building's exits.",
      "Standard homeowners policies don't cover earthquake damage; ask about earthquake insurance. [[ready-quake]]"
    ], "brick");
    if (p.homeType === "mobile") add("mobile", "Manufactured or mobile home", [
      "Ask a licensed installer whether your home's tie-downs and supports are in good shape [unverified: specific Utah requirements].",
      "Plan a sturdier place to go during long winter outages; manufactured homes can lose heat quickly (general guidance).",
      "Keep skirting and pipes protected against freezing. [[br-power]]"
    ], "home");
    if (p.car === "no" || p.car === "shared") add("nocar", p.car === "no" ? "Getting out without a car" : "Sharing a car", [
      "Arrange now who will drive you if you need to evacuate, and agree on a trigger to leave early. [[ready-plan]]",
      "Keep go-bags light enough to carry, with comfortable shoes.",
      "Store a little more at home, since quick store runs are harder."
    ], "walk");
    if (p.space === "small") add("space", "Small-space storage", [
      "Use 2-liter bottles and slim containers under beds, at the back of closets, and behind books. [[br-water]]",
      "Store what you eat and rotate it, so your pantry is your storage. [[usu-food]]",
      "Prioritize water treatment supplies for the longer tiers. [[cdc-water]]"
    ], "box");
    if (p.budget === "tight") add("budget", "Building on a tight budget", [
      "Start with the free steps in your plan; many of the most protective actions cost nothing.",
      "Buy a little extra of what you already eat each week, like a staircase, not a shopping spree. [[church-storage]] [[usu-food]]",
      "Refill clean 2-liter soda bottles with tap water for free water storage. [[br-water]]"
    ], "coin");
    if (p.setting === "canyon") add("canyon", "Canyon and mountain living", [
      "You may have one road out. Leave early when fire, flood, or avalanche danger rises. [[br-fire]]",
      "Store extra food and fuel; roads can close for days in storms.",
      "Boil water 3 minutes instead of 1 above 6,500 feet. [[cdc-water]]"
    ], "mountain");
    if (p.setting === "rural") add("rural", "Rural and desert living", [
      "You're farther from hospitals and stores, so keep a larger first-aid kit and more medicine buffer.",
      "If you're on a private well, know how to disinfect and test it after a flood. [[cdc-water]]",
      "Check flash-flood forecasts before driving desert washes. [[nws-flood]]"
    ], "sun");
    a.forEach(function (x) { x.items = x.items.filter(Boolean); });
    return a;
  };

  UR.defaultProfile = function () {
    return { county: "", setting: "", homeType: "", brick: "", tenure: "", adults: 1, seniors: 0, children: 0, infants: 0,
      petsSmall: 0, petsLarge: 0, livestock: false, flock: false,
      med: { rx: false, controlled: false, refrigerated: false, powered: false, mobility: false, lungHeart: false, pregnancy: false },
      diet: { allergy: false, celiac: false, formula: false, other: false },
      car: "", budget: "", space: "", selfEmployed: false, backcountry: false, hazards: null };
  };
})(typeof window !== "undefined" ? window : globalThis);
