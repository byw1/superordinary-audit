// Plain .mjs rather than .ts on purpose: loading a TypeScript config requires
// the `typescript` package at build time, which is a dev dependency and so is
// the first thing to disappear when a deploy installs with production=true.

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
  async redirects() {
    return Object.entries(OLD).map(([source, destination]) => ({ source, destination, permanent: false }));
  },
};

export default nextConfig;
