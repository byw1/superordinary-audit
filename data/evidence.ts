// evidence.ts — my track record, as the proof layer. Every item traces to my
// own records; numbers are the real ones, never rounded up. Each workflow and
// each JD requirement cites these by id.

export interface Evidence {
  id: string;
  title: string;
  where: string;
  story: string;
  tags: string[];
}

export const EVIDENCE: Evidence[] = [
  {
    id: "jugg-scope",
    title: "Sixth hire to second-in-command",
    where: "Juggernaut Media Partners · VP, Operations",
    story:
      "Joined a talent agency representing 30+ creators (300M+ combined following, brand campaigns for Sony, F1 and Uber) as its sixth person. Became the second-ranking person in the company, owning operations, hiring and finance. Cut the team to 3, then rebuilt it to 10.",
    tags: ["team", "creators", "p&l"],
  },
  {
    id: "talent-hire",
    title: "A first-time hire who closed $500K",
    where: "Juggernaut Media Partners",
    story:
      "Hired and trained a talent manager with no prior experience. She closed $500K in under eight months and was pacing toward $1.5M by year end. Hiring for slope, then building the training around it.",
    tags: ["team", "revenue"],
  },
  {
    id: "deal-90k",
    title: "The $90K deal my CEO passed on",
    where: "Juggernaut Media Partners",
    story:
      "My CEO passed on a brand deal because he didn't recognize the counterparty. It was Anthropic. I took it back and closed it at nearly 2x the creator's standard rate.",
    tags: ["brands", "revenue", "judgment"],
  },
  {
    id: "creator-intel",
    title: "Creator intelligence, built in-house",
    where: "Juggernaut Media Partners",
    story:
      "Rebuilt a competitor's email-tracking product in-house. The insight was that changes to a creator's bio email mattered more than the email itself: a switch from an agency domain to a personal one meant they had just left, which surfaced signings and departures across the market in near real time. A second tool analyzed creators and content to surface brand-deal targets.",
    tags: ["creators", "tooling", "data"],
  },
  {
    id: "crm-week",
    title: "The CRM the team had waited months for, in a week",
    where: "Juggernaut Media Partners",
    story:
      "Delivered a working CRM in one week: pipelines structured over a weekend, eight users onboarded, cost cut from ~$1,100/mo to ~$60/mo. The contractor said the configuration we needed was impossible; I worked out the steps, he implemented them the same day, and we recovered his setup fee.",
    tags: ["tooling", "speed", "cost"],
  },
  {
    id: "influencer-platform",
    title: "The platform behind ~40% of revenue",
    where: "Producer Labs · Head of Operations",
    story:
      "At a music marketing agency serving major record labels, I oversee the team and product buildout of the influencer campaign platform that runs about 40% of company revenue. Internal staff and clients both work in it. Influencer seeding at label scale is the same motion as affiliate sampling: find the right creators, get product (or a song) in their hands, and measure what posts.",
    tags: ["creators", "tooling", "revenue"],
  },
  {
    id: "edit-division",
    title: "Rebuilt a content production team",
    where: "Producer Labs",
    story:
      "Own the edit division end to end. Let go two overpriced editors, moved a non-performing lead through a performance plan, hired a new editing lead and project-based editors, and hired a junior media buyer and a junior campaign manager. The division runs short-form accounts for clients across TikTok and YouTube.",
    tags: ["team", "content"],
  },
  {
    id: "cadence",
    title: "An operating cadence across two continents",
    where: "Producer Labs",
    story:
      "Run a daily sync with the whole company below the two CEOs, weekly one-on-ones with the U.S. team, and set up a chief of staff to run the Philippine team's weeklies. Rebuilt the company's SOPs end to end.",
    tags: ["cadence", "team"],
  },
  {
    id: "gtm-cut",
    title: "Cutting spend that looked like growth",
    where: "Producer Labs",
    story:
      "Inherited two go-to-market contractors producing no ROI: a sales consultant billing ~$15K/month (I audited his workflow and brought the work in-house) and a copywriter billed at ~3x market through a staffing agency. Cut both, put existing clients first because the product wasn't ready to carry growth, and left a ready-to-restart outbound plan on the shelf.",
    tags: ["p&l", "judgment", "cost"],
  },
  {
    id: "collections",
    title: "Cash is a workflow too",
    where: "Producer Labs",
    story:
      "Recovered ~$25K in severely overdue receivables by chasing clients personally, with ~$10K more committed. Run the weekly AR/AP review with the bookkeeper and keep both CEOs updated.",
    tags: ["p&l", "cash"],
  },
  {
    id: "ecom-launch",
    title: "$100K in 16 days",
    where: "Abrupt Collective · Managing Partner",
    story:
      "Found and launched my own e-commerce product in Q4 2020. It hit $100K in revenue in 16 days, scaling faster than inventory cash flow could carry, so I brought in a partner's capital to fund the growth. Velocity is a working-capital problem before it's a marketing win.",
    tags: ["ecommerce", "revenue", "cash"],
  },
  {
    id: "ecom-holdco",
    title: "Zero to 10+ brands, ~$6M plus $1M on Amazon",
    where: "Abrupt Collective",
    story:
      "Advised a partner's e-commerce holding company on strategy, hiring, operations and introductions as it went from zero to 10+ Shopify micro-brands generating ~$6M in one calendar year, plus $1M on Amazon through an introduction I made. He owned and ran it; I advised.",
    tags: ["ecommerce", "brands", "marketplaces"],
  },
  {
    id: "outbound-stack",
    title: "Go-to-market plumbing",
    where: "Juggernaut Media Partners",
    story:
      "Built the outreach stack end to end (Clay, Smartlead, Hunter, Zapmail) and was final approver on every company payment: AP via Ramp, bookkeeping and payroll.",
    tags: ["brands", "tooling", "p&l"],
  },
  {
    id: "legal-ai",
    title: "~$20K a year out of legal spend",
    where: "Juggernaut Media Partners",
    story:
      "Moved contract redlining to AI and cut legal spend by about $20K a year. Creator and brand agreements are high-volume and templated — exactly where review time should be cheap.",
    tags: ["cost", "tooling"],
  },
];

export const EVIDENCE_BY_ID = Object.fromEntries(EVIDENCE.map((e) => [e.id, e]));
