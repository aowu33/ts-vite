<template>
  <input type="text" v-model="value" />
  <div v-color="{ background: value }">输入颜色</div>
  <p>{{$filters.format('喵喵')}}</p>
</template>



<script lang="ts" setup>
import { reactive, computed, ref ,Directive, DirectiveBinding} from "vue";

const value = ref<string>("");
type Dir = {
  background: string;
};
const vColor:Directive = (el:HTMLElement,bingding:DirectiveBinding<Dir>)=>{
  el.style.background = bingding.value.background
};
</script>
