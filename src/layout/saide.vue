<template>
  <h3 @click="clickMenu">{{ isCollapse ? "后台" : "通用后台管理" }}</h3>
  <!-- <el-menu background-color="#fff" text-color="#efefef">
    <el-sub-menu
      @click="clickMenu(item)"
      v-for="item in noChildren"
      :key="item.name"
      :index="item.name"
    >
      000
    </el-sub-menu> -->
  <!-- </el-menu> -->
</template>

<script lang="ts" setup>
import { ref } from "vue";
import router from "../router/index.js";
const isCollapse = ref(true);
const menuData = [
  {
    path: "/",
    name: "home",
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
  return router.push('/equipment');
}
function noChildren() {
  console.log(menuData.filter((item: any) => !item.children));
  
  return menuData.filter((item: any) => !item.children);
}
</script>

<style lang="less" scoped></style>
