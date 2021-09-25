<template>
  <div>
    <h3 v-for="name in names" :key="name.firstName">
      <slot :firstname="name.firstName" :lastname="name.lastName"></slot>
    </h3>
  </div>
</template>

<script>
export default {
  name: "NameList",
  data() {
    return {
      names: [
        { firstName: "Bruce", lastName: "Wayne" },
        { firstName: "Clark", lastName: "Kent" },
        { firstName: "Princess", lastName: "Diana" },
      ],
    };
  },
};
</script>

<style scoped>
</style>