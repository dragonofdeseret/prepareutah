/* Prepare Utah - topic guides that cut across hazards: planning, money, food, leaving, recovering.
   Same rules as hazards.js: every factual sentence ends with [[source-id]] (see sources.js).
   sections: [{ title, intro?, items? }]. tool: an interactive form defined in scripts/build.js (TOOLS)
   and run by assets/js/tools.js. help: links shown in the "Where to get help" box. */
(function (root) {
  var G = [];

  G.push({
    id: "family-plan", name: "Family communication plan", short: "Contacts, meeting places, and wallet cards for everyone",
    icon: "kids", color: "#4F6B5A", tool: "family-plan",
    tagline: "When phones are jammed and you're not together, a plan on paper is how everyone finds each other.",
    summary: "Fill this in once, print wallet cards for everyone, and practice it. A text often gets through when a call won't, and an out-of-area contact may be easier to reach than someone across town. [[ready-plan-guide]]",
    sections: [
      { title: "How to use it", items: [
        "Agree on a familiar meeting place, and practice your plan with everyone at home. [[ready-plan]]",
        "Choose an out-of-area contact everyone checks in with; long-distance calls may connect when local lines are jammed. [[ready-plan-guide]]",
        "Text instead of calling: texts use far less bandwidth. Practice short messages like \"I'm OK. At the library.\" [[ready-plan-guide]] [[ready-tech]] [[fema-text]]",
        "Save at least one contact in every phone under \"ICE\" (in case of emergency). [[ready-plan-guide]]",
        "Keep copies in go-bags, cars, and every family member's bag, and review the plan at least once a year. [[dem-plan-worksheet]] [[ready-plan-guide]]"
      ] },
      { title: "Prefer a paper form?", items: [
        "Ready.gov's fillable family communication plan and Utah's Family Emergency Plan Worksheet cover the same ground, including school, work, and child-care plans. [[fema-comm-card]] [[dem-plan-worksheet]]"
      ] }
    ],
    help: [
      { label: "Ready.gov family communication plan (fillable)", src: "fema-comm-card" },
      { label: "Utah's Family Emergency Plan Worksheet", src: "dem-plan-worksheet" }
    ],
    learn: ["ready-plan", "ready-plan-guide", "ready-tech", "fema-text"]
  });

  G.push({
    id: "food", name: "Food storage", short: "How much, what keeps, rotation, and cooking without power",
    icon: "bowl", color: "#8A6A2E",
    tagline: "Utah has a long tradition of home storage. The secret is simple: store what you eat, eat what you store, and build it a little at a time.",
    summary: "Start with a week of the foods you already eat, grow it to a month and then three, and only then add long-term staples like wheat, rice, and beans. Don't go into debt to do it. [[church-food-topic]] [[church-food-prep]]",
    sections: [
      { title: "Build it a little at a time", items: [
        "Store foods that are part of your normal diet, from a variety of food groups, and rotate them regularly. [[church-food-prep]]",
        "Start with one day's food, multiply by seven for a week, then grow to a month and eventually three months. [[church-food-topic]]",
        "Be Ready Utah asks for at least a one-month supply, working toward three months. [[br-food]]",
        "Add a few extra items each week instead of buying it all at once. Don't go into debt; store as much as your circumstances allow. [[usu-storage]] [[church-food-prep]]",
        "Your personal plan sizes the 7, 14, 30, and 90-day amounts to your household."
      ] },
      { title: "Longer-term staples", items: [
        "Once you have three months of everyday food, add staples that keep for decades, like wheat, white rice, and beans, and rotate some into everyday cooking. [[church-food-topic]]",
        "A 2019 BYU guide suggests these amounts per adult per year for adequate calories and protein: about 132 lb of wheat, 65 lb of white rice, 29 lb of rolled oats, 21 lb of pasta, 62 lb of beans or other legumes, 49 lb of nonfat dry milk, 70 lb of sugar, 22 lb of potato flakes, 8 lb of salt, and 2 gallons of oil. The grains can be swapped for one another. [[byu-longterm]]",
        "Not everything keeps: brown rice, whole wheat flour, nuts, dried eggs, jerky, and granola aren't suited to long-term storage. [[church-longterm]]"
      ] },
      { title: "What keeps, and for how long", items: [
        "Dry foods packed well and kept at 75&deg;F or cooler last a very long time: wheat and white rice 30 years or more; pinto beans, rolled oats, pasta, and potato flakes about 30 years; nonfat powdered milk about 20. Sugar keeps indefinitely. [[church-longterm]]",
        "Estimates vary, especially for powdered milk: USU Extension says 3 to 5 years in cool storage and as little as 3 months in heat. When in doubt, rotate sooner. [[usu-milk]]",
        "Heat is the enemy. In USU research, wheat lasted 25 years in a cold basement but only 5 in a hot garage or attic. Store food at about 40&deg;F to 70&deg;F, out of sunlight and off bare concrete. [[usu-conditions]]",
        "White rice lasts up to 10 years at 70&deg;F with oxygen absorbers, and up to 30 years in cooler storage. [[usu-rice]]",
        "Commercial canned food keeps its best quality until its code date, usually 2 to 5 years. Use home-canned food within a year. [[usu-canned]]",
        "Oxygen absorbers work only with dry foods (about 10% moisture or less); moist foods sealed without oxygen risk botulism. Foil pouches aren't rodent-proof. [[church-longterm]]"
      ] },
      { title: "Rotation", items: [
        "Put new items behind old ones, and write the month and year on each lid so the oldest gets used first. [[usu-restock]] [[usu-canned]]",
        "Replace water you stored yourself every six months; rotate store-bought water by its date. [[ready-water]] [[church-water]]",
        "Check stored water every 6 to 12 months for loose lids, cracks, and cloudiness, and keep plastic containers away from gasoline and pesticides. [[usu-water-store]]"
      ] },
      { title: "Using stored wheat", items: [
        "If you plan to eat stored wheat, a grain mill is essential. Hand mills need no power but take time and effort, so practice before you need it. [[usu-wheat-eat]] [[usu-booklet]]",
        "Flour keeps less than a year, so grind it as you need it. [[usu-booklet]]",
        "No mill? Simmer whole wheat berries for about an hour, or crack them in a blender for 35 to 45 seconds. [[usu-wheat-cook]]"
      ] },
      { title: "Cooking and food safety without power", items: [
        "Keep some foods that need no cooking; canned food can be eaten without heating. [[ready-food]]",
        "Camp stoves and charcoal grills are for outdoor use only: never inside a home, garage, tent, or camper. [[ready-food]] [[cdc-outage]]",
        "Store gasoline, propane, and kerosene outside living areas in labeled safety containers, away from gas appliances like water heaters. [[cpsc-generator]]",
        "A closed refrigerator keeps food safe for about 4 hours; a full freezer for about 48 hours, a half-full one about 24. Throw out perishable refrigerated food after 4 hours without power, and never taste food to check it. [[foodsafety-outage]]",
        "Keep thermometers in the refrigerator (40&deg;F or below) and freezer (0&deg;F or below). [[fsis-emergency]]"
      ] },
      { title: "On a budget", items: [
        "Set aside a little money each month, ask for preparedness items as gifts, and buy on sale only what you'll use before it expires. [[br-food]]",
        "At case-lot sales, bring a list and a spending limit and stick to them, even if that means buying a half case. [[usu-restock]]",
        "Gardening, and drying, bottling, or freezing your own food, can cut costs. [[church-food-prep]]"
      ] }
    ],
    help: [
      { label: "USU Extension: food storage", src: "usu-storage" },
      { label: "Be Ready Utah: food", src: "br-food" }
    ],
    learn: ["church-food-prep", "church-longterm", "byu-longterm", "usu-booklet", "foodsafety-outage"]
  });

  G.push({
    id: "insurance", name: "Insurance", short: "What standard policies usually skip, and what to ask",
    icon: "shield", color: "#5B6F8A",
    tagline: "Disasters usually cost far more in money than anything else. Knowing what your policy skips, before you need it, is the cheapest preparation there is.",
    summary: "This isn't insurance advice. It's what standard policies usually do and don't cover in Utah, so you know what to ask your agent. The biggest gaps are earthquake and flood, which standard homeowners and renters policies don't cover. [[uid-disaster]]",
    sections: [
      { title: "Earthquake", items: [
        "Typical homeowners and renters policies don't cover earthquake damage. Coverage is almost always an add-on endorsement, though standalone policies exist. [[uid-disaster]]",
        "Earthquake deductibles are a percentage of your dwelling coverage, not of the loss, usually 10% to 20%. On a home insured for $200,000, a 10% deductible is $20,000. [[naic-eq-deductible]]",
        "Fire that follows an earthquake is generally covered by standard policies. [[iii-eq]]",
        "New coverage takes 10 to 30 days to start, and insurers often stop selling it right after a nearby quake. [[uid-disaster]]"
      ] },
      { title: "Flood and groundwater", items: [
        "Most homeowners and renters policies don't cover flooding; you need a separate flood policy. [[floodsmart-what]]",
        "More than 70% of recent Utah flooding happened outside mapped high-risk flood zones. [[uid-disaster]]",
        "National Flood Insurance Program (NFIP) policies usually start 30 days after you buy them and cap coverage at $250,000 for the building and $100,000 for contents. They don't cover belongings in basements, living expenses, cars, landscaping, decks, or fences. [[floodsmart-buy]]",
        "The NFIP doesn't cover groundwater flooding, though some private policies may. In January 2023, more than 30 Draper homes flooded from groundwater. [[ugs-groundwater]] [[upr-draper]]",
        "Utah has the second-lowest share of homes with NFIP flood insurance in the country, despite the lowest average premium. [[sltrib-flood-ins]]"
      ] },
      { title: "Wildfire", items: [
        "Homeowners policies cover fire, but how much varies. Many cap how many hotel nights they'll pay for after a fire. [[uid-wildfire-tips]]",
        "Loss-of-use coverage may apply during a mandatory evacuation; voluntary evacuations are usually paid out of pocket. Rebuilding to current code needs Ordinance and Law coverage. [[uid-wildfire-prep]]",
        "If your limits haven't changed since you bought your home, you're probably underinsured; extended replacement cost coverage helps. [[iii-house]]",
        "Insurers are pulling back: about 4.5% of Utah homeowners policies weren't renewed in 2025, the highest rate in the nation. [[kunc-nonrenewal]]",
        "A 2026 Utah law (HB 48) creates a wildland-urban interface risk map that insurers must use, and requires notice when premiums rise more than 20% or coverage ends. [[ffsl-hb48]]"
      ] },
      { title: "Renters", items: [
        "Renters insurance covers your belongings, liability, and extra living costs, but not the building, and not floods or earthquakes. Your landlord's policy usually covers only the building. [[iii-renters]] [[uid-disaster]]"
      ] },
      { title: "Sewer backup", items: [
        "Typical homeowners policies exclude sewer backup; an endorsement adds it. Water backing up from overloaded drains generally isn't covered either. [[iii-disasters]] [[uid-disaster]]"
      ] },
      { title: "Before a disaster", items: [
        "Make a home inventory: use the NAIC's free app or film a narrated walk through every room, and back it up online with your policy papers. [[uid-wildfire-prep]]",
        "Review your coverage with your agent every year. Actual cash value pays what your things were worth after depreciation; replacement cost pays to repair or replace them with like kind. [[uid-homeowners]]"
      ] },
      { title: "After a disaster", items: [
        "Contact your insurer promptly, photograph the damage, make temporary repairs to prevent more damage, and save every receipt. [[uid-home-claims]]",
        "Don't make permanent repairs or throw out damaged items until the adjuster has inspected. [[uid-after-fire]]",
        "Most policies require you to file within a year; keep records of temporary housing costs. [[iii-claims]]",
        "Your insurance company's adjusters cost you nothing; public adjusters charge a fee. [[uid-proving-loss]]",
        "A contractor who offers to waive or pay your deductible is acting unlawfully; report insurance fraud to the Utah Insurance Department at 801-468-0233. [[uid-fraud]]",
        "File with insurance first. FEMA aid isn't a substitute for insurance and can't pay for the same losses, but it may help if your claim is delayed 30 days or more. [[fema-ihp]] [[fema-insured]]",
        "Stuck in a dispute? File a complaint with the Utah Insurance Department; it usually takes three to four weeks, and the department can't force an insurer to pay. Its property and casualty line is 801-957-9305. [[uid-complaints]] [[uid-home-claims]]"
      ] }
    ],
    help: [
      { label: "Utah Insurance Department: disaster preparedness", src: "uid-disaster" },
      { label: "File an insurance complaint", src: "uid-complaints" },
      { label: "FloodSmart: buying flood insurance", src: "floodsmart-buy" }
    ],
    learn: ["uid-disaster", "naic-eq-deductible", "floodsmart-buy", "iii-disasters", "uid-wildfire-prep"]
  });

  G.push({
    id: "stay-or-go", name: "Stay or go", short: "Sheltering in place, evacuating, and finding a shelter",
    icon: "walk", color: "#A0522D",
    tagline: "Sometimes the safest place is inside with the windows shut; sometimes it's an hour down the road. Decide now how you'll know which, and where you'll go.",
    summary: "Always follow instructions from local officials. If they tell you to leave, leave early. If the air outside is dangerous, they may tell you to stay in. [[ready-evac]] [[ready-shelter]]",
    sections: [
      { title: "When to stay in (shelter in place)", items: [
        "Stay in when the air outside may be dangerous, such as heavy debris or badly contaminated air. [[ready-shelter]]",
        "Bring everyone inside, pets included. Close windows, vents, and fireplace dampers; turn off fans, air conditioning, and forced-air heat; and go to an interior room with few windows. [[ready-shelter]]",
        "Stay put and listen for updates until officials say it's safe. [[ready-shelter]]"
      ] },
      { title: "When to go (evacuate)", items: [
        "If officials tell you to evacuate, go, and leave early enough to avoid being trapped. [[ready-evac]]",
        "Plan several destinations in different directions: a friend's or relative's home, a shelter, or a motel. [[ready-evac]]",
        "Keep at least half a tank of gas. No car? Plan now how you'll leave with family, friends, or local emergency management, and check whether neighbors need a ride. [[ready-evac]]",
        "If you're told to evacuate, your pets should evacuate too. [[ready-pets]]",
        "Many Utah fire agencies use three stages: Ready, Set, Go. The Alerts page explains each one. [[northfork-rsg]]"
      ] },
      { title: "What to grab: the six P's", items: [
        "People and pets; papers, phone numbers, and important documents; prescriptions, vitamins, and eyeglasses; pictures and irreplaceable keepsakes; personal computer drives; and \"plastic\" (credit and debit cards) and cash. [[cos-6ps]]"
      ] },
      { title: "Finding a shelter", items: [
        "During a disaster, the FEMA app shows open shelters near you, or you can text SHELTER and your ZIP code to 43362. [[ready-evac]] [[ready-shelter]]",
        "Red Cross shelters are free and open to anyone. You need only your name and your pre-disaster address, no ID, and all are accessible to people with disabilities. [[redcross-shelter]]",
        "Bring bedding, clothing, medications, your emergency kit, and a child's comfort item. Don't bring alcohol, drugs, or weapons. [[redcross-shelter]]",
        "Many public shelters and hotels don't allow pets, so plan a safe place for them ahead of time. The Red Cross tries to accommodate pets, sometimes at a separate site, and service animals are always welcome. [[ready-shelter]] [[redcross-shelter]]"
      ] },
      { title: "If you'll need help getting out", items: [
        "Arrange a ride and a buddy now, and plan to leave at the first warning. [[ready-evac]]",
        "211 Utah lists Utah's functional needs registry as operational, but the registry's old website now belongs to someone else. Call 2-1-1 to ask how to register, and tell your city or county emergency manager you'll need help. [[utah211-fnr]]"
      ] }
    ],
    help: [
      { label: "Red Cross: find an open shelter", src: "redcross-shelter" },
      { label: "211 Utah", src: "utah-211" }
    ],
    learn: ["ready-evac", "ready-shelter", "redcross-shelter", "ready-pets"]
  });

  G.push({
    id: "recovery", name: "After a disaster", short: "Aid, claims, documents, scams, and taking care of yourself",
    icon: "home", color: "#46603F",
    tagline: "The days after are long. Doing things in the right order (safety, documentation, insurance, then aid) saves money and stress.",
    summary: "Start with safety, then document everything, then call your insurer. Federal aid comes only after a presidential disaster declaration, and it fills gaps insurance doesn't cover. [[ready-recover]] [[fema-ia-when]]",
    sections: [
      { title: "First, stay safe", items: [
        "Don't go back until officials say it's safe, and don't enter a building if you smell gas or floodwater remains. [[ready-recover]]",
        "Never run a generator indoors, including in a basement or garage. Keep it at least 20 feet from windows, doors, and attached garages. [[cdc-cleanup]] [[ready-power]]",
        "Dry out wet buildings within 24 to 48 hours. Wear an N95, goggles, heavy gloves, and waterproof boots; clean mold with 1 cup of bleach per gallon of water; and never mix bleach with ammonia. [[cdc-cleanup]]"
      ] },
      { title: "Document and claim", items: [
        "Photograph and list damage before you clean up, keep every receipt, and call your insurance agent to file a claim. [[ready-recover]]",
        "Hold off on permanent repairs until your insurer inspects. The Insurance guide covers claims in more detail. [[uid-home-claims]]"
      ] },
      { title: "Help that's available", items: [
        "Red Cross shelters and service sites offer meals, first aid, prescription refills, emotional support, device charging, cleanup supplies, and caseworkers. [[redcross-shelter]]",
        "FEMA individual assistance is available only after a presidential major disaster declaration that includes it; a governor's declaration alone doesn't qualify. [[fema-ia-when]]",
        "Apply at DisasterAssistance.gov or call 1-800-621-3362. FEMA covers needs insurance doesn't, and you can't get help for the same need from two sources. [[disasterassistance]] [[fema-survivors]]",
        "In declared disaster areas, SBA disaster loans lend homeowners up to $500,000 for repairs, and homeowners and renters up to $100,000 for belongings, for up to 30 years. [[sba-disaster]]",
        "211 Utah can connect you with local services: dial 2-1-1. [[utah-211]]"
      ] },
      { title: "Watch for scams", items: [
        "Get several written bids and a written contract that lists the contractor's license number, and never sign your insurance check over to a contractor. [[ftc-disaster-scams]]",
        "Don't pay by wire, gift card, cryptocurrency, or cash. FEMA doesn't charge application fees. [[ftc-disaster-scams]]",
        "Check a Utah contractor's license, and report scams to Utah's Division of Consumer Protection at (801) 530-6601. [[dopl-lookup]] [[utah-dcp]]"
      ] },
      { title: "Replace lost documents", items: [
        "Get a new birth certificate from the vital records office of the state where you were born and a new driver's license from your state's DMV. Report a lost passport before you apply for a new one. [[usagov-docs]]"
      ] },
      { title: "Take care of each other", items: [
        "The Disaster Distress Helpline is free and open 24/7: call or text 1-800-985-5990 (press 2 for Spanish). [[samhsa-ddh]]"
      ] }
    ],
    help: [
      { label: "DisasterAssistance.gov", src: "disasterassistance" },
      { label: "SBA disaster loans", src: "sba-disaster" },
      { label: "Disaster Distress Helpline", src: "samhsa-ddh" },
      { label: "Utah Division of Consumer Protection", src: "utah-dcp" }
    ],
    learn: ["ready-recover", "fema-survivors", "ftc-disaster-scams", "cdc-cleanup", "usagov-docs"]
  });

  G.push({
    id: "neighbors", name: "Neighborhood plan", short: "Who needs help, who has skills, and where to gather",
    icon: "map", color: "#6B5B7A", tool: "neighbors",
    tagline: "In a big disaster, neighbors are the first responders. An hour together now makes the first hour afterward much safer.",
    summary: "Most neighborhoods will be on their own for the first hours, days, or even weeks of a major disaster, so the people next door are the real first responders. [[myn-overview]]",
    sections: [
      { title: "Get started", items: [
        "Map Your Neighborhood, a program developed in Washington State, organizes groups of 15 to 20 homes you can visit in about an hour. [[myn-overview]]",
        "Make a list of neighbors' skills and equipment, a map of gas meters and propane tanks, and a contact list that flags older neighbors, people with disabilities, and children who may be home alone. [[myn-overview]]",
        "Pick a gathering site everyone can walk to. [[myn-overview]]"
      ] },
      { title: "The first hour after a disaster", intro: "Map Your Neighborhood's nine steps, as adapted by the Carbondale, Illinois Fire Department: [[carbondale-myn]]", items: [
        "Take care of your loved ones.",
        "Protect your head, feet, and hands.",
        "Check your natural gas or propane.",
        "Shut off water at the house main.",
        "Post a HELP or OK sign where it can be seen.",
        "Put your fire extinguisher on the sidewalk.",
        "Go to your neighborhood gathering site.",
        "Form teams.",
        "Return to the gathering site to share what you did."
      ] },
      { title: "Train with your community", items: [
        "CERT (Community Emergency Response Team) training teaches basic response skills for when professional help isn't immediately available; the basic course runs 24 to 30 hours. [[br-cert]]",
        "Utah's Division of Emergency Management keeps a list of local CERT programs and their contacts. [[cert-finder]]",
        "Be Ready Utah also offers a Neighborhood Rapid Disaster Assessment Toolkit. [[br-get-involved]]"
      ] }
    ],
    help: [
      { label: "Find a CERT program in Utah", src: "cert-finder" },
      { label: "Be Ready Utah: CERT", src: "br-cert" }
    ],
    learn: ["myn-overview", "wa-neighborhoods", "br-cert", "br-community"]
  });

  // Be Ready Utah covers audiences beyond the household; the Guides page links there.
  var beyond = [
    { name: "Businesses", icon: "briefcase", src: "br-business", text: "Continuity planning, a business preparedness course, and a document library." },
    { name: "Schools", icon: "kids", src: "br-schools", text: "Planning, kits, and drills for schools." },
    { name: "Communities", icon: "home", src: "br-community", text: "Neighborhood and community preparedness, and local coalitions." },
    { name: "CERT volunteer training", icon: "shield", src: "br-cert", text: "Community Emergency Response Team training near you." }
  ];

  root.UR = root.UR || {};
  root.UR.guides = G;
  root.UR.beyond = beyond;
})(typeof window !== "undefined" ? window : globalThis);
