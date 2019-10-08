<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="true"
      app
    >
    <Sidebar />
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="true"
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col class="text-center">
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; 2019 <a href="https://www.ngulik.id">Rikad</a>, with Lumen, Vue & Vuetify</span>
    </v-footer>
  </v-app>
</template>

<script>
import Sidebar from './components/Sidebar'

export default {
  props: {
    source: String
  },
  components: {
    Sidebar
  },
  data: () => ({
    drawer: null,
    stations: []
  }),
  methods: {
    go: function (to) {
      this.$router.push(to)
    }
  }
}
</script>
