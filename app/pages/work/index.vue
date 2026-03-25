<script setup lang="ts">
const { coreWorkItems, sideProjects } = useSiteContent()
const { canonical, siteUrl } = usePortfolioSeo({
  path: '/work',
  title: 'Work by Blake Campbell | Software Engineering Portfolio',
  description:
    'Explore software engineering work by Blake Campbell across Apple, Argonne National Laboratory, BenefitMany, open source, and independent product projects.'
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Work by Blake Campbell',
        url: canonical,
        description:
          'Portfolio of work history, case studies, and product engineering projects by Blake Campbell.'
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Blake Campbell Work History',
        itemListElement: [...coreWorkItems, ...sideProjects].map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          url: `${siteUrl}/work/${item.slug}`,
          name: item.name
        }))
      })
    }
  ]
})

</script>

<template>
  <main class="mondrian-page">
    <section class="tile intro">
      <h1>Work</h1>
      <p>Selected projects and product work.</p>
    </section>

    <section class="tile color blue" aria-hidden="true" />
    <section class="tile color red" aria-hidden="true" />

    <section class="tile span-2">
      <h2>Core Work</h2>
      <ul class="list">
        <li v-for="item in coreWorkItems" :key="item.slug" class="row">
          <NuxtLink :to="`/work/${item.slug}`" class="row-link">
            <h3>{{ item.name }}</h3>
            <p class="role">{{ item.role }}</p>
            <p class="meta">{{ item.years }} · {{ item.location }}</p>
            <p>{{ item.summary }}</p>
            <ul class="highlights">
              <li v-for="detail in item.details.slice(0, 2)" :key="detail">{{ detail }}</li>
            </ul>
          </NuxtLink>
        </li>
      </ul>
    </section>

    <section class="tile color yellow" aria-hidden="true" />

    <section class="tile projects">
      <h2>Projects</h2>
      <ul class="list">
        <li v-for="item in sideProjects" :key="item.slug" class="row">
          <NuxtLink :to="`/work/${item.slug}`" class="row-link">
            <h3>{{ item.name }}</h3>
            <p class="role">{{ item.role }}</p>
            <p class="meta">{{ item.years }} · {{ item.location }}</p>
            <p>{{ item.summary }}</p>
            <ul class="highlights">
              <li v-for="detail in item.details.slice(0, 2)" :key="detail">{{ detail }}</li>
            </ul>
          </NuxtLink>
        </li>
      </ul>
    </section>
  </main>
</template>

<style scoped>
.mondrian-page {
  min-height: calc(100dvh - 64px);
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 10px;
  padding: 10px;
  background: #111;
}

.tile { background: #f7f4ef; border: 5px solid #111; padding: 0.8rem; }
.intro { grid-column: 1 / 3; grid-row: 1 / 2; }
.span-2 { grid-column: 1 / 3; grid-row: 2 / 3; }
.projects { grid-column: 3 / 4; grid-row: 2 / 3; }
.color.blue { background: #1f54c7; grid-column: 3 / 4; grid-row: 1 / 2; }
.color.red { background: #d72d2d; grid-column: 1 / 2; grid-row: 3 / 4; }
.color.yellow { background: #f3c623; grid-column: 3 / 4; grid-row: 3 / 4; }

.list { list-style: none; padding: 0; margin: 0; display: grid; gap: 0; }
.row { border-bottom: 2px solid #111; }
.row:last-child { border-bottom: 0; }

.row-link {
  display: grid;
  gap: .22rem;
  padding: .55rem .2rem;
  border-radius: 2px;
  border: 3px solid transparent;
  transition: transform 120ms ease, border-color 120ms ease, box-shadow 120ms ease;
}

.row-link:hover {
  transform: translateY(-1px);
  border-color: #111;
  color: inherit;
}

.row-link:hover * {
  color: inherit;
}

.row:nth-child(odd) .row-link:hover {
  box-shadow: 4px 4px 0 #d72d2d, 7px 7px 0 #1f54c7;
}

.row:nth-child(even) .row-link:hover {
  box-shadow: 4px 4px 0 #1f54c7, 7px 7px 0 #f3c623;
}

.role {
  font-weight: 700;
  margin: 0;
}

.meta { font-size: .82rem; opacity: .75; margin: .05rem 0 .3rem; }

.highlights {
  margin: .2rem 0 0;
  padding-left: 1rem;
  display: grid;
  gap: .18rem;
  font-size: .88rem;
  line-height: 1.35;
}

h1,h2,h3 { margin-top: 0; }
h3 { text-align: center; font-size: .98rem; margin-bottom: .08rem; }
h2 { font-size: 0.92rem; text-transform: uppercase; letter-spacing: .04em; margin-bottom: .45rem; }

@media (max-width: 900px) {
  .mondrian-page { grid-template-columns: 1fr; grid-template-rows: auto; }
  .intro,.span-2,.projects,.color.blue,.color.red,.color.yellow { grid-column: auto; grid-row: auto; }
}
</style>
