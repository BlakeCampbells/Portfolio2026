<script setup lang="ts">
withDefaults(defineProps<{
  src: string
  alt?: string
  size?: number
  loading?: 'lazy' | 'eager'
}>(), {
  alt: '',
  size: 28,
  loading: 'lazy'
})
</script>

<template>
  <img
    v-if="src.endsWith('.svg')"
    :src="src"
    :alt="alt"
    :width="size"
    :height="size"
    :loading="loading"
    decoding="async"
  />
  <NuxtImg
    v-else
    :src="src"
    :alt="alt"
    :width="size"
    :height="size"
    :loading="loading"
    fit="contain"
    format="webp"
    quality="80"
    densities="x1 x2"
    decoding="async"
  />
</template>
