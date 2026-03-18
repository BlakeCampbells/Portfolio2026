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
  <main class="page">
    <h1>{{ about.headline }}</h1>
    <p class="lead">{{ about.bio }}</p>
    <ul>
      <li v-for="fact in about.quickFacts" :key="fact">{{ fact }}</li>
    </ul>

    <h2>Setup</h2>
    <ul>
      <li v-for="item in about.setup" :key="item">{{ item }}</li>
    </ul>

    <h2>Profile</h2>
    <p>{{ profile.title }} at {{ profile.company }}</p>
    <p>{{ profile.location }}</p>
    <p>
      <a :href="profile.linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      · {{ profile.followers }} followers · {{ profile.connections }} connections
    </p>

    <nav>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/work">Work</NuxtLink>
      <NuxtLink to="/thoughts">Thoughts</NuxtLink>
    </nav>
  </main>
</template>

<style scoped>
.page { max-width: 880px; margin: 0 auto; padding: 2rem 1rem; }
.lead { font-size: 1.1rem; }
ul { line-height: 1.6; }
nav { display: flex; gap: 1rem; margin-top: 1.5rem; font-weight: 700; }
</style>
