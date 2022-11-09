<template>
  <div class="content">
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
import { ref, reactive } from "vue";
const list = reactive<number[]>([1, 2, 3, 4, 5, 6]);
const add = () => {
  list.push(list.length + 1);
};
const pop = () => {
  list.pop();
};
</script>
<style lang="less" scoped>
.wraps {
  display: flex;
  flex-wrap: wrap;
  word-break: break-all;
  border: 1px solid plum;
}
.item{
  font-size: 24px;
  font-weight: bold;
}
</style>
