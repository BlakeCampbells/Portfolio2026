# Nuxt maintenance implementation plan

**Goal:** Update stable dependencies while preserving the portfolio's content, layout, transitions, navigation, and canonical URLs; audit Search Console readiness.

**Architecture:** Keep the existing Nuxt 4 application and prerendered routes. Upgrade the existing modules using their migration guide and make only metadata configuration corrections.

**Tech stack:** Nuxt 4, Vue 3, Vue Router 5, Nuxt Image, Nuxt Sitemap, Nuxt Robots, npm.

**Scope:** The user's September 8 maintenance request and Search Console screenshot. No deployment or Search Console submission is requested.

- [x] Inspect configuration, history, official release notes, npm registry versions, generated metadata, and public crawl responses.
- [x] Generate the original application with `npm run generate`; retain `/tmp/portfolio-baseline-public` for comparison.
- [x] Update the six existing dependencies in `package.json` and `package-lock.json`; declare Nuxt's supported Node versions.
- [x] Add `scripts/check-seo.mjs` to check all content routes, canonical/OG URLs, robots, structured data, and sitemap dates against generated artifacts. Run against baseline to confirm the date check fails.
- [x] In `nuxt.config.ts`, remove obsolete `runtimeConfig.public.siteUrl`, explicitly retain `site.trailingSlash: false`, add `htmlAttrs.lang: 'en'`, and set `sitemap.autoLastmod: false` because build timestamps do not describe content changes.
- [x] Run static generation and the SEO check, a production server build and HTTP route checks, dependency validation/audit, and browser navigation checks. Compare original versus updated page content and styling.
- [x] Document runtime requirements, reproducible npm commands, verified SEO findings, and remaining public hosting/Search Console checks in `README.md`.

Do not introduce redirect middleware: the previous implementation was deliberately removed, and the generated canonical and sitemap URLs already agree. Verify hosting policy before proposing redirect changes.

## Verification results

- Clean `npm ci`, `npm run typecheck`, `npm run generate`, `npm run build`, and `npm run check:seo` passed.
- SEO checks pass for all 14 pages; baseline test correctly failed on artificial lastmod timestamps.
- Rendered body structure, attributes, and text match the baseline on all 14 pages, excluding generated Vue scope IDs. Desktop homepage screenshots match; About content geometry/styles match; mobile Uses layout and client navigation to Work, Apple, Uses, and About were checked without browser warnings/errors.
- Production HTTP checks passed for 41 canonical/slash/query URL variants, two missing-page 404s, the existing /works redirect, sitemap, robots.txt, and the headshot image. Development server starts and renders the homepage.
- npm audit reports zero vulnerabilities. All six existing direct dependencies are at their latest stable releases. TypeScript stays on 6.0.3 for vue-tsc compatibility.
- Type checks required a type-only five-category tuple annotation and replacing the nonstandard favicon relation with shortcut icon.
- Independent code review found no actionable issues. Changes remain local and uncommitted on codex/nuxt-maintenance-seo.
- Upstream build emits a harmless unused h3 import warning; npm reports a transitive glob deprecation and pending esbuild/fsevents install-script notices. Builds and clean installation succeed.
