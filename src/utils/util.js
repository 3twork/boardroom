import { validatenull } from "./validate";
import { baseUrl } from "@/config/env";
import { API } from '@/api/api'
//表单序列化
export const serialize = data => {
	let list = [];
	Object.keys(data).forEach(ele => {
		list.push(`${ele}=${data[ele]}`)
	})
	return list.join('&');
};
/**
 * 设置主题
 */
export const setTheme = (name) => {
	document.body.className = name;
}
export const getObjType = obj => {
	var toString = Object.prototype.toString;
	var map = {
		'[object Boolean]': 'boolean',
		'[object Number]': 'number',
		'[object String]': 'string',
		'[object Function]': 'function',
		'[object Array]': 'array',
		'[object Date]': 'date',
		'[object RegExp]': 'regExp',
		'[object Undefined]': 'undefined',
		'[object Null]': 'null',
		'[object Object]': 'object'
	};
	if (obj instanceof Element) {
		return 'element';
	}
	return map[toString.call(obj)];
};
/**
 * 获取字典
 */
export const setDic = (dicData, DIC) => {
	return typeof dicData == "string" ? DIC : dicData;
};
/**
 * 设置px
 */
export const setPx = (val, defval) => {
	if (validatenull(val)) {
		val = defval;
	}
	val = val + "";
	if (val.indexOf("%") == -1) {
		val = val + "px";
	}
	return val;
};
/**
 * 动态获取组件
 */
export const getComponent = type => {
	if (type == "select") {
		return "crudSelect";
	} else if (type == "radio") {
		return "crudRadio";
	} else if (type == "checkbox") {
		return "crudCheckbox";
	} else if (type == "date") {
		return "crudDate";
	} else {
		return "crudInput";
	}
};
/**
 * 加密处理
 */
export const encryption = params => {
	let { data, type, param, key } = params;
	let result = JSON.parse(JSON.stringify(data));
	if (type == "Base64") {
		param.forEach(ele => {
			result[ele] = btoa(result[ele]);
		});
	} else if (type == "Aes") {
		param.forEach(ele => {
			result[ele] = CryptoJS.AES.encrypt(result[ele], key).toString();
		});
	}
	return result;
};

/**
 * 设置浏览器头部标题
 */
export const setTitle = function (title) {
	title = title ? `${title}` : "";
	window.document.title = title;
};
/**
 * 设置浏览器ico
 */
export const setFavico = function (ico) {
	var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = 'image/x-icon';
	link.rel = 'shortcut icon';
	link.href = `${API}/up/config/${ico}`;
	document.getElementsByTagName('head')[0].appendChild(link);
}
/**
 * 浏览器判断是否全屏
 */
export const fullscreenToggel = () => {
	if (fullscreenEnable()) {
		exitFullScreen();
	} else {
		reqFullScreen();
	}
};
/**
 * esc监听全屏
 */
export const listenfullscreen = callback => {
	function listen() {
		callback();
	}
	document.addEventListener("fullscreenchange", function (e) {
		listen();
	});
	document.addEventListener("mozfullscreenchange", function (e) {
		listen();
	});
	document.addEventListener("webkitfullscreenchange", function (e) {
		listen();
	});
	document.addEventListener("msfullscreenchange", function (e) {
		listen();
	});
};
/**
 * 浏览器判断是否全屏
 */
export const fullscreenEnable = () => {
	var isFullscreen =
		document.fullscreenEnabled ||
		window.fullScreen ||
		document.mozFullscreenEnabled ||
		document.webkitIsFullScreen;
	return isFullscreen;
};

/**
 * 浏览器全屏
 */
export const reqFullScreen = () => {
	if (document.documentElement.requestFullScreen) {
		document.documentElement.requestFullScreen();
	} else if (document.documentElement.webkitRequestFullScreen) {
		document.documentElement.webkitRequestFullScreen();
	} else if (document.documentElement.mozRequestFullScreen) {
		document.documentElement.mozRequestFullScreen();
	}
};
/**
 * 浏览器退出全屏
 */
