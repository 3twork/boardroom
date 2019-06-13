import http from "@/service/axios";
import { api, ERR_OK, USERINFO, MENU, MENUALL } from "@/api/api.js";
import { menu, menuAll } from "@/mock/menu"; //模拟数据 实际部署需要替换真实数据
import { setStore, getStore, removeStore } from "@/utils/store";
export const loginByUsername = (username, password, code, redomStr) => {
	return new Promise((resolve, reject) => {
		resolve({ data: getStore({ name: "Otoken" }) });
	});
};

export const getUserInfo = () => {
	return new Promise((resolve, reject) => {
		resolve(getInfo());
	});
};
export const getMenu = parentId => {
	return new Promise((resolve, reject) => {
		// 获取用户菜单接口
		// http.get(MENU).then(res=>{
		//   const data = res.data;
		//   console.log(data)
		//   resolve({data:data});
		// }).catch(error => {
		//   console.log(error)
		// })
		if (parentId != 1) parentId = 0;
		resolve({ data: menu[parentId] });
	});
};
export const getMenuAll = () => {
	return new Promise((resolve, reject) => {
		// 获取所有菜单接口
		// http.get(MENUALL).then(res=>{
		//   const data = res.data;
		//   console.log('promise menu',res.data)
		//   resolve({data:data});
		// }).catch(error => {
		//   console.log(error)
		// })
		resolve({ data: menu[0] });
	});
};

export const logout = () => {
	return new Promise((resolve, reject) => {
		resolve();
	});
};
