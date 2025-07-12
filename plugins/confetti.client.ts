import confetti from 'canvas-confetti'

export default defineNuxtPlugin(() => {
    if (process.client) {
        window.confetti = confetti
    }
})