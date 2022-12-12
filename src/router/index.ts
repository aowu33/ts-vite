import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import nameMaps from "./maps";
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
      import(/* webpackChunkName: "equipmentTree" */ "../views/tree/tree.vue"),
  },
  {
    path: "/equipmentUser",
    name: nameMaps.EquipmentUser,
    component: () =>
      import(/* webpackChunkName: "equipmentUser" */ "../views/user/index.vue"),
  },
  {
    path: "/equipmentOther",
    redirect: "/equipmentOther/page1",
    name: nameMaps.EquipmentOther,
    children: [
      {
        path: "/equipmentOther/page1",
        name: nameMaps.EquipmentPage1,
        component: () =>
          import(/* webpackChunkName: "page1" */ "../views/other/page1.vue"),
      },
      {
        path: "/equipmentOther/page2",
        name: nameMaps.EquipmentPage2,
        component: () =>
          import(/* webpackChunkName: "page2" */ "../views/other/page2.vue"),
      },
    ],
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
