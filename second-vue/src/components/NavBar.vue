<template>
  <div>
    <ul>
      <li class="logo">
        <router-link to="/">VUE_LOGO</router-link>
      </li>
      <li class="menu" v-for="(link, index) in links" :key="index">
        <router-link :to="link.path">{{ link.name | toUpperCase }}</router-link>
      </li>

      <!-- <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/facts">Facts</router-link></li>
      <li><router-link to="/board">Board</router-link></li>
      <li><router-link to="/about">About</router-link></li> -->
      <li style="float: right">
        <AddBoardBtn />
      </li>
    </ul>
  </div>
</template>

<script>
import AddBoardBtn from "@/components/AddBoardBtn.vue";

export default {
  components: { AddBoardBtn },
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