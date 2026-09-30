import { Basis } from "@/components/ui";

/**
 * How product, content and money move through the business, in four columns.
 * Built from the company's own descriptions; the column boundaries are my read.
 */
const COLS = [
  {
    head: "Supply",
    sub: "Where the product comes from",
    items: [
      ["Partner brands on service terms", "Fees plus a share of GMV; the brand owns the inventory."],
      ["Buy/sell brands", "SuperOrdinary buys inventory and earns the resale margin, as it does on Amazon."],
      ["Owned & creator-led brands", "Incubated in-house for TikTok-native launches."],
    ],
  },
  {
    head: "The engine",
    sub: "What the GM runs",
    live: true,
    items: [
      ["Brand pods", "Brand Leads, specialists and offshore VAs per account cluster."],
      ["Creator & affiliate ops", "Sampling, outreach, commission terms across 3M+ affiliates."],
      ["LIVE studio", "In-house hosts, daily lives and multi-brand Mega Lives."],
      ["Paid & content", "GMV Max, creative, and Studios microdramas."],
    ],
  },
  {
    head: "TikTok Shop",
    sub: "Where demand converts",
    items: [
      ["Shop tab & search", "51% of attributed U.S. GMV in H1 2026."],
      ["Video", "40%: affiliate and brand short-form."],
      ["LIVE", "8%, and the fastest-growing format at events."],
    ],
  },
  {
    head: "Creators",
    sub: "Who carries the content",
    items: [
      ["Open affiliates", "Reached through TikTok’s affiliate tools and open plans."],
      ["Managed roster", "~2K creators in active relationships."],
      ["Fanfix", "Creators monetizing subscriptions inside the group."],
    ],
  },
];

export default function BusinessMap() {
  return (
    <div>
      <div className="grid gap-3 md:grid-cols-4">
        {COLS.map((c, i) => (
          <div key={c.head} className="relative flex flex-col">
            <div
              className={`rounded-t-md border border-b-0 px-4 pb-2 pt-3 ${
                c.live ? "border-ink bg-ink text-paper" : "border-line bg-sunk"
              }`}
            >
              <div className="text-[15px] font-semibold">{c.head}</div>
              <div className={`font-mono text-[9.5px] uppercase tracking-[0.08em] ${c.live ? "text-paper/70" : "text-faint"}`}>
                {c.sub}
              </div>
            </div>
            <div
              className={`flex-1 space-y-2 rounded-b-md border p-3 ${
                c.live ? "border-ink bg-card" : "border-line bg-card"
              }`}
            >
              {c.items.map(([t, d]) => (
                <div key={t} className="rounded-sm border border-line bg-paper px-3 py-2">
                  <div className="text-[13px] font-medium leading-snug text-ink">{t}</div>
                  <div className="mt-0.5 text-[12px] leading-[1.45] text-ink-2">{d}</div>
                </div>
              ))}
            </div>
            {i < COLS.length - 1 && (
              <span
                aria-hidden
                className="absolute -right-[11px] top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full border border-line-2 bg-paper font-mono text-[11px] text-live md:flex"
              >
                {i === 2 ? "←" : "→"}
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="mt-4 grid gap-3 rounded-md border border-live/40 bg-live-wash p-4 md:grid-cols-[auto_1fr] md:items-center md:gap-5">
        <div className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-live-deep">How the money comes back</div>
        <p className="text-[13.5px] leading-[1.55] text-ink">
          Shoppers pay TikTok. TikTok takes its referral fee and pays creators their commission. The
          rest goes to the seller of record: the brand on service accounts, which then pays
          SuperOrdinary’s fees and GMV share, or SuperOrdinary itself on buy/sell and owned brands.
          TikTok also pays partner incentives for growth.
        </p>
      </div>
      <div className="mt-3 flex items-center gap-2">
        <Basis kind="inferred" />
        <span className="text-[12px] text-mute">
          Components are from the company’s investor site and job postings; the arrangement is my read.
        </span>
      </div>
    </div>
  );
}
