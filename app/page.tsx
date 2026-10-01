import Business from "@/components/sections/Business";
import Chapter from "@/components/sections/Chapter";
import Close from "@/components/sections/Close";
import Engine from "@/components/sections/Engine";
import Hero from "@/components/sections/Hero";
import Numbers from "@/components/sections/Numbers";
import Org from "@/components/sections/Org";
import Portfolio from "@/components/sections/Portfolio";
import Plan from "@/components/sections/Plan";
import Why from "@/components/sections/Why";

/**
 * The whole site, as one story: the business, the engine, the numbers, the
 * plan, and why me. Prep material lives on /prep, behind the key.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Business />
      <Chapter
        id="portfolio"
        n="02"
        kicker="The portfolio"
        title={<>The brands on the platform, <span className="text-live">and where they come from.</span></>}
        sub="Every brand SuperOrdinary shows or names publicly, from prestige skincare to Disney and Crocs, plus the China-era partners that built its reputation."
      >
        <Portfolio />
      </Chapter>
      <Chapter
        id="engine"
        n="03"
        kicker="The engine"
        title={<>Nine workflows run the business. <span className="text-live">Each one leaks somewhere.</span></>}
        sub="First the team, as SuperOrdinary’s own job postings describe it. Then the nine workflows that team runs, each with its stages, owners, and the places money escapes, and the first change I’d make."
      >
        <Org />
        <Engine />
      </Chapter>
      <Chapter
        id="numbers"
        n="04"
        dark
        kicker="The numbers"
        title={<>GMV is the headline. <span className="text-live">Contribution is the job.</span></>}
        sub="Four live models: a month of creator sampling, an hour of LIVE costed at SuperOrdinary’s own posted pay, one order, and one brand account. Move the inputs. The numbers are illustrative, not SuperOrdinary’s; the mechanics are real."
      >
        <Numbers />
      </Chapter>
      <Chapter
        id="plan"
        n="05"
        kicker="The plan"
        title={<>Learn the book, fix the biggest leak, <span className="text-live">then grow.</span></>}
        sub="A plan written from the outside is a hypothesis. The first month is for finding out where this one is wrong. The order doesn’t change: measure before optimizing, fix leaks before adding volume."
      >
        <Plan />
      </Chapter>
      <Chapter
        id="why"
        n="06"
        kicker="Why me"
        title={<>I’ve run the creator side and <span className="text-live">the operating side</span>, at once.</>}
      >
        <Why />
      </Chapter>
      <Close />
    </>
  );
}
