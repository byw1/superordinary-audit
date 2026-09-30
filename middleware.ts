import { NextResponse, type NextRequest } from "next/server";

/**
 * Two views. The public one is the default, so a forwarded link can never
 * expose prep notes. The prep view needs PREP_KEY: visit any page with
 * ?prep=<key> once and a cookie remembers it; ?prep=off forgets it. Inside the
 * prep view, ?share previews exactly what a recipient sees.
 *
 * The decision is made here, on the server, and passed down as a request
 * header, so prep-only content is never rendered or serialized for anyone
 * else — not hidden with CSS, not present in the page payload at all.
 */
const COOKIE = "so_prep";

function prepKey() {
  if (process.env.PREP_KEY) return process.env.PREP_KEY;
  // Local development only: no key configured means ?prep=dev works.
  return process.env.NODE_ENV === "development" ? "dev" : null;
}

export function middleware(req: NextRequest) {
  const key = prepKey();
  const url = req.nextUrl;
  const asked = url.searchParams.get("prep");

  if (asked !== null) {
    const clean = url.clone();
    clean.searchParams.delete("prep");
    const res = NextResponse.redirect(clean);
    if (key && asked === key) {
      res.cookies.set(COOKIE, key, {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 60,
        path: "/",
      });
    } else {
      res.cookies.delete(COOKIE);
    }
    return res;
  }

  const prepAllowed = !!key && req.cookies.get(COOKIE)?.value === key;
  const view = prepAllowed && !url.searchParams.has("share") ? "prep" : "share";

  // Overwrite rather than trust anything a client sent under these names.
  const headers = new Headers(req.headers);
  headers.set("x-so-prep-allowed", prepAllowed ? "1" : "0");
  headers.set("x-so-view", view);
  return NextResponse.next({ request: { headers } });
}

export const config = {
  matcher: ["/((?!_next/|icon.svg|opengraph-image|favicon.ico).*)"],
};