export const exitFullScreen = () => {
	if (document.documentElement.requestFullScreen) {
		document.exitFullScreen();
	} else if (document.documentElement.webkitRequestFullScreen) {
		document.webkitCancelFullScreen();
	} else if (document.documentElement.mozRequestFullScreen) {
		document.mozCancelFullScreen();
	}
};
/**
 * 递归寻找子类的父类
 */

export const findParent = (menu, id) => {
	for (let i = 0; i < menu.length; i++) {
		if (menu[i].children.length != 0) {
			for (let j = 0; j < menu[i].children.length; j++) {
				if (menu[i].children[j].id == id) {
					return menu[i];
				} else {
					if (menu[i].children[j].children.length != 0) {
						return findParent(menu[i].children[j].children, id);
					}
				}
			}
		}
	}
};

/**
 * 总体路由处理器
 */
export const resolveUrlPath = (url, name) => {
	let reqUrl = url;
	if (url.indexOf("http") != -1 || url.indexOf("https") != -1) {
		reqUrl = `/myiframe/urlPath?src=${reqUrl}&name=${name}`;
	} else {
		reqUrl = reqUrl;
	}
	return reqUrl;
};
/**
 * 总体路由设置器
 */
export const setUrlPath = $route => {
	let value = "";
	if ($route.query.src) {
		value = $route.query.src;
	} else {
		value = $route.path;
	}
	return value;
};
/**
 * 动态插入css
 */

export const loadStyle = url => {
	const link = document.createElement("link");
	link.type = "text/css";
	link.rel = "stylesheet";
	link.href = url;
	const head = document.getElementsByTagName("head")[0];
	head.appendChild(link);
};
/**
 * 根据字典的value显示label
 */
export const findByvalue = (dic, value) => {
	let result = "";
	if (validatenull(dic)) return value;
	if (
		typeof value == "string" ||
		typeof value == "number" ||
		typeof value == "boolean"
	) {
		let index = 0;
		index = findArray(dic, value);
		if (index != -1) {
			result = dic[index].label;
		} else {
			result = value;
		}
	} else if (value instanceof Array) {
		result = [];
		let index = 0;
		value.forEach(ele => {
			index = findArray(dic, ele);
			if (index != -1) {
				result.push(dic[index].label);
			} else {
				result.push(value);
			}
		});
		result = result.toString();
	}
	return result;
};
/**
 * 根据字典的value查找对应的index
 */
export const findArray = (dic, value) => {
	for (let i = 0; i < dic.length; i++) {
		if (dic[i].value == value) {
			return i;
			break;
		}
	}
	return -1;
};
/**
 * 生成随机len位数字
 */
export const randomLenNum = (len, date) => {
	let random = "";
	random = Math.ceil(Math.random() * 100000000000000)
		.toString()
		.substr(0, len ? len : 4);
	if (date) random = random + Date.now();
	return random;
};

/**
 * @desc   格式化${startTime}距现在的已过时间
 * @param  {Date} startTime
 * @return {String}
 */
