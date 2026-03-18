<script setup lang="ts">
const { about, thoughts } = useSiteContent()

useSeoMeta({
  title: 'Everything else',
  description: 'Work setup, everyday tools, and writing.'
})
</script>

<template>
  <main class="mondrian-page">
    <section class="tile intro">
      <h1>Everything else</h1>
      <p>Work setup, everyday tools, and writing.</p>
    </section>

    <section class="tile color red" aria-hidden="true" />

    <section class="tile">
      <h2>Work Setup</h2>
      <ul class="list">
        <li v-for="item in about.setup" :key="item" class="item">{{ item }}</li>
      </ul>
    </section>

    <section class="tile color blue" aria-hidden="true" />

    <section class="tile">
      <h2>Everyday Use</h2>
      <ul class="list">
        <li v-for="item in about.everydayUse" :key="item" class="item">{{ item }}</li>
      </ul>
    </section>

    <section class="tile color yellow" aria-hidden="true" />

    <section class="tile span-2 writings">
      <h2>Writings</h2>
      <ul class="list">
        <li v-for="post in thoughts" :key="post.slug" class="item">
          <NuxtLink :to="`/uses/${post.slug}`">{{ post.title }}</NuxtLink>
          <p>{{ post.summary }}</p>
        </li>
      </ul>
    </section>
  </main>
</template>

<style scoped>
.mondrian-page {
  min-height: 100dvh;
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr;
  gap: 10px;
  padding: 10px;
  background: #111;
}
.tile { background: #f7f4ef; border: 5px solid #111; padding: .9rem; }
.intro { grid-column: 1 / 3; }
.span-2 { grid-column: 1 / 3; }
.writings { grid-row: 4 / 5; }
.color.red { background: #d72d2d; }
.color.blue { background: #1f54c7; }
.color.yellow { background: #f3c623; }
.list { list-style: none; margin: 0; padding: 0; display: grid; gap: .7rem; }
.item { border-left: 4px solid #111; padding-left: .75rem; }
.item p { margin: .35rem 0 0; }
h1 { margin-top: 0; }
h2 { margin: 0 0 .45rem; font-size: .95rem; text-transform: uppercase; letter-spacing: .04em; }

@media (max-width: 900px) {
  .mondrian-page { grid-template-columns: 1fr; }
  .intro,.span-2,.writings { grid-column: auto; grid-row: auto; }
}
</style>
