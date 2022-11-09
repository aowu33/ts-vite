import { createApp } from "vue";
import App from './App.vue'
import mitt from 'mitt'
const Mit = mitt()
const app = createApp(App)
declare module "vue" {
    export interface ComponentCustomPriperties{
        $Bus:typeof Mit
    }
}
app.config.globalProperties.$Bus = Mit
app.mount('#app')