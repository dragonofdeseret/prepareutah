/* Prepare Utah - topic guides that cut across hazards: planning, money, food, leaving, recovering.
   Same rules as hazards.js: every factual sentence ends with [[source-id]] (see sources.js).
   sections: [{ title, intro?, items? }]. tool: an interactive form defined in scripts/build.js (TOOLS)
   and run by assets/js/tools.js. help: links shown in the "Where to get help" box. */
(function (root) {
  var G = [];

  G.push({
    id: "long-outage", name: "90 days without utilities", short: "Months without power, water, gas, or sewer, and what really works",
    icon: "battery", color: "#58507A",
    tagline: "A major Wasatch Front earthquake could leave hundreds of thousands of Utah homes without safe tap water for three months. [[eeri-scenario]] Planning for months is different from planning for days: some things you can store, some you can't, and sometimes the plan is to leave.",
    summary: "Federal kit advice is written for several days on your own. Utah's own earthquake modeling runs much longer: in a magnitude 7.0 scenario on the Salt Lake City segment of the Wasatch fault, 332,800 households still have no safe tap water on day 90. This guide scales the basics up to months, and it's honest about what a household can and can't do. [[ready-kit]] [[eeri-scenario]]",
    sections: [
      { title: "Why plan for months", items: [
        "In the FEMA-funded scenario for a magnitude 7.0 quake on the Salt Lake City segment, 483,600 households lose safe tap water on day 1, and 332,800 still have none on day 90. These numbers come from a computer model: they estimate one possible outcome, not a prediction. [[eeri-scenario]]",
        "Power comes back much faster in the same model: 444,600 households lose electricity on day 1, 27,300 are still out on day 30, and 800 on day 90. Water, not power, is what stays out longest. [[eeri-scenario]]",
        "A break in one of the large aqueducts (big water pipelines) that serve the Wasatch Front would probably take six months or longer to repair, because the parts have to be custom made. [[ussc-aqueducts]]",
        "Having gas doesn't mean having heat: a gas furnace won't run without electricity for its thermostat and fan. [[eeri-scenario]]",
        "Temporary housing probably won't be available right away, so families may have to fend for themselves longer than they expect, and a Utah winter makes that harder. [[eeri-scenario]]",
        "Long outages happen. A Harvard-led survey after Hurricane Maria in 2017 found that Puerto Rico households went an average of 84 days without electricity and 68 days without water, counting only through the end of that year. The study tied about one-third of the deaths it estimated to delayed or interrupted medical care. [[harvard-maria]] [[nejm-maria]]",
        "Federal agencies also watch threats to the grid itself. NOAA says an extreme geomagnetic storm (space weather caused by activity on the sun) may make some grid systems collapse or black out and may damage transformers. In 2024, the Department of Energy (DOE) reported that the wait for a new large power transformer was commonly quoted at 36 months from ordering. Most transmission operators keep some spare transformers, and DOE estimates that a spare can be moved and switched on in about three to four weeks when the work is rushed. [[noaa-scales]] [[doe-transformers]]",
        "In October 2026, Fox News reported that the Pentagon's FORTRESS initiative would require every major military base in the continental U.S. to keep running without outside support for at least 90 days. As of Oct. 26, Snopes reported that the Pentagon hadn't confirmed the 90-day figure on the record. The reported plan is for military bases only; it isn't guidance for households. [[fox-fortress]] [[snopes-fortress]]"
      ] },
      { title: "Stay or go: decide before you need to", items: [
        "The Red Cross says to leave home during an outage if it gets too hot or too cold, or if someone relies on medical devices that need power. [[redcross-outage]]",
        "Staying in a cold house isn't automatically the safe choice. In Texas's 2021 winter storm, hypothermia (a dangerously low body temperature) caused 158 of 246 deaths. Texas health officials listed refusing to go to heated shelters or warming centers as a risk factor for hypothermia. [[tx-dshs-uri]] [[nia-cold]]",
        "Utah winters are cold: Salt Lake City's average January low is 24&deg;F, and in Randolph (Rich County) January averages 14 nights at 0&deg;F or colder. [[nws-slc-climate]] [[ncei-randolph]]",
        "Pick several places you could go, in different directions: family or friends outside the area, or a motel. [[ready-evac]]",
        "In Utah's magnitude 7.0 scenario, damaged homes would need a safety inspection before families could move back in, and inspectors may need many days or weeks. Homes tagged yellow or red would have limits on use, so have somewhere else in mind. [[eeri-scenario]]",
        "FEMA's hotel program (Transitional Sheltering Assistance) is offered only after the President declares a disaster and the state asks for it. When it's offered, it can cover households that had to leave because the disaster cut off their utilities, even if the home isn't damaged. [[fema-tsa-policy]] [[fema-tsa-qrg]]",
        "Insurance usually won't pay for leaving just because the power is out: the Utah Insurance Department says purely voluntary evacuations are out-of-pocket. [[uid-evacuated]]",
        "Many shelters and hotels don't allow pets, so line up a pet-friendly place or a pet buddy now. [[ready-pets]]"
      ] },
      { title: "Staying warm in winter", items: [
        "Choose one warm room for everyone, ideally on the highest floor, with a low ceiling and south-facing windows. Block drafts with blankets or towels, but leave some fresh air. Inside that room, make a smaller, warmer sleeping space (a \"nest\") where everyone sleeps together. [[br-shelter-cold]]",
        "Heat only with equipment made for indoor use. Never use an outdoor or patio heater, grill, camp stove, or charcoal inside your home or in a garage. Never run a generator inside your home, garage, basement, crawlspace, or shed, or on a porch or in a carport: opening doors and windows won't let in enough fresh air to stop deadly carbon monoxide. [[cpsc-indoor-heaters]] [[cpsc-winter-2026]] [[cdc-co]] [[ready-power]]",
        "Burning any fuel makes carbon monoxide, a poisonous gas you can't see or smell. Never heat your home with a gas oven or stovetop. [[cdc-co]] [[ready-power]] [[epa-outage-iaq]]",
        "Wood stoves and fireplaces: have the chimney inspected every year. After an earthquake, have a professional inspect the fireplace or wood stove and its chimney before you light a fire, because hidden damage can cause a chimney fire or let poisonous gas into the house. Burn only dry, seasoned firewood (wood that was split and left to dry for at least six months), and never use gasoline, kerosene, or lighter fluid to start or relight a fire. Keep a sturdy screen in front of a fireplace. Open the fireplace damper (the flap in the chimney that lets smoke out) before you light a fire, and keep it open until the ashes are cool. Put cool ashes in a metal container kept away from the house. Never burn charcoal in a fireplace. [[cdc-winter]] [[rctwg-restore]] [[epa-burnwise]] [[nfpa-heating]] [[epa-outage-iaq]] [[dem-cooking]]",
        "Utah's Division of Air Quality calls mandatory no-burn days when air pollution reaches unhealthy levels, usually in winter. They apply in Salt Lake and Davis counties, Cache Valley, and parts of Box Elder, Tooele, Utah, and Weber counties. On those days you can't use a wood-burning fireplace or a wood, pellet, or coal stove unless it's registered with the Division as your home's only source of heat. The rule doesn't cover gas fireplaces or other natural gas appliances. Before you light a fire, check the day's burn status on the UtahAir app, the Division's website, or local news, and have another way to stay warm. [[deq-noburn]]",
        "Indoor-rated propane heaters still burn fuel. Use one only with at least as much fresh air as its instructions call for, and turn it off before anyone goes to sleep. Its built-in oxygen sensor shuts the heater off if oxygen runs low, but it isn't a carbon monoxide alarm. Never bring a large propane tank indoors. [[epa-outage-iaq]] [[cpsc-ods-2002]] [[br-shelter-cold]]",
        "Kerosene heaters: burn only clear 1-K kerosene, never gasoline, and refuel outdoors only after the heater is off and cool. Run it with the room's door open to the rest of the house. If you must close that door, or your home is newer and tightly built or has been sealed against drafts, also open an outside window about an inch. If it flares up, don't move it, cover it, or put water on it. If it has a shut-off switch, use it, and if the fire doesn't go out, get everyone out right away and call 911. [[cpsc-kerosene]]",
        "Put battery-powered or battery-backup carbon monoxide alarms on every level of your home and near every sleeping area, including your warm room. Check their batteries and keep spares. [[cdc-co]] [[ready-power]]",
        "Keep anything that can burn at least 3 feet from any heater, and turn portable heaters off when you leave the room or go to bed. Make sure your smoke alarms have battery backup, and test them at least once a month. Keep a fire extinguisher near any room with a major heat source. [[nfpa-heating]] [[redcross-outage]] [[roots-pdf]]",
        "Know the signs of hypothermia. In adults: shivering, exhaustion, confusion, fumbling hands, slurred speech, and drowsiness. In babies: bright red, cold skin and very low energy. A body temperature below 95&deg;F needs medical care right away. If you can't get help right away, move the person somewhere warm, take off wet clothing, and warm the center of the body (chest, neck, head, and groin) with skin-to-skin contact under loose, dry blankets. Warm drinks can help, but no alcohol, and never give a drink to someone who's unconscious. [[cdc-hypothermia]]",
        "Older adults are at risk even in a cool house: the National Institute on Aging says indoor temperatures of 60 to 65&deg;F can cause hypothermia in older adults. [[nia-cold]]",
        "Never warm up in a running car inside a garage, even with the garage door open, and keep a running car's tailpipe clear of snow. A small leak in a car's exhaust system can let carbon monoxide build up inside the car, and carbon monoxide can kill people who are asleep before they have any symptoms. [[cdc-co]] [[nfpa-co]]"
      ] },
      { title: "Staying cool in summer", items: [
        "Fans help only when it's below 90&deg;F indoors; above that, a fan can raise your body temperature, so go somewhere cooler. [[cdc-heat-about]]",
        "Use a cool room on the lowest floor with north-facing windows. Cover south- and west-facing windows with foil, keep doors and windows closed during the day, and open upstairs windows at night. [[br-shelter-heat]]",
        "In Utah's dry air, wet sheets hung over windows and doors can cool a room. [[br-shelter-heat]]",
        "Check on older adults at least twice a day in hot weather. [[cdc-heat-older]]",
        "Heat stroke is an emergency: watch for confusion, slurred speech, passing out, seizures, or a body temperature above 103&deg;F. Call 911, move the person somewhere cooler, cool them with cool cloths or water while you wait, and don't give them anything to drink. [[nws-heat-illness]] [[niosh-heat-ill]]"
      ] },
      { title: "Power: what backup can and can't do", items: [
        "Rooftop solar alone won't keep your lights on: grid-connected systems shut off when the grid goes down, unless they have a battery and equipment designed for backup. [[doe-solar-resilience]] [[rmp-battery]]",
        "Without solar to recharge them, batteries run down fast. A 2021 study for Rocky Mountain Power gave this example: a battery with 10 kilowatt-hours (kWh, a measure of electricity) of usable capacity, charged to 80%, could run a home that uses 24 kWh a day for about 8 hours. [[rmp-battery-study]]",
        "Winter is the hard part. In a Rocky Mountain Power study of all-electric apartments in Herriman, the solar panels made less than half the electricity the apartments used each day in winter, so the batteries were unlikely to recharge during a multi-day outage. [[rmp-battery-study]]",
        "Plan to power a few essentials, not the whole house. A federal lab study found solar plus a 10 kWh battery could cover a short list of essentials (such as a refrigerator, some lights, and phone charging, but not heating or cooling) through a 3-day outage in almost every U.S. county. [[lbl-pvess]]",
        "To work out how big a battery or portable power station (a battery pack with built-in outlets) you need, start with your refrigerator: the Department of Energy says an average refrigerator-freezer uses about 588 kWh a year, about 1.6 kWh a day by our arithmetic. [[doe-fridge]]",
        "Be Ready Utah says generators are only for short outages, because they need a lot of fuel and can break down. Use one to buy time while you switch to plans that don't need power. [[br-generator]]",
        "A portable generator burns roughly half to three-quarters of a gallon of fuel an hour, about 12 to 18 gallons a day. By our arithmetic, 90 days would take more than a thousand gallons, over 100 times the 10 gallons the fire code allows in a private garage without a storage cabinet. [[ufl-generators]] [[ifc-utah-liquids]]",
        "Run a generator only outdoors, at least 20 feet from the house, never on a porch or in a carport, with its exhaust pointed away from windows, doors, and vents. Keep it dry: touching a wet generator, or anything plugged into it, can shock you. On average, carbon monoxide from portable generators kills nearly 100 people a year in the U.S. [[cpsc-winter-2026]] [[ready-power]]",
        "Never plug a generator into a wall outlet or connect it to your home's breaker or fuse box: that sends power back into the utility's lines (called backfeed), a dangerous hazard for line crews. To power your home's wiring, have a licensed electrician install a transfer switch, which cuts your home off from the utility's lines. Otherwise, plug appliances straight into the generator with heavy-duty, grounded (three-prong) extension cords rated for the load. [[br-power]] [[rmp-storm]] [[ready-power]]",
        "Let a generator cool before refueling; Be Ready Utah says to wait 20 minutes. [[br-generator]]",
        "Small power banks and solar chargers are a low-cost way to keep phones charged. [[br-oct-2024]] [[rmp-storm]]",
        "If someone at home depends on powered medical equipment, tell your power company. Rocky Mountain Power customers can call 1-888-221-7070 and ask about its Medical Certificate program, which doesn't guarantee your power stays on. If another utility serves you, ask what it offers. [[rmp-brochure]] [[rmp-medcert]]"
      ] },
      { title: "Fuel: store less than you think, and store it safely", items: [
        "Utah's fire code has used the 2024 International Fire Code since July 1, 2026. It allows up to 10 gallons of gasoline or similar fuel for equipment, in approved containers, in a private garage; more needs a storage cabinet. That's the legal limit, not the best place: Be Ready Utah says not to store fuel in your home or an attached garage, and an outbuilding like a shed is best. Never store fuel in a basement. [[ut-code-15a-5-103]] [[ifc-utah-liquids]] [[br-generator]] [[lehi-fuel]]",
        "Lehi's fire department recommends keeping no more than 5 gallons of gasoline at home, and no more than 25 gallons of propane in portable cylinders, which is five 20-pound grill tanks. Ask your own fire department about local limits. [[lehi-fuel]]",
        "In federal lab tests, sealed gasoline with 10% ethanol still met fuel-quality standards after a year, though fuel stored other ways may age differently. If a generator will sit for more than a few months, Be Ready Utah says to use up the fuel in its tank or add fuel stabilizer. Use stored fuel over time and replace it with fresh fuel. [[ornl-fuel]] [[br-generator]] [[lehi-fuel]]",
        "Store propane cylinders upright and outdoors, away from heat and direct sunlight. Never keep them in a basement, where heavier-than-air propane can collect. Utah requires stored cylinders to sit at least 10 feet from doorways and other building openings. [[dem-cooking]] [[ifc-lpg]] [[ut-code-15a-5-206]]",
        "A 20-pound propane tank gives about 18 to 20 hours of cooking. [[dem-cooking]]",
        "Don't refill disposable 1-pound propane bottles. Bottles marked \"DOT-39\" are made to be used only once, and federal law forbids transporting one that's been refilled. [[cfr-dot39]]"
      ] },
      { title: "Water for 90 days", items: [
        "At 1 gallon per person per day, 90 days is 90 gallons per person, and that's a minimum. Utah's Division of Emergency Management says children, seniors, nursing mothers, people on medication or with health conditions, and pets need extra, and Utah's dry climate may call for more. For a family of four that's at least 360 gallons, about 3,000 pounds by our arithmetic, so store what you can and keep supplies to treat more. [[dem-water-guide]] [[jvwcd-emergency]]",
        "Utah's Division of Emergency Management says start with a 14-day supply and work up to 30 days. [[dem-water-guide]]",
        "Your home's pipes may hold 20 to 40 gallons of clean water, and a water heater about 40 more. After an earthquake, shut your main water valve so this water stays clean even if the public supply isn't, and assume a boil order is in effect until officials say otherwise. Before using the water heater's water, turn off its gas or power as its manual says and let the water cool, then drain it from the spigot at the bottom. [[br-other-water]] [[jvwcd-emergency]]",
        "If water is cloudy, let it settle, then filter it through a clean cloth, paper towel, or coffee filter. Boil it at a rolling boil for at least 1 minute, or 3 minutes above 5,000 feet. If you can't boil, use regular unscented bleach less than a year old: 8 drops of 6% (or 6 drops of 8.25%) per gallon, doubled for cloudy, colored, or very cold water. Stir and wait 30 minutes; the water should smell slightly of chlorine, and if it doesn't, add the same dose again and wait 15 more minutes. [[epa-disinfect]]",
        "To remove parasites, a portable filter needs an absolute pore size (the size of its holes) of 1 micron or smaller. Filters don't remove viruses, so disinfect filtered water too. [[cdc-water]]",
        "Boiling or disinfecting can't make water safe if it contains fuel, toxic chemicals, or radioactive material. Use another source, and ask your health department for advice. [[cdc-water]]",
        "Don't drink pool, hot tub, or waterbed water even after treatment, and use toilet-tank water only for flushing and cleaning. [[br-other-water]]",
        "Utah law lets you collect rainwater without registering in up to two covered containers of 100 gallons or less each, or up to 2,500 gallons with free registration, for use on the same property. [[ut-rainwater-law]] [[waterrights-rain]] Like any water of unknown safety, treat it before drinking. [[epa-disinfect]]",
        "Half an inch of rain on a 20-by-40-foot roof yields about 175 gallons. [[usu-rain-barrels]]",
        "After a disaster, listen for instructions from officials, who may tell you where to get water and other supplies. Keep clean containers you can carry, because some distribution sites fill only the containers people bring. [[roots-pdf]] [[epa-emergency-water]]",
        "Outside help takes time: Salt Lake City Emergency Management estimates that after a magnitude 7.0 quake on the Salt Lake City segment, it will be at least 96 hours before resources from outside the area begin to arrive. [[slc-em-kit]]",
        "A private well stops when its pump loses power; have a licensed electrician set up any generator hookup. [[vdh-wells]]"
      ] },
      { title: "Sanitation when sewers fail", items: [
        "After an earthquake, don't flush or pour anything down drains until you know the sewer lines are safe. [[br-sanitation]]",
        "Use a two-bucket toilet. The first bucket has no bag and is only for urine. The second is only for solid waste: line it with two heavy-duty plastic bags, put a one-inch layer of kitty litter in the bottom, and cover the waste with about two cups of litter after each use. [[br-sanitation]]",
        "Wear disposable gloves, eye protection, and a mask whenever you handle full bags of waste. Never dump waste in streams, canals, or anywhere water may flow, and never leave it on the ground. Bury waste only if you have a safe spot at least 200 feet from any water supply or living area, and never in a garden. Dig the hole 2.5 to 3 feet deep. Open each bag, empty it into the hole, put the empty bag in too, and cover it with dirt. Between uses, cover the hole with boards and heavy objects to keep animals and children out. When the waste is about a foot from the top, stop using that hole and fill it with dirt. [[br-sanitation]]",
        "If you can't bury waste safely, or the ground is frozen, store the closed bags for a short time instead. Use a garbage can of 30 gallons or less with a tight lid, and strap the lid down with rope or bungee cords. Keep the can outside or in a garage, fastened to a strong post, tree, or other sturdy structure so it can't be knocked over. Ask your local health department how to get rid of the stored bags. [[br-sanitation]]",
        "Keep at least three months of toilet paper, menstrual products, and diapers. [[br-sanitation]]",
        "Wash hands with soap and clean water for at least 20 seconds, and set up a handwashing station with a large jug of water. Use hand sanitizer with at least 60% alcohol only when you can't wash. [[cdc-handwash]] [[cdc-hygiene]]",
        "If your septic system has a pump, the pump stops when the power goes out. Virginia's health department says most such systems should have room for only about 100 to 200 gallons above the high-water alarm, and going past that can spill raw sewage, so use as little water as you can. [[vdh-wells]]"
      ] },
      { title: "Food and cooking", items: [
        "Eat perishable food first, like meat, poultry, fish, eggs, and leftovers. Keep the doors closed: a closed refrigerator keeps food cold for about 4 hours, and a full freezer about 48 hours (24 if half full). Throw out perishable food that's been above 40&deg;F for 2 hours or more. [[ready-food]] [[redcross-outage]]",
        "Don't use snow or the porch as a refrigerator: temperatures swing, and snow can carry dirt and germs. [[uiuc-outage]]",
        "Build a three-month supply of foods you normally eat, then add long-term staples like wheat, white rice, and beans. The Food storage guide covers how. [[church-home-storage]] [[br-food]]",
        "Plan for variety and vitamin C. USU Extension says scurvy, an illness caused by too little vitamin C, is the most likely nutrition problem on stored food, and a BYU food-storage researcher says vitamin C tablets keep a high share of their strength for more than 20 years. [[usu-booklet]] [[byu-old-food]]",
        "Use grills and camp stoves only outdoors, never in a garage, and keep camp stoves and charcoal grills at least 20 feet from windows. [[ready-power]] [[dem-cooking]] Indoors, Utah's Division of Emergency Management says you can cook on a wood stove or in a fireplace (burn only wood, never charcoal). [[dem-cooking]] After an earthquake, have a professional inspect a wood stove or fireplace before you light a fire in it. [[rctwg-restore]] On mandatory no-burn days, you can't burn a wood stove or fireplace, even to cook, unless it's registered as your home's only source of heat. [[deq-noburn]] If you smell gas, don't strike a match or use anything that could spark: leave right away and call 911 from a safe distance. If a gas stove may have been damaged, don't light it until your gas company or a qualified professional has checked it. [[enbridge-ut]] If you don't smell gas and the stove isn't damaged, some gas stoves still work without electricity: check your stove's manual, then light the burners with a match. Cook indoors only in a well-ventilated room, with a window opened slightly if you can. [[dem-cooking]]",
        "A solar oven needs no fuel and still works on clear winter days, just more slowly. [[dem-cooking]]",
        "Utah's Division of Emergency Management suggests fuel for two weeks of cooking: about two 20-pound propane tanks or two bags of charcoal. Ninety days would take roughly six times that, by our arithmetic, which is more propane than Lehi's fire department recommends keeping at home, so lean on no-cook foods and a solar oven too. [[dem-cooking]] [[lehi-fuel]]",
        "Cook small batches and open only what you'll eat, since leftovers can't be kept without refrigeration. [[uiuc-outage]]",
        "For babies, use ready-to-feed formula if you can. If you must mix formula, use bottled water, or boiled water as a last resort. Never make homemade formula. [[ready-food]] [[fda-homemade-formula]]",
        "Store plenty of pet food; pets adjust to diet changes poorly. [[br-food]]"
      ] },
      { title: "Health and medicine", items: [
        "Ask your doctor and your insurance plan about 90-day supplies now. In Utah, a pharmacist may fill a prescription and one or more of its refills at the same time, up to a 100-day supply in all. This doesn't apply to controlled substances; ask your pharmacist whether any of your medicines are controlled. [[ut-rx-multi]]",
        "Utah's emergency refill rule is narrow. If your prescriber can't be reached quickly, a pharmacist may give one emergency refill of a medicine you already take, but only as much as the emergency requires. If that pharmacy has the prescription on file, it can give more than a 3-day supply only if the prescription has no refills left or expired in the past 30 days. Even then, it can't give more than a 30-day supply or your last fill there, whichever is less. The rule doesn't cover controlled substances; ask your pharmacist whether any of your medicines are controlled. [[utah-rx-refill]]",
        "Insulin: if your insulin prescription has no refills left or expired within the past six months, a Utah pharmacist can give a one-time emergency supply of up to 60 days. Insulin in its original vial or cartridge can stay out of the refrigerator for up to 28 days at 59 to 86&deg;F. Keep it as cool as you can without letting it freeze, and away from direct heat and sunlight; don't use insulin that froze. If it got hotter than 86&deg;F and you can't replace it, you may still need to use it until you can. [[ut-rx-insulin]] [[fda-insulin]]",
        "If the power is out for more than a day, medicine that needs refrigeration should generally be replaced unless its label says otherwise; ask a pharmacist or doctor. But don't throw away a medicine you need to stay alive, like insulin, if you can't replace it quickly: FDA says it may be used until you get a new supply. [[ready-power]] [[fda-drugs-disaster]]",
        "Powered medical equipment: ask the company that supplies it whether it can run on batteries or a generator, and about a backup that doesn't need electricity, such as oxygen cylinders. Keep spare batteries and a car charger, and plan where you'd go. Never plug an oxygen concentrator into an extension cord. Don't lower your oxygen flow to make your batteries or oxygen last longer unless your doctor says it's OK. [[ala-outage]] [[fda-devices]] [[ala-oxygen]] Oxygen makes things burn more easily. Keep heaters, stoves, fireplaces, and any other heat or flame at least five feet from where oxygen is used or stored, and don't cook on a gas stove while you're using oxygen. [[ala-oxygen]]",
        "Dialysis centers may close without power or water. Learn the 3-Day Emergency Diet, a strict diet for when you miss treatments; it doesn't replace dialysis, so always try to get dialysis within three days of your last treatment. ESRD Network 15 (Comagine Health), the End Stage Renal Disease network for Utah and five nearby states, can tell you where to find dialysis facilities: 1-800-262-1514. [[cms-dialysis-2026]]",
        "Don't make the hospital your only backup plan: Utah modeling of a magnitude 7 Salt Lake quake estimated only about 38% of hospital beds would be available on the day of the quake. In an emergency, still call 911. [[ugs-sn45]]",
        "Months of disaster stress are real. The Disaster Distress Helpline is toll-free and open 24/7: call or text 1-800-985-5990 (standard text message rates apply). Calls to 988 from Utah reach the Utah Crisis Line. [[samhsa-ddh]] [[hmhi-988]]"
      ] },
      { title: "Light, news, and staying in touch", items: [
        "Use flashlights and battery lanterns, not candles: candles start about 5,900 U.S. home fires a year (2020 to 2024 average), and sleep was a factor in about a third of candle-fire deaths. [[nfpa-candles]] [[usfa-severe]] If anyone at home uses medical oxygen, use only battery-powered lights, never candles or gas lights. [[fda-devices]]",
        "Don't count on cell service: after Hurricane Helene, lost power was the leading reason cell towers and other cell sites in western North Carolina went out of service. [[fcc-helene]]",
        "Text instead of calling; texts get through more reliably on overloaded networks. [[ready-tech]]",
        "Keep a battery or hand-crank radio and a NOAA Weather Radio, which picks up the National Weather Service's own broadcasts. Utah's NOAA Weather Radio stations broadcast weather warnings around the clock, and emergency officials also use them to share information about other hazards, including after an earthquake. [[ready-kit]] [[nws-slc-nwr]] [[nws-nwr]]",
        "Two-way radios: Family Radio Service (FRS) radios need no license. General Mobile Radio Service (GMRS) radios need an FCC license, which costs $35 and covers your immediate family. Amateur (ham) radio requires passing an exam. [[cfr-95-305]] [[cfr-95-1705]] [[cfr-1-1102]] [[cfr-97-501]]",
        "Charging phones from a car? Run it only fully outdoors, never in a garage, and keep the tailpipe clear of snow. [[cdc-co]] [[nfpa-co]]"
      ] },
      { title: "Money and daily life", items: [
        "A long outage can close grocery stores, gas stations, ATMs, and banks, so keep some cash in small bills. [[ready-power]] [[ready-fin]]",
        "Gas stations need electricity to pump: after Hurricane Irma, about 40% of Florida stations were still closed days later, largely because of power outages. [[npr-irma-gas]]",
        "Keep copies of important documents in more than one place, including a secure cloud copy. [[ready-fin]]",
        "If you lose work, including self-employment, because of a major disaster the President has declared, and you don't qualify for regular unemployment, Disaster Unemployment Assistance may cover weeks out of work up to 26 weeks after the declaration. Apply through your state unemployment office. [[dol-dua]]",
        "Never pay anyone to help you get FEMA aid: FEMA and state workers never ask for money. Check a FEMA ID by calling 1-800-621-3362. [[cfpb-scams]]",
        "Utah's price-gouging law, which limits price hikes during emergencies, applies only in the affected area: while a governor's state of emergency lasts, or for the first 30 days after a presidential declaration. [[ut-price-gouging]]"
      ] },
      { title: "Neighbors and community", items: [
        "After a major earthquake, expect fewer responders than usual: Utah's FEMA-funded scenario for a magnitude 7.0 earthquake on the Wasatch fault at Salt Lake City estimates that 30% of first responders, officials, and support staff won't be able to do their jobs. [[eeri-scenario]]",
        "Decades of disaster research find that looting and violent crime are rare in the emergency period of disasters; most people help each other. [[udel-looting]]",
        "Utah's free Community Emergency Response Team (CERT) course takes 24 to 30 hours and teaches fire safety, light search and rescue, and disaster first aid. Pair it with the Neighborhood plan guide. [[dem-cert]]",
        "The Church of Jesus Christ of Latter-day Saints keeps an emergency response plan in each ward (local congregation) and stake (group of congregations). [[church-ep]]"
      ] },
      { title: "Protecting the house", items: [
        "If you leave in winter and can't keep the heat on, turn off the water heater first (its power if it's electric, or the gas valve on the heater itself if it's gas). Then shut off the main water valve. [[purdue-plumbing]] [[ky-pipes]] If your home has fire sprinklers, ask your insurer before you shut off the water: a standard policy says you must take reasonable care to keep both the water and the heat on. [[iii-ho3]]",
        "Next, drain the pipes. Normally you open every faucet, hot and cold, until the water stops. [[ky-pipes]] But after an earthquake, don't let water go down the drains or flush the toilets until you know the sewer lines are safe. [[br-sanitation]] And if you have a septic system with a pump and the power is out, Virginia's health department says most such systems should have room for only about 100 to 200 gallons above the high-water alarm. [[vdh-wells]] In either case, open the highest faucet in the house to let air in, and catch the water in clean containers at the lowest faucet. If you shut the main valve soon after the quake, this water can be clean drinking water to take with you; if you aren't sure, treat it before you drink it. [[br-other-water]] [[jvwcd-emergency]]",
        "Empty the toilet tanks and bowls; after an earthquake, do it without flushing. Don't drink toilet-tank water. [[br-sanitation]] [[br-other-water]] Empty the drain traps (the bend in the pipe under each sink, tub, and floor drain) or fill them with RV antifreeze (propylene glycol). The water in the water heater may still be very hot, so let it cool in the tank first. Then drain the water heater and other water-using appliances, but don't put antifreeze in them, and never put car antifreeze anywhere in a home water system. [[purdue-plumbing]] [[br-other-water]]",
        "Insulation alone won't protect pipes through a long freeze. If a pipe freezes, a plumber may be your best call. To thaw it yourself, shut off the main water valve, open the faucet on that line, and warm the pipe slowly, for example with towels soaked in hot (not boiling) water. Never use a torch or other open flame; it can start a fire. [[usu-pipes]]",
        "Insurance: a standard homeowners policy covers freezing damage only if you took reasonable care to keep the heat on, or to shut off the water and drain all pipes and appliances. If your home has fire sprinklers, you must take reasonable care to keep both the water and the heat on. Vandalism and broken-glass coverage can stop once a home has been vacant more than 60 days in a row. Ask your insurer before you leave. [[iii-ho3]] [[naic-burst]] [[uid-home-claims]]",
        "Don't shut off natural gas just because you're leaving. If you smell gas or hear it hissing, get everyone out, don't use light switches or anything else that could spark, and call 911 from a safe distance. Turn the gas off at the meter only if it's safe and you suspect a leak, see structural damage to the building, see a fire near the meter or gas pipes, or officials or Enbridge Gas tell you to. Enbridge Gas delivers natural gas to customers in Utah, Wyoming, and Idaho. Once the gas is off, only Enbridge or a qualified professional can turn it back on. [[enbridge-ut]] [[redcross-outage]]",
        "Tell your out-of-state contact where you're going, and leave a note saying when you left. [[ready-evac]] Before you go, unplug electronics and small appliances, including space heaters, to avoid damage from power surges when the power comes back. Leave the refrigerator and freezer plugged in unless flooding is a risk. [[ready-evac]] [[ready-power]] [[redcross-outage]] If you can keep the heat on, leave it set no lower than 55&deg;F. [[redcross-frozen]]",
        "Coming home: if you smell gas, don't go in; move away and call 911 from a safe distance. [[ready-recover]] [[enbridge-ut]] Then check the vents outside the house for your furnace and water heater (the pipes their exhaust comes out of) and clear away any snow and ice. Enbridge Gas says to keep vents clear, and in Texas's 2021 winter storm, ice blocking the vents of gas heating equipment caused some of the deaths from carbon monoxide. [[enbridge-ut]] [[tx-dshs-uri]]",
        "If you drained the water, close the drain spigot at the bottom of the water heater and put back any drain plugs or traps you took off. [[br-other-water]] [[purdue-plumbing]] After an earthquake, wait until you know the sewer lines are safe, because refilling the pipes sends water down the drains. [[br-sanitation]] Then turn the main valve back on and run each faucet, hot and cold, until the pipes are full again. [[ky-pipes]] Make sure the water heater is full before you turn its power back on, or before a professional turns its gas back on. [[fema-food-water]] After an earthquake, assume a boil order is in effect until officials say otherwise. [[jvwcd-emergency]]",
        "If the gas was turned off, at the meter or at the water heater's own valve, don't turn it back on or relight anything yourself: Enbridge Gas or a qualified professional should. Don't relight a gas appliance that may be damaged, either. [[enbridge-ut]] [[fema-food-water]] Throw out perishable food that's been above 40&deg;F for 2 hours or more, or that has an unusual smell, color, or texture. If you can't tell how warm it got or for how long, throw it out. [[ready-power]] [[ready-food]]"
      ] }
    ],
    help: [
      { label: "Utah DEM: water storage guide", src: "dem-water-guide" },
      { label: "Rocky Mountain Power: outages and medical needs", src: "rmp-storm" },
      { label: "Disaster Distress Helpline", src: "samhsa-ddh" }
    ],
    learn: ["eeri-scenario", "br-shelter-cold", "br-generator", "dem-cooking", "br-sanitation", "ussc-aqueducts"]
  });

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
