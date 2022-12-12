<template>
  <h3>{{ isCollapse ? "后台" : "通用后台管理" }}</h3>
  <el-menu
    background-color="transparent"
    text-color="#fff"
    active-text-color="#ffd04b"
    :collapse="isCollapse"
  >
    <el-menu-item
      :index="item.name"
      v-for="item in noChildren()"
      @click="clickMenu(item)"
    >
      <component :is="item.icon" />
      {{ item.label }}
    </el-menu-item>
    <el-sub-menu
      :index="item.name"
      v-for="item in hasChildren()"
      @click="clickMenu(item)"
    >
      <template #title>
        <component :is="item.icon" />
        {{ item.label }}
      </template>
      <el-menu-item
        :index="MenuItem.name"
        v-for="MenuItem in item.children"
        @click="clickMenu(MenuItem)"
      >
        <component :is="MenuItem.icon" />
        {{ MenuItem.label }}
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
    icon: "Notification",
  },
  {
    path: "/equipmentTree",
    name: "EquipmentTree",
    label: "管理树",
    icon: "Connection",
  },
  {
    path: "/equipmentUser",
    name: "EquipmentUser",
    label: "用户管理",
    icon: "user",
  },
  {
    path: "/equipmentOther",
    label: "其他",
    name: "EquipmentOther",
    icon: "Suitcase",
    children: [
      {
        path: "page1",
        name: "EquipmentPage1",
        label: "页面1",
        icon: "Postcard",
      },
      {
        path: "page2",
        name: "EquipmentPage2",
        label: "页面2",
        icon: "Postcard",
      },
    ],
  },
];
//点击菜单
function clickMenu(item: any) {
  console.log(item.path);
  
  return router.push(item.path);
}
function noChildren(): any[] {
  return menuData.filter((item: any) => !item.children);
}
function hasChildren(): any[] {
  return menuData.filter((item: any) => item?.children?.length > 0);
}
</script>

<style lang="less" scoped>
.el-menu {
  border-right: 0;
}
svg {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
</style>
