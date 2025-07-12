<template>
  <section class="py-20">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent">
        Time Left For Next Year Lol
      </h2>
      <div class="flex justify-center gap-8 flex-wrap">
        <div
            v-for="unit in timeUnits"
            :key="unit.label"
            class="bg-white/10 backdrop-blur-md rounded-2xl p-6 min-w-[120px] text-center"
        >
          <div class="text-4xl font-black text-yellow-400">
            {{ unit.value }}
          </div>
          <div class="text-sm opacity-90 mt-2">
            {{ unit.label }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { timeUnits } = useCountdown('2024-08-15')
</script>