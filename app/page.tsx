import Business from "@/components/sections/Business";
import Chapter from "@/components/sections/Chapter";
import Close from "@/components/sections/Close";
import Engine from "@/components/sections/Engine";
import Hero from "@/components/sections/Hero";
import Numbers from "@/components/sections/Numbers";
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
        id="engine"
        n="02"
        kicker="The engine"
        title={<>Nine workflows run the business. <em className="italic text-live-deep">Each one leaks somewhere.</em></>}
        sub="Every line of the GM role breaks down into a workflow with stages, owners, and places where money escapes. Pick one to see it end to end, and the first change I’d make. TikTok Shop mechanics are public; how SuperOrdinary staffs each stage is my read from the outside."
      >
        <Engine />
      </Chapter>
      <Chapter
        id="numbers"
        n="03"
        kicker="The numbers"
        title={<>GMV is the headline. <em className="italic text-live-deep">Contribution is the job.</em></>}
        sub="Three live models, from one month of creator sampling down to one order and up to one brand account. Move the inputs. The numbers are illustrative, not SuperOrdinary’s; the mechanics are real."
      >
        <Numbers />
      </Chapter>
      <Chapter
        id="plan"
        n="04"
        kicker="The plan"
        title={<>Learn the book, fix the biggest leak, <em className="italic text-live-deep">then grow.</em></>}
        sub="A plan written from the outside is a hypothesis. The first month is for finding out where this one is wrong. The order doesn’t change: measure before optimizing, fix leaks before adding volume."
      >
        <Plan />
      </Chapter>
      <Chapter
        id="why"
        n="05"
        kicker="Why me"
        title={<>I’ve run the creator side and <em className="italic text-live-deep">the operating side</em>, at once.</>}
      >
        <Why />
      </Chapter>
      <Close />
    </>
  );
}
