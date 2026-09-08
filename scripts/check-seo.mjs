import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { coreWorkItems, sideProjects } from '../app/composables/siteContent.ts'

// Run after build/generate: validate the HTML search engines actually receive.
const output = resolve(process.argv[2] || '.output/public')
const origin = 'https://blakecampbell.com'
const paths = ['/', '/about', '/work', '/uses', ...[...coreWorkItems, ...sideProjects].map(item => `/work/${item.slug}`)]
const read = path => readFile(resolve(output, path), 'utf8')
const attributes = tag => Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(([, key, value]) => [key, value]))

const sitemap = await read('sitemap.xml')
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, url]) => url)
assert.deepEqual(urls.toSorted(), paths.map(path => `${origin}${path}`).toSorted(), 'Sitemap must contain every canonical page exactly once')
assert.doesNotMatch(sitemap, /<lastmod>/, 'Omit lastmod until real content modification dates are available; build dates are misleading')

const titles = new Set()
const descriptions = new Set()
for (const path of paths) {
  const html = await read(`${path.slice(1)}${path === '/' ? '' : '/'}index.html`)
  const links = [...html.matchAll(/<link\b[^>]*>/g)].map(([tag]) => attributes(tag))
  const metas = [...html.matchAll(/<meta\b[^>]*>/g)].map(([tag]) => attributes(tag))
  const meta = name => metas.find(tag => tag.name === name || tag.property === name)?.content
  assert.deepEqual(links.filter(tag => tag.rel === 'canonical').map(tag => tag.href), [`${origin}${path}`], `${path}: one self-referencing canonical`)
  assert.equal(meta('og:url'), `${origin}${path}`, `${path}: Open Graph URL matches canonical`)
  assert.match(html, /<html\b[^>]*lang="en"/, `${path}: document language`)
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1]
  assert.ok(title && !titles.has(title), `${path}: unique nonempty title`)
  titles.add(title)
  const description = meta('description')
  assert.ok(description && !descriptions.has(description), `${path}: unique nonempty description`)
  descriptions.add(description)
  assert.ok(meta('og:image')?.startsWith(`${origin}/`), `${path}: absolute social image`)
  assert.doesNotMatch(meta('robots') || '', /noindex|nofollow|none/i, `${path}: indexable robots meta`)
  assert.equal([...html.matchAll(/<h1\b/g)].length, 1, `${path}: one primary heading`)
  const schemas = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
  assert.ok(schemas.length, `${path}: structured data present`)
  for (const [, json] of schemas) {
    const schema = JSON.parse(json)
    assert.equal(schema['@context'], 'https://schema.org', `${path}: valid schema context`)
  }
}

const robots = await read('robots.txt')
assert.match(robots, /User-agent: \*/i)
assert.match(robots, /Allow: \/\s/i)
assert.doesNotMatch(robots, /^Disallow:\s*\/\s*$/im)
assert.match(robots, /Sitemap: https:\/\/blakecampbell\.com\/sitemap\.xml/)
console.log(`SEO checks passed for ${paths.length} pages: sitemap, canonicals, metadata, structured data, and robots.txt.`)
