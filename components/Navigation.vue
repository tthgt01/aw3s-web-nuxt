<template>
  <v-app-bar
    :elevation="2"
    scroll-behavior="hide"
    color="rgb(46 46 46)"
    density="compact"
  >
    <v-app-bar-nav-icon
      variant="text"
      color="white"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>
    <v-app-bar-title class="site-name">
      <v-icon icon="$vuetify" size="small"></v-icon>&nbsp;Anti Web3 Scam
    </v-app-bar-title>
  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    temporary
  >
    <v-list
      density="compact"
      nav
    >
      <v-list-item
        prepend-icon="mdi-home-circle"
        title="關於 Anti Web3 Scam"
        @click="navigateTo('/', { external: true })"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-book"
        title="專題研究 - jp-ex.io"
        @click="navigateTo('/cases/jpex', { external: true })"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-alert"
        title="舉報騙局"
        @click="navigateTo('https://forms.gle/hkVNAsT1ejmfSh156', { external: true })"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
const drawer = ref(false);
</script>

<style scoped>
.site-name {
  color: #fff;
}
</style>