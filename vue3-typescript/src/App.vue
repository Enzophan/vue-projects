<template>
  <Spinner :start="spin.val" />
  <div class="container">
    <Nav />
    <router-view />
    <h2>{{ welcomeMsg }}</h2>
  </div>
  <!-- <div v-if="!spin">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div v-if="!logged" class="d-grid gap-2 col-6 mx-auto">
      <Login :msg="'Login Page'" />
    </div>
    <div v-else class="text-center">
      <h2>{{ welcomeMsg }}</h2>
      <Counter />
      <button class="btn btn-secondary" @click="logout">Logout</button>
    </div>
  </div> -->
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import Nav from "@/components/Nav.vue";
import Login from "@/components/LoginForm.vue";
import Counter from "@/components/Counter.vue";
import Spinner from "@/components/Spinner.vue";
import userStore from "@/stores/user";

@Options({
  components: {
    Nav,
    Login,
    Counter,
    Spinner,
  },
  provide() {
    return {
      mySpinner: this.spin,
    };
  },
})
export default class App extends Vue {
  spin = {
    val: false,
  };

  get logged(): boolean {
    return userStore.getters.isLoggedIn;
  }

  get welcomeMsg(): string {
    return `Welcome, ${userStore.state.name ? userStore.state.name : "guest"}`;
  }

  // mounted(): void {
  // if (localStorage.getItem("user")) {
  //   userStore.getUser();
  // }
  // setTimeout(() => {
  //   this.spin = false;
  // }, 300);
  // }

  // logout(): void {
  //   userStore.logout();
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
</style>
