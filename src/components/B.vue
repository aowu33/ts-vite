<template>
  <h3>B</h3> 
  <div v-move class="box">text</div>
</template>

<script lang="ts" setup>
import { ref, Directive, DirectiveBinding } from "vue";
const vMove: Directive<any, void> = (
  el: HTMLElement,
  bingding: DirectiveBinding
) => {
  let moveElement: HTMLDivElement = el.firstElementChild as HTMLDivElement;
  console.log(moveElement);
  const mousedown = (e:MouseEvent) => {
    let X = e.clientX - el.offsetLeft
    let Y = e.clientY - el.offsetTop
    const move = (e: MouseEvent) => {
      console.log(e);
      el.style.left = e.clientX - X + "px";
      el.style.top = e.clientY - Y + "px";
    };
    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", move);
    });
  };
  moveElement.addEventListener("mousedown", mousedown);
};
</script>
<style lang="less" scoped>
.box{
  width: 200px;
  height: 200px;
  color: aliceblue;
  background-color: black;
}
</style>
