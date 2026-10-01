// company.ts — SuperOrdinary, Fanfix and the TikTok Shop market, from public
// sources (press releases, the company's investor site and careers board,
// trade press). Researched Sep 2026. Each fact carries its source; anything
// that's my reasoning is marked as a read, not a fact.

export interface Fact {
  value: string;
  label: string;
  source: string;
  url?: string;
}

export const HEADLINE_FACTS: Fact[] = [
  { value: "$244M", label: "Revenue in 2025", source: "PR Newswire, Apr 2026", url: "https://www.prnewswire.com/news-releases/superordinary-to-redefine-its-creator-commerce-ecosystem-by-inviting-its-creator-community-to-become-shareholders-302759173.html" },
  { value: "$300M", label: "2026 revenue outlook, at a 41% gross margin", source: "PR Newswire, Apr 2026", url: "https://www.prnewswire.com/news-releases/superordinary-to-redefine-its-creator-commerce-ecosystem-by-inviting-its-creator-community-to-become-shareholders-302759173.html" },
  { value: "210", label: "People in TikTok & social commerce, of ~300 total", source: "SuperOrdinary investor site" },
  { value: "3M+", label: "Creators and affiliates reached; ~2K in the active roster", source: "Investor site; PR, Apr 2026" },
];

export const MARKET_FACTS: Fact[] = [
  { value: "$15.1B", label: "US TikTok Shop GMV in 2025, up 68%", source: "Momentum Works", url: "https://thelowdown.momentum.asia/new-report-tiktok-shop-u-s-gmv-grew-68-to-reach-us15-1b-in-2025/" },
  { value: "$11.8B", label: "US GMV in H1 2026 alone, up 103%", source: "Momentum Works / Tabcut via Net Influencer", url: "https://www.netinfluencer.com/tiktok-shop-us-gmv-nearly-doubles-to-11-8b-usd-in-h1-2026/" },
  { value: "51%", label: "Share of H1 2026 US GMV attributed to the Shop tab (video 40%, LIVE 8%)", source: "Momentum Works / Tabcut", url: "https://www.netinfluencer.com/tiktok-shop-us-gmv-nearly-doubles-to-11-8b-usd-in-h1-2026/" },
  { value: "$500M+", label: "US sales over BFCM weekend 2025, with 760K livestreams", source: "TikTok newsroom", url: "https://newsroom.tiktok.com/tiktok-shop-had-our-biggest-bfcm-weekend-ever?lang=en" },
];

export const TIMELINE: { year: string; what: string }[] = [
  { year: "2017", what: "Founded in Shanghai by Julian Reis to bring Western indie beauty brands into China via Tmall cross-border." },
  { year: "2018", what: "Douyin livestream operations begin. Over $500M in China livestream sales across 57,000+ hours of streams." },
  { year: "2021", what: "U.S. expansion through an Amazon buy/sell model; growth equity from Alliance Consumer Growth with the Puig family." },
  { year: "2022", what: "Acquires Fanfix, the brand-safe creator subscription platform." },
  { year: "2023", what: "$58M Series B at an $800M+ valuation." },
  { year: "2024", what: "Launches a full-service TikTok Shop offering in the U.S. (Milk Makeup, BABOR among early partners)." },
  { year: "2025", what: "Named TikTok Shop Partner of the Year, Beauty, at the first U.S. TikTok Shop Summit. Launches SuperOrdinary Studios for shoppable microdramas." },
  { year: "2026", what: "Opens a creator shareholder offering and states plans to list on the NYSE. Crocs microdrama with TikTok Shop product tagging." },
];

/** The company's own revenue-stream labels, from its investor site. */
export const REVENUE_STREAMS: { name: string; read: string }[] = [
  { name: "GMV-based commissions", read: "A share of the sales that brands, creators and LIVE generate on TikTok Shop." },
  { name: "Service fees", read: "Paid for running the Shop: operations, content, logistics, reporting." },
  { name: "Performance-based incentives", read: "Likely includes TikTok’s own partner incentives for GMV growth and creator incubation." },
  { name: "Microdramas", read: "SuperOrdinary Studios: serialized, shoppable short series for brands." },
  { name: "Fanfix", read: "Creator subscriptions, messaging and premium content, at a 20% platform take rate." },
];

