"use client";

import dynamic from "next/dynamic";
import { HEADLINE_FACTS } from "@/data/company";

// three.js stays off the critical path: text paints first, the scene fades in.
const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
  loading: () => null,
});

export default function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-55 lg:opacity-100">
        <div className="absolute inset-0 animate-[riseIn_1.6s_ease-out_both]">
          <HeroScene />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-paper/90 via-paper/30 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-paper to-transparent" />

      <div className="mx-auto flex min-h-[100svh] w-full max-w-[1200px] flex-col justify-center px-4 pb-10 pt-28 sm:px-8">
        <div className="max-w-[640px]">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[12px] text-ink-2 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-live" />
            Prepared for the GM, TikTok Shop Operations conversation
          </div>
          <h1 className="u-display text-[52px] leading-[0.98] text-ink sm:text-[76px] lg:text-[88px]">
            SuperOrdinary,
            <br />
            <em className="u-grad-text italic">read like an operator.</em>
          </h1>
          <p className="mt-7 max-w-[54ch] text-[17px] leading-[1.6] text-ink-2">
            An outside-in look at the TikTok Shop engine: how the business makes money, where value
            leaks, the numbers underneath, and how I’d run it from day one.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#engine"
              className="rounded-full bg-live px-5 py-2.5 text-[14px] font-medium text-white shadow-[0_10px_40px_-10px_rgba(255,90,54,0.8)] transition-transform hover:scale-[1.03]"
            >
              See the engine
            </a>
            <a
              href="#numbers"
              className="rounded-full border border-white/15 px-5 py-2.5 text-[14px] text-ink transition-colors hover:border-white/40"
            >
              Run the numbers
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.06] backdrop-blur-md lg:mt-24 lg:grid-cols-4">
          {HEADLINE_FACTS.map((f) => (
            <div key={f.label} className="bg-paper/70 p-5 sm:p-6">
              <div className="u-display text-[40px] leading-none text-ink sm:text-[48px]">{f.value}</div>
              <div className="mt-2 text-[13px] leading-snug text-ink-2">{f.label}</div>
              <div className="mt-2 text-[11px] text-faint">{f.source}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 hidden items-center gap-5 text-[11.5px] text-faint lg:flex">
          <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-white" /> Content</span>
          <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-live" /> Money</span>
          <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#ffc2ae]" /> Creators flowing in</span>
          <span>Three orbits: video, LIVE, the Shop tab</span>
        </div>
      </div>
    </section>
  );
}
