"use client";

import { useEffect, useRef, useState } from "react";

const STAGES = [
  { name: "Checked in", note: "Your car is on our lot and in the queue. Keys logged, walkaround done." },
  { name: "Diagnosed", note: "We found the problem and called you with the estimate before touching a wrench." },
  { name: "Parts ordered", note: "Parts are on the way. No guessing — you can see exactly what the wait is." },
  { name: "In the bay", note: "Up on the lift right now. This is where the work happens." },
  { name: "Ready for pickup", note: "Done, test-driven, parked out front. Come get it." },
] as const;

type TicketState = {
  code: string;
  activeStage: number; // index into STAGES
  times: string[];
};

// deterministic, hash-derived demo data — no backend, nothing stored
function makeTicket(raw: string): TicketState {
  const code = raw.trim().toUpperCase();
  let h = 0;
  for (let i = 0; i < code.length; i++) h = (h * 31 + code.charCodeAt(i)) >>> 0;
  const activeStage = 1 + (h % 4); // stages 1..4 so there is always progress to show
  const times: string[] = [];
  let minutes = 8 * 60 + (h % 45); // first event some time after 8:00 AM
  for (let i = 0; i < STAGES.length; i++) {
    if (i < activeStage) {
      const hr24 = Math.floor(minutes / 60);
      const mn = minutes % 60;
      const ampm = hr24 >= 12 ? "PM" : "AM";
      const hr = hr24 % 12 === 0 ? 12 : hr24 % 12;
      times.push(`${hr}:${String(mn).padStart(2, "0")} ${ampm} today`);
      minutes += 35 + ((h >> (i + 3)) % 90);
    } else if (i === activeStage) {
      times.push("in progress");
    } else {
      times.push("—");
    }
  }
  return { code, activeStage, times };
}

export default function Tracker() {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [ticket, setTicket] = useState<TicketState | null>(null);
  const [staged, setStaged] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ticket) return;
    setStaged(false);
    const id = setTimeout(() => setStaged(true), 40);
    return () => clearTimeout(id);
  }, [ticket]);

  function lookup(raw: string) {
    if (raw.trim().length < 4) {
      setError("Ticket codes are 4+ characters — or tap “See a sample”.");
      setTicket(null);
      return;
    }
    setError("");
    setTicket(makeTicket(raw));
  }

  return (
    <div className="ticket">
      <div className="ticket-head">
        <span className="label">Victoria &amp; Sons · Work order</span>
        <span className="demo-tag">Demo — live for customers when you claim this site</span>
      </div>

      <div style={{ padding: "1.4rem" }}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            lookup(value);
          }}
          style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}
        >
          <label htmlFor="ticket-code" className="label" style={{ display: "block" }}>
            Enter your ticket code
          </label>
          <input
            id="ticket-code"
            className="ticket-input"
            type="text"
            inputMode="text"
            autoComplete="off"
            placeholder="e.g. VS-3317 (demo: any 4+ characters work)"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <div style={{ display: "flex", gap: "0.7rem", flexWrap: "wrap" }}>
            <button type="submit" className="btn-scan">
              Check status
            </button>
            <button
              type="button"
              className="btn-ghost"
              onClick={() => {
                setValue("VS-3317");
                lookup("VS-3317");
              }}
            >
              See a sample
            </button>
          </div>
          {error && (
            <p className="mono" role="alert" style={{ color: "var(--amber)", fontSize: 13, margin: 0 }}>
              {error}
            </p>
          )}
        </form>

        <div ref={resultRef} aria-live="polite">
          {ticket && (
            <div style={{ marginTop: "1.6rem" }}>
              <p className="readout cursor" style={{ fontSize: 13.5, margin: "0 0 0.4rem" }}>
                SCAN OK · TICKET {ticket.code} · DEMO VEHICLE · BAY 2
              </p>
              <ol style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {STAGES.map((s, i) => {
                  const status = i < ticket.activeStage ? "stage-done" : i === ticket.activeStage ? "stage-active" : "";
                  return (
                    <li
                      key={s.name}
                      className={`stage-row ${status} ${staged ? "st-in" : ""}`}
                      style={{ transitionDelay: `${i * 120}ms` }}
                      aria-current={i === ticket.activeStage ? "step" : undefined}
                    >
                      <span className="stage-dot" aria-hidden="true">
                        {i < ticket.activeStage ? "✓" : i + 1}
                      </span>
                      <span>
                        <span className="stage-name">{s.name}</span>
                        <span className="stage-note" style={{ display: "block" }}>
                          {s.note}
                        </span>
                      </span>
                      <span className="stage-time">{ticket.times[i]}</span>
                    </li>
                  );
                })}
              </ol>
              <p className="body-tx" style={{ fontSize: 13.5, marginTop: "1rem", marginBottom: 0 }}>
                <span style={{ color: "var(--amber)" }}>We text you at each step</span> — no more calling the
                front desk to ask if it&apos;s done. This is a client-side demo: nothing is looked up or stored.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
