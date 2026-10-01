// Plain .mjs rather than .ts on purpose: loading a TypeScript config requires
// the `typescript` package at build time, which is a dev dependency and so is
// the first thing to disappear when a deploy installs with production=true.

import { readdirSync } from "node:fs";

// Which brands have a logo on disk, read here at build time. The deployed
// worker has no filesystem: public/ lives in Cloudflare's asset store, so
// checking for the file per request would always come back empty.
const LOGO_DOMAINS = readdirSync(new URL("./public/logos/", import.meta.url))
  .filter((f) => f.endsWith(".png"))
  .map((f) => f.slice(0, -".png".length));

// The site used to be nine pages. Every old URL lands on its chapter, so a
// link that was already sent still works.
const OLD = {
  "/engine": "/#engine",
  "/economics": "/#numbers",
  "/scorecard": "/#numbers",
  "/fanfix": "/#business",
  "/plan": "/#plan",
  "/q4": "/#plan",
  "/fit": "/#why",
  "/sources": "/",
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // The brand logos are 32–128px favicons. Serving them as-is from Cloudflare's
  // static assets beats routing each one through the worker to be resized.
  images: { unoptimized: true },
  env: { LOGO_DOMAINS: LOGO_DOMAINS.join(",") },
  async redirects() {
    return Object.entries(OLD).map(([source, destination]) => ({ source, destination, permanent: false }));
  },
};

export default nextConfig;
