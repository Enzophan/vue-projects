<template>
  <div>
    <h3>User Details Component</h3>
    <div class="details">
      <div class="username">User: {{ nameUpperCase }}</div>
      <input
        :value="name"
        @keypress.enter="handleUpdateName($event.target.value)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { namespace } from "vuex-class";
const user = namespace("user");

@Options({
  data() {
    return {
      msg: "welcome to my app",
      list: [
        {
          name: "Preetish",
          age: "26",
        },
        {
          name: "John",
          age: "30",
        },
      ],
    };
  },
  methods: {
    handleUpdateName(value: string) {
      this.updateName(value);
    },
  },
})
export default class UserDetails extends Vue {
  @user.State
  public name!: string;
  @user.Getter
  public nameUpperCase!: string;
  @user.Action
  public updateName!: () => void;
}
</script>

<style scoped>
</style>