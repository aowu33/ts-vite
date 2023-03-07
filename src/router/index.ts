
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import nameMaps from "./maps"
import { ElMessageBox } from 'element-plus'
import { Warning } from "@element-plus/icons-vue"
const routes:Array<RouteRecordRaw> = [
	{
		path: "",
		name: nameMaps.Equipment,
		component: () => import("../views/index.vue"),
		// beforeEnter:(to,from,next)=>{
		// 	ElMessageBox.prompt("你觉得田小薇是个虎逼吗？","系统提示",{
		// 		confirmButtonText:"没错",
		// 		cancelButtonText:"是的",
		// 		type:"warning",
		// 		inputPlaceholder:"请输入田小薇是虎逼",
		// 		beforeClose:(action, instance, done)=>{
		// 				if(action === "cancel" && instance.inputValue != "田小薇是虎逼"){
		// 					instance.inputPlaceholder = "请输入 田小薇是虎逼"
		// 					instance.autofocus = true;
		// 					return false;
		// 				}else if(action === "confirm" && instance.inputValue != "田小薇是虎逼"){
		// 					instance.inputErrorMessage = "请输入 田小薇是虎逼"
		// 					instance.autofocus = true;
		// 					return false;
		// 				}else{
		// 					done()
		// 					next();
		// 				}
		// 		}
		// 	})	
    //     }
	},
	{
		path: "/equipmentTree",
		name: nameMaps.EquipmentTree,
		component: () => import("../views/tree/tree.vue"),
	},
	{
		path: "/equipmentUser",
		name: nameMaps.EquipmentUser,
		component: () => import("../views/user/index.vue"),
	},
	{
		path: "/page1",
		name: nameMaps.EquipmentPage1,
		component: () => import("../views/other/page1.vue"),
	},
	{
		path: "/page2",
		name: nameMaps.EquipmentPage2,
		component: () => import("../views/other/page2.vue"),
	},
]


const router = createRouter({
	history: createWebHistory(),
	routes,
})
export default router
