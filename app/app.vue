<script setup lang="ts">
const { profile } = useSiteContent()
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />

    <header class="top-nav">
      <nav class="top-nav-inner" aria-label="Primary navigation">
        <NuxtLink to="/" data-accent="red">Home</NuxtLink>
        <NuxtLink to="/about" data-accent="blue">About</NuxtLink>
        <NuxtLink to="/work" data-accent="yellow">Work</NuxtLink>
        <span class="nav-color-block nav-color-block-red" aria-hidden="true" />
        <NuxtLink to="/uses" data-accent="red">Uses</NuxtLink>
        <a
          :href="profile.linkedin"
          data-accent="blue"
          target="_blank"
          rel="noopener noreferrer"
        >LinkedIn<span class="external-mark" aria-hidden="true">↗</span></a>
        <a
          :href="profile.github"
          data-accent="yellow"
          target="_blank"
          rel="noopener noreferrer"
        >GitHub<span class="external-mark" aria-hidden="true">↗</span></a>
        <span class="nav-color-block nav-color-block-blue" aria-hidden="true" />
        <span class="nav-color-block nav-color-block-yellow" aria-hidden="true" />
      </nav>
    </header>

    <NuxtPage />
  </div>
</template>
