<script setup lang="ts">
const route = useRoute()
const { profile, workItems } = useSiteContent()

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
  <main class="mondrian-page" v-if="item">
    <section class="tile intro">
      <h1>{{ item.name }}</h1>
      <p class="role">{{ item.role }}</p>
      <p>{{ item.summary }}</p>
    </section>

    <section class="tile color yellow" aria-hidden="true" />

    <section class="tile">
      <h2>Stack</h2>
      <ul>
        <li v-for="tech in item.stack" :key="tech">{{ tech }}</li>
      </ul>
    </section>

    <section class="tile span-2">
      <h2>What I handled</h2>
      <ul>
        <li v-for="point in item.details" :key="point">{{ point }}</li>
      </ul>
    </section>

    <section class="tile links">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/work">Back to work</NuxtLink>
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
.tile { background: #f7f4ef; border: 5px solid #111; padding: 1.1rem; }
.intro { grid-column: 1 / 3; }
.span-2 { grid-column: 2 / 4; }
.color.yellow { background: #f3c623; }
.links { grid-column: 1 / -1; display: flex; gap: 1rem; flex-wrap: wrap; font-weight: 700; }
.role { font-weight: 700; }
ul { margin: 0; padding-left: 1rem; line-height: 1.6; }
h1,h2 { margin-top: 0; }
h2 { font-size: 1rem; text-transform: uppercase; letter-spacing: .04em; }

@media (max-width: 900px) {
  .mondrian-page { grid-template-columns: 1fr; }
  .intro,.span-2 { grid-column: auto; }
}
</style>
