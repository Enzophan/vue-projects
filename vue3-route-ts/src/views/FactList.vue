<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { facts } from "@/assets/facts";

export default defineComponent({
  setup() {
    const router = useRouter();
    const goToFact = (id: number) => {
      router.push({ path: `/fact/${id}` });
    };
    return { facts, goToFact };
  },
});
</script>


<template>
  <div class="list-group">
    <a
      class="list-group-item list-group-item-action clickable"
      v-for="(fact, index) in facts"
      :key="index"
      @click="goToFact(index)"
    >
      <div class="row">
        <div class="col-2">
          <img :src="fact.image" alt="" height="40" />
          <div class="col-10 align-self-center">{{ fact.text }}</div>
        </div>
      </div>
    </a>
  </div>
</template>