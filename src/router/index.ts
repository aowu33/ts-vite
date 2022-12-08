import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import nameMaps from './maps'
const routes = [
  {
    path: "/equipment",
    name: nameMaps.Equipment,
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/index.vue"),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
