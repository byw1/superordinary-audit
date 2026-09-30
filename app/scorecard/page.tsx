import { Basis, Card, Eyebrow, PageHead, SectionHead } from "@/components/ui";
import { BOARD, CADENCE, CONTRIBUTION_TREE, GMV_TREE, type KpiNode } from "@/data/scorecard";

const k$ = (n: number) => `$${Math.round(n / 1000).toLocaleString()}K`;
const pct = (n: number) => `${n > 0 ? "+" : ""}${Math.round(n * 100)}%`;

export default function ScorecardPage() {
  return (
    <div>
      <PageHead
        kicker="04 · Performance & analytics"
        title="One scorecard, same shape for every brand."
        sub="The role asks for the KPIs, reporting and operating cadence to understand what’s driving growth and where to optimize. This is how I’d structure it: two trees that explain the numbers, one board that flags what needs a decision, and a rhythm that turns flags into owned actions."
      />

      <section>
        <SectionHead
          title="Two trees"
          sub="Growth decomposes into channels a team can act on. Profit decomposes into costs someone owns. If a number moves and nobody can say which branch moved it, the reporting isn’t done."
        />
        <div className="grid gap-4 lg:grid-cols-2">
          <Card>
            <Eyebrow className="mb-4">What drives GMV</Eyebrow>
            <Tree node={GMV_TREE} />
          </Card>
          <Card>
            <Eyebrow className="mb-4">What decides contribution</Eyebrow>
            <Tree node={CONTRIBUTION_TREE} />
          </Card>
        </div>
      </section>

      <section className="mt-16">
        <SectionHead
          title="The portfolio board"
          sub="Every brand on one screen, last 28 days. The board’s job is to surface decisions, so the flags come first and the columns are the ones that explain a flag."
          right={<Basis kind="illustrative" />}
        />
        <div className="overflow-x-auto rounded-md border border-line bg-card">
          <table className="w-full min-w-[860px] text-left">
            <thead>
              <tr className="border-b border-line bg-sunk/60">
                {["Brand", "GMV 28d", "vs. plan", "Contribution", "Sample → post", "ROAS / breakeven", "Hero in-stock", "Decision needed"].map((h) => (
                  <th key={h} className="u-label px-3 py-2.5 font-normal">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {BOARD.map((r) => (
                <tr key={r.brand} className="border-b border-line align-top last:border-0">
                  <td className="px-3 py-3">
                    <div className="text-[13.5px] font-medium text-ink">{r.brand}</div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.06em] text-faint">{r.category}</div>
                  </td>
                  <td className="u-num px-3 py-3 text-[13px]">{k$(r.gmv)}</td>
                  <td className={`u-num px-3 py-3 text-[13px] ${r.vsPlan < -0.1 ? "text-live" : ""}`}>{pct(r.vsPlan)}</td>
                  <td className={`u-num px-3 py-3 text-[13px] ${r.contribution < 0.08 ? "text-live" : ""}`}>
                    {Math.round(r.contribution * 100)}%
                  </td>
                  <td className={`u-num px-3 py-3 text-[13px] ${r.sampleToPost < 0.25 ? "text-live" : ""}`}>
                    {Math.round(r.sampleToPost * 100)}%
                  </td>
                  <td className={`u-num px-3 py-3 text-[13px] ${r.roas < r.breakevenRoas ? "text-live" : ""}`}>
                    {r.roas.toFixed(1)}× / {r.breakevenRoas.toFixed(1)}×
                  </td>
                  <td className={`u-num px-3 py-3 text-[13px] ${r.inStock < 0.9 ? "text-live" : ""}`}>
                    {Math.round(r.inStock * 100)}%
                  </td>
                  <td className="max-w-[240px] px-3 py-3 text-[12.5px] leading-snug text-ink-2">
                    {r.flag ?? <span className="text-faint">—</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="u-prose mt-4 max-w-[80ch] text-[13.5px]">
          Brands and numbers are invented to show the report’s shape. Read it the way I would: Brand B
          is the second-biggest account and the one losing ground. Its ads run below breakeven and its
          samples aren’t turning into posts, so the fix is the creator funnel, not more budget. Brand
          E is small and negative; that’s a pricing-or-exit conversation, not an optimization.
        </p>
      </section>

      <section className="mt-16">
        <SectionHead
          title="The operating rhythm"
          sub="Each review has one job. Daily catches problems while they’re cheap; weekly assigns owners; monthly checks the P&L; quarterly is the brand conversation."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {CADENCE.map((c) => (
            <Card key={c.when}>
              <div className="u-display text-[30px] text-ink">{c.when}</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.08em] text-faint">{c.who}</div>
              <ul className="mt-4 space-y-2">
                {c.what.map((w) => (
                  <li key={w} className="flex gap-2 text-[13.5px] leading-snug text-ink-2">
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-live" />
                    {w}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

function Tree({ node, depth = 0 }: { node: KpiNode; depth?: number }) {
  return (
    <div className={depth > 0 ? "border-l border-line-2 pl-4" : ""}>
      <div className="py-1.5">
        <span className={`${depth === 0 ? "text-[17px] font-semibold" : depth === 1 ? "text-[14.5px] font-medium" : "text-[13.5px]"} text-ink`}>
          {node.name}
        </span>
        {node.note && <span className="ml-2 text-[12.5px] text-mute">{node.note}</span>}
      </div>
      {node.children && (
        <div className={depth === 0 ? "mt-1 space-y-1" : "space-y-0"}>
          {node.children.map((c) => (
            <Tree key={c.name} node={c} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}
