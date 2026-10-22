/* Prepare Utah - source registry.
   Every factual claim on the site links to one of these. Checked dates are when the
   link was verified to load. Edit here; the Sources page is generated from this file. */
(function (root) {
  var S = {
    // ---------- Be Ready Utah (Utah Division of Emergency Management) ----------
    "br":          { pub: "Be Ready Utah", title: "Be Ready Utah (Utah Division of Emergency Management)", url: "https://beready.utah.gov/" },
    "br-water":    { pub: "Be Ready Utah", title: "12 Areas of Preparedness: Water", url: "https://beready.utah.gov/family-preparedness/12-areas-of-preparedness/water/" },
    "br-12":       { pub: "Be Ready Utah", title: "12 Areas of Preparedness", url: "https://beready.utah.gov/family-preparedness/12-areas-of-preparedness/" },
    "br-kit":      { pub: "Be Ready Utah", title: "Get a Kit (family)", url: "https://beready.utah.gov/family-preparedness/get-a-kit-family/" },
    "br-plan":     { pub: "Be Ready Utah", title: "Make a Plan (family)", url: "https://beready.utah.gov/family-preparedness/make-a-plan-family/" },
    "br-quake":    { pub: "Be Ready Utah", title: "Earthquakes", url: "https://beready.utah.gov/utah-hazards/earthquake/" },
    "br-fire":     { pub: "Be Ready Utah", title: "Wildfire", url: "https://beready.utah.gov/utah-hazards/wildfire/" },
    "br-flood":    { pub: "Be Ready Utah", title: "Flood", url: "https://beready.utah.gov/utah-hazards/flood/" },
    "br-land":     { pub: "Be Ready Utah", title: "Landslide", url: "https://beready.utah.gov/utah-hazards/landslide/" },
    "br-aval":     { pub: "Be Ready Utah", title: "Avalanche", url: "https://beready.utah.gov/utah-hazards/avalanche/" },
    "br-power":    { pub: "Be Ready Utah", title: "Power Outage", url: "https://beready.utah.gov/utah-hazards/power-outage/" },
    "br-drought":  { pub: "Be Ready Utah", title: "Drought", url: "https://beready.utah.gov/utah-hazards/drought/" },
    "br-severe":   { pub: "Be Ready Utah", title: "Severe Weather (winter safety)", url: "https://beready.utah.gov/utah-hazards/severe-weather/" },
    "br-pandemic": { pub: "Be Ready Utah", title: "Pandemic", url: "https://beready.utah.gov/utah-hazards/pandemic/" },

    // ---------- Ready.gov (FEMA) ----------
    "ready-kit":     { pub: "Ready.gov (FEMA)", title: "Build a Kit", url: "https://www.ready.gov/kit" },
    "ready-plan":    { pub: "Ready.gov (FEMA)", title: "Make a Plan", url: "https://www.ready.gov/plan" },
    "ready-pandemic":{ pub: "Ready.gov (FEMA)", title: "Pandemic", url: "https://www.ready.gov/pandemic" },
    "ready-pets":    { pub: "Ready.gov (FEMA)", title: "Prepare Your Pets for Disasters", url: "https://www.ready.gov/pets" },
    "ready-quake":   { pub: "Ready.gov (FEMA)", title: "Earthquakes", url: "https://www.ready.gov/earthquakes" },
    "ready-fire":    { pub: "Ready.gov (FEMA)", title: "Wildfires", url: "https://www.ready.gov/wildfires" },
    "ready-flood":   { pub: "Ready.gov (FEMA)", title: "Floods", url: "https://www.ready.gov/floods" },
    "ready-land":    { pub: "Ready.gov (FEMA)", title: "Landslides & Debris Flow", url: "https://www.ready.gov/landslides-debris-flow" },
    "ready-power":   { pub: "Ready.gov (FEMA)", title: "Power Outages", url: "https://www.ready.gov/power-outages" },
    "ready-winter":  { pub: "Ready.gov (FEMA)", title: "Winter Weather", url: "https://www.ready.gov/winter-weather" },
    "ready-drought": { pub: "Ready.gov (FEMA)", title: "Drought", url: "https://www.ready.gov/drought" },
    "ready-aval":    { pub: "Ready.gov (FEMA)", title: "Avalanche", url: "https://www.ready.gov/avalanche" },
    "ready-fin":     { pub: "Ready.gov (FEMA)", title: "Financial Preparedness", url: "https://www.ready.gov/financial-preparedness" },
    "ready-disab":   { pub: "Ready.gov (FEMA)", title: "People with Disabilities", url: "https://www.ready.gov/people-disabilities" },
    "ready-older":   { pub: "Ready.gov (FEMA)", title: "Older Adults", url: "https://www.ready.gov/older-adults" },
    "ready-kids":    { pub: "Ready.gov (FEMA)", title: "Kids & Families", url: "https://www.ready.gov/kids" },
    "redcross-kit":  { pub: "American Red Cross", title: "Survival Kit Supplies", url: "https://www.redcross.org/get-help/how-to-prepare-for-emergencies/survival-kit-supplies.html" },

    // ---------- Earthquake ----------
    "ugs-eq":     { pub: "Utah Geological Survey", title: "Earthquake Hazards", url: "https://geology.utah.gov/hazards/earthquakes/" },
    "ugs-liq":    { pub: "Utah Geological Survey", title: "Liquefaction", url: "https://geology.utah.gov/hazards/earthquakes/liquefaction/" },
    "ugs-eew":    { pub: "Utah Geological Survey", title: "Update on Utah's Earthquake Early Warning Efforts (Survey Notes, Jan 2025)", url: "https://geology.utah.gov/map-pub/survey-notes/update-on-utahs-earthquake-early-warning-efforts/" },
    "ugs-portal": { pub: "Utah Geological Survey", title: "Utah Geologic Hazards Portal (interactive map)", url: "https://maps.geology.utah.gov/hazards/" },
    "eq-urm":     { pub: "Utah Seismic Safety Commission / Utah DEM", title: "Unreinforced Masonry Buildings in Utah", url: "https://earthquakes.utah.gov/unreinforced-masonry/" },
    "eq-roots":   { pub: "Utah Seismic Safety Commission", title: "Putting Down Roots in Earthquake Country (Utah handbook)", url: "https://earthquakes.utah.gov/putting-down-roots/" },
    "usgs-magna": { pub: "USGS", title: "M 5.7 Magna, Utah earthquake, March 18, 2020 (event page)", url: "https://earthquake.usgs.gov/earthquakes/eventpage/uu60363602/executive" },
    "usgs-map":   { pub: "USGS", title: "Latest Earthquakes map", url: "https://earthquake.usgs.gov/earthquakes/map/" },
    "usgs-nshm":  { pub: "USGS", title: "2023 50-State National Seismic Hazard Model", url: "https://www.usgs.gov/programs/earthquake-hazards/science/2023-50-state-long-term-national-seismic-hazard-model" },
    "uuss":       { pub: "University of Utah Seismograph Stations", title: "UUSS: recent Utah earthquakes and information", url: "https://quake.utah.edu/" },
    "shakealert": { pub: "ShakeAlert (USGS & partners)", title: "ShakeAlert earthquake early warning (CA, OR, WA)", url: "https://www.shakealert.org/" },
    "slc-ftb":    { pub: "Salt Lake City", title: "Fix the Bricks application page", url: "https://www.slc.gov/housingstability/fix-the-bricks-application/" },
    "moschetti":  { pub: "Seismological Research Letters", title: "Moschetti et al. (2021), ground motions from Utah earthquakes incl. Magna", url: "https://doi.org/10.1785/0220200449" },
    "pang":       { pub: "Geophysical Research Letters", title: "Pang et al. (2020), the Magna earthquake fault geometry", url: "https://doi.org/10.1029/2020GL089798" },

    // ---------- FaultLine Utah (sister site: earthquake hazards by address) ----------
    "fl-home":   { pub: "FaultLine Utah (sister site)", title: "FaultLine Utah: Living on the Fault", url: "https://faultlineutah.com/", short: "FaultLine Utah" },
    "fl-ground": { pub: "FaultLine Utah (sister site)", title: "Know Your Ground: faults, liquefaction, and shaking for any Utah address", url: "https://faultlineutah.com/ground.html", short: "FaultLine Utah" },
    "fl-faults": { pub: "FaultLine Utah (sister site)", title: "Fault Lines: statewide fault map", url: "https://faultlineutah.com/faults.html", short: "FaultLine Utah" },
    "fl-brick":  { pub: "FaultLine Utah (sister site)", title: "Is It Brick? Unreinforced-masonry self-check", url: "https://faultlineutah.com/brick.html", short: "Is It Brick?" },
    "fl-magna":  { pub: "FaultLine Utah (sister site)", title: "Magna 2020: the story, and what scientists learned", url: "https://faultlineutah.com/magna.html", short: "FaultLine Utah" },

    // ---------- Pandemic & outbreaks (reused from the HiveWatch Utah plan, checked Oct 22, 2026) ----------
    "dhhs-measles": { pub: "Utah DHHS", title: "Measles response (Utah case counts)", url: "https://epi.utah.gov/measles-response/" },
    "cdc-measles":  { pub: "CDC", title: "Measles cases and outbreaks", url: "https://www.cdc.gov/measles/data-research/index.html" },
    "cdc-birdflu":  { pub: "CDC", title: "H5 bird flu: current situation", url: "https://www.cdc.gov/bird-flu/situation-summary/index.html" },
    "dhhs-birdflu": { pub: "Utah DHHS", title: "Bird flu in humans (Utah)", url: "https://epi.utah.gov/bird-flu-in-humans/" },
    "dhhs-wnv":     { pub: "Utah DHHS", title: "West Nile virus reports", url: "https://epi.utah.gov/west-nile-virus-reports/" },
    "dhhs-arbo39":  { pub: "Utah DHHS", title: "Arboviral surveillance weekly report, week 39, 2026 (PDF)", url: "https://epi.utah.gov/wp-content/uploads/Arboviral-Surveillance-Weekly-Report__MMWR39_2026.pdf" },
    "dhhs-plague":  { pub: "Utah DHHS", title: "Plague", url: "https://epi.utah.gov/plague/" },
    "dhhs-hanta":   { pub: "Utah DHHS", title: "Hantavirus", url: "https://epi.utah.gov/hantavirus/" },
    "cdc-hanta":    { pub: "CDC", title: "Hantavirus case data", url: "https://www.cdc.gov/hantavirus/data-research/cases/" },
    "cdc-ebola":    { pub: "CDC", title: "Ebola: current situation", url: "https://www.cdc.gov/ebola/situation-summary/index.html" },
    "cdc-resp":     { pub: "CDC", title: "Respiratory illness data channel", url: "https://www.cdc.gov/respiratory-viruses/data/index.html" },
    "uwss":         { pub: "Utah DHHS", title: "Utah Wastewater Surveillance System", url: "https://avrpublic.dhhs.utah.gov/uwss/" },
    "dhhs-dash":    { pub: "Utah DHHS", title: "Utah health dashboards", url: "https://dhhs.utah.gov/health-dashboards/" },
    "who-don620":   { pub: "World Health Organization", title: "Disease Outbreak News: pneumonia of undetermined etiology, Russian Federation (Oct 10, 2026)", url: "https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON620" },
    "cdc-water":    { pub: "CDC", title: "Make water safe during an emergency", url: "https://www.cdc.gov/water-emergency/about/index.html" },
    "epa-disinfect":{ pub: "U.S. EPA", title: "Emergency disinfection of drinking water", url: "https://www.epa.gov/ground-water-and-drinking-water/emergency-disinfection-drinking-water" },
    "niosh-cel":    { pub: "CDC / NIOSH", title: "NIOSH Certified Equipment List (check an N95's approval number)", url: "https://wwwn.cdc.gov/NIOSH-CEL/" },
    "fda-pulseox":  { pub: "U.S. FDA", title: "Pulse oximeter basics", url: "https://www.fda.gov/consumers/consumer-updates/pulse-oximeter-basics" },
    "utah-rx-refill": { pub: "Utah Legislature", title: "Utah Code 58-17b-608 (pharmacist emergency refill)", url: "https://le.utah.gov/xcode/Title58/Chapter17B/58-17b-S608.html" },
    "utah-53-2a-206": { pub: "Utah Legislature", title: "Utah Code 53-2a-206 (governor's state of emergency, 30-day limit)", url: "https://le.utah.gov/xcode/Title53/Chapter2A/53-2a-S206.html" },
    "utah-26b-7-317": { pub: "Utah Legislature", title: "Utah Code 26B-7-317 (public health emergency, 30-day limit)", url: "https://le.utah.gov/xcode/Title26B/Chapter7/26B-7-S317.html" },
    "sb195":        { pub: "Utah Legislature", title: "SB 195 (2021) Emergency Response Amendments, enrolled (PDF)", url: "https://le.utah.gov/~2021/bills/sbillenr/SB0195.pdf" },
    "hb294":        { pub: "Utah Legislature", title: "HB 294 (2021) Pandemic Emergency Powers Amendments", url: "https://le.utah.gov/~2021/bills/static/HB0294.html" },
    "flu-slc-1918": { pub: "Influenza Encyclopedia (Univ. of Michigan)", title: "Salt Lake City and the 1918 influenza", url: "https://www.influenzaarchive.org/cities/city-saltlakecity.html" },
    "cdc-1918":     { pub: "CDC (archive)", title: "1918 Pandemic (H1N1 virus)", url: "https://archive.cdc.gov/www_cdc_gov/flu/pandemic-resources/1918-pandemic-h1n1.html" },
    "deseret-1918": { pub: "Deseret News", title: "The 1918 flu in Utah (2018)", url: "https://www.deseret.com/2018/12/23/20661936/1918-flu-utah-spanish-influenza-pandemic/" },
    "shrestha2011": { pub: "Clinical Infectious Diseases", title: "Shrestha et al. (2011), burden of 2009 H1N1 in the U.S.", url: "https://pubmed.ncbi.nlm.nih.gov/21342903/" },
    "utah-covid-dash": { pub: "Utah DHHS", title: "Utah COVID-19 dashboard (final, Nov 2023)", url: "https://coronavirus-dashboard.utah.gov/overview.html" },
    "cdc-nchs-covid":  { pub: "CDC / NCHS", title: "Provisional COVID-19 death counts (dataset)", url: "https://data.cdc.gov/National-Center-for-Health-Statistics/Provisional-COVID-19-Death-Counts-by-Week-Ending-D/r8kw-7aab" },
    "hatchett2007": { pub: "PNAS", title: "Hatchett, Mecher & Lipsitch (2007), 1918 interventions and outcomes", url: "https://doi.org/10.1073/pnas.0610941104" },
    "aspr-phe":     { pub: "HHS / ASPR", title: "COVID-19 public health emergency declaration", url: "https://aspr.hhs.gov/legal/PHE/Pages/2019-nCoV.aspx" },

    // ---------- Great Salt Lake & drought ----------
    "usgs-gsl-elev":  { pub: "USGS Utah Water Science Center", title: "Great Salt Lake elevations and areal extent", url: "https://www.usgs.gov/centers/utah-water-science-center/science/great-salt-lake-elevations-and-areal-extent" },
    "usgs-gsl-gauge": { pub: "USGS", title: "Great Salt Lake at Saltair Boat Harbor (gauge 10010000), live data", url: "https://waterdata.usgs.gov/monitoring-location/USGS-10010000/" },
    "usgs-gsl-mapper":{ pub: "USGS", title: "Great Salt Lake Hydro Mapper", url: "https://webapps.usgs.gov/gsl/" },
    "dwre-gsl":       { pub: "Utah Division of Water Resources", title: "Great Salt Lake", url: "https://water.utah.gov/great-salt-lake/" },
    "gsl-plan":       { pub: "Great Salt Lake Commissioner (State of Utah)", title: "The Great Salt Lake Strategic Plan (PDF)", url: "https://greatsaltlake.utah.gov/wp-content/uploads/Great-Salt-Lake-Strategic-Plan.pdf" },
    "deq-gsl-dust":   { pub: "Utah DEQ, Division of Air Quality", title: "Great Salt Lake dust information and FAQ", url: "https://deq.utah.gov/air-quality/great-salt-lake-dust-information-and-frequently-asked-questions" },
    "deq-gsl-pm":     { pub: "Utah DEQ, Division of Air Quality", title: "Assessing community exposure to particulate matter from the Great Salt Lake", url: "https://deq.utah.gov/daq/great-salt-lake-particulate-matter" },
    "usgs-gsl-dust":  { pub: "USGS", title: "Playa- and industrially-sourced metals in Great Salt Lake dust (publication summary)", url: "https://www.usgs.gov/publications/contributions-great-salt-lake-playa-and-industrially-sourced-priority-pollutant-metals" },
    "gov-drought-2026": { pub: "Office of Gov. Spencer J. Cox", title: "Gov. Cox issues drought executive order (May 21, 2026)", url: "https://governor.utah.gov/press/gov-cox-issues-drought-executive-order-record-low-snowpack-and-record-warm-winter-drive-statewide-drought-response/" },
    "dwre-drought":   { pub: "Utah Division of Water Resources", title: "2026 Drought Declaration", url: "https://water.utah.gov/water-data/drought/drought-declaration/" },
    "drought-gov":    { pub: "NOAA / NIDIS", title: "Drought.gov: current conditions for Utah", url: "https://www.drought.gov/states/utah" },
    "slowtheflow":    { pub: "Utah Division of Water Resources", title: "Slow the Flow: water-saving tips, rebates, lawn watering guide", url: "https://slowtheflow.org/" },

    // ---------- Wildfire & smoke ----------
    "eo-2026-04":  { pub: "Office of Gov. Spencer J. Cox", title: "Executive Order 2026-04 (June 25, 2026), wildfire and fireworks emergency (PDF)", url: "https://governor.utah.gov/wp-content/uploads/2026.06.25-EO-State-Forester-Authority.pdf" },
    "ffsl-2024":   { pub: "Utah Division of Forestry, Fire & State Lands", title: "Utah Wildfire Annual Report 2024 (PDF)", url: "https://ffsl.utah.gov/wp-content/uploads/UtahWildfireSummary_Final-1132025-1.pdf" },
    "ffsl":        { pub: "Utah Division of Forestry, Fire & State Lands", title: "Utah FFSL", url: "https://ffsl.utah.gov/" },
    "utahfireinfo":{ pub: "Utah Fire Info (interagency)", title: "Utah Fire Info: current fires and restrictions", url: "https://utahfireinfo.gov/" },
    "inciweb":     { pub: "InciWeb (interagency)", title: "InciWeb incident information", url: "https://inciweb.wildfire.gov/" },
    "nfpa-hiz":    { pub: "NFPA / Firewise USA", title: "Preparing homes for wildfire (Home Ignition Zone)", url: "https://www.nfpa.org/education-and-research/wildfire/preparing-homes-for-wildfire" },
    "epa-filtration": { pub: "U.S. EPA", title: "Indoor air filtration during wildfire smoke", url: "https://www.epa.gov/wildfires/indoor-air-filtration" },
    "epa-cleanroom":  { pub: "U.S. EPA", title: "How to create a cleaner air room at home", url: "https://www.epa.gov/wildfires/how-create-cleaner-air-room-home" },
    "epa-diy":        { pub: "U.S. EPA", title: "DIY air cleaners", url: "https://www.epa.gov/emergencies-iaq/diy-air-cleaners" },
    "airnow-fire":    { pub: "AirNow (EPA & partners)", title: "AirNow fire and smoke", url: "https://www.airnow.gov/wildfires/" },
    "wildfirerisk":   { pub: "USDA Forest Service", title: "Wildfire Risk to Communities", url: "https://wildfirerisk.org/" },

    // ---------- Air quality & inversions ----------
    "deq-inv":     { pub: "Utah DEQ, Division of Air Quality", title: "Inversions", url: "https://deq.utah.gov/daq/inversions" },
    "air-utah":    { pub: "Utah DEQ, Division of Air Quality", title: "air.utah.gov: current conditions, forecasts, burn status", url: "https://air.utah.gov/" },
    "air-utah-forecast": { pub: "Utah DEQ, Division of Air Quality", title: "Air quality forecast and action days", url: "https://air.utah.gov/forecast.php" },
    "deq-ozone":   { pub: "Utah DEQ, Division of Air Quality", title: "Northern Wasatch Front ozone", url: "https://deq.utah.gov/air-quality/northern-wasatch-front-ozone" },
    "deq-uinta":   { pub: "Utah DEQ, Division of Air Quality", title: "Uinta Basin ozone (winter inversions)", url: "https://deq.utah.gov/daq/uinta-basin-ozone" },
    "airnow-map":  { pub: "AirNow (EPA & partners)", title: "Fire and Smoke Map", url: "https://fire.airnow.gov/" },
    "airnow":      { pub: "AirNow (EPA & partners)", title: "AirNow: Air Quality Index", url: "https://www.airnow.gov/" },

    // ---------- Flooding ----------
    "dwre-2023-snow":  { pub: "Utah Division of Water Resources", title: "Utah water conditions update (2023 water year highlights)", url: "https://water.utah.gov/utah-water-conditions-update-4/" },
    "dwre-2023-flood": { pub: "Utah Division of Water Resources", title: "Record snowpack expected to trigger flooding (Apr 14, 2023)", url: "https://water.utah.gov/record-snowpack-expected-to-trigger-flooding/" },
    "floodhaz-2023":   { pub: "Utah Division of Emergency Management", title: "2023 spring runoff flooding resources", url: "https://floodhazards.utah.gov/2023-spring-flood-information/" },
    "fema-msc":        { pub: "FEMA", title: "FEMA Flood Map Service Center", url: "https://msc.fema.gov/portal/home" },
    "floodsmart-buy":  { pub: "FloodSmart (NFIP)", title: "Buy a flood insurance policy (waiting period)", url: "https://www.floodsmart.gov/get-insured/buy-a-policy" },
    "nws-flood":       { pub: "National Weather Service", title: "Flood safety", url: "https://www.weather.gov/safety/flood" },
    "cbrfc":           { pub: "NOAA Colorado Basin River Forecast Center", title: "River and snowmelt forecasts (Utah)", url: "https://www.cbrfc.noaa.gov/" },

    // ---------- Landslides ----------
    "ugs-land":   { pub: "Utah Geological Survey", title: "Landslides", url: "https://geology.utah.gov/hazards/landslides/" },
    "ugs-debris": { pub: "Utah Geological Survey", title: "Debris flows", url: "https://geology.utah.gov/hazards/landslides/debris-flows/" },

    // ---------- Radon ----------
    "deq-radon":  { pub: "Utah DEQ, Utah Radon Program", title: "Radon Program (test kits, ZIP code data, mitigators)", url: "https://deq.utah.gov/dwmrc/radon" },
    "ugs-radon":  { pub: "Utah Geological Survey", title: "Radon gas hazards", url: "https://geology.utah.gov/hazards/problem-soils/radon/" },
    "epa-radon":  { pub: "U.S. EPA", title: "Health risk of radon", url: "https://www.epa.gov/radon/health-risk-radon" },

    // ---------- Power, winter storms ----------
    "rmp-outages": { pub: "Rocky Mountain Power", title: "Outages & safety (outage map, report an outage)", url: "https://www.rockymountainpower.net/outages-safety.html" },
    "rmp-afn":     { pub: "Rocky Mountain Power", title: "Access & functional needs, Medical Certificate program", url: "https://www.rockymountainpower.net/outages-safety/access-and-functional-needs.html" },
    "rmp-psps-2026": { pub: "Rocky Mountain Power", title: "Public Safety Power Shutoffs in southern Utah (June 26, 2026)", url: "https://www.rockymountainpower.net/about/newsroom/news-releases/rmp-initiates-public-safety-power-shutoffs-utah.html" },
    "cdc-generator": { pub: "CDC", title: "Use a generator safely", url: "https://www.cdc.gov/natural-disasters/psa-toolkit/use-a-generator-safely.html" },
    "nws-winter":  { pub: "National Weather Service", title: "Winter weather safety", url: "https://www.weather.gov/safety/winter" },
    "nws-slc":     { pub: "National Weather Service", title: "NWS Salt Lake City forecast office", url: "https://www.weather.gov/slc/" },

    // ---------- Avalanche ----------
    "uac":         { pub: "Utah Avalanche Center", title: "Utah Avalanche Center", url: "https://utahavalanchecenter.org/" },
    "uac-forecast":{ pub: "Utah Avalanche Center", title: "Avalanche forecasts by region", url: "https://utahavalanchecenter.org/forecast" },
    "uac-emerg":   { pub: "Utah Avalanche Center", title: "Backcountry emergencies", url: "https://utahavalanchecenter.org/education/backcountry-emergencies" },
    "uac-edu":     { pub: "Utah Avalanche Center", title: "Avalanche education and courses", url: "https://utahavalanchecenter.org/education" },
    "uac-kbyg":    { pub: "Utah Avalanche Center", title: "Know Before You Go", url: "https://utahavalanchecenter.org/know-before-you-go" },

    // ---------- Food storage, money ----------
    "church-storage": { pub: "The Church of Jesus Christ of Latter-day Saints", title: "Family Home Storage", url: "https://www.churchofjesuschrist.org/study/manual/family-home-storage/family-home-storage?lang=eng" },
    "church-hsc":     { pub: "The Church of Jesus Christ of Latter-day Saints", title: "Home Storage Centers", url: "https://www.churchofjesuschrist.org/life/home-storage-centers?lang=eng" },
    "usu-food":       { pub: "USU Extension", title: "Food Storage in the Home", url: "https://extension.usu.edu/preserve-the-harvest/research/food-storage-in-home" },
    "usu-guide":      { pub: "USU Extension", title: "A Guide to Food Storage for Emergencies (booklet)", url: "https://digitalcommons.usu.edu/extension_curall/2599/" },
    "cfpb-fund":      { pub: "Consumer Financial Protection Bureau", title: "An essential guide to building an emergency fund", url: "https://www.consumerfinance.gov/an-essential-guide-to-building-an-emergency-fund/" },
    "bls-2020":       { pub: "U.S. Bureau of Labor Statistics", title: "43 states at historically high unemployment rates in April 2020", url: "https://www.bls.gov/opub/ted/2020/43-states-at-historically-high-unemployment-rates-in-april-2020.htm" },
    "bls-cpi-2022":   { pub: "U.S. Bureau of Labor Statistics", title: "Consumer Price Index, June 2022", url: "https://www.bls.gov/news.release/archives/cpi_07132022.htm" },
    "dws-ui":         { pub: "Utah Department of Workforce Services", title: "Unemployment insurance", url: "https://jobs.utah.gov/ui/home" },
    "sba-disaster":   { pub: "U.S. Small Business Administration", title: "Disaster assistance", url: "https://www.sba.gov/funding-programs/disaster-assistance" }
  };
  root.UR = root.UR || {};
  root.UR.sources = S;
  root.UR.SOURCES_CHECKED = "October 22, 2026";
})(typeof window !== "undefined" ? window : globalThis);
