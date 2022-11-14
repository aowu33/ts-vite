import { ref, Directive, DirectiveBinding } from "vue";

const vMove:Directive = {
  mounted: (el: HTMLElement) => {
    const mouseDown = (e: MouseEvent) => {
    let X = e.clientX - el.offsetLeft
    let Y = e.clientY - el.offsetTop
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
export default vMove;