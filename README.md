# Blake Campbell portfolio

Nuxt 4 portfolio with prerendered pages, Nuxt Image, XML sitemap, and robots.txt.

## Development and builds

Use Node 24 LTS (`nvm use`, then `npm ci`). Nuxt 4.5 requires Node `^22.19.0 || ^24.11.0 || >=26.0.0`; configure the deployment build environment accordingly. Commit `package-lock.json` with dependency updates.

```bash
npm ci
npm run dev        # development server
npm run typecheck  # Vue, TypeScript, and Nuxt configuration
npm run generate   # static deployment output: .output/public
npm run check:seo  # validate generated pages, sitemap, and robots.txt
```

For a Node server deployment, run `npm run build`, then `npm run preview` (or `node .output/server/index.mjs`). Build on the deployment platform, since image processing includes platform-specific native binaries.

The TypeScript checker uses TypeScript 6.0.x: vue-tsc 3.3.11 cannot load TypeScript 7's changed package exports. Recheck compatibility before upgrading that major version.

## Sitemap and Search Console

The canonical origin is `https://blakecampbell.com`. Page URLs omit trailing slashes except for `/`; internal links, canonical tags, Open Graph URLs, and sitemap entries agree. The sitemap contains the four main pages and all ten work/project pages. The existing `/works` redirect remains unchanged.

`npm run check:seo` checks actual generated output for route coverage, duplicate sitemap entries, canonical and Open Graph URLs, titles/descriptions, language, robots metadata, structured-data JSON, and robots.txt. Run it after `build` or `generate`; it does not query Google or verify hosting configuration.

Automatic `lastmod` values are disabled because build timestamps do not represent meaningful changes to content. Add dates only when actual content modification dates are tracked. See [Google's sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap#additional-notes-about-xml-sitemaps).

The September 8, 2026 Search Console screenshot lists trailing-slash variants as **Alternate page with proper canonical tag**. This is consistent with the site's deliberate no-trailing-slash canonicals. [Google describes this status as an alternate whose canonical is recognized](https://support.google.com/webmasters/answer/7440203#duplicate_page_with_proper_canonical_tag); it does not by itself mean that the canonical page has an indexing problem. Use URL Inspection to confirm Google's selected canonical and its index status.

The public audit on September 8 received a Cloudflare `403` managed challenge for `/work/` and `/sitemap.xml`. Public `/robots.txt` was readable and allowed search crawling, with the correct sitemap reference. A challenge to this audit client does **not** establish that Googlebot is challenged; actual Google access remains unverified.

After deployment:

1. Use Search Console's **Sitemaps** report to check that `https://blakecampbell.com/sitemap.xml` is fetched successfully. Submit that address if it is not already submitted.
2. Inspect canonical pages such as `https://blakecampbell.com/work/manycomm` and `https://blakecampbell.com/uses`; confirm Google's selected canonical matches and check whether they are indexed. Use **Test live URL** to check current fetch/render access.
3. Inspect one reported trailing-slash variant and confirm it points to the corresponding canonical. Expected alternate URLs do not need independent indexing. Request indexing only for intended canonical pages that need it.
4. If Google's live test or sitemap fetch is challenged, review Cloudflare security events for verified Google crawler requests and adjust only the rule causing the challenge. The local application changes do not change Cloudflare settings.
5. If redirect consolidation is desired later, first confirm the hosting platform's slash behavior; any permanent redirect should lead to a canonical URL that returns 200 without a reverse redirect. Prior canonical redirect middleware was deliberately removed from this repository, so this maintenance update preserves that behavior.

An existing validation run is visible in the screenshot. Wait for its result rather than restarting it while it is pending. No Search Console submission, validation, hosting change, or deployment is performed by this code update.
