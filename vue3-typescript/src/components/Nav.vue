<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <a href="/" class="navbar-brand">Zinzo</a>
    <div class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link to="/home" class="nav-link">
          <font-awesome-icon icon="home" /> Home
        </router-link>
      </li>
      <!-- <li v-if="showAdminBoard" class="nav-item">
        <router-link to="/admin" class="nav-link">Admin Board</router-link>
      </li>
      <li v-if="showModeratorBoard" class="nav-item">
        <router-link to="/mod" class="nav-link">Moderator Board</router-link>
      </li> -->
      <!-- <li class="nav-item">
        <router-link v-if="currentUser" to="/user" class="nav-link"
          >User</router-link
        >
      </li> -->
    </div>
    <div v-if="!currentUser" class="navbar-nav ml-auto">
      <!-- <li class="nav-item">
        <router-link to="/register" class="nav-link">
          <font-awesome-icon icon="user-plus" /> Sign Up
        </router-link>
      </li> -->
      <li class="nav-item">
        <router-link to="/login" class="nav-link">
          <font-awesome-icon icon="sign-in-alt" /> Login
        </router-link>
      </li>
    </div>
    <div v-if="currentUser" class="navbar-nav ml-auto">
      <li class="nav-item">
        <router-link to="/profile" class="nav-link">
          <font-awesome-icon icon="user" />
          {{ message }}
        </router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link" @click.prevent="logOut">
          <font-awesome-icon icon="sign-out-alt" /> LogOut
        </a>
      </li>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, onMounted, Ref, ref } from "vue";
import userStore from "@/stores/user";

export default defineComponent({
  name: "Nav",
  setup() {
    const { state, getters, getUser } = userStore;
    const message = ref("");
    const currentUser: Ref<string | undefined> = ref("");
    onMounted(async () => {
      getUser().then((data) => {
        console.log("getUser ", data);
        message.value = `Hi, ${data.name}`;
        currentUser.value = data.email;
      });
    });
    return { state, getters, getUser, message, currentUser };
  },
});
</script>

<style scoped>
</style>