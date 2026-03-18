<script setup lang="ts">
const { about, profile } = useSiteContent()

useSeoMeta({
  title: 'About',
  description: about.bio,
  ogTitle: 'About · Blake Campbell',
  ogDescription: about.bio
})
</script>

<template>
  <main class="mondrian-page">
    <section class="tile intro">
      <h1>{{ about.headline }}</h1>
      <p class="lead">{{ about.bio }}</p>
    </section>

    <section class="tile">
      <h2>Quick Facts</h2>
      <ul>
        <li v-for="fact in about.quickFacts" :key="fact">{{ fact }}</li>
      </ul>
    </section>

    <section class="tile color red" aria-hidden="true" />

    <section class="tile">
      <h2>Setup</h2>
      <ul>
        <li v-for="item in about.setup" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="tile">
      <h2>Profile</h2>
      <p>{{ profile.title }} at {{ profile.company }}</p>
      <p>{{ profile.location }}</p>
      <p>{{ profile.followers }} followers · {{ profile.connections }} connections</p>
    </section>

    <section class="tile links">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/work">Work</NuxtLink>
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

.tile {
  background: #f7f4ef;
  border: 5px solid #111;
  padding: 1.1rem;
}

.intro { grid-column: 1 / 3; }
.color.red { background: #d72d2d; }

.links {
  grid-column: 1 / -1;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  font-weight: 700;
}

ul { margin: 0; padding-left: 1rem; line-height: 1.6; }
.lead { font-size: 1.06rem; }
h1 { margin-top: 0; }
h2 { margin-top: 0; font-size: 1rem; text-transform: uppercase; letter-spacing: .04em; }

@media (max-width: 900px) {
  .mondrian-page { grid-template-columns: 1fr; }
  .intro { grid-column: auto; }
}
</style>
