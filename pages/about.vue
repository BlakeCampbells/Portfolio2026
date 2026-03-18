<script setup lang="ts">
const { about } = useSiteContent()

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
