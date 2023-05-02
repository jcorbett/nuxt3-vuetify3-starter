// plugins/vuetify.ts
// vite-plugin-vuetify auto imports components and directives
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        // config vuetify here
        theme: {
            defaultTheme: 'dark'
        }
    })

    nuxtApp.vueApp.use(vuetify)
})