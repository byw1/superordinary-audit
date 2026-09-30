// scorecard.ts — the KPI tree and a sample portfolio board. The board's brands
// and numbers are invented to show the shape of the report, and labelled so.

export interface KpiNode {
  name: string;
  note?: string;
  children?: KpiNode[];
}

export const GMV_TREE: KpiNode = {
  name: "GMV",
  note: "Orders × average order value",
  children: [
    {
      name: "Affiliate video",
      note: "Creators posting shoppable video",
      children: [
        { name: "Active selling creators" },
        { name: "Posts per creator" },
        { name: "GMV per post" },
      ],
    },
    {
      name: "LIVE",
      note: "Brand, agency and creator streams",
      children: [{ name: "LIVE hours" }, { name: "GMV per hour" }],
    },
    {
      name: "Paid amplification",
      note: "GMV Max, Spark, LIVE ads",
      children: [{ name: "Spend" }, { name: "ROAS" }],
    },
    {
      name: "Shop tab & search",
      note: "Demand that finds the product directly",
      children: [{ name: "Listing conversion" }, { name: "Reviews & rating" }],
    },
  ],
};

export const CONTRIBUTION_TREE: KpiNode = {
  name: "Contribution",
  note: "What’s left after every variable cost",
  children: [
    { name: "Net revenue", note: "GMV − discounts − returns" },
    { name: "Platform fees", note: "Referral fee on each order" },
    { name: "Creator cost", note: "Commission + samples + retainers" },
    { name: "Media", note: "Ads, measured against breakeven ROAS" },
    { name: "Fulfillment", note: "FBT or 3PL per order" },
    { name: "Service cost", note: "Team and LIVE hours on the account" },
  ],
};

export interface BoardRow {
  brand: string;
  category: string;
  gmv: number; // last 28 days
  vsPlan: number; // −0.12 = 12% behind
  contribution: number; // share of net revenue
  sampleToPost: number;
  roas: number;
  breakevenRoas: number;
  inStock: number;
  flag?: string;
}

export const BOARD: BoardRow[] = [
  { brand: "Brand A", category: "Skincare", gmv: 612_000, vsPlan: 0.08, contribution: 0.19, sampleToPost: 0.41, roas: 4.1, breakevenRoas: 2.6, inStock: 0.99 },
  { brand: "Brand B", category: "Haircare", gmv: 488_000, vsPlan: -0.14, contribution: 0.07, sampleToPost: 0.22, roas: 2.4, breakevenRoas: 2.9, inStock: 0.97, flag: "Ads below breakeven; sample waves not converting to posts" },
  { brand: "Brand C", category: "Supplements", gmv: 305_000, vsPlan: 0.21, contribution: 0.16, sampleToPost: 0.38, roas: 3.3, breakevenRoas: 2.2, inStock: 0.81, flag: "Hero SKU at 81% in-stock during a velocity spike" },
  { brand: "Brand D", category: "Cosmetics", gmv: 241_000, vsPlan: -0.03, contribution: 0.12, sampleToPost: 0.35, roas: 3.0, breakevenRoas: 2.5, inStock: 0.98 },
  { brand: "Brand E", category: "Fragrance", gmv: 96_000, vsPlan: -0.31, contribution: -0.04, sampleToPost: 0.18, roas: 1.9, breakevenRoas: 3.4, inStock: 1.0, flag: "Negative contribution; decide: fix, reprice, or exit" },
  { brand: "Brand F", category: "Personal care", gmv: 74_000, vsPlan: 0.12, contribution: 0.14, sampleToPost: 0.44, roas: 3.6, breakevenRoas: 2.4, inStock: 0.99 },
];

export const CADENCE = [
  {
    when: "Daily",
    who: "Account leads, 15 min",
    what: ["GMV pace vs. plan by brand", "Hero-SKU stock and late-dispatch alerts", "Posts over the conversion threshold → Spark queue", "Yesterday’s LIVE GMV per hour"],
  },
  {
    when: "Weekly",
    who: "GM + team leads, 60 min",
    what: ["Brand scorecards, red flags first", "Creator funnel: shipped → posted → sold", "Ads vs. breakeven ROAS", "Three owned actions per flagged brand"],
  },
  {
    when: "Monthly",
    who: "GM + Finance",
    what: ["P&L by brand and service line", "Contribution vs. GMV ranking of the book", "Headcount vs. book of business", "Reforecast"],
  },
  {
    when: "Quarterly",
    who: "GM + brand executives",
    what: ["Brand QBRs: results and next plan", "Expansion: SKUs, categories, channels", "Renewal and model review (service vs. distribution)"],
  },
];
