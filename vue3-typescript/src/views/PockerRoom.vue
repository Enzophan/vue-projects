<template>
  <div>
    <!-- <h3>roomId {{ roomId }}</h3> -->
    <h3>{{ getters.roomName }}</h3>
    <div v-if="!joined">
      <form @submit.prevent="submit" class="form">
        <input name="name" v-model="name" />
        <button>Submit</button>
      </form>
    </div>
    <div v-if="joined">
      <button @click="leave">Leave Room</button>
      <div class="text-center">
        <div class="row">
          <div class="col-2">
            <ul class="list-group list-player">
              <li
                class="list-group-item"
                v-for="(player, index) in state.roomInfo.players"
                :key="index"
              >
                <div class="align-self-center">{{ player.name }}</div>
              </li>
            </ul>
          </div>
          <div class="col-10">
            <div class="row">
              <div
                class="card"
                style="width: 18rem"
                v-for="(card, index) in state.pockerCards"
                :key="index"
              >
                <div class="card-body">
                  <h5 class="card-title">{{ card }}</h5>
                  <!-- <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="card-link">Card link</a>
                  <a href="#" class="card-link">Another link</a> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ComputedRef, ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import userStore from "@/stores/user";
import roomStore from "@/stores/pocker";

import {
  useSocketIo,
  useSocketPocker,
  useSockertListening,
} from "@/service/socket";

export default defineComponent({
  setup() {
    const socket = useSocketIo("5000");
    const [joinRoom, leaveRoom] = useSocketPocker(socket);
    // const [otherUserId, otherName, otherClientId] = useSockertListening(socket);
    useSockertListening(socket);
    const name = ref("");
    const joined = ref(false);
    // const { state } = userStore;
    const { state, getters, getRoomsById } = roomStore;

    const router = useRoute();
    const roomId = computed(() => router.params.id) as ComputedRef<string>;
    const param: string = router.params["id"] as string;

    onMounted(() => {
      getRoomsById(param);
    });

    const submit = () => {
      const message = {
        userId: userStore.state._id,
        name: name.value,
        roomId: router.params.id,
      };
      joinRoom(JSON.stringify(message));
      name.value = "";
      joined.value = true;
      getRoomsById(param);
    };

    const leave = () => {
      const message = {
        userId: userStore.state._id,
        roomId: router.params.id,
      };
      leaveRoom(JSON.stringify(message));
      joined.value = false;
    };

    return { roomId, name, joined, state, getters, submit, leave };
  },
});
</script>

<style scoped>
.card-title {
  font-size: 40px;
}
</style>