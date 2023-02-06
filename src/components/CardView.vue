<template>
  <div>
    Card
    <div v-if="loading">page loading</div>
    <div v-else>
      <div>cid: {{ cid }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardView",
  data() {
    return { cid: 0, loading: false };
  },
  created() {
    this.fetchData();
  },
  watch: {
    $route: {
      handler: "fetchData()", // watch $route for changes
      immediate: true, // call it immediately
    },
  },
  methods: {
    fetchData() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.cid = this.$route.params.cid;
      }, 1000);
    },
  },
};
</script>

<style></style>
