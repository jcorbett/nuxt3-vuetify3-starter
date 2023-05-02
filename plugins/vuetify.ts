// plugins/vuetify.ts
// vite-plugin-vuetify auto imports components and directives
import { createVuetify } from 'vuetify'

import { aliases, fa } from 'vuetify/iconsets/fa'
import {mdi} from "vuetify/lib/iconsets/mdi";

import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/all.css'

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        // config vuetify here
        theme: {
            defaultTheme: 'dark'
        },
        icons: {
            defaultSet: 'mdi',
            aliases,
            sets: {
                mdi,
                fa
            }
        },

    })

    nuxtApp.vueApp.use(vuetify)
})