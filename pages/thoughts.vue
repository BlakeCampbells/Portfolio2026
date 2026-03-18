<script setup lang="ts">
const { thoughts } = useSiteContent()

useSeoMeta({
  title: 'Thoughts',
  description: 'Writing on frontend development, UX, and developer growth.'
})
</script>

<template>
  <main class="page">
    <h1>Thoughts</h1>
    <ul class="list">
      <li v-for="post in thoughts" :key="post.slug" class="item">
        <NuxtLink :to="`/thoughts/${post.slug}`">{{ post.title }}</NuxtLink>
        <p>{{ post.summary }}</p>
      </li>
    </ul>
  </main>
</template>

<style scoped>
.page { max-width: 900px; margin: 0 auto; padding: 2rem 1rem; }
.list { list-style: none; padding: 0; display: grid; gap: 1rem; }
.item { border-left: 4px solid #111; padding-left: .75rem; }
.item p { margin: .4rem 0 0; }
</style>
