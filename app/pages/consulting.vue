<script setup lang="ts">
const { profile } = useSiteContent()
const { canonical, siteUrl } = usePortfolioSeo({
  path: '/consulting',
  title: 'Software Engineering Consulting in Pittsburgh | Blake Campbell',
  description:
    'Explore Blake Campbell’s experience in application modernization, Vue and React development, and MVP delivery for small businesses and nonprofits.'
})

useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Software Engineering Consulting | Blake Campbell',
      url: canonical,
      about: {
        '@type': 'Person',
        name: profile.name,
        url: siteUrl
      }
    })
  }]
})
</script>

<template>
  <main class="mondrian-page consulting">
    <section class="tile intro">
      <p class="eyebrow">Pittsburgh, PA · Remote collaboration</p>
      <h1>Software engineering consulting</h1>
      <p>I’m Blake Campbell, a senior software engineer with more than ten years of experience building production applications. My work spans legacy application updates, frontend development, and turning product ideas into working software.</p>
      <a :href="profile.linkedin" class="contact-link" target="_blank" rel="noopener noreferrer">Discuss a project on LinkedIn <span aria-hidden="true">↗</span></a>
    </section>

    <section class="tile color red" aria-hidden="true" />

    <section class="tile">
      <h2>Application modernization and testing</h2>
      <p>For teams working with an existing product, my experience includes updating legacy applications, introducing end-to-end tests, and building shared interface components.</p>
      <p>At Argonne, I work across five or more applications with React, TypeScript, Rails, and Playwright. We introduced an 80% test-coverage requirement per application before deployment.</p>
      <NuxtLink to="/work/argonne-national-laboratory/">Read the Argonne modernization case study</NuxtLink>
    </section>

    <section class="tile">
      <h2>React, Vue, and Nuxt development</h2>
      <p>My frontend work includes data exploration, review workflows, and interfaces for managing everyday business tasks.</p>
      <p>At Apple, I built tools for exploring and classifying chatbot conversations. At Propelicy, I moved a frontend from Vue to Nuxt and built shared components in Storybook.</p>
      <ul>
        <li><NuxtLink to="/work/apple/">Explore Apple’s chatbot analytics tools</NuxtLink></li>
        <li><NuxtLink to="/work/propelicy/">See Propelicy’s insurance certification software</NuxtLink></li>
      </ul>
    </section>

    <section class="tile">
      <h2>MVPs and internal business tools</h2>
      <p>At BenefitMany, I worked directly with small businesses and nonprofits on requirements, priorities, and delivery, leading a remote team of eight.</p>
      <p>Projects included a work-order system for an apparel business, MVPs, and applications that replaced manual processes for nonprofit clients.</p>
      <NuxtLink to="/work/benefitmany/">Read about custom software at BenefitMany</NuxtLink>
    </section>

    <section class="tile color blue" aria-hidden="true" />

    <section class="tile conversation">
      <h2>Start with the problem you need to solve</h2>
      <p>Tell me about the product, who uses it, and the challenge your team is facing. A short description of the existing stack and your priorities is a useful starting point.</p>
      <a :href="profile.linkedin" class="contact-link" target="_blank" rel="noopener noreferrer">Connect with Blake on LinkedIn <span aria-hidden="true">↗</span></a>
      <NuxtLink to="/about/">More about how I work</NuxtLink>
    </section>

    <section class="tile color yellow" aria-hidden="true" />
  </main>
</template>

<style scoped>
.consulting { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; padding: 12px; }
.tile { padding: 1.1rem; border: 5px solid var(--ink); background: var(--paper); }
.intro, .conversation { grid-column: span 2; }
.eyebrow { font-size: .85rem; text-transform: uppercase; letter-spacing: .04em; }
h1 { font-size: clamp(1.8rem, 4vw, 3rem); line-height: 1.1; margin: .6rem 0 1rem; }
h2 { margin-top: 0; font-size: 1rem; text-transform: uppercase; letter-spacing: .04em; }
p, li { line-height: 1.65; }
ul { padding-left: 1.2rem; }
li + li { margin-top: .7rem; }
a { text-decoration: underline; text-underline-offset: 3px; font-weight: 700; }
.contact-link { display: block; margin: 1.2rem 0; }
.red { background: var(--red); }
.blue { background: var(--blue); }
.yellow { background: var(--yellow); }
@media (max-width: 900px) {
  .consulting { grid-template-columns: 1fr; }
  .intro, .conversation { grid-column: auto; }
  .color { min-height: 32px; }
}
</style>