export function formatPassTime(timestamp) {
	let date = new Date(timestamp * 1000); //如果date为13位不需要乘1000
	let Y = date.getFullYear() + "-";
	let M =
		(date.getMonth() + 1 < 10
			? "0" + (date.getMonth() + 1)
			: date.getMonth() + 1) + "-";
	let D = (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + " ";
	let h =
		(date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":";
	let m =
		(date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
		":";
	let s = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
	return Y + M + D + h + m + s;
}

/**
 * @name 过滤搜索object
 * @desc {Object}  object
 * @return object
 */
export function filterObj(obj) {
	const data = {};
	for (let i in obj) {
		if (obj[i] !== "" && obj[i] !== undefined && obj[i].length !== 0) {
			data[i] = obj[i];
		}
	}
	return data;
}
/**
 * @name 防抖函数
 */
export function debounce(func, delay) {
	let timer;
	return function (...args) {
		if (timer) {
			clearTimeout(timer);
		}
		timer = setTimeout(() => {
			func.apply(this.args);
		}, delay);
	};
}

/**
 * @name 动态添加class
 */
export function hasClass(el, className) {
	let reg = new RegExp("(^|\\s)" + className + "(\\s|$)");
	return reg.test(el.className);
}
export function addClass(el, className) {
	if (hasClass(el, className)) {
		return;
	}
	let newClass = el.className.split(" ");
	newClass.push(className);
	el.className = newClass.join(" ");
}

/**
 * @name 动态移除class
 */
export function removeClass(el, className) {
	if (hasClass(el, className)) {
		let reg = new RegExp("(^|\\s)" + className + "(\\s|$)");
		el.className = el.className.replace(reg, " ");
	}
}

/**
 * @name 动态切换class
 */
export function toggleClass(el, className) {
	if (hasClass(el, className)) {
		removeClass(el, className);
	} else {
		addClass(el, className);
	}
}
/**
 * @name 获取HTML5 data-属性
 */
export function getData(el, name, val) {
	const prifix = "data-";
	if (val) {
		return el.setAttribute(prifix + name, val);
	}
	return el.getAttribute(prifix + name);
}

/**
 * @name 参数序列
 * @function parmas
 */
export function Param(data) {
	let url = ''
	for (var k in data) {
		let value = data[k] !== undefined ? data[k] : ''
		url += '&' + k + '=' + encodeURIComponent(value)
	}
	return url ? url.substring(1) : ''
}
/**
 * 对象深拷贝
 */
export const deepClone = data => {
	var type = getObjType(data);
	var obj;
	if (type === 'array') {
		obj = [];
	} else if (type === 'object') {
		obj = {};
	} else {
		//不再具有下一层次
		return data;
	}
	if (type === 'array') {
		for (var i = 0, len = data.length; i < len; i++) {
			obj.push(deepClone(data[i]));
		}
	} else if (type === 'object') {
		for (var key in data) {
			obj[key] = deepClone(data[key]);
		}
	}
	return obj;
};
/**
 * @param {uniqueArr}
 * @description 数组去重
 */

export function uniqueArr(arr) {
	return Array.from(new Set(arr))
}

/**@param {getTime} */
export function getTime(type) {
	if (type === 'start') {
		return new Date().getTime() - 3600 * 1000 * 24 * 90
	} else {
		return new Date(new Date().toDateString())
	}
}
/**
 * @param
 */
export const pickerOptions = [
	{
		text: '今天',
		onClick(picker) {
			const end = new Date()
			const start = new Date(new Date().toDateString())
			end.setTime(start.getTime())
			picker.$emit('pick', [start, end])
		}
	},
	{
		text: '最近一周',
		onClick(picker) {
			const end = new Date(new Date().toDateString())
			const start = new Date()
			start.setTime(end.getTime() - 3600 * 1000 * 24 * 7)
			picker.$emit('pick', [start, end])
		}
	},
	{
		text: '最近一个月',
		onClick(picker) {
			const end = new Date(new Date().toDateString())
			const start = new Date()
			start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
			picker.$emit('pick', [start, end])
		}
	},
	{
		text: '最近三个月',
		onClick(picker) {
			const end = new Date(new Date().toDateString())
			const start = new Date()
			start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
			picker.$emit('pick', [start, end])
		}
	}
]
/**
 * @name 省市县联动组件封装
 * @description 省市联动
 */
export function contains(root, target) {
	// root 节点是否包含 target 节点
	const isElement = Object.prototype.toString.call(root).includes('Element') && Object.prototype.toString.call(target).includes('Element');
	if (!isElement) {
		return false;
	}
	let node = target;
	while (node) {
		if (node === root) {
			return true;
		}
		node = node.parentNode;
	}
	return false;
}

export function assert(condition, msg = '') {
	if (!condition) {
		throw new Error(`[vue-area-linkage]: ${msg}`);
	}
}
export function isArray(param) {
	return Object.prototype.toString.call(param) === '[object Array]';
}

export function scrollIntoView(container, target) {
	if (!target) {
		container.scrollTop = 0;
		return;
	}

	// refrence: https://github.com/ElemeFE/element/blob/dev/src/utils/scroll-into-view.js
	const top = target.offsetTop;
	const bottom = target.offsetTop + target.offsetHeight;
	const viewRectTop = container.scrollTop;
	const viewRectBottom = viewRectTop + container.clientHeight;

	if (top < viewRectTop) {
		container.scrollTop = top;
	} else if (bottom > viewRectBottom) {
		container.scrollTop = bottom - container.clientHeight;
	}
}

/**
 * @name 租户状态
 */
export const ZHUANGXIU = -2; //装修中
export const KONGZHI = -1;
export const JIJIANG = 0;
export const ZUZHU = 1;
export const TUIZUING = 2;
export const YITUIZU = 3;
export const XUZU = 4;
export const WILLSOON = 5;
export const DAOQI = 6;

/**
 * 判断路由是否相等
 */
export const diff = (obj1, obj2) => {
	delete obj1.close;
	var o1 = obj1 instanceof Object;
	var o2 = obj2 instanceof Object;
	if (!o1 || !o2) { /*  判断不是对象  */
		return obj1 === obj2;
	}

	if (Object.keys(obj1).length !== Object.keys(obj2).length) {
		return false;
		//Object.keys() 返回一个由对象的自身可枚举属性(key值)组成的数组,例如：数组返回下表：let arr = ["a", "b", "c"];console.log(Object.keys(arr))->0,1,2;
	}

	for (var attr in obj1) {
		var t1 = obj1[attr] instanceof Object;
		var t2 = obj2[attr] instanceof Object;
		if (t1 && t2) {
			return diff(obj1[attr], obj2[attr]);
		} else if (obj1[attr] !== obj2[attr]) {
			return false;
		}
	}
	return true;
}
/**
 * 格式化文件大小
 * @param value
 * @returns {*}
 */
export const renderSize = (value) => {
	if (value === null || value === "") {
		return "0B";
	}
	let unitArr = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
	let srcsize = parseFloat(value);
	let index = Math.floor(Math.log(srcsize) / Math.log(1024));
	let size = srcsize / Math.pow(1024, index);
	size = size.toFixed(0); // 保留的小数位数
	return size + unitArr[index];
}
/**
 * @name 检测两个日期大小
 */
export const checkStartEnd = (start, end) => {
	if (start !== '' || end !== '') {
		let rent_start_at = new Date(start);
		let rent_end_at = new Date(end);
		if (rent_start_at.getTime() > rent_end_at.getTime()) {
			this.$message({
				type: 'warning',
				message: '起租时间不能大于退租时间'
			})
			start = ''
			return false
		}
	}
}
/**
 * @name 序列化参数
 */
export const filterStringfy = (parmas) => {
	let data = {};
	for (let i in parmas) {
		if (parmas[i] !== "") {
			data[i] = parmas[i];
		}
	}
	let url = ''
	for (var k in data) {
		let value = data[k] !== undefined ? data[k] : ''
		url += '&' + k + '=' + encodeURIComponent(value)
	}
	return url
}
/**
 * @name 日期增加计算
 */
export const computedFormatData = (startTime, num) => {
	if (startTime == '') return
	let timestr = new Date(startTime);
	return timestr + 3600 * 1000 * 24 * num
}
/**
 * @name 检测图表数据值都不为0后返回bool
 */
export const returnBool = (ArrayData, num) => {
	if (getObjType(ArrayData) === 'array') {
		ArrayData.every(function (ArrayData) {
			return ArrayData[num] > 0
		})
	} else {
		return false
	}
}
export function cleanArray(actual) {
	const newArray = []
	for (let i = 0; i < actual.length; i++) {
		if (actual[i]) {
			newArray.push(actual[i])
		}
	}
	return newArray
}

export function param(json) {
	if (!json) return ''
	return cleanArray(
		Object.keys(json).map(key => {
			if (json[key] === undefined) return ''
			return encodeURIComponent(key) + '=' + encodeURIComponent(json[key])
		})
	).join('&')
}

export function param2Obj(url) {
	const search = url.split('?')[1]
	if (!search) {
		return {}
	}
	return JSON.parse(
		'{"' +
		decodeURIComponent(search)
			.replace(/"/g, '\\"')
			.replace(/&/g, '","')
			.replace(/=/g, '":"')
			.replace(/\+/g, ' ') +
		'"}'
	)
}


/**
 * 获取style样式
 */
export const getStyle = (element, attr, NumberMode = 'int') => {
	let target;
	// scrollTop 获取方式不同，没有它不属于style，而且只有document.body才能用
	if (attr === 'scrollTop') {
		target = element.scrollTop;
	} else if (element.currentStyle) {
		target = element.currentStyle[attr];
	} else {
		target = document.defaultView.getComputedStyle(element, null)[attr];
	}
	//在获取 opactiy 时需要获取小数 parseFloat
	return NumberMode == 'float' ? parseFloat(target) : parseInt(target);
}

/**
 * 页面到达底部，加载更多
 */
export const loadMore = (element, callback) => {
	let windowHeight = window.screen.height;
	let height;
	let setTop;
	let paddingBottom;
	let marginBottom;
	let requestFram;
	let oldScrollTop;

	document.body.addEventListener('scroll', () => {
		loadMore();
	}, false)
	//运动开始时获取元素 高度 和 offseTop, pading, margin
	element.addEventListener('touchstart', () => {
		height = element.offsetHeight;
		setTop = element.offsetTop;
		paddingBottom = getStyle(element, 'paddingBottom');
		marginBottom = getStyle(element, 'marginBottom');
	}, { passive: true })

	//运动过程中保持监听 scrollTop 的值判断是否到达底部
	element.addEventListener('touchmove', () => {
		loadMore();
	}, { passive: true })

	//运动结束时判断是否有惯性运动，惯性运动结束判断是非到达底部
	element.addEventListener('touchend', () => {
		oldScrollTop = document.body.scrollTop;
		moveEnd();
	}, { passive: true })

	const moveEnd = () => {
		requestFram = requestAnimationFrame(() => {
			if (document.body.scrollTop != oldScrollTop) {
				oldScrollTop = document.body.scrollTop;
				loadMore();
				moveEnd();
			} else {
				cancelAnimationFrame(requestFram);
				//为了防止鼠标抬起时已经渲染好数据从而导致重获取数据，应该重新获取dom高度
				height = element.offsetHeight;
				loadMore();
			}
		})
	}

	const loadMore = () => {
		if (document.body.scrollTop + windowHeight >= height + setTop + paddingBottom + marginBottom) {
			callback();
		}
	}
}

/**
 * 显示返回顶部按钮，开始、结束、运动 三个过程中调用函数判断是否达到目标点
 */
export const showBack = callback => {
	let requestFram;
	let oldScrollTop;

	document.addEventListener('scroll', () => {
		showBackFun();
	}, false)
	document.addEventListener('touchstart', () => {
		showBackFun();
	}, { passive: true })

	document.addEventListener('touchmove', () => {
		showBackFun();
	}, { passive: true })

	document.addEventListener('touchend', () => {
		oldScrollTop = document.body.scrollTop;
		moveEnd();
	}, { passive: true })

	const moveEnd = () => {
		requestFram = requestAnimationFrame(() => {
			if (document.body.scrollTop != oldScrollTop) {
				oldScrollTop = document.body.scrollTop;
				moveEnd();
			} else {
				cancelAnimationFrame(requestFram);
			}
			showBackFun();
		})
	}

	//判断是否达到目标点
	const showBackFun = () => {
		if (document.body.scrollTop > 500) {
			callback(true);
		} else {
			callback(false);
		}
	}
}


/**
 * 运动效果
 * @param {HTMLElement} element   运动对象，必选
 * @param {JSON}        target    属性：目标值，必选
 * @param {number}      duration  运动时间，可选
 * @param {string}      mode      运动模式，可选
 * @param {function}    callback  可选，回调函数，链式动画
 */
export const animate = (element, target, duration = 400, mode = 'ease-out', callback) => {
	clearInterval(element.timer);

	//判断不同参数的情况
	if (duration instanceof Function) {
		callback = duration;
		duration = 400;
	} else if (duration instanceof String) {
		mode = duration;
		duration = 400;
	}

	//判断不同参数的情况
	if (mode instanceof Function) {
		callback = mode;
		mode = 'ease-out';
	}

	//获取dom样式
	const attrStyle = attr => {
		if (attr === "opacity") {
			return Math.round(getStyle(element, attr, 'float') * 100);
		} else {
			return getStyle(element, attr);
		}
	}
	//根字体大小，需要从此将 rem 改成 px 进行运算
	const rootSize = parseFloat(document.documentElement.style.fontSize);

	const unit = {};
	const initState = {};

	//获取目标属性单位和初始样式值
	Object.keys(target).forEach(attr => {
		if (/[^\d^\.]+/gi.test(target[attr])) {
			unit[attr] = target[attr].match(/[^\d^\.]+/gi)[0] || 'px';
		} else {
			unit[attr] = 'px';
		}
		initState[attr] = attrStyle(attr);
	});

	//去掉传入的后缀单位
	Object.keys(target).forEach(attr => {
		if (unit[attr] == 'rem') {
			target[attr] = Math.ceil(parseInt(target[attr]) * rootSize);
		} else {
			target[attr] = parseInt(target[attr]);
		}
	});


	let flag = true; //假设所有运动到达终点
	const remberSpeed = {};//记录上一个速度值,在ease-in模式下需要用到
	element.timer = setInterval(() => {
		Object.keys(target).forEach(attr => {
			let iSpeed = 0;  //步长
			let status = false; //是否仍需运动
			let iCurrent = attrStyle(attr) || 0; //当前元素属性址
			let speedBase = 0; //目标点需要减去的基础值，三种运动状态的值都不同
			let intervalTime; //将目标值分为多少步执行，数值越大，步长越小，运动时间越长
			switch (mode) {
				case 'ease-out':
					speedBase = iCurrent;
					intervalTime = duration * 5 / 400;
					break;
				case 'linear':
					speedBase = initState[attr];
					intervalTime = duration * 20 / 400;
					break;
				case 'ease-in':
					let oldspeed = remberSpeed[attr] || 0;
					iSpeed = oldspeed + (target[attr] - initState[attr]) / duration;
					remberSpeed[attr] = iSpeed
					break;
				default:
					speedBase = iCurrent;
					intervalTime = duration * 5 / 400;
			}
			if (mode !== 'ease-in') {
				iSpeed = (target[attr] - speedBase) / intervalTime;
				iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
			}
			//判断是否达步长之内的误差距离，如果到达说明到达目标点
			switch (mode) {
				case 'ease-out':
					status = iCurrent != target[attr];
					break;
				case 'linear':
					status = Math.abs(Math.abs(iCurrent) - Math.abs(target[attr])) > Math.abs(iSpeed);
					break;
				case 'ease-in':
					status = Math.abs(Math.abs(iCurrent) - Math.abs(target[attr])) > Math.abs(iSpeed);
					break;
				default:
					status = iCurrent != target[attr];
			}

			if (status) {
				flag = false;
				//opacity 和 scrollTop 需要特殊处理
				if (attr === "opacity") {
					element.style.filter = "alpha(opacity:" + (iCurrent + iSpeed) + ")";
					element.style.opacity = (iCurrent + iSpeed) / 100;
				} else if (attr === 'scrollTop') {
					element.scrollTop = iCurrent + iSpeed;
				} else {
					element.style[attr] = iCurrent + iSpeed + 'px';
				}
			} else {
				flag = true;
			}

			if (flag) {
				clearInterval(element.timer);
				if (callback) {
					callback();
				}
			}
		})
	}, 20);
}

