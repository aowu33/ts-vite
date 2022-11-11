<template>
  <div>
    <el-button @click="show = !show">change</el-button>
   <div class="hbox" v-move>
    <div class="header">header</div>
    <HelloWorld ></HelloWorld>
   </div>
    <!-- -->
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
  </div>
</template>
<script setup lang="ts">
import { onActivated, onDeactivated, ref } from "vue";
import A from "./components/A.vue";
import B from "./components/B.vue";
import HelloWorld from "./components/HelloWorld.vue";
import readerDom from './App'
import vMove from './u/index'
const show = ref<boolean>(true);


</script>
<style lang="less">
body,html{
  color:rgb(17, 118, 165);
  background-color:#032b30
  
}
.hbox{
  width:200px;
  height:200px;
  background-color:#0890a1;
  position: absolute;
  .header{
    height:20px;
    background-color:#000
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
</style>
