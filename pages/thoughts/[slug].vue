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
    <p>{{ post.summary }}</p>

    <NuxtLink to="/thoughts">← Back to thoughts</NuxtLink>
  </main>
</template>

<style scoped>
.page { max-width: 760px; margin: 0 auto; padding: 2rem 1rem; }
.date { opacity: .7; font-size: .95rem; }
</style>
