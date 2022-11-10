<template>
  <div class="content">
    <h3>我是A</h3>
    <button @click="emit">emit</button>
    <!-- <button @click="emitB">emitB</button> -->
    <button @click="add">add</button><button @click="pop">pop</button>
    <div class="wraps">
      <transition-group
        enter-active-class="animate__animated animate__bounceIn"
        leave-active-class="animate__animated animate__backOutDown"
      >
        <div class="item" v-for="item in list" :key="item">{{ item }}</div>
      </transition-group>
    </div>
    
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, getCurrentInstance } from "vue";
// import Bus from "../Bus";
let flag = false;
const list = reactive<number[]>([1, 2, 3, 4, 5, 6]);
let color = "blue";
let add = () => {
  list.push(list.length + 1);
  color = "green";
};
const pop = () => {
  list.pop();
};
// const emitB = () => {
//   flag = !flag;
//   Bus.emit("on-click", flag);
// };
const instance = getCurrentInstance()
const emit = () => {
  instance?.proxy?.$Bus.emit('on-xm','mitt')
}
</script>
<style lang="less" scoped>
.wraps {
  display: flex;
  flex-wrap: wrap;
  word-break: break-all;
  border: 1px solid plum;
}
.item {
  font-size: 24px;
  font-weight: bold;
  color: v-bind(color);
}
</style>
