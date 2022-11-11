import { ref, Directive, DirectiveBinding } from "vue";

const vMove:Directive = {
  mounted: (el: HTMLElement) => {
    const mouseDown = (e: MouseEvent) => {
    let X = e.clientX - el.offsetLeft
    let Y = e.clientY - el.offsetTop
    //   console.log('点位位置相对文档的水平、垂直坐标', e.clientX, e.clientY)
    //   console.log('点击位置相对于父容器的水平、垂直坐标', e.offsetX, e.offsetY)
    //   console.log('点击位置相对父元素偏移位置', el.offsetLeft, el.offsetTop)
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
export default vMove