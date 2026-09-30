"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import {
  createContext,
  useContext,
  useMemo,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";

const ModeCtx = createContext(false);

/** `?share` — hardcoded two-state gate. Default (absent) is private. */
export function ModeProvider({ children }: { children: ReactNode }) {
  const params = useSearchParams();
  const share = params.has("share");
  return <ModeCtx.Provider value={share}>{children}</ModeCtx.Provider>;
}

export function useShare() {
  return useContext(ModeCtx);
}

/** Every internal link carries the mode with it, so share links stay shared. */
export function TLink({
  href,
  children,
  ...rest
}: Omit<ComponentPropsWithoutRef<typeof Link>, "href"> & { href: string }) {
  const share = useShare();
  return (
    <Link href={share ? withShare(href) : href} {...rest}>
      {children}
    </Link>
  );
}

export function withShare(href: string) {
  const [base, hash] = href.split("#");
  const q = base.includes("?") ? `${base}&share` : `${base}?share`;
  return hash ? `${q}#${hash}` : q;
}

/** The href that flips the current page into the other mode. */
export function useToggleHref() {
  const share = useShare();
  const pathname = usePathname();
  const params = useSearchParams();
  return useMemo(() => {
    const next = new URLSearchParams(params.toString());
    if (share) next.delete("share");
    else next.set("share", "");
    const qs = next.toString().replace(/=(?=&|$)/g, "");
    return qs ? `${pathname}?${qs}` : pathname;
  }, [share, pathname, params]);
}
