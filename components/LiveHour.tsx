"use client";

import { useMemo, useState } from "react";
import { Basis } from "@/components/ui";

/**
 * One hour of brand LIVE, costed at SuperOrdinary's own posted pay: hosts
 * $35–50/hr, moderators $25–30/hr, livestream operators $70–80K a year.
 * The question it answers: how much GMV does an hour have to do to pay for
 * itself, and what's left over when it does.
 */

interface Inputs {
  gmv: number;
  hosts: number;
  hostRate: number;
  mods: number;
  modRate: number;
  operatorSalary: number;
  studio: number;
  boost: number;
  margin: number;
}

const DEFAULTS: Inputs = {
  gmv: 2500,
  hosts: 1,
  hostRate: 42,
  mods: 1,
  modRate: 27,
  operatorSalary: 75000,
  studio: 40,
  boost: 200,
  margin: 0.25,
};

const $ = (n: number) => `${n < 0 ? "−" : ""}$${Math.round(Math.abs(n)).toLocaleString("en-US")}`;

export default function LiveHour() {
  const [v, setV] = useState<Inputs>(DEFAULTS);
  const set = (k: keyof Inputs, n: number) => setV((p) => ({ ...p, [k]: n }));

  const r = useMemo(() => {
    const operator = v.operatorSalary / 2080;
    const crew = v.hosts * v.hostRate + v.mods * v.modRate + operator;
    const fixed = crew + v.studio + v.boost;
    const contribution = v.gmv * v.margin - fixed;
    const breakeven = fixed / v.margin;
    return { operator, crew, fixed, contribution, breakeven };
  }, [v]);

  const fields: { k: keyof Inputs; label: string; min: number; max: number; step: number; show: (n: number) => string; posted?: string }[] = [
    { k: "gmv", label: "GMV per LIVE hour", min: 250, max: 8000, step: 50, show: $ },
    { k: "margin", label: "Margin before LIVE costs", min: 0.08, max: 0.45, step: 0.01, show: (n) => `${Math.round(n * 100)}%` },
    { k: "hostRate", label: "Host rate / hr", min: 35, max: 50, step: 1, show: $, posted: "Posted $35–50" },
    { k: "hosts", label: "Hosts on air", min: 1, max: 3, step: 1, show: (n) => `${n}` },
    { k: "modRate", label: "Moderator rate / hr", min: 25, max: 30, step: 1, show: $, posted: "Posted $25–30" },
    { k: "operatorSalary", label: "Operator salary", min: 70000, max: 80000, step: 1000, show: (n) => `$${n / 1000}K`, posted: "Posted $70–80K" },
    { k: "studio", label: "Studio & overhead / hr", min: 0, max: 200, step: 5, show: $ },
    { k: "boost", label: "LIVE GMV Max boost / hr", min: 0, max: 1000, step: 25, show: $ },
  ];

  const scale = Math.max(v.gmv, r.breakeven) * 1.15;

  return (
    <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="u-card p-6 sm:p-8">
        <div className="mb-6 flex items-center justify-between">
          <span className="text-[13px] text-ink">One brand LIVE hour, at posted pay</span>
          <button onClick={() => setV(DEFAULTS)} className="text-[12px] text-mute underline underline-offset-4 hover:text-ink">
            Reset
          </button>
        </div>
        <div className="space-y-5">
          {fields.map((f) => (
            <label key={f.k} className="block">
              <div className="mb-1.5 flex items-baseline justify-between gap-3">
                <span className="text-[13.5px] text-ink-2">
                  {f.label}
                  {f.posted && <span className="ml-2 text-[11px] text-live">{f.posted}</span>}
                </span>
                <span className="u-num text-[13.5px] text-ink">{f.show(v[f.k])}</span>
              </div>
              <input type="range" min={f.min} max={f.max} step={f.step} value={v[f.k]} onChange={(e) => set(f.k, Number(e.target.value))} aria-label={f.label} />
            </label>
          ))}
        </div>
      </div>

      <div className="u-card flex flex-col p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-[12px] text-mute">Contribution per LIVE hour</div>
            <div className={`u-num mt-1 text-[64px] font-semibold leading-none ${r.contribution < 0 ? "text-live" : "text-ink"}`}>{$(r.contribution)}</div>
          </div>
          <Basis kind="illustrative" />
        </div>

        <div className="mt-10">
          <div className="relative h-16">
            <div className="absolute inset-x-0 top-6 h-4 rounded-full bg-sunk" />
            <div
              className={`absolute left-0 top-6 h-4 rounded-full transition-all duration-500 ${v.gmv >= r.breakeven ? "bg-ink" : "bg-live"}`}
              style={{ width: `${(v.gmv / scale) * 100}%` }}
            />
            <div className="absolute top-0 h-16 w-px bg-live transition-all duration-500" style={{ left: `${(r.breakeven / scale) * 100}%` }}>
              <span className="absolute -top-1 left-2 whitespace-nowrap text-[11.5px] font-medium text-live">
                Breakeven {$(r.breakeven)}/hr
              </span>
            </div>
          </div>
          <div className="mt-2 flex justify-between text-[11.5px] text-faint">
            <span>$0</span>
            <span>GMV this hour: {$(v.gmv)}</span>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-line bg-line">
          {[
            ["Crew / hr", $(r.crew)],
            ["All-in cost / hr", $(r.fixed)],
            ["Operator / hr", $(r.operator)],
          ].map(([l, val]) => (
            <div key={l} className="bg-paper p-4">
              <div className="text-[11px] text-faint">{l}</div>
              <div className="u-num mt-1 text-[22px] text-ink">{val}</div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-[14px] leading-[1.6] text-ink-2">
          Crew is the cheap part. The ad boost and the margin decide whether an hour pays, which is why
          I’d schedule LIVE against a forecast of GMV per hour and cut the bottom quartile of slots each
          month. The job postings already measure hosts on revenue per live hour; this puts the cost
          side next to it.
        </p>
        <p className="mt-auto pt-6 text-[11.5px] leading-[1.5] text-faint">
          Pay ranges from SuperOrdinary’s public postings for Live Host, Livestream Moderator and
          Livestream Operator (Sep 2026). Operator cost spread over 2,080 hours a year. GMV, margin,
          overhead and boost are illustrative.
        </p>
      </div>
    </div>
  );
}
