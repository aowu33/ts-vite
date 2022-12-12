import { ref, Directive, DirectiveBinding } from "vue";
/**
 * 自定义指令
 * 移动
 */
export const vMove:Directive = {
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
/**
 * 计算字符串长度
 * 传入字符串
 */
export const strLength = (str: any) => {
  let len = 0;
  for (let i = 0; i < str.length; i++) {
    let c = str.charAt(i);
    if (/^[\u0000-\u00ffA-Za-z1-9]+$/.test(c)) {
      len += 1;
    } else {
      len += 2;
    }
  }
  console.log("长度:", len);
  return len;
};
