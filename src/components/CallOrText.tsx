"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "../lib/site";

/**
 * Call OR Text. Plenty of drivers will never dial but will happily send a photo
 * of a dash light — for a repair shop that photo is half the estimate.
 *
 * Styled as a carbon-copy work-order stub to match this build's ticket idiom:
 * dashed rules, mono line numbers, scan-green readout, 4px corners. Root class
 * is `.cot` — NOT `.wrap`, which is this site's global page container.
 */

function PhoneGlyph({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"
        fill="currentColor"
      />
    </svg>
  );
}

function TextGlyph({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 3h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H9.5L4.8 21.4A1 1 0 0 1 3.2 20.6L3.3 18H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
        fill="currentColor"
      />
    </svg>
  );
}

type Props = {
  /** the trigger's own class, so each placement keeps this build's button voice */
  triggerClass?: string;
  /** open the stub upward (for the fixed pill sitting at the bottom) */
  drop?: "down" | "up";
  align?: "left" | "right";
  /** hide the number on the trigger under 560px, leaving a ~46px icon */
  collapse?: boolean;
  label?: string;
  style?: React.CSSProperties;
};

export default function CallOrText({
  triggerClass = "btn-scan",
  drop = "down",
  align = "right",
  collapse = true,
  label,
  style,
}: Props) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="cot" ref={rootRef} style={style}>
      <button
        type="button"
        className={`${triggerClass} cot-trigger`}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label={`Call or text ${site.name} at ${site.phone}`}
        onClick={() => setOpen((v) => !v)}
      >
        <PhoneGlyph size={16} />
        <span className={collapse ? "cot-num" : undefined}>{label ?? site.phone}</span>
      </button>

      <div className="cot-stub" data-open={open} data-drop={drop} data-align={align} role="menu">
        <div className="cot-stub-head">
          <span className="cot-head-label">Work order · contact</span>
          <span className="cot-head-num">{site.phone}</span>
        </div>
        <a href={site.phoneHref} role="menuitem" onClick={() => setOpen(false)}>
          <span className="cot-line">01</span>
          <PhoneGlyph size={15} />
          <span className="cot-copy">
            <strong>Call the shop</strong>
            <em>Straight to the counter on Broad St</em>
          </span>
        </a>
        <a href={site.smsHref} role="menuitem" onClick={() => setOpen(false)}>
          <span className="cot-line">02</span>
          <TextGlyph size={15} />
          <span className="cot-copy">
            <strong>Text the shop</strong>
            <em>Send a photo of the dash light</em>
          </span>
        </a>
      </div>

      <style jsx>{`
        .cot {
          position: relative;
          display: inline-flex;
        }
        .cot-stub {
          position: absolute;
          z-index: 160;
          width: max-content;
          min-width: 264px;
          max-width: min(300px, calc(100vw - 32px));
          background: var(--asphalt);
          border: 1px solid var(--line);
          border-radius: 4px;
          box-shadow: 0 18px 44px rgba(0, 0, 0, 0.62);
          opacity: 0;
          transform: translateY(-6px);
          pointer-events: none;
          transition: opacity 0.24s ease, transform 0.24s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .cot-stub[data-drop="down"] {
          top: calc(100% + 10px);
        }
        .cot-stub[data-drop="up"] {
          bottom: calc(100% + 10px);
          transform: translateY(6px);
        }
        .cot-stub[data-align="right"] {
          right: 0;
        }
        .cot-stub[data-align="left"] {
          left: 0;
        }
        .cot-stub[data-open="true"] {
          opacity: 1;
          transform: none;
          pointer-events: auto;
        }

        .cot-stub-head {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 0.8rem;
          padding: 0.6rem 0.85rem;
          border-bottom: 1px dashed var(--line);
        }
        .cot-head-label {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--faint);
        }
        .cot-head-num {
          font-family: var(--font-mono);
          font-size: 11.5px;
          color: var(--scan);
          text-shadow: 0 0 12px rgba(55, 224, 122, 0.35);
        }

        .cot-stub a {
          display: grid;
          grid-template-columns: auto auto 1fr;
          align-items: start;
          gap: 0.7rem;
          padding: 0.85rem;
          text-decoration: none;
          color: var(--body-c);
          border-bottom: 1px dashed var(--line-2);
          border-left: 2px solid transparent;
          transition: background 0.25s ease, border-left-color 0.25s ease;
        }
        .cot-stub a:last-child {
          border-bottom: none;
        }
        .cot-stub a:hover,
        .cot-stub a:focus-visible {
          background: var(--scan-dim);
          border-left-color: var(--scan);
        }
        .cot-line {
          font-family: var(--font-mono);
          font-size: 10.5px;
          letter-spacing: 0.16em;
          color: var(--faint);
          padding-top: 3px;
        }
        .cot-stub a:hover .cot-line {
          color: var(--scan);
        }
        .cot-stub :global(svg) {
          margin-top: 2px;
          color: var(--scan);
        }
        .cot-copy strong {
          display: block;
          font-family: var(--font-body);
          font-weight: 700;
          font-size: 13.5px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .cot-copy em {
          display: block;
          font-style: normal;
          font-size: 12.5px;
          line-height: 1.45;
          color: var(--muted);
          margin-top: 2px;
        }

        @media (max-width: 559px) {
          .cot-num {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
