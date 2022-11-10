<template>
  <h3>B</h3> 
  <div v-move class="box">
    <div class="header">header</div>
    text</div>
</template>

<script lang="ts" setup>
import { ref, Directive, DirectiveBinding } from "vue";

const vMove:Directive = {
  mounted: (el: HTMLElement) => {
    const mouseDown = (e: MouseEvent) => {
      let X = e.clientX - el.offsetLeft
      let Y = e.clientY - el.offsetTop
      console.log('点位位置相对文档的水平、垂直坐标', e.clientX, e.clientY)
      console.log('点击位置相对于父容器的水平、垂直坐标', e.offsetX, e.offsetY)
      console.log('点击位置相对父元素偏移位置', el.offsetLeft, el.offsetTop)
      const move = (e: MouseEvent) => {
        el.style.left = e.clientX - X + 'px'
        el.style.top = e.clientY - Y + 'px'
      }
      document.addEventListener('mousemove', move)
      document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', move)
      })
    }
    el.addEventListener('mousedown', mouseDown)
  }
}
</script>
<style lang="less" scoped>
.box{
  width: 200px;
  height: 200px;
  border: 1px solid black;
  position: absolute;
  background-color: #fff;
  
  .header{
    color: rgb(9, 138, 155);background-color: black;
    &::after{
      content: 'X';
      position: absolute;
      top: 1.5px;
      right: 10px;
    }
  }
}
</style>
