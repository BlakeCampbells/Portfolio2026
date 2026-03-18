<script setup lang="ts">
useSeoMeta({
  title: 'Portfolio',
  description:
    'Blake Campbell — Senior Full Stack Engineer focused on frontend, Vue/Nuxt, product systems, and practical UX.',
  ogTitle: 'Blake Campbell Portfolio',
  ogDescription:
    'Senior Full Stack Engineer focused on frontend, Vue/Nuxt, product systems, and practical UX.',
  ogUrl: 'https://blakecampbell.com',
  ogType: 'website',
  twitterCard: 'summary_large_image'
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Blake Campbell',
        url: 'https://blakecampbell.com',
        jobTitle: 'Senior Full Stack Engineer',
        knowsAbout: ['Vue', 'Nuxt', 'Frontend Engineering', 'Cypress', 'Rails API']
      })
    }
  ]
})

const projects = [
  {
    name: 'Apple',
    summary:
      'Full stack development with Vue + Node, testing with Vue Test Utils and Jest, and internal chatbot-review systems.'
  },
  {
    name: 'Propelicy',
    summary:
      'Built and maintained a large Vue/Nuxt component ecosystem, Storybook design system, Cypress E2E, Rails API integrations.'
  },
  {
    name: 'BenefitMany',
    summary:
      'Co-founded a do-good agency helping nonprofits and clients with practical software, grant support, and reusable frontend systems.'
  },
  {
    name: 'ManyComm',
    summary:
      'Anonymous support chat product with websocket session handling and Rails API integrations for real-time assistance.'
  }
]

const thoughts = [
  'Readme for a Productive 2021',
  'Better readme in 5 minutes (Snack Pack #1)',
  'Questions make you a better developer (Snack Pack #2)',
  'Overlooked design, blank states (Snack Pack #3)',
  'Are Default Params in JavaScript bad? (Snack Pack #4)',
  'Tracing vs Transformation for developers'
]
</script>

<template>
  <main class="mondrian">
    <section class="tile intro">
      <p class="eyebrow">Blake Campbell</p>
      <h1>Senior Full Stack Engineer.<br />Frontend focus.</h1>
      <p>
        VueJS professional. NuxtJS experimenter. Coffee drinker. Amateur gardener
        and chef.
      </p>
    </section>

    <section class="tile red" aria-hidden="true" />

    <section class="tile about">
      <h2>About</h2>
      <p>
        I build clean, practical products with Vue/Nuxt, strong testing habits,
        and systems that help teams move faster.
      </p>
      <p class="small">8+ years JavaScript • Cypress E2E • Rails API integration</p>
    </section>

    <section class="tile blue" aria-hidden="true" />

    <section class="tile projects">
      <h2>Selected Work</h2>
      <ul>
        <li v-for="project in projects" :key="project.name">
          <strong>{{ project.name }}</strong>
          <span>{{ project.summary }}</span>
        </li>
      </ul>
    </section>

    <section class="tile yellow" aria-hidden="true" />

    <section class="tile thoughts">
      <h2>Thoughts</h2>
      <ul>
        <li v-for="post in thoughts" :key="post">{{ post }}</li>
      </ul>
    </section>

    <section class="tile links">
      <a href="https://blakecampbell.com/about">About</a>
      <a href="https://blakecampbell.com/work">Work</a>
      <a href="https://blakecampbell.com/thoughts">Thoughts</a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </section>
  </main>
</template>

<style scoped>
.mondrian {
  min-height: 100dvh;
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr;
  grid-template-rows: auto auto auto auto;
  gap: 12px;
  padding: 12px;
  background: #111;
}

.tile {
  background: #f7f4ef;
  border: 5px solid #111;
  padding: 1.1rem;
}

.intro {
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.about {
  grid-column: 2 / 4;
  grid-row: 2 / 3;
}

.projects {
  grid-column: 1 / 3;
  grid-row: 3 / 4;
}

.thoughts {
  grid-column: 3 / 4;
  grid-row: 3 / 4;
}

.links {
  grid-column: 1 / 4;
  grid-row: 4 / 5;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  flex-wrap: wrap;
}

h2 {
  margin: 0 0 0.65rem;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

ul {
  margin: 0;
  padding-left: 1rem;
}

.projects ul,
.thoughts ul {
  display: grid;
  gap: 0.5rem;
}

.projects li {
  display: grid;
  gap: 0.1rem;
}

.projects span {
  font-size: 0.92rem;
}

.red {
  background: #d72d2d;
}

.blue {
  background: #1f54c7;
}

.yellow {
  background: #f3c623;
}

.eyebrow {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0;
}

h1 {
  margin: 0.5rem 0 0.75rem;
  font-size: clamp(1.7rem, 4.8vw, 3.8rem);
  line-height: 0.95;
}

p {
  margin: 0;
}

.small {
  opacity: 0.75;
  margin-top: 0.5rem;
}

@media (max-width: 900px) {
  .mondrian {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }

  .intro,
  .about,
  .projects,
  .thoughts,
  .links {
    grid-column: auto;
    grid-row: auto;
  }
}
</style>
