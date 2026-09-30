"use client";

import EvidenceList from "@/components/EvidenceList";
import { Card, Eyebrow, PageHead, PrepBlock, PrepOnly, SectionHead } from "@/components/ui";
import { OBJECTIONS, REQUIREMENTS } from "@/data/fit";
import { useShare } from "@/lib/mode";

export default function FitPage() {
  const share = useShare();
  return (
    <div>
      <PageHead
        kicker="07 · Fit"
        title="The posting, answered line by line."
        sub={
          share
            ? "Each requirement from the role, with what I’ve actually done against it. Numbers are the real ones."
            : "Each requirement with the evidence against it, plus the honest distance for prep. The share view shows the evidence; the gaps stay here."
        }
      />

      <div className="space-y-4">
        {REQUIREMENTS.map((r, i) => (
          <Card key={r.req}>
            <div className="grid gap-6 lg:grid-cols-[1fr_1.15fr]">
              <div>
                <div className="font-mono text-[11px] text-live">{String(i + 1).padStart(2, "0")}</div>
                <h2 className="mt-2 text-[17px] font-medium leading-snug text-ink">{r.req}</h2>
                <p className="u-prose mt-3 text-[14.5px]">{r.answer}</p>
                {r.gap && !share && (
                  <div className="mt-4 rounded-md border border-dashed border-ink/40 bg-sunk/60 p-3.5">
                    <span className="mb-1 block font-mono text-[9.5px] uppercase tracking-[0.1em] text-ink">
                      Prep · the honest gap
                    </span>
                    <p className="text-[13.5px] leading-[1.55] text-ink-2">{r.gap}</p>
                  </div>
                )}
              </div>
              <div>
                <Eyebrow className="mb-3">Evidence</Eyebrow>
                <EvidenceList ids={r.evidence} />
              </div>
            </div>
          </Card>
        ))}
      </div>

      <PrepOnly>
        <section className="mt-16">
          <SectionHead
            title="The pushback, pre-aired"
            sub="Prep only. The four things most likely to come up, and how I’ll answer them."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {OBJECTIONS.map((o) => (
              <div key={o.push} className="rounded-md border border-dashed border-ink/40 bg-sunk/60 p-5">
                <div className="u-display text-[22px] leading-tight text-ink">“{o.push}”</div>
                <p className="u-prose mt-3 text-[14px]">{o.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </PrepOnly>

      <div className="mt-10">
        <PrepBlock title="Before sending the share link">
          Check which role the referral went toward. Hired has the FP&A (New Business Initiatives)
          posting on file with the referral through Fanfix; this audit is built for the TikTok Shop GM
          role. Decide whether I’m pursuing both, and say so to the referrer so nobody is surprised.
        </PrepBlock>
      </div>
    </div>
  );
}
