// q4.ts — the BFCM run-up as a GM would plan it, counting back from
// Thanksgiving 2026 (Nov 26). Platform facts are sourced; the week-by-week
// plan and lead times are my operating read.

export const BFCM_FACTS = [
  { value: "$500M+", label: "U.S. TikTok Shop sales over the 2025 BFCM weekend", source: "TikTok newsroom" },
  { value: "760K", label: "Livestreams over the same weekend, with 1.6B views", source: "TikTok newsroom" },
  { value: "+84%", label: "Sales growth for sellers who hosted LIVEs during BFCM 2025", source: "TikTok newsroom" },
];

export const BFCM_URL = "https://newsroom.tiktok.com/tiktok-shop-had-our-biggest-bfcm-weekend-ever?lang=en";

export interface Phase {
  when: string;
  dates: string;
  name: string;
  moves: { stream: string; what: string }[];
  leak: string;
}

export const PHASES: Phase[] = [
  {
    when: "T−8 to T−6 weeks",
    dates: "Oct 1 – Oct 21",
    name: "Decide",
    moves: [
      { stream: "Merchandising", what: "Pick hero SKUs and bundles per brand; set each SKU’s margin floor and the discount ladder that stays above it." },
      { stream: "Inventory", what: "Place POs and book inbound to FBT or the 3PL now. Lead times, not demand, are the binding constraint in November." },
      { stream: "Creators", what: "Sample wave one goes out. A sample shipped now is a posted video by early November, with time to find the winners." },
      { stream: "Platform", what: "Register every brand for the platform’s campaigns and co-funded deals; confirm what the partner team will subsidize." },
    ],
    leak: "Discounts agreed with brands before anyone has priced them against contribution.",
  },
  {
    when: "T−5 to T−3 weeks",
    dates: "Oct 22 – Nov 11",
    name: "Build",
    moves: [
      { stream: "Creators", what: "Sample wave two, targeted at wave one’s best posters. Raise commission for the top sellers before competitors do." },
      { stream: "Content", what: "Build the content bank: authorize the winning posts so they can feed GMV Max the day the event opens." },
      { stream: "LIVE", what: "Lock the schedule: brand lives, multi-brand Mega Lives, hosts, run-of-show, and the offer ladder per slot." },
      { stream: "Paid", what: "Set event budgets by brand against breakeven ROAS, with a daily ceiling and a rule for pulling spend." },
    ],
    leak: "Winning videos found in week three but not authorized for ads until the event is half over.",
  },
  {
    when: "T−2 to T−1 weeks",
    dates: "Nov 12 – Nov 25",
    name: "Warm up",
    moves: [
      { stream: "Ops", what: "Stock in place at FBT or the 3PL; dispatch capacity confirmed for several times normal order volume." },
      { stream: "LIVE", what: "Dry-run the Mega Lives. Every host rehearses the offer ladder and claims-safe language." },
      { stream: "Merchandising", what: "Early-access offers to test price points; update listings and bundles for Shop-tab search." },
      { stream: "Cadence", what: "The war room starts: one board, every brand, reviewed daily with owners." },
    ],
    leak: "Stock that arrives at the warehouse but isn’t live and sellable before traffic peaks.",
  },
  {
    when: "Event",
    dates: "Nov 26 – Dec 1",
    name: "Run",
    moves: [
      { stream: "War room", what: "GMV pace vs. plan by brand several times a day; stock and dispatch alerts; price and discount checks." },
      { stream: "Paid", what: "Winners go into GMV Max within hours; spend is pulled from any brand running below breakeven." },
      { stream: "LIVE", what: "Marathon and Mega Lives; clip every strong segment for short-form the same day." },
      { stream: "Creators", what: "Top creators on boosted commission; fast approvals for late sample requests with proven sellers." },
    ],
    leak: "A viral spike on a SKU that sells out, and late dispatches that dent the shop’s health score in December.",
  },
  {
    when: "T+1 to T+2 weeks",
    dates: "Dec 2 – Dec 14",
    name: "Read",
    moves: [
      { stream: "Finance", what: "Contribution by brand for the event, net of discounts, commission, ads and returns, not just GMV." },
      { stream: "Analysis", what: "Incremental vs. pulled-forward demand: compare the four weeks after to the four weeks before." },
      { stream: "Creators", what: "Rank every creator by GMV per sample for the event; that list is January’s roster." },
      { stream: "Brands", what: "Event readout to each brand, and the Q1 plan while the numbers are fresh." },
    ],
    leak: "Celebrating the GMV number without checking which brands made money on it.",
  },
];

export const WAR_ROOM = [
  "GMV pace vs. plan, by brand, by hour",
  "Hero-SKU stock and days of cover",
  "Late dispatch and cancellation rate",
  "ROAS vs. breakeven, by brand",
  "Effective discount depth vs. margin floor",
  "LIVE GMV per hour, by slot",
  "Top posts by GMV in the last six hours",
];
