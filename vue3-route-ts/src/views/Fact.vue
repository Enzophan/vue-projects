<script lang="ts">
import { computed, ComputedRef, defineComponent } from "vue";
import { useRoute } from "vue-router";
import FactCard from "@/components/FartCard.vue";

export default defineComponent({
  components: { FactCard },
  setup() {
    const router = useRoute();
    const factId = computed(() => router.params.id) as ComputedRef<string>;
    return { factId };
  },
});
</script>

<template>
  <FactCard :factId="factId" />
</template>