/** Public signals about how the TikTok Shop org is built. */
export const ORG_SIGNALS: { role: string; detail: string; basis: "sourced" | "inferred" }[] = [
  { role: "GM, TikTok Shop Operations", detail: "Owns the P&L of the TikTok Shop business and the operating engine. Partners with the COO, Finance, Sales, Marketing and Creative.", basis: "sourced" },
  { role: "Brand Leads", detail: "Three open roles. Own enterprise brand accounts and multi-quarter growth plans across assortment, promotions and affiliates; weekly and monthly reporting; direct reports.", basis: "sourced" },
  { role: "Social Commerce Specialists / Managers", detail: "Report to a Brand Lead. Own product setup, sampling workflows and affiliate programs, and manage virtual assistants who handle creator outreach, sample logistics and data entry.", basis: "sourced" },
  { role: "LIVE studio", detail: "In-house hosts (including Spanish-language), moderators and livestream operators in West Hollywood; six-hour multi-brand “Mega Lives”.", basis: "sourced" },
  { role: "Pod structure", detail: "GM → Brand Leads → Specialists → offshore VAs, one pod per cluster of brand accounts.", basis: "inferred" },
];

export const PLATFORM_SHIFTS: { what: string; soWhat: string; source: string; url?: string }[] = [
  {
    what: "GMV Max became the only campaign type for TikTok Shop ads in July 2025.",
    soWhat: "Less control over targeting and creative. The lever moves upstream: which creator content feeds the algorithm, and what ROAS target each brand’s margin can bear.",
    source: "TikTok Ads help center",
    url: "https://ads.tiktok.com/help/article/gmv-max-migration-tiktok-shop-ads",
  },
  {
    what: "The U.S. referral fee reportedly rose from 6% to 8% for most categories in August 2026.",
    soWhat: "Two points of margin off every order across the book. Brands with thin contribution feel it first, and so does any buy/sell account.",
    source: "Agency-reported; medium confidence",
    url: "https://www.bebolddigital.com/news/tiktok-shop-8-percent-referral-fee",
  },
  {
    what: "The Shop tab passed half of attributed U.S. GMV in H1 2026.",
    soWhat: "Search, listings, reviews and price now carry as much weight as viral video. Merchandising becomes a workflow of its own, not an afterthought.",
    source: "Momentum Works / Tabcut",
    url: "https://www.netinfluencer.com/tiktok-shop-us-gmv-nearly-doubles-to-11-8b-usd-in-h1-2026/",
  },
  {
    what: "TikTok Shop stayed with the ByteDance-controlled U.S. entity when the USDS joint venture closed in January 2026.",
    soWhat: "The ban risk is largely resolved. The remaining risk is the landlord’s: fees, logistics mandates and ad-product changes.",
    source: "eMarketer; TikTok newsroom",
    url: "https://www.emarketer.com/content/bytedance-keeps-tiktok-ad-ecommerce-business-under-trump-deal-reports",
  },
];

export const FANFIX_MORE = [
  { value: "145K", label: "Average subscribers" },
  { value: "9.2K", label: "Average daily transactions" },
  { value: "60%+", label: "Of creator revenue from paid messages" },
  { value: "10 + 25", label: "Original and licensed microdrama series" },
];

export const FANFIX = {
  what: "A brand-safe creator subscription platform for Gen Z creators: subscriptions, paid messages, pay-per-view and premium content. Acquired by SuperOrdinary in July 2022; acquired the women-led creator platform Sunroom in August 2025.",
  leader: "Led by Dylan Harari, CEO of Fanfix and SuperOrdinary’s Global Head of Creators.",
  facts: [
    { value: "$300M+", label: "Paid out to creators, as of June 2026", source: "PR Newswire, Jun 2026", url: "https://www.prnewswire.com/news-releases/fanfix-surpasses-300-million-paid-out-to-creators-marking-major-milestone-in-the-evolution-of-the-creator-economy-302801373.html" },
    { value: "$100M+", label: "Annual GMV", source: "SuperOrdinary investor site" },
    { value: "~2K", label: "Active creators", source: "SuperOrdinary investor site" },
    { value: "20%", label: "Platform take rate", source: "SuperOrdinary investor site" },
  ] as Fact[],
};

