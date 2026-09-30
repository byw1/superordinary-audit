import { Card, Eyebrow, PageHead, SectionHead } from "@/components/ui";
import { NINETY, QUESTIONS } from "@/data/plan";

export default function PlanPage() {
  return (
    <div>
      <PageHead
        kicker="06 · First 90 days"
        title="Learn the book, fix the biggest leak, then grow."
        sub="A plan written from the outside is a hypothesis. The first month is for finding out where this one is wrong. What doesn’t change: the order. Measure before you optimize, fix leaks before you add volume."
      />

      <div className="grid gap-4 lg:grid-cols-3">
        {NINETY.map((p, i) => (
          <Card key={p.window} tone={i === 1 ? "live" : "plain"} className="flex flex-col">
            <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-live">{p.window}</div>
            <div className="u-display mt-2 text-[30px] leading-tight text-ink">{p.focus}</div>
            <ul className="mt-5 flex-1 space-y-3">
              {p.moves.map((m) => (
                <li key={m} className="flex gap-2.5 text-[14px] leading-[1.55] text-ink-2">
                  <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-ink" />
                  {m}
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-line pt-4">
              <Eyebrow className="mb-1.5">Done when</Eyebrow>
              <p className="text-[13.5px] leading-[1.55] text-ink">{p.exit}</p>
            </div>
          </Card>
        ))}
      </div>

      <section className="mt-16">
        <SectionHead
          title="What I’d ask you"
          sub="The questions that would change this plan the most."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {QUESTIONS.map((g) => (
            <Card key={g.theme}>
              <Eyebrow className="mb-4">{g.theme}</Eyebrow>
              <ol className="space-y-3">
                {g.qs.map((q, i) => (
                  <li key={q} className="grid grid-cols-[22px_1fr] text-[14.5px] leading-[1.55] text-ink">
                    <span className="font-mono text-[11px] leading-[1.9] text-live">{i + 1}</span>
                    {q}
                  </li>
                ))}
              </ol>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
