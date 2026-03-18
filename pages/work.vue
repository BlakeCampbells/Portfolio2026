<script setup lang="ts">
const { workItems } = useSiteContent()

useSeoMeta({
  title: 'Work',
  description: 'Selected work by Blake Campbell across product engineering, frontend systems, and delivery.'
})
</script>

<template>
  <main class="page">
    <h1>Work</h1>
    <p class="lead">Selected projects and product work.</p>

    <ul class="grid">
      <li v-for="item in workItems" :key="item.slug" class="card">
        <h2>
          <NuxtLink :to="`/work/${item.slug}`">{{ item.name }}</NuxtLink>
        </h2>
        <p><strong>{{ item.role }}</strong></p>
        <p>{{ item.summary }}</p>
      </li>
    </ul>
  </main>
</template>

<style scoped>
.page { max-width: 980px; margin: 0 auto; padding: 2rem 1rem; }
.grid { list-style: none; padding: 0; display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); }
.card { border: 3px solid #111; background: #f7f4ef; padding: 1rem; }
h2 { margin: 0 0 .5rem; }
</style>
