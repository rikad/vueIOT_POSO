<template>
    <v-list>

      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
        </v-list-item-avatar>
      </v-list-item>

      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="title">Elawliet</v-list-item-title>
          <v-list-item-subtitle>rikad@ngulik.id</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-icon>mdi-menu-down</v-icon>
        </v-list-item-action>
      </v-list-item>
      <v-divider></v-divider>

      <v-list-group
        v-for="item in items"
        :key="item.title"
        v-model="item.active"
        :prepend-icon="item.action"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="subItem in item.items"
          :key="subItem.title"
          @click="go(subItem.id)"
        >
          <v-list-item-content>
            <v-list-item-title v-text="subItem.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          action: 'account_tree',
          title: 'Station 1',
          items: [
            { title: 'Sensors 1', id: 1 },
            { title: 'Sensors 2', id: 2 },
            { title: 'Sensors 3', id: 3 }
          ]
        },
        {
          action: 'account_tree',
          title: 'Station 2',
          items: [
            { title: 'Sensors 1', id: 1 },
            { title: 'Sensors 2', id: 2 },
            { title: 'Sensors 3', id: 3 }
          ]
        }
      ]
    }
  },
  methods: {
    go: function (to) {
      this.$router.push('/sensor/' + to)
    }
  }
}
</script>
