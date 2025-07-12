import { gsap } from 'gsap'

export default defineNuxtPlugin(() => {
    if (process.client) {
        window.gsap = gsap
    }
})