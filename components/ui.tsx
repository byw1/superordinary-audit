import type { ReactNode } from "react";

// Server-safe primitives. Prep-only blocks are gated by the caller on the
// server (see lib/view.ts), never hidden on the client.

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`u-label ${className}`}>{children}</div>;
}

/** Page opener: a numbered eyebrow, a serif headline, and a standfirst. */
export function PageHead({
  kicker,
  title,
  sub,
}: {
  kicker: string;
  title: ReactNode;
  sub?: ReactNode;
}) {
  return (
    <header className="mb-10 max-w-[78ch]">
      <Eyebrow className="mb-4 text-live">{kicker}</Eyebrow>
      <h1 className="u-display text-[40px] text-ink sm:text-[56px]">{title}</h1>
      {sub && <p className="u-prose mt-5 text-[16px] sm:text-[17px]">{sub}</p>}
    </header>
  );
}

export function SectionHead({
  title,
  sub,
  right,
}: {
  title: string;
  sub?: ReactNode;
  right?: ReactNode;
}) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-x-6 gap-y-3 border-b border-line pb-4">
      <div className="min-w-0">
        <h2 className="u-display text-[28px] text-ink sm:text-[32px]">{title}</h2>
        {sub && <p className="u-prose mt-2 max-w-[68ch] text-[14.5px]">{sub}</p>}
      </div>
      {right}
    </div>
  );
}

export function Card({
  children,
  className = "",
  tone = "plain",
}: {
  children: ReactNode;
  className?: string;
  tone?: "plain" | "live" | "sunk";
}) {
  const tones = {
    plain: "border-line bg-card",
    live: "border-line bg-card border-l-[3px] border-l-live",
    sunk: "border-line bg-sunk",
  };
  return <div className={`rounded-md border p-5 sm:p-6 ${tones[tone]} ${className}`}>{children}</div>;
}

export function Chip({
  children,
  active = false,
  onClick,
  title,
}: {
  children: ReactNode;
  active?: boolean;
  onClick?: () => void;
  title?: string;
}) {
  const cls = `inline-flex items-center gap-1.5 rounded-full border px-2.5 py-[3px] font-mono text-[10.5px] uppercase tracking-[0.08em] transition-colors ${
    active
      ? "border-ink bg-ink text-paper"
      : "border-line-2 text-ink-2 hover:border-ink hover:text-ink"
  }`;
  if (onClick)
    return (
      <button type="button" onClick={onClick} className={cls} title={title}>
        {children}
      </button>
    );
  return (
    <span className={cls} title={title}>
      {children}
    </span>
  );
}

/**
 * Every claim on this site is either sourced or an outside-in read. The marker
 * says which, so nobody mistakes a hypothesis for inside knowledge.
 */
export function Basis({ kind }: { kind: "sourced" | "inferred" | "illustrative" }) {
  const map = {
    sourced: { label: "Sourced", cls: "border-ink/30 text-ink-2" },
    inferred: { label: "Outside-in read", cls: "border-live/50 text-live-deep" },
    illustrative: { label: "Illustrative model", cls: "border-line-2 text-mute" },
  };
  const m = map[kind];
  return (
    <span
      className={`inline-block rounded-sm border px-1.5 py-[1px] font-mono text-[9.5px] uppercase tracking-[0.1em] ${m.cls}`}
    >
      {m.label}
    </span>
  );
}

/** A visual flag that a block is prep-only. Callers render it only when !share. */
export function PrepBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
      <div className="rounded-md border border-dashed border-ink/40 bg-sunk/60 p-5 sm:p-6">
        <div className="mb-3 flex items-center gap-2">
          <span className="rounded-sm bg-ink px-1.5 py-[1px] font-mono text-[9.5px] uppercase tracking-[0.1em] text-paper">
            Prep only
          </span>
          <span className="u-label text-ink">{title}</span>
        </div>
        <div className="u-prose text-[14.5px]">{children}</div>
      </div>
  );
}

export function Stat({
  value,
  label,
  note,
}: {
  value: string;
  label: string;
  note?: ReactNode;
}) {
  return (
    <div className="min-w-0">
      <div className="u-display text-[40px] leading-none text-ink">{value}</div>
      <div className="mt-2 text-[13.5px] leading-snug text-ink-2">{label}</div>
      {note && <div className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.08em] text-faint">{note}</div>}
    </div>
  );
}
