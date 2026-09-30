import type { Workflow } from "@/data/workflows";

/**
 * A workflow drawn as a sequence of stages. Leaks hang off the stage where
 * value escapes, in the one accent colour, so the eye goes to them first.
 */
export default function StageFlow({ wf }: { wf: Workflow }) {
  return (
    <ol className="grid gap-3 md:grid-flow-col md:auto-cols-fr md:gap-0">
      {wf.stages.map((s, i) => {
        const leaks = wf.leaks.filter((l) => l.at === i);
        const last = i === wf.stages.length - 1;
        return (
          <li key={s.name} className="relative flex min-w-0 flex-col md:pr-3">
            <div className="flex items-center gap-2">
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border font-mono text-[10.5px] ${
                  leaks.length ? "border-live bg-live text-white" : "border-ink bg-card text-ink"
                }`}
              >
                {i + 1}
              </span>
              {!last && <span className="hidden h-px flex-1 bg-line-2 md:block" aria-hidden />}
            </div>
            <div className="mt-3 flex-1 rounded-md border border-line bg-card p-3.5">
              <div className="text-[14px] font-medium leading-snug text-ink">{s.name}</div>
              <div className="mt-0.5 font-mono text-[9.5px] uppercase tracking-[0.08em] text-faint">
                {s.owner}
              </div>
              <p className="mt-2 text-[12.5px] leading-[1.5] text-ink-2">{s.detail}</p>
            </div>
            {leaks.map((l) => (
              <div
                key={l.what}
                className="mt-2 rounded-md border border-live/40 bg-live-wash p-3 text-[12.5px] leading-[1.5] text-ink"
              >
                <span className="mb-1 block font-mono text-[9.5px] uppercase tracking-[0.1em] text-live-deep">
                  Leak
                </span>
                {l.what}
              </div>
            ))}
          </li>
        );
      })}
    </ol>
  );
}
