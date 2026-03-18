<script setup lang="ts">
const { profile, thoughts } = useSiteContent()

useSeoMeta({
  title: 'Thoughts',
  description: 'Writing on frontend development, UX, and developer growth.'
})
</script>

<template>
  <main class="mondrian-page">
    <section class="tile intro">
      <h1>Thoughts</h1>
      <p>Writing on frontend development, UX, and developer growth.</p>
    </section>

    <section class="tile color red" aria-hidden="true" />

    <section class="tile span-2">
      <ul class="list">
        <li v-for="post in thoughts" :key="post.slug" class="item">
          <NuxtLink :to="`/thoughts/${post.slug}`">{{ post.title }}</NuxtLink>
          <p>{{ post.summary }}</p>
        </li>
      </ul>
    </section>

    <section class="tile links">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/work">Work</NuxtLink>
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
.color.red { background: #d72d2d; }

.list { list-style: none; margin: 0; padding: 0; display: grid; gap: .9rem; }
.item { border-left: 4px solid #111; padding-left: .75rem; }
.item p { margin: .4rem 0 0; }
.links { grid-column: 1 / -1; display: flex; gap: 1rem; flex-wrap: wrap; font-weight: 700; }

h1 { margin-top: 0; }

@media (max-width: 900px) {
  .mondrian-page { grid-template-columns: 1fr; }
  .intro,.span-2 { grid-column: auto; }
}
</style>
