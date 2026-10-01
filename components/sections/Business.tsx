import Reveal from "@/components/Reveal";
import { Basis } from "@/components/ui";
import { BRIDGES, COMPETITORS, EDGE_READ, FANFIX, PLATFORM_SHIFTS, REVENUE_STREAMS } from "@/data/company";
import Chapter from "./Chapter";

const COLS = [
  { head: "Supply", items: ["Partner brands on service terms", "Buy/sell brands, where SuperOrdinary owns the inventory", "Owned and creator-led brands"] },
  { head: "The engine", live: true, items: ["Brand pods: Brand Leads, specialists, offshore VAs", "Creator & affiliate ops across 3M+ affiliates", "In-house LIVE studio and Mega Lives", "Paid media (GMV Max) and Studios microdramas"] },
  { head: "TikTok Shop", items: ["Shop tab & search · 51% of U.S. GMV", "Video · 40%", "LIVE · 8%, and the event-day spike"] },
  { head: "Creators", items: ["Open affiliates", "~2K in the managed roster", "Fanfix creators inside the group"] },
];

export default function Business() {
  return (
    <Chapter
      id="company"
      n="01"
      kicker="The company"
      title={<>A commerce engine with <span className="text-live">creators</span> as the channel.</>}
      sub="Product used to find customers through shelves and search. SuperOrdinary’s bet, since its China years, is that it now finds them through creators, video and LIVE. The company runs the engine in the middle and gets paid five ways."
    >
      <Reveal>
        <div className="grid gap-3 md:grid-cols-4">
          {COLS.map((c) => (
            <div
              key={c.head}
              className={`rounded-2xl p-5 ${c.live ? "surface-dark shadow-[0_30px_60px_-30px_rgba(0,0,0,0.45)]" : "u-card"}`}
            >
              <div className={`mb-4 text-[13px] font-semibold ${c.live ? "text-live" : "text-ink"}`}>{c.head}</div>
              <ul className="space-y-2">
                {c.items.map((i) => (
                  <li key={i} className="text-[13.5px] leading-snug text-ink-2">{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={100}>
        <div className="mt-3 flex flex-wrap gap-2">
          {REVENUE_STREAMS.map((r) => (
            <span key={r.name} title={r.read} className="rounded-full border border-line bg-sunk px-3 py-1.5 text-[12.5px] text-ink-2">
              {r.name}
            </span>
          ))}
          <span className="self-center pl-1 text-[12px] text-faint">The company’s own revenue lines</span>
        </div>
      </Reveal>

      <div className="mt-24 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <h3 className="u-display text-[30px] text-ink sm:text-[36px]">What changed under the business in fifteen months.</h3>
          <p className="mt-4 text-[15px] leading-[1.6] text-ink-2">
            The ban risk is mostly gone. What’s left is the landlord’s risk: fees, ad products, and
            where shoppers now find products.
          </p>
        </Reveal>
        <div className="grid gap-3 sm:grid-cols-2">
          {PLATFORM_SHIFTS.map((s, i) => (
            <Reveal key={s.what} delay={i * 80}>
              <div className="u-card h-full rounded-2xl p-5">
                <p className="text-[14.5px] font-medium leading-snug text-ink">{s.what}</p>
                <p className="mt-3 text-[13.5px] leading-[1.55] text-ink-2">{s.soWhat}</p>
                <a href={s.url} className="mt-3 block text-[11px] text-faint hover:text-ink">{s.source} ↗</a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-24 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <h3 className="u-display text-[30px] text-ink sm:text-[36px]">
            The part competitors don’t have: <span className="text-live">Fanfix</span>.
          </h3>
          <p className="mt-4 text-[15px] leading-[1.6] text-ink-2">
            {FANFIX.facts[0].value} paid out to creators, {FANFIX.facts[2].value} active creators, a{" "}
            {FANFIX.facts[3].value} take rate. A group that owns several of a creator’s income streams
            has an edge in keeping them. The question for the GM is how much of it feeds the Shop.
          </p>
          <div className="mt-4"><Basis kind="inferred" /></div>
        </Reveal>
        <div className="grid gap-3 sm:grid-cols-2">
          {BRIDGES.map((b, i) => (
            <Reveal key={b.name} delay={i * 80}>
              <div className="u-card h-full rounded-2xl p-5">
                <div className="text-[15px] font-medium text-ink">{b.name}</div>
                <p className="mt-2 text-[13.5px] leading-[1.55] text-ink-2">{b.mechanism}</p>
                <p className="mt-3 text-[12.5px] leading-[1.5] text-mute">
                  <span className="text-live-deep">Proof:</span> {b.proof}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-24 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <h3 className="u-display text-[30px] text-ink sm:text-[36px]">The field.</h3>
          <p className="mt-4 text-[15px] leading-[1.6] text-ink-2">{EDGE_READ}</p>
        </Reveal>
        <Reveal delay={80}>
          <div className="u-card divide-y divide-line rounded-2xl">
            {COMPETITORS.map((c) => (
              <div key={c.name} className="grid gap-1 px-5 py-4 sm:grid-cols-[150px_1fr] sm:gap-5">
                <a href={c.url} className="text-[14px] font-medium text-ink hover:text-live-deep">{c.name}</a>
                <div className="text-[13.5px] leading-[1.5] text-ink-2">{c.angle}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Chapter>
  );
}
