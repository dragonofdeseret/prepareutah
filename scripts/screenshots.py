import json, os
from playwright.sync_api import sync_playwright
BASE = os.environ.get("BASE", "http://127.0.0.1:8738/")
OUT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "screenshots"))
os.makedirs(OUT, exist_ok=True)
P = {"county":"Salt Lake","setting":"valley","homeType":"apartment","brick":"yes","tenure":"rent","adults":1,"seniors":0,"children":0,"infants":0,"petsSmall":1,"petsLarge":0,"livestock":False,"flock":False,
     "med":{"rx":True,"controlled":False,"refrigerated":False,"powered":True,"mobility":False,"lungHeart":False,"pregnancy":False},
     "diet":{"allergy":False,"celiac":False,"formula":False,"other":False},"car":"yes","budget":"tight","space":"small","selfEmployed":False,"backcountry":False,
     "hazards":["earthquake","pandemic","gsl","wildfire","air","flood","landslide","radon","power","avalanche","economic"],"draft":False}
errs = []
with sync_playwright() as pw:
    b = pw.chromium.launch()
    for tag, opts, h in (("desktop-1280", dict(viewport={"width":1280,"height":900}), 1900), ("mobile-390", dict(viewport={"width":390,"height":844}, device_scale_factor=2, is_mobile=True, has_touch=True), 2600)):
        ctx = b.new_context(**opts); pg = ctx.new_page()
        pg.on("console", lambda m: m.type == "error" and errs.append(m.text)); pg.on("pageerror", lambda e: errs.append(str(e)))
        pg.goto(BASE + "index.html"); pg.evaluate("p => { localStorage.setItem('ur.profile', JSON.stringify(p)); localStorage.setItem('ur.checks', JSON.stringify({'water-7':true,'alerts':true,'plan-family':true,'first-aid':true})); }", P)
        pg.goto(BASE + "index.html"); pg.wait_for_load_state("networkidle"); pg.wait_for_timeout(800)
        pg.screenshot(path=f"{OUT}/home-{tag}.png", full_page=True)
        pg.goto(BASE + "start.html?step=6"); pg.wait_for_load_state("networkidle")
        pg.screenshot(path=f"{OUT}/questionnaire-{tag}.png", full_page=True)
        pg.goto(BASE + "start.html"); pg.wait_for_load_state("networkidle")
        pg.screenshot(path=f"{OUT}/questionnaire-step1-{tag}.png", full_page=False)
        pg.goto(BASE + "plan.html"); pg.wait_for_selector(".tier-panel"); pg.set_viewport_size({"width": opts["viewport"]["width"], "height": h})
        pg.screenshot(path=f"{OUT}/dashboard-{tag}.png", full_page=False)
        pg.goto(BASE + "plan.html#checklist"); pg.wait_for_timeout(300)
        pg.evaluate("document.getElementById('checklist').scrollIntoView()")
        pg.screenshot(path=f"{OUT}/dashboard-checklist-{tag}.png", full_page=False)
        pg.set_viewport_size(opts["viewport"])
        pg.goto(BASE + "hazards/earthquake.html"); pg.wait_for_load_state("networkidle"); pg.wait_for_timeout(1500)
        pg.screenshot(path=f"{OUT}/hazard-earthquake-{tag}.png", full_page=True)
        if tag.startswith("mobile"):
            pg.click(".nav-toggle"); pg.screenshot(path=f"{OUT}/mobile-menu-{tag}.png")
        ctx.close()
    # print-view PDF of the dashboard
    ctx = b.new_context(); pg = ctx.new_page()
    pg.goto(BASE + "index.html"); pg.evaluate("p => localStorage.setItem('ur.profile', JSON.stringify(p))", P)
    pg.goto(BASE + "plan.html"); pg.wait_for_selector(".tier-panel"); pg.emulate_media(media="print")
    pg.evaluate("document.querySelectorAll('details').forEach(d=>d.open=true)")
    pg.pdf(path=f"{OUT}/plan-print-sample.pdf", format="Letter", print_background=True)
    b.close()
print("console errors:", errs or "none"); print(sorted(os.listdir(OUT)))
