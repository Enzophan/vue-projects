<template>
  <div class="table">
    <v-data-table
      dense
      :headers="headers"
      :items="sortCustom"
      item-key="name"
      class="elevation-1"
      show-expand
      sort-by="sortable_published_at"
      :sort-desc="true"
    >
      <template #item.fat="{ item }"> {{ item.fat }} g </template>
      <template #item.carbs="{ item }"> {{ item.carbs }} g </template>
      <template #item.published_at="{ value }">
        <DateDisplay :date="value" />
      </template>
      <template #item.sortable_published_at="{ item }">
        {{ item.sortable_published_at }}
      </template>
      <template #item.played="{ item }">
        <div class="green--text" v-if="isPlayed(item.id)">Played</div>
        <div v-else>
          <v-btn x-small @click="markPlayed(item.id)"> Mark Played </v-btn>
        </div>
      </template>
      <template #item.tags="{ item }">
        <span v-for="tag_id in item.tag_ids" :key="tag_id">
          <v-btn color="green lighten-2" class="mr-1" x-small>{{
            getTag(tag_id).name
          }}</v-btn>
        </span>
      </template>
      <template #expanded-item="{ headers, item }">
        <td :colspan="headers.length">
          <v-row>
            <v-col cols="12" md="4">
              <h3>{{ item.name }}</h3>
            </v-col>
            <v-col cols="12" md="8">
              <p>{{ item.desc }}</p>
            </v-col>
          </v-row>
        </td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import DateDisplay from "@/components/DateDisplay.vue";

export default {
  name: "DataTables",
  data: () => ({
    headers: [
      {
        text: "Dessert (100g serving)",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "Calories", value: "calories" },
      { text: "Fat (g)", value: "fat" },
      { text: "Carbs (g)", value: "carbs" },
      { text: "Protein (g)", value: "protein" },
      { text: "Iron (%)", value: "iron" },
      { text: "Date", value: "published_at" },
      { text: "ISO Date", value: "sortable_published_at" },
      { text: "Played", value: "played", sortable: false },
      { text: "Tags", value: "tags", sortable: false },
    ],
  }),
  components: {
    DateDisplay,
  },
  computed: {
    ...mapState({
      desserts: (state) => state.desserts,
    }),
    ...mapGetters({
      isPlayed: "videoIsPlayed",
      getTag: "getTag",
    }),
    sortCustom() {
      return this.desserts.map((v) => {
        return {
          ...v,
          sortable_published_at: new Date(v.published_at).toISOString(),
        };
      });
    },
  },
  methods: {
    async markPlayed(itemId) {
      this.$store.dispatch("markVideoPlayed", itemId);
    },
  },
};
</script>

<style scoped>
.table {
  margin-top: 1rem;
}
</style>