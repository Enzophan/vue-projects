<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Project
      :object="{ name: 'Kent', username: 'nhan.phan' }"
      :message="message"
    />
    <UserDetails />
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Project from "@/components/Project.vue";
import UserDetails from "@/components/UserDetails.vue";

@Options({
  components: {
    HelloWorld,
    Project,
    UserDetails,
  },
  data() {
    return {
      message: "Welcome to Your Vue.js + TypeScript App",
    };
  },
})
export default class Home extends Vue {}
</script>
