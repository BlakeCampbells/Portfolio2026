<script setup lang="ts">
const { usesCategories } = useSiteContent()
const [computerSetup, deskAudio, software, carryItems, other] = usesCategories

useSeoMeta({
  title: 'Uses',
  description: 'Desk setup, headphones, software, and the everyday gear behind my work.'
})
</script>

<template>
  <main class="mondrian-page">
    <section class="tile intro">
      <h1>Uses</h1>
      <p>Desk setup, headphones, software, and the everyday gear that keeps work comfortable and reliable.</p>
    </section>

    <section class="tile color red" aria-hidden="true" />

    <section class="tile color blue" aria-hidden="true" />

    <section class="tile category computer-setup">
      <h2>{{ computerSetup.title }}</h2>
      <ul class="list">
        <li v-for="item in computerSetup.items" :key="item" class="item">
          {{ item }}
        </li>
      </ul>
    </section>

    <section class="tile category desk-audio">
      <h2>{{ deskAudio.title }}</h2>
      <ul class="list">
        <li v-for="item in deskAudio.items" :key="item" class="item">
          {{ item }}
        </li>
      </ul>
    </section>

    <section class="tile color yellow" aria-hidden="true" />

    <section class="tile category software">
      <h2>{{ software.title }}</h2>
      <ul class="list">
        <li v-for="item in software.items" :key="item" class="item">
          {{ item }}
        </li>
      </ul>
    </section>

    <section class="tile category carry-items">
      <h2>{{ carryItems.title }}</h2>
      <ul class="list">
        <li v-for="item in carryItems.items" :key="item" class="item">
          {{ item }}
        </li>
      </ul>
    </section>

    <section class="tile category other">
      <h2>{{ other.title }}</h2>
      <ul class="list">
        <li v-for="item in other.items" :key="item" class="item">
          {{ item }}
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
  grid-auto-rows: auto;
  gap: 10px;
  padding: 10px;
  background: #111;
}
.tile { background: #f7f4ef; border: 5px solid #111; padding: .9rem; }
.intro { grid-column: 1 / 3; }
.category { min-height: 220px; }
.computer-setup { grid-column: 1 / 2; }
.desk-audio { grid-column: 3 / 4; }
.software { grid-column: 2 / 3; }
.carry-items { grid-column: 3 / 4; }
.other { grid-column: 1 / 3; }
.color.red { background: #d72d2d; }
.color.blue { background: #1f54c7; }
.color.yellow { background: #f3c623; }
.list { list-style: none; margin: 0; padding: 0; display: grid; gap: .7rem; }
.item { border-left: 4px solid #111; padding-left: .75rem; }
h1 { margin-top: 0; }
h2 { margin: 0 0 .45rem; font-size: .95rem; text-transform: uppercase; letter-spacing: .04em; }

@media (max-width: 900px) {
  .mondrian-page { grid-template-columns: 1fr; }
  .intro,.category { grid-column: auto; grid-row: auto; }
  .computer-setup, .desk-audio, .software, .carry-items, .other { grid-column: auto; }
}
</style>
