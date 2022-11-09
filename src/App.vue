<template>
  <div>
    <el-button @click="show = !show">change</el-button>
    <!-- -->
    <transition
     leave-active-class="animate__animated animate__bounce"
      enter-active-class="animate__animated animate__faster" 
    >
      <div class="box" v-if="show">
        <A></A>
      </div>
      <div class="box" v-else><B></B></div>
    </transition>
  </div>
</template>
<script setup lang="ts">
import { onActivated, onDeactivated, ref } from "vue";
import A from "./components/A.vue";
import B from "./components/B.vue";
const show = ref<boolean>(true);
</script>
<style lang="less" scoped>
.box {
  width: 500px;
  height: 200px;
  overflow: hidden;
}
.fade-enter-from {
  width: 0;
  height: 0;
}
.fade-enter-active {
  transition: all 1.5s ease;
}
.fade-enter-to {
  width: 500px;
  height: 200px;
}
.fade-leave-from {
  width: 500px;
  height: 200px;
}
.fade-leave-actvie {
  transition: all 1.5s ease;
}
.fade-leave-to {
  width: 0;
  height: 0;
}
</style>
