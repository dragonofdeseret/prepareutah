"""Headless browser tests. Run with the site served at BASE (python3 scripts/serve.py)."""
import json, sys, os
from playwright.sync_api import sync_playwright
BASE = os.environ.get("BASE", "http://127.0.0.1:8738/")
SHOTS = os.path.join(os.path.dirname(__file__), "..", "screenshots")
errors = []; results = {}

def watch(page, tag):
    page.on("console", lambda m: m.type == "error" and errors.append(f"[{tag}] console: {m.text}"))
    page.on("pageerror", lambda e: errors.append(f"[{tag}] pageerror: {e}"))

def setnum(page, name, v):
    page.fill(f'input[name="{name}"]', str(v))

def fill(page, P, shoot=None):
    page.goto(BASE + "start.html"); page.wait_for_load_state("networkidle")
    if shoot: page.screenshot(path=shoot, full_page=True)
    nxt = page.locator("[data-next]")
    # step 1: validation check
    nxt.click(); assert "county" in page.locator(".q-error").inner_text().lower()
    page.select_option("#f-county", P["county"]); page.click(f'input[name="setting"][value="{P["setting"]}"] + span'); nxt.click()
    for k in ("homeType", "brick", "tenure"): page.click(f'input[name="{k}"][value="{P[k]}"] + span')
    nxt.click()
    for k in ("adults", "seniors", "children", "infants", "petsSmall", "petsLarge"): setnum(page, k, P.get(k, 0))
    nxt.click()
    for k in P.get("med", []): page.click(f'input[name="med.{k}"] + span')
    nxt.click()
    for k in P.get("diet", []): page.click(f'input[name="diet.{k}"] + span')
    nxt.click()
    for k in ("car", "budget", "space"): page.click(f'input[name="{k}"][value="{P[k]}"] + span')
    nxt.click()
    bands = {el.get_attribute("data-band-for"): el.inner_text() for el in page.locator("[data-band-for]").all()}
    nxt.click(); page.wait_for_url("**/plan.html"); page.wait_for_selector(".tier-panel")
    return bands

def plan_info(page):
    return page.evaluate("""() => {
      const t = s => [...document.querySelectorAll(s)].map(e => e.innerText.trim());
      const li = id => { const e = document.querySelector('li[data-id="'+id+'"] .nm'); return e ? e.innerText : null; };
      return { water14: document.querySelector('[data-testid=water14]').innerText, people: document.querySelector('[data-testid=people]').innerText,
        w7: li('water-7'), w14: li('water-14'), w30: li('water-30'), f7: li('food-7'),
        prios: [...document.querySelectorAll('.prio summary')].map(s => s.querySelector('.nm').innerText + ': ' + s.querySelector('.band').innerText),
        buy: t('[data-buy] li strong'), adds: [...document.querySelectorAll('[data-add]')].map(e => e.dataset.add),
        items: document.querySelectorAll('li[data-id]').length, ids: [...document.querySelectorAll('li[data-id]')].map(e=>e.dataset.id) };
    }""")

P1 = dict(county="Salt Lake", setting="valley", homeType="apartment", brick="yes", tenure="rent", adults=1, petsSmall=1, med=["rx", "powered"], car="yes", budget="tight", space="small")
P2 = dict(county="Utah", setting="foothill", homeType="house", brick="no", tenure="own", adults=2, children=5, petsLarge=1, car="yes", budget="moderate", space="large")

with sync_playwright() as pw:
    b = pw.chromium.launch()
    for name, P, exp in (("p1", P1, dict(w7=9, w14=18)), ("p2", P2, dict(w7=56, w14=112))):
        ctx = b.new_context(viewport={"width": 1280, "height": 900}); page = ctx.new_page(); watch(page, name)
        bands = fill(page, P)
        info = plan_info(page); info["bands_in_form"] = bands
        assert f"Store {exp['w7']} gallons" in info["w7"], info["w7"]
        assert f"Store {exp['w14']} gallons" in info["w14"], info["w14"]
        assert info["water14"] == f"{exp['w14']} gal", info["water14"]
        assert len(set(info["ids"])) == len(info["ids"]), "duplicate item ids"
        # check two items + verify persistence
        ids = ["water-7", "first-aid"]
        for i in ids: page.check(f'input[data-check="{i}"]')
        pct_before = page.inner_text("[data-overall-pct]")
        page.reload(); page.wait_for_selector(".tier-panel")
        for i in ids: assert page.is_checked(f'input[data-check="{i}"]'), f"{i} not persisted"
        assert page.inner_text("[data-overall-pct]") == pct_before
        info["pct_after_2_checks"] = pct_before
        # tier tabs
        page.click('[role=tab][data-tier="3"]'); assert page.is_visible("#panel-t30")
        results[name] = info; ctx.close()
    a, c = results["p1"], results["p2"]
    assert a["adds"] != c["adds"] and a["buy"] != c["buy"] and a["prios"] != c["prios"]
    assert "powered" in a["adds"] and "renters" in a["adds"] and "brick" in a["adds"]
    assert "kids" in c["adds"] and "renters" not in c["adds"] and "brick" not in c["adds"]
    # other pages, no console errors
    ctx = b.new_context(); page = ctx.new_page(); watch(page, "pages")
    for u in ["index.html", "hazards/index.html", "sources.html", "about.html", "plan.html"] + [f"hazards/{h}.html" for h in ["earthquake","pandemic","gsl","wildfire","air","flood","landslide","radon","power","avalanche","economic"]]:
        r = page.goto(BASE + u); page.wait_for_load_state("networkidle"); assert r.status == 200, u
        assert page.locator(".cite-missing").count() == 0, "missing cite on " + u
    # erase
    page.goto(BASE + "start.html"); page.evaluate("localStorage.setItem('ur.profile','{\"county\":\"Utah\"}');localStorage.setItem('ur.checks','{}')")
    page.on("dialog", lambda d: d.accept())
    page.click(".site-footer [data-erase]"); page.wait_for_timeout(1500)
    assert page.evaluate("Object.keys(localStorage).filter(k=>k.startsWith('ur.')).length") == 0
    results["erase"] = "ok"
    ctx.close(); b.close()
print(json.dumps(results, indent=1))
print("ERRORS:", errors if errors else "none")
sys.exit(1 if errors else 0)
