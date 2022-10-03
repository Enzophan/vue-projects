<template>
  <div class="content">
    <div class="login-form">
      <LoginForm :msg="'Sign In'" @submitted="submitted" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import { useRouter } from "vue-router";
import userStore from "@/stores/user";
import LoginForm from "@/components/LoginForm.vue";

export default defineComponent({
  name: "Login",
  components: {
    LoginForm,
  },
  // created() {
  //   console.log("Login Page ", userStore.getters.isLoggedIn);
  //   if (userStore.getters.isLoggedIn) {
  //     //   this.$router.push("/");
  //     this.submitted();
  //   }
  // },
  setup() {
    const router = useRouter();
    // console.log("userStore.state.email ", userStore.state.email)
    const loggedIn = computed(() => (userStore.state.email ? true : false));
    onMounted(() => {
      // console.log("Login Page ", loggedIn.value);
      if (loggedIn.value) {
        // router.push("/");
        submitted();
      }
    });
    const submitted = () => {
      // console.log("submitted");
      // router.push("/");
      window.location.replace("/");
    };
    return { router, submitted };
  },
});
</script>

<style scoped>
.login-form {
  margin: 1rem;
}
</style>