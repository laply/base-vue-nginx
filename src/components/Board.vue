<template>
  <div id="app">
    Board
    <div v-if="loading">page loading</div>
    <div v-else>
      <div>bid: {{ bid }}</div>
      <router-link :to="'/b/' + bid + '/c/1'">Card 1</router-link>
      <router-link :to="'/b/' + bid + '/c/2'">Card 2</router-link>
    </div>
    <hr />
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Board",
  data() {
    return { bid: 0, loading: false };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.bid = this.$route.params.bid;
      }, 1000);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
