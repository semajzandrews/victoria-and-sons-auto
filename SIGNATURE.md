# Victoria and Sons Auto Repair — SIGNATURE

- Slug: victoria-and-sons-auto · Live: https://victoria-and-sons-auto.vercel.app · Repo: https://github.com/semajzandrews/victoria-and-sons-auto (private)
- Business: auto repair shop, 1233 Broad St, Newark NJ 07114 · (973) 623-1414 · 4.8★ (462 Google reviews) · Mon–Thu 8–6, Fri 9–6, Sat 8–4, Sun closed (verified lead hours from leads/NJ/Newark/07114.json)
- No verified email/FB/IG (searched 07-05-2026; one IG candidate traced to a Washington-state shop — omitted). Phone-only outreach. Built 07-05-2026.

## Concept
**"The Night Shift Work Order."** The site IS the shop's work order, read off a
diagnostic scanner after dark: oil-black asphalt ground, high-vis OBD-readout green,
work-light amber. The deliberate opposite shift from Ramos's "Honest Daylight"
(same vertical, opposite pole). The centerpiece is FULL-STACK, not brochure: a working
**repair-status tracker demo** — the sales weapon per UPSELL_MATRIX (auto row's $497
"pizza tracker" add-on, pre-built into the pitch).

## Fingerprint
- Type: Telma (script display, Fontshare — first board use) + Hoover (slab body/caps,
  Fontshare — first board use) + system ui-monospace for the scanner readout. No substitutions
  needed — both zips carried full weights.
- Palette: oil #0b0e0b · asphalt #131711 · scan-green #37e07a · work-amber #f0a03c ·
  body #dce3da · muted #9aa896 · faint #75836f
- Signature move (ONE): the **repair-status tracker** — "Check on your car": any 4+ char
  code (or "See a sample" → VS-3317) renders a work-order timeline — CHECKED IN → DIAGNOSED →
  PARTS ORDERED → IN THE BAY → READY FOR PICKUP — stage index + timestamps hash-derived from
  the code (different codes = different tickets), staggered row entrance, pulsing active dot,
  scanline card texture, blinking-cursor readout line. Client-side only, labeled
  "DEMO — live for customers when you claim this site"; copy states nothing is looked up or stored.
  Keyboard accessible (real form/label/button), aria-live result, aria-current="step",
  reduced-motion safe.
- Skeleton (unique on board): "the work order" — hero → tracker (high on page) → services as
  a work-order CHECKLIST (checkbox rows WO-01..WO-07, checks draw on reveal/hover — not cards) →
  4.8/462 proof moment (amber script numeral) → visit/map → footer.
- Motion: IO reveals + tracker stage animation ONLY. No marquee/drag-row/pinned scroll.
- Copy: services framed as auto-repair canon (diagnostics, brakes, engine, transmission,
  suspension, oil/maintenance, inspection) — no invented prices, staff, years, or "family-run"
  claims. All hard facts from the verified lead record.

## Media (vault-first; all contact-sheet verified with /usr/bin/python3 PIL, banked + vaulted)
- pexels:20550054 — Latino mechanic under hood, dark garage — hero (FRESH, banked+vaulted)
- pexels:4116193 — hand on OBD diagnostic tablet in car — tracker section (FRESH)
- pexels:12555014 — Black mechanics' hands in engine bay (Nigeria set) — services (FRESH)
- pexels:36044141 — Black mechanic on brake/wheel job — proof section (FRESH)
- pexels:4439588 — young Black mechanic in workshop — visit section (FRESH)
- pexels:8985702 — cylinder head macro — services detail (VAULT, pre-existing verified binary)
- Vault claims RELEASED unused: pexels:8985457/3807517/8986105 (all-white-mechanic set —
  fails the Newark demographics doctrine for people-forward slots; kept in vault for elsewhere)
- Verified rejects banked unclaimed for future builds: 4116198 (tablet variant), 5276374,
  6870313, 6870326, 7807035
- Demographics: Newark (and the South Broad corridor) is heavily Black and Latino; four of the
  five people-forward images reflect that. Vault's prior auto-repair set did not — corrected the shelf.
- Video considered: not used — the tracker carries the interactive energy; bay b-roll would
  compete with the scanner-readout aesthetic. [BUILD_RULES §7]

