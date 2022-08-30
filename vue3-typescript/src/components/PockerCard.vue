<template>
  <div
    class="card-body"
    @click="selectCard(cardValue)"
    :class="active ? 'active' : null"
  >
    <div class="content">
      <h5 class="card-title">{{ cardValue }}</h5>
      <!-- <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> -->
      <!-- <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p> -->
      <div v-if="active">
        <a href="#" class="card-link">Confirm</a>
      </div>
    </div>
    <!-- <a href="#" class="card-link">Another link</a> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  emits: ["selectCard"],
  props: {
    cardValue: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const selectCard = (cardValue: string) => {
      if (cardValue !== "Here we go") {
        emit("selectCard", cardValue);
      }
    };
    return { selectCard };
  },
});
</script>


<style scoped>
.card-body .content {
  position: relative;
  margin: 50px;
  height: 10vh;
}
.card-title {
  font-size: 40px;
}
</style>