<template>
  <div ref="el10" class="tit" :style="style">
    Drag me! I am at {{ x }}, {{ y }}
  </div>

</template>
<script setup lang="ts">
import { ref } from "vue";
import { useDraggable  } from "@vueuse/core";
import { useSum,useMin,useMax,usePrecision } from '@vueuse/math'

let arr = [
{num:1,name:'路飞'},
{num:2,name:'山治'},
{num:3,name:'索隆'},
]

const {0:{num}} = arr //0:1  1:2  2:3 



let arr2 = [1,2,3,4]
const Sum = useSum(arr2) 
const Min = useMin(arr2)
const Max = useMax(arr2)
const value = ref(3.1415)
const result = usePrecision(value, 2)





// `style` will be a helper computed for `left: ?px; top: ?px;`
const el10 = ref<HTMLElement | null>(null);
const { x, y, style } = useDraggable(el10, {
  initialValue: { x: 230, y: 100 },
});
</script>
<style>
  .tit{
    cursor: pointer;
    position: fixed
  }
</style>