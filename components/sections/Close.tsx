import Reveal from "@/components/Reveal";
import { QUESTIONS } from "@/data/plan";
import { CAVEATS, SOURCES } from "@/data/sources";

export default function Close() {
  const qs = QUESTIONS.flatMap((g) => g.qs).slice(0, 6);
  return (
    <section className="border-t border-white/[0.05] py-24">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-8">
        <Reveal>
          <h2 className="u-display max-w-[760px] text-[40px] leading-[1.02] text-ink sm:text-[52px]">
            The questions I’d bring to the room.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-3 md:grid-cols-2">
          {qs.map((q, i) => (
            <Reveal key={q} delay={(i % 2) * 80}>
              <div className="u-glass flex h-full gap-4 rounded-2xl p-5">
                <span className="font-mono text-[12px] text-live">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-[15px] leading-[1.55] text-ink">{q}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <details className="group mt-16 rounded-2xl border border-white/[0.07] p-5">
          <summary className="cursor-pointer list-none text-[13.5px] text-ink-2 hover:text-ink">
            Sources and method <span className="text-faint">· public sources only, researched September 2026</span>
            <span className="float-right text-live transition-transform group-open:rotate-45">+</span>
          </summary>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            {SOURCES.map((g) => (
              <div key={g.group}>
                <div className="mb-3 text-[12px] text-mute">{g.group}</div>
                <ul className="space-y-1.5">
                  {g.items.map((s) => (
                    <li key={s.url}>
                      <a href={s.url} className="text-[13px] text-ink-2 underline decoration-white/15 underline-offset-4 hover:text-ink">
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="md:col-span-2">
              <div className="mb-3 text-[12px] text-mute">Conflicts and caveats</div>
              <ul className="space-y-1.5">
                {CAVEATS.map((c) => (
                  <li key={c} className="text-[13px] leading-[1.55] text-ink-2">{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </details>
      </div>
    </section>
  );
}
