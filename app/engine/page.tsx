"use client";

import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import EvidenceList from "@/components/EvidenceList";
import StageFlow from "@/components/StageFlow";
import { Basis, Card, Eyebrow, PageHead } from "@/components/ui";
import { WORKFLOWS, WORKFLOW_BY_ID } from "@/data/workflows";
import { TLink } from "@/lib/mode";

export default function EnginePage() {
  const params = useSearchParams();
  const [id, setId] = useState<string>(() => params.get("w") ?? WORKFLOWS[0].id);

  useEffect(() => {
    const sync = () => setId(new URLSearchParams(window.location.search).get("w") ?? WORKFLOWS[0].id);
    window.addEventListener("popstate", sync);
    return () => window.removeEventListener("popstate", sync);
  }, []);

  // Pure client state, mirrored into the URL so a single workflow can be sent.
  const select = useCallback((next: string) => {
    setId(next);
    const q = new URLSearchParams(window.location.search);
    q.set("w", next);
    const qs = q.toString().replace(/=(?=&|$)/g, "");
    window.history.pushState(null, "", `/engine?${qs}`);
  }, []);

  const wf = WORKFLOW_BY_ID[id] ?? WORKFLOWS[0];

  return (
    <div>
      <PageHead
        kicker="02 · The operating engine"
        title="Nine workflows make up the job."
        sub="Every line under “What you’ll own” in the role breaks down into a workflow with stages, owners, and places where value leaks. Here is each one mapped the way I’d walk a new team through it, with the metrics I’d watch and the first change I’d make."
      />

      <div className="mb-3 flex items-center gap-3">
        <Basis kind="inferred" />
        <span className="text-[12.5px] text-mute">
          TikTok Shop mechanics are public. How SuperOrdinary staffs each stage is my read from the outside.
        </span>
      </div>

      <div className="no-print mb-10 grid grid-cols-2 gap-2 sm:grid-cols-3">
        {WORKFLOWS.map((w) => (
          <button
            key={w.id}
            onClick={() => select(w.id)}
            className={`rounded-md border p-3 text-left transition-colors ${
              w.id === wf.id
                ? "border-ink bg-ink text-paper"
                : "border-line bg-card text-ink hover:border-ink"
            }`}
          >
            <div className={`font-mono text-[10px] ${w.id === wf.id ? "text-live-wash" : "text-live"}`}>
              {w.n}
            </div>
            <div className="mt-1 text-[13.5px] font-medium leading-snug">{w.name}</div>
          </button>
        ))}
      </div>

      <section key={wf.id} className="u-rise">
        <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3 border-b border-line pb-4">
          <h2 className="u-display text-[34px] text-ink sm:text-[40px]">
            <span className="mr-3 font-mono text-[14px] text-live">{wf.n}</span>
            {wf.name}
          </h2>
          <span className="font-mono text-[10.5px] uppercase tracking-[0.08em] text-mute">
            Maps to: {wf.jd}
          </span>
        </div>
        <p className="u-prose mb-8 max-w-[76ch] text-[16px]">{wf.oneLiner}</p>

        <StageFlow wf={wf} />

        <div className="mt-10 grid gap-4 lg:grid-cols-[1.1fr_1fr]">
          <Card>
            <Eyebrow className="mb-4">What I’d watch</Eyebrow>
            <dl className="divide-y divide-line">
              {wf.kpis.map((k) => (
                <div key={k.name} className="grid gap-1 py-3 first:pt-0 last:pb-0 sm:grid-cols-[200px_1fr] sm:gap-4">
                  <dt className="text-[14px] font-medium text-ink">{k.name}</dt>
                  <dd className="text-[13.5px] leading-[1.55] text-ink-2">{k.why}</dd>
                </div>
              ))}
            </dl>
          </Card>
          <Card tone="live">
            <Eyebrow className="mb-4 text-live-deep">The first change I’d make</Eyebrow>
            <p className="text-[15.5px] leading-[1.6] text-ink">{wf.myMove}</p>
            {["creators", "content", "promos", "win"].includes(wf.id) && (
              <TLink
                href="/economics"
                className="mt-4 inline-block font-mono text-[10.5px] uppercase tracking-[0.1em] text-live-deep underline decoration-live/40 underline-offset-4 hover:decoration-live"
              >
                Run the numbers →
              </TLink>
            )}
          </Card>
        </div>

        <div className="mt-4">
          <Card tone="sunk">
            <Eyebrow className="mb-4">Where I’ve done this before</Eyebrow>
            <EvidenceList ids={wf.evidence} />
          </Card>
        </div>
      </section>
    </div>
  );
}
