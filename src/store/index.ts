import { defineStore } from "pinia";
import { Names } from "./store-namespace";

type Result = {
  name: string;
  isChu: boolean;
};

const Login = (): Promise<Result> => {
  //: Promise<Result>   返回Promise接收一个类型Result
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "娜美",
        isChu: true,
      });
    }, 2000);
  });
};
export const useTestStore = defineStore(Names.Test, {
  state: () => {
    return {
      //放一些初始化的值
      current: 1,
      name: "蒙奇·D·路飞",
      user: <Result>{},
      flag: true,
    };
  },
  //类似于computed 可以帮我们去修饰我们的值
  getters: {
    newName(): string {
      //直接写在template里即可  例：{{Test.newName}}
      return `${this.newCurrent}$-${this.name}`;
    },
    newCurrent(): number {
      return ++this.current;
    },
  },
  //可以操作异步 和 同步提交state
  actions: {
    setCurrent() {
      this.current++;
      this.name = "妮可·罗宾";
    },
    randomizeCounter() {
      this.current = Math.round(100 * Math.random());
    },
    async getLoginInfo() {
      const result = await Login();
      this.user = result;
      this.setName(this.user.name);
    },
    setName(name: string) {
      this.name = name;
    },
  },
});
export const userStoreBase = defineStore(Names.Base, {
  state: () => {
    return {
      //放一些初始化的值
      BASEcurrent: 1,
      BASEname: "波雅·汉库克",
    };
  },
  //类似于computed 可以帮我们去修饰我们的值
  getters: {
   
  },
  //可以操作异步 和 同步提交state
  actions: {
    setCurrent() {
      this.BASEcurrent++;
      this.BASEname = "罗罗诺亚·索隆";
    },
  },
});
