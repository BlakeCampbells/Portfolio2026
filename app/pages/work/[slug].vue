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
  <main class="mondrian-page" v-if="item">
    <section class="tile intro">
      <div class="title-row">
        <img :src="item.logo" :alt="`${item.name} logo`" class="company-logo" />
        <h1>{{ item.name }}</h1>
      </div>
      <p class="role">{{ item.role }}</p>
      <p class="meta">{{ item.years }} · {{ item.location }}</p>
      <p>{{ item.summary }}</p>
    </section>

    <section class="tile color yellow" aria-hidden="true" />
    <section class="tile color red" aria-hidden="true" />

    <section class="tile">
      <h2>Stack</h2>
      <ul>
        <li v-for="tech in item.stack" :key="tech">{{ tech }}</li>
      </ul>
    </section>

    <section class="tile color blue" aria-hidden="true" />

    <section class="tile span-2">
      <h2>What I handled</h2>
      <ul>
        <li v-for="point in item.details" :key="point">{{ point }}</li>
      </ul>
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
.color.red { background: #d72d2d; }
.color.blue { background: #1f54c7; }
.role { font-weight: 700; }
.meta { font-size: .9rem; opacity: .75; margin-top: -.2rem; }
ul { margin: 0; padding-left: 1rem; line-height: 1.6; }
.title-row { display: flex; align-items: center; gap: .65rem; }
.company-logo { width: 28px; height: 28px; object-fit: contain; border-radius: 6px; border: 1px solid #111; background: #fff; }
h1,h2 { margin-top: 0; }
h2 { font-size: 1rem; text-transform: uppercase; letter-spacing: .04em; }

@media (max-width: 900px) {
  .mondrian-page { grid-template-columns: 1fr; }
  .intro,.span-2 { grid-column: auto; }
}
</style>
