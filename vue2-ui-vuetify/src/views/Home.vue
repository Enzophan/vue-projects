<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col v-for="n in 3" :key="n" cols="12" sm="4">
        <v-card class="pa-2" outlined tile> One of three columns </v-card>
        <v-card class="mx-auto" max-width="300" tile>
          <v-list dense>
            <v-subheader>REPORTS</v-subheader>
            <v-list-item-group v-model="selectedItem" color="primary">
              <v-list-item v-for="(item, i) in items" :key="i">
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn dark color="green darken-1" @click="openSnackbar">
          Open Snackbar
        </v-btn>
      </v-col>
      <v-col>
        <v-btn dark color="deep-orange darken-2" @click="errorSnackbar">
          Error Snackbar
        </v-btn>
      </v-col>
    </v-row>
    <DataTables />
  </v-container>
</template>

<script>
// @ is an alias to /src
import DataTables from "@/components/DataTables.vue";

export default {
  name: "Home",
  data: () => ({
    selectedItem: 1,
    items: [
      { text: "Real-Time", icon: "mdi-clock" },
      { text: "Audience", icon: "mdi-account" },
      { text: "Conversions", icon: "mdi-flag" },
    ],
  }),
  components: { DataTables },
  methods: {
    async openSnackbar() {
      // this.snackbar = true;
      // this.snackbarText = "You click open snackbar!";
      this.$store.dispatch("setSnackbar", { text: "You click open snackbar!" });
    },
    async errorSnackbar() {
      this.$store.dispatch("setSnackbar", {
        color: "error",
        text: "Error snackbar!",
      });
    },
  },
};
</script>
