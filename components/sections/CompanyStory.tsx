import Reveal from "@/components/Reveal";
import { LEADERSHIP, REVENUE, TIMELINE } from "@/data/company";

export default function CompanyStory() {
  const max = Math.max(...REVENUE.map((r) => r.value));
  return (
    <div className="grid gap-4 lg:grid-cols-[1.1fr_1fr]">
      <Reveal>
        <div className="u-card h-full p-6 sm:p-8">
          <div className="flex items-baseline justify-between">
            <div className="u-label text-ink">Revenue, public figures only</div>
            <div className="text-[11px] text-faint">USD</div>
          </div>
          <div className="mt-8 flex h-[260px] items-end gap-4 sm:gap-6">
            {REVENUE.map((r) => (
              <div key={r.year} className="flex h-full flex-1 flex-col justify-end">
                <div className="u-num mb-2 text-[20px] font-semibold text-ink sm:text-[24px]">{r.label}</div>
                <div
                  className={`w-full rounded-t-[10px] ${r.year.endsWith("E") ? "bg-[repeating-linear-gradient(135deg,#f23726_0_6px,#ff6b5c_6px_12px)]" : "bg-ink"}`}
                  style={{ height: `${(r.value / max) * 78}%` }}
                />
                <div className="mt-3 text-[13px] font-medium text-ink">{r.year}</div>
                <div className="text-[11px] leading-snug text-faint">{r.source}</div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[13px] leading-[1.6] text-ink-2">
            Between 2021 and 2025 the business shifted from China cross-border toward U.S. TikTok Shop,
            Amazon and Fanfix; there is no public figure for 2022–2024. The 2026 bar is the company’s
            own outlook.
          </p>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <div className="u-card h-full p-6 sm:p-8">
          <div className="u-label mb-6 text-ink">Nine years</div>
          <ol className="relative space-y-4 border-l border-line-2 pl-6">
            {TIMELINE.map((t) => (
              <li key={t.year} className="relative">
                <span className="absolute -left-[29px] top-[5px] h-[9px] w-[9px] rounded-full bg-live ring-4 ring-paper" />
                <span className="u-num mr-3 text-[14px] font-semibold text-ink">{t.year}</span>
                <span className="text-[13.5px] leading-[1.55] text-ink-2">{t.what}</span>
              </li>
            ))}
          </ol>
        </div>
      </Reveal>

      <Reveal className="lg:col-span-2">
        <div className="u-card p-6 sm:p-8">
          <div className="u-label mb-6 text-ink">Who runs it · per the company’s investor site</div>
          <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
            {LEADERSHIP.map((p) => (
              <div key={p.name} className="flex gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sunk font-[family-name:var(--font-display)] text-[13px] font-semibold text-ink">
                  {p.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                </span>
                <div>
                  <div className="text-[14.5px] font-medium text-ink">{p.name}</div>
                  <div className="text-[12.5px] leading-snug text-ink-2">{p.title}</div>
                  {p.note && <div className="mt-0.5 text-[11.5px] leading-snug text-faint">{p.note}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
