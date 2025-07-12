<template>
  <button
      :type="type"
      :class="[
      'px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105',
      variant === 'primary' && 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 shadow-lg hover:shadow-xl',
      variant === 'secondary' && 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 shadow-lg hover:shadow-xl',
      variant === 'outline' && 'border-2 border-white text-white hover:bg-white hover:text-gray-900',
      className
    ]"
      @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
}

withDefaults(defineProps<Props>(), {
  type: 'button',
  variant: 'primary',
  className: ''
})

defineEmits<{
  click: [event: MouseEvent]
}>()
</script>