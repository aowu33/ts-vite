import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "animate.css";
import Loading from "./components/Loading";
// import vMove from './u/index'
const app = createApp(App);
type Filter = {
  format: <T>(str: T) => string;
};
declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    $filters: Filter;
  }
}
app.config.globalProperties.$filters = {
  format<T>(str: T): string {
    return `可爱的${str}`;
  },
};
app.use(Loading)
app.use(ElementPlus).mount("#app");
