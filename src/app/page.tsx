import Image from "next/image";
import Nav from "../components/Nav";
import Reveal from "../components/Reveal";
import SmoothScroll from "../components/SmoothScroll";
import Tracker from "../components/Tracker";

const SERVICES = [
  { name: "Diagnostics", desc: "Scanner on, codes read, straight answer. We tell you what it is and what it isn't before any work starts." },
  { name: "Brakes", desc: "Pads, rotors, calipers, lines. The job you don't gamble on — done and test-driven before you get the call." },
  { name: "Engine", desc: "From a rough idle to the big jobs. We find the cause, not just the symptom." },
  { name: "Transmission", desc: "Slipping, hard shifts, leaks — diagnosed honestly. If it doesn't need a rebuild, we won't sell you one." },
  { name: "Suspension & steering", desc: "Shocks, struts, tie rods, alignments. Newark potholes keep us busy so they don't keep you shaking." },
  { name: "Oil & maintenance", desc: "Oil, filters, fluids, belts — the boring work that keeps you off our lift for the expensive kind." },
  { name: "Inspection", desc: "Pre-purchase checks and keeping you road-legal. Know what you're buying before you buy it." },
];

const HOURS = [
  { d: "Monday – Thursday", h: "8:00 AM – 6:00 PM" },
  { d: "Friday", h: "9:00 AM – 6:00 PM" },
  { d: "Saturday", h: "8:00 AM – 4:00 PM" },
  { d: "Sunday", h: "Closed" },
];

