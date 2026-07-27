# kanonadvisory.com

Astro static site, deployed as a Cloudflare **Worker with static assets**
(not a Pages project — check the dashboard URL if you're unsure: it will say
`/workers/services/` rather than `/pages/`).

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
```

## Deploy (Cloudflare Workers)

The output directory is configured in `wrangler.jsonc` (`assets.directory = "./dist"`),
NOT in the dashboard. The only dashboard field that needs to change is the build command.

Worker → Settings → Build → Build configuration:

| Field          | Value               |
| -------------- | ------------------- |
| Build command  | `npm run build`     |
| Deploy command | `npx wrangler deploy` (unchanged) |
| Root directory | `/` (unchanged)     |

Node version comes from `.nvmrc` in the repo root. Don't set it in the dashboard.

Every push to `main` triggers a build and deploy. Rollback is under Deployments.

---

## BEFORE YOU DEPLOY — three things

### 1. Copy `blueprint.jpg` into `public/`

The homepage hero references `/blueprint.jpg`. It's in your current repo; it isn't in this
one. Copy it across, and while you're at it export a WebP version — the original is a photo
being served at full size on the largest element of the page.

### 2. The firm-license flag

`src/config.ts` has one boolean:

```ts
export const TSBPA_FIRM_LICENSED = false;
```

While it's `false`, the site says services are provided *by a licensed CPA* and renders the
disclaimer required by 22 TAC 501.81(c) in the footer and on /disclosures/.

Flip it to `true` **only after TSBPA issues the firm license.** One line, and the disclaimer
disappears sitewide and the "licensed CPA firm" language turns on. Nothing else to change.

### 3. The two articles are `draft: true`

`src/content/insights/` has two seed articles — the widow's-penalty piece and the RSU
withholding piece. They are drafts I wrote as pattern examples. **Read them as the
practitioner before you publish anything under your license.** I've kept the tax mechanics
general and avoided anything that reads as investment advice, but you're the CPA and your
name is on it. Flip `draft: false` when you're satisfied.

---

## Adding content

**A new article** — drop a `.md` file in `src/content/insights/`:

```yaml
---
title: "..."
description: "..."          # this is the meta description; write it deliberately
published: 2026-08-14
cluster: transitions        # or: complexity
relatedService: equity-compensation   # slug of a file in content/services/
draft: false
---
```

Setting `relatedService` wires it into the hub-and-spoke automatically: the article gets a
link back to the service page, and the service page lists the article under "Related
reading." That link is what turns informational traffic into commercial pages — don't skip it.

**A new service** — same idea, `.md` in `src/content/services/`. It appears on the homepage
grid, the services hub under its cluster, the footer, and the contact form checkboxes, and
gets `Service` schema. No template editing.

## What's in here

- 15 indexed URLs, auto-generated sitemap at `/sitemap-index.xml`
- Zero JavaScript bundle; only two small inline scripts (mobile nav, form submit)
- Self-hosted DM Serif Display + DM Sans as woff2, preloaded — no third-party font request
- Schema: `AccountingService` (home), `Service` (service pages), `Article` (insights),
  `BreadcrumbList`, `Person` (about)
- OG + Twitter `summary_large_image` cards on every page
- `_headers` with basic security headers and immutable font caching
- Skip link, visible focus rings, `prefers-reduced-motion` respected

## Still on you

- **Submit the new sitemap** in Google Search Console after deploy. Also set up Bing Webmaster Tools.
- **The WISP.** `/privacy/` states you maintain a written information security program, because
  the FTC Safeguards Rule requires one. Make sure that document exists.
- **The client portal.** `/privacy/` and a few service pages reference an encrypted portal.
  Name the actual product once you've picked one.
- **Legal review.** `/privacy/`, `/terms/`, and `/disclosures/` are solid drafts written against
  the rules we looked at — GLBA/Reg P, IRC 7216, 22 TAC 501.81, Circular 230 10.30. They are not
  a substitute for an attorney reading them.
- **Old URLs.** Nothing to redirect: the current site is one page and it stays at `/`.