/** How the creator side of the group could feed the commerce side. Outside-in. */
export const BRIDGES: { name: string; mechanism: string; proof: string; risk: string }[] = [
  {
    name: "Creator supply",
    mechanism: "Fanfix’s ~2K monetizing creators are a warm pool of affiliates and LIVE hosts for SuperOrdinary’s brands, already vetted, already paid through the group.",
    proof: "GMV per sample for Fanfix-sourced creators vs. cold marketplace creators, and their sample-to-post rate.",
    risk: "Brand fit. A subscription creator’s audience isn’t automatically a beauty buyer.",
  },
  {
    name: "Stacked creator income",
    mechanism: "A creator earning subscriptions, affiliate commission and brand deals inside one group has more reasons to stay, and more reasons to prioritize the group’s brands.",
    proof: "Retention and share of posting time for creators with two or more income streams in the group.",
    risk: "Creators who feel over-managed, or who see the group take a cut from every side.",
  },
  {
    name: "Creator-led products",
    mechanism: "The talent-led beauty incubator can turn creators with proven fan spend into product founders, launched through the TikTok Shop operating engine.",
    proof: "Launch GMV and 90-day repeat rate of creator-led drops vs. a comparable partner-brand launch.",
    risk: "Inventory risk sits on SuperOrdinary’s balance sheet, not a partner’s.",
  },
  {
    name: "Content that sells",
    mechanism: "SuperOrdinary Studios casts creators into shoppable microdramas; the Crocs series was built in under four weeks with product tagging across seven regions.",
    proof: "GMV attributed per episode and per production dollar, compared with affiliate video.",
    risk: "Production cost ahead of proven conversion. It has to be measured like LIVE hours.",
  },
];

/** The field. Agency-published claims are the agencies' own and labelled so. */
export const COMPETITORS: { name: string; profile: string; angle: string; source: string; url?: string }[] = [
  {
    name: "Pattern",
    profile: "Public since September 2025 (Nasdaq: PTRN), ~$2.5B FY2025 revenue. Multi-marketplace, buy/sell model. TikTok Shop’s 2025 Strategic Partner of the Year.",
    angle: "The closest analog and the likely public comparable: same buy/sell model, far larger, Amazon-first.",
    source: "Nasdaq; Business Wire",
    url: "https://www.nasdaq.com/press-release/pattern-announces-closing-initial-public-offering-2025-09-23",
  },
  {
    name: "Third",
    profile: "Formed by the March 2026 merger of Orca and Sapphire Studios; ~70 people. Clients include Estée Lauder, e.l.f. and Mars.",
    angle: "Beauty-heavy TikTok Shop specialist competing for the same enterprise brands.",
    source: "Net Influencer",
    url: "https://www.netinfluencer.com/social-commerce-agencies-orca-and-sapphire-studios-merge-to-form-third/",
  },
  {
    name: "Media Labs",
    profile: "TikTok Shop partner claiming $500M+ in managed GMV across 150+ brands.",
    angle: "Scale-focused agency model; claims are self-reported.",
    source: "Company site (self-reported)",
    url: "https://medialabs-co.com/tiktok-shop-agency",
  },
  {
    name: "Stella Rising",
    profile: "Beauty TikTok Shop partner working with Laneige, Sulwhasoo and Real Techniques.",
    angle: "Direct overlap in prestige beauty, including a brand on SuperOrdinary’s logo wall.",
    source: "The Social Shepherd (agency list)",
    url: "https://thesocialshepherd.com/blog/top-tiktok-shop-agencies-us",
  },
  {
    name: "Performance-only shops",
    profile: "TBAR Partners, Social Commerce Club and others, paid mainly on a share of GMV rather than retainers.",
    angle: "Price pressure on service fees, especially for mid-size brands.",
    source: "Hubfluence (agency list)",
    url: "https://www.hubfluence.io/blog/best-tiktok-shop-agencies",
  },
];

