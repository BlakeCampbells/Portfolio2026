<script setup lang="ts">
const route = useRoute()
const { thoughts } = useSiteContent()

const post = computed(() => thoughts.find((t) => t.slug === route.params.slug))

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Thought not found' })
}

useSeoMeta({
  title: `${post.value.title} · Thoughts`,
  description: post.value.summary
})
</script>

<template>
  <main class="page" v-if="post">
    <h1>{{ post.title }}</h1>
    <p class="date">{{ post.date }}</p>
    <p class="summary">{{ post.summary }}</p>

    <div class="content">
      <p v-for="section in post.sections" :key="section">{{ section }}</p>
    </div>

    <NuxtLink to="/thoughts">← Back to thoughts</NuxtLink>
  </main>
</template>

<style scoped>
.page { max-width: 760px; margin: 0 auto; padding: 2rem 1rem; }
.date { opacity: .7; font-size: .95rem; }
.summary { font-weight: 600; margin-bottom: 1rem; }
.content { display: grid; gap: .85rem; }
.content p { margin: 0; line-height: 1.6; }
</style>
