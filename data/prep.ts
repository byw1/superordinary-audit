// prep.ts — PREP ONLY. Imported only by app/prep/page.tsx, a server page that
// 404s without the prep key, so none of this ever reaches a recipient.

export const WALKTHROUGH: { href: string; page: string; say: string; time: string }[] = [
  { href: "/", page: "Overview", time: "0:00", say: "“I wanted to understand the business before talking about the job, so I mapped it from the outside. Here’s how I think product, content and money move, and what changed under you in the last year: GMV Max, the fee change, the Shop tab passing half of GMV.” Stop and ask what I got wrong." },
  { href: "/engine?w=creators", page: "Workflows → creator engine", time: "1:00", say: "“Every line under ‘What you’ll own’ is a workflow. This is the one everything depends on. The leaks in red are where I’d look first: samples that never post, and top creators left on default terms.”" },
  { href: "/economics", page: "Economics", time: "2:00", say: "Move the post-rate slider live. “Ten points of post rate is worth more than any budget increase. And breakeven ROAS is different per brand, so one ROAS target across the book is wrong.” Then the service vs. buy/sell crossover." },
  { href: "/scorecard", page: "Scorecard", time: "3:00", say: "“This is the report I’d want every Monday. Brand B is the tell: second-biggest account, ads below breakeven, samples not converting. The fix is the creator funnel, not more budget.”" },
  { href: "/plan", page: "First 90 days", time: "4:00", say: "“Learn the book, fix the biggest leak, then grow. The first month is for finding out where this site is wrong.” Then turn it into questions: pick two from the list." },
];

export const LIKELY_QUESTIONS: { q: string; outline: string; story?: string }[] = [
  {
    q: "Walk me through how you’d run a TikTok Shop P&L.",
    outline: "Order → account → book. Contribution, not GMV. Breakeven ROAS per brand from its own margin. Monthly contribution by brand next to the GMV ranking; the gap is where effort is mispriced. Show the economics page.",
    story: "Producer Labs: cut ~$15K/month in consultant spend that looked like growth; weekly AR/AP, ~$25K collected.",
  },
  {
    q: "A top brand’s GMV is down 20% month over month. What do you do?",
    outline: "Decompose before acting: which source moved (video, LIVE, Shop tab)? Stock and dispatch first (cheapest to check, fastest to kill traffic). Then creator funnel: fewer posts or worse posts? Then ads vs. breakeven. Then price and promo calendar (was last month an event?). Owner and action by Friday.",
  },
  {
    q: "How do you build and keep a creator network?",
    outline: "Rank by GMV per sample, not follower count. Tier commission for top sellers before a competitor does. Stop sampling non-posters. Watch for creators drifting. Stacked income across the group is the retention edge.",
    story: "Juggernaut: 30+ creators, 300M+ following; the bio-email tracker that caught signings and departures in near real time.",
  },
  {
    q: "Tell me about a team you built.",
    outline: "Juggernaut: joined as sixth, cut to 3, rebuilt to 10. Hired for slope: first-time talent manager closed $500K in under 8 months. Producer Labs: rebuilt the edit division; daily sync; chief of staff for the Philippine team.",
    story: "The first-time hire who closed $500K.",
  },
  {
    q: "Tell me about a time you pushed back on leadership.",
    outline: "The $90K deal my CEO passed on because he didn’t recognize Anthropic. I took it back and closed it at nearly 2x the creator’s rate. Framing: I catch what the person above me misses, and I bring it back with a plan, not a complaint.",
    story: "$90K Anthropic deal.",
  },
  {
    q: "You don’t have ten years. Why you for a VP seat?",
    outline: "Don’t argue the number. “I’m earlier than the posting asks. I’ve run the creator side and the operating side at once, and I built this to show how I’d run yours.” If they see me a level below the GM, be ready to say yes to the right seat.",
  },
  {
    q: "Why are you leaving Producer Labs after five months?",
    outline: "Producer Labs is in good shape. I’m looking for the highest-leverage seat, and this is a step up. Seven years at my own company is the anchor; Juggernaut ended well and I still advise the CEO informally.",
  },
  {
    q: "How would you use AI in this org?",
    outline: "Internal leverage, not a product pitch. Examples: CRM in a week (~$1,100/mo → ~$60/mo); contract redlining (~$20K/yr saved); creator analysis tools. Here: scored sample queues for the VA team, winner detection for GMV Max, daily stock and health alerts. Say “I build with AI”; never call myself an engineer.",
    story: "CRM in a week.",
  },
  {
    q: "If you started in November, what would you do first?",
    outline: "Black Friday comes first, and most of it is already decided by then: samples, inventory and LIVE schedules have lead times. So: join the war room, protect margin (discount floors, ads vs. breakeven), and keep stock and dispatch clean. Save the rebuild for December, starting with the event readout by brand. Point to the Q4 page.",
  },
  {
    q: "What would you do differently from how we operate today?",
    outline: "Don’t criticize. “From the outside I can’t know. Three things I’d check first: contribution by brand vs. GMV ranking, sample-to-post rate, and how the Shop tab is owned now that it’s half of platform GMV.”",
  },
];

export const NUMBERS: { n: string; what: string }[] = [
  { n: "$244M", what: "SuperOrdinary 2025 revenue; $300M 2026 outlook at 41% gross margin" },
  { n: "210 / ~300", what: "TikTok & social commerce headcount / total (investor site)" },
  { n: "$15.1B → $11.8B", what: "US TikTok Shop GMV 2025 (+68%) → H1 2026 alone (+103%)" },
  { n: "51 / 40 / 8", what: "H1 2026 US GMV share: Shop tab / video / LIVE" },
  { n: "6% → 8%", what: "Referral fee change reported Aug 2026 (medium confidence)" },
  { n: "Jul 2025", what: "GMV Max became the only Shop ads campaign type" },
  { n: "Jun 2025", what: "TikTok Shop Partner of the Year, Beauty" },
  { n: "$300M+ / ~2K / 20%", what: "Fanfix: paid out to creators / active creators / take rate" },
];

export const CHECKLIST: string[] = [
  "Listen to “The Agency That Sold TikTok’s First Item…” (Gary Sang, Emma Rafalski) and Julian Reis’s “$500 Billion TikTok Prediction” episode.",
  "Ask Connor: how are Fanfix creators routed into TikTok Shop today, and who at SuperOrdinary should I know?",
  "Tell Connor which role I’m going for (the referral in Hired went toward the FP&A posting).",
  "Open the site in the share view once more before the call, so I know exactly what they see.",
  "Have the economics page open in a tab, sliders at defaults, ready to move live.",
  "Pick the two questions from First 90 days I most want answered.",
];