export const EDGE_READ =
  "What the others don’t combine in one company: a China-honed LIVE playbook (57,000+ hours of livestreams), a buy/sell balance sheet, an owned creator platform, and a microdrama studio. The risk is the flip side of breadth: each line needs its own operating discipline, and the TikTok Shop engine is the one the rest depend on.";

/** Public revenue figures only, each with its source. 2026 is the company's outlook. */
export const REVENUE: { year: string; value: number; label: string; note: string; source: string; url?: string }[] = [
  { year: "Yr 1", value: 20, label: "~$20M", note: "First year, 12 brands", source: "Glossy, Feb 2020" },
  { year: "2020", value: 90, label: "$90M+", note: "Revenue", source: "BeautyMatter, May 2021" },
  { year: "2021", value: 180, label: "~$180M", note: "“Nears $180M”", source: "Forbes, Nov 2021" },
  { year: "2025", value: 244, label: "$244M", note: "Revenue", source: "PR Newswire, Apr 2026", url: "https://www.prnewswire.com/news-releases/superordinary-to-redefine-its-creator-commerce-ecosystem-by-inviting-its-creator-community-to-become-shareholders-302759173.html" },
  { year: "2026E", value: 300, label: "$300M", note: "Outlook, 41% gross margin", source: "PR Newswire, Apr 2026", url: "https://www.prnewswire.com/news-releases/superordinary-to-redefine-its-creator-commerce-ecosystem-by-inviting-its-creator-community-to-become-shareholders-302759173.html" },
];

/** Leadership as listed on the company's investor site (2026), with public backgrounds. */
export const LEADERSHIP: { name: string; title: string; note?: string }[] = [
  { name: "Julian Reis", title: "Founder & CEO", note: "Ex-macro trader; co-founded Skin Laundry; hosts On the Record" },
  { name: "Derek Trau", title: "Co-founder & COO", note: "Mandarin and Cantonese speaker; ex-WXH International" },
  { name: "Harry Golden", title: "Chief Strategy Officer", note: "Runs SuperOrdinary Studios; ex-Forest Road" },
  { name: "Gary Sang, CFA", title: "VP, TikTok Operations", note: "Co-founded Orca; sold TikTok Shop U.S.’s first item" },
  { name: "Laura Sposato", title: "SVP, Finance", note: "Ex-Nice-Pak, Pernod Ricard, Heineken FP&A" },
  { name: "Michael van den Berg", title: "Global GC & Head of M&A" },
  { name: "Maggie Rugh", title: "VP, Growth & Partnerships" },
  { name: "Ari Salzberg", title: "VP, Corporate Development" },
  { name: "Dylan Harari", title: "CEO, Fanfix · Global Head of Creators" },
  { name: "Alex Korman", title: "Head of Product" },
  { name: "Gerdus Potgieter", title: "VP, Global Controller" },
  { name: "Sergey Anufrienko", title: "Head of Engineering, Fanfix" },
];

/** Headcount by unit, investor site (2026). */
export const HEADCOUNT = [
  { unit: "TikTok & social commerce", n: 210 },
  { unit: "Fanfix", n: 42 },
  { unit: "Amazon", n: 29 },
  { unit: "Corporate", n: 24 },
];

/** Public proof points, each from a named source. */
export const PROOF: { value: string; label: string; source: string }[] = [
  { value: "$500M+", label: "Livestream sales in China across 1.1M+ orders, since 2018", source: "PR Newswire, Jan 2024" },
  { value: "57,000+", label: "Hours of livestreaming on Douyin, Tmall and TikTok", source: "PR Newswire, Jan 2024" },
  { value: "12 brands", label: "In a single six-hour Mega Live, from a live team that was two people a year earlier", source: "On the Record podcast, Aug 2026" },
  { value: "88%", label: "Average Amazon growth for its beauty brands", source: "Cosmetics Business, 2023" },
  { value: "1,694", label: "Unauthorized Amazon sellers removed for partner brands", source: "GCI, ~2022" },
  { value: "5×", label: "Sales on Peter Thomas Roth’s TikTok Shop relaunch, per the team", source: "On the Record podcast, Jun 2026" },
];

