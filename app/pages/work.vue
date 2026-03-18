<script setup lang="ts">
const { profile, workItems, sideProjects } = useSiteContent()

useSeoMeta({
  title: 'Work',
  description: 'Selected work by Blake Campbell across product engineering, frontend systems, and delivery.'
})
</script>

<template>
  <main class="mondrian-page">
    <section class="tile intro">
      <h1>Work</h1>
      <p>Selected projects and product work.</p>
    </section>

    <section class="tile color blue" aria-hidden="true" />

    <section class="tile span-2">
      <h2>Core Work</h2>
      <ul class="grid">
        <li v-for="item in workItems" :key="item.slug" class="card">
          <h3><NuxtLink :to="`/work/${item.slug}`">{{ item.name }}</NuxtLink></h3>
          <p><strong>{{ item.role }}</strong></p>
          <p>{{ item.summary }}</p>
        </li>
      </ul>
    </section>

    <section class="tile">
      <h2>Side Projects</h2>
      <ul class="grid one">
        <li v-for="item in sideProjects" :key="item.name" class="card">
          <h3>{{ item.name }}</h3>
          <p><strong>{{ item.date }}</strong></p>
          <p>{{ item.summary }}</p>
        </li>
      </ul>
    </section>

    <section class="tile links">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/thoughts">Thoughts</NuxtLink>
      <a :href="profile.linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
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
.intro { grid-column: 1 / 3; }
.span-2 { grid-column: 1 / 3; }
.color.blue { background: #1f54c7; }

.grid { list-style: none; padding: 0; display: grid; gap: .8rem; grid-template-columns: repeat(auto-fit,minmax(220px,1fr)); }
.grid.one { grid-template-columns: 1fr; }
.card { border: 3px solid #111; padding: .8rem; }

.links { grid-column: 1 / -1; display: flex; gap: 1rem; flex-wrap: wrap; font-weight: 700; }

h1,h2,h3 { margin-top: 0; }
h2 { font-size: 1rem; text-transform: uppercase; letter-spacing: .04em; }

@media (max-width: 900px) {
  .mondrian-page { grid-template-columns: 1fr; }
  .intro,.span-2 { grid-column: auto; }
}
</style>
