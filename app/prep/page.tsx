import { notFound } from "next/navigation";
import { EVIDENCE_BY_ID } from "@/data/evidence";
import { OBJECTIONS, REQUIREMENTS } from "@/data/fit";
import { CAREFUL, CHECKLIST, LIKELY_QUESTIONS, NUMBERS, PNL_NOTE, REFERRAL_NOTE, WALKTHROUGH, WHO } from "@/data/prep";
import { TLink } from "@/lib/mode";
import { getView } from "@/lib/view";

/** Prep only. Middleware 404s this route for anyone without the key. */
export default async function PrepPage() {
  const { share } = await getView();
  if (share) notFound();

  return (
    <div className="mx-auto w-full max-w-[1100px] px-4 pb-24 pt-28 sm:px-8">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-live/40 bg-live/10 px-3 py-1 text-[12px] text-live-deep">
        Prep only · never shared
      </div>
      <h1 className="u-display text-[52px] leading-[1] text-ink sm:text-[68px]">The interview, rehearsed.</h1>
      <p className="mt-5 max-w-[62ch] text-[16px] leading-[1.6] text-ink-2">
        The walkthrough, the questions, the gaps and the pushback, who’s who, and what to handle
        carefully. None of this is on the public site.
      </p>

      <Block title="The five-minute walkthrough" sub="Share the screen, scroll in this order, and stop to ask a question at each step.">
        <ol className="space-y-3">
          {WALKTHROUGH.map((w, i) => (
            <li key={w.href} className="u-glass grid gap-3 rounded-2xl p-5 md:grid-cols-[190px_1fr] md:gap-6">
              <div>
                <div className="font-mono text-[11px] text-live">{String(i + 1).padStart(2, "0")} · {w.time}</div>
                <TLink href={w.href} className="mt-1 block text-[14.5px] font-medium text-ink hover:text-live-deep">{w.page} →</TLink>
              </div>
              <p className="text-[14.5px] leading-[1.6] text-ink-2">{w.say}</p>
            </li>
          ))}
        </ol>
      </Block>

      <Block title="Likely questions" sub="Outlines, not scripts. Each ends on a story or on something they can look at.">
        <div className="space-y-2.5">
          {LIKELY_QUESTIONS.map((q) => (
            <details key={q.q} className="group u-glass rounded-2xl">
              <summary className="flex cursor-pointer list-none items-baseline justify-between gap-4 px-5 py-4 text-[15px] font-medium text-ink">
                {q.q}
                <span className="text-live transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="border-t border-white/[0.06] px-5 py-4">
                <p className="text-[14.5px] leading-[1.6] text-ink-2">{q.outline}</p>
                {q.story && <p className="mt-3 text-[13px] text-ink"><span className="text-live-deep">Story · </span>{q.story}</p>}
              </div>
            </details>
          ))}
        </div>
      </Block>

      <Block title="The pushback, pre-aired">
        <div className="grid gap-3 md:grid-cols-2">
          {OBJECTIONS.map((o) => (
            <div key={o.push} className="u-glass rounded-2xl p-5">
              <div className="u-display text-[24px] leading-tight text-ink">“{o.push}”</div>
              <p className="mt-3 text-[14px] leading-[1.6] text-ink-2">{o.answer}</p>
            </div>
          ))}
        </div>
      </Block>

      <Block title="The posting, line by line" sub="What I can show against each requirement, and the honest distance.">
        <div className="space-y-3">
          {REQUIREMENTS.map((r) => (
            <div key={r.req} className="u-glass rounded-2xl p-5">
              <div className="text-[15px] font-medium text-ink">{r.req}</div>
              <p className="mt-2 text-[14px] leading-[1.6] text-ink-2">{r.answer}</p>
              {r.gap && <p className="mt-3 rounded-xl border border-live/25 bg-live/[0.06] p-3 text-[13.5px] leading-[1.55] text-ink"><span className="text-live-deep">Gap · </span>{r.gap}</p>}
              <div className="mt-3 flex flex-wrap gap-2">
                {r.evidence.map((id) => (
                  <span key={id} title={EVIDENCE_BY_ID[id]?.story} className="rounded-full border border-white/10 px-2.5 py-0.5 text-[11.5px] text-mute">
                    {EVIDENCE_BY_ID[id]?.title}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Block>

      <Block title="Who’s who">
        <div className="u-glass divide-y divide-white/[0.06] rounded-2xl">
          {WHO.map((w) => (
            <div key={w.name} className="grid gap-1 px-5 py-4 md:grid-cols-[260px_1fr] md:gap-6">
              <div className="text-[14px] font-medium text-ink">{w.name}</div>
              <div className="text-[13.5px] leading-[1.55] text-ink-2">{w.note}</div>
            </div>
          ))}
        </div>
      </Block>

      <div className="mt-16 grid gap-4 lg:grid-cols-2">
        <div className="u-glass rounded-2xl p-6">
          <div className="mb-4 text-[13px] font-medium text-ink">Know, don’t lead with</div>
          <ul className="space-y-2.5">
            {CAREFUL.map((c) => <li key={c} className="text-[13.5px] leading-[1.55] text-ink-2">· {c}</li>)}
          </ul>
        </div>
        <div className="u-glass rounded-2xl p-6">
          <div className="mb-4 text-[13px] font-medium text-ink">Numbers to know cold</div>
          <dl className="space-y-2">
            {NUMBERS.map((n) => (
              <div key={n.n} className="grid grid-cols-[140px_1fr] gap-3">
                <dt className="u-num text-[13.5px] font-semibold text-ink">{n.n}</dt>
                <dd className="text-[13px] leading-[1.5] text-ink-2">{n.what}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="u-glass rounded-2xl p-6">
          <div className="mb-3 text-[13px] font-medium text-ink">If they ask about P&L experience</div>
          <p className="text-[13.5px] leading-[1.6] text-ink-2">{PNL_NOTE}</p>
          <div className="mb-3 mt-6 text-[13px] font-medium text-ink">The referral</div>
          <p className="text-[13.5px] leading-[1.6] text-ink-2">{REFERRAL_NOTE}</p>
        </div>
        <div className="rounded-2xl border border-live/30 bg-live/[0.06] p-6">
          <div className="mb-4 text-[13px] font-medium text-live-deep">Before the call</div>
          <ul className="space-y-3">
            {CHECKLIST.map((c) => (
              <li key={c} className="flex gap-3 text-[13.5px] leading-[1.55] text-ink">
                <span className="mt-[3px] h-3.5 w-3.5 shrink-0 rounded-[4px] border border-white/40" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Block({ title, sub, children }: { title: string; sub?: string; children: React.ReactNode }) {
  return (
    <section className="mt-16">
      <h2 className="u-display text-[34px] leading-tight text-ink">{title}</h2>
      {sub && <p className="mb-6 mt-2 text-[14.5px] text-ink-2">{sub}</p>}
      {!sub && <div className="mb-6" />}
      {children}
    </section>
  );
}
