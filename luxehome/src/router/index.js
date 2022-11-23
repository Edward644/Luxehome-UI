import { createRouter, createWebHistory } from "vue-router";

import PageRoutines from "@/views/Routines.vue";
import PageEvents from "@/views/Events.vue";
import PageLogs from "@/views/Logs.vue";
import PageThemeTest from "@/views/ThemeTest.vue";

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
    {
      name: "logs",
      path: "/logs",
      component: PageLogs,
    },
    {
      name: "theme-test",
      path: "/theme-test",
      component: PageThemeTest,
    },
  ],
});

export default router;
