<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="/">Home</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <div v-if="isAuth">
          <b-nav-item-dropdown right>
            <template #button-content> User </template>
            <b-dropdown-item @click.prevent="logout">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </div>
        <div v-else>
          <b-navbar-nav>
            <b-nav-item href="/login">Login</b-nav-item>
          </b-navbar-nav>
        </div>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  name: "NavBar",
  computed: {
    ...mapGetters(["isAuth"]),
  },
  methods: {
    ...mapMutations(["LOGOUT"]),
    logout() {
      this.LOGOUT();
      this.$router.replace("/login");
    },
  },
};
</script>

<style></style>
