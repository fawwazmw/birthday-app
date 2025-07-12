export const useAnimations = () => {
    const animateHero = (element: HTMLElement) => {
        if (typeof window !== 'undefined' && (window as any).gsap) {
            (window as any).gsap.from(element, {
                duration: 1,
                y: 50,
                opacity: 0,
                ease: 'power2.out'
            })
        }
    }

    const animateCards = (elements: HTMLElement[]) => {
        if (typeof window !== 'undefined' && (window as any).gsap) {
            (window as any).gsap.from(elements, {
                duration: 1,
                y: 100,
                opacity: 0,
                ease: 'power2.out',
                stagger: 0.2
            })
        }
    }

    return {
        animateHero,
        animateCards
    }
}