// plan.ts — first 90 days and the questions I'd ask. Written as commitments,
// each traced to something I've already done once.

export interface Phase {
  window: string;
  focus: string;
  moves: string[];
  exit: string; // what's true at the end of the phase
}

export const NINETY: Phase[] = [
  {
    window: "Days 1–30",
    focus: "Learn the book",
    moves: [
      "Sit in every seat once: a creator-team sample review, a LIVE shift, a paid-media standup, a brand QBR, a month-end close with Finance.",
      "Rebuild the P&L by brand from raw data: GMV, contribution, and service cost per account. Rank the book both ways and find where the rankings disagree.",
      "Map the eight workflows as they actually run here, against the version on this site, and mark where I was wrong.",
    ],
    exit: "A one-page read of the book: which brands make money, which don’t, and the three workflow leaks costing the most.",
  },
  {
    window: "Days 31–60",
    focus: "Instrument and fix the biggest leak",
    moves: [
      "Ship the portfolio scorecard: same shape for every brand, daily alerts, a weekly review where every flag leaves with an owner.",
      "Set a breakeven ROAS for every brand from its real margin and move ad budgets onto it.",
      "Instrument the creator funnel end to end (shipped → posted → sold) and cut sampling to creators who don’t post.",
    ],
    exit: "Every brand has a scorecard, a margin-based ad rule, and a measured creator funnel. The weekly review is running without me chasing it.",
  },
  {
    window: "Days 61–90",
    focus: "Grow on the new footing",
    moves: [
      "Take the scorecard into brand QBRs and turn it into the expansion conversation: more SKUs, more categories, the next channel.",
      "Put a margin gate into sales qualification so new brands arrive with room for commission and ads.",
      "Present a 12-month plan to the COO and Finance: GMV and contribution targets by brand, the headcount it needs, and the model (service or distribution) for each account.",
    ],
    exit: "A plan leadership has signed off on, with the numbers to hold me to it.",
  },
];

export const QUESTIONS: { theme: string; qs: string[] }[] = [
  {
    theme: "The business",
    qs: [
      "What share of the TikTok Shop book is on service terms versus distribution, and where do you want that mix in two years?",
      "Rank the book by GMV and by contribution. How different do those two lists look today?",
      "Which brands have churned in the last year, and what did they say on the way out?",
    ],
  },
  {
    theme: "The engine",
    qs: [
      "How much of the creator network is shared across brands, and how do you decide which brand gets a top creator’s attention?",
      "What’s the sample-to-post rate across the portfolio, and does anyone own it?",
      "Is LIVE a profit center, a service line, or a marketing cost for the brands?",
    ],
  },
  {
    theme: "The seat",
    qs: [
      "What does this role own on day one that the COO owns today?",
      "Which teams report in: account management, creator, LIVE, paid? Which are dotted-line?",
      "What would make you say, a year from now, that this hire worked?",
    ],
  },
  {
    theme: "The portfolio",
    qs: [
      "How do Fanfix and the rest of the group connect to the TikTok Shop business today, if at all?",
      "Where does the Amazon business share people, tools, or brands with TikTok Shop?",
    ],
  },
];
