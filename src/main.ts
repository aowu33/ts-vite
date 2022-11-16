import { createApp, toRaw } from "vue";
import "./style.css";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "animate.css";
import Loading from "./components/Loading";
// import './index.css'//
// import vMove from './u/index'
import { createPinia, PiniaPluginContext } from "pinia";
const store = createPinia();
const app = createApp(App);
const __piniaKey = "one"; //定义兜底变量

type Options = {
  key?: string;
};
//将数据存在本地
const setStorage = (key: string, value: any): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

//存缓存中读取
const getStorage = (key: string) => {
  return localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key) as string)
    : {};
};

const piniaPlugin = (options: Options) => {
  return (context: PiniaPluginContext) => {
    const { store } = context;
    console.log("context", store);

    const data = getStorage(`${options?.key ?? __piniaKey}-${store.$id}`);
    console.log(data);
    store.$subscribe(() => {
      // console.log("change");
      setStorage(
        `${options?.key ?? __piniaKey}-${store.$id}`,
        toRaw(store.$state)
      );
    });
    return {
      ...data,
    };
  };
};
store.use(
  piniaPlugin({
    key: "pinia",
  })
);
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
// app.use(Loading)
app.use(ElementPlus).use(store).mount("#app");
