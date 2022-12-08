<template>
  <h3 @click="clickMenu">{{ isCollapse ? "管理" : "通用后台管理" }}</h3>
  <el-menu background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
    <el-menu-item
      @click="clickMenu(item)"
      v-for="item in fullName2"
      :key="item.name"
      :index="item.name"
    >
    <i :class="`el-icon-${item.icon}`"></i>
        <span>{{ item.label }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import router from "../router/index.js";
const isCollapse = ref(true);
const menuData = [
  {
    path: "/equipment",
    name: "equipment",
    label: "首页",
    icon: "s-home",
    url: "Home/Home",
  },
  {
    path: "mall",
    name: "mall",
    label: "商品管理",
    icon: "video-play",
    url: "UserManage/UserManage",
  },
  {
    path: "user",
    name: "user",
    label: "用户管理",
    icon: "user",
    url: "UserManage/UserManage",
  },
  {
    label: "其他",
    icon: "location",
    children: [
      {
        path: "/page1",
        name: "page1",
        label: "页面1",
        icon: "setting",
        url: "Other/PageOne",
      },
      {
        path: "/page2",
        name: "page2",
        label: "页面2",
        icon: "setting",
        url: "Other/PageTwo",
      },
    ],
  },
];
//点击菜单
function clickMenu(item: any) {
  return router.push(item.path);
}
// function noChildren() {
//   return menuData.filter((item: any) => !item.children);
// }
let fullName2 = computed({
  get() {
      return menuData.filter((item: any) => !item.children);
  },
  set(newVal) {},
});
</script>

<style lang="less" scoped></style>
