import type { CountdownUnit } from '~/shared/types'

export const useCountdown = (targetDate: string) => {
    const timeUnits = ref<CountdownUnit[]>([
        { label: 'Hari', value: '00' },
        { label: 'Jam', value: '00' },
        { label: 'Menit', value: '00' },
        { label: 'Detik', value: '00' }
    ])

    const updateCountdown = () => {
        const target = new Date(targetDate).getTime()
        const now = new Date().getTime()
        const distance = target - now

        const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)

        timeUnits.value = [
            { label: 'Day', value: days.toString().padStart(2, '0') },
            { label: 'Hour', value: hours.toString().padStart(2, '0') },
            { label: 'Minutes', value: minutes.toString().padStart(2, '0') },
            { label: 'Second', value: seconds.toString().padStart(2, '0') }
        ]
    }

    onMounted(() => {
        updateCountdown()
        const interval = setInterval(updateCountdown, 1000)

        onUnmounted(() => {
            clearInterval(interval)
        })
    })

    return {
        timeUnits: readonly(timeUnits)
    }
}