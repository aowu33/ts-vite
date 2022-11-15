<template>
  <el-button @click="show = !show">change</el-button>
  <div class="hbox" v-move>
    <div class="header">header</div>
    <HelloWorld></HelloWorld>
  </div>
  <div class="piniabox" v-move>
    <button @click="Add">+</button>
    <div>
      <p>数值：{{ Test.current }}</p>
      <p>姓名：{{ Test.name }}</p>
    </div>
  </div>
  <transition
    leave-active-class="animate__animated animate__bounce"
    enter-active-class="animate__animated animate__faster"
  >
    <div class="box" v-if="show">
      <A></A>
      <readerDom></readerDom>
    </div>
    <div class="box" v-else>
      <B></B>
    </div>
  </transition>
</template>
<script setup lang="ts">
import { onActivated, onDeactivated, ref } from "vue";
import A from "./components/A.vue";
import B from "./components/B.vue";
import HelloWorld from "./components/HelloWorld.vue";
import readerDom from "./App";
import vMove from "./u";
//pinia
import { useTestStore } from "./store";
const show = ref<boolean>(true);
const Test = useTestStore();
const Add = () => {
  // 1、

  // Test.$patch(//批量修改State的值
  //   //2、
  //   //   {
  //   //   current:555,
  //   //   name:"罗罗诺亚·索隆"
  //   // }
  //   //3、
  //   // (state) => {
  //   //   state.current = 999;
  //   //   state.name = "波雅·汉库克";
  //   // }
  //   //4、通过原始对象修改整个实例
  //   Test.$state = {//缺点：必须修改整个对象的所有属性
  //      current:10,
  //      name:"托尼托尼·乔巴"
  //   }
  // );
  // Test.setCurrent()

 
};
</script>
<style lang="less">
body,
html {
  color: rgb(17, 118, 165);
  background-color: #032b30;
}
.hbox {
  width: 200px;
  height: 200px;
  background-color: #30c1d4;
  position: absolute;
  top: 50px;
  left: 300px;
  .header {
    height: 20px;
    background-color: #000;
  }
}
.box {
  width: 500px;
  height: 200px;
  overflow: hidden;
}
.wrap {
  width: 200px;
  height: 200px;
  background-color: #f9f9f9;
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
.piniabox {
  width: 200px;
  height: 200px;
  border: 1px solid #000;
  border-radius: 8px;
  position: absolute;
  top: 50px;
  left: 50px;
  background-color: plum;
}
</style>
