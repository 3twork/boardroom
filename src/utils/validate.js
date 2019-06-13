export function isvalidUsername(str) {
	const valid_map = ['admin', 'editor']
	return valid_map.indexOf(str.trim()) >= 0
}

export function isExternal(path) {
	return /^(https?:|mailto:|tel:)/.test(path)
}


/* 合法uri*/
export function validateURL(textval) {
	const urlregex = /^([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
	return urlregex.test(textval)
}

/* 小写字母*/
export function validateLowerCase(str) {
	const reg = /^[a-z]+$/
	return reg.test(str)
}

/* 大写字母*/
export function validateUpperCase(str) {
	const reg = /^[A-Z]+$/
	return reg.test(str)
}

/* 大小写字母*/
export function validatAlphabets(str) {
	const reg = /^[A-Za-z]+$/
	return reg.test(str)
}
/*验证pad还是pc*/
export const vaildatePc = function () {
	const userAgentInfo = navigator.userAgent;
	const Agents = ["Android", "iPhone",
		"SymbianOS", "Windows Phone",
		"iPad", "iPod"
	];
	let flag = true;
	for (var v = 0; v < Agents.length; v++) {
		if (userAgentInfo.indexOf(Agents[v]) > 0) {
			flag = false;
			break;
		}
	}
	return flag;
}
/**
 * validate email
 * @param email
 * @returns {boolean}
 */
export function validateEmail(email) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	return re.test(email)
}

/**
 * 判断身份证号码
 */
export function cardid(code) {
	let list = [];
	let result = true;
	let msg = '';
	var city = {
		11: "北京",
		12: "天津",
		13: "河北",
		14: "山西",
		15: "内蒙古",
		21: "辽宁",
		22: "吉林",
		23: "黑龙江 ",
		31: "上海",
		32: "江苏",
		33: "浙江",
		34: "安徽",
		35: "福建",
		36: "江西",
		37: "山东",
		41: "河南",
		42: "湖北 ",
		43: "湖南",
		44: "广东",
		45: "广西",
		46: "海南",
		50: "重庆",
		51: "四川",
		52: "贵州",
		53: "云南",
		54: "西藏 ",
		61: "陕西",
		62: "甘肃",
		63: "青海",
		64: "宁夏",
		65: "新疆",
		71: "台湾",
		81: "香港",
		82: "澳门",
		91: "国外 "
	};
	if (!validatenull(code)) {
		if (code.length == 18) {
			if (!code || !/(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(code)) {
				msg = "证件号码格式错误";
			} else if (!city[code.substr(0, 2)]) {
				msg = "地址编码错误";
			} else {
				//18位身份证需要验证最后一位校验位
				code = code.split('');
				//∑(ai×Wi)(mod 11)
				//加权因子
				var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
				//校验位
				var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2, 'x'];
				var sum = 0;
				var ai = 0;
				var wi = 0;
				for (var i = 0; i < 17; i++) {
					ai = code[i];
					wi = factor[i];
					sum += ai * wi;
				}
				var last = parity[sum % 11];
				if (parity[sum % 11] != code[17]) {
					msg = "证件号码校验位错误";
				} else {
					result = false;
				}

			}
		} else {
			msg = "证件号码长度不为18位";
		}

	} else {
		msg = "证件号码不能为空";
	}
	list.push(result);
	list.push(msg);
	return list;
}
/**
 * 判断手机号码是否正确
 */
export function isvalidatemobile(phone) {
	let list = [];
	let result = true;
	let msg = '';
	var isPhone = /^0\d{2,3}-?\d{7,8}$/;
	//增加134 减少|1349[0-9]{7}，增加181,增加145，增加17[678]
	var isMob = /^((\+?86)|(\(\+86\)))?(13[0123456789][0-9]{8}|15[012356789][0-9]{8}|18[012356789][0-9]{8}|14[57][0-9]{8}|17[3678][0-9]{8})$/;
	if (!validatenull(phone)) {
		if (phone.length == 11) {
			if (isPhone.test(phone)) {
				msg = '手机号码格式不正确';
			} else {
				result = false;
			}
		} else {
			msg = '手机号码长度不为11位';
		}
	} else {
		msg = '手机号码不能为空';
	}
	list.push(result);
	list.push(msg);
	return list;
}
/**
 * 判断姓名是否正确
 */
export function validatename(name) {
	var regName = /^[\u4e00-\u9fa5]{2,4}$/;
	if (!regName.test(name)) return false;
	return true;
};
/**
 * 判断是否为整数
 */
export function validatenum(num, type) {
	let regName = /[^\d.]/g;
	if (type == 1) {
		if (!regName.test(num)) return false;
	} else if (type == 2) {
		regName = /[^\d]/g;
		if (!regName.test(num)) return false;
	}
	return true;
};
/**
 * 判断是否为小数
 */
export function validatenumord(num, type) {
	let regName = /[^\d.]/g;
	if (type == 1) {
		if (!regName.test(num)) return false;
	} else if (type == 2) {
		regName = /[^\d.]/g;
		if (!regName.test(num)) return false;
	}
	return true;
};
/**
 * 判断是否为空
 */
export function validatenull(val) {
	if (typeof val == 'boolean') {
		return false;
	}
	if (val instanceof Array) {
		if (val.length == 0) return true;
	} else if (val instanceof Object) {
		if (JSON.stringify(val) === '{}') return true;
	} else {
		if (val == 'null' || val == null || val == 'undefined' || val == undefined || val == '') return true;
		return false;
	}
	return false;
};

/**
 * URL地址
 * @param {*} s
 */
export function isURL(s) {
	return /^http[s]?:\/\/.*/.test(s)
}
/**
 * @name 邮箱判断
 */
export const checkEmail = (rule, value, callback) => {
	if (!value) {
		return callback(new Error('邮箱不能为空'));
		// callback()
	} else {
		const reg = /^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}$/
		if (reg.test(value)) {
			callback();
		} else {
			return callback(new Error('请输入正确的邮箱'));
		}
		return true;
	}
}
/**
 * @name 公司名称 限制中文不超过30字
 */