export default function Home() {
  return (
    <main id="top" style={{ flex: 1 }}>
      <SmoothScroll />
      <div className="grain" aria-hidden="true" />
      <Nav />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <header className="hero">
        <div className="hero-bg" aria-hidden="true">
          <div className="photo photo-scrim" style={{ position: "absolute", inset: 0 }}>
            <Image
              src="/img/hero-bay.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="wrap hero-content">
          <Reveal>
            <span className="star-chip" aria-label="4.8 stars, 462 Google reviews">
              ★ 4.8 · 462 GOOGLE REVIEWS
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1
              className="script-xl"
              style={{ fontSize: "clamp(44px, 8.5vw, 108px)", margin: "1.1rem 0 0", maxWidth: "13ch", color: "var(--body-c)" }}
            >
              We fix it. <span style={{ color: "var(--scan)" }}>You watch it happen.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="body-tx" style={{ maxWidth: "54ch", fontSize: 17, marginTop: "1.3rem" }}>
              Auto repair at 1233 Broad St, Newark — diagnostics to transmissions, with a repair
              tracker that shows you exactly where your car is in the process. Rated 4.8 stars
              across 462 Google reviews.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap", marginTop: "1.8rem" }}>
              <a className="btn-scan" href="tel:+19736231414">Call (973) 623-1414</a>
              <a className="btn-ghost" href="#tracker">Check on your car</a>
            </div>
          </Reveal>
          <Reveal delay={400}>
            <p className="label" style={{ marginTop: "2.2rem" }}>
              Mon–Thu 8–6 · Fri 9–6 · Sat 8–4 · Sun closed
            </p>
          </Reveal>
        </div>
      </header>

      {/* ── TRACKER (the signature) ──────────────────────────── */}
      <section id="tracker" className="section">
        <div className="wrap">
          <Reveal>
            <p className="label label-scan">Live repair status · The reason this site exists</p>
            <h2 className="script" style={{ fontSize: "clamp(34px, 5.5vw, 64px)", margin: "0.8rem 0 0.6rem", color: "var(--body-c)" }}>
              Check on your car.
            </h2>
            <p className="body-tx" style={{ maxWidth: "58ch", fontSize: 16 }}>
              Like a pizza tracker, for your repair. Punch in the code from your work order and
              see the job move — checked in, diagnosed, parts, the bay, ready.
            </p>
          </Reveal>
          <div className="cols-2 lead-l" style={{ marginTop: "2.5rem", alignItems: "start" }}>
            <Reveal delay={50}>
              <Tracker />
            </Reveal>
            <Reveal delay={150}>
              <div className="photo" style={{ aspectRatio: "3 / 4", position: "relative", borderRadius: 8, overflow: "hidden" }}>
                <Image
                  src="/img/tracker-scan.jpg"
                  alt="Diagnostic scan tablet plugged into a car, reading live engine data"
                  fill
                  sizes="(max-width: 900px) 100vw, 40vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="wrap"><div className="rule" /></div>

      {/* ── SERVICES — the work-order checklist ──────────────── */}
      <section id="services" className="section">
        <div className="wrap">
          <Reveal>
            <p className="label label-amber">Work order · What we do</p>
            <h2 className="script" style={{ fontSize: "clamp(34px, 5.5vw, 64px)", margin: "0.8rem 0 0.6rem", color: "var(--body-c)" }}>
              On the order, every time.
            </h2>
            <p className="body-tx" style={{ maxWidth: "58ch", fontSize: 16 }}>
              No menus, no upsell theater. This is the work — and if your car doesn&apos;t need it,
              it doesn&apos;t go on the ticket.
            </p>
          </Reveal>
          <div className="cols-2 lead-l" style={{ marginTop: "2.5rem", alignItems: "start" }}>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {SERVICES.map((s, i) => (
                <Reveal as="li" className="wo-row" key={s.name} delay={i * 60}>
                  <span className="wo-box" aria-hidden="true" />
                  <span>
                    <span className="wo-num">WO-{String(i + 1).padStart(2, "0")}</span>
                    <span className="wo-name" style={{ display: "block", marginTop: "0.2rem" }}>{s.name}</span>
                    <span className="wo-desc" style={{ display: "block" }}>{s.desc}</span>
                  </span>
                </Reveal>
              ))}
            </ul>
            <div className="wo-photos" style={{ display: "grid", gap: "1.2rem" }}>
              <Reveal delay={100}>
                <div className="photo" style={{ aspectRatio: "4 / 3", position: "relative", borderRadius: 8, overflow: "hidden" }}>
                  <Image
                    src="/img/work-hands.jpg"
                    alt="Mechanics' hands working together inside an engine bay"
                    fill
                    sizes="(max-width: 900px) 100vw, 40vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="photo" style={{ aspectRatio: "4 / 3", position: "relative", borderRadius: 8, overflow: "hidden" }}>
                  <Image
                    src="/img/detail-engine.jpg"
                    alt="Cylinder head on the bench during an engine job"
                    fill
                    sizes="(max-width: 900px) 100vw, 40vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <div className="wrap"><div className="rule" /></div>

      {/* ── PROOF — 4.8 across 462 ───────────────────────────── */}
      <section id="reviews" className="section">
        <div className="wrap">
          <div className="cols-2" style={{ alignItems: "center" }}>
            <Reveal>
              <p className="label label-amber">The receipts</p>
              <p className="proof-big" style={{ margin: "0.5rem 0 0" }}>4.8</p>
              <p className="proof-stars mono" aria-hidden="true" style={{ margin: "0.4rem 0 0" }}>★★★★★</p>
              <p className="stamp" style={{ fontSize: "clamp(16px, 2.4vw, 22px)", color: "var(--body-c)", marginTop: "0.8rem" }}>
                Across 462 Google reviews
              </p>
              <p className="body-tx" style={{ maxWidth: "48ch", fontSize: 16, marginTop: "0.9rem" }}>
                For an auto shop, that number is rare air. Four hundred sixty-two people took the
                time to say the work was done right — a record earned one car at a time, and the
                only advertising worth trusting.
              </p>
              <a
                className="btn-ghost"
                style={{ marginTop: "1.4rem" }}
                href="https://maps.google.com/?cid=10906638782516448879"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read the reviews
              </a>
            </Reveal>
            <Reveal delay={150}>
              <div className="photo" style={{ aspectRatio: "3 / 4", position: "relative", borderRadius: 8, overflow: "hidden" }}>
                <Image
                  src="/img/proof-brake.jpg"
                  alt="Mechanic working on a brake and wheel job"
                  fill
                  sizes="(max-width: 900px) 100vw, 45vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="wrap"><div className="rule" /></div>

      {/* ── VISIT ────────────────────────────────────────────── */}
      <section id="visit" className="section">
        <div className="wrap">
          <Reveal>
            <p className="label label-scan">Find the shop</p>
            <h2 className="script" style={{ fontSize: "clamp(34px, 5.5vw, 64px)", margin: "0.8rem 0 0.6rem", color: "var(--body-c)" }}>
              1233 Broad Street.
            </h2>
          </Reveal>
          <div className="cols-2 lead-r" style={{ marginTop: "2rem", alignItems: "start" }}>
            <Reveal>
              <address style={{ fontStyle: "normal" }}>
                <p className="stamp" style={{ fontSize: 17, color: "var(--body-c)", margin: 0 }}>
                  Victoria and Sons Auto Repair
                </p>
                <p className="body-tx" style={{ fontSize: 16, marginTop: "0.5rem" }}>
                  1233 Broad St<br />Newark, NJ 07114
                </p>
                <a className="btn-scan" href="tel:+19736231414" style={{ marginTop: "0.6rem" }}>
                  Call (973) 623-1414
                </a>
              </address>
              <div style={{ marginTop: "2rem" }}>
                <p className="label" style={{ marginBottom: "0.8rem" }}>Hours</p>
                <dl style={{ margin: 0 }}>
                  {HOURS.map((row) => (
                    <div
                      key={row.d}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "1rem",
                        padding: "0.55rem 0",
                        borderBottom: "1px dashed var(--line-2)",
                      }}
                    >
                      <dt className="body-tx" style={{ fontSize: 15, margin: 0 }}>{row.d}</dt>
                      <dd className="mono" style={{ fontSize: 14, margin: 0, color: row.h === "Closed" ? "var(--faint)" : "var(--scan)" }}>
                        {row.h}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="photo" style={{ aspectRatio: "16 / 10", position: "relative", borderRadius: 8, overflow: "hidden", marginTop: "2rem" }}>
                <Image
                  src="/img/visit-shop.jpg"
                  alt="Mechanic at work in the shop"
                  fill
                  sizes="(max-width: 900px) 100vw, 40vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="map-frame" style={{ height: "clamp(280px, 38vw, 520px)" }}>
                <iframe
                  title="Victoria and Sons Auto Repair location — 1233 Broad St, Newark, NJ 07114"
                  src="https://www.google.com/maps?q=1233+Broad+St,+Newark,+NJ+07114&z=15&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer className="footer" style={{ borderTop: "1px solid var(--line)", padding: "2.2rem 0 5.5rem" }}>
        <div className="wrap" style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "space-between", alignItems: "baseline" }}>
          <p className="script" style={{ fontSize: 20, margin: 0, color: "var(--body-c)" }}>
            Victoria <span style={{ color: "var(--scan)" }}>&amp;</span> Sons
          </p>
          <p className="body-tx" style={{ fontSize: 13.5, margin: 0 }}>
            1233 Broad St, Newark, NJ 07114 · <a href="tel:+19736231414">(973) 623-1414</a>
          </p>
          <p className="body-tx" style={{ fontSize: 13.5, margin: 0 }}>
            built by <a href="https://bysemaj.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--scan)" }}>bysemaj.com</a>
          </p>
        </div>
      </footer>

      {/* fixed tap-to-call — collapses to a 48px circle under 480px */}
      <a className="callpill" href="tel:+19736231414" aria-label="Call Victoria and Sons Auto Repair at (973) 623-1414">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"
            fill="currentColor"
          />
        </svg>
        <span className="callpill-num">(973) 623-1414</span>
      </a>
    </main>
  );
}
