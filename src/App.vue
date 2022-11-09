<template>
  <!-- <div>{{name}}--{{age}}--{{like}}</div>
  <div>toref:{{like}}</div>
  <button @click="change">submit</button> -->
  <!-- <input type="text" v-model="a" />
  <input type="text" v-model="b" />
  <p>{{ name }}</p> -->
  <input id="btn" type="text" v-model="message1" />
  <input type="text" v-model="message2" />
</template>
<script setup lang="ts">
import {
  watchEffect,
  computed,
  ref,
  toRef,
  reactive,
  toRefs,
  toRaw,
  watch,
} from "vue";
// const man = reactive({name:'man',age:23,like:"jk"})
// const {name,age,like} = toRefs(man)
// // const like = toRef(man,'like')
// const change =()=>{
//   // man.like = 'llt'
//   console.log(name,age,like)
// }
//toRef 只能修改响应式的值 非响应式试图毫无变化
// let a = ref("");
// let b = ref("");
// const name = computed({
//   get() {
//     return a.value + b.value;
//   },
//   set() {
//     a.value + b.value;
//   },
// });
let message1 = ref<string>("");
let message2 = ref<string>("");

// watch(message,(n,o)=>{
//   console.log('new',n,'old',o)//新的值和旧的值
// },{
//   deep: true,
//   immediate: true,
// })
watchEffect(
  (onincalidate) => {
    // let btn: HTMLInputElement = document.querySelector(
    //   "#btn"
    // ) as HTMLInputElement;
    console.log("massage1", message1.value);
    // console.log("massage2", message2.value);
    // console.log("input", btn);

    onincalidate(() => {
      console.log("before");
    });
  },
  {
    flush: "post", //配置这个选项可以获取dom
    onTrigger(e) {
      debugger;//调试  触发进入断点
    },
  }
);
</script>
<style lang="less" scoped>
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */

</style>
