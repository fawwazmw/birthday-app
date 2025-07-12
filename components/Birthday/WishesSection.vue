<template>
  <section id="wishes" class="py-20">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent">
        Greetings & Prayers
      </h2>
      <div class="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-4xl mx-auto">
<!--        <form @submit.prevent="addWish" class="space-y-6 max-w-2xl mx-auto mb-8">-->
<!--          <input-->
<!--              v-model="newWish.name"-->
<!--              type="text"-->
<!--              placeholder="Nama Anda"-->
<!--              class="w-full bg-white/20 border border-white/30 rounded-xl px-6 py-4 text-white placeholder-white/70 backdrop-blur-sm"-->
<!--              required-->
<!--          >-->
<!--          <textarea-->
<!--              v-model="newWish.message"-->
<!--              placeholder="Tuliskan ucapan dan doa terbaik Anda..."-->
<!--              class="w-full bg-white/20 border border-white/30 rounded-xl px-6 py-4 text-white placeholder-white/70 backdrop-blur-sm min-h-[100px] resize-y"-->
<!--              required-->
<!--          ></textarea>-->
<!--          <UIButton-->
<!--              type="submit"-->
<!--              class="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 px-6 py-4 rounded-xl font-bold"-->
<!--          >-->
<!--            Kirim Ucapan-->
<!--          </UIButton>-->
<!--        </form>-->

        <div class="space-y-4">
          <div
              v-for="wish in wishes"
              :key="wish.id"
              class="bg-white/10 rounded-xl p-6 border-l-4 border-yellow-400"
          >
            <div class="font-bold text-yellow-400 mb-2">{{ wish.name }}</div>
            <div class="opacity-90">{{ wish.message }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { wishes, newWish, addWish } = useWishes()
</script>