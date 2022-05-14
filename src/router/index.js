import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RacesView from "../views/RacesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/races",
      name: "races",
      component: RacesView,
    },
  ],
});

export default router;
