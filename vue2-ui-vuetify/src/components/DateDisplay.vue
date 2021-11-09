
<template>
  <span v-if="date">
    {{ formatDate.getDate() }}/{{ formatDate.getMonth() + 1 }}/{{
      formatDate.getFullYear()
    }}
  </span>
</template>

<script>
export default {
  props: {
    date: {
      type: String,
    },
  },
  computed: {
    formatDate() {
      const d = new Date(this.date);
      return d;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>