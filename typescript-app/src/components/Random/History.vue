<template>
  <div class="container">
    <h4>History</h4>
    <div class="flex">
      <p
        v-for="(number, index) in history"
        :key="index"
        :class="activeIndexes(value).includes(index) && 'bold'"
      >
        {{ number }}
      </p>
    </div>
    <!-- {{ activeIndexes(value) }} -->
    <input type="number" placeholder="Search by index" v-model="value" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { namespace } from "vuex-class";
const random = namespace("random");

@Options({
  data() {
    return {
      value: 0,
    };
  },
})
export default class History extends Vue {
  @random.State
  public history!: number[];
  @random.Getter
  public activeIndexes!: number[];
}
</script>

<style scoped lang="scss">
.container {
  margin-top: 7rem;
}
.flex {
  display: flex;
  text-align: center;
  width: 25rem;
  margin: 0 auto;
  justify-content: center;
  flex-wrap: wrap;
  p {
    margin: 1rem;
  }
  .bold {
    font-weight: 900;
    color: orange;
  }
}
input {
  padding: 0.4rem;
  margin: 0 0.5rem;
  text-align: center;
}
</style>