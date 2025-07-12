<template>
  <div class="fixed inset-0 pointer-events-none z-10">
    <div
        v-for="(element, index) in floatingElements"
        :key="index"
        :class="[
        'absolute text-4xl opacity-20 animate-pulse',
        element.class
      ]"
        :style="{
        top: element.top,
        left: element.left,
        animationDelay: element.delay
      }"
    >
      {{ element.emoji }}
    </div>
  </div>
</template>

<script setup lang="ts">
const floatingElements = [
  { emoji: '🎈', top: '20%', left: '10%', delay: '0s', class: 'animate-bounce' },
  { emoji: '🎁', top: '60%', left: '85%', delay: '1s', class: 'animate-pulse' },
  { emoji: '🎂', top: '80%', left: '20%', delay: '2s', class: 'animate-bounce' },
  { emoji: '🎈', top: '30%', left: '75%', delay: '3s', class: 'animate-pulse' },
  { emoji: '🎁', top: '40%', left: '5%', delay: '4s', class: 'animate-bounce' },
  { emoji: '🎊', top: '70%', left: '90%', delay: '5s', class: 'animate-pulse' }
]
</script>