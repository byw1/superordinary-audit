import Reveal from "@/components/Reveal";
import { ORG } from "@/data/company";

/** The TikTok Shop org as the public job postings describe it. */
export default function Org() {
  return (
    <Reveal>
      <div className="mb-16 u-card overflow-hidden">
        <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-line px-6 py-5 sm:px-8">
          <div>
            <div className="u-label text-ink">The team this seat runs</div>
            <div className="mt-1 text-[13.5px] text-ink-2">Read from SuperOrdinary’s 22 public job postings, September 2026</div>
          </div>
          <span className="text-[12px] text-faint">Pay as posted</span>
        </div>
        <div className="divide-y divide-line">
          {ORG.map((o, i) => (
            <div key={o.role} className={`grid gap-2 px-6 py-4 sm:px-8 md:grid-cols-[260px_110px_1fr_220px] md:items-baseline md:gap-6 ${i === 0 ? "bg-live/[0.05]" : ""}`}>
              <div className={`text-[14px] font-semibold ${i === 0 ? "text-live" : "text-ink"}`}>{o.role}</div>
              <div className="u-num text-[13px] text-ink-2">{o.pay ?? "—"}</div>
              <div className="text-[13.5px] leading-[1.55] text-ink-2">{o.owns}</div>
              <div className="text-[12px] leading-snug text-mute">{o.kpis}</div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
