<template>
  <h3>{{ isCollapse ? "后台" : "通用后台管理" }}</h3>
  <el-menu
    background-color="transparent"
    text-color="#fff"
    active-text-color="#ffd04b"
    :collapse="isCollapse"
  >
    <el-menu-item v-for="item in noChildren()" @click="clickMenu(item)">
      <el-icon><Search /></el-icon>
      {{ item.name }}
    </el-menu-item>
    <el-sub-menu v-for="item in hasChildren()" @click="clickMenu(item)">
      <template #title>
        <el-icon><Search /></el-icon>
        {{ item.label }}
      </template>
      <el-menu-item v-for="MenuItem in item.children">
        <el-icon><Search /></el-icon>
        {{ MenuItem.name }}
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import router from "../router/index.js";
const isCollapse = ref(false);
const menuData: Array<any> = [
  {
    path: "/equipment",
    name: "Equipment",
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
function noChildren(): any[] {
  return menuData.filter((item: any) => !item.children);
}
function hasChildren(): any[] {
  return menuData.filter((item: any) => item?.children?.length > 0);
}
</script>

<style lang="less" scoped></style>