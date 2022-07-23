<template>
  <div class="content">
    <div class="login-form">
      <LoginForm :msg="'Login Page'" @submitted="submitted" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import userStore from "@/stores/user";
import LoginForm from "@/components/LoginForm.vue";

export default defineComponent({
  name: "Login",
  components: {
    LoginForm,
  },
  created() {
    console.log("Login Page ", userStore.getters.isLoggedIn);
    if (userStore.getters.isLoggedIn) {
      //   this.$router.push("/");
      this.submitted();
    }
  },
  setup() {
    const rounter = useRouter();
    const submitted = () => {
      console.log("submitted");
      rounter.push("/");
    };
    return { submitted };
  },
});
</script>

<style scoped>
</style>