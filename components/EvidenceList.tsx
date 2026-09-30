import { EVIDENCE_BY_ID } from "@/data/evidence";

/** Compact proof list: the things I've done that back a claim. */
export default function EvidenceList({ ids }: { ids: string[] }) {
  return (
    <ul className="space-y-3">
      {ids.map((id) => {
        const e = EVIDENCE_BY_ID[id];
        if (!e) return null;
        return (
          <li key={id} className="border-l-2 border-line-2 pl-3">
            <div className="text-[14px] font-medium text-ink">{e.title}</div>
            <div className="font-mono text-[10px] uppercase tracking-[0.08em] text-faint">{e.where}</div>
            <p className="u-prose mt-1 text-[13.5px]">{e.story}</p>
          </li>
        );
      })}
    </ul>
  );
}
