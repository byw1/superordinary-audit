"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import SoMark from "@/components/SoMark";
import { TLink, usePrepAllowed, useShare, useToggleHref } from "@/lib/mode";

const NAV = [
  { href: "/#company", label: "Company" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/#engine", label: "Engine" },
  { href: "/#numbers", label: "Numbers" },
  { href: "/#plan", label: "Plan" },
  { href: "/#why", label: "Why me" },
];

export default function Shell({ children }: { children: ReactNode }) {
  const prepAllowed = usePrepAllowed();
  const share = useShare();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          scrolled ? "border-b border-line bg-white/85 backdrop-blur-xl" : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 w-full max-w-[1280px] items-center gap-6 px-5 sm:px-8">
          <TLink href="/" className="flex shrink-0 items-center gap-2.5 text-ink">
            <SoMark className="h-7 w-7" />
            <span className="font-[family-name:var(--font-display)] text-[15px] font-semibold tracking-[-0.02em]">
              SUPERORDINARY
            </span>
            <span className="hidden text-[12px] text-mute md:inline">/ an operator’s read</span>
          </TLink>

          <nav className="ml-auto hidden items-center gap-6 lg:flex">
            {NAV.map((n) => (
              <TLink key={n.href} href={n.href} className="text-[13.5px] text-ink-2 transition-colors hover:text-ink">
                {n.label}
              </TLink>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2 lg:ml-2">
            {prepAllowed && !share && (
              <TLink
                href="/prep"
                className={`rounded-full border px-3 py-1 text-[12px] ${
                  pathname === "/prep" ? "border-live text-live" : "border-line-2 text-ink-2 hover:text-ink"
                }`}
              >
                Prep
              </TLink>
            )}
            {prepAllowed && <ModeSwitch />}
            <a
              href="mailto:william@bywilliaml.com"
              className="rounded-full bg-live px-4 py-2 text-[13px] font-medium text-white transition-transform hover:scale-[1.03]"
            >
              Get in touch
            </a>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="surface-dark">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div className="flex items-center gap-3 text-white">
              <SoMark className="h-10 w-10" />
              <div>
                <div className="font-[family-name:var(--font-display)] text-[18px] font-semibold tracking-[-0.02em]">
                  An operator’s read
                </div>
                <div className="text-[13px] text-mute">Prepared by William Lee · September 2026</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-6 text-[13px] text-ink-2">
              <button type="button" onClick={() => window.print()} className="no-print hover:text-white">
                Save as PDF
              </button>
              <a href="mailto:william@bywilliaml.com" className="hover:text-white">
                william@bywilliaml.com
              </a>
              <a href="https://linkedin.com/in/bywilliaml" className="hover:text-white">
                LinkedIn
              </a>
            </div>
          </div>
          <p className="mt-10 max-w-[90ch] border-t border-line pt-6 text-[12px] leading-[1.6] text-faint">
            Independent work by a candidate, built from public sources. Not affiliated with, or endorsed
            by, SuperOrdinary. Brand names and logos belong to their owners and are shown to describe
            the company’s public partnerships.
          </p>
        </div>
      </footer>
    </>
  );
}

function ModeSwitch() {
  const share = useShare();
  const href = useToggleHref();
  return (
    <a
      href={href}
      title={share ? "Previewing what a recipient sees. Switch back to prep." : "Preview exactly what a recipient sees."}
      className="no-print flex items-center rounded-full border border-line-2 p-0.5 text-[11px]"
    >
      <span className={`rounded-full px-2 py-0.5 ${!share ? "bg-ink text-paper" : "text-mute"}`}>Prep</span>
      <span className={`rounded-full px-2 py-0.5 ${share ? "bg-live text-white" : "text-mute"}`}>Share</span>
    </a>
  );
}
