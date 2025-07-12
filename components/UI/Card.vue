<template>
  <div class="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
    <div class="text-6xl mb-6">{{ icon }}</div>
    <h3 class="text-2xl font-bold mb-4">{{ title }}</h3>
    <p class="text-gray-200 leading-relaxed">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  icon: string
  title: string
  description: string
}

defineProps<Props>()
</script>