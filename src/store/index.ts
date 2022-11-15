import { defineStore,storeToRefs  } from "pinia";
import { Names } from "./store-namespace";

export const useTestStore = defineStore(Names.Test, {
  state: () => {
    return {
      //放一些初始化的值
      current: 1,
      name: "蒙奇·D·路飞",
    };
  },
  //类似于computed 可以帮我们去修饰我们的值
  getters: {},
  //可以操作异步 和 同步提交state
  actions: {
    setCurrent() {
      // const { current, name } = Test;
      // current++;
      // name = "艾斯";
      console.log(current, name);
      this.current++;      
      this.name = "妮可·罗宾"
    },
  },
});
