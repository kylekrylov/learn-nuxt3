/// https://nuxt.com/docs/api/configuration/nuxt-config
import {defineNuxtConfig} from '@nuxt/bridge';

export default defineNuxtConfig({
    modules: [
        '@nuxtjs/google-fonts'
    ],
    googleFonts: {
        families: {
            'Montserrat': [400, 500, 700]
        }
    },

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/style/theme.scss" as *;'
                }
            }
        }
    },

    build: {
        postcss: {
            plugins: {
                'autoprefixer': {}
            }
        }
    },

    css: [
        "~/assets/style/main.scss"
    ],

    router: {
        base: '/nuxt-learn/'
    },
})
