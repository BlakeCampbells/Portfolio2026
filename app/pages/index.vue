<script setup lang="ts">
const { about, coreWorkItems, sideProjects, aboutMeFun } = useSiteContent()

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
</script>

<template>
  <main class="mondrian">
    <section class="tile intro">
      <img :src="about.headshot" alt="Headshot of Blake Campbell" class="headshot" />
      <p class="eyebrow">Blake Campbell</p>
      <h1>Senior Engineer<br />Frontend focus</h1>
      <p>
        Senior Engineer focused on performance, reliability, and delivering high quality
        user experiences.
      </p>
    </section>

    <section class="tile red" aria-hidden="true" />

    <section class="tile about">
      <h2>Proof Points</h2>
      <ul class="proof-points">
        <li>Shipped work across Apple + Argonne + startup environments</li>
        <li>10+ years building production software applications</li>
        <li>Open-source to help the developer community</li>
      </ul>
    </section>

    <section class="tile blue" aria-hidden="true" />

    <section class="tile work">
      <h2>Work</h2>
      <ul>
        <li v-for="job in coreWorkItems" :key="job.slug">
          <NuxtLink :to="`/work/${job.slug}`" class="item-link">
            <strong>{{ job.name }}</strong>
            <small class="years">{{ job.years }}</small>
            <span>{{ job.role }}</span>
          </NuxtLink>
        </li>
      </ul>
    </section>

    <section class="tile yellow" aria-hidden="true" />

    <section class="tile projects">
      <h2>Projects</h2>
      <ul>
        <li v-for="project in sideProjects" :key="project.slug">
          <NuxtLink :to="`/work/${project.slug}`" class="item-link">
            <strong>{{ project.name }}</strong>
            <small class="years">{{ project.years }}</small>
            <span>{{ project.summary }}</span>
          </NuxtLink>
        </li>
      </ul>
    </section>

    <section class="tile about-me">
      <h2>About me</h2>
      <ul class="about-me-list">
        <li v-for="(line, i) in aboutMeFun" :key="i">
          {{ line }}
        </li>
      </ul>
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
  justify-content: center;
  align-items: center;
  text-align: center;
}

.about { grid-column: 2 / 4; grid-row: 2 / 3; }
.work { grid-column: 1 / 2; grid-row: 3 / 5; }
.projects { grid-column: 2 / 3; grid-row: 4 / 5; }
.about-me { grid-column: 3 / 4; grid-row: 3 / 5; }

.work li:hover {
  transform: translateY(-1px);
  box-shadow: 4px 4px 0 #d72d2d, 7px 7px 0 #1f54c7;
}

.projects li:hover {
  transform: translateY(-1px);
  box-shadow: 4px 4px 0 #1f54c7, 7px 7px 0 #f3c623;
}

h2 { margin: 0 0 0.65rem; font-size: 1rem; text-transform: uppercase; letter-spacing: 0.04em; }
ul { margin: 0; padding-left: 1rem; }
.work ul, .projects ul, .about-me ul { display: grid; gap: 0; list-style: none; padding-left: 0; }
.work li, .projects li {
  display: block;
  border: 3px solid transparent;
  border-bottom: 2px solid #111;
  background: #f7f4ef;
  transition: transform 120ms ease, box-shadow 120ms ease, border-color 120ms ease;
}

.about-me li {
  display: block;
  border: 3px solid transparent;
  border-bottom: 2px solid #111;
  background: #f7f4ef;
}

.work li:last-child,
.projects li:last-child,
.about-me li:last-child {
  border-bottom: 0;
}

.item-link {
  display: grid;
  gap: 0.1rem;
  padding: 0.55rem 0.6rem;
  color: inherit;
}

.item-link:hover,
.item-link:hover * {
  color: inherit;
}

.work span, .projects span { font-size: 0.92rem; }
.proof-points { display: grid; gap: 0.55rem; }
.proof-points li { line-height: 1.35; }
.about-me-list li {
  padding: 0.55rem 0.6rem;
  font-size: 0.92rem;
  line-height: 1.4;
}
.years { font-size: 0.78rem; opacity: 0.7; }
.red { background: #d72d2d; }
.blue { background: #1f54c7; }
.yellow { background: #f3c623; }
.headshot {
  width: 156px;
  height: 156px;
  object-fit: cover;
  border: 4px solid #111;
  border-radius: 50%;
  margin-bottom: 1rem;
}
.eyebrow { font-size: 1rem; text-transform: uppercase; letter-spacing: 0.08em; margin: 0; }
h1 { margin: 0.5rem 0 0.75rem; font-size: clamp(1.7rem, 4.8vw, 3.8rem); line-height: 0.95; }
p { margin: 0; }
.small { opacity: 0.75; margin-top: 0.5rem; }

@media (max-width: 900px) {
  .mondrian { grid-template-columns: 1fr; grid-template-rows: auto; }
  .intro, .about, .work, .projects, .about-me { grid-column: auto; grid-row: auto; }
}
</style>
