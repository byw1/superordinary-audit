"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Only render while the canvas is on screen, and render once (no animation)
 * for people who asked for reduced motion. Keeps idle pages at zero GPU cost.
 */
export function useVisibleFrameloop<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [frameloop, setFrameloop] = useState<"always" | "demand" | "never">("always");

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setFrameloop(entry.isIntersecting ? (reduced ? "demand" : "always") : "never"),
      { rootMargin: "100px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, frameloop };
}
