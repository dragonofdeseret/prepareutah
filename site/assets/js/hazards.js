/* Prepare Utah - hazard modules.
   Cite syntax: [[source-id]] renders a source link (see sources.js).
   Anything uncertain is marked (estimate) or [unverified]. Keep it calm and factual. */
(function (root) {
  var H = [];

  H.push({
    id: "earthquake", name: "Earthquake", short: "Wasatch Fault, Magna 2020, brick homes", icon: "quake", color: "#9C5B3B",
    tagline: "Utah is earthquake country. The good news: the most useful steps are cheap, and you can do most of them this weekend.",
    summary: "Most Utahns live near the Wasatch Fault. A large earthquake would come with no warning, so preparation happens beforehand: secure heavy things, know how to Drop, Cover, and Hold On, and be ready to manage without water, power, or sewer for a while.",
    why: [
      "About 85% of Utah's residents, infrastructure, and economy sit within 15 miles of the Wasatch fault, the state's most active fault. [[ugs-eew]]",
      "Scientists estimate more than a 50% chance of a magnitude 6.5 or larger earthquake along the Wasatch Front within 50 years, and say the Wasatch fault can produce an earthquake as large as about M7.6. [[ugs-eew]]",
      "Utah has had 17 earthquakes larger than M5.5 since pioneer settlement in 1847. [[ugs-eq]]",
      "On March 18, 2020, the M5.7 Magna earthquake shook the Salt Lake Valley. It is the most recent strong reminder. [[usgs-magna]]",
      "<strong>Utah has no public earthquake early warning system.</strong> ShakeAlert operates in California, Oregon, and Washington; Utah has studied feasibility but does not have alerts. Never count on a warning. [[ugs-eew]] [[shakealert]]"
    ],
    science: [
      "<strong>Liquefaction.</strong> Loose, water-saturated sandy soil can behave like a liquid during strong shaking. UGS says Wasatch Front valleys are especially vulnerable because of susceptible soils and shallow groundwater; the most susceptible soils are generally along rivers, streams, and lake shorelines. [[ugs-liq]]",
      "<strong>Basin shaking.</strong> After Magna, researchers analyzing thousands of recordings found that sites on deep Salt Lake basin sediments shook roughly 3 to 10 times more than thin-sediment sites at longer periods, which matters most for taller buildings. That range compares groups of sites; it is <em>not</em> a forecast for any one address. [[moschetti]]",
      "<strong>Fault geometry.</strong> Research on Magna suggests the Wasatch fault may flatten with depth, which could mean stronger shaking in Salt Lake City than earlier estimates. This is an active research result, not settled consensus. [[pang]]",
      "<strong>Scenario modeling.</strong> UGS cites scenario modeling for a major M7.0 earthquake on the Salt Lake City segment of 2,000 to 2,500 deaths, 55,400 buildings completely damaged, and $33.2 billion in short-term direct losses. Scenarios are planning tools, not predictions. [[ugs-eq]]",
      "The national expert hazard model (USGS 2023) now includes basin-specific data for Salt Lake City. [[usgs-nshm]]"
    ],
    who: [
      "People in <strong>unreinforced masonry (URM)</strong> brick buildings. URM buildings are more likely than modern structures to collapse during an earthquake; Utah building codes outlawed new URM construction in the 1970s. [[eq-urm]]",
      "Households on valley floors near rivers, streams, and old lakeshores (liquefaction). [[ugs-liq]]",
      "Anyone who depends on power, pharmacies, or home care, because services may be out for days or longer."
    ],
    before: [
      "Practice <strong>Drop, Cover, and Hold On</strong>. Utahns drill together in the Great Utah ShakeOut, and you can register a household drill for any day of the year. [[shakeout-ut]] [[ready-quake]]",
      "Strap your water heater, which also protects stored water. Be Ready Utah lists water-heater straps as part of water prep. [[br-water]]",
      "Secure tall furniture, TVs, and heavy wall hangings, and move heavy things off high shelves, especially above beds. [[eq-roots]] [[ready-quake]]",
      "Keep sturdy shoes, a flashlight, and work gloves by each bed. Broken glass is common after shaking. [[ready-quake]]",
      "Learn where your gas, water, and electric shutoffs are, and when to use them. [[br-fire]]",
      "Store water and food for at least two weeks. Water and sewer lines can break. [[br-water]]",
      "Look up your address on Know Your Ground, from our sister site FaultLine Utah, for nearby faults, liquefaction, and building-code shaking in plain language. The UGS Geologic Hazards Portal has the full maps. [[fl-ground]] [[ugs-portal]]",
      "If your home is older brick, learn the URM warning signs (below), walk through the Is It Brick? self-check, and talk to a licensed structural engineer about retrofit options. [[eq-urm]] [[fl-brick]]"
    ],
    during: [
      "<strong>Drop</strong> to your hands and knees, <strong>Cover</strong> your head and neck under a sturdy table or desk (or against an interior wall), and <strong>Hold On</strong> until shaking stops. [[ready-quake]]",
      "If you're in bed, turn face down and cover your head and neck with a pillow. [[ready-quake]]",
      "If you're inside, stay inside; don't run outside, and avoid doorways. URM buildings can crumble onto sidewalks around them. [[ready-quake]] [[eq-urm]]",
      "If you're in a car, pull over, stop, and set the parking brake. If you're outside, move to an open area away from buildings, trees, streetlights, and power lines. [[ready-quake]]"
    ],
    after: [
      "Expect aftershocks. Drop, Cover, and Hold On each time. [[ready-quake]]",
      "Check people for injuries, then look for damage, leaking gas and water lines, and downed power lines. [[ready-quake]]",
      "If you're in a damaged building, go outside and move away from it, and don't go back into damaged buildings. [[ready-quake]]",
      "If you're trapped, send a text or bang on a pipe or wall, and use a whistle instead of shouting. [[ready-quake]]",
      "Use your stored water. Don't drink from pipes until officials say the water is safe. [[cdc-water]]",
      "Report what you felt to USGS \"Did You Feel It?\" through the event page; it helps scientists. [[usgs-map]]"
    ],
    extraTitle: "Is my building unreinforced masonry (URM)?",
    extra: "<p>Utah DEM lists exterior signs that a building <em>might</em> be URM. None of them alone proves it, so treat them as reasons to ask a professional: [[eq-urm]]</p><ul><li><strong>Rows of bricks turned endways</strong> (you see the short end) every five to six rows.</li><li><strong>Deeply recessed windows</strong> set into thick walls.</li><li><strong>Rows of bolt heads or rosettes</strong> on the exterior walls.</li></ul><p>Salt Lake City's Fix the Bricks program helps low-income SLC owners of brick homes built before 1975, but it is <strong>closed to new applicants</strong> with a stated wait of more than 10 years; its page lists an average retrofit cost of $20,000. [[slc-ftb]] Renters: you can still ask your landlord whether the building is URM and whether it has been retrofitted (see your personalized plan).</p>",
    live: [
      { label: "USGS Latest Earthquakes map", src: "usgs-map" },
      { label: "University of Utah Seismograph Stations", src: "uuss" },
      { label: "UGS Geologic Hazards Portal", src: "ugs-portal" }
    ],
    learn: ["fl-ground", "eq-roots", "ugs-eq", "eq-urm", "fl-brick", "fl-magna", "shakeout-ut", "ready-quake"]
  });

  H.push({
    id: "pandemic", name: "Pandemic & outbreaks", short: "Flu, measles, H5N1, West Nile, plague & hantavirus", icon: "virus", color: "#4F6B5A",
    tagline: "The same two-week readiness covers a bad flu season, a measles cluster, a boil order, and the rare true pandemic.",
    summary: "No one can predict the next pandemic. Most years, the real threats to a Utah household are ordinary: a hard flu season, a measles exposure at school, West Nile in August, or a stomach bug that takes out the whole house. Being able to stay home for two weeks by choice handles all of them.",
    why: [
      "Utah has had its largest measles outbreak in decades: <strong>724 Utah residents</strong> diagnosed since June 2025 (197 in 2025, 527 in 2026), with no new cases in the three weeks before October 20, 2026. [[dhhs-measles]]",
      "H5N1 bird flu: 72 U.S. human cases since 2024 and 2 deaths, with no person-to-person spread; CDC rates the general public's risk as low (as of October 15, 2026). Utah has had no human cases. [[cdc-birdflu]] [[dhhs-birdflu]]",
      "West Nile virus: 50 Utah human cases reported as of October 3, 2026, versus 49 at the same point in 2025 and 13 in 2024. [[dhhs-arbo39]]",
      "Plague is real in Utah and rare: Utah DHHS calls it endemic in Utah wildlife. Bubonic plague responds to antibiotics; the danger is delay. [[dhhs-plague]]",
      "Hantavirus is rare (about 1 to 2 Utah cases a year) but serious. It spreads from deer-mouse droppings in cabins, sheds, and garages. [[dhhs-hanta]] [[cdc-hanta]]",
      "Influenza pandemics struck in 1918, 1957, 1968, and 2009, followed by COVID-19 in 2020. That's five in about a century. This is history, not a forecast."
    ],
    who: [
      "Infants, unvaccinated children, pregnant people, older adults, and people with heart or lung conditions or weakened immune systems.",
      "Large households. Utah's average household is the largest of any state, so illness can pass person to person for longer.",
      "People who rely on daily prescriptions, especially controlled substances, which are excluded from Utah's pharmacist emergency-refill rule. [[utah-rx-refill]]"
    ],
    before: [
      "Build a two-week \"stay home by choice\" supply: food you eat, water, medicines, and hygiene items. [[ready-pandemic]]",
      "Keep a one-page medication list and refill on time. Ask your insurer about 90-day fills or mail order. [[utah-rx-refill]]",
      "Know your family's vaccination records. CDC says two MMR doses are 97% effective against measles. [[cdc-measles]]",
      "Stock a few NIOSH-approved N95s per person. Check the approval number on the NIOSH list; KN95s are not NIOSH-approved. [[niosh-cel]]",
      "Plan a sick room and how you'd care for two sick adults at once.",
      "Avoid raw (unpasteurized) milk, don't handle sick or dead birds, and practice biosecurity with backyard flocks. [[cdc-birdflu]]",
      "Mosquito season (about July through September): use EPA-registered repellent and drain standing water. [[dhhs-wnv]]",
      "Cabin or shed opening: don't sweep or vacuum mouse droppings. Air it out, wet droppings with disinfectant, and wipe up with gloves. [[dhhs-hanta]]"
    ],
    during: [
      "Follow the readiness level that fits what you see (table below). Use official sources: Utah DHHS, your local health department, and CDC. [[dhhs-dash]]",
      "Isolate whoever is sick, keep shared surfaces clean, and use your sick-room supplies.",
      "Use pickup and delivery to cut trips when illness is widespread.",
      "Check on older neighbors and people who live alone. Keep it low-contact if needed."
    ],
    after: [
      "Waves can come back. The 1918 fall wave was deadlier than the spring wave, so restock between waves. [[cdc-1918]]",
      "Refill prescriptions and rotate supplies you used.",
      "Note what ran out first and add it to your list."
    ],
    extraTitle: "Readiness levels, history, and the law",
    extra: "<p>These levels are a household planning framework from the founder's HiveWatch Utah plan. <strong>They are not official alert levels.</strong></p><div class=\"table-wrap\"><table><thead><tr><th>Level</th><th>Signs (any of these)</th><th>Household actions</th></tr></thead><tbody><tr><td><span class=\"lvl lvl-normal\">Normal</span></td><td>Routine seasonal activity</td><td>Build 7 days, then 14; rotate food; update your medication list</td></tr><tr><td><span class=\"lvl lvl-watch\">Watch</span></td><td>Utah wastewater rising for several weeks [[uwss]]; a new outbreak in Utah or a neighboring state; a new animal-to-human pattern</td><td>Top up your 14-day kit; refill on time; check masks; review your sick-room plan</td></tr><tr><td><span class=\"lvl lvl-prepare\">Prepare</span></td><td>Sustained person-to-person spread of a new virus anywhere; a WHO or U.S. public health emergency; local hospital strain</td><td>Finish 30 days; extra prescription days where allowed; remote work and school plans; some cash; check on neighbors</td></tr><tr><td><span class=\"lvl lvl-act\">Act</span></td><td>Community spread in Utah with rising hospitalizations; widespread absences; shortages</td><td>Cut nonessential trips; pickup and delivery; well-fitted N95s in crowded indoor spaces if you choose; isolate the sick; run your neighbor check-in</td></tr></tbody></table></div>"
      + "<h3>What history tells us</h3><ul><li><strong>1918:</strong> about 675,000 U.S. deaths. [[cdc-1918]] Utah lost at least 2,915 people [[deseret-1918]] [verify against the Utah Historical Quarterly]. On October 9, 1918, authorities closed Salt Lake City churches, schools, theaters, and public meetings; churches and theaters reopened December 6. [[flu-slc-1918]]</li><li><strong>2009 H1N1:</strong> CDC estimated 12,469 U.S. deaths, April 2009 to April 2010 (range 8,868 to 18,306). [[shrestha2011]]</li><li><strong>COVID-19:</strong> Utah DHHS reported 5,455 Utah deaths and 44,324 hospitalizations through November 2, 2023. [[utah-covid-dash]] A CDC/NCHS count of death certificates mentioning COVID shows 6,362 Utah deaths through October 2026. The two count different things over different periods. [[cdc-nchs-covid]] The federal public health emergency ran from January 31, 2020 to May 11, 2023. [[aspr-phe]]</li><li>In 1918, cities that acted early with several measures and kept them in place had lower peak death rates (Hatchett et al.). How well that applies to modern mandates is debated. [[hatchett2007]] The household lesson isn't debated: <strong>supplies before a wave let you choose when to go out.</strong></li></ul>"
      + "<h3>Emergency powers in Utah today (plain language)</h3><ul><li>A governor's state of emergency ends after <strong>30 days</strong> unless the Legislature extends it, and the Legislature can end it at any time. [[utah-53-2a-206]]</li><li>A state public health emergency likewise expires after <strong>30 days</strong> unless the Legislature extends it. [[utah-26b-7-317]]</li><li>SB 195 (2021) added limits on long emergencies and on local health-department orders: a local health department must notify the county executive before an \"order of constraint,\" and the county governing body can end it. [[sb195]] [confirm current section numbers after the 2023 recodification]</li><li>What this means for you: in a long outbreak, Utah is likely to rely more on short, legislature-approved orders and on voluntary household choices. Your own readiness is what lets you make those choices freely.</li></ul>"
      + "<h3>Headlines about mystery viruses</h3><p>In October 2026, a worker at an anti-plague research institute in Irkutsk, Siberia, died of severe pneumonia. WHO reported no evidence of ongoing spread and said the cause remains undiagnosed; claims of a new virus are unconfirmed. Risk to Utah: very low. [[who-don620]] Wait for WHO, CDC, or Utah DHHS confirmation, and keep your everyday 14-day readiness.</p>",
    live: [
      { label: "Utah DHHS health dashboards", src: "dhhs-dash" },
      { label: "Utah wastewater surveillance", src: "uwss" },
      { label: "Utah measles response", src: "dhhs-measles" },
      { label: "Utah West Nile reports", src: "dhhs-wnv" },
      { label: "CDC respiratory illness data", src: "cdc-resp" },
      { label: "CDC bird flu situation", src: "cdc-birdflu" }
    ],
    learn: ["ready-pandemic", "dhhs-plague", "dhhs-hanta", "niosh-cel", "fda-pulseox"]
  });

  H.push({
    id: "gsl", name: "Great Salt Lake & drought", short: "Lakebed dust, water supply, conservation", icon: "lake", color: "#3E6E8E",
    tagline: "In Utah we're either in a drought or getting ready for the next one. Stored water and everyday conservation both help.",
    summary: "Drought affects water supply, fire danger, farms, and the Great Salt Lake. When the lake drops, more lakebed is exposed to wind, and dust can blow into Wasatch Front communities. Household readiness means stored water, smarter outdoor watering, and knowing how to protect your lungs on dusty days.",
    why: [
      "<strong>2026 is a drought emergency year.</strong> On May 21, 2026, Gov. Cox declared a statewide drought emergency after the warmest winter on record; snowpack was the lowest recorded since 1930, and all 29 counties were in severe drought (22 in extreme drought). [[gov-drought-2026]] [[dwre-drought]]",
      "Snowpack provides about 95% of Utah's water supply, according to the governor's office. [[gov-drought-2026]]",
      "Great Salt Lake reached a record low of 4,188.5 feet in November 2022. [[usgs-gsl-elev]] [[dwre-gsl]]",
      "The state's Great Salt Lake Strategic Plan sets a healthy range of 4,198 to 4,205 feet. [[gsl-plan]] Check the live USGS gauge for today's level. [[usgs-gsl-gauge]]",
      "Utah DEQ says the shrinking lake is exposing over 750 square miles of lakebed, some of which contains heavy metals. [[deq-gsl-pm]]"
    ],
    science: [
      "<strong>What's in the dust?</strong> Exposed lakebed sediments contain naturally occurring and industrial metals, including arsenic, cadmium, copper, lead, mercury, and thallium. How much ends up in the air people breathe is still unclear. [[deq-gsl-dust]]",
      "Utah DEQ reports it has <em>not</em> measured increasing arsenic or other toxic metals in airborne particles over recent decades tied to dust events or lake levels, and that PM10 samples from five urban Salt Lake-area sites in 2022 to 2023 were below established levels of concern. DEQ also says little science exists yet on dust falling in communities, and research is ongoing. [[deq-gsl-dust]]",
      "A USGS study of 2022 dust samples estimated that children from birth to 6 years are the most vulnerable at higher dust-ingestion rates; it found arsenic and sometimes lead likely came from the lakebed. [[usgs-gsl-dust]]",
      "Dust of any kind (PM10 and PM2.5) can worsen asthma and COPD. [[deq-gsl-dust]]"
    ],
    who: [
      "Children under 6, and people with asthma, COPD, or heart disease, on dusty days near the lake. [[usgs-gsl-dust]] [[deq-gsl-dust]]",
      "Households on private wells or small rural water systems during drought.",
      "Farms, ranches, and anyone with livestock or large gardens."
    ],
    before: [
      "Store at least two weeks of water (1 gallon per person per day), more if you can. [[br-water]]",
      "Cut outdoor watering first; that's where most residential water goes in summer. Follow the Weekly Lawn Watering Guide and look for rebates at Slow the Flow. [[slowtheflow]] [[gov-drought-2026]]",
      "Fix leaks, run full loads, and shorten showers by at least a minute. [[gov-drought-2026]]",
      "Keep a few well-fitted N95s for dusty, windy days, and a plan for an indoor clean-air room. [[epa-cleanroom]]",
      "If you're on a well, know your well's depth and history and who to call if it drops."
    ],
    during: [
      "On dust-storm days, check air.utah.gov, stay indoors with windows closed, and run a HEPA air cleaner or MERV 13 HVAC filter if you have one. [[air-utah]] [[epa-filtration]]",
      "Follow any local water restrictions from your city or water district.",
      "Keep kids from eating dirt or playing in exposed lakebed sediments; wash hands and toys after outdoor play near the lake."
    ],
    after: [
      "Rotate stored water on a schedule and refill containers.",
      "Consider waterwise landscaping for the long term; rebates may help. [[slowtheflow]]",
      "Wipe down dusty surfaces with a damp cloth rather than dry sweeping."
    ],
    live: [
      { label: "Great Salt Lake level (USGS gauge)", src: "usgs-gsl-gauge" },
      { label: "USGS Great Salt Lake Hydro Mapper", src: "usgs-gsl-mapper" },
      { label: "Utah drought conditions (Drought.gov)", src: "drought-gov" },
      { label: "Utah air quality now", src: "air-utah" }
    ],
    learn: ["gsl-plan", "dwre-gsl", "deq-gsl-dust", "br-drought", "ready-drought", "slowtheflow"]
  });

  H.push({
    id: "wildfire", name: "Wildfire & smoke", short: "WUI, evacuation, defensible space, indoor air", icon: "fire", color: "#B5542E",
    tagline: "Get ready to leave fast, and get ready to breathe clean air at home when smoke rolls in.",
    summary: "Wildfire threatens homes where neighborhoods meet open land, and smoke can blanket the whole state even from distant fires. The core moves: a go-bag and evacuation plan, a home that resists embers, and a clean-air room for smoky days.",
    why: [
      "By June 25, 2026, Utah had 354 wildfires burning 141,743 acres, and human activities caused at least 75% of that season's fires to that point. [[eo-2026-04]]",
      "In 2024, 55% of Utah wildfires were human-caused. [[ffsl-2024]]",
      "Research on homes lost in wildfires points to embers and small flames as the main way most homes ignite. Embers can travel more than a mile. [[nfpa-hiz]]",
      "As more people live near undeveloped land, wildfire risk continues to grow. [[br-fire]]",
      "In June 2026, Rocky Mountain Power turned off power to about 7,735 customers in southern Utah in a Public Safety Power Shutoff to reduce fire risk. [[rmp-psps-2026]]"
    ],
    who: [
      "Homes on foothills, benches, canyons, and rural rangeland (the wildland-urban interface). [[br-fire]]",
      "People with asthma, COPD, heart disease, pregnancy, older adults, and children, during smoke events. [[epa-filtration]]",
      "People without a car, with mobility limits, or with large animals, who need more time to evacuate. [[ready-pets]]"
    ],
    before: [
      "Have several ways to receive alerts: sign up for community alerts and know about Wireless Emergency Alerts. [[ready-fire]]",
      "Keep supplies in a go-bag or car trunk, make an evacuation plan with more than one route, and keep your vehicle's fuel tank at least half full. [[ready-fire]] [[br-fire]]",
      "Start with the <strong>Immediate Zone (0 to 5 feet)</strong>: clean roofs and gutters, screen vents with 1/8-inch metal mesh, and move mulch, firewood, and anything that burns away from walls. [[nfpa-hiz]]",
      "In the <strong>Intermediate Zone (5 to 30 feet)</strong>: keep grass mowed to about 4 inches, remove ladder fuels, and space trees. [[nfpa-hiz]]",
      "Set up a <strong>clean-air room</strong>: a portable HEPA air cleaner sized for the room, or a DIY box-fan filter with a MERV 13 filter. [[epa-cleanroom]] [[epa-diy]]",
      "If your HVAC can take it, use a MERV 13 or higher filter. [[epa-filtration]]",
      "Use Fire Sense: put campfires dead out (douse, stir, repeat until cool to the touch). [[br-fire]]"
    ],
    during: [
      "<strong>Evacuate immediately if authorities tell you to.</strong> [[ready-fire]]",
      "If trapped, call 911 and give your location; emergency response may be delayed. [[ready-fire]]",
      "In smoke: stay inside, close windows, run your air cleaner on high in your clean-air room, and use an N95 if you must be outside. [[epa-cleanroom]] [[ready-fire]]",
      "Check the AirNow Fire and Smoke Map and air.utah.gov. [[airnow-fire]] [[air-utah]]"
    ],
    after: [
      "Follow local authorities on when it's safe to return. [[ready-fire]] Watch for hot spots and damaged power lines.",
      "Wear an N95 and gloves when cleaning ash.",
      "<strong>Burn scars raise flood and debris-flow risk</strong> for years. Watch flash-flood warnings for areas below recent burns. [[ugs-debris]]"
    ],
    live: [
      { label: "Utah Fire Info (current fires & restrictions)", src: "utahfireinfo" },
      { label: "InciWeb incident updates", src: "inciweb" },
      { label: "AirNow Fire & Smoke", src: "airnow-fire" },
      { label: "Rocky Mountain Power outages & shutoffs", src: "rmp-outages" }
    ],
    learn: ["br-fire", "ready-fire", "nfpa-hiz", "epa-cleanroom", "epa-diy", "wildfirerisk"]
  });

  H.push({
    id: "heat", name: "Extreme heat", short: "Heat waves, cooling centers, hot cars, heat illness", icon: "heat", color: "#A8456B",
    tagline: "Utah's heat records keep falling. The best protection is mostly free: a cool place to go, water, and checking on each other.",
    summary: "Heat is a quiet hazard: no smoke and no shaking, but it sends people to the emergency room every summer. Salt Lake City hit 109&deg;F in July 2026, its hottest reading on record. Know where you'll cool off, learn the warning signs of heat illness, and look after the people most at risk. [[dn-slc-109]]",
    why: [
      "Salt Lake City reached 109&deg;F on July 12, 2026, its hottest temperature since records began in 1874. Logan hit at least 106&deg;F and Ogden tied its record of 106&deg;F the same day. [[dn-slc-109]]",
      "Utah's record high is 117&deg;F at St. George, set in 1985 and tied in 2021. [[ncei-ut-117]]",
      "Utah has warmed more than 2.5&deg;F since the early 1900s, and very warm nights have become much more common since 1990. [[ncics-ut]]",
      "Arches, Canyonlands, Bryce Canyon, Capitol Reef, and Dinosaur National Monument had record-hot summers in 2026. An NPR and Boston University analysis estimates Utah's true heat death toll is more than twice what federal data show. [[kuer-heat-2026]]",
      "Heat isn't spread evenly. A 2023 heat-mapping drive found the central and western Salt Lake Valley hotter than the east bench, parks, and the Jordan River corridor. [[nhmu-heat]]"
    ],
    who: [
      "Adults 65 and older, infants and children, pregnant people, people with chronic conditions, and people without air conditioning. [[cdc-heat-risk]]",
      "Outdoor workers and athletes. [[cdc-heat-risk]]",
      "People who take certain medicines, including some for blood pressure, depression, and ADHD. Many medicines, even over-the-counter ones, make it harder for the body to handle heat. [[cdc-heat-meds]]",
      "People who live alone, are socially isolated, or don't have housing. [[cdc-heat-clin]]"
    ],
    before: [
      "Check the National Weather Service HeatRisk forecast in summer. It rates each of the next 7 days from 0 (little risk) to 4 (extreme). [[nws-heatrisk]]",
      "Know where you'll cool off: a cooling center, a library, or a friend with air conditioning. In Salt Lake County, find a Cool Zone. Anywhere in Utah, dial 2-1-1 or text your ZIP code to 801-845-2211. [[slco-coolzones]] [[utah-211]] [[cdc-heat-about]]",
      "Plan for heat and a power outage together. Heat can cause outages, so refrigerated medicines and electric medical devices need a backup plan. [[cdc-heat-about]]",
      "Ask your pharmacist whether any of your medicines raise your heat risk. Never leave medicines in a hot car: inhalers can burst and epinephrine auto-injectors can fail. [[cdc-heat-meds]]",
      "Set up hot-day check-ins with relatives and neighbors who live alone or have a chronic illness. [[cdc-heat-about]]",
      "Never leave a child or a pet in a parked car, even for a minute. A child's body heats up 3 to 5 times faster than an adult's. [[nhtsa-heatstroke]] [[noheatstroke]]"
    ],
    during: [
      "Stay in air conditioning when you can. Use fans only when it's below 90&deg;F indoors; above that, a fan can raise your body temperature instead of cooling you. [[cdc-heat-about]] [[epa-heat-iaq]]",
      "Carry water and drink it, and go easy on sugary, caffeinated, and alcoholic drinks. Light-yellow or clear urine is a good sign. [[cdc-heat-about]]",
      "<strong>Heat exhaustion</strong> looks like headache, nausea, dizziness, weakness, heavy sweating, and less urine than usual. Move to a cooler place, sip water if fully alert, and use cool compresses. Get medical help if the person vomits or symptoms last more than an hour. [[niosh-heat-ill]] [[nws-heat-illness]]",
      "<strong>Heat stroke is an emergency.</strong> Watch for confusion, slurred speech, passing out, seizures, or a temperature above 103&deg;F. Call 911, cool the person fast with cold water or ice, and don't give them fluids. [[niosh-heat-ill]] [[nws-heat-illness]]",
      "Keep pets off hot asphalt and dark pavement, which can burn their paws. [[ready-heat]]",
      "Check on older adults in your care at least twice a day. [[cdc-heat-older]]"
    ],
    after: [
      "After heat stroke or serious heat exhaustion, check with a doctor before heavy activity, and build back up over several weeks. [[medline-heat]]",
      "If the power was out for more than a day, throw out medicine that needs refrigeration unless its label says otherwise, and ask your pharmacist about replacements. [[ready-power]]",
      "Note what was hardest (sleep, a hot bedroom, medicines) and fix it before next summer."
    ],
    live: [
      { label: "NWS HeatRisk forecast map", src: "nws-heatrisk" },
      { label: "NWS Salt Lake City (heat warnings)", src: "nws-slc" },
      { label: "Salt Lake County Cool Zones", src: "slco-coolzones" },
      { label: "211 Utah (cooling help statewide)", src: "utah-211" }
    ],
    learn: ["cdc-heat-about", "ready-heat", "cdc-heat-risk", "nws-heat-illness", "epa-heat-iaq"]
  });

  H.push({
    id: "air", name: "Winter inversions & air quality", short: "PM2.5, inversion season, summer ozone", icon: "air", color: "#5B6F8A",
    tagline: "Inversion season comes every winter. Plan for it like the weather.",
    summary: "In winter, cold air gets trapped in Utah's mountain valleys under a lid of warmer air, and pollution builds up near the ground. It's predictable, so you can plan: check the forecast, adjust outdoor activity, clean your indoor air, and drive and burn less on bad days.",
    why: [
      "A typical Utah winter sees about five to six multi-day inversion episodes, and on average 18 days with fine-particle (PM2.5) levels above the national health standard. [[deq-inv]]",
      "The Wasatch and Oquirrh Mountains and Traverse Mountain form a basin that traps cold air in the Salt Lake Valley. Inversions often follow a snowstorm and may need a strong storm to clear. [[deq-inv]]",
      "Most of Utah's winter PM2.5 forms through chemical reactions in the air from emissions (vehicles, wood burning, area sources, industry). Ammonium nitrate can make up to 70% of particle mass during inversions. [[deq-inv]]",
      "Summer brings a different problem: ground-level ozone along the northern Wasatch Front. [[deq-ozone]]"
    ],
    who: [
      "People with asthma, COPD, heart disease, or other lung conditions; older adults; children; and pregnant people.",
      "People who work or exercise outdoors in the valleys during inversions.",
      "Households in valley-floor neighborhoods, where inversions are strongest. [[deq-inv]]"
    ],
    before: [
      "Bookmark air.utah.gov and check the multi-day forecast and burn status each winter morning. [[air-utah]] [[air-utah-forecast]]",
      "Change your furnace filter; use MERV 13 or higher if your system allows. [[epa-filtration]]",
      "Consider a portable HEPA air cleaner for a bedroom, especially for anyone with lung or heart conditions. [[epa-filtration]]",
      "If anyone has asthma or COPD, ask your clinician for an action plan for bad-air days."
    ],
    during: [
      "On unhealthy-air days, check the action level and move hard exercise indoors, especially for sensitive groups. [[air-utah]] [[airnow]]",
      "Follow mandatory no-burn days for wood and coal stoves (status is posted daily). [[air-utah]]",
      "Combine trips, carpool, or take transit; vehicle emissions are one of the sources that build up during inversions. [[deq-inv]]",
      "Keep windows closed and run your air cleaner."
    ],
    after: [
      "Air out your home when a storm clears the valley.",
      "Replace filters that look dark or dirty."
    ],
    live: [
      { label: "Utah air quality now & forecast", src: "air-utah" },
      { label: "AirNow AQI", src: "airnow" },
      { label: "NWS Salt Lake City", src: "nws-slc" }
    ],
    learn: ["deq-inv", "air-utah-forecast", "deq-ozone", "epa-filtration"]
  });

  H.push({
    id: "flood", name: "Flooding & spring runoff", short: "Snowmelt, flash floods, burn-scar runoff", icon: "flood", color: "#2F6C8F",
    tagline: "Anywhere it can rain, it can flood, including in the desert and on a sunny spring day.",
    summary: "Utah floods two ways: slow-building snowmelt in spring, and sudden flash floods from summer thunderstorms, often in the desert and below burn scars. Know your risk, check your insurance before you need it, and never drive into moving water.",
    why: [
      "In 2023, Utah's statewide snowpack peaked on April 8 at 30.0 inches of snow water equivalent, 216% of normal and an all-time record. [[dwre-2023-snow]]",
      "State water officials warned that the record snowpack increased the potential for flooding, landslides, and debris flows. [[dwre-2023-flood]] [[floodhaz-2023]]",
      "Most homeowners insurance does not cover flooding. Federal flood insurance is available in participating communities whether or not you're in a mapped flood zone. [[br-flood]]",
      "A new NFIP flood policy generally takes effect 30 days after purchase, with some exceptions. Buy before the season. [[floodsmart-buy]]"
    ],
    who: [
      "Homes along streams, in canyon bottoms, on alluvial fans, and in low spots and basements.",
      "Areas below recent burn scars. [[ugs-debris]]",
      "Hikers and drivers in slot canyons and desert washes during summer storms. [[nws-flood]]"
    ],
    before: [
      "Look up your address on the Utah Flood Hazard Map and FEMA flood maps. [[br-flood]] [[fema-msc]]",
      "Ask your insurer about flood coverage now; remember the usual 30-day wait. [[floodsmart-buy]]",
      "Keep gutters, window wells, and storm drains near your home clear; move valuables and documents up from the basement.",
      "In big snow years, follow city sandbag announcements and river forecasts. [[cbrfc]]"
    ],
    during: [
      "<strong>Turn Around, Don't Drown.</strong> Just six inches of moving water can knock you down, and one foot of moving water can sweep your vehicle away. [[ready-flood]]",
      "Move to higher ground and evacuate if told to. Stay off bridges over fast-moving water. [[ready-flood]]",
      "Check the forecast before entering slot canyons or washes; storms miles away can send water downstream. [[nws-flood]]"
    ],
    after: [
      "Return home only when authorities say it is safe. Wear heavy gloves and boots during cleanup; people with asthma or lung conditions shouldn't enter buildings with visible mold. [[ready-flood]]",
      "Photograph damage for insurance before you clean up.",
      "If your well flooded, disinfect and test it before drinking. [[cdc-water]]"
    ],
    live: [
      { label: "NWS Salt Lake City (warnings)", src: "nws-slc" },
      { label: "Colorado Basin River Forecast Center", src: "cbrfc" },
      { label: "FEMA flood maps", src: "fema-msc" }
    ],
    learn: ["br-flood", "ready-flood", "nws-flood", "floodsmart-buy"]
  });

  H.push({
    id: "landslide", name: "Landslides & debris flows", short: "Bench slopes, canyons, burn scars", icon: "slide", color: "#7A6A4F",
    tagline: "Landslides tend to happen where they've happened before. Learn the signs and the history of your slope.",
    summary: "Landslides can creep slowly and crack foundations, or move fast as debris flows that carry mud and boulders down canyons onto the alluvial fans where many Utahns live. Wet springs and burn scars raise the risk.",
    why: [
      "Debris flows can occur with little warning. Fifteen people have been killed by debris flows in Utah; 13 died in two nighttime events. [[ugs-debris]]",
      "The 1983 Rudd Canyon debris flow in Farmington deposited about 90,000 cubic yards of sediment, damaged 35 houses, and caused an estimated $3 million in damage. [[ugs-debris]]",
      "Debris flows often follow wildfires, and alluvial fans, where flows deposit, are also favored building sites. [[ugs-debris]]",
      "Many Utah landslides are considered dormant, but recent slope failures are commonly reactivations of older landslides. [[ugs-land]]",
      "Landslide insurance is generally not available, though debris-flow damage may be covered by NFIP flood insurance. [[br-land]]"
    ],
    who: [
      "Homes on or below steep slopes, on benches, at canyon mouths, and on alluvial fans. [[ugs-debris]]",
      "Areas below recent burn scars, especially during intense rain. [[ugs-debris]]",
      "Anyone in canyons during heavy rain or rapid snowmelt."
    ],
    before: [
      "Check your area on the UGS Geologic Hazards Portal. [[ugs-portal]] [[br-land]]",
      "Drain water from downspouts and driveways away from slopes; don't add water, fill, or yard waste to steep slopes. [[br-land]]",
      "Consult a licensed engineering geologist or geotechnical engineer before altering slopes or buying on a hillside. [[br-land]]",
      "Make an evacuation plan; for fast debris flows, leaving is often the only protection. [[br-land]]"
    ],
    during: [
      "If you suspect active movement, evacuate and contact local fire, police, or public works. [[br-land]]",
      "Listen for rushing water, cracking trees, or a faint rumbling that grows louder, and watch for a sudden change in stream flow or water turning from clear to muddy. If caught, move uphill fast. [[ready-land]]",
      "Never ignore an evacuation order. [[br-land]]"
    ],
    after: [
      "Stay away from the slide area; more movement can follow. [[ready-land]]",
      "Listen to local radio or TV for the latest emergency information. [[ready-land]]"
    ],
    extraTitle: "Warning signs on your property",
    extra: "<p>Be Ready Utah lists signs that land may be moving. One sign isn't proof, but several together deserve a professional look: [[br-land]]</p><ul><li>Cracks in walls, floors, soil, sidewalks, or foundations; doors and windows that suddenly stick</li><li>Tilted or bent trees, leaning utility poles, sagging or taut lines</li><li>New springs, wet ground, or water seeping into the basement</li><li>Bulging retaining walls; broken water or sewer lines</li></ul>",
    live: [
      { label: "NWS Salt Lake City (flash-flood warnings)", src: "nws-slc" },
      { label: "UGS Geologic Hazards Portal", src: "ugs-portal" }
    ],
    learn: ["ugs-land", "ugs-debris", "br-land", "ready-land"]
  });

  H.push({
    id: "radon", name: "Radon", short: "The invisible gas: test, then fix", icon: "radon", color: "#6B5B7A",
    tagline: "The fix starts with a low-cost test kit. It's one of the simplest health steps on this whole site.",
    summary: "Radon is a natural radioactive gas you can't see, smell, or taste. It seeps up from soil into homes, and long-term exposure causes lung cancer. The only way to know your level is to test.",
    why: [
      "The Utah Radon Program says <strong>1 in 3 Utah homes</strong> have elevated radon levels. [[deq-radon]]",
      "UGS calls radon Utah's most deadly geologic hazard, estimating about 5,630 Utah lung-cancer deaths attributable to radon from 1973 to 2015 (based on a WHO general estimate). [[ugs-radon]]",
      "Radon is the second leading cause of lung cancer in the U.S.; smoking plus radon is a particularly serious combination. [[ugs-radon]] [[epa-radon]]",
      "EPA and the State of Utah suggest considering mitigation at 4 picocuries per liter (pCi/L) or higher; WHO uses 2.7 pCi/L. [[deq-radon]] [[ugs-radon]]"
    ],
    who: [
      "Everyone. Radon levels depend on geology and how a building is built, so neighbors can have very different results. [[ugs-radon]]",
      "People who smoke or used to smoke.",
      "Households that spend a lot of time in basements or ground-floor rooms."
    ],
    before: [
      "Buy a low-cost test kit through the Utah Radon Program and follow its instructions. [[deq-radon]]",
      "Start with a short-term test. If it's high, follow up with a long-term test or a second short-term test. [[ugs-radon]]",
      "Look up median radon levels by ZIP code on the Utah Radon Program site. [[deq-radon]]",
      "Renters: ask your landlord whether the unit has been tested and whether there's a mitigation system."
    ],
    during: [
      "If you test at 4 pCi/L or higher, contact a certified mitigator (NRPP or NRSB). [[deq-radon]]",
      "Between 4 and 6 pCi/L, consider a long-term test to see your year-round level. [[deq-radon]]"
    ],
    after: [
      "If your level is below 4 pCi/L, retest every two to five years. [[deq-radon]]",
      "Retest after a mitigation system is installed and after major renovations."
    ],
    live: [
      { label: "Utah Radon Program (test kits, ZIP data)", src: "deq-radon" },
      { label: "UGS Geologic Hazards Portal (radon layer)", src: "ugs-portal" }
    ],
    learn: ["deq-radon", "ugs-radon", "epa-radon"]
  });

  H.push({
    id: "power", name: "Power outages & winter storms", short: "Grid outages, shutoffs, cold, carbon monoxide", icon: "power", color: "#C29A2E",
    tagline: "Power touches almost everything: heat, water, medicine, money. A little backup goes a long way.",
    summary: "Outages come from winter storms, wind, wildfire shutoffs, earthquakes, and equipment failures. Short ones are an inconvenience; long ones in a Utah winter are a safety issue, especially for people who rely on powered medical equipment.",
    why: [
      "Power outages can affect your safety, food, medication and medical equipment, access to money and gas, heat and light, and even your water supply. [[br-power]]",
      "Winter storms raise the risk of car accidents, hypothermia, frostbite, carbon monoxide poisoning, and heart attacks from overexertion. [[ready-winter]]",
      "Rocky Mountain Power used Public Safety Power Shutoffs in southern Utah during extreme fire conditions in June 2026. [[rmp-psps-2026]]",
      "A refrigerator keeps food cold for about 4 hours if unopened; a full freezer holds its temperature for about 48 hours. [[ready-power]]"
    ],
    who: [
      "Anyone who uses oxygen concentrators, CPAP or BiPAP, power wheelchairs, home dialysis, or refrigerated medicines. [[ready-power]] [[rmp-afn]]",
      "Older adults, infants, and anyone vulnerable to cold. [[ready-older]]",
      "Mobile and manufactured homes and rural or canyon homes, which may wait longer for restoration."
    ],
    before: [
      "Talk to your medical provider about a power-outage plan for powered devices and refrigerated medicines. [[ready-power]]",
      "If someone relies on powered medical equipment, ask Rocky Mountain Power about its Medical Certificate program (a medical professional must complete the application). [[rmp-afn]]",
      "Install carbon monoxide alarms with battery backup, and test smoke alarms. [[ready-winter]]",
      "Keep flashlights for every household member, plus power banks and a battery or hand-crank radio. [[ready-power]] [[ready-kit]]",
      "Winterize your car and keep an emergency kit in it, and check road conditions before you go. [[ready-winter]]",
      "If you buy a generator, plan to run it only outdoors; connect it to home wiring only through a transfer switch installed by a licensed electrician. [[br-power]]"
    ],
    during: [
      "Keep the fridge and freezer closed. [[ready-power]]",
      "<strong>Never use a generator, grill, camp stove, or charcoal indoors or in a garage.</strong> Run generators outdoors at least 20 feet from windows, doors, and vents. [[cdc-generator]] [[br-power]]",
      "Don't heat your home with a gas oven or stove. [[ready-power]]",
      "Layer clothing, gather in one room, and hang blankets over windows and doors. If it gets dangerously cold, go to a warming location. [[br-power]] [[ready-power]]",
      "Stay far from downed lines. Report them to Rocky Mountain Power at 1-888-221-7070, or call 911. [[br-power]]",
      "Protect pipes: insulate them and let faucets drip in freezing weather. [[br-power]]"
    ],
    after: [
      "When in doubt, throw it out: discard food exposed to 40&deg;F or higher for two hours or more. [[ready-power]]",
      "Turn your porch light on when power returns; crews patrol to see which lights are on. [[br-power]]",
      "Restock batteries and fuel; note what you missed most."
    ],
    live: [
      { label: "Rocky Mountain Power outage map", src: "rmp-outages" },
      { label: "NWS Salt Lake City (winter warnings)", src: "nws-slc" }
    ],
    learn: ["br-power", "ready-power", "ready-winter", "nws-winter", "rmp-afn", "cdc-generator"]
  });

  H.push({
    id: "fire", name: "Home fire", short: "Smoke alarms, escape plans, cooking, heaters, batteries", icon: "homefire", color: "#B23A3A",
    tagline: "Home fires are the disaster the Red Cross answers most often. Working smoke alarms and a practiced way out are what save lives.",
    summary: "Most of the roughly 65,000 disasters the Red Cross responds to each year are home fires. Once a smoke alarm sounds, you may have only a minute or two to get out, so the plan has to be ready first: working alarms, two ways out of every room, and closed bedroom doors. [[redcross-disasters]] [[nfpa-escape]]",
    why: [
      "In 2024, U.S. home fires killed 2,920 people, three out of four of all U.S. fire deaths: one death every three hours. [[nfpa-loss-2024]]",
      "Utah's fire death rate is lower than the nation's (7.6 vs. 13.1 deaths per million people in 2023), but 26 Utahns still died in fires that year. [[usfa-states]]",
      "After a smoke alarm sounds, you may have as little as one or two minutes to escape. [[nfpa-escape]]",
      "The death rate is about 60% lower in homes with working smoke alarms. In 59% of home fire deaths, there were no alarms or the alarms didn't work. [[nfpa-alarms-report]]",
      "Cooking causes 44% of home fires, most often when it's left unattended. [[nfpa-cooking]]"
    ],
    who: [
      "Older adults: people 65 and older are 2.5 times as likely to die in a fire as the general population, and people 85 and older 3.4 times. [[usfa-older]]",
      "People who are deaf or hard of hearing, who may not wake to a standard alarm. Strobe alarms and bed or pillow shakers help. [[nfpa-alarms]]",
      "Homes where someone smokes: smoking materials cause more home fire deaths than any other source. [[nfpa-home-fires]]",
      "Homes heated with space heaters: portable heaters cause 3% of home heating fires but 41% of the deadly ones. [[usfa-heating]]",
      "Anyone who needs extra time or help to get out, like people with limited mobility."
    ],
    before: [
      "Put smoke alarms in every bedroom, outside each sleeping area, and on every level, including the basement. Interconnected alarms all sound when one does. [[nfpa-alarms]]",
      "Test alarms every month and replace them every 10 years. [[usfa-alarms]]",
      "Can't afford alarms? The American Red Cross installs up to three free smoke alarms in Utah homes; request a visit online. [[redcross-ut-hfc]]",
      "Make an escape plan with two ways out of every room and a meeting place outside. Practice it twice a year, and aim to get everyone out in two minutes. [[nfpa-escape]] [[redcross-ut-hfc]]",
      "Sleep with bedroom doors closed. In fire tests, rooms behind closed doors stayed under 100&deg;F while rooms with open doors topped 1,000&deg;F. [[fsri-close]]",
      "Stay with your cooking. Keep anything that can burn at least 3 feet from heaters, and turn space heaters off when you leave the room or go to bed. [[nfpa-cooking]] [[usfa-heating]]",
      "Keep the dryer's lint filter and vent clean; failure to clean is the leading factor in dryer fires. Don't plug major appliances into extension cords. [[usfa-dryer]]",
      "Charge e-bikes and scooters on a hard surface away from exits, never while you sleep or are away. Stop using any lithium-ion battery that smells, changes color, or gets too hot. [[ut-sfm-home]] [[cpsc-ebike]] [[usfa-batteries]]",
      "Keep candles 12 inches from anything that can burn, and never smoke in bed. [[ut-sfm-home]]",
      "Keep a fire extinguisher and learn PASS: Pull the pin, Aim low, Squeeze, Sweep. Use it only on a small, contained fire with a clear way out. [[usfa-extinguisher]]"
    ],
    during: [
      "Get out, stay out, and call 911 from outside. [[redcross-fire-starts]]",
      "Get low and go under the smoke, closing doors behind you. [[redcross-fire-starts]]",
      "Never open a door that's warm to the touch; use your second way out. [[redcross-fire-starts]]",
      "If you're trapped, close the door, put a wet towel under it, call 911, and wave a cloth or flashlight at the window. [[redcross-fire-starts]]",
      "If your clothes catch fire, stop, drop, and roll, then cool the burn with water for 3 to 5 minutes. [[redcross-fire-starts]]",
      "Never go back inside. Tell the dispatcher or firefighters if someone is missing. [[nfpa-escape]]"
    ],
    after: [
      "Stay out until fire officials say it's safe, and don't turn utilities back on yourself. [[redcross-fire-recovery]] [[usfa-after-fire]]",
      "Call your insurance company right away, and save every receipt for your claim and your taxes. [[usfa-after-fire]]",
      "The Red Cross can help with food, clothing, medicine, and a place to stay. [[usfa-after-fire]] [[redcross-fire-recovery]]",
      "Replace lost documents such as driver's licenses, passports, birth certificates, and Social Security cards. [[usfa-after-fire]]"
    ],
    liveTitle: "Get help", liveNote: "Free alarms and official fire-safety advice.",
    live: [
      { label: "Request free smoke alarms (Red Cross, Utah)", src: "redcross-ut-hfc" },
      { label: "Utah State Fire Marshal: home fire safety", src: "ut-sfm-home" }
    ],
    learn: ["nfpa-escape", "nfpa-alarms", "usfa-alarms", "fsri-close", "usfa-heating", "usfa-after-fire"]
  });

  H.push({
    id: "storm", name: "Severe weather & windstorms", short: "Canyon winds, lightning, tornadoes, hail, dust storms", icon: "storm", color: "#2E5E6E",
    tagline: "Utah's worst windstorms roar down the canyons with little warning. Tying down what can fly and knowing where to shelter keeps most people safe.",
    summary: "Severe weather in Utah means canyon windstorms along the Wasatch Front, summer lightning in the mountains, sudden dust storms on the interstates, hail, and the occasional tornado. The September 2020 windstorm left about 200,000 Rocky Mountain Power customers without power at its peak. [[rmp-2020-storm]]",
    why: [
      "The September 8, 2020 windstorm hit 373,674 Rocky Mountain Power customers, with 203,930 out at the peak; 9,442 were without power for more than four days. Gusts reached 99 mph in Farmington. [[rmp-2020-storm]]",
      "That storm overturned 45 semi trucks, and Salt Lake City alone lost more than 1,500 public trees. [[npr-2020-wind]] [[slc-retree]]",
      "East winds pour out of the canyons onto Davis, Weber, and Box Elder counties. A 1999 storm brought a 113 mph gust at Brigham City and blew 20 semis over on I-15. [[nws-ta9909]]",
      "Utah averages about two tornadoes a year. The August 11, 1999 Salt Lake City tornado killed one person, injured more than 80, and caused more than $170 million in damage. [[nws-slc-tornado]]",
      "Utah has had 23 lightning deaths in 30 years, a larger share of U.S. deaths than its share of the population; both 2026 deaths were hikers on Wasatch peaks. [[kpcw-lightning]] [[nws-lightning-2026]]",
      "Dust can blind drivers in seconds: a 2021 dust storm on I-15 near Kanosh caused a 22-vehicle pileup that killed eight people. [[ksl-dust-2021]]"
    ],
    who: [
      "Hikers and climbers on peaks and ridges during summer afternoon thunderstorms. [[nws-lightning-2026]] [[zion-monsoon]]",
      "People in mobile and manufactured homes, which aren't safe in high winds or tornadoes. [[nws-wind-during]] [[spc-tornado-safety]]",
      "Drivers on open highways, especially high-profile trucks in wind and anyone caught in blowing dust. [[npr-2020-wind]] [[ksl-dust-2021]]",
      "Anyone who relies on power for medical equipment, since windstorms can cause long outages. [[rmp-storm]]"
    ],
    before: [
      "A tornado watch means tornadoes are possible. A warning means one has been seen or shown on radar: take shelter now. [[nws-tornado-ww]]",
      "When high winds are forecast, tie down or bring in outdoor furniture, decorations, and trampolines. Wind can throw even anchored trampolines. [[nws-wind-before]] [[ap-trampoline]]",
      "Trim branches away from your house, but never prune near power lines; Rocky Mountain Power will send an arborist for free. [[nws-wind-before]] [[rmp-trees]]",
      "Pick your tornado shelter: an interior room on the lowest floor of a sturdy building, away from windows. [[nws-tornado-ww]]",
      "A NOAA Weather Radio with an alert setting sounds for warnings, even overnight. [[nws-nwrsame]]",
      "If you rely on powered medical equipment, plan for a multi-day outage and register with Rocky Mountain Power's medical program. [[rmp-storm]] [[rmp-afn]]",
      "In summer, hike early: monsoon thunderstorms often build in the afternoon. [[zion-monsoon]] [[bryce-lightning]]"
    ],
    during: [
      "When thunder roars, go indoors, and stay inside 30 minutes after the last thunder. [[nws-lightning-safety]] [[nws-lightning-tips]]",
      "Safe shelter is a substantial building or a hard-topped vehicle. Get off peaks and ridges, and never shelter under a lone tree or rock overhang. [[nws-lightning-tips]]",
      "Small huts aren't safe shelter: in 2026, a hiker died while sheltering in the small metal hut on the summit of Mount Timpanogos. [[townlift-timp]]",
      "High wind: get inside a sturdy building, away from windows. If you're in a mobile home, move to a sturdy building before the wind picks up. [[nws-wind-during]]",
      "Tornado: go to your shelter room now. In a mobile home, get out and go to a sturdy building. [[nws-tornado-ww]] [[spc-tornado-safety]]",
      "Dust storm while driving: don't drive into it. Pull all the way off the road, turn off all your lights, set the parking brake, and take your foot off the brake. [[nws-dust]]",
      "Hail: stay inside and away from windows. In a car, stay inside until it stops. [[nws-hail]]"
    ],
    after: [
      "Assume every downed line is live: stay at least 35 feet away, call 911, then call Rocky Mountain Power. [[rmp-storm]]",
      "Report outages to Rocky Mountain Power at 1-877-508-5088, by texting OUT to 759677, or on the outage map. [[rmp-outages]]",
      "Run generators outside, at least 20 feet from your home. [[rmp-storm]] [[cdc-generator]]",
      "Photograph damage, keep receipts, and hold off on permanent repairs until your insurer inspects. Most homeowners policies cover wind damage and trees that fall on the house, but not removing trees that hit nothing. [[uid-home-claims]]",
      "Cutting up fallen trees? Fuel the chainsaw at least 10 feet from flames or sparks, watch for kickback, don't cut overhead, and never work alone. [[osha-chainsaw]]"
    ],
    live: [
      { label: "NWS Salt Lake City warnings map", src: "nws-slc-wwa" },
      { label: "NWS Grand Junction (eastern Utah)", src: "nws-gjt" },
      { label: "Storm Prediction Center outlooks", src: "spc-outlook" },
      { label: "Rocky Mountain Power outage map", src: "rmp-outages" },
      { label: "UDOT Traffic (closures, road weather)", src: "udot-traffic" }
    ],
    learn: ["nws-lightning-safety", "nws-wind-before", "nws-tornado-ww", "rmp-storm", "uid-home-claims"]
  });

  H.push({
    id: "water", name: "Water & sewer outages", short: "Boil orders, broken mains, life without running water", icon: "tap", color: "#3B7A8C",
    tagline: "Water mains break, supplies get contaminated, and a big earthquake could cut water and sewer for weeks. Stored water and knowing what a boil order means go a long way.",
    summary: "Utah has 978 public water systems, and when one becomes dangerously contaminated it issues a boil order. After a major Salt Lake County earthquake, FEMA modeling predicts more than 300,000 households without drinkable water for 90 days. [[deq-dw]] [[dn-overdue]]",
    why: [
      "When drinking water becomes dangerously contaminated, the local water system issues a boil order, and it has 24 hours to notify people who could drink the water. [[deq-dw]] [[epa-pn]]",
      "Boil orders happen somewhere in Utah every year. In 2026, Riverton (irrigation water in the lines), Junction (burn-scar runoff), and Beaver (a broken supply line) all had one. [[kjzz-riverton]] [[pmn-junction]] [[kutv-beaver]]",
      "FEMA modeling predicts that a magnitude 7.0 Salt Lake County earthquake could leave more than 300,000 households without drinkable water for 90 days. [[dn-overdue]]",
      "More than two million Wasatch Front residents rely on aging aqueducts; a break could leave hundreds of thousands without water for six months or longer. [[ussc-2022]]",
      "In a 2024 Envision Utah poll, Utahns said they worried more about losing drinking water, power, and sewer service after an earthquake than about deaths or long-term devastation. [[sltrib-poll-2025]]"
    ],
    who: [
      "Families with babies: during a boil order, ready-to-use formula is the safest choice if you use formula. [[cdc-advisories]]",
      "Homes on private wells, which need disinfecting and testing after a flood. [[cdc-water]]",
      "Everyone after a big earthquake, when water, sewer, power, and gas could be out for days to months. [[ugs-scenario]]"
    ],
    before: [
      "Store at least 1 gallon of water per person per day, starting with a 14-day supply. [[dem-water-guide]]",
      "Strap your water heater: the tank holds clean water you can use in an outage. [[dem-water-guide]] [[fema-food-water]]",
      "Look up which water system serves your address, and know where it posts notices. [[deq-search]] [[deq-emergencies]]",
      "Build an emergency toilet: two buckets, heavy-duty bags, and kitty litter. [[br-sanitation]]",
      "Keep plain unscented bleach, hand sanitizer with at least 60% alcohol, moist towelettes, garbage bags, and ties. [[br-sanitation]] [[ready-kit]]"
    ],
    during: [
      "<strong>Boil water advisory:</strong> bring water to a full rolling boil for 1 minute (3 minutes above 6,500 feet) and let it cool. Use boiled or bottled water for drinking, cooking, brushing teeth, ice, pets, and baby formula. If your water system's notice says to boil longer, follow it. [[cdc-advisories]] [[cdc-boil]] [[deq-boil-faq]]",
      "<strong>Do-not-drink order:</strong> boiling won't help, because the problem may be chemicals. Use bottled water for drinking and cooking. <strong>Do-not-use orders</strong> are rare: use bottled water for everything. [[cdc-advisories]]",
      "Dishes: a dishwasher with a sanitizing cycle is generally fine. To hand-wash, soak dishes for 1 minute in 1 teaspoon of unscented bleach per gallon of warm water. [[cdc-advisories]]",
      "Can't boil? Utah DEQ allows 1/8 teaspoon of plain household bleach per gallon; let it stand 30 minutes. [[deq-boil-faq]] [[ready-water]]",
      "No running water? Your water heater, pipes, and ice cubes hold clean water. To use the heater, turn off its power or gas first, open the drain at the bottom, and open a hot-water faucet. Never use water from a heating radiator. [[fema-food-water]] [[cdc-clean-water]]",
      "After an earthquake, don't flush or pour anything down drains until you know the sewer pipes are safe. Use a two-bucket toilet: one for urine, one lined with two bags and kitty litter. [[br-sanitation]]",
      "Pool and spa water is fine for washing, but not for drinking. [[cdc-clean-water]]"
    ],
    after: [
      "When a boil order lifts, flush your household pipes and throw out ice made during the order. [[deq-boil-faq]]",
      "Bury waste at least 200 feet from water and living areas, or keep it in a lidded can until it can be collected. Never dump it in streams or canals. [[br-sanitation]]",
      "Refill and date your stored water. [[ready-water]]"
    ],
    live: [
      { label: "Utah Public Notice website (local boil orders)", src: "pmn-index" },
      { label: "Utah DEQ: find your water system", src: "deq-search" },
      { label: "Utah DEQ drinking water emergencies", src: "deq-emergencies" }
    ],
    learn: ["cdc-advisories", "deq-boil-faq", "br-sanitation", "dem-water-guide"]
  });

  H.push({
    id: "hazmat", name: "Chemical spills & hazmat", short: "Rail, highway, and refinery accidents; sheltering in place", icon: "flask", color: "#8C5A2B",
    tagline: "Trains, trucks, pipelines, and refineries move hazardous chemicals right through Utah's cities. If something leaks, you'll be told to leave or to shelter in place, and you need to know how.",
    summary: "Hazardous materials travel through Utah on I-15, I-80, and three major rail lines, and five refineries line I-15 between Rose Park and Bountiful. Accidents are rare, but when one happens, officials decide whether you evacuate or shelter in place. [[slco-hazmat]] [[utah-gas-report]]",
    why: [
      "Union Pacific runs 1,265 miles of track in Utah, and hazardous waste is among the top commodities it carries in the state. [[up-utah]]",
      "Salt Lake County's hazmat plan names I-15, I-215, and I-80, three major rail lines, and several pipelines as hazmat threats. [[slco-hazmat]]",
      "Utah's five refineries sit along I-15 between Rose Park and Bountiful. [[utah-gas-report]]",
      "In 2005, a leaking rail tank car in South Salt Lake forced about 3,000 residents to evacuate and closed I-15. In 2009, a refinery explosion in Woods Cross damaged more than 100 homes. [[fhwa-roper]] [[csb-silver-eagle]]",
      "In 2022, a burning chemical truck on I-80 led residents near Tollgate in Summit County to shelter in place. [[ksl-tollgate]]"
    ],
    who: [
      "People who live or work near rail lines, interstates, refineries, and pipelines. [[slco-hazmat]]",
      "People who are outdoors or driving when a leak happens. [[ready-chemical]]"
    ],
    before: [
      "Sign up for your county's alerts: in a chemical emergency, that's how evacuation and shelter-in-place orders reach you. [[dem-be-informed]]",
      "Pick a shelter room: an interior room above ground (not the basement), with few windows. [[br-hazmat]] [[ready-shelter]]",
      "Keep plastic sheeting, duct tape, and scissors in your kit for sealing a room if you're told to. [[ready-chemical]]",
      "Never mix bleach with ammonia or any other cleaner. [[cdc-bleach]]",
      "Save Utah Poison Control in every phone: 1-800-222-1222, free and private, 24 hours a day. [[utah-poison]]"
    ],
    during: [
      "Listen to officials about whether it's safer to evacuate or shelter in place. [[cdc-chem-response]]",
      "<strong>Evacuate:</strong> go right away. In a car, close the windows and vents and turn off the air conditioning. If you're outside, stay upwind, uphill, and upstream, at least half a mile away. [[ready-chemical]] [[fema-is5]]",
      "<strong>Shelter in place:</strong> bring everyone and pets inside, lock doors and windows, close vents and fireplace dampers, and turn off fans and heating or cooling. Go to your interior room, and if you're told to, seal it with plastic sheeting and duct tape and fill gaps with wet towels. [[ready-chemical]] [[ready-shelter]]",
      "If there's a risk of explosion, stay away from windows. [[br-hazmat]]"
    ],
    after: [
      "Stay sheltered until officials say it's safe to leave. [[ready-chemical]]",
      "If you were exposed, take off your clothing and seal it in a plastic bag, wash with soap and water, flush your eyes, and get medical care or call Poison Control at 1-800-222-1222. [[ready-chemical]] [[cdc-chem-response]]",
      "Report spills to Utah DEQ's 24-hour line at (801) 536-4123, and call 911 if anyone is in danger. [[deq-report]]"
    ],
    liveTitle: "Get help", liveNote: "24-hour lines for exposures and spills.",
    live: [
      { label: "Utah Poison Control Center", src: "utah-poison" },
      { label: "Report a spill to Utah DEQ", src: "deq-report" }
    ],
    learn: ["ready-chemical", "cdc-chem-response", "br-hazmat", "ready-shelter"]
  });

  H.push({
    id: "avalanche", name: "Avalanche & backcountry", short: "Forecasts, gear, training", icon: "snow", color: "#4B7A9B",
    tagline: "Most avalanche accidents involve backcountry travelers. Gear, training, and the daily forecast change the odds.",
    summary: "If anyone in your household skis, snowboards, snowmobiles, snowshoes, or hikes in Utah's mountains in winter, avalanche safety belongs in your plan. For everyone else, it mostly means road closures in the canyons and checking conditions before you drive.",
    why: [
      "Utah averages slightly more than 3 avalanche fatalities each winter, with many more close calls. [[uac-emerg]]",
      "Avalanche victims are primarily backcountry recreationists. In about 90% of avalanche incidents, the victim or someone in their party triggers the slide. [[br-aval]]",
      "About 90% of avalanches start on slopes of 30 to 45 degrees. [[br-aval]]"
    ],
    who: [
      "Backcountry skiers, snowboarders, snowmobilers, snowshoers, climbers, and hikers. [[br-aval]]",
      "People who leave resort boundaries into closed or uncontrolled terrain.",
      "Canyon commuters during storm cycles (road closures and interlodge orders)."
    ],
    before: [
      "<strong>Get the gear:</strong> avalanche transceiver, shovel, and probe for every person, and know how to use them. [[br-aval]]",
      "<strong>Get the training:</strong> take an avalanche course and practice rescue often. [[br-aval]] [[uac-edu]]",
      "<strong>Get the forecast</strong> from the Utah Avalanche Center every day you go. [[uac-forecast]]",
      "Tell someone your plan and expected return; carry a way to call for help. [[uac-emerg]]",
      "Watch Know Before You Go, a free introduction. [[uac-kbyg]]"
    ],
    during: [
      "Watch for red flags: recent avalanches, cracking, collapsing, and heavy new snow or wind loading. [[br-aval]]",
      "Expose one person at a time and regroup in safe spots.",
      "If someone is buried, be ready to do your own rescue; help may be far away. [[uac-emerg]]"
    ],
    after: [
      "Share your observations with the Utah Avalanche Center; they help everyone. [[uac]]",
      "Debrief your day as a group."
    ],
    live: [
      { label: "Utah Avalanche Center forecasts", src: "uac-forecast" },
      { label: "NWS Salt Lake City", src: "nws-slc" }
    ],
    learn: ["uac", "uac-kbyg", "br-aval", "ready-aval"]
  });

  H.push({
    id: "economic", name: "Economic preparedness", short: "Emergency fund, income disruption, rotating storage", icon: "coin", color: "#8A7A2E",
    tagline: "Money is a preparedness supply too. Build it the same way: a little at a time.",
    summary: "Job loss, illness, a disaster, or a price spike can hit a household's budget faster than any storm. An emergency fund, a little cash at home, the right insurance, and a rotating pantry soften the blow. Utah's home-storage culture already includes a financial reserve.",
    why: [
      "In April 2020, the U.S. unemployment rate hit 14.7% (preliminary), the highest since 1948. Utah's was 9.7%, a record for its series but among the lowest of any state. [[bls-2020]]",
      "Consumer prices rose 9.1% in the 12 months ending June 2022, and food at home rose 12.2%. [[bls-cpi-2022]]",
      "Church of Jesus Christ home-storage guidance pairs a three-month supply of food with a financial reserve built little by little. [[church-storage]]",
      "A common rule of thumb is an emergency fund of 3 to 6 months of essential expenses; start smaller and build. [[cfpb-fund]]"
    ],
    who: [
      "Self-employed, gig, and event-based workers, whose income can drop to zero quickly.",
      "Single-income households and households with high fixed costs.",
      "Anyone without health, disability, or renters/homeowners insurance."
    ],
    before: [
      "Start a <strong>starter buffer</strong> ($500 to $2,000, or one month of essentials; estimate), then work toward 3 to 6 months. [[cfpb-fund]]",
      "Keep about two weeks of essential spending in small bills at home (estimate). Keep it secure, and don't hold large amounts. [[ready-fin]]",
      "Store copies of insurance, IDs, deeds or leases, and account info in a waterproof folder and an encrypted cloud folder. [[ready-fin]]",
      "Review insurance: health, disability, renters or homeowners, flood, earthquake, and life. Ask your agent what is and isn't covered.",
      "Rotate food storage: buy staples at normal prices and eat them in rotation. [[church-storage]] [[usu-food]]",
      "Know how to file for unemployment before you need to. [[dws-ui]]"
    ],
    during: [
      "Contact lenders and utilities early about hardship options.",
      "Live on your pantry to stretch cash, and pause nonessential spending.",
      "After a declared disaster, SBA disaster loans can help homeowners, renters, and businesses. [[sba-disaster]]"
    ],
    after: [
      "Rebuild your buffer first, then restock storage.",
      "Write down what you learned and adjust your plan."
    ],
    live: [
      { label: "Utah DWS unemployment insurance", src: "dws-ui" },
      { label: "SBA disaster assistance", src: "sba-disaster" }
    ],
    learn: ["cfpb-fund", "ready-fin", "church-storage", "usu-food", "usu-guide"]
  });

  root.UR = root.UR || {};
  root.UR.hazards = H;
  root.UR.hazardById = {};
  H.forEach(function (h) { root.UR.hazardById[h.id] = h; });
})(typeof window !== "undefined" ? window : globalThis);
