import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

/** A numbered chapter of the single-page story. */
export default function Chapter({
  id,
  n,
  kicker,
  title,
  sub,
  children,
}: {
  id: string;
  n: string;
  kicker: string;
  title: ReactNode;
  sub?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-16 border-t border-white/[0.05] py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-8">
        <Reveal>
          <div className="mb-14 max-w-[760px]">
            <div className="mb-5 flex items-center gap-3 text-[12px] text-mute">
              <span className="font-mono text-live">{n}</span>
              <span className="h-px w-8 bg-line-2" />
              {kicker}
            </div>
            <h2 className="u-display text-[40px] leading-[1.02] text-ink sm:text-[58px]">{title}</h2>
            {sub && <p className="mt-6 max-w-[62ch] text-[16.5px] leading-[1.65] text-ink-2">{sub}</p>}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
