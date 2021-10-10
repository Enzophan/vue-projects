<template>
  <div id="app" class="container">
    <div id="nav">
      <router-link to="/">Go to Home</router-link> |
      <router-link to="/about">Go to About</router-link> |
      <router-link :to="{ name: 'Jobs' }">Go to Jobs</router-link> |
      <router-link :to="{ name: 'Posts' }">Go to Posts</router-link>
    </div>

    <button @click="redirect">Redirect</button>
    <button @click="back">Go back</button>
    <button @click="forward">Go forward</button>
    <router-view />
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "App",
  // methods: {
  //   redirect() {
  //     this.$router.push({ name: 'Home' })
  //   },
  //   back() {
  //     this.$router.go(-1);
  //   },
  //   forward() {
  //     this.$router.go(1);
  //   },
  // },
  setup() {
    const router = useRouter();
    function redirect() {
      return router.push({ name: "Home" });
    }
    function back() {
      return router.go(-1);
    }
    function forward() {
      return router.go(1);
    }

    return {
      redirect,
      back,
      forward,
    };
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}
#nav a.router-link-exact-active {
  color: #fff;
  background: #42b983;
}

button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
}
</style>
