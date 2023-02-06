<template>
  <div id="app">
    Home

    <div v-if="loading">Page Loading ~</div>
    <div v-else>
      <div v-for="board in boards" :key="board.id">
        <router-link :to="'/b/' + board.id">{{ board }}</router-link>
      </div>
    </div>
    <ul>
      <li>
        <router-link to="/b/1">Board 1</router-link>
      </li>
      <li>
        <router-link to="/b/2">Board 2</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { board } from "@/api";

export default {
  name: "HomePage",
  data() {
    return { loading: false, boards: "" };
  },
  created() {
    this.fetchData();
  },
  watch: {
    $route: {
      handler: "fetchData()",
      immediate: true,
    },
  },
  methods: {
    fetchData() {
      this.loading = true;

      board
        .fetch()
        .then((boards) => {
          this.boards = boards;
        })
        .finally(() => {
          this.loading = false;
        });
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
