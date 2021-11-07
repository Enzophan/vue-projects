<template>
  <v-app id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
    <Snackbar />
    <!-- <v-snackbar
      v-for="(snackbar, index) in snackbars.filter((s) => s.showing)"
      :key="snackbar.text + index"
      v-model="snackbar.showing"
      :timeout="snackbar.timeout"
      :color="snackbar.color"
      :style="`bottom: ${index * 60 + 8}px`"
    >
      {{ snackbar.text }}
      <template v-slot:action="{ attrs }">
        <v-btn
          color="black"
          text
          v-bind="attrs"
          @click="snackbar.showing = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar> -->
  </v-app>
</template>

<script>
// import { mapState } from "vuex";
import Snackbar from "./components/Snackbar.vue";

export default {
  components: {
    Snackbar,
  },
  // computed: {
  //   ...mapState(["snackbars"]),
  // },
};
</script>
<style>
</style>
