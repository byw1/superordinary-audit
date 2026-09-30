// fit.ts — the role's requirements, answered with evidence. "gap" is written
// for the private prep view only; the share view shows the evidence.

export interface Requirement {
  req: string;
  answer: string;
  evidence: string[];
  gap?: string; // PREP ONLY — the honest distance, and how I'd handle it
}

export const REQUIREMENTS: Requirement[] = [
  {
    req: "10+ years in e-commerce, social commerce or marketplaces, with significant leadership",
    answer:
      "Seven years operating across e-commerce, creator talent and marketing agencies: my own consulting and operating company (2019–2025), then second-in-command at a creator talent agency, now Head of Operations at a music marketing agency.",
    evidence: ["ecom-holdco", "jugg-scope", "cadence"],
    gap: "I don’t have ten years and they will notice. Don’t argue the number. Say: “I’m earlier in my career than the posting asks for. What I bring is that I’ve run the creator side and the operating side at once, and I built this audit to show how I’d run yours.” Then let the work make the case.",
  },
  {
    req: "Deep understanding of TikTok Shop and social commerce: creators, affiliates, content, LIVE, paid, promotions",
    answer:
      "I’ve worked on the creator side of this market for two years: a roster of 30+ creators at 300M+ combined following, a short-form content team, and an influencer seeding platform that carries ~40% of an agency’s revenue. The workflows page is how I’d run the Shop side.",
    evidence: ["influencer-platform", "creator-intel", "edit-division"],
    gap: "I have not run a TikTok Shop Seller Center or an affiliate program at scale. Say so plainly, then point to the creator-side experience: I know what makes creators post and what makes them leave, which is the hardest part of the affiliate engine to learn from a dashboard.",
  },
  {
    req: "Owning or significantly influencing a P&L against revenue, margin and profitability goals",
    answer:
      "Final approver on every payment at Juggernaut; run the weekly AR/AP review at Producer Labs and personally recovered ~$25K in overdue receivables; cut ~$15K/month in consultant spend that wasn’t producing. On my own product, velocity outran cash at $100K in 16 days and I brought in capital to fund it.",
    evidence: ["collections", "gtm-cut", "ecom-launch", "outbound-stack"],
    gap: "Influenced, not owned, at a company this size. Lead with how I think about contribution (the economics page) rather than claiming a P&L title I haven’t held.",
  },
  {
    req: "Leading and scaling high-performing, cross-functional teams",
    answer:
      "At Juggernaut I cut the team to 3 and rebuilt it to 10, including a first-time hire who closed $500K in under eight months. At Producer Labs I rebuilt the edit division and hired across editing, media buying and campaign management, with a daily sync across U.S. and Philippine teams.",
    evidence: ["jugg-scope", "talent-hire", "edit-division", "cadence"],
    gap: "My teams have been 10–15 people. A GM here may inherit several managers. Talk about how I’d run managers: the weekly scorecard with owners, and setting up a chief of staff to run the Philippine weeklies so I didn’t have to.",
  },
  {
    req: "Strong commercial instincts, working directly with brands and partners",
    answer:
      "Brand campaigns with Sony, F1 and Uber at Juggernaut. I rescued a $90K deal my CEO had passed on because he didn’t recognize the counterparty (Anthropic), and closed it at nearly 2x the creator’s standard rate.",
    evidence: ["deal-90k", "talent-hire"],
  },
  {
    req: "A track record of meaningful revenue growth, turning strategy into execution",
    answer:
      "My own e-commerce product to $100K in 16 days. Advised a partner’s holding company from zero to 10+ Shopify brands and ~$6M in a year, plus $1M on Amazon through an introduction I made.",
    evidence: ["ecom-launch", "ecom-holdco"],
  },
  {
    req: "Analytical and financial acumen: unit economics, decisions from performance data",
    answer:
      "The economics and scorecard pages in this audit are the work sample: breakeven ROAS per brand, service vs. distribution economics by scale, and a portfolio board built to surface decisions.",
    evidence: ["collections", "gtm-cut"],
  },
  {
    req: "Entrepreneurial mindset, comfort in ambiguity, building structure where it doesn’t exist",
    answer:
      "I build the systems I need when they don’t exist: a CRM in a week that cut the monthly cost from ~$1,100 to ~$60, creator-intelligence tools, and the internal platforms an agency runs on, using AI-assisted development alongside the developers.",
    evidence: ["crm-week", "creator-intel", "legal-ai"],
  },
];

/** PREP ONLY — the pushback I should expect, and my answer. */
export const OBJECTIONS = [
  {
    push: "You’re 25. This is a VP seat.",
    answer:
      "Don’t get defensive, and don’t pretend otherwise. “You’re right that I’m early for the title. I’m not asking you to take that on faith. I’m asking you to judge the thinking in this audit and the track record behind it.” Be ready for them to see me at a Director or Senior Manager level under the GM, and decide before the call whether I’d take it. (I should: it’s the same engine, and I’d be in the building.)",
  },
  {
    push: "You haven’t run a TikTok Shop.",
    answer:
      "True. I’ve run the creator side of the market, which is the part that’s hardest to learn: 30+ creators, a seeding platform carrying ~40% of revenue, a short-form content team. The Seller Center is learnable in weeks; knowing why a creator posts, stalls or leaves takes years.",
  },
  {
    push: "Short tenures: 11 months, then 5 months.",
    answer:
      "Seven years at my own company is the anchor. Juggernaut ended on good terms and I still advise the CEO informally. Producer Labs is in good shape; I’m looking for the highest-leverage seat, and this is a step up, not a step sideways.",
  },
  {
    push: "Agencies aren’t marketplaces.",
    answer:
      "SuperOrdinary is partly an agency. Swap the deliverable from campaigns to Shop GMV and the operating problems are the same: utilization, throughput per account manager, scope, and pricing the service against the value it creates.",
  },
];
