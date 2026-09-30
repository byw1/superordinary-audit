import { notFound } from "next/navigation";
import { Card, Eyebrow, PageHead, SectionHead } from "@/components/ui";
import { CHECKLIST, LIKELY_QUESTIONS, NUMBERS, WALKTHROUGH } from "@/data/prep";
import { TLink } from "@/lib/mode";
import { getView } from "@/lib/view";

/** Prep only. Without the key this route doesn't exist. */
export default async function PrepPage() {
  const { share } = await getView();
  if (share) notFound();

  return (
    <div>
      <PageHead
        kicker="Prep only · never shared"
        title="The interview, rehearsed."
        sub="How to walk them through this site in five minutes, the questions most likely to come up, the numbers to know cold, and what to do before the call."
      />

      <section>
        <SectionHead title="The five-minute walkthrough" sub="Share the screen, go in this order, and stop to ask a question at each step." />
        <ol className="space-y-3">
          {WALKTHROUGH.map((w, i) => (
            <li key={w.href}>
              <Card className="grid gap-3 md:grid-cols-[150px_1fr] md:gap-6">
                <div>
                  <div className="font-mono text-[11px] text-live">
                    {String(i + 1).padStart(2, "0")} · {w.time}
                  </div>
                  <TLink href={w.href} className="mt-1 block text-[15px] font-medium text-ink underline decoration-line-2 underline-offset-4 hover:decoration-ink">
                    {w.page} →
                  </TLink>
                </div>
                <p className="text-[14.5px] leading-[1.6] text-ink-2">{w.say}</p>
              </Card>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16">
        <SectionHead title="Likely questions" sub="Outlines, not scripts. Each ends on a story or on something they can look at." />
        <div className="space-y-3">
          {LIKELY_QUESTIONS.map((q) => (
            <details key={q.q} className="group rounded-md border border-line bg-card open:border-ink">
              <summary className="flex cursor-pointer list-none items-baseline justify-between gap-4 px-5 py-4 text-[15.5px] font-medium text-ink">
                {q.q}
                <span className="font-mono text-[12px] text-live transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="border-t border-line px-5 py-4">
                <p className="text-[14.5px] leading-[1.6] text-ink-2">{q.outline}</p>
                {q.story && (
                  <p className="mt-3 text-[13px] text-ink">
                    <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-live-deep">Story · </span>
                    {q.story}
                  </p>
                )}
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-4 lg:grid-cols-[1.2fr_1fr]">
        <Card>
          <Eyebrow className="mb-4">Numbers to know cold</Eyebrow>
          <dl className="divide-y divide-line">
            {NUMBERS.map((n) => (
              <div key={n.n} className="grid grid-cols-[150px_1fr] gap-4 py-2.5 first:pt-0 last:pb-0">
                <dt className="u-num text-[14px] font-semibold text-ink">{n.n}</dt>
                <dd className="text-[13.5px] leading-[1.5] text-ink-2">{n.what}</dd>
              </div>
            ))}
          </dl>
        </Card>
        <Card tone="live">
          <Eyebrow className="mb-4 text-live-deep">Before the call</Eyebrow>
          <ul className="space-y-3">
            {CHECKLIST.map((c) => (
              <li key={c} className="flex gap-3 text-[14px] leading-[1.55] text-ink">
                <span className="mt-[3px] h-3.5 w-3.5 shrink-0 rounded-sm border border-ink/50" />
                {c}
              </li>
            ))}
          </ul>
        </Card>
      </section>
    </div>
  );
}
