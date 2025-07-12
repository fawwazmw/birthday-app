<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-600 to-purple-800 text-white flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-6xl font-bold mb-4">{{ error.statusCode }}</h1>
      <p class="text-xl mb-8">{{ error.statusMessage }}</p>
      <NuxtLink to="/" class="bg-gradient-to-r from-pink-500 to-yellow-500 px-6 py-3 rounded-full font-bold">
        Back to Home
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
interface NuxtError {
  statusCode: number
  statusMessage: string
}

defineProps<{
  error: NuxtError
}>()
</script>