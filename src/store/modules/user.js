import { getToken, setToken, removeToken } from "@/utils/auth";
import { setStore, getStore, removeStore } from "@/utils/store";
import { validatenull, isURL } from "@/utils/validate";
import { encryption, deepClone } from '@/utils/util'
import webiste from '@/const/website'
import http from "@/service/axios.js";
import { api, ERR_OK, USERINFO, MENU, GETME } from "@/api/api.js";
import {
	loginByUsername,
	getUserInfo,
	getMenu,
	logout,
	getMenuAll
} from "@/api/user";
import { Message, Alert, MessageBox } from "element-ui";
function addPath(ele, first) {
	const propsConfig = webiste.menu.props;
	const propsDefault = {
		label: propsConfig.label || 'label',
		path: propsConfig.path || 'path',
		icon: propsConfig.icon || 'icon',
		children: propsConfig.children || 'children'
	}
	const isChild = ele[propsDefault.children] && ele[propsDefault.children].length !== 0;
	if (!isChild && first) {
		ele[propsDefault.path] = ele[propsDefault.path] + '/index'
		return
	}
	ele[propsDefault.children].forEach(child => {
		if (!isURL(child[propsDefault.path])) {
			child[propsDefault.path] = `${ele[propsDefault.path]}/${child[propsDefault.path] ? child[propsDefault.path] : 'index'}`
		}
		addPath(child);
	})
}
const user = {
	state: {
		userInfo: {},
		permission: {},
		role: [],
		menu: [],
		menuAll: [],
		token: getStore({ name: "token" }) || ""
	},
	actions: {
		//根据用户名登录
		LoginByUsername({ commit, state, dispatch }, userInfo) {
			const user = {
				data: userInfo,
				key: "avue",
				param: ["useranme", "password"]
			};
			return new Promise((resolve, reject) => {
				loginByUsername(user.username, userInfo.code, state.token).then(res => {
					const data = res.data;

					commit("SET_TOKEN", data);
					commit("CLEAR_LOCK");
					setToken(data);
					resolve(data);
				}
				).catch(error => {
					reject(error);
					Message.error({
						type: 'warning',
						message: error
					})
				})
			});
		},
		//根据手机号登录
		LoginByPhone({ commit, state, dispatch }, userInfo) {
			return new Promise((resolve, reject) => {
				loginByUsername(userInfo.phone, userInfo.code).then(res => {
					const data = res.data;
					commit("SET_TOKEN", data);
					commit("CLEAR_LOCK");
					setToken(data);
					resolve();
				});
			});
		},
		
		GetUserInfo({ commit, state, dispatch }) {
			return new Promise((resolve, reject) => {
				http
					.get(USERINFO)
					.then(res => {
						const data = res.data;
						commit("SET_USERIFNO", data);
						// commit("SET_ROLES", data.role);
						commit("SET_PERMISSION", data.permission);
						resolve(data);
					})
					.catch(error => {
						reject(error);
						Message.error({
							type: 'warning',
							message: error
						})
					});
				// getUserInfo().then(res => {
				// const data = res.data;
				// console.log(res);
				// commit("SET_USERIFNO", data);
				// commit("SET_ROLES", data.role);
				// commit("SET_PERMISSION", data.permission);
				// resolve(data);
				// });
			});
		},
		// 登出
		LogOut({ commit, state }) {
			return new Promise((resolve, reject) => {
				logout()
					.then(() => {
						// commit("SET_ROLES", []);
						commit("CLEAR_LOCK");
						removeStore({ name: 'token' });
						removeStore({ name: 'Otoken' });
						// commit('SET_PERMISSION',{})
						removeToken();
						location.reload();
						resolve();
					})
					.catch(error => {
						reject(error);
						Message.error({
							type: 'warning',
							message: error
						})
					});
			});
		},
		//注销session
		FedLogOut({ commit }) {
			return new Promise(resolve => {
				commit("SET_TOKEN");
				commit("CLEAR_LOCK");
				removeToken();
				resolve();
			});
		},
		//获取系统菜单
		GetMenu({ commit }) {
			// parentId;  导航有多级分类时需要传id值 用切换
			return new Promise(resolve => {
				getMenu().then(res => {
					const data = res.data
					let menu = deepClone(data);
					menu.forEach(ele => {
						addPath(ele, true);
					})
					commit('SET_MENU', menu)
					resolve(menu)
				});
			});
		},
		//获取全部菜单
		GetMenuAll({ commit }) {
			return new Promise(resolve => {
				getMenuAll().then(res => {
					const data = res.data;
					commit("SET_MENU_ALL", data);
					resolve(data);
				});
			});
		}
	},
	mutations: {
		SET_TOKEN: (state, token) => {
			state.token = token;
			setStore({ name: "token", content: token });
			setToken(token)
		},
		REMOVE_TOKEN: (state, token) => {
			state.token = token;
			removeStore({ name: 'token', content: state.token });
			removeStore({ name: 'Otoken' })
			removeToken()
		},
		SET_USERIFNO: (state, userInfo) => {
			state.userInfo = userInfo;
		},
		SET_MENU: (state, menu) => {
			// const list = menu.filter(ele => {
			//   // if (validatenull(ele.meta)) return true;
			//   // if (validatenull(ele.meta.role)) return true;

			//   if (ele.id) {
			//     return true;
			//   } else {
			//     return false;
			//   }
			// })
			// state.menu = menu;
			state.menu = menu
			setStore({ name: 'menu', content: state.menu, type: 'session' })
		},
		SET_MENU_ALL: (state, menuAll) => {
			state.menuAll = menuAll;
		},
		SET_ROLES: (state, role) => {
			state.role = role;
		},
		SET_PERMISSION: (state, permission) => {
			// state.permission = {};
			// permission.forEach(ele => {
			//   state.permission[ele] = true;
			// });
			state.permission = permission.length == 0 ? {} : permission.reduce((item, next) => Object.assign(item, next))
		}
	}
};
export default user;
