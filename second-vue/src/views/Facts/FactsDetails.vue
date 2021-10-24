<template>
  <div>
    <h1>
      {{ msg }} {{ $route.query.name }}, page {{ eventId }} is
      {{ isEven | toCap | addDot }}
    </h1>
    <p>{{ hello }}</p>
    <!-- <p>{{$route.params}}</p> -->
    <!-- <p>{{$route.query}}</p> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello",
    };
  },
  computed: {
    hello() {
      return this.msg + " world";
    },
    eventId() {
      return this.$route.params.id;
    },
    isEven() {
      return this.$route.params.id % 2 === 0 ? "even" : "odd";
    },
  },
  filters: {
    toCap(value) {
      return value.toUpperCase();
    },
    addDot(value) {
      return value + ".";
    },
  },
};
</script>

<style>
</style>