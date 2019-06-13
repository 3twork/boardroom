/*
 * @Author: lizhixiang.have@gmail.com
 * @Date: 2019-05-17 15:13:40
 * @LastEditors: lizhixiang.have@gmail.com
 * @LastEditTime: 2019-05-20 17:10:25
 */

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/page/layout/Layout'

export const constantRouterMap = [
	{ path: '/login', component: () => import('@/views/login/index'), hidden: true },
	{ path: '/register', component: () => import('@/views/register/index'), hidden: true },
	{ path: '/forget', component: () => import('@/views/forget/index'), hidden: true },
	{ path: '/result', component: () => import('@/views/register/register-success'), hidden: true },
	{ path: '/404', component: () => import('@/views/404'), hidden: true },

	{
		id:0,
		path: '/',
		component: Layout,
		redirect: '/home',
		name: '首页',
		hidden: true,
		children: [{
			path: 'index',
			component: () => import('@/views/home/index')
		}]
	},
	{
		id:1,
		path: '',
		component: Layout,
		redirect: '/home',
		children: [
			{
				path: 'home',
				component: () => import('@/views/home/index'),
				name: '首页',
				meta: { title: '首页', icon: 'icon-home-fill' }
			}
		]
	},
	{
		id:2,
		path: '/roomlist',
		component: Layout,
		children: [
			{
				path: 'index',
				name: '我的预约',
				component: () => import('@/views/roomlist/index'),
				meta: { title: '我的预约', icon: 'icon-calendar-check-fill' }
			}
		]
	},

	{ path: '*', redirect: '/404', hidden: true }
]

export default new Router({
	// mode: 'history', //后端支持可开
	scrollBehavior: () => ({ y: 0 }),
	routes: constantRouterMap
})
