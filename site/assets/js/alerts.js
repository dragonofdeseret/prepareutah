/* Prepare Utah - how to get emergency alerts in Utah, statewide and county by county.
   Utah's local alert systems are opt-in, so the sign-up link is the most useful thing we can give.
   Every link here was loaded on UR.ALERTS_CHECKED. Agencies change vendors, so re-check them often.
   Shared by the dashboard (plan.js) and the Alerts page (scripts/build.js). */
(function (root) {
  var UR = root.UR = root.UR || {};
  UR.ALERTS_CHECKED = "October 22, 2026";

  // name: the system residents sign up for. url: its sign-up page. via: the official county page that links it.
  // cities: separate city systems worth joining too. evac: an evacuation-zone map, where the county has one.
  // none: true when we found no county sign-up; url then points to the county's emergency management page.
  // Everbridge links use the portal's /login page: it names the county and has a "Create Account" button.
  var EB = "https://member.everbridge.net/", TRI = "https://tricountyemergencyalert.genasys.com/portal";
  UR.countyAlerts = {
    "Beaver": { name: "Beaver County ALERT (AlertSense)", url: "https://public.alertsense.com/SignUp/PublicUser.aspx?regionid=1399", via: "https://beaver.utah.gov/416/AlertSense", scope: "countywide",
      note: "Run by sheriff's dispatch, and also used for some non-emergency notices." },
    "Carbon": { name: "Carbon ALERT (AlertSense)", url: "https://public.alertsense.com/signup/?regionid=1359", via: "https://www.carbon.utah.gov/service/alert-sense/", scope: "countywide",
      note: "Add your home address to get alerts for your location. You can choose landline alerts too." },
    "Daggett": { name: "Tri-County Emergency Alert System (Genasys)", url: TRI, via: "https://www.daggettcounty.gov/99/Emergency-Management", scope: "shared with Duchesne and Uintah counties",
      note: "Alerts come by text from 65513 and by phone from (435) 393-0593; save both in your contacts. The county's older CodeRED page is out of date." },
    "Duchesne": { name: "Tri-County Emergency Alert System (Genasys)", url: TRI, via: "https://duchesne.utah.gov/", scope: "shared with Daggett and Uintah counties",
      note: "Alerts come by text from 65513 and by phone from (435) 393-0593; save both in your contacts. Ignore the old CodeRED link on the county site." },
    "Emery": { name: "Emery County Sheriff's Office emergency notifications (CivicPlus)", url: "https://portal.civicplus.com/UT-EmeryCounty/notifications", via: "https://emery.utah.gov/home/offices/sheriff/ems/", scope: "countywide",
      note: "For emergency texts only, text ECSO to 38276." },
    "Garfield": { name: "Garfield Alert (AlertSense)", url: "https://public.alertsense.com/signup/?regionid=1388", via: "https://gcutsheriff.com/", scope: "countywide",
      note: "Used for evacuations, shelter-in-place orders, and boil-water notices." },
    "Grand": { name: "Grand ALERT (AlertSense)", url: "https://public.alertsense.com/signup/?regionid=1367", via: "https://grandcountyutah.gov/174/Emergency-Management", scope: "one system for the county and Moab",
      note: "Weather warnings for Grand County come from the National Weather Service in Grand Junction. [[nws-gjt]]" },
    "Juab": { name: "Juab County Sheriff's Office alerts (Nixle)", url: "https://local.nixle.com/juab-county-sheriffs-office/", via: "https://www.juabsheriff.org/", scope: "countywide",
      note: "You can also text your ZIP code to 888777. For general county notices, text JUABCOUNTY to 91896." },
    "Kane": { name: "Kane County Community Emergency Notification System (Everbridge)", url: EB + "892807736721500/login", via: "https://kane.utah.gov/195/Emergency-Services", scope: "Kane County and Fredonia, Arizona",
      note: "Landlines are included automatically; register your cell phone." },
    "Millard": { name: "Millard County Alerts (AlertSense)", url: "https://public.alertsense.com/signup/?regionid=1568", via: "https://millardcounty.gov/alertsense-notifications/", scope: "countywide" },
    "Morgan": { name: "Morgan County Alerts (Everbridge)", url: EB + "107891189088268/login", via: "https://www.morgancountyutah.gov/emergency-services", scope: "countywide" },
    "Piute": { none: true, url: "https://piute.gov/county-services/pubic-safety/emergency-management/",
      note: "Call the sheriff's office at 435-577-2893 to ask how alerts reach residents. NOAA Weather Radio doesn't cover Piute County, so keep phone emergency alerts turned on. [[nwr-ut]]" },
    "Rich": { name: "Rich County Emergency Alerts (Everbridge)", url: EB + "107856829349910/login", via: "https://www.richcounty.gov/emergency/", scope: "countywide" },
    "San Juan": { name: "San Juan Alerts (AlertSense)", url: "https://public.alertsense.com/SignUp/?regionid=1320", via: "https://www.sanjuancountyut.gov/317/San-Juan-Alerts", scope: "countywide",
      note: "Alert calls come from (877) 957-9563; save it in your contacts. Weather warnings for the county come from the National Weather Service in Grand Junction. [[nws-gjt]]" },
    "Sanpete": { name: "Sanpete County Alerts (AlertSense)", url: "https://public.alertsense.com/signup/?regionid=1248", via: "https://www.sanpetecountyutah.gov/177/Sheriff", scope: "countywide",
      note: "The county's \"Notify Me\" sign-up is for website news, not emergencies; use this one." },
    "Sevier": { name: "Sevier County Sheriff's Office alerts (Everbridge)", url: EB + "88684095340645/login", via: "https://www.sevier.utah.gov/", scope: "countywide",
      note: "Richfield's city page still links an old CodeRED system that no longer works; use this one." },
    "Uintah": { name: "Tri-County Emergency Alert System (Genasys)", url: TRI, scope: "shared with Daggett and Duchesne counties",
      note: "Uintah County's website was blank when we checked, so this link comes from the Daggett and Duchesne county sites, which share the system. Alerts come by text from 65513 and by phone from (435) 393-0593." },
    "Wasatch": { name: "Wasatch County Citizen Alert (Everbridge)", url: EB + "892807736723926/login", via: "https://www.wasatchcounty.gov/301/Emergency-Alerts", scope: "countywide, by address",
      note: "If you had an account on the old system, type your login in lowercase." },
    "Wayne": { name: "Everbridge alerts (Sevier County Sheriff's Office system)", url: EB + "88684095340645/login", via: "https://waynecountyutah.gov/pages/emergency-services",
      note: "Wayne County's sign-up link opens the Sevier County Sheriff's Office system, which appears to cover Wayne too. To confirm, call Wayne County Emergency Management at 435-836-1348." },
    "Box Elder": { name: "Box Elder Alerts (Everbridge)", url: EB + "107856829349909/login", via: "https://www.boxeldercountyut.gov/471/Everbridge-Emergency-Alert-Notification-", scope: "countywide" },
    "Cache": { name: "Cache County Emergency Alert Program (Everbridge)", url: EB + "107925548826629/login", via: "https://www.cachecounty.gov/sheriffs-office/emergencies/emergency-alerts.html", scope: "countywide",
      note: "Logan uses this same system. If you signed up for the old CodeRED system, register again: old sign-ups were moved over in 2024 but have to be re-activated." },
    "Davis": { name: "Davis County Emergency Alert Program (Everbridge)", url: EB + "107856829349908/login", via: "https://www.daviscountyutah.gov/emergency-management/emergency-alert-sign-up", scope: "countywide",
      note: "Layton runs its own system too, and the county asks Layton residents to sign up for both.",
      cities: [{ name: "Layton emergency notifications", url: "https://www.laytoncityutah.gov/LC/EmergencyManagement/ENS" }],
      evac: { name: "Davis County fire evacuation zones", url: "https://www.daviscountyutah.gov/emergency-management/fire-evacuation-zones" } },
    "Iron": { name: "Iron County Citizen Alert (Everbridge)", url: EB + "453003085611405/login", via: "https://ironcountyut.gov/emergency-management/citizen-alert", scope: "Iron County and its cities",
      note: "Alert calls come from (435) 867-7610; save it in your contacts as \"Citizen Alert.\" You'll need at least one Iron County address." },
    "Salt Lake": { name: "Salt Lake County Reverse 9-1-1 (Smart911)", url: "https://www.smart911.com/smart911/ref/login.action?pa=slvecc", via: "https://www.saltlakecounty.gov/emergency-services/alerts", scope: "countywide, including Salt Lake City",
      note: "Only landlines are added automatically, so register your cell phone and email. Many cities and townships (Herriman, Kearns, Millcreek, West Jordan, Sandy, West Valley City, South Salt Lake, Draper, and others) also run their own systems; the county's alerts page links each one." },
    "Summit": { name: "Summit County and Park City Emergency Alerts (Everbridge)", url: EB + "453003085613422/login", via: "https://summitcountyutah.gov/1080/Emergency-Alerts", scope: "countywide, including Park City",
      note: "For fire alerts by text, text SCFIRE to 91896." },
    "Tooele": { name: "Tooele Alerts (AlertSense)", url: "https://public.alertsense.com/signup/?regionid=1217", via: "https://tcem.org/emergency-warning-systems/", scope: "county and city agencies",
      note: "Covers evacuation, shelter-in-place, and boil-water orders, targeted to the addresses you enter." },
    "Utah": { name: "Utah County Alerts (Everbridge)", url: "https://alerts.utahcounty.gov", via: "https://sheriff.utahcounty.gov/divisions/support-services/emergency-management", scope: "countywide",
      note: "Provo and Orem use this same system, so one account covers them too." },
    "Washington": { name: "WashCo Citizen Alert (Everbridge)", url: EB + "892807736722285/login", via: "https://www.washco.utah.gov/departments/emergency-management/evacuation-zones/", scope: "countywide, including its cities",
      note: "People with disabilities can also register by phone at 435-627-4914.",
      evac: { name: "Genasys Protect evacuation zones", url: "https://protect.genasys.com/", note: "The map shows your zone; the alerts themselves still come through Citizen Alert." } },
    "Weber": { name: "Weber County Emergency Alert Program (Everbridge)", url: EB + "107891189088260/login", via: "https://www.webercountyutah.gov/emergency-management/everbridge.php", scope: "countywide",
      note: "Ogden uses this same system. Alert texts come from 89361 and calls from 801-399-8901; save both in your contacts." }
  };

  // Steps that apply everywhere in Utah, in order.
  UR.alertsLede = "In Utah, local emergency alerts are opt-in: evacuation orders and boil-water notices go to the people who signed up. During the August 2026 wildfires, some residents in Logan and Echo never got an evacuation alert. Signing up takes a few minutes; do it for every adult at home. [[kutv-alerts-2026]] [[upr-logan-2026]]";
  UR.alertSteps = [
    { title: "Sign up for your county's alerts", text: "Utah has no statewide sign-up for evacuation alerts. The state's Division of Emergency Management asks residents to sign up for their local system, and those systems only reach people who register, so add every adult's cell phone. [[dem-be-informed]] [[kutv-alerts-2026]]" },
    { title: "Keep phone emergency alerts turned on", text: "Wireless Emergency Alerts reach phones by location, free and with no sign-up, when authorized officials send them. On iPhone: Settings, Notifications, Government Alerts. On Android: Settings, Notifications, Wireless emergency alerts (menus vary by phone). [[fema-wea]] [[apple-alerts]] [[android-alerts]]" },
    { title: "Add a weather radio", text: "A NOAA Weather Radio with an alert setting turns itself on for warnings; program it for your county. Mountains can block reception, and Piute County has no coverage. [[nws-nwrsame]] [[br-comm]] [[nwr-ut]]" },
    { title: "Text UtahQuake to 43362", text: "You'll get earthquake tips and alerts from the Division of Emergency Management. It isn't an early warning: Utah has no earthquake early warning system. [[dem-be-informed]] [[ugs-eew]]" },
    { title: "Save your alert numbers", text: "Many county systems call or text from a number you won't recognize. Save it in your contacts so you don't ignore it; your county's card lists it where we found one." }
  ];

  // Evacuation stages used by Utah fire agencies.
  UR.readySetGo = [
    { term: "Ready (Level 1)", text: "A potential threat exists. Review your plan and get your go-bag, people, and pets ready. [[northfork-rsg]]" },
    { term: "Set (Level 2)", text: "There's a significant threat, and you may have to leave on short notice. If you need extra time to leave, or have large animals, consider going now. [[northfork-rsg]]" },
    { term: "Go (Level 3)", text: "Danger is current or imminent. Leave immediately. [[northfork-rsg]]" },
    { term: "Always", text: "Follow the exact instructions in an official alert. Some agencies use these stages as ways to get ready rather than as formal orders. [[iafc-rsg]]" }
  ];

  function link(href, text) {
    return '<a href="' + UR.esc(href) + '" target="_blank" rel="noopener">' + text + '<span class="sr-only"> (opens in a new tab)</span></a>';
  }

  // One county's card. opts.heading adds the county name (for the all-counties page).
  UR.alertsCard = function (county, opts) {
    opts = opts || {};
    var c = UR.countyAlerts[county], cite = UR.cite, esc = UR.esc, ic = UR.icon;
    var h = '<div class="card alerts-card" id="county-' + esc(county.toLowerCase().replace(/\s+/g, "-")) + '">';
    if (opts.heading) h += '<h3>' + esc(county) + ' County</h3>';
    if (!c) h += '<p>We haven\'t confirmed a sign-up for this county yet. Ask your county emergency manager or sheriff how they send alerts.</p>';
    else if (c.none) h += '<p>We couldn\'t find a public alert sign-up for ' + esc(county) + ' County. ' + (c.note ? cite(c.note) + ' ' : "") + 'Check with ' + link(c.url, "county emergency management") + '.</p>';
    else {
      h += '<p class="alerts-main"><strong>' + esc(c.name) + '</strong>' + (c.scope ? ' <span class="muted small">(' + esc(c.scope) + ')</span>' : "") + '</p>' +
        '<p class="btn-row" style="margin:8px 0"><a class="btn small" href="' + esc(c.url) + '" target="_blank" rel="noopener">' + ic("bell") + ' Sign up<span class="sr-only"> for ' + esc(c.name) + ' (opens in a new tab)</span></a>' +
        (c.via ? ' <span class="small muted" style="align-self:center">Linked from ' + link(c.via, "the county's official page") + '</span>' : "") + '</p>';
      if (c.note) h += '<p class="small">' + cite(c.note) + '</p>';
    }
    if (c && c.cities && c.cities.length) h += '<p class="small"><strong>Also sign up with your city if it has its own system:</strong> ' +
      c.cities.map(function (x) { return link(x.url, esc(x.name)); }).join(" &middot; ") + '</p>';
    if (c && c.evac) h += '<p class="small">' + ic("map") + ' <strong>Evacuation zones:</strong> ' + link(c.evac.url, esc(c.evac.name)) + (c.evac.note ? ' ' + cite(c.evac.note) : "") + '</p>';
    if (!opts.heading && UR.alertSteps.length) h += '<h4 class="cat-h">Everyone in Utah</h4><ol class="alert-steps">' + UR.alertSteps.map(function (s) { return '<li><strong>' + esc(s.title) + '.</strong> ' + cite(s.text) + '</li>'; }).join("") + '</ol>';
    if (!opts.heading && UR.readySetGo.length) h += '<details class="rsg"><summary>What "Ready, Set, Go" means</summary><dl>' +
      UR.readySetGo.map(function (s) { return '<dt>' + esc(s.term) + '</dt><dd>' + cite(s.text) + '</dd>'; }).join("") + '</dl></details>';
    if (!opts.heading) h += '<p class="small muted" style="margin:10px 0 0">Links checked ' + esc(UR.ALERTS_CHECKED) + '. <a href="alerts.html">Alerts for every county</a></p>';
    return h + '</div>';
  };
})(typeof window !== "undefined" ? window : globalThis);
