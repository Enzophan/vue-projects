<template>
  <div class="christmas-date">
    {{
      $t("christmasIsComing", {
        date: $d(chirstmasDate, "long"),
        time: $t("day", { count }),
      })
    }}
  </div>
</template>

<script setup lang="ts">
const chirstmasDate = new Date("2023/12/24");

const count = Math.ceil((+chirstmasDate - +new Date()) / (1000 * 60 * 60 * 24));
</script>

<style scoped>
.christmas-date {
  margin: 1rem;
  color: red
}
</style>
