# SuperOrdinary, read like an operator

An outside-in audit of SuperOrdinary's TikTok Shop business, built as interview
prep for the **GM / VP, TikTok Shop Operations** role and as something I can
send to the recruiter or hiring team afterwards.

One page, one story, in five chapters, for a decision-maker to scroll in five
minutes:

| Chapter | What it is |
| --- | --- |
| Hero | Real-time 3D flywheel: the Shop at the core, three orbits (video, LIVE, the Shop tab), creators flowing in, money in red |
| 01 The business | How money moves, the five revenue lines, four platform shifts, Fanfix, the competitive field |
| 02 The engine | Nine workflows the role owns, each with stages, leaks and the first change I'd make |
| 03 The numbers | Three live models: a 3D creator-sampling funnel, one order (breakeven ROAS), one account (service vs. buy/sell) |
| 04 The plan | First 90 days, and the Black Friday run-up counted back from Thanksgiving |
| 05 Why me | Six proof points and contact |

`/prep` (key only, 404 otherwise) holds everything for me: the walkthrough
script, likely questions, the pushback and gaps, who's who, and what to handle
carefully. The old multi-page URLs redirect to their chapter.

3D is three.js via React Three Fiber, lazy-loaded so text paints first, paused
whenever the canvas is off screen, and rendered once (no animation) for
reduced-motion users.

## Public vs. prep

The **public view is the default**, so any link you send, or anything a
recipient finds by editing the URL, shows only the audit and the evidence.

The **prep view** adds the honest gaps against each requirement, the pushback I
expect with my answers, who's who, and referral notes. It needs a key:

1. On Railway, set the variable `PREP_KEY` to a long random string.
2. Visit any page with `?prep=<PREP_KEY>` once. A cookie remembers it for 60
   days and the key is removed from the address bar.
3. A **Prep / Share** toggle appears in the header. Share previews exactly what
   a recipient sees. `?prep=off` forgets the cookie.

The decision happens on the server (`middleware.ts` → `lib/view.ts`), so
prep-only content is never rendered or shipped to anyone without the key. It's
not hidden with CSS, and it isn't in the page payload or the JS bundles. Locally,
with no key set, `?prep=dev` works.

Every claim is marked **Sourced**, **Outside-in read**, or **Illustrative
model**, so nobody mistakes a hypothesis for inside knowledge. The sample
portfolio board uses invented brands.

## Data

No database, no runtime fetches. Everything renders from `data/*.ts`.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm run start
```

## Deploy on Railway

1. New project → Deploy from GitHub repo → `byw1/superordinary-audit`.
2. Variables → add `PREP_KEY` (see above).
3. Settings → Networking → **Generate domain**. Do this before the build you
   intend to share: the link-preview image's absolute URL is baked in at build
   time from `RAILWAY_PUBLIC_DOMAIN` (or `NEXT_PUBLIC_SITE_URL`).
4. Redeploy once the domain exists.

Node 22 is pinned via `.nvmrc` and `engines.node`. That pin matters: Railway's
builder otherwise defaults to Node 18, and Tailwind v4's native binding needs
Node 20+ — the failure surfaces much later as `Cannot find native binding`.
Build and start commands are the defaults (`npm run build`, `npm run start`);
`start` binds to `$PORT`.

Fonts ship from npm (`geist`, `@fontsource/instrument-serif`) rather than
`next/font/google`, so the build never depends on a network fetch.

The site sets `noindex` so it doesn't show up in search.
