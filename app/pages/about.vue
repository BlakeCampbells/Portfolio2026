<script setup lang="ts">
const { about } = useSiteContent()

const siteUrl = 'https://blakecampbell.com'
const canonical = `${siteUrl}/about`
const ogImage = `${siteUrl}/images/blake-headshot.jpg`

useSeoMeta({
  title: 'About | Blake Campbell',
  description: about.bio,
  ogTitle: 'About | Blake Campbell',
  ogDescription: about.bio,
  ogUrl: canonical,
  ogType: 'profile',
  ogSiteName: 'Blake Campbell',
  ogImage,
  twitterCard: 'summary_large_image',
  twitterImage: ogImage
})

useHead({
  link: [{ rel: 'canonical', href: canonical }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
          { '@type': 'ListItem', position: 2, name: 'About', item: canonical }
        ]
      })
    }
  ]
})
</script>

<template>
  <main class="mondrian-page">
    <section class="tile intro">
      <img :src="about.headshot" alt="Headshot of Blake Campbell" class="headshot" />
      <h1>{{ about.headline }}</h1>
      <p class="lead">{{ about.bio }}</p>
      <p class="location">Pittsburgh, PA</p>
    </section>

    <section class="tile color red" aria-hidden="true" />

    <section class="tile quick-facts">
      <h2>Quick Facts</h2>
      <ul>
        <li v-for="fact in about.quickFacts" :key="fact">{{ fact }}</li>
      </ul>
    </section>

    <section class="tile color blue" aria-hidden="true" />

    <section class="tile">
      <h2>How I Work</h2>
      <ul>
        <li v-for="item in about.approach" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="tile color yellow" aria-hidden="true" />

    <section class="tile">
      <h2>Outside of Work</h2>
      <ul>
        <li v-for="item in about.outsideOfWork" :key="item">{{ item }}</li>
      </ul>
    </section>
  </main>
</template>

<style scoped>
.mondrian-page {
  min-height: calc(100dvh - 64px);
  display: grid;
  grid-template-columns: 1.35fr 1fr 1fr;
  grid-template-rows: auto auto auto;
  gap: 10px;
  padding: 10px;
  background: #111;
}

.tile {
  background: #f7f4ef;
  border: 5px solid #111;
  padding: 0.75rem;
}

.intro {
  padding: 0.95rem;
}

.intro {
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  display: grid;
  align-content: start;
}
.quick-facts { grid-column: 2 / 4; grid-row: 2 / 3; }

.color.red { background: #d72d2d; }
.color.blue { background: #1f54c7; }
.color.yellow { background: #f3c623; }

ul { margin: 0; padding-left: 1rem; line-height: 1.45; }
.headshot {
  width: 104px;
  height: 104px;
  object-fit: cover;
  border: 4px solid #111;
  border-radius: 50%;
  margin-bottom: 0.6rem;
}
.lead { font-size: 0.98rem; line-height: 1.4; }
.location {
  margin-top: 0.65rem;
  justify-self: end;
  font-size: .82rem;
  opacity: .75;
}
h1 { margin: 0 0 0.45rem; font-size: 1.65rem; line-height: 1.1; }
h2 { margin: 0 0 0.45rem; font-size: 0.92rem; text-transform: uppercase; letter-spacing: .04em; }

@media (max-width: 900px) {
  .mondrian-page { grid-template-columns: 1fr; grid-template-rows: auto; }
  .intro, .quick-facts { grid-column: auto; grid-row: auto; }
  .location { justify-self: start; }
}
</style>
