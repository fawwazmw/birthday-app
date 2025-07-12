<template>
  <section id="gallery" class="py-20">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent">
        Gallery
      </h2>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
        <div
            v-for="(photo, index) in photos"
            :key="index"
            class="aspect-square bg-gradient-to-br from-pink-400 via-purple-500 to-cyan-400 rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
            @click="showPhoto(index)"
        >
          <img
              :src="photo.src"
              :alt="photo.alt"
              class="w-full h-full object-cover"
              @error="handleImageError"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { celebrate } = useConfetti()

const photos = [
  {
    src: '/images/photo1.jpeg',
    alt: 'Sticker Njir',
    message: 'Adanya sticker bang!'
  },
  {
    src: '/images/photo2.jpeg',
    alt: 'Angjay Rosblox',
    message: 'Ava Roblox ni bos!'
  },
  {
    src: '/images/photo3.jpeg',
    alt: 'Aelah Sticker lagi',
    message: 'Awokkwokow!'
  },
  {
    src: '/images/photo4.jpeg',
    alt: 'Sticker Part 3',
    message: 'Beda Pose aja!'
  },
  {
    src: '/images/photo5.jpeg',
    alt: 'Ini real or fake',
    message: 'Nah ini baru real human!'
  },
  {
    src: '/images/photo6.jpeg',
    alt: 'Sticker part 4',
    message: 'Yeilah balik lagi sticker!'
  }
]

const showPhoto = (index: number) => {
  alert(photos[index].message)
  celebrate()
}

const handleImageError = (event: Event) => {
  const target = event.target as HTMLImageElement
  // Fallback jika gambar tidak ditemukan
  target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik05MCA2MEg2MEwxMjAgMTIwSDkwVjYwWiIgZmlsbD0iI0Q1RDVENSIvPgo8L3N2Zz4K'
}
</script>