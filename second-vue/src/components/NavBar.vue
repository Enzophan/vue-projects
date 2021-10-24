<template>
  <div>
    <ul>
      <li class="logo"><a href="/">VUE_LOGO</a></li>
      <li v-for="(link, index) in links" :key="index">
        <router-link :to="link.path">{{ link.name | toUpperCase }}</router-link>
      </li>

      <!-- <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/facts">Facts</router-link></li>
      <li><router-link to="/board">Board</router-link></li>
      <li><router-link to="/about">About</router-link></li> -->
      <li style="float: right">
        <button class="btn"><i class="fas fa-plus"></i> Add Board</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { name: "home", path: "/" },
        { name: "facts", path: "/facts" },
        { name: "board", path: "/board" },
        { name: "about", path: "/about" },
      ],
    };
  },
  filters: {
    toUpperCase(value) {
      return value.toUpperCase();
    },
  },
};
</script>

<style scoped>
</style>