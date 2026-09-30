import { getView } from "@/lib/view";
import AccountPnL from "@/components/AccountPnL";
import UnitEconomics from "@/components/UnitEconomics";
import { PageHead, PrepBlock, SectionHead } from "@/components/ui";

export default async function EconomicsPage() {
  const { share } = await getView();
  return (
    <div>
      <PageHead
        kicker="03 · The P&L"
        title="GMV is the headline. Contribution is the job."
        sub="The role owns revenue, gross margin, contribution and forecasting. That starts with one order of one SKU and rolls up to one brand account, then to the book. Both models below are live: move the inputs and watch where margin goes."
      />

      <section>
        <SectionHead
          title="One order"
          sub="Where each dollar of a TikTok Shop sale goes for a brand, and the ad efficiency it needs to break even. Breakeven ROAS is different for every brand, which is why one ROAS target across a portfolio is wrong."
        />
        <UnitEconomics />
      </section>

      <section className="mt-16">
        <SectionHead
          title="One account"
          sub="The same brand, from the agency’s side. SuperOrdinary’s model spans services and marketplace distribution; the economics of each are very different, and the right one changes with scale."
        />
        <AccountPnL />
      </section>

      <section className="mt-16">
        <SectionHead title="What I’d take from this into the job" />
        <ol className="grid gap-4 md:grid-cols-3">
          {[
            ["Price ads on margin, not revenue.", "Every brand gets a breakeven ROAS from its own contribution, and ad budgets are governed by it. One portfolio ROAS target over-spends on thin-margin brands and under-spends on rich ones."],
            ["Report contribution by brand every month.", "GMV rankings and contribution rankings of a book usually don’t match. The gap is where the account-management effort is mispriced."],
            ["Match the model to the stage.", "Service terms for launches, where risk is high and scale unproven. Distribution or a higher GMV share once a brand has proven velocity, where the upside is worth the balance-sheet risk."],
          ].map(([h, b], i) => (
            <li key={h} className="rounded-md border border-line bg-card p-5">
              <div className="font-mono text-[11px] text-live">0{i + 1}</div>
              <div className="mt-2 text-[16px] font-medium leading-snug text-ink">{h}</div>
              <p className="u-prose mt-2 text-[13.5px]">{b}</p>
            </li>
          ))}
        </ol>
      </section>

      {!share && (
      <div className="mt-12">
        <PrepBlock title="If they ask about my P&L experience">
          Be exact. I have not owned a P&L at this scale. What I have: final approval on every
          payment at Juggernaut (AP via Ramp, bookkeeping, payroll), the weekly AR/AP review and ~$25K
          in collections at Producer Labs, cutting ~$15K/month of consultant spend that wasn’t
          producing, and my own product to $100K in 16 days where velocity outran cash and I had to
          bring in capital. Then walk them through this page: I built the model to show I think in
          contribution, not GMV. Ask how they currently report contribution by brand.
        </PrepBlock>
      </div>
      )}
    </div>
  );
}
