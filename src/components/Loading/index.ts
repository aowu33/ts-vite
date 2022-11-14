import type{App} from 'vue';
import Loading from './index.vue';
import {createVNode,render} from 'vue';
export default {
    install (app:App){
        
        const Vnode:VNode = createVNode(Loading)
        render(Vnode,document.body)
        app.config.globalProperties._loading={
            show:Vnode.component?.exposed?.show,
            hide:Vnode.component?.exposed?.hide
        }
        app.config.globalProperties._loading.show()
    }
}