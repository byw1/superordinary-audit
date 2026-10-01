import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import "@fontsource/zalando-sans-semiexpanded/500.css";
import "@fontsource/zalando-sans-semiexpanded/600.css";
import "@fontsource/zalando-sans-semiexpanded/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
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

// Without an absolute base, the OG image resolves against localhost and the
// preview card breaks wherever the link gets pasted.
const host =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.RAILWAY_PUBLIC_DOMAIN
    ? `https://${process.env.RAILWAY_PUBLIC_DOMAIN}`
    : "http://localhost:3000");

// The view is decided per request (middleware.ts), so nothing is prerendered.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  metadataBase: new URL(host),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, type: "website" },
  twitter: { card: "summary_large_image" },
  robots: { index: false, follow: false },
};

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
