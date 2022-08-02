<template>
  <div class="col-md-12">
    <div class="login">
      <form @submit.prevent="onSubmit">
        <div class="form-group my-2">
          <label>Name</label>
          <input
            type="text"
            class="form-control"
            v-model="form.name"
            placeholder="Full Name"
            required
          />
        </div>
        <div class="form-group my-2">
          <label>Email</label>
          <input
            type="email"
            class="form-control"
            v-model="form.email"
            placeholder="Email"
            required
          />
        </div>
        <div class="form-group my-2">
          <label>Password</label>
          <input
            type="password"
            class="form-control"
            v-model="form.password"
            placeholder="Password"
            required
          />
        </div>
        <div class="text-danger my-2">{{ userStore.state.error }}</div>
        <button class="btn btn-success btn-block my-2" type="submit">
          Register
        </button>
        <!-- <button class="btn btn-success" @click="handleChange">Register</button> -->
      </form>
      <div
        v-if="message"
        class="alert"
        :class="successful ? 'alert-success' : 'alert-danger'"
      >
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useRouter } from "vue-router";
import userStore from "@/stores/user";

export default defineComponent({
  name: "Register",
  setup() {
    const router = useRouter();
    const form = reactive({
      name: "",
      email: "",
      password: "",
    });
    const onSubmit = () => {
      userStore.register(form.name, form.email, form.password).then(() => {
        console.log("Register");
        router.push("/login");
      });
      form.name = "";
      form.email = "";
      form.password = "";
    };

    return { form, userStore, onSubmit };
  },
});
</script>

<style scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
}
form {
  width: 50%;
}
</style>