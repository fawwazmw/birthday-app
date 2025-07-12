<template>
  <section id="gift" class="py-20">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent">
        Special Gift
      </h2>
      <div class="grid md:grid-cols-3 gap-8">
        <UICard
            v-for="feature in features"
            :key="feature.id"
            :icon="feature.icon"
            :title="feature.title"
            :description="feature.description"
            class="hover:transform hover:-translate-y-2 transition-all duration-300"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Feature } from '~/shared/types'

const features: Feature[] = [
  {
    id: 1,
    icon: '🎂',
    title: 'Birthday Cake',
    description: 'A special cake made with love to celebrate your special day.'
  },
  {
    id: 2,
    icon: '🎁',
    title: 'Surprise Gift',
    description: 'Gifts that have been specially prepared to make your day even more memorable.'
  },
  {
    id: 3,
    icon: '🎈',
    title: 'Small Party',
    description: 'A birthday party to remember forever with your loved ones?'
  }
]
</script>