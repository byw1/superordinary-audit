// workflows.ts — the TikTok Shop operating engine, broken into the workflows a
// GM owns. Mechanics (sampling, GMV Max, FBT, LIVE, mega-campaigns)
// are how TikTok Shop works publicly. How SuperOrdinary staffs and runs each
// one internally is an outside-in read, and every page says so.

export interface Stage {
  name: string;
  owner: string; // the team that typically holds it
  detail: string;
}

export interface Leak {
  at: number; // index into stages — where value leaks
  what: string;
}

export interface Workflow {
  id: string;
  n: string; // "01"
  name: string;
  jd: string; // the "What You'll Own" line it maps to
  oneLiner: string;
  stages: Stage[];
  leaks: Leak[];
  kpis: { name: string; why: string }[];
  myMove: string;
  evidence: string[];
}

export const WORKFLOWS: Workflow[] = [
  {
    id: "win",
    n: "01",
    name: "Win and launch a brand",
    jd: "Sales & Growth · Brand Leadership",
    oneLiner:
      "From first pitch to first sale. The launch window decides whether a brand renews, so the handoff from sales to operations is where most of the value is made or lost.",
    stages: [
      { name: "Prospect & qualify", owner: "Sales / BD", detail: "Category fit, margin headroom for commissions, inventory depth, existing TikTok presence, and whether the hero SKU demos well on video." },
      { name: "Shop audit & pitch", owner: "Sales + Strategy", detail: "Audit the brand's current Shop (or its competitors'), size the opportunity, and propose the model: service fees, a share of GMV, or buy/sell, where SuperOrdinary owns the inventory." },
      { name: "Contract & model", owner: "Leadership + Finance", detail: "Commercial terms, who funds samples and ads, inventory ownership, and exit clauses. The model chosen here sets the P&L for the life of the account." },
      { name: "Shop build", owner: "Account Mgmt + Ops", detail: "Seller Center setup, catalog and listings, pricing parity, warehouse and FBT decisions, brand assets and claims review." },
      { name: "Launch plan", owner: "Account Mgmt", detail: "First 90 days: creator seeding wave, LIVE schedule, ads budget, first promo, and the GMV targets the renewal will be judged on." },
      { name: "Handoff to run", owner: "Account Mgmt", detail: "The account moves into the weekly operating cadence with a named owner, a scorecard, and a QBR date." },
    ],
    leaks: [
      { at: 0, what: "Signing brands whose margin can't absorb creator commission plus ads. They look like GMV and churn as losses." },
      { at: 4, what: "Promising launch GMV the creator engine can't deliver in 90 days, so the renewal starts behind." },
    ],
    kpis: [
      { name: "Win rate by category", why: "Shows where the offer is strongest and where sales is wasting cycles." },
      { name: "Days to first sale", why: "The first proof point for the brand, and a direct read on onboarding friction." },
      { name: "Day-90 GMV vs. plan", why: "The number the renewal conversation will actually be about." },
      { name: "Net revenue retention", why: "Growth from existing brands. Cheaper than new logos and a cleaner read on whether the service works." },
    ],
    myMove:
      "Put a margin gate in qualification: a brand has to show it can fund commission, samples and ads at target ROAS before sales can sign it. Then make the launch plan a standard, scored artifact rather than a bespoke deck, so every brand enters the run-state with the same scorecard.",
    evidence: ["deal-90k", "ecom-holdco", "outbound-stack"],
  },
  {
    id: "creators",
    n: "02",
    name: "Run the creator and affiliate engine",
    jd: "TikTok Shop Operations · Social Commerce Strategy",
    oneLiner:
      "The core of the business. Every step from finding a creator to paying their commission is a conversion rate, and the rates multiply.",
    stages: [
      { name: "Find creators", owner: "Specialists + VAs", detail: "Affiliate marketplace search, open and targeted collaborations, the agency's own creator network, and lookalikes of whoever is already selling the product." },
      { name: "Invite & approve samples", owner: "Specialists", detail: "Targeted invitations with commission terms; approve or reject free-sample requests against a creator's history of posting and selling." },
      { name: "Ship samples", owner: "VAs + 3PL", detail: "Sample fulfillment, tracking, and cost logging. Samples are real COGS plus shipping, and they add up fast." },
      { name: "Content posts", owner: "Creator", detail: "Creator posts a shoppable video or goes LIVE. Brief quality and product-demo hooks decide whether it converts." },
      { name: "GMV & commission", owner: "Platform", detail: "Attributed orders pay the creator's commission rate, which is set per product and can be raised for top creators." },
      { name: "Re-activate & tier", owner: "Brand Lead + Specialists", detail: "Top sellers get higher commission, retainers, exclusive drops, and repeat samples. Non-posters are cut from future sampling." },
    ],
    leaks: [
      { at: 2, what: "Samples that never become a post. The single biggest silent cost in the engine, and usually untracked." },
      { at: 3, what: "Posts with no product demo or a weak hook. Content volume without conversion." },
      { at: 5, what: "Top creators left on default terms, then poached by a competing brand's higher commission." },
    ],
    kpis: [
      { name: "Sample → post rate", why: "The first multiplier. Everything downstream is capped by it." },
      { name: "GMV per sample shipped", why: "Makes the sample budget an investment you can rank, not a cost you absorb." },
      { name: "Active selling creators", why: "Creators with attributed GMV in the last 30 days. Breadth of the engine." },
      { name: "Top-20 creator concentration", why: "How exposed GMV is to a few creators leaving or going quiet." },
    ],
    myMove:
      "Instrument the funnel per brand, per creator: sample shipped, posted, sold. Then rank creators by GMV per sample and route the next sample wave accordingly. Give the offshore VA team a scored queue instead of a list, and build an early-warning read on creators going quiet or moving to a competitor, the same way I tracked talent moving between agencies.",
    evidence: ["influencer-platform", "creator-intel", "cadence"],
  },
  {
    id: "content",
    n: "03",
    name: "Amplify what's already working",
    jd: "Marketing & Merchandising · Performance & Analytics",
    oneLiner:
      "Since July 2025, GMV Max is the only campaign type for Shop ads. The algorithm picks the audience; the operator’s levers are which content it gets and what return it’s told to hit.",
    stages: [
      { name: "Spot winners", owner: "Paid + Creator", detail: "Surface affiliate and brand videos with strong early conversion in the first 24–72 hours." },
      { name: "Authorize content", owner: "Specialists", detail: "Get creators’ authorization so their best posts can run in the brand’s ad campaigns on their own handle." },
      { name: "Set the ROI target", owner: "Paid media", detail: "Product and LIVE GMV Max campaigns, with the ROI target and budget set from the brand’s contribution margin." },
      { name: "Refresh creative", owner: "Creative + Creator", detail: "Winning hooks get briefed back to creators and the in-house team for iterations before fatigue sets in." },
    ],
    leaks: [
      { at: 1, what: "Winning posts that never reach the campaign because nobody requested authorization in time." },
      { at: 2, what: "ROAS targets set from revenue, not contribution margin, so ads 'work' while the brand loses money." },
    ],
    kpis: [
      { name: "ROAS vs. breakeven ROAS", why: "Breakeven depends on each brand's margin. One number across brands is wrong." },
      { name: "Share of GMV from ads", why: "Too high and the brand is renting growth. Too low and proven content is left unscaled." },
      { name: "Time from post to authorized", why: "Speed is the edge. Winners decay in days." },
    ],
    myMove:
      "Set a breakeven ROAS per brand from its real contribution margin, and make it the budget rule. Automate the winner pipeline so any post over a conversion threshold gets flagged for authorization and fed to GMV Max within a day. With fewer targeting controls, content selection is the job.",
    evidence: ["edit-division", "gtm-cut"],
  },
  {
    id: "live",
    n: "04",
    name: "Run LIVE commerce",
    jd: "Marketing & Merchandising · TikTok Shop Operations",
    oneLiner:
      "LIVE is a production business inside the commerce business: hours, hosts, and studio time are fixed costs that only pay back with the right product, offer and schedule.",
    stages: [
      { name: "Schedule", owner: "LIVE team", detail: "Daily brand lives and multi-brand Mega Lives, matched to audience peaks, campaign days and product drops." },
      { name: "Prep run-of-show", owner: "LIVE + Account Mgmt", detail: "Offer ladder, flash deals, pinned products, host script, and compliance-safe claims." },
      { name: "Go live", owner: "Hosts + Producer", detail: "In-house hosts, brand talent, or affiliate creators; live moderation and real-time price or offer changes." },
      { name: "Boost", owner: "Paid media", detail: "LIVE GMV Max to push traffic into the room during the highest-converting windows." },
      { name: "Post-mortem", owner: "LIVE team", detail: "GMV per hour, viewer-to-buyer rate, and which segments sold, clipped into short-form for replay." },
    ],
    leaks: [
      { at: 0, what: "Hours scheduled to fill a calendar rather than against expected GMV per hour." },
      { at: 4, what: "Great LIVE moments never clipped and re-posted as short video, which is free content." },
    ],
    kpis: [
      { name: "GMV per LIVE hour", why: "The unit that has to beat host, studio and producer cost per hour." },
      { name: "Viewer → buyer rate", why: "Separates a traffic problem from an offer or host problem." },
      { name: "Contribution per hour", why: "GMV per hour net of discounts, ads and staffing. The real go/no-go." },
    ],
    myMove:
      "Treat every LIVE hour as a line item with an expected-GMV forecast, and cut the bottom quartile of slots each month. Build the clip-and-repost loop into the post-mortem so every show produces short-form content.",
    evidence: ["edit-division", "cadence"],
  },
  {
    id: "promos",
    n: "05",
    name: "Plan promotions and campaigns",
    jd: "Marketing & Merchandising · P&L & Business Performance",
    oneLiner:
      "TikTok Shop is a calendar business. Platform mega-campaigns concentrate demand, and discount depth is the fastest way to buy GMV and lose margin.",
    stages: [
      { name: "Build the calendar", owner: "Account Mgmt", detail: "Platform campaigns, Black Friday / Cyber Monday, seasonal tentpoles, and brand launches on one calendar per brand." },
      { name: "Register & fund", owner: "Account Mgmt + Finance", detail: "Enroll in platform campaigns, decide seller-funded vs. platform-subsidized discounts, and set a margin floor." },
      { name: "Stock the spike", owner: "Ops", detail: "Inventory positioned at FBT or the 3PL ahead of demand, sized from the last comparable event." },
      { name: "Run the event", owner: "All teams", detail: "Creator push, LIVE marathons, ads budget surge, and real-time monitoring of stock and price." },
      { name: "Read the hangover", owner: "Finance + Account Mgmt", detail: "Incremental GMV vs. pulled-forward demand, returns, and the margin actually earned." },
    ],
    leaks: [
      { at: 1, what: "Stacked discounts (seller coupon + flash deal + creator code) that push a SKU below contribution breakeven." },
      { at: 4, what: "Counting event GMV without netting out the demand it pulled forward from the following weeks." },
    ],
    kpis: [
      { name: "Contribution margin during events", why: "GMV during an event can hide a loss." },
      { name: "Effective discount depth", why: "All discounts stacked, as a percent of list price." },
      { name: "Post-event 4-week run rate", why: "Tells you whether the event built the brand or borrowed from it." },
    ],
    myMove:
      "A promo approval rule: every offer is priced against the SKU's contribution after commission, fees and ads, with a hard floor. Then a standard post-event readout that nets out the pull-forward, so the next event is planned on real incrementality.",
    evidence: ["ecom-launch", "gtm-cut"],
  },
  {
    id: "search",
    n: "06",
    name: "Win the Shop tab",
    jd: "Marketing & Merchandising · Social Commerce Strategy",
    oneLiner:
      "The Shop tab passed half of attributed U.S. GMV in H1 2026. Shoppers now search TikTok the way they search Amazon, so listings, reviews and price carry as much weight as the next viral video.",
    stages: [
      { name: "Keyword & title", owner: "Specialists", detail: "Titles and attributes written for how people search on TikTok, not how the brand names its products." },
      { name: "Listing content", owner: "Specialists + Creative", detail: "Main image, video on the listing, and bundles that lift order value." },
      { name: "Price & offers", owner: "Brand Lead", detail: "Price checked against Amazon and the brand’s own site; coupons that win the product card without breaking the margin floor." },
      { name: "Reviews & rating", owner: "Specialists + CX", detail: "Early review velocity on launches, and fast response to low ratings." },
    ],
    leaks: [
      { at: 0, what: "Listings written once at launch and never touched again, while search volume moves to the Shop tab." },
      { at: 2, what: "Prices undercut on TikTok to win video, which then undercuts the brand’s Amazon and retail pricing." },
    ],
    kpis: [
      { name: "Shop-tab share of GMV by brand", why: "Shows which brands depend on video and which have durable search demand." },
      { name: "Listing conversion rate", why: "The merchandising team’s core number." },
      { name: "Rating and review count on hero SKUs", why: "The cheapest conversion lever there is." },
    ],
    myMove:
      "Split every brand’s GMV by source (video, LIVE, Shop tab) on the scorecard, and give the Shop tab a named owner in each pod. A brand at 20% Shop-tab share while the platform is at 51% has a merchandising gap, not a creator gap.",
    evidence: ["ecom-holdco", "ecom-launch"],
  },
  {
    id: "supply",
    n: "07",
    name: "Keep it in stock and on time",
    jd: "TikTok Shop Operations (inventory considerations)",
    oneLiner:
      "A viral video can do weeks of sales in a day. Stockouts kill the momentum, and late shipments hurt the shop's health score, which the platform uses to throttle traffic.",
    stages: [
      { name: "Forecast", owner: "Ops + Account Mgmt", detail: "Base demand plus creator-driven spikes: sample waves, scheduled LIVEs, and campaign calendar." },
      { name: "Position inventory", owner: "Ops", detail: "Fulfilled by TikTok vs. the brand's own 3PL, and how much stock sits where." },
      { name: "Fulfill", owner: "Ops / FBT / 3PL", detail: "Ship within the platform's handling-time requirements; late dispatch and cancellations count against the shop." },
      { name: "Returns & service", owner: "CX / Ops", detail: "Returns, refunds, reviews and customer messages, all of which feed the shop's performance score." },
    ],
    leaks: [
      { at: 0, what: "Forecasting from last month's sales instead of next week's creator and LIVE schedule." },
      { at: 2, what: "Late dispatch during a spike, which lowers the shop score just as traffic is peaking." },
    ],
    kpis: [
      { name: "In-stock rate on hero SKUs", why: "The top few SKUs usually carry most of the GMV." },
      { name: "Late dispatch & cancellation rate", why: "Direct inputs into shop health and traffic." },
      { name: "Return rate by SKU", why: "Some products sell on video and come back in the mail." },
    ],
    myMove:
      "Feed the creator and LIVE schedule into the demand forecast so inventory is positioned before the spike, not after. A daily hero-SKU stock and dispatch alert across every brand, so no account finds out about a stockout from the brand.",
    evidence: ["ecom-launch", "ecom-holdco"],
  },
  {
    id: "health",
    n: "08",
    name: "Protect account health",
    jd: "TikTok Shop Operations · Platform & Market Expertise",
    oneLiner:
      "The platform is the landlord. Listing violations, prohibited claims, or a bad performance score can cut a brand's traffic overnight.",
    stages: [
      { name: "Pre-publish review", owner: "Ops / Compliance", detail: "Listings and creator briefs checked against category rules, especially beauty, wellness and supplement claims." },
      { name: "Monitor", owner: "Account Mgmt", detail: "Shop performance score, violations, and policy updates across every managed shop." },
      { name: "Respond & appeal", owner: "Ops + TikTok partner manager", detail: "Fix, appeal, and escalate through the partner relationship when needed." },
    ],
    leaks: [
      { at: 0, what: "Creators making claims the brand can't legally make, which lands on the brand's shop." },
      { at: 1, what: "Policy changes read late across a large book of shops." },
    ],
    kpis: [
      { name: "Shops below health threshold", why: "Count of managed shops at risk of traffic restrictions." },
      { name: "Violations per 1,000 orders", why: "Normalizes risk across brands of different sizes." },
    ],
    myMove:
      "One portfolio-wide health board, checked daily, plus a claims-safe brief template per category that every creator brief starts from.",
    evidence: ["legal-ai", "cadence"],
  },
  {
    id: "cadence",
    n: "09",
    name: "Run the operating cadence",
    jd: "P&L · Performance & Analytics · Team Leadership · Cross-Functional",
    oneLiner:
      "The workflow that holds the others together: the numbers everyone looks at, how often, and who owns the next action.",
    stages: [
      { name: "Daily", owner: "Account leads", detail: "GMV pace vs. plan, stock and dispatch alerts, winning posts to amplify, LIVE results." },
      { name: "Weekly", owner: "GM + team leads", detail: "Brand-by-brand business review: GMV, contribution, creator funnel, ads efficiency, and the three actions for next week." },
      { name: "Monthly", owner: "GM + Finance", detail: "P&L by brand and service line against forecast, headcount vs. book of business, and reforecast." },
      { name: "Quarterly", owner: "GM + brand execs", detail: "Brand QBRs: results, next-quarter plan, and the expansion conversation." },
    ],
    leaks: [
      { at: 1, what: "Reviews that report numbers without assigning an owner and a next action." },
      { at: 2, what: "GMV celebrated while contribution by brand is never looked at." },
    ],
    kpis: [
      { name: "GMV and contribution by brand", why: "The two numbers the whole business answers to." },
      { name: "Revenue per account manager", why: "Whether the team scales with the book or ahead of it." },
      { name: "Forecast accuracy", why: "How well the business knows itself." },
    ],
    myMove:
      "One scorecard, same shape for every brand, rolled up to the portfolio. Daily alerts, a weekly review with owners and actions, a monthly P&L by brand. I run this cadence today across a U.S. and Philippine team.",
    evidence: ["cadence", "collections", "crm-week", "jugg-scope"],
  },
];

export const WORKFLOW_BY_ID = Object.fromEntries(WORKFLOWS.map((w) => [w.id, w]));