## Gates
- Image-uniqueness: PASS — grep of /img/ refs: 6 files × exactly 1 slot each.
- Contrast (exact math, computed BEFORE build; luminance per WCAG): scan #37e07a on oil 11.19:1,
  on asphalt 10.45:1 · amber #f0a03c on oil 9.06:1 · body #dce3da 14.83:1 · muted #9aa896 7.78:1 ·
  faint #75836f 4.84:1 (bumped from #6f7d6d which measured 4.46 — caught pre-build) ·
  oil-on-scan buttons 11.19:1 · oil-on-amber 9.06:1. All ≥4.5:1 small text. No Tailwind-sweep
  false positives to arbitrate (ratios computed directly).
- Glyph check (A1NJIT lesson): Telma rendered on real headlines — mixed case fully legible
  (Ill1l / rn / m all distinct), but ALL-CAPS O carries a swash bar and reads as Ø →
  **Telma locked to mixed case**; caps labels/stage names moved to Hoover slab caps (verified
  crisp on "CHECKED IN · DIAGNOSED · …"). Documented in globals.css header.
- 375px: PASS — doc scrollWidth 375, zero overflowing elements. One real failure found+fixed:
  .demo-tag white-space:nowrap forced 575px min-width → wraps now; .ticket-head flex-wraps ≤640px.
  Call pill collapses to 48×48 circle <480px (number kept in aria-label).
- Specificity bug found+fixed: .nav-links a overrode .nav-call color (green-on-green washout) →
  .nav-links a.nav-call.
- npm run build: clean, static prerender (Next 16.2.9/Turbopack).
- Preview-sandbox note: hidden-tab throttling suspends IO/rAF in the preview MCP (screenshots
  mid-scroll go black) — layout verified by DOM geometry + live top-of-page screenshots; tracker
  interaction verified live at desktop width. Stage entrance switched from double-rAF to
  setTimeout for robustness. Same artifact class as the ARSENAL §6 map lesson.

## Arsenal Manifest
- Primary medium: photography (night-graded) + one engineered interactive component — trust
  vertical (auto) = realness-forward, and the clientele meets the site on a phone at night.
- Video considered: yes — used: no — reason: tracker is the energy; b-roll competes. [§7]
- Media used: 6 Pexels photos (list above; 1 vault, 5 fresh-banked; each in exactly one slot,
  none shared cross-site).
- Motion technique: IO reveal + CSS stage-timeline stagger (hand-rolled, no library) — restyled
  as scanner readout (scanlines, glow, blinking cursor).
- Custom icons: single inline phone SVG (hand-drawn path, no license burden).
- Fontshare pairing: Telma + Hoover (confirmed unused in build_registry.json).
- GPU-verified: n/a — no shader/3D.

## Inspiration log (external, per Blocklist Law)
1. Domino's Pizza Tracker — the stage-timeline ritual that made order status a brand asset;
   borrowed the "one pulsing active stage" dramaturgy, restyled as a garage work order.
2. OBD-II scanner / multimeter UI canon (Autel/Innova readouts) — the high-vis green-on-black
   readout language, scanline texture, mono timestamps.
3. Vintage hand-lettered garage signage (enamel/script sign-painting tradition) — the script
   wordmark warmth over an industrial ground; Telma plays the painted sign against Hoover's
   stamped slab.

## Performance budget
- 6 images via next/image (~2.1MB source, served responsive), no video, 6 woff2 (~150KB total),
  no motion library (CSS + IO + one form handler; Lenis only). Static prerender. Expected
  Lighthouse 95+.

## Enrichment findings (07-05-2026)
- No public email, Facebook, or Instagram provably tied to the shop → omitted from site.
- Aggregators squatting the name: wheree.com, autorepairscore.com, autotechiq.com,
  repaircost.net, trust-mechanics.com, chamberofcommerce.com; a BBB profile exists as
  "Victoria And Sons Repair." This is the outreach lever (see OUTREACH.md).
- Language note (Phase-2 recommendation): 1233 Broad St sits on Newark's South Broad corridor —
  heavily Black + Latino, with the Portuguese/Spanish-speaking Ironbound (07105) minutes away;
  the lead sweep for this shop even ran through the 07105 file set. Recommend a vetted
  Spanish toggle as a Phase-2 add-on if the owner confirms clientele mix. Nothing
  machine-translated now; lang="en" shipped.
