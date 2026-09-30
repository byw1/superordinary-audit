# SuperOrdinary, read like an operator

An outside-in audit of SuperOrdinary's TikTok Shop business, built as interview
prep for the **GM / VP, TikTok Shop Operations** role and as something I can
send to the recruiter or hiring team afterwards.

The spine of the site is the job description's "What you'll own" list. Each
line becomes a workflow, a model, or a report.

| Route | What it is |
| --- | --- |
| `/` | The business on one page: what SuperOrdinary is, how money and product move, where the GM sits |
| `/engine` | The nine workflows the role owns, each with stages, leaks, KPIs, the first change I'd make, and my evidence. Deep-link with `?w=<id>` |
| `/economics` | Two live models: one order of a hero SKU (breakeven ROAS), and one brand account under service vs. distribution terms |
| `/scorecard` | KPI trees, a sample portfolio board, and the operating cadence |
| `/fanfix` | Fanfix and the rest of the group, and where they could meet TikTok Shop |
| `/plan` | First 90 days and the questions I'd ask |
| `/fit` | The posting's requirements, answered with evidence |

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

No database, no runtime fetches. Everything renders from `data/*.ts`:
`company.ts` (research), `workflows.ts`, `economics.ts`, `scorecard.ts`,
`plan.ts`, `fit.ts`, `evidence.ts` (my track record).

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
