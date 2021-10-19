<template>
  <div>
    <h1>Vuex Counter</h1>
    <h1 class="counter">{{ number }}</h1>
    <button @click="subNumber(value)">-</button>
    <input type="number" v-model="value" />
    <button @click="updateNumber(value)">+</button>
    <div>
      <button class="btn" @click="addRandomNumber()">Add by Random number</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { namespace } from "vuex-class";
const random = namespace("random");

@Options({
  data() {
    return {
      value: 1,
    };
  },
})
export default class Counter extends Vue {
  @random.State
  public number!: number;

  @random.Action
  public updateNumber!: () => void;

  @random.Action
  public subNumber!: () => void;

  @random.Action
  public addRandomNumber!: () => void;
}
</script>

<style scoped lang="scss">
.counter {
  font-size: 5rem;
}
button {
  border-radius: 100%;
  border: none;
  width: 2rem;
  height: 2rem;
  font-weight: 700;
  cursor: pointer;
}

input {
  padding: 0.4rem;
  margin: 0 0.5rem;
  text-align: center;
}

.btn {
  border-radius: 0.5rem;
  width: auto;
  background-color: #41b983;
  margin-top: 1rem;
  color: white;
  cursor: pointer;
}
</style>