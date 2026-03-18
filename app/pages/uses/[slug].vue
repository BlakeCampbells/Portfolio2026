<script setup lang="ts">
const route = useRoute()
const { thoughts } = useSiteContent()

const post = computed(() => thoughts.find((t) => t.slug === route.params.slug))

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Writing not found' })
}

useSeoMeta({
  title: `${post.value.title} · Writings`,
  description: post.value.summary
})
</script>

<template>
  <main class="mondrian-page" v-if="post">
    <section class="tile intro">
      <h1>{{ post.title }}</h1>
      <p class="date">{{ post.date }}</p>
      <p class="summary">{{ post.summary }}</p>
    </section>

    <section class="tile color blue" aria-hidden="true" />

    <section class="tile span-2">
      <div class="content">
        <p v-for="section in post.sections" :key="section">{{ section }}</p>
      </div>
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
.date { opacity: .7; font-size: .95rem; }
.summary { font-weight: 600; }
.content { display: grid; gap: .85rem; }
.content p { margin: 0; line-height: 1.6; }
h1 { margin-top: 0; }
@media (max-width: 900px) {
  .mondrian-page { grid-template-columns: 1fr; }
  .intro,.span-2 { grid-column: auto; }
}
</style>
