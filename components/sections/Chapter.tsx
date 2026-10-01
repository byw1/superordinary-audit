import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

/** A numbered chapter of the single-page story, in SuperOrdinary's system. */
export default function Chapter({
  id,
  n,
  kicker,
  title,
  sub,
  dark = false,
  children,
}: {
  id: string;
  n: string;
  kicker: string;
  title: ReactNode;
  sub?: ReactNode;
  dark?: boolean;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`scroll-mt-16 py-24 sm:py-32 ${dark ? "surface-dark" : "border-t border-line bg-paper"}`}>
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8">
        <Reveal>
          <div className="mb-14 grid gap-6 lg:grid-cols-[180px_1fr]">
            <div className="flex items-start gap-3 pt-2">
              <span className="u-num text-[15px] font-semibold text-live">{n}</span>
              <span className="u-label pt-[3px]">{kicker}</span>
            </div>
            <div className="max-w-[880px]">
              <h2 className="u-display text-[38px] text-ink sm:text-[56px]">{title}</h2>
              {sub && <p className="mt-6 max-w-[64ch] text-[17px] leading-[1.65] text-ink-2">{sub}</p>}
            </div>
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
