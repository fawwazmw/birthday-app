<template>
  <section id="home" class="min-h-screen flex items-center justify-center text-center relative overflow-hidden">
    <div class="container mx-auto px-6 z-10">
      <h1
          ref="heroTitle"
          class="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-pink-400 via-yellow-400 to-cyan-400 bg-clip-text text-transparent"
      >
        Happy Birthday Nawang!
      </h1>
      <p class="text-xl md:text-2xl mb-8 opacity-90">
        Happy special birthday!
      </p>
      <UIButton
          @click="celebrate"
          class="bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 px-10 py-4 rounded-full text-xl font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
      >
        Celebrate Now!
      </UIButton>
    </div>
  </section>
</template>

<script setup lang="ts">
const heroTitle = ref<HTMLElement>()
const { celebrate } = useConfetti()

onMounted(() => {
  const { animateHero } = useAnimations()
  if (heroTitle.value) {
    animateHero(heroTitle.value)
  }
})
</script>