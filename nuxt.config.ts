// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
      '@vueuse/nuxt'
  ],
  css: ['~/assets/css/main.css'],
  plugins: [
      '~/plugins/gsap.client.ts',
      '~/plugins/confetti.client.ts'
  ],
    vite: {
      css: {
          postcss: {
              plugins: [
                  require('@tailwindcss/postcss')
              ]
          }
      }
    },
  app: {
      head: {
          title: 'Happy Birthday! 🎉',
          meta: [
              { name: 'description', content: 'Website ulang tahun yang minimalis dan modern' },
              { name: 'viewport', content: 'width=device-width, initial-scale=1' }
          ],
          link: [
              { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
              { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
              { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
              { rel: 'preconnect', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap' }
          ]
      }
  },
  runtimeConfig: {
      public: {
          birthdayDate: '2025-07-12',
          birthdayPerson: 'Nawang'
      }
  },
})
