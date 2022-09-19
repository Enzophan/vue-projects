<template>
  <div>
    <h3>{{ getters.roomName }}</h3>
    <div v-if="!joined">
      <CurrentDateTime />
      <form @submit.prevent="submit" class="form">
        <input name="name" v-model="name" />
        <button>Submit</button>
      </form>
    </div>
    <div v-if="joined">
      <div class="text-center">
        <div v-if="getters.roomStatus === 'playing'">
          <div class="d-flex justify-content-center">
            <p class="fs-4 text-nowrap">
              Please vote for {{ getters.activeSession.story }}
            </p>
          </div>
          <div class="d-flex justify-content-center">
            <div class="p-2">
              <CountDownTime
                :getEndTime="getters.endTime ? getters.endTime : ''"
              />
            </div>
            <div class="p-2">
              <button
                type="button"
                class="btn btn-warning"
                @click="getResult(getters.activeSession._id)"
              >
                Get result!
              </button>
            </div>
          </div>
        </div>
        <div v-if="getters.roomStatus === 'pending'">
          <div class="d-flex justify-content-center">
            <p class="fs-4 text-nowrap">
              Average Point of {{ getters.activeSession.story }} is
              <span style="color: red">{{
                getters.activeSession.averagePoint
              }}</span>
            </p>
          </div>
          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text">Minute(s)</span>
            <input
              type="text"
              class="form-control"
              aria-label="Set Countdown Time"
              v-model="seconds"
            />
            <button
              type="button"
              class="btn btn-success"
              @click="startSessionHandle()"
            >
              Re-start posting
            </button>
            <button
              type="button"
              class="btn btn-warning"
              @click="endSessionHandle()"
            >
              Finish this post!
            </button>
          </div>
        </div>
        <div v-if="getters.roomStatus === 'initial'">
          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text">Minute(s)</span>
            <input
              type="text"
              class="form-control"
              aria-label="Set Countdown Time"
              v-model="seconds"
            />
            <span class="input-group-text">Story Summary</span>
            <input
              type="text"
              class="form-control"
              aria-label="Story Summary"
              v-model="textSummary"
            />
            <button
              type="button"
              class="btn btn-success"
              @click="startSessionHandle()"
            >
              Start posting
            </button>
          </div>
        </div>
        <div class="row">
          <div class="col-3">
            <ul class="list-group list-player" v-if="state?.roomInfo?.players">
              <li
                class="list-group-item"
                v-for="(player, index) in state.roomInfo.players"
                :key="index"
              >
                <Player :player="player" :roomStatus="getters.roomStatus" />
              </li>
            </ul>
            <div class="btn-group">
              <button type="button" class="btn btn-danger" @click="leave">
                Leave Room
              </button>
            </div>
          </div>
          <div class="col-9">
            <div class="row">
              <div
                class="card"
                v-for="(card, index) in state.pockerCards"
                :key="index"
              >
                <PockerCard
                  :roomStatus="getters.roomStatus"
                  :cardValue="card"
                  :active="selectedCard === card ? true : false"
                  @selectCard="selectCard"
                  @confirmSelected="confirmSelected"
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
import Player from "@/components/Player.vue";
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
    Player,
    CountDownTime,
    CurrentDateTime,
  },
  setup() {
    const {
      state,
      getters,
      getRoomsById,
      getCurrentSession,
      startSession,
      endSession,
      getResultSession,
      voting,
    } = roomStore;
    const socket = useSocketIo("5000");
    const [joinRoom, leaveRoom] = useSocketPocker(socket);
    // const [otherUserId, otherName, otherClientId] = useSockertListening(socket);
    useSockertListening(socket);

    const router = useRoute();
    const roomId = computed(() => router.params.id) as ComputedRef<string>;
    const param: string = router.params["id"] as string;
    const name = ref("");
    const joined = ref(false);
    const selectedCard = ref("");
    const seconds = ref("10");
    const textSummary = ref("");

    onMounted(async () => {
      await getRoomsById(param);
      const currentSession = await getCurrentSession();
      if (currentSession && currentSession.story) {
        textSummary.value = currentSession.story;
      }
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

    const startSessionHandle = () => {
      startSession(parseInt(seconds.value), textSummary.value);
      selectedCard.value = "";
    };

    const endSessionHandle = () => {
      endSession();
      selectedCard.value = "";
    };

    const getResult = (sessionId: string) => {
      getResultSession(sessionId);
      selectedCard.value = "";
    };

    const selectCard = (cardValue: string) => {
      selectedCard.value = cardValue;
    };

    const confirmSelected = (cardValue: string) => {
      const user = {
        userId: userStore.state._id,
        point: cardValue,
      };
      voting(user);
    };

    return {
      roomId,
      name,
      joined,
      selectedCard,
      seconds,
      textSummary,
      state,
      getters,
      submit,
      leave,
      selectCard,
      confirmSelected,
      startSessionHandle,
      endSessionHandle,
      getResult,
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