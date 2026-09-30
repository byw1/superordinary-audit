import Reveal from "@/components/Reveal";
import { NINETY } from "@/data/plan";
import { PHASES } from "@/data/q4";

export default function Plan() {
  return (
    <>
      <div className="grid gap-4 lg:grid-cols-3">
        {NINETY.map((p, i) => (
          <Reveal key={p.window} delay={i * 100}>
            <div className={`flex h-full flex-col rounded-3xl p-7 ${i === 1 ? "border border-live/30 bg-gradient-to-b from-live/[0.12] to-transparent" : "u-glass"}`}>
              <div className="text-[12px] text-live-deep">{p.window}</div>
              <div className="u-display mt-2 text-[32px] leading-[1.05] text-ink">{p.focus}</div>
              <ul className="mt-6 flex-1 space-y-3">
                {p.moves.map((m) => (
                  <li key={m} className="flex gap-3 text-[14px] leading-[1.55] text-ink-2">
                    <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-live" />
                    {m}
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-white/[0.07] pt-4 text-[13.5px] leading-[1.55] text-ink">
                <span className="text-mute">Done when · </span>
                {p.exit}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-24 mb-10 max-w-[720px]">
          <h3 className="u-display text-[34px] leading-[1.05] text-ink sm:text-[44px]">
            And if the start date lands in Q4, <em className="italic text-live-deep">Black Friday comes first.</em>
          </h3>
          <p className="mt-4 text-[15.5px] leading-[1.6] text-ink-2">
            Thanksgiving is November 26. TikTok Shop did $500M+ in U.S. sales over the 2025 BFCM
            weekend, across 760K livestreams. Most of what decides the event has a lead time, so the
            plan counts back from it.
          </p>
        </div>
      </Reveal>

      <div className="relative grid gap-3 md:grid-cols-5">
        <span aria-hidden className="absolute left-0 right-0 top-[30px] hidden h-px bg-gradient-to-r from-transparent via-live/50 to-transparent md:block" />
        {PHASES.map((p, i) => (
          <Reveal key={p.name} delay={i * 90}>
            <div className="relative h-full">
              <div className="mb-4 flex items-center gap-3">
                <span className={`relative z-10 h-3 w-3 rounded-full ${p.name === "Run" ? "bg-live shadow-[0_0_20px_rgba(255,90,54,1)]" : "border border-white/30 bg-paper"}`} />
                <span className="u-num text-[11.5px] text-mute">{p.dates}</span>
              </div>
              <div className="u-glass h-[calc(100%-2rem)] rounded-2xl p-5">
                <div className="u-display text-[26px] leading-none text-ink">{p.name}</div>
                <p className="mt-3 text-[13px] leading-[1.55] text-ink-2">{p.moves[0].what}</p>
                <p className="mt-3 text-[12.5px] leading-[1.5] text-live-deep">{p.leak}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </>
  );
}
