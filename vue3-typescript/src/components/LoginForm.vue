<template>
  <div>{{ msg }}</div>

  <div class="login">
    <form @submit.prevent="onSubmit">
      <div class="form-group my-2">
        <label>Email</label>
        <input
          type="text"
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
        Login
      </button>
      <!-- <button class="btn btn-success" @click="handleChange">Register</button> -->
    </form>
  </div>
</template>


<script lang="ts">
import { defineComponent, reactive } from "vue";
import userStore from "@/stores/user";

export default defineComponent({
  emits: ["submitted"],
  props: {
    msg: { type: String, required: true },
  },
  methods: {
    handleChange(event: Event) {
      // `event` implicitly has `any` type
      console.log((event.target as HTMLInputElement).value);
    },
  },
  setup(props, { emit }) {
    const form = reactive({
      email: "",
      password: "",
    });
    const onSubmit = () => {
      userStore.login(form.email, form.password).then(() => {
        emit("submitted");
      });
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