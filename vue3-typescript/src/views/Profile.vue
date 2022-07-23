<template>
  <div class="container">
    <header class="jumbotron">
      <h3>
        <strong>{{ currentUser.name }}</strong> Profile
      </h3>
    </header>
    <!-- <p>
      <strong>Token:</strong>
      {{ currentUser.accessToken.substring(0, 20) }} ...
      {{ currentUser.accessToken.substr(currentUser.accessToken.length - 20) }}
    </p> -->
    <p>
      <strong>Id:</strong>
      {{ currentUser._id }}
    </p>
    <p>
      <strong>Email:</strong>
      {{ currentUser.email }}
    </p>
    <!-- <strong>Authorities:</strong>
    <ul>
      <li v-for="role in currentUser.roles" :key="role">{{ role }}</li>
    </ul> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import userStore from "@/stores/user";

// interface CurrentUser {
//   id: string;
//   email: string;
//   name: string;
// }

export default defineComponent({
  data() {
    return {
      currentUser: {},
    };
  },
  mounted() {
    const { state } = userStore;
    this.currentUser = state;
  },
});
</script>


<style>
</style>