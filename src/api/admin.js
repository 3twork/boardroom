import { baseUrl } from '@/config/env'
import http from "@/service/axios.js";
import {
	API,
	ERR_OK,
	MODEL,
	SETTING,
	SITECONFIG
} from '@/api/api.js';
import { Message, Alert } from "element-ui";
import { filterStringfy } from '@/utils/util.js';
/**
 * @name 未登录前获取系统基本信息
 */
export const getSiteConfig = (id) => {
	return new Promise((resolve, reject) => {
		http.get(SITECONFIG).then(res => {
			if (res.status == ERR_OK) {
				let site = res.data.config;
				resolve(site)
			} else {
				Message.error(error);
				reject(error)
			}
		})
			.catch(error => {
				console.log(error)
			})
	})
}
