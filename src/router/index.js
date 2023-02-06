import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../components/HomePage.vue";
import LoginPage from "../components/LoginPage.vue";
import Board from "../components/Board.vue";
import CardView from "../components/CardView.vue";
import NotFound from "../components/NotFound.vue";

Vue.use(VueRouter);

const requireAuth = (to, from, next) => {
  const loginPath = "/login?rPath=" + encodeURIComponent(to.path);

  if (localStorage.getItem("token")) {
    next();
  } else {
    next(loginPath);
  }
};

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/login", component: LoginPage },
    {
      path: "/b/:bid",
      component: Board,
      beforeEnter: requireAuth,
      children: [{ path: "c/:cid", component: CardView, beforeEnter: requireAuth }],
    },
    { path: "/", component: HomePage, beforeEnter: requireAuth },
    { path: "*", component: NotFound },
  ],
});

export default router;
