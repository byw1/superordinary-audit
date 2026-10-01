"use client";

import dynamic from "next/dynamic";
import { BRANDS } from "@/data/brands.mjs";
import { HEADLINE_FACTS } from "@/data/company";

// three.js stays off the critical path: text paints first, the scene fades in.
const LogoScene = dynamic(() => import("@/components/three/LogoScene"), { ssr: false, loading: () => null });

const ORBIT = BRANDS.filter((b) => b.group === "current")
  .slice(0, 14)
  .map((b) => `/logos/${b.domain}.png`);

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-paper">
      <div className="mx-auto grid min-h-[100svh] w-full max-w-[1280px] items-center gap-6 px-5 pb-10 pt-24 sm:px-8 lg:grid-cols-[1fr_1.05fr]">
        <div className="relative z-10">
          <div className="u-label mb-6 flex items-center gap-2 text-ink">
            <span className="h-1.5 w-1.5 rounded-full bg-live" />
            GM, TikTok Shop Operations · An operator’s read
          </div>
          <h1 className="u-display text-[40px] text-ink sm:text-[60px] lg:text-[66px] xl:text-[74px]">
            <span className="whitespace-nowrap">SuperOrdinary,</span>
            <br />
            <span className="text-live">read like an</span>
            <br />
            operator.
          </h1>
          <p className="mt-8 max-w-[52ch] text-[17px] leading-[1.6] text-ink-2">
            An outside-in audit of the company, its brand portfolio and the TikTok Shop engine
            underneath: how it makes money, where value leaks, and how I’d run it from day one.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#company" className="rounded-full bg-ink px-6 py-3 text-[14px] font-medium text-paper transition-transform hover:scale-[1.03]">
              Start the read
            </a>
            <a href="#numbers" className="rounded-full border border-line-2 px-6 py-3 text-[14px] font-medium text-ink transition-colors hover:border-ink">
              Run the numbers
            </a>
          </div>
          <p className="mt-8 text-[12px] text-faint">Prepared by William Lee · independent, from public sources</p>
        </div>

        <div className="relative h-[440px] sm:h-[560px] lg:h-[680px]">
          <div className="absolute inset-0 animate-[riseIn_1.4s_ease-out_both]">
            <LogoScene logos={ORBIT} />
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1280px] px-5 pb-16 sm:px-8">
        <div className="grid grid-cols-2 border-t border-ink lg:grid-cols-4">
          {HEADLINE_FACTS.map((f, i) => (
            <div key={f.label} className={`py-6 pr-5 ${i % 2 ? "pl-5" : ""} lg:pl-5 lg:first:pl-0 ${i ? "lg:border-l lg:border-line" : ""}`}>
              <div className="u-num text-[40px] font-semibold leading-none text-ink sm:text-[52px]">{f.value}</div>
              <div className="mt-3 text-[13.5px] leading-snug text-ink-2">{f.label}</div>
              <div className="mt-1.5 text-[11px] text-faint">{f.source}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
