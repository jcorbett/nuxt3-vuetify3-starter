// plugins/vuetify.ts
// vite-plugin-vuetify auto imports components and directives
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        // config vuetify here
        ssr: true,
        defaults,
        theme: {
            defaultTheme: 'dark'
        }
    })

    nuxtApp.vueApp.use(vuetify)
})