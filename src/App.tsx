import {isVNode, ref, render} from 'vue'
let v = ref<string>('')
const renderDom =()=>{
    return(
        <div>
            <input type="text" v-model={v.value} />
            <div>{v.value}</div>
        </div>
    )
}

export default renderDom