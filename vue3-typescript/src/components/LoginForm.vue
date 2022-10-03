<template>
  <div class="text-uppercase fs-2 fw-bold">{{ msg }}</div>
  <div class="login">
    <form @submit.prevent="submitForm">
      <div class="mb-3 row" :class="{ error: v$.email.$errors.length }">
        <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            id="staticEmail"
            v-model="state.email"
            placeholder="email@example.com"
          />
        </div>
        <div class="input-errors" v-if="v$.email.$error">
          <div class="error-msg">{{ v$.email.$errors[0].$message }}</div>
        </div>
      </div>

      <div class="mb-3 row" :class="{ error: v$.password.$errors.length }">
        <label for="inputPassword" class="col-sm-2 col-form-label"
          >Password</label
        >
        <div class="col-sm-10">
          <input
            type="password"
            class="form-control"
            id="inputPassword"
            v-model="state.password"
            placeholder="Password"
          />
        </div>
        <div class="input-errors" v-if="v$.password.$error">
          <div class="error-msg">{{ v$.password.$errors[0].$message }}</div>
        </div>
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
import { computed, defineComponent, reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength, helpers } from "@vuelidate/validators";

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
    submitForm() {
      this.v$.$validate();
      if (!this.v$.$error) {
        userStore.login(this.state.email, this.state.password).then(() => {
          this.$emit("submitted");
          this.state.email = "";
          this.state.password = "";
        });
      }
    },
  },
  setup() {
    const state = reactive({
      email: "",
      password: "",
    });

    const mustBelearnVue = (value: string) => value.includes("gmail.com");

    const rules = computed(() => {
      return {
        email: {
          required,
          email,
          mustBelearnVue: helpers.withMessage(
            "Must be Gmail.com",
            mustBelearnVue
          ),
        },
        password: { required, minLength: minLength(6) },
      };
    });

    const v$ = useVuelidate(rules, state);

    return { state, v$, userStore };
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