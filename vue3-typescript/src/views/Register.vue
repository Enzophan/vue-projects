<template>
  <div class="col-md-12">
    <div class="register">
      <form @submit.prevent="onSubmit">
        <div class="mb-3 row" :class="{ error: v$.name.$errors.length }">
          <label for="staticName" class="col-sm-3 col-form-label"
            >Full Name</label
          >
          <div class="col-sm-9">
            <input
              type="text"
              class="form-control"
              id="staticName"
              v-model="form.name"
              placeholder="Erling Haaland"
            />
          </div>
          <div class="input-errors" v-if="v$.name.$error">
            <div class="error-msg">{{ v$.name.$errors[0].$message }}</div>
          </div>
        </div>

        <div class="mb-3 row" :class="{ error: v$.email.$errors.length }">
          <label for="staticEmail" class="col-sm-3 col-form-label">Email</label>
          <div class="col-sm-9">
            <input
              type="text"
              class="form-control"
              id="staticEmail"
              v-model="form.email"
              placeholder="email@example.com"
            />
          </div>
          <div class="input-errors" v-if="v$.email.$error">
            <div class="error-msg">{{ v$.email.$errors[0].$message }}</div>
          </div>
        </div>
        <div class="mb-3 row" :class="{ error: v$.password.$errors.length }">
          <label for="inputPassword" class="col-sm-3 col-form-label"
            >Password</label
          >
          <div class="col-sm-9">
            <input
              type="password"
              class="form-control"
              id="inputPassword"
              v-model="form.password"
              placeholder="Password"
            />
          </div>
          <div class="input-errors" v-if="v$.password.$error">
            <div class="error-msg">{{ v$.password.$errors[0].$message }}</div>
          </div>
        </div>
        <div
          class="mb-3 row"
          :class="{ error: v$.confirmPassword.$errors.length }"
        >
          <label for="inputPassword" class="col-sm-3 col-form-label"
            >Confirm Password</label
          >
          <div class="col-sm-9">
            <input
              type="password"
              class="form-control"
              id="inputPassword"
              v-model="form.confirmPassword"
              placeholder="Enter password again"
            />
          </div>
          <div class="input-errors" v-if="v$.confirmPassword.$error">
            <div class="error-msg">
              {{ v$.confirmPassword.$errors[0].$message }}
            </div>
          </div>
        </div>
        <div class="text-danger my-2">{{ userStore.state.error }}</div>
        <button class="btn btn-success btn-block my-2" type="submit">
          Register
        </button>
        <!-- <button class="btn btn-success" @click="handleChange">Register</button> -->
      </form>
      <!-- <div
        v-if="message"
        class="alert"
        :class="successful ? 'alert-success' : 'alert-danger'"
      >
        {{ message }}
      </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "vue";
// import { useRouter } from "vue-router";
import { useVuelidate } from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  maxLength,
  sameAs,
  helpers,
} from "@vuelidate/validators";
import userStore from "@/stores/user";

export default defineComponent({
  name: "Register",
  methods: {
    onSubmit() {
      this.v$.$validate();
      if (!this.v$.$error) {
        userStore
          .register(this.form.name, this.form.email, this.form.password)
          .then(() => {
            this.$router.push("/login");
            this.form.email = "";
            this.form.password = "";
            this.form.name = "";
            this.form.confirmPassword = "";
          });
      }
    },
  },
  setup() {
    // const router = useRouter();
    const form = reactive({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    const mustBelearnVue = (value: string) => value.includes("gmail.com");

    const rules = computed(() => {
      return {
        name: { required, minLength: minLength(3), maxLength: maxLength(20) },
        email: {
          required,
          email,
          mustBelearnVue: helpers.withMessage(
            "Must be Gmail.com",
            mustBelearnVue
          ),
        },
        password: { required, minLength: minLength(6) },
        confirmPassword: {
          required,
          minLength: minLength(6),
          sameAs: sameAs(form.password),
        },
      };
    });

    const v$ = useVuelidate(rules, form);

    return { form, userStore, v$ };
  },
});
</script>

<style scoped>
.register {
  display: flex;
  align-items: center;
  justify-content: center;
}
form {
  width: 50%;
}
div.row {
  /* margin-top: 5rem; */
}
</style>