# October dependency upgrade implementation plan

> **For agentic workers:** Use superpowers:executing-plans to carry out the upgrade and verification.

**Goal:** Upgrade dependencies on `feature/october_upgrade` and preserve the working portfolio.

**Architecture:** Retain the Nuxt 4 application, current configuration, static routes, and content. Update compatible stable packages and regenerate the npm lockfile.

**Tech Stack:** Nuxt, Vue, Vue Router, Nuxt Image, Sitemap, Robots, TypeScript, npm.

**Spec:** User request in this chat: create `feature/october_upgrade`, upgrade dependencies, and make sure everything still works.

## Global constraints

- Use the requested branch in the existing clean checkout.
- Preserve content, styling, route behavior, SEO metadata, and optimized images.
- Keep TypeScript on 6.0.x while vue-tsc lacks TypeScript 7 support.
- Match the Node engine range required by Nuxt and the SEO modules.

## Review focus

- Clean installation must reproduce the updated dependency tree without invalid peers.
- All 16 canonical pages must retain content and SEO metadata.
- Image variants must exist in static output and load in the browser.
- Client navigation, missing pages, and the `/works` redirect must still work.
- Development startup and production server output must both work.

## Upgrade and verification

- [x] Create the branch, inspect upstream migration notes, and run baseline typecheck, generation, and SEO validation.
- [x] Update `package.json`, `package-lock.json`, and runtime/compatibility notes in `README.md`.
- [x] Run a clean install, dependency audit, and typecheck.
- [x] Generate static output, validate SEO, and compare page content with the baseline.
- [x] Build and smoke-test the production server and browser navigation; check development startup.
- [x] Review the final diff independently and record results.

## Decisions

- Execute the authorized maintenance directly in the existing checkout. No new worktree, deployment, or content changes are needed.
- Use existing end-to-end output checks and browser smoke tests for this dependency-only change; do not add implementation-mirroring tests.
- Retain the SEO DevTools panels with the upstream-required host package. Its transitive esbuild advisory is documented rather than forcing an incompatible major dependency override.

## Verification results

- Verified with Node 26.3.0 and npm 11.16.0 on macOS arm64.
- Clean `npm ci`, full `npm ls --all`, `npm run typecheck`, `npm run generate`, `npm run check:seo`, and `npm run build` pass.
- All 16 canonical pages preserve their main-content markup, text, links, and image attributes. SEO validation covers sitemap, canonical and Open Graph URLs, metadata, structured data, robots.txt, and optimized image variants.
- CSS output changes reflect upstream minification (merged rules and `calc(clamp(...))`). Computed styles match the baseline on Home, Apple, and Consulting pages.
- Browser navigation through Home, Work, Apple, Uses, About, and Consulting succeeds with no warnings or errors; the project logo loads successfully.
- Nuxt DevTools opens successfully. Its protected panels were not exercised beyond the authorization gate, which requests browser permissions to run commands and access files.
- 53 production HTTP checks pass across route/slash/query variants, two missing-page 404s, the `/works` redirect, sitemap, robots.txt, and an optimized headshot. Development startup and homepage rendering pass.
- All existing direct dependencies are at their latest stable releases except the deliberate TypeScript 6 compatibility pin. npm audit findings fell from 24 (including three critical) to 19 (18 high, one low); remaining upstream advisories are documented in README.
- Independent review found no actionable defects and confirmed manifest/lockfile consistency and platform-specific optional dependency coverage.
