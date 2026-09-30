import { getView } from "@/lib/view";
import BusinessMap from "@/components/BusinessMap";
import { Basis, Card, Eyebrow, PageHead, PrepBlock, SectionHead, Stat } from "@/components/ui";
import {
  COMPETITORS,
  EDGE_READ,
  HEADLINE_FACTS,
  MARKET_FACTS,
  ORG_SIGNALS,
  PLATFORM_SHIFTS,
  REVENUE_STREAMS,
  TIMELINE,
} from "@/data/company";
import { WORKFLOWS } from "@/data/workflows";
import { TLink } from "@/lib/mode";

export default async function Home() {
  const { share } = await getView();
  return (
    <div>
      <PageHead
        kicker="01 · Overview"
        title={
          <>
            SuperOrdinary,
            <br />
            <em className="italic text-live">read like an operator.</em>
          </>
        }
        sub="An outside-in audit of the TikTok Shop business, organized around the GM role: how the company makes money, the workflows the seat owns, the unit economics under them, and how I’d run it. Built from public sources. Where something is my read rather than a fact, it says so."
      />

      <section className="mb-16 grid grid-cols-2 gap-x-6 gap-y-8 border-y border-line py-8 lg:grid-cols-4">
        {HEADLINE_FACTS.map((f) => (
          <Stat key={f.label} value={f.value} label={f.label} note={f.source} />
        ))}
      </section>

      <section>
        <SectionHead
          title="How the business works"
          sub="Product used to find customers through shelves and search. SuperOrdinary’s bet, since its China years, is that it now finds them through creators, video and LIVE, and the company runs the engine in the middle."
        />
        <BusinessMap />
      </section>

      <section className="mt-16 grid gap-4 lg:grid-cols-[1fr_1.1fr]">
        <Card>
          <Eyebrow className="mb-4">Five ways it gets paid</Eyebrow>
          <ul className="divide-y divide-line">
            {REVENUE_STREAMS.map((r) => (
              <li key={r.name} className="py-3 first:pt-0 last:pb-0">
                <div className="text-[14.5px] font-medium text-ink">{r.name}</div>
                <div className="mt-0.5 text-[13px] leading-[1.5] text-ink-2">{r.read}</div>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-[12px] text-mute">Labels are the company’s own, from its investor site. Descriptions are mine.</div>
        </Card>
        <Card>
          <Eyebrow className="mb-4">The market it rides</Eyebrow>
          <div className="grid grid-cols-2 gap-x-5 gap-y-6">
            {MARKET_FACTS.map((f) => (
              <div key={f.label}>
                <div className="u-display text-[32px] leading-none text-ink">{f.value}</div>
                <div className="mt-1.5 text-[13px] leading-snug text-ink-2">{f.label}</div>
                <a href={f.url} className="mt-1 block font-mono text-[9.5px] uppercase tracking-[0.08em] text-faint hover:text-ink">
                  {f.source} ↗
                </a>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section className="mt-16">
        <SectionHead
          title="What changed under the business"
          sub="Four platform shifts in the last fifteen months, and what each one means for the person running the P&L."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {PLATFORM_SHIFTS.map((s) => (
            <Card key={s.what}>
              <p className="text-[15px] font-medium leading-snug text-ink">{s.what}</p>
              <p className="u-prose mt-3 text-[14px]">
                <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-live-deep">So what · </span>
                {s.soWhat}
              </p>
              <a href={s.url} className="mt-3 block font-mono text-[9.5px] uppercase tracking-[0.08em] text-faint hover:text-ink">
                {s.source} ↗
              </a>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <SectionHead
          title="The field"
          sub="Who else is selling TikTok Shop growth to the same brands. Most “top agency” lists are published by agencies, so their numbers are claims, not rankings."
        />
        <div className="rounded-md border border-line bg-card">
          {COMPETITORS.map((c, i) => (
            <div
              key={c.name}
              className={`grid gap-2 px-5 py-4 md:grid-cols-[170px_1.3fr_1fr] md:gap-6 ${i ? "border-t border-line" : ""}`}
            >
              <div>
                <div className="text-[14.5px] font-medium text-ink">{c.name}</div>
                <a href={c.url} className="font-mono text-[9.5px] uppercase tracking-[0.08em] text-faint hover:text-ink">
                  {c.source} ↗
                </a>
              </div>
              <div className="text-[13.5px] leading-[1.55] text-ink-2">{c.profile}</div>
              <div className="text-[13.5px] leading-[1.55] text-ink">{c.angle}</div>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <Card tone="live">
            <div className="mb-2 flex items-center gap-3">
              <Eyebrow className="text-live-deep">Where SuperOrdinary is different</Eyebrow>
              <Basis kind="inferred" />
            </div>
            <p className="text-[15px] leading-[1.6] text-ink">{EDGE_READ}</p>
          </Card>
        </div>
      </section>

      <section className="mt-16">
        <SectionHead
          title="Where the seat sits"
          sub="What the public job postings say about how the TikTok Shop team is built."
        />
        <div className="rounded-md border border-line bg-card">
          {ORG_SIGNALS.map((o, i) => (
            <div
              key={o.role}
              className={`grid gap-2 px-5 py-4 md:grid-cols-[240px_1fr_auto] md:items-baseline md:gap-6 ${i ? "border-t border-line" : ""}`}
            >
              <div className={`text-[14.5px] font-medium ${i === 0 ? "text-live-deep" : "text-ink"}`}>{o.role}</div>
              <div className="text-[13.5px] leading-[1.55] text-ink-2">{o.detail}</div>
              <Basis kind={o.basis} />
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <SectionHead title="Nine years in eight lines" />
        <ol className="relative border-l border-line-2 pl-6">
          {TIMELINE.map((t) => (
            <li key={t.year} className="relative pb-5 last:pb-0">
              <span className="absolute -left-[29px] top-[7px] h-[9px] w-[9px] rounded-full border-2 border-paper bg-live" />
              <div className="grid gap-1 sm:grid-cols-[64px_1fr] sm:gap-4">
                <span className="u-num text-[14px] font-semibold text-ink">{t.year}</span>
                <span className="text-[14px] leading-[1.55] text-ink-2">{t.what}</span>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16">
        <SectionHead
          title="Where to go from here"
          sub="The rest of the audit follows the job description."
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["/engine", "The workflows", `${WORKFLOWS.length} workflows the role owns, with leaks, KPIs and the first change I’d make.`],
            ["/economics", "The P&L", "Live models: one order’s contribution, and one account on service vs. buy/sell terms."],
            ["/scorecard", "The scorecard", "KPI trees, a portfolio board, and the operating rhythm."],
            ["/fanfix", "Fanfix and the group", "Where the creator side of the company can feed the commerce side."],
            ["/plan", "First 90 days", "Learn the book, fix the biggest leak, then grow. Plus the questions I’d ask."],
            ["/fit", "Fit", "The posting’s requirements, answered with evidence."],
          ].map(([href, t, d]) => (
            <TLink
              key={href}
              href={href}
              className="group rounded-md border border-line bg-card p-5 transition-colors hover:border-ink"
            >
              <div className="flex items-baseline justify-between">
                <span className="text-[16px] font-medium text-ink">{t}</span>
                <span className="font-mono text-live transition-transform group-hover:translate-x-0.5">→</span>
              </div>
              <p className="mt-2 text-[13.5px] leading-[1.5] text-ink-2">{d}</p>
            </TLink>
          ))}
        </div>
      </section>

      {!share && (
      <div className="mt-12">
        <PrepBlock title="Who’s who, and what to handle carefully">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="text-ink">Julian Reis</strong> (founder, CEO): ex-macro trader, co-founded Skin
              Laundry. Public themes: “China is four years ahead,” TikTok Shop from $15B to $500B, brand
              sites becoming obsolete, brands must think like media companies, the first $10M
              livestream. His podcast is <em>On the Record with Julian Reis</em>; listen to the episode with
              Gary Sang and Emma Rafalski before the interview.
            </li>
            <li>
              <strong className="text-ink">Derek Trau</strong> (co-founder, COO): the posting says the GM
              partners with the COO. Likely in the loop.
            </li>
            <li>
              <strong className="text-ink">Gary Sang</strong> (VP TikTok Operations): ex-Orca, credited with
              TikTok Shop U.S.’s first-ever sale. The GM role may sit above or beside him. Don’t guess out
              loud; ask how the seats relate.
            </li>
            <li>
              <strong className="text-ink">Laura Sposato</strong> (SVP Finance): the P&L partner.
            </li>
            <li>
              <strong className="text-ink">Handle carefully:</strong> the 2026 outlook ($300M) is below the
              $350M the company expected in 2023; headcount went from 500+ to ~300 (the posting itself
              says 140–150, likely U.S. only); both Fanfix founders have left. Know these, don’t lead with
              them. If revenue comes up, ask whether it’s booked gross or net and how much is TikTok Shop.
            </li>
            <li>
              <strong className="text-ink">Upside talking point:</strong> the NYSE plan means the GM’s
              scorecard becomes what public investors eventually read. KPI definitions and forecast
              accuracy matter more here than at a private agency.
            </li>
          </ul>
        </PrepBlock>
      </div>
      )}
    </div>
  );
}
