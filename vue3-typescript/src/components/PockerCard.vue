<template>
  <div
    class="card-body"
    @click="selectCard(cardValue)"
    :class="active ? 'active' : null"
    v-if="roomStatus === 'playing'"
  >
    <div class="content">
      <h5 class="card-title">{{ cardValue }}</h5>
      <!-- <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> -->
      <!-- <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p> -->
      <div v-if="active">
        <a href="#" class="card-link" @click="confirmSelectedHandle(cardValue)"
          >Confirm</a
        >
      </div>
    </div>
    <!-- <a href="#" class="card-link">Another link</a> -->
  </div>
  <div class="card-body" v-else>
    <div class="content text-center">
      <img src="@/assets/images/pocker.png" class="rounded" alt="Pocker" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  emits: ["selectCard", "confirmSelected"],
  props: {
    roomStatus: {
      type: String,
      required: true,
    },
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
    const confirmSelectedHandle = (cardValue: string) => {
      emit("confirmSelected", cardValue);
    };
    return { selectCard, confirmSelectedHandle };
  },
});
</script>


<style scoped>
.card-body .content {
  position: relative;
  margin: 50px;
  height: 20vh;
}
.card-title {
  font-size: 40px;
}
img.rounded {
  width: 100%;
}
</style>