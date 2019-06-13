import router from "./router";
import store from "./store";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
import { getToken } from "@/utils/auth";
import { setTitle } from "@/utils/util";
import { validatenull } from "@/utils/validate";
import { setStore, getStore, removeStore } from "@/utils/store";
import { Loading } from "element-ui";
NProgress.configure({
	showSpinner: false
}); 
router.beforeEach((to, from, next) => {
	NProgress.start(); // start progress bar
	let token = getStore({ name: "token" });
	store.dispatch('GetWebsiteConfig')
	
	if (store.getters.token) {
		if (to.path === "/login") {
			next({
				path: "/"
			});
			NProgress.done();
		} else {
			store.dispatch("GetUserInfo").then(res => {
				let flag = true;
				const whiteList = store.getters.website.whiteList;
				for (let i = 0; i < whiteList.length; i++) {
					if (new RegExp("^" + whiteList[i].toString() + ".*", "g").test(to.path)) {
						flag = false;
						break;
					}
				}
				if (flag) {
					
				}
				next();
			})
		}
	} else {
		/* has no token*/
		let flag = true;
		const whiteList = store.getters.website.whiteList;
		for (let i = 0; i < whiteList.length; i++) {
			if (new RegExp("^" + whiteList[i].toString() + ".*", "g").test(to.path)) {
				flag = false;
				break;
			}
		}
		if (!flag) {
			next();
		} else {
			next("/login");
			NProgress.done();

		}
	}
});

//寻找子菜单的父类
function findMenuParent(tag) {
	let tagCurrent = [];
	const menu = store.getters.menu;
	tagCurrent.push(tag);
	return tagCurrent;
}
router.afterEach((to, from) => {
	NProgress.done();
});