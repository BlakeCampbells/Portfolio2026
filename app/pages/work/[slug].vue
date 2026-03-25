<script setup lang="ts">
const route = useRoute()
const { workItems } = useSiteContent()
const item = computed(() => workItems.find((w) => w.slug === route.params.slug))

if (!item.value) {
  throw createError({ statusCode: 404, statusMessage: 'Work item not found' })
}

const { canonical, siteUrl } = usePortfolioSeo({
  path: `/work/${item.value.slug}`,
  title: `${item.value.name} | Blake Campbell Portfolio`,
  description: `${item.value.summary} ${item.value.role} experience from Blake Campbell.`
    .replace(/\s+/g, ' ')
    .trim(),
  type: 'article'
})

const caseStudyParagraphs = computed(() => {
  const text = item.value?.caseStudy?.trim()
  if (!text) return []

  const sentences = text
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter(Boolean)

  const chunks: string[] = []
  for (let i = 0; i < sentences.length; i += 2) {
    chunks.push(sentences.slice(i, i + 2).join(' '))
  }

  return chunks
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        name: `${item.value.name} | Blake Campbell`,
        url: canonical,
        description: item.value.summary,
        mainEntity: {
          '@type': 'CreativeWork',
          name: item.value.name,
          creator: {
            '@type': 'Person',
            name: 'Blake Campbell',
            url: siteUrl
          },
          about: item.value.stack,
          url: canonical
        }
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
          { '@type': 'ListItem', position: 2, name: 'Work', item: `${siteUrl}/work` },
          { '@type': 'ListItem', position: 3, name: item.value.name, item: canonical }
        ]
      })
    }
  ]
})
</script>

<template>
  <main class="mondrian-page" v-if="item">
    <section class="tile intro">
      <div class="intro-content" :class="{ 'has-logo': item.logo }">
        <h1>{{ item.name }}</h1>
        <p class="role">{{ item.role }}</p>
        <p class="meta">{{ item.years }} · {{ item.location }}</p>
        <p>{{ item.summary }}</p>
        <p v-if="item.links?.length || item.siteUrl" class="site-link-wrap">
          <template v-if="item.links?.length">
            <a
              v-for="link in item.links"
              :key="link.href"
              :href="link.href"
              class="site-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ link.label }}
            </a>
          </template>
          <a
            v-else-if="item.siteUrl"
            :href="item.siteUrl"
            class="site-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View site
          </a>
        </p>
      </div>
      <img
        v-if="item.logo"
        :src="item.logo"
        :alt="`${item.name} logo`"
        class="company-logo"
      />
    </section>

    <section class="tile color yellow" aria-hidden="true" />
    <section class="tile color red" aria-hidden="true" />

    <section class="tile">
      <h2>Stack</h2>
      <ul>
        <li v-for="tech in item.stack" :key="tech">{{ tech }}</li>
      </ul>
    </section>

    <section class="tile color blue" aria-hidden="true" />

    <section v-if="item.caseStudy" class="tile span-2">
      <h2>Case Study</h2>
      <p v-for="(paragraph, idx) in caseStudyParagraphs" :key="idx" class="case-study">
        {{ paragraph }}
      </p>
    </section>

    <section class="tile span-2">
      <h2>What I handled</h2>
      <ul>
        <li v-for="point in item.details" :key="point">{{ point }}</li>
      </ul>
    </section>
  </main>
</template>

<style scoped>
.mondrian-page {
  min-height: 100dvh;
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr;
  gap: 12px;
  padding: 12px;
  background: #111;
}
.tile { background: #f7f4ef; border: 5px solid #111; padding: 1.1rem; }
.intro {
  grid-column: 1 / 3;
  position: relative;
}
.intro-content.has-logo {
  padding-right: clamp(5rem, 26vw, 7.5rem);
}
.span-2 { grid-column: 2 / 4; }
.color.yellow { background: #f3c623; }
.color.red { background: #d72d2d; }
.color.blue { background: #1f54c7; }
.role { font-weight: 700; }
.meta { font-size: .9rem; opacity: .75; margin-top: -.2rem; }
.site-link-wrap {
  margin-top: .65rem;
  margin-bottom: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem 1rem;
}
.site-link {
  font-weight: 700;
  color: #1f54c7;
  text-decoration: underline;
  text-underline-offset: 3px;
}
.site-link:hover { color: #111; }
ul { margin: 0; padding-left: 1rem; line-height: 1.6; }
.case-study { margin: 0 0 .8rem; line-height: 1.65; }
.case-study:last-of-type { margin-bottom: 0; }
.company-logo {
  position: absolute;
  bottom: 1.1rem;
  right: 1.1rem;
  display: block;
  max-height: 100px;
  width: auto;
  max-width: min(120px, 32vw);
  height: auto;
  object-fit: contain;
  border-radius: 0;
  border: none;
  background: none;
}
h1,h2 { margin-top: 0; }
h2 { font-size: 1rem; text-transform: uppercase; letter-spacing: .04em; }

@media (max-width: 900px) {
  .mondrian-page { grid-template-columns: 1fr; }
  .intro,.span-2 { grid-column: auto; }
}
</style>
