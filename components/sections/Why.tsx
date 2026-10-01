import Reveal from "@/components/Reveal";

const PROOF = [
  { big: "6th → 2nd", line: "Joined a creator talent agency (30+ creators, 300M+ combined following) as its sixth person and became second-in-command, owning operations, hiring and finance. Cut the team to 3, rebuilt it to 10." },
  { big: "~40%", line: "Share of revenue that runs through the influencer campaign platform I oversee at a music marketing agency serving major labels: creator seeding at label scale." },
  { big: "$500K", line: "Closed in under eight months by a talent manager I hired with no prior experience and trained myself." },
  { big: "~2×", line: "The creator’s standard rate on a $90K brand deal my CEO had passed on because he didn’t recognize the counterparty. It was Anthropic." },
  { big: "$100K", line: "In 16 days, on an e-commerce product I launched myself. Velocity outran cash, so I brought in a partner’s capital to fund it." },
  { big: "1 week", line: "To deliver the CRM a team had waited months for, cutting its cost from ~$1,100 to ~$60 a month. I build the tools I need with AI when buying them is slower." },
];

export default function Why() {
  return (
    <>
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
