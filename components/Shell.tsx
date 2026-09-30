"use client";

import { usePathname } from "next/navigation";
import { useCallback, type ReactNode } from "react";
import { TLink, usePrepAllowed, useShare, useToggleHref } from "@/lib/mode";

const NAV = [
  { href: "/", label: "Overview" },
  { href: "/engine", label: "Workflows" },
  { href: "/economics", label: "Economics" },
  { href: "/scorecard", label: "Scorecard" },
  { href: "/fanfix", label: "Fanfix" },
  { href: "/plan", label: "First 90 days" },
  { href: "/fit", label: "Fit" },
];

export default function Shell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const prepAllowed = usePrepAllowed();
  const share = useShare();
  const isActive = useCallback(
    (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href)),
    [pathname],
  );

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-sm">
        <div className="mx-auto flex h-12 w-full max-w-[1160px] items-center gap-5 px-4 sm:px-8">
          <TLink href="/" className="flex shrink-0 items-center gap-2">
            <span className="u-live-dot block h-2 w-2 rounded-full bg-live" />
            <span className="font-mono text-[11.5px] font-semibold uppercase tracking-[0.1em] text-ink">
              SO / Audit
            </span>
          </TLink>

          <nav className="flex min-w-0 flex-1 items-center gap-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {(prepAllowed && !share ? [...NAV, { href: "/prep", label: "Interview prep" }] : NAV).map((n) => (
              <TLink
                key={n.href}
                href={n.href}
                className={`shrink-0 border-b-2 py-[14px] font-mono text-[11px] uppercase tracking-[0.1em] transition-colors ${
                  isActive(n.href)
                    ? "border-live text-ink"
                    : "border-transparent text-mute hover:text-ink"
                }`}
              >
                {n.label}
              </TLink>
            ))}
          </nav>

          {prepAllowed && <ModeSwitch />}
        </div>
      </header>

      <main className="mx-auto w-full max-w-[1160px] px-4 pb-24 pt-10 sm:px-8">{children}</main>

      <Footer />
    </>
  );
}

function ModeSwitch() {
  const share = useShare();
  const href = useToggleHref();
  return (
    <a
      href={href}
      title={
        share
          ? "Previewing exactly what a recipient sees. Switch back to prep."
          : "Showing the private prep view (objections, referral notes, candid reads). Switch to the share view."
      }
      className="no-print flex shrink-0 items-center rounded-full border border-line-2 p-0.5 font-mono text-[10px] uppercase tracking-[0.1em]"
    >
      <span className={`rounded-full px-2 py-0.5 ${!share ? "bg-ink text-paper" : "text-mute"}`}>
        Prep
      </span>
      <span className={`rounded-full px-2 py-0.5 ${share ? "bg-live text-white" : "text-mute"}`}>
        Share
      </span>
    </a>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-[1160px] flex-wrap items-center justify-between gap-3 px-4 py-6 font-mono text-[10.5px] uppercase tracking-[0.1em] text-faint sm:px-8">
        <span>
          Prepared by William Lee · outside-in, public sources ·{" "}
          <TLink href="/sources" className="underline underline-offset-4 hover:text-ink">
            Sources
          </TLink>
        </span>
        <span className="flex gap-4">
          <a href="mailto:william@bywilliaml.com" className="hover:text-ink">
            william@bywilliaml.com
          </a>
          <a href="https://linkedin.com/in/bywilliaml" className="hover:text-ink">
            LinkedIn
          </a>
        </span>
      </div>
    </footer>
  );
}
