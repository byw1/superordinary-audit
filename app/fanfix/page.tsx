import { getView } from "@/lib/view";
import { Basis, Card, Eyebrow, PageHead, PrepBlock, SectionHead, Stat } from "@/components/ui";
import { BRIDGES, FANFIX } from "@/data/company";

const LADDER = [
  ["Discovered", "A creator starts selling as an open TikTok Shop affiliate."],
  ["Managed", "Top sellers move into the managed roster: better commission, repeat samples."],
  ["Monetized", "Fanfix adds subscription income the creator owns."],
  ["On camera", "LIVE hosting and Studios microdramas add paid production work."],
  ["Owner", "Creators with proven fan spend launch their own products through the engine."],
];

export default async function FanfixPage() {
  const { share } = await getView();
  return (
    <div>
      <PageHead
        kicker="05 · Fanfix and the group"
        title="The creator side of the company, and where it meets the Shop."
        sub="SuperOrdinary is not only a TikTok Shop operator. It owns a creator monetization platform, a microdrama studio, and an incubator for creator-led brands. For the GM, the question is how much of that feeds the commerce engine, and how to measure it."
      />

      <section className="grid gap-4 lg:grid-cols-[1.1fr_1fr]">
        <Card>
          <Eyebrow className="mb-3">What Fanfix is</Eyebrow>
          <p className="text-[15.5px] leading-[1.6] text-ink">{FANFIX.what}</p>
          <p className="u-prose mt-3 text-[14px]">{FANFIX.leader}</p>
        </Card>
        <Card>
          <div className="grid grid-cols-2 gap-x-5 gap-y-6">
            {FANFIX.facts.map((f) => (
              <Stat key={f.label} value={f.value} label={f.label} note={f.source} />
            ))}
          </div>
        </Card>
      </section>

      <section className="mt-16">
        <SectionHead
          title="One creator, five ways to earn inside the group"
          sub="The group owns every rung of a creator’s career ladder. Each rung up means more income for the creator, and more of their attention for the group’s brands."
          right={<Basis kind="inferred" />}
        />
        <ol className="grid gap-2 md:grid-cols-5">
          {LADDER.map(([t, d], i) => (
            <li
              key={t}
              className={`rounded-md border border-line bg-card p-4 ${["md:mt-10", "md:mt-7", "md:mt-5", "md:mt-2.5", "md:mt-0"][i]}`}
            >
              <div className="font-mono text-[10.5px] text-live">0{i + 1}</div>
              <div className="mt-1 text-[15px] font-medium text-ink">{t}</div>
              <p className="mt-1.5 text-[12.5px] leading-[1.5] text-ink-2">{d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16">
        <SectionHead
          title="Four bridges to the Shop"
          sub="Each one is a hypothesis with a metric that would prove it and a risk that would sink it. None of this is inside knowledge; it’s where I’d look first."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {BRIDGES.map((b) => (
            <Card key={b.name}>
              <div className="u-display text-[26px] text-ink">{b.name}</div>
              <p className="u-prose mt-2 text-[14px]">{b.mechanism}</p>
              <dl className="mt-4 space-y-3 border-t border-line pt-4">
                <div>
                  <dt className="u-label mb-1">What would prove it</dt>
                  <dd className="text-[13.5px] leading-[1.5] text-ink">{b.proof}</dd>
                </div>
                <div>
                  <dt className="u-label mb-1 text-live-deep">What would sink it</dt>
                  <dd className="text-[13.5px] leading-[1.5] text-ink">{b.risk}</dd>
                </div>
              </dl>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <Card tone="live">
          <Eyebrow className="mb-3 text-live-deep">Why this part of the business is familiar to me</Eyebrow>
          <p className="text-[15.5px] leading-[1.6] text-ink">
            I spent a year as second-in-command at a talent agency representing 30+ creators with a
            combined 300M+ following, running brand deals, hiring, and finance. Creators stack income,
            compare offers, and move when someone else treats them better. I built a tool that caught
            those moves across the market in near real time. A group that owns several of a creator’s
            income streams has an edge in keeping them, but only if someone measures which creators
            are drifting.
          </p>
        </Card>
      </section>

      {!share && (
      <div className="mt-12">
        <PrepBlock title="The Fanfix connection">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              My contact at Fanfix is the warm path in. Confirm his exact title before naming him: Hired has
              Connor McCrory as President of Fanfix; public releases name Dylan Harari as CEO.
            </li>
            <li>
              Ask him before the interview: how are Fanfix creators routed into TikTok Shop affiliate and
              LIVE programs today, if at all? Who owns that handoff?
            </li>
            <li>
              Know, don’t lead with: both founders have left (Gestetner in April 2025, Pompan around March
              2026), and one report cited creator complaints about fees and billing. The public user count
              is inconsistent (6.3M in March, “63+ million” in June 2026).
            </li>
            <li>
              Brand-safety optics of a subscription-messaging platform next to Disney and Crocs are a real
              question for the group. Don’t raise it unprompted.
            </li>
          </ul>
        </PrepBlock>
      </div>
      )}
    </div>
  );
}
