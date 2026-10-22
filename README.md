# Blake Campbell portfolio

Nuxt 4 portfolio with prerendered pages, Nuxt Image, XML sitemap, and robots.txt.

## Development and builds

Use Node 24 LTS, version 24.15.0 or newer (`nvm install`, `nvm use`, then `npm ci`). Nuxt 4.6, Sitemap 9, and Robots 7 require Node `^22.22.3 || ^24.15.0 || >=26.0.0`; configure the deployment build environment accordingly. Commit `package-lock.json` with dependency updates.

```bash
npm ci
npm run dev        # development server
npm run typecheck  # Vue, TypeScript, and Nuxt configuration
npm run generate   # static deployment output: .output/public
npm run check:seo  # validate generated pages, sitemap, and robots.txt
```

For a Node server deployment, run `npm run build`, then `npm run preview` (or `node .output/server/index.mjs`). Build on the deployment platform, since image processing includes platform-specific native binaries.

The TypeScript checker uses TypeScript 6.0.x: vue-tsc 3.3.13 cannot load TypeScript 7's changed package exports. Recheck compatibility before upgrading that major version. The `nuxtseo-devtools-host` development dependency preserves the Sitemap and Robots panels after their major upgrades.

The October 22, 2026 dependency audit reports 19 findings (18 high, one low), down from 24 in the previous lockfile (including three critical). These totals include affected parent packages. The remaining underlying advisories are [braces stack exhaustion](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm) and [node-forge signature verification](https://github.com/advisories/GHSA-86w9-cpqp-85rv), both already present and without a patched release, plus a [Windows esbuild development-server issue](https://github.com/advisories/GHSA-g7r4-m6w7-qqqr) in the SEO DevTools dependency tree. The latter requires esbuild's `serve` API with `servedir` and does not affect generated static assets. Recheck upstream fixes during maintenance; avoid `npm audit fix --force`, which currently proposes framework downgrades. Functional checks passing does not mean the dependency audit is clean.

## Sitemap and Search Console

The canonical origin is `https://blakecampbell.com`. Page URLs use trailing slashes; internal links, canonical tags, Open Graph URLs, and sitemap entries agree with the URLs served by the static host. The sitemap contains five main pages (including `/consulting/`) and all eleven work/project pages. `/works` redirects to `/work/`.

`npm run check:seo` checks actual generated output for route coverage, duplicate sitemap entries, canonical and Open Graph URLs, internal page links, titles/descriptions, language, robots metadata, structured-data JSON, robots.txt, and the existence of rendered image variants. Run it after `generate` for static deployment; it does not query Google or verify hosting configuration.

Project titles, descriptive headings, related project slugs, and case-study sections live in `app/composables/siteContent.ts`. The Argonne, Apple, and BenefitMany pages use structured case-study sections; the other projects retain their narrative and highlights. Related work links and homepage proof points connect visitors to the relevant case studies. `/consulting/` describes engineering capabilities backed by those projects and uses the existing LinkedIn profile for inquiries.

Headshots and raster logos use Nuxt Image with explicit dimensions and 1x/2x WebP variants; SVG logos stay as vectors. Static generation writes the optimized assets into `.output/public/_ipx/`. Deploy the entire generated directory so `srcset` variants are available on high-density screens. The original headshot URL remains available for social previews and structured data.

After publishing the content changes, compare Search Console queries and landing pages over equal date ranges. Track name searches separately from engineering/service searches, along with actual inquiries. New technical articles should add firsthand implementation details beyond the case studies; write those from project notes and examples rather than inventing metrics or duplicating the existing summaries.

Automatic `lastmod` values are disabled because build timestamps do not represent meaningful changes to content. Add dates only when actual content modification dates are tracked. See [Google's sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap#additional-notes-about-xml-sitemaps).

The September 24, 2026 Search Console export lists 12 indexed URLs, 11 alternate URLs with proper canonicals, five 404s, and two crawled but unindexed URLs. Live navigation of `/about` and `/work/propelicy` landed on trailing-slash URLs, so this update aligns canonical and sitemap URLs with that hosting behavior. [Google describes an alternate with a proper canonical as a recognized duplicate](https://support.google.com/webmasters/answer/7440203#duplicate_page_with_proper_canonical_tag); it does not by itself mean the canonical page has an indexing problem. The two crawled but unindexed examples are `/work/propelicy` and `/sitemap.xml`. An XML sitemap is for discovery and does not need a search result listing. Inspect the Propelicy page's Google-selected canonical and live fetch after deployment.

The public audit on September 8 received a Cloudflare `403` managed challenge for `/work/` and `/sitemap.xml`. Public `/robots.txt` was readable and allowed search crawling, with the correct sitemap reference. A challenge to this audit client does **not** establish that Googlebot is challenged; actual Google access remains unverified.

After deployment:

1. Use Search Console's **Sitemaps** report to check that `https://blakecampbell.com/sitemap.xml` is fetched successfully. Submit that address if it is not already submitted.
2. Inspect canonical pages such as `https://blakecampbell.com/work/propelicy/` and `https://blakecampbell.com/uses/`; confirm Google's selected canonical matches and check whether they are indexed. Use **Test live URL** to check current fetch/render access.
3. Inspect one reported no-trailing-slash variant and confirm it redirects to the corresponding canonical. Expected alternate URLs do not need independent indexing. Request indexing only for intended canonical pages that need it.
4. If Google's live test or sitemap fetch is challenged, review Cloudflare security events for verified Google crawler requests and adjust only the rule causing the challenge. The local application changes do not change Cloudflare settings.
5. Open the five 404 examples in the Search Console issue details. Redirect only old URLs with a relevant replacement page; leave genuinely missing URLs as 404s.

No Search Console submission, validation, hosting change, or deployment is performed by this code update.
