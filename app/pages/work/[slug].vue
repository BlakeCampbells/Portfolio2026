<script setup lang="ts">
const route = useRoute()
const { workItems } = useSiteContent()

const item = computed(() => workItems.find((w) => w.slug === route.params.slug))

if (!item.value) {
  throw createError({ statusCode: 404, statusMessage: 'Work item not found' })
}

useSeoMeta({
  title: `${item.value.name} · Work`,
  description: item.value.summary
})
</script>

<template>
  <main class="page" v-if="item">
    <h1>{{ item.name }}</h1>
    <p class="role">{{ item.role }}</p>
    <p>{{ item.summary }}</p>

    <h2>Stack</h2>
    <ul>
      <li v-for="tech in item.stack" :key="tech">{{ tech }}</li>
    </ul>

    <h2>What I handled</h2>
    <ul>
      <li v-for="point in item.details" :key="point">{{ point }}</li>
    </ul>

    <NuxtLink to="/work">← Back to work</NuxtLink>
  </main>
</template>

<style scoped>
.page { max-width: 800px; margin: 0 auto; padding: 2rem 1rem; }
.role { font-weight: 700; }
ul { line-height: 1.6; }
</style>
