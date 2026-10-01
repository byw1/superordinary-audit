import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import "@fontsource/zalando-sans-semiexpanded/500.css";
import "@fontsource/zalando-sans-semiexpanded/600.css";
import "@fontsource/zalando-sans-semiexpanded/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import { headers } from "next/headers";
import { Suspense } from "react";
import "./globals.css";
import Shell from "@/components/Shell";
import { ModeProvider } from "@/lib/mode";
import { getView } from "@/lib/view";

const TITLE = "SuperOrdinary · An operator’s read";
const DESCRIPTION =
  "An outside-in read of SuperOrdinary's TikTok Shop engine: how the business makes money, where value leaks, the numbers underneath, and how I'd run it.";

// Fonts come from npm packages (geist, @fontsource) rather than
// next/font/google, so a production build never depends on a network fetch.

// The view is decided per request (middleware.ts), so nothing is prerendered.
export const dynamic = "force-dynamic";

// Without an absolute base, the OG image resolves against localhost and the
// preview card breaks wherever the link gets pasted. The base comes from the
// host the request arrived on, so workers.dev and a custom domain both work
// with nothing baked in at build time. NEXT_PUBLIC_SITE_URL pins it if needed.
async function siteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3000";
  const proto = h.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  return `${proto}://${host}`;
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL(await siteUrl()),
    title: TITLE,
    description: DESCRIPTION,
    openGraph: { title: TITLE, description: DESCRIPTION, type: "website" },
    twitter: { card: "summary_large_image" },
    robots: { index: false, follow: false },
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const mode = await getView();
  return (
    <html lang="en" className={GeistMono.variable}>
      <body className="min-h-screen antialiased">
        <Suspense fallback={null}>
          <ModeProvider mode={mode}>
            <Shell>{children}</Shell>
          </ModeProvider>
        </Suspense>
      </body>
    </html>
  );
}
