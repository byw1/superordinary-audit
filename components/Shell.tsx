"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { TLink, usePrepAllowed, useShare, useToggleHref } from "@/lib/mode";

const NAV = [
  { href: "/#business", label: "The business" },
  { href: "/#engine", label: "The engine" },
  { href: "/#numbers", label: "The numbers" },
  { href: "/#plan", label: "The plan" },
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
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
          scrolled ? "border-b border-white/[0.06] bg-paper/75 backdrop-blur-xl" : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-14 w-full max-w-[1200px] items-center gap-6 px-4 sm:px-8">
          <TLink href="/" className="flex shrink-0 items-center gap-2.5">
            <span className="u-live-dot block h-2 w-2 rounded-full bg-live shadow-[0_0_12px_rgba(255,90,54,0.9)]" />
            <span className="text-[13px] font-medium tracking-[-0.01em] text-ink">SuperOrdinary</span>
            <span className="hidden text-[13px] text-mute sm:inline">· an operator’s read</span>
          </TLink>

          <nav className="ml-auto hidden items-center gap-6 lg:flex">
            {NAV.map((n) => (
              <TLink key={n.href} href={n.href} className="text-[13px] text-ink-2 transition-colors hover:text-ink">
                {n.label}
              </TLink>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2 lg:ml-2">
            {prepAllowed && !share && (
              <TLink
                href="/prep"
                className={`rounded-full border px-3 py-1 text-[12px] transition-colors ${
                  pathname === "/prep" ? "border-live text-live-deep" : "border-line-2 text-ink-2 hover:text-ink"
                }`}
              >
                Prep
              </TLink>
            )}
            {prepAllowed && <ModeSwitch />}
            <a
              href="mailto:william@bywilliaml.com"
              className="rounded-full bg-ink px-3.5 py-1.5 text-[12.5px] font-medium text-paper transition-transform hover:scale-[1.03]"
            >
              Get in touch
            </a>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-line">
        <div className="mx-auto flex w-full max-w-[1200px] flex-wrap items-center justify-between gap-3 px-4 py-8 text-[12.5px] text-faint sm:px-8">
          <span>Prepared by William Lee · outside-in, from public sources · September 2026</span>
          <span className="flex gap-5">
            <button type="button" onClick={() => window.print()} className="no-print hover:text-ink">
              Save as PDF
            </button>
            <a href="mailto:william@bywilliaml.com" className="hover:text-ink">
              william@bywilliaml.com
            </a>
            <a href="https://linkedin.com/in/bywilliaml" className="hover:text-ink">
              LinkedIn
            </a>
          </span>
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
