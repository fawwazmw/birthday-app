<template>
  <footer class="bg-black/30 py-12">
    <div class="container mx-auto px-6 text-center">
      <div class="flex justify-center items-center space-x-8 flex-wrap">
        <p>&copy; {{ currentYear }} Birthday Celebration. Made with ❤️ By FWZ.dev</p>
<!--        <div class="flex space-x-4">-->
<!--          <a href="#" class="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all">-->
<!--            📧-->
<!--          </a>-->
<!--          <a href="#" class="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all">-->
<!--            📱-->
<!--          </a>-->
<!--          <a href="#" class="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all">-->
<!--            🌐-->
<!--          </a>-->
<!--        </div>-->
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>