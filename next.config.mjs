// Plain .mjs rather than .ts on purpose: loading a TypeScript config requires
// the `typescript` package at build time, which is a dev dependency and so is
// the first thing to disappear when a deploy installs with production=true.
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
