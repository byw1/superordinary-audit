import { Basis, Card, Eyebrow, PageHead, SectionHead, Stat } from "@/components/ui";
import { BFCM_FACTS, BFCM_URL, PHASES, WAR_ROOM } from "@/data/q4";

export default function Q4Page() {
  return (
    <div>
      <PageHead
        kicker="Q4 playbook"
        title="The first test is Black Friday."
        sub="Thanksgiving is November 26. Whoever takes this seat inherits the biggest week of the year within weeks of starting. This is how I’d run the eight weeks before it, counted back from the event, so nothing that has a lead time starts too late."
      />

      <section className="mb-14 grid gap-6 border-y border-line py-8 sm:grid-cols-3">
        {BFCM_FACTS.map((f) => (
          <Stat key={f.label} value={f.value} label={f.label} note={<a href={BFCM_URL} className="hover:text-ink">{f.source} ↗</a>} />
        ))}
      </section>

      <SectionHead
        title="Eight weeks, five phases"
        sub="Each phase lists the moves by workstream and the leak most likely to cost money in it. The dates count back from Thanksgiving; the lead times are my read."
        right={<Basis kind="inferred" />}
      />

      <ol className="relative space-y-4">
        {PHASES.map((p, i) => (
          <li key={p.name}>
            <Card tone={p.name === "Run" ? "live" : "plain"} className="grid gap-5 lg:grid-cols-[200px_1fr]">
              <div>
                <div className="font-mono text-[11px] text-live">
                  {String(i + 1).padStart(2, "0")} · {p.when}
                </div>
                <div className="u-display mt-1 text-[34px] leading-none text-ink">{p.name}</div>
                <div className="u-num mt-2 text-[12.5px] text-mute">{p.dates}</div>
              </div>
              <div>
                <dl className="grid gap-x-6 gap-y-3 md:grid-cols-2">
                  {p.moves.map((m) => (
                    <div key={m.stream}>
                      <dt className="u-label mb-1">{m.stream}</dt>
                      <dd className="text-[13.5px] leading-[1.55] text-ink">{m.what}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-4 rounded-md border border-live/40 bg-live-wash px-3.5 py-2.5 text-[13px] leading-[1.5] text-ink">
                  <span className="mr-2 font-mono text-[9.5px] uppercase tracking-[0.1em] text-live-deep">Leak</span>
                  {p.leak}
                </div>
              </div>
            </Card>
          </li>
        ))}
      </ol>

      <section className="mt-16 grid gap-4 lg:grid-cols-[1fr_1.2fr]">
        <Card>
          <Eyebrow className="mb-4">The war-room board</Eyebrow>
          <ul className="space-y-2.5">
            {WAR_ROOM.map((w) => (
              <li key={w} className="flex gap-2.5 text-[14px] leading-snug text-ink">
                <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-live" />
                {w}
              </li>
            ))}
          </ul>
        </Card>
        <Card tone="sunk">
          <Eyebrow className="mb-3">Why the sample date matters most</Eyebrow>
          <p className="text-[15px] leading-[1.6] text-ink">
            Content is the one input that can’t be bought late. A sample has to ship, arrive, get used,
            and get posted, and then the winners need days of data before they’re worth putting ad
            money behind. Samples that go out in mid-November produce videos that land after the event.
            Everything else on this page can be corrected in the room; the creator calendar can’t.
          </p>
        </Card>
      </section>
    </div>
  );
}
