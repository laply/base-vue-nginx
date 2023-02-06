import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../components/HomePage.vue";
import LoginPage from "../components/LoginPage.vue";
import NotFound from "../components/NotFound.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/login", component: LoginPage },

    { path: "/", component: HomePage },
    { path: "*", component: NotFound },
  ],
});

export default router;
