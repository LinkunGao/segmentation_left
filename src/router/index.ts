import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/:case",
    name: "Segmentation",
    component: () => import("@/views/Root.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: "active",
  routes,
});
export default router;
