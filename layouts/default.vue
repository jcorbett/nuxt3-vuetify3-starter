<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          :value="item"
          router
          exact
        >
          
          <v-icon :icon="item.icon"></v-icon>
          <!-- <v-icon :icon="item.icon"></v-icon> -->
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <NuxtPage />
      </v-container>
    </v-main>
    <v-footer
      absolute
      app
    >
      <strong>&copy; Corbett.ai, {{ new Date().getFullYear() }}. &nbsp; Reach out and say hi </strong>
      <v-btn
        icon="mdi-twitter"
        href="https://twitter.com/_ustin"
        variant="text">
      </v-btn>
      <v-btn
        icon="mdi-linkedin"
        href="https://www.linkedin.com/in/-ustin/"
        variant="text">
      </v-btn>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      drawer: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      title: 'Website Title'
    }
  }
}
</script>
