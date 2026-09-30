"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { WORKFLOWS } from "@/data/workflows";

export default function Engine() {
  const [id, setId] = useState("creators");
  const wf = WORKFLOWS.find((w) => w.id === id) ?? WORKFLOWS[0];

  return (
    <Reveal>
      <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
        <nav className="no-print flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] lg:flex-col lg:overflow-visible lg:pb-0">
          {WORKFLOWS.map((w) => {
            const on = w.id === wf.id;
            return (
              <button
                key={w.id}
                onClick={() => setId(w.id)}
                className={`group flex shrink-0 items-center gap-3 rounded-xl px-4 py-3 text-left transition-all ${
                  on ? "bg-white/[0.07] text-ink shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]" : "text-mute hover:bg-white/[0.03] hover:text-ink-2"
                }`}
              >
                <span className={`font-mono text-[11px] ${on ? "text-live" : "text-faint"}`}>{w.n}</span>
                <span className="text-[14px] leading-snug">{w.name}</span>
                {on && <span className="ml-auto hidden h-1.5 w-1.5 rounded-full bg-live shadow-[0_0_10px_rgba(255,90,54,0.9)] lg:block" />}
              </button>
            );
          })}
        </nav>

        <div key={wf.id} className="u-glass u-rise rounded-3xl p-6 sm:p-9">
          <div className="text-[12px] text-mute">{wf.jd}</div>
          <h3 className="u-display mt-2 text-[36px] leading-[1.05] text-ink sm:text-[44px]">{wf.name}</h3>
          <p className="mt-4 max-w-[70ch] text-[15.5px] leading-[1.6] text-ink-2">{wf.oneLiner}</p>

          <ol className="relative mt-10 grid gap-4 md:grid-flow-col md:auto-cols-fr md:gap-3">
            <span aria-hidden className="absolute left-0 right-0 top-[11px] hidden h-px bg-gradient-to-r from-white/5 via-white/20 to-white/5 md:block" />
            {wf.stages.map((s, i) => {
              const leak = wf.leaks.find((l) => l.at === i);
              return (
                <li key={s.name} className="relative" title={s.detail}>
                  <span
                    className={`relative z-10 flex h-6 w-6 items-center justify-center rounded-full font-mono text-[10.5px] ${
                      leak ? "bg-live text-white shadow-[0_0_18px_rgba(255,90,54,0.8)]" : "border border-white/20 bg-paper text-ink-2"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <div className="mt-3 text-[14px] font-medium leading-snug text-ink">{s.name}</div>
                  <div className="mt-0.5 text-[11.5px] text-faint">{s.owner}</div>
                  <p className="mt-2 text-[12.5px] leading-[1.5] text-ink-2 md:hidden">{s.detail}</p>
                </li>
              );
            })}
          </ol>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-live/30 bg-live/[0.06] p-5">
              <div className="mb-3 text-[12px] font-medium text-live-deep">Where value leaks</div>
              <ul className="space-y-3">
                {wf.leaks.map((l) => (
                  <li key={l.what} className="flex gap-3 text-[14px] leading-[1.55] text-ink">
                    <span className="mt-[3px] flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-live font-mono text-[9px] text-white">
                      {l.at + 1}
                    </span>
                    {l.what}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="mb-3 text-[12px] font-medium text-ink">The first change I’d make</div>
              <p className="text-[14.5px] leading-[1.6] text-ink">{wf.myMove}</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="mr-1 text-[12px] text-faint">Watch:</span>
            {wf.kpis.map((k) => (
              <span key={k.name} title={k.why} className="rounded-full border border-white/10 px-3 py-1 text-[12px] text-ink-2">
                {k.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
