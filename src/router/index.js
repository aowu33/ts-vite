import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import nameMaps from './nameMaps'
const routes = [
  {
    path: "/login",
    name: nameMaps.Login,
    component: () =>
      import(/* webpackChunkName: "login" */ "@/views/login/index.vue"),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
