<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Child from './Child.vue'
import Children from './children.vue'
const child = ref(null)
let is = ref(false)
function iS(){
  return is.value = !is.value
}
onMounted(() => {
  
})
</script>

<template>
  <!-- <Child ref="child" /> -->
  <div class="c"><el-button @click="iS">切换</el-button></div>
  <component :is="is?Child:Children"></component>
</template>
<style scoped lang="less">
.c{
  overflow: hidden;
  .el-button{
    float: right;
  }
}
</style>