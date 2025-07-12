export const useConfetti = () => {
    const celebrate = () => {
        if (typeof window !== 'undefined' && (window as any).confetti) {
            // Main confetti burst
            (window as any).confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            })

            // Left side burst
            setTimeout(() => {
                (window as any).confetti({
                    particleCount: 50,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 }
                })
            }, 200)

            // Right side burst
            setTimeout(() => {
                (window as any).confetti({
                    particleCount: 50,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 }
                })
            }, 400)
        }
    }

    return {
        celebrate
    }
}