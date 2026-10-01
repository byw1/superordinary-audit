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

1. On Cloudflare, add a secret `PREP_KEY` holding a long random string (see
   [Deploy on Cloudflare](#deploy-on-cloudflare)).
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
npm run dev        # http://localhost:3000, plain Next.js
npm run preview    # the production build in Cloudflare's runtime, http://localhost:8787
```

For `npm run preview`, put `PREP_KEY=<anything>` in a `.dev.vars` file
(gitignored) to try the prep view locally.

## Deploy on Cloudflare

It runs as a Cloudflare Worker through the
[OpenNext adapter](https://opennext.js.org/cloudflare) (`wrangler.jsonc`,
`open-next.config.ts`). Static files are served from Cloudflare's asset store;
only page requests run the worker. It fits the free Workers plan.

**From GitHub (deploys on every push):**

1. Cloudflare dashboard → Workers & Pages → Create → Import a repository →
   `byw1/superordinary-audit`.
2. Build command: `npx opennextjs-cloudflare build`.
   Deploy command: `npx opennextjs-cloudflare deploy`.
   Leave `npm run build` as plain `next build`: the adapter calls it itself.
3. After the first deploy: the worker → Settings → Variables and Secrets → add
   `PREP_KEY` as a **Secret**.
4. Settings → Domains & Routes to add a custom domain, if you want one. The
   `*.workers.dev` URL works as is.

**From your machine:** `npx wrangler login`, then `npm run deploy`, and
`npx wrangler secret put PREP_KEY` once.

The link-preview image's absolute URL comes from the host each request arrives
on, so the workers.dev URL and a custom domain both get a working preview card
with nothing to configure. Set `NEXT_PUBLIC_SITE_URL` at build time only to pin
one.

Node 22 is pinned via `.nvmrc` and `engines.node`. Tailwind v4's native binding
needs Node 20+, and an older builder fails late with `Cannot find native
binding`.

The worker has no filesystem, so nothing may check for files at request time.
The logo list, for example, is read from `public/logos` in `next.config.mjs`
during the build.

Fonts ship from npm (`geist`, `@fontsource/*`) rather than `next/font/google`,
so the build never depends on a network fetch.

The site sets `noindex` so it doesn't show up in search.
