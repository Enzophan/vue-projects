<template>
  <div>
    <h1>This is Facts Page, {{ msg }}</h1>
    <li><router-link to="/facts/99?name=Kent">Click Here to details </router-link></li>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello",
    };
  },
};
</script>

<style>
</style>