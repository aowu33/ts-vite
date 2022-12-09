import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import nameMaps from './maps'
const routes = [
  {
    path: "/equipment",
    name: nameMaps.Equipment,
    component: () =>
      import(/* webpackChunkName: "equipment" */ "../views/index.vue"),
  },
  {
    path: "/equipmentTree",
    name: nameMaps.EquipmentTree,
    component: () =>
      import(/* webpackChunkName: "tree" */ "../views/tree.vue"),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
