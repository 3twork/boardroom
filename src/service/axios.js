/*
 * @Author: lizhixiang.have@gmail.com
 * @Date: 2019-05-16 17:49:33
 * @LastEditors: lizhixiang.have@gmail.com
 * @LastEditTime: 2019-05-18 18:10:00
 */

import Vue from 'vue';
import axios from "axios";
import store from "../store";
import router from "../router";
import { setStore, getStore, removeStore } from "@/utils/store";
import website from "@/const/website";
import { Message, Alert, MessageBox } from "element-ui";
import NProgress from "nprogress"; // progress bar


NProgress.configure({ showSpinner: false });

let http = axios.create({
	timeout: 100000,
	headers: {
		Accept: "application/json; charset=utf-8" || "*/*"
	},
	withCredentials: true
});
//跨域请求，允许保存cookie
http.defaults.withCredentials = true;
let cfg, msg;
msg = "服务器君开小差了，请稍后再试";

//HTTPrequest拦截
http.interceptors.request.use(
	config => {
		NProgress.start(); // start progress bar
		if (store.getters.token) {
			config.headers.Authorization = `Bearer ${store.getters.token}`; // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
		}
		return config;
	},
	error => {
		// toast.hide();
		return Promise.reject(error);
	}
);
http.interceptors.response.use(
	res => {
		NProgress.done();
		const status = Number(res.status) || 200;
		const statusWhiteList = website.statusWhiteList || [];
		const message = res.message || "未知错误";

		if (status === 401) {
			Message({
				message: "token过期请重新登录",
				type: "error"
			});
			store
				.dispatch("LogOut")
				.then(() => {
					location.reload()
				});
			store
				.dispatch("FedLogOut")
				.then(() => {
					location.reload()
				});
		}
		//如果请求为200则放过，否者默认统一处理,或者在website中配置statusWhiteList白名单自行处理
		if (status !== 200 && !statusWhiteList.includes(status)) {
			return Promise.reject(new Error(message));
		}
		return res;
	},
	error => {
		NProgress.done();
		if (error.response.status === 401) {
			NProgress.done();
			Message({
				message: "token过期请重新登录",
				type: "error"
			});
			store.dispatch("LogOut").then(() => {
				location.reload()
			});
			store.dispatch("FedLogOut").then(() => {
				location.reload()
			});
		}
		if (error.response.status === 500) {
			Message({
				message: "服务器出错了",
				type: "error"
			});
		}
		return Promise.reject(new Error(error));
	}
);

export default {
	get(url, params) {
		return new Promise((resolve, reject) => {
			http
				.get(url, params)
				.then(res => {
					resolve(res.data);
				})
				.catch(error => {
					if (error.response) {
						Message.error(error.response);
						resolve(error.response.data);
					} else {
						reject(error);
					}
				});
		});
	},
	post(url, params, headers) {
		return new Promise((resolve, reject) => {
			http
				.post(url, params, headers)
				.then(res => {
					resolve(res.data);
				})
				.catch(error => {
					if (error.response) {
						Message.error(error.response);
						resolve(error.response.data);
					} else {
						reject(error);
					}
				});
		});
	},
	delete(url, params) {
		return new Promise((resolve, reject) => {
			http
				.delete(url, params)
				.then(res => {
					resolve(res.data);
				})
				.catch(error => {
					if (error.response) {
						Message.error(error.response);
						resolve(error.response.data);
					} else {
						reject(error);
					}
				});
		});
	},
	put(url, params) {
		return new Promise((resolve, reject) => {
			http
				.put(url, params)
				.then(res => {
					resolve(res.data);
				})
				.catch(error => {
					if (error.response) {
						Message.error(error.response);
						resolve(error.response.data);
					} else {
						reject(error);
					}
				});
		});
	},
	patch(url, params) {
		return new Promise((resolve, reject) => {
			http
				.patch(url, params)
				.then(res => {
					resolve(res.data);
				})
				.catch(error => {
					if (error.response) {
						Message.error(error.response);
						resolve(error.response.data);
					} else {
						reject(error);
					}
				});
		});
	}
};
