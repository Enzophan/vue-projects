<template>
  <div class="content">
    <div class="login-form">
      <LoginForm :msg="'Login Page'" @submitted="submitted" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, InjectionKey } from "vue";
import { useRouter } from "vue-router";
import userStore from "@/stores/user";
import LoginForm from "@/components/LoginForm.vue";

interface Settings {
  theme: string;
}

const SettingsKey: InjectionKey<Settings> = Symbol("settings");

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
    const settings = inject(SettingsKey, { theme: "light" });
    console.log("settings.theme ", settings);
    const oppsiteTheme = computed(() =>
      settings && settings.theme === "dark" ? "light" : "dark"
    );

    const rounter = useRouter();
    const submitted = () => {
      console.log("submitted");
      rounter.push("/");
      if (settings) settings.theme = oppsiteTheme.value;
    };
    return { submitted };
  },
});
</script>

<style scoped>
</style>