/** TikTok Shop's own on-page counters, fetched 2026-10-01. Lifetime, not SuperOrdinary-attributed. */
export const SPOTLIGHTS: { brand: string; domain: string; stats: [string, string][]; line: string; source: string; url?: string }[] = [
  {
    brand: "Peter Thomas Roth",
    domain: "peterthomasroth.com",
    stats: [["865K", "items sold"], ["208K", "of one hero SKU"]],
    line: "The Instant FirmX eye tightener, relaunched as an Easy-Wear format and sold as “Only on TikTok Shop”. The team calls it one of the most successful new-arrival campaigns in TikTok Shop history.",
    source: "TikTok Shop counters; podcast Jun 2026",
    url: "https://shop.tiktok.com/us/pdp/peter-thomas-roth-instant-firmx-easy-wear-eye-tightener/1731252487013372560",
  },
  {
    brand: "Laneige",
    domain: "laneige.com",
    stats: [["1.2M", "shop followers"], ["705K", "items sold"]],
    line: "Lip-led: Glaze Craze tinted lip serum alone has sold 56.9K units.",
    source: "TikTok Shop counters",
    url: "https://shop.tiktok.com/us/store/laneige-us/7495286718562273613",
  },
  {
    brand: "Milk Makeup",
    domain: "milkmakeup.com",
    stats: [["1.3M", "shop followers"], ["61.7K", "items sold"]],
    line: "A launch partner in January 2024 and a SuperOrdinary client since the China years.",
    source: "TikTok Shop counters",
    url: "https://www.tiktok.com/shop/store/milk-makeup/7495104340603538385",
  },
  {
    brand: "Crocs",
    domain: "crocs.com",
    stats: [["#8", "U.S. shop by revenue, Apr 2026"], ["$6.35M", "that month"]],
    line: "The first U.S. footwear brand to put TikTok Shop tagging inside a microdrama, built with SuperOrdinary Studios in under four weeks.",
    source: "Third-party estimate via Net Influencer",
    url: "https://www.netinfluencer.com/crocs-becomes-first-us-footwear-brand-to-embed-tiktok-shop-into-a-microdrama-series/",
  },
];

/** The TikTok Shop org, read from the company's public job postings (Sep 2026). */
export const ORG: { role: string; pay?: string; owns: string; kpis?: string }[] = [
  { role: "GM / VP, TikTok Shop Operations", owns: "P&L of the TikTok Shop business: revenue, gross margin, contribution, forecasting. Partners with the COO, Finance, Sales, Marketing and Creative.", kpis: "The whole scorecard" },
  { role: "Director, Brand Growth & P&L", pay: "$125K", owns: "Leads the P&L for TikTok Shop accounts.", kpis: "Account P&L" },
  { role: "Brand Lead (3 open)", pay: "$90–115K + bonus", owns: "Enterprise brand point of contact; multi-quarter plans across assortment, promotions, affiliates, livestreams and paid; C-suite-ready decks.", kpis: "Weekly and monthly brand reporting" },
  { role: "Social Commerce Specialist / Manager", pay: "$90–110K", owns: "Seller Center setup, campaigns, creator outreach and sampling, inventory and shop health; oversees the VA team.", kpis: "GMV, traffic, conversion, CTR, CTOR, content volume" },
  { role: "Creator Success Manager", pay: "$90–110K", owns: "Paid UGC, Spark Ads and allowlisting, usage rights, the Discord creator community.", kpis: "Contract value, on-time UGC, rebooking, CPA, attributable GMV" },
  { role: "Livestream Operator", pay: "$70–80K", owns: "Run-of-show, flash sales, cart and chat during live, post-live metrics; named brands include Milk Makeup, LG Beauty, Peter Thomas Roth.", kpis: "Weekly live summaries" },
  { role: "Live hosts & moderators", pay: "$25–50/hr", owns: "In-house PGC hosts (sessions up to four hours), a Spanish-language host, moderators.", kpis: "Revenue per live hour, conversion, watch time" },
  { role: "E-Commerce Coordinator", owns: "Customer service, returns, shop violations across TikTok Shop and Shopify.", kpis: "Seller Performance Score" },
];

