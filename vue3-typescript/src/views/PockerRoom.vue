<template>
  <div>
    <h3>{{ getters.roomName }}</h3>
    <CurrentDateTime />
    <div v-if="!joined">
      <form @submit.prevent="submit" class="form">
        <input name="name" v-model="name" />
        <button>Submit</button>
      </form>
    </div>
    <div v-if="joined">
      <div class="text-center">
        <div v-if="playing">
          <p>Now you see me</p>
          <CountDownTime :seconds="seconds" />
          <button type="button" class="btn btn-warning" @click="startSession">
            Finish post!
          </button>
        </div>
        <div v-else>
          <p>Now you don't</p>
          <button type="button" class="btn btn-success" @click="startSession">
            Start posting
          </button>
        </div>
        <div class="row">
          <div class="col-2">
            <ul class="list-group list-player" v-if="state?.roomInfo?.players">
              <li
                class="list-group-item"
                v-for="(player, index) in state.roomInfo.players"
                :key="index"
              >
                <div class="align-self-center">{{ player.name }}</div>
              </li>
            </ul>
            <div class="btn-group">
              <button type="button" class="btn btn-danger" @click="leave">
                Leave Room
              </button>
            </div>
          </div>
          <div class="col-10">
            <div class="row">
              <div
                class="card"
                v-for="(card, index) in state.pockerCards"
                :key="index"
              >
                <PockerCard
                  :cardValue="playing === true ? card : 'Here we go'"
                  :active="selectedCard === card ? true : false"
                  @selectCard="selectCard"
                />
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
import PockerCard from "@/components/PockerCard.vue";
import CurrentDateTime from "@/components/CurrentDateTime.vue";
import CountDownTime from "@/components/CountDownTime.vue";

import {
  useSocketIo,
  useSocketPocker,
  useSockertListening,
} from "@/service/socket";

export default defineComponent({
  components: {
    PockerCard,
    CountDownTime,
    CurrentDateTime,
  },
  setup() {
    const socket = useSocketIo("5000");
    const [joinRoom, leaveRoom] = useSocketPocker(socket);
    // const [otherUserId, otherName, otherClientId] = useSockertListening(socket);
    useSockertListening(socket);
    const name = ref("");
    const joined = ref(false);
    const selectedCard = ref("");
    const playing = ref(false);
    const seconds = ref(30);

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

    const startSession = () => {
      playing.value = !playing.value;
      selectedCard.value = "";
    };

    const selectCard = (cardValue: string) => {
      selectedCard.value = cardValue;
      console.log("Emit: ", cardValue);
    };

    return {
      roomId,
      name,
      joined,
      selectedCard,
      playing,
      seconds,
      state,
      getters,
      submit,
      leave,
      selectCard,
      startSession,
    };
  },
});
</script>

<style scoped>
.card {
  width: 18rem;
  margin: 10px;
}
</style>