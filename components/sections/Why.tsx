import Reveal from "@/components/Reveal";

const PROOF = [
  { big: "6th → 2nd", line: "Joined a creator talent agency (30+ creators, 300M+ combined following) as its sixth person and became second-in-command, owning operations, hiring and finance. Cut the team to 3, rebuilt it to 10." },
  { big: "~40%", line: "Share of revenue that runs through the influencer campaign platform I oversee at a music marketing agency serving major labels: creator seeding at label scale." },
  { big: "$500K", line: "Closed in under eight months by a talent manager I hired with no prior experience and trained myself." },
  { big: "~2×", line: "The creator’s standard rate on a $90K brand deal my CEO had passed on because he didn’t recognize the counterparty. It was Anthropic." },
  { big: "$100K", line: "In 16 days, on an e-commerce product I launched myself. Velocity outran cash, so I brought in a partner’s capital to fund it." },
  { big: "1 week", line: "To deliver the CRM a team had waited months for, cutting its cost from ~$1,100 to ~$60 a month. I build the tools I need with AI when buying them is slower." },
];

/** Their job postings on the left, my record on the right. Real numbers only. */
const MATCH = [
  {
    ask: "“Oversees Virtual Assistants who handle creator outreach, sample logistics and data entry.”",
    role: "Social Commerce Specialist / Manager",
    me: "Run a U.S. team plus a Philippine team, with a chief of staff I set up to run the Philippine weeklies; hired offshore through OnlineJobs.ph.",
  },
  {
    ask: "“Creator identification and outreach → sampling → content creation.”",
    role: "Social Commerce Specialist, Omnichannel",
    me: "Oversee the influencer seeding platform behind ~40% of a label-marketing agency’s revenue: find creators, get the song in their hands, measure what posts. Same motion as affiliate sampling.",
  },
  {
    ask: "“Grow the internal creator community… rebooking rate, attributable GMV.”",
    role: "Creator Success Manager",
    me: "Second-in-command at a 30+ creator agency (300M+ combined following). Built a tool that caught creator signings and departures across the market in near real time.",
  },
  {
    ask: "“Lead the P&L for TikTok Shop accounts.”",
    role: "Director, Brand Growth & P&L",
    me: "Final approver on every company payment; weekly AR/AP review; ~$25K in overdue receivables collected; ~$15K/month of non-performing spend cut.",
  },
  {
    ask: "“Enterprise brand point of contact… C-suite-ready decks.”",
    role: "Brand Lead",
    me: "Brand campaigns with Sony, F1 and Uber. Took back a $90K deal my CEO had passed on (it was Anthropic) and closed it at nearly 2× the creator’s rate.",
  },
  {
    ask: "“Weekly and monthly reporting… KPIs: GMV, traffic, conversion, CTR, CTOR, content volume.”",
    role: "Brand Lead · Specialist",
    me: "Run a daily sync and weekly one-on-ones, rebuilt company SOPs, and build the internal tools the reporting runs on, like a CRM delivered in a week.",
  },
];

export default function Why() {
  return (
    <>
      <Reveal>
        <div className="mb-6 u-card overflow-hidden">
          <div className="grid border-b border-line md:grid-cols-2">
            <div className="px-6 py-4 sm:px-8">
              <div className="u-label text-ink">What their postings ask for</div>
            </div>
            <div className="border-t border-line px-6 py-4 sm:px-8 md:border-l md:border-t-0">
              <div className="u-label text-live">What I’ve already done</div>
            </div>
          </div>
          <div className="divide-y divide-line">
            {MATCH.map((m) => (
              <div key={m.role + m.ask} className="grid md:grid-cols-2">
                <div className="px-6 py-5 sm:px-8">
                  <p className="text-[14.5px] leading-[1.55] text-ink">{m.ask}</p>
                  <p className="mt-1.5 text-[12px] text-faint">{m.role}</p>
                </div>
                <div className="border-t border-line bg-sunk/50 px-6 py-5 sm:px-8 md:border-l md:border-t-0">
                  <p className="text-[14.5px] leading-[1.55] text-ink-2">{m.me}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-sunk sm:grid-cols-2 lg:grid-cols-3">
        {PROOF.map((p, i) => (
          <Reveal key={p.big} delay={(i % 3) * 90} className="h-full">
            <div className="h-full bg-paper p-7 transition-colors hover:bg-card">
              <div className="u-display text-[52px] leading-none">{p.big}</div>
              <p className="mt-4 text-[14px] leading-[1.6] text-ink-2">{p.line}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-6 grid gap-6 rounded-3xl border border-line bg-sunk p-8 sm:p-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <p className="u-display text-[28px] leading-[1.2] text-ink sm:text-[34px]">
            Seven years operating across e-commerce, creator talent and marketing agencies. I’ve run
            the creator side and the operating side of this market at the same time, and I’d like to
            run yours.
          </p>
          <div className="flex flex-col gap-3 lg:items-end">
            <a
              href="mailto:william@bywilliaml.com"
              className="rounded-full bg-live px-6 py-3 text-[15px] font-medium text-white shadow-[0_10px_40px_-10px_rgba(255,90,54,0.8)] transition-transform hover:scale-[1.03]"
            >
              william@bywilliaml.com
            </a>
            <a href="https://linkedin.com/in/bywilliaml" className="text-[13.5px] text-ink-2 hover:text-ink">
              linkedin.com/in/bywilliaml ↗
            </a>
          </div>
        </div>
      </Reveal>
    </>
  );
}
