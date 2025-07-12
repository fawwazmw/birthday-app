import type { Wish } from '~/shared/types'

export const useWishes = () => {
    const wishes = ref<Wish[]>([
        {
            id: 1,
            name: 'FWZ',
            message: 'Selamat ulang tahun! Semoga di umur yang baru ini kamu makin dewasa... tapi jangan lupa tetap nikmati masa muda kayak sekarang. Soalnya kalau terlalu dewasa nanti boring! 🎂 Wish You All The Best! Sukses selalu >_<'
        },
        {
            id: 2,
            name: 'Supriyanto',
            message: 'Selamat memperingati hari kelahiran yang sist. Semoga dalam perjalanan hidup yang baru ini, Anda senantiasa diberikan kesehatan, keberkahan, dan kemudahan dalam meraih segala cita-cita. Semoga menjadi pribadi yang lebih baik dan bermanfaat bagi sesama. Selamat ulang tahun.'
        },
        {
            id: 3,
            name: 'Roblox.com',
            message: 'Selamat ulang tahun! @awawan_hh Semoga kita bisa merayakan banyak ulang tahun lagi bersama-sama. Aku berjanji akan selalu ada untuk mendampingimu dalam suka dan duka. From Rosblox tercinta'
        },
        {
            id: 4,
            name: 'Bunga',
            message: 'Selamat ulang tahun! Satu tahun lagi telah kamu lalui dengan penuh perjuangan dan pencapaian. Ingatlah bahwa setiap tahun adalah kesempatan baru untuk menulis cerita yang lebih indah. Jangan takut bermimpi besar dan terus berusaha. Kamu punya potensi luar biasa yang belum tergali sepenuhnya. Semoga tahun ini menjadi tahun breakthrough-mu!'
        },
    ])

    const newWish = ref({
        name: '',
        message: ''
    })

    const addWish = () => {
        if (newWish.value.name.trim() && newWish.value.message.trim()) {
            wishes.value.unshift({
                id: Date.now(),
                name: newWish.value.name,
                message: newWish.value.message
            })

            newWish.value = { name: '', message: '' }

            // Show success message
            if (typeof window !== 'undefined') {
                alert('Ucapan berhasil dikirim! Terima kasih 🎉')
            }
        }
    }

    return {
        wishes: readonly(wishes),
        newWish,
        addWish
    }
}