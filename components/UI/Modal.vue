<template>
  <Teleport to="body">
    <div
        v-if="isOpen"
        class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        @click="closeModal"
    >
      <div
          class="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-md w-full border border-white/20"
          @click.stop
      >
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-2xl font-bold text-white">{{ title }}</h3>
          <button
              @click="closeModal"
              class="text-white hover:text-gray-300 text-2xl"
          >
            ×
          </button>
        </div>
        <div class="text-white">
          <slot />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
interface Props {
  isOpen: boolean
  title: string
}

defineProps<Props>()

const emit = defineEmits<{
  close: []
}>()

const closeModal = () => {
  emit('close')
}
</script>