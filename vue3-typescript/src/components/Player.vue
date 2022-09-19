<template>
  <div class="row player-item">
    <div class="col-6">
      <div class="text-center">
        {{ player.name }}
      </div>
    </div>
    <div class="col-6">
      <div class="text-center" v-if="roomStatus === 'playing'">
        <span class="badge text-bg-success" v-if="player.voted"> Voted </span>
      </div>
      <div class="text-center" v-if="roomStatus === 'pending'">
        <h5 v-if="player.point">
          <span class="badge text-bg-info fs-6">
            {{ player.point }}
          </span>
        </h5>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    roomStatus: {
      type: String,
      required: true,
    },
    player: {
      type: Object,
    },
  },
//   setup() {},
});
</script>

<style scoped>
.row.player-item {
  height: 2rem;
}
</style>