export const checkCompanyName = (rule, value, callback) => {
	let regName = /^[\u4e00-\u9fa5]+$/;
	if (!value) {
		return callback(new Error('不能为空'))
	} else if (!regName.test(value)) {
		return callback(new Error('仅限汉字'));
	} else if (value.length > 30) {
		return callback(new Error('不能超过30字'))
	} else {
		callback();
	}

}
/***
 * @name 固话验证
 */
export const checkFixPhone = (rule, value, callback) => {
	let checkReg = /0\d{2,3}-\d{7,8}/;
	if (!value) {
		return callback(new Error('不能为空'))
	} else {
		if (checkReg.test(value)) {
			callback();
		} else {
			return callback(new Error('请输入正确的电话号码'))
		}
	}
}
/**
 * @name 身份证验证
 */
export const idCardCheck = (rule, value, callback) => {
	let cardReg = /(^\d{15}$)|(^\d{17}([0-9]|X|x)$)$/
	if (value == '' && value == undefined) {
		callback(new Error('请输入身份证号'));
	} else if (cardReg.test(value) === false) {
		callback(new Error("请输入正确的证件号码"));
	} else {
		callback();
	}
}
/**
 * @name 证件号验证
 */
export const idNumber = (rule, value, callback) => {
	let numberReg = /^[A-Za-z0-9]{1,20}$/;
	let whiteSpace = /^\s$/;
	if (value == '' && value == undefined) {
		callback(new Error('请输入证件号'))
	} else if (whiteSpace.test(value)) {
		callback(new Error('不允许有空格'))
	}
	else if (numberReg.test(value) === false) {
		callback(new Error('请输入数字或字母组合不多于20字且不允许有空格'))
	} else {
		callback()
	}
}
/**
 * @name 姓名验证、限制中文或英文
 */
export const checkUserName = (rule, value, callback) => {
	let nameReg = /^[\u4E00-\u9FA5A-Za-z]+$/;
	if (value == '' && value == undefined) {
		callback(new Error('请输入名称'))
	} else if (nameReg.test(value) === false) {
		callback(new Error('仅限中文或英文'))
	} else {
		callback()
	}
}
/**
 * @name 限制数字 小数点最多保留两位
 */
export const flotNumberTwo = (rule, value, callback) => {
	let flotCheck = /^(([0-9][0-9]*)|(([0]\.\d{1,2}|[0-9][0-9]*\.\d{1,2})))$/;
	if (value == '' && value == undefined) {
		callback(new Error('不能为空'))
	} else if (flotCheck.test(value) === false) {
		callback(new Error('仅限数字且最多保留两位小数'))
	} else {
		callback()
	}
}
/**
 * @name 金额数目限制 小数点最多保留4位
 */
export const flotMoneyFour = (rule, value, callback) => {
	let flotMoney = /^(([0-9][0-9]*)|(([0]\.\d{1,2}|[0-9][0-9]*\.\d{1,4})))$/;
	if (value == '' && value == undefined) {
		callback(new Error('不能为空'))
	} else if (flotMoney.test(value) === false) {
		callback(new Error('仅限数字且最多保留四位小数'))
	} else {
		callback()
	}
}
/**
 * @name 匹配正整数
 */
export const integral = (rule, value, callback) => {
	let checkIntegral = /^[1-9]\d*$/;
	if (value == '' && value == undefined) {
		callback(new Error('不能为空'))
	} else if (checkIntegral.test(value) === false) {
		callback(new Error('仅限数字且为正整数'))
	} else {
		callback()
	}
}
/**
 * @name 数字验证
 */
export const checkNum = (rule, value, callback) => {
	if (!value) {
		return callback(new Error('不能为空'));
		// callback()
	}
	// setTimeout(() => {
	if (!Number(value)) {
		callback(new Error('请输入数字值'));
	} else {
		callback();
	}
	return true;
	// }, 1000);
}
/**
 * @name 手机号验证
 */
export const mobileCheck = (rule, value, callback) => {
	if (/^((\+|00)86)?1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/.test(value) == false) {
		callback(new Error("请输入正确的手机号"));
	} else {
		callback();
	}
}
export const checkBankAccount = (rule, value, callback) => {
	if (!value) {
		return callback(new Error('不能为空'));
	}
	if (!Number(value)) {
		callback(new Error('请输入数字值'));
	} else if (value.length > 30) {
		callback(new Error('不能超过30个字符'));
	} else {
		callback()
	}
}
/**
 * @name 国内电话验证
 */
export const telphoneNumber = (rule, value, callback) => {
	let phoneReg = /^([0-9]|[-])+$/g;
	if (!value) {
		return callback(new Error('不能为空'));
		// callback()
	} else if (phoneReg.test(value) === false) {
		callback(new Error('请输入正确的电话号码格式 如:0371-63353721'));
	} else {
		callback()
	}
	return true;
}
/**
 * @name 合同编号格式数字字母横杠
*
*/
// export const contractReg = (rule,value,callback) => {
//   let contract = //
//   if(value == '' && value == undefined){
//     callback(new Error('不能为空'))
//   } else if(checkIntegral.test(value) === false){
//     callback(new Error('仅限数字且为正整数'))
//   }else{
//     callback()
//   }
// }
