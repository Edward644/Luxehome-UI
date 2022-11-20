import { createRouter, createWebHistory } from "vue-router";

import PageRoutines from "@/views/Routines.vue";
import PageEvents from "@/views/Events.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "routines",
      path: "/routines",
      component: PageRoutines,
    },
    {
      name: "events",
      path: "/events",
      component: PageEvents,
    },
  ],
});

export default router;
