import { Card, Eyebrow, PageHead, SectionHead } from "@/components/ui";
import { CAVEATS, SOURCES } from "@/data/sources";

export default function SourcesPage() {
  return (
    <div>
      <PageHead
        kicker="Sources & method"
        title="Where every number comes from."
        sub="Public sources only, researched September 2026. Where sources disagree, the conflict is listed below rather than quietly resolved."
      />

      <div className="grid gap-4 lg:grid-cols-2">
        {SOURCES.map((g) => (
          <Card key={g.group}>
            <Eyebrow className="mb-4">{g.group}</Eyebrow>
            <ul className="divide-y divide-line">
              {g.items.map((s) => (
                <li key={s.url} className="py-2.5 first:pt-0 last:pb-0">
                  <a href={s.url} className="text-[14px] font-medium leading-snug text-ink underline decoration-line-2 underline-offset-4 hover:decoration-ink">
                    {s.title}
                  </a>
                  <div className="mt-0.5 text-[12.5px] text-mute">{s.used}</div>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <section className="mt-16">
        <SectionHead title="Conflicts and caveats" />
        <ul className="space-y-2.5">
          {CAVEATS.map((c) => (
            <li key={c} className="flex gap-3 text-[14.5px] leading-[1.6] text-ink-2">
              <span className="mt-[10px] h-1 w-1 shrink-0 rounded-full bg-live" />
              {c}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
