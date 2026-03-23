<script setup lang="ts">
const { profile } = useSiteContent()

const hoverColors = ['red', 'blue', 'yellow'] as const

const setRandomHoverColor = (event: Event) => {
  const target = event.target as Element | null
  const link = target?.closest('a') as HTMLAnchorElement | null
  if (!link) return

  const related = (event as MouseEvent).relatedTarget as Node | null
  if (related && link.contains(related)) return

  if (link.classList.contains('router-link-active')) return

  const color = hoverColors[Math.floor(Math.random() * hoverColors.length)]
  link.setAttribute('data-hover-color', color)
}

onMounted(() => {
  document.addEventListener('mouseover', setRandomHoverColor)
})

onBeforeUnmount(() => {
  document.removeEventListener('mouseover', setRandomHoverColor)
})
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />

    <header class="top-nav">
      <nav class="top-nav-inner">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/work">Work</NuxtLink>
        <NuxtLink to="/uses">Uses</NuxtLink>
        <a :href="profile.linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a :href="profile.github" target="_blank" rel="noopener noreferrer">GitHub</a>
      </nav>
    </header>

    <NuxtPage />
  </div>
</template>
