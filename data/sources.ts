// sources.ts — every public source the audit draws on, grouped. Researched
// Sep 2026. Where sources disagree, the conflict is noted rather than resolved.

export const SOURCES: { group: string; items: { title: string; url: string; used: string }[] }[] = [
  {
    group: "SuperOrdinary",
    items: [
      { title: "Creator shareholder offering (PR Newswire, Apr 2026)", url: "https://www.prnewswire.com/news-releases/superordinary-to-redefine-its-creator-commerce-ecosystem-by-inviting-its-creator-community-to-become-shareholders-302759173.html", used: "2025 revenue, 2026 outlook and gross margin, creator network" },
      { title: "SuperOrdinary investor site (invest.superordinaryusa.com)", url: "https://invest.superordinaryusa.com", used: "Headcount by unit, revenue-stream labels, leadership, Fanfix metrics" },
      { title: "GM, TikTok Shop Ops (careers board)", url: "https://superordinarytalentllc.applytojob.com/apply/2nZ4Q95xxE/GM-TikTok-Shop-Ops", used: "The role’s mandate" },
      { title: "Brand Lead, TikTok Shop Ops (careers board)", url: "https://superordinarytalentllc.applytojob.com/apply/lMaWa8RoOh/Brand-Lead-TikTok-Shop-Ops", used: "Org structure" },
      { title: "Social Commerce Specialist / Manager (careers board)", url: "https://superordinarytalentllc.applytojob.com/apply/5B82lSd1Cl/Social-Commerce-Specialist-Manager-TikTok-Shop-Ops", used: "Org structure, sampling workflow, VA team" },
      { title: "U.S. TikTok Shop launch (PR Newswire, Jan 2024)", url: "https://www.prnewswire.com/news-releases/superordinary-unveils-full-service-brand-solution-for-tiktok-shop-in-us-partners-with-milk-makeup-babor-other-leading-brands-302032679.html", used: "Services, China livestream history" },
      { title: "Series B (TechCrunch, Oct 2023)", url: "https://techcrunch.com/2023/10/05/superordinary/", used: "Funding, valuation, founding year, Amazon buy/sell" },
      { title: "SuperOrdinary Studios launch (Yahoo Finance, Jul 2025)", url: "https://finance.yahoo.com/news/superordinary-launches-superordinary-studios-power-134500967.html", used: "Microdrama studio" },
      { title: "Crocs microdrama (PR Newswire, Jun 2026)", url: "https://www.prnewswire.com/news-releases/superordinary-and-crocs-launch-tiktok-microdrama-series-built-for-conversion-302796853.html", used: "Studios proof point" },
      { title: "Partner of the Year, Beauty (company Instagram, Jun 2025)", url: "https://www.instagram.com/p/DKvJtBKhked/", used: "TikTok Shop award" },
      { title: "On the Record with Julian Reis (podcast)", url: "https://podcasts.apple.com/us/podcast/on-the-record-with-julian-reis/id1813971527", used: "Strategy and operating views" },
    ],
  },
  {
    group: "Fanfix",
    items: [
      { title: "Acquisition by SuperOrdinary (Business Wire, Jul 2022)", url: "https://www.businesswire.com/news/home/20220721005108/en/", used: "Acquisition" },
      { title: "$300M paid out to creators (PR Newswire, Jun 2026)", url: "https://www.prnewswire.com/news-releases/fanfix-surpasses-300-million-paid-out-to-creators-marking-major-milestone-in-the-evolution-of-the-creator-economy-302801373.html", used: "Payouts, current CEO" },
      { title: "Fanfix acquires Sunroom (Aug 2025)", url: "https://www.accessnewswire.com/newsroom/en/business-and-professional-services/fanfix-acquires-sunroom-a-women-led-creator-platform-championing-1061173", used: "Sunroom acquisition" },
    ],
  },
  {
    group: "TikTok Shop market and platform",
    items: [
      { title: "U.S. GMV 2025 (Momentum Works)", url: "https://thelowdown.momentum.asia/new-report-tiktok-shop-u-s-gmv-grew-68-to-reach-us15-1b-in-2025/", used: "2025 U.S. GMV" },
      { title: "U.S. GMV H1 2026 (Net Influencer, citing Momentum Works / Tabcut)", url: "https://www.netinfluencer.com/tiktok-shop-us-gmv-nearly-doubles-to-11-8b-usd-in-h1-2026/", used: "H1 2026 GMV and source mix" },
      { title: "BFCM 2025 (TikTok newsroom)", url: "https://newsroom.tiktok.com/tiktok-shop-had-our-biggest-bfcm-weekend-ever?lang=en", used: "Event scale" },
      { title: "GMV Max migration (TikTok Ads help center)", url: "https://ads.tiktok.com/help/article/gmv-max-migration-tiktok-shop-ads", used: "Ads changes" },
      { title: "Referral fee to 8% (agency report)", url: "https://www.bebolddigital.com/news/tiktok-shop-8-percent-referral-fee", used: "Fee change; medium confidence" },
      { title: "ByteDance keeps TikTok’s commerce business (eMarketer)", url: "https://www.emarketer.com/content/bytedance-keeps-tiktok-ad-ecommerce-business-under-trump-deal-reports", used: "Regulatory outcome" },
      { title: "TikTok partner incentives (Digiday)", url: "https://digiday.com/marketing/tiktok-dangles-cash-credits-and-fully-funded-deals-to-supercharge-u-s-shop-spending/", used: "Performance incentives" },
    ],
  },
  {
    group: "Competitors",
    items: [
      { title: "Pattern IPO (Nasdaq)", url: "https://www.nasdaq.com/press-release/pattern-announces-closing-initial-public-offering-2025-09-23", used: "Pattern" },
      { title: "Orca and Sapphire Studios form Third (Net Influencer)", url: "https://www.netinfluencer.com/social-commerce-agencies-orca-and-sapphire-studios-merge-to-form-third/", used: "Third" },
      { title: "Top TikTok Shop agencies (The Social Shepherd)", url: "https://thesocialshepherd.com/blog/top-tiktok-shop-agencies-us", used: "Agency landscape (agency-published)" },
      { title: "Best TikTok Shop agencies (Hubfluence)", url: "https://www.hubfluence.io/blog/best-tiktok-shop-agencies", used: "Agency landscape (agency-published)" },
    ],
  },
];

export const CAVEATS: string[] = [
  "Founding year: the company and TechCrunch say 2017; one trade article says 2018. This audit uses 2017.",
  "Headcount: the investor site gives ~300 across units; the job posting says 140–150 employees, likely U.S. staff only.",
  "Creator network: “3M+” counts affiliates reached through TikTok’s tools; “~2K” is the actively managed roster.",
  "The 8% referral fee comes from agency reporting, not TikTok’s published rate table.",
  "Brand logos on the investor site don’t say which channel each brand works with SuperOrdinary on.",
  "Everything marked as an outside-in read is my inference, not inside knowledge. Illustrative models use invented numbers.",
];
