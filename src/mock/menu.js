const first = [
	{
		id: 1,
		label: "首页",
		href: "/wel/index",
		icon: "ion-home",
		meta: "",
		children: []
	},
	{
		id: 8,
		label: "空间管理",
		href: "",
		icon: "ion-earth",
		meta: "空间管理",
		parent: null,
		children: [
			{
				id: 99,
				label: "统计图表",
				href: "/space/charts",
				icon: "ion-pie-graph",
				meta: "统计图表",
				children: []
			},
			{
				id: 11,
				label: "共享社区",
				href: "/space/share",
				icon: "ion-cube",
				meta: "共享社区",
				group: [
					'/space/index', 'house/manager/index'
				],
				children: []
			},
			{
				id: 12,
				label: "超级办公室",
				href: "/space/super",
				icon: "ion-cube",
				meta: "超级办公室",
				children: []
			},
			{
				id: 108,
				label: "开放共享区",
				href: "/space/open",
				icon: "ion-xbox",
				meta: "开放共享区",
				children: []
			}
		]
	},
	{
		id: 13,
		label: "招商管理",
		href: "",
		icon: "ion-pie-graph",
		meta: "招商管理",
		parent: null,
		children: [
			{
				id: 101,
				label: "统计图表",
				href: "/business/charts",
				icon: "ion-pie-graph",
				meta: "统计图表",
				children: []
			},
			{
				id: 15,
				label: "客户管理",
				href: "/business/kehu",
				icon: "ion-chatbubbles",
				meta: "客户管理",
				children: []
			}
		]
	},
	// {
	//   id: 19,
	//   label: "活动管理",
	//   href: "",
	//   parent: null,
	//   icon: "ion-speakerphone",
	//   meta: "活动管理",
	//   children: [
	//     {
	//       id: 21,
	//       label: "活动管理",
	//       href: "/active/index",
	//       icon: "ion-podium",
	//       meta: "活动管理",
	//       children: []
	//     },
	//     {
	//       id: 22,
	//       label: "发布活动",
	//       href: "/active/subcribe",
	//       icon: "ion-paintbrush",
	//       meta: "发布活动",
	//       children: []
	//     }
	//   ]
	// },

	// {
	//   id: 33,
	//   label: "服务商管理",
	//   href: "",
	//   icon: "ion-ribbon-b",
	//   meta: "服务商管理",
	//   children: [
	//     {
	//       id: 34,
	//       label: "服务商管理",
	//       href: "/provider/index",
	//       icon: "ion-ios-people",
	//       meta: "服务商管理审核",
	//       children: []
	//     },
	//     {
	//       id: 35,
	//       label: "申请成为服务商",
	//       href: "/provider/add",
	//       icon: "ion-compose",
	//       meta: "内容提交",
	//       children: []
	//     }
	//   ]
	// },
	// {
	//   id: 36,
	//   label: "工单管理",
	//   href: "",
	//   icon: "ion-filing",
	//   meta: "工单管理",
	//   children: [
	//     {
	//       id: 37,
	//       label: "工单管理",
	//       href: "/work/index",
	//       icon: "ion-document-text",
	//       meta: "工单管理",
	//       children: []
	//     }
	//     // {
	//     //   id: 38,
	//     //   label: "创建工单",
	//     //   href: "/work/add",
	//     //   icon: "ion-clipboard",
	//     //   meta: "创建工单",
	//     //   children: []
	//     // }
	//   ]
	// },
	{
		id: 39,
		label: "预约管理",
		href: "",
		icon: "ion-clock",
		meta: "预约管理",
		children: [
			{
				id: 40,
				label: "预约管理",
				href: "/convention/index",
				icon: "ion-compass",
				meta: "预约参观",
				children: []
			},
			{
				id: 40,
				label: "办公咨询",
				href: "/convention/office",
				icon: "ion-compass",
				meta: "预约参观",
				children: []
			},
			{
				id: 41,
				label: "申请入驻",
				href: "/convention/ruzhu",
				icon: "ion-pinpoint",
				meta: "申请入驻",
				children: []
			}
		]
	},
	{
		id: 99,
		label: "资产管理",
		href: "",
		icon: "ion-stats-bars",
		meta: "资产管理",
		children: [
			{
				id: 40,
				label: "资产管理",
				href: "/assets/admin",
				icon: "ion-clipboard",
				meta: "预约参观",
				children: []
			},
			{
				id: 100,
				label: "统计管理",
				href: "/assets/charts",
				icon: "ion-clipboard",
				meta: "统计管理",
				children: []
			},
		]
	},
	{
		id: 44,
		label: "财务管理",
		href: "",
		icon: "icon ion-pie-graph",
		meta: "财务管理",
		children: [
			{
				id: 79,
				label: "统计图表",
				href: "/financial/charts",
				icon: "icon ion-pie-graph",
				meta: "统计图表",
				children: []
			},
			{
				id: 45,
				label: "项目列表",
				href: "/financial/index",
				icon: "icon ion-document-text",
				meta: "项目列表",
				children: []
			},
			{
				id: 77,
				label: '流水明细',
				href: '/financial/flow',
				icon: 'icon ion-folder',
				meta: '流水明细',
				children: []
			},
			{
				id: 78,
				label: '租客账单',
				href: '/financial/bill',
				icon: 'icon ion-folder',
				meta: '租客账单',
				children: []
			}
		]
	},
	{
		id: 46,
		label: "合同管理",
		href: `/contract/index`,
		icon: "icon ion-help-buoy",
		meta: {},
		children: []
	},
	{
		id: 46,
		label: "租户管理",
		href: `/team/index`,
		icon: "icon ion-help-buoy",
		meta: {},
		children: []
	},
	// {
	//   id: 52,
	//   label: "发票管理",
	//   href: `/invoice/index`,
	//   icon: "icon ion-help-buoy",
	//   meta: {},
	//   children: []
	// },



	{
		id: 20,
		label: "系统管理",
		href: "",
		parent: null,
		icon: "ion-gear-b",
		meta: "系统管理",
		children: [
			{
				id: 70,
				label: '基本设置',
				href: '/setting/index',
				icon: 'ion-settings',
				meta: '基本设置',
				children: []
			},
			{
				id: 100,
				label: '模型设置',
				href: '/model/index',
				icon: 'ion-ionic',
				meta: '模型设置',
				children: []
			},
			{
				id: 2,
				label: "路由列表",
				href: "/routermap/index",
				icon: "ion-paper-airplane",
				meta: "",
				children: []
			},
			{
				id: 3,
				label: "权限管理",
				href: "/permissions/admin",
				icon: "ion-alert-circled",
				meta: "",
				children: []
			},
			{
				id: 4,
				label: "角色管理",
				href: "/roles/index",
				icon: "ion-help-buoy",
				meta: "",
				children: []
			},
			{
				id: 5,
				label: "用户组管理",
				href: "/usergroup/index",
				icon: "ion-person-stalker",
				meta: "",
				children: []
			},
			{
				id: 6,
				label: "用户管理",
				href: "/userlist/index",
				icon: "ion-person",
				meta: "用户列表",
				children: []
			},
			{
				id: 7,
				label: "菜单管理",
				href: "/rbac/menu/index",
				icon: "ion-navicon",
				meta: "用户列表",
				children: []
			},
			{
				id: 29,
				label: "社区服务",
				href: "/service/index",
				icon: "ion-android-happy",
				meta: "社区服务管理",
				children: []
			},
			{
				id: 46,
				label: "账号管理",
				href: "/account/index",
				icon: "ion-navicon",
				meta: "账号管理",
				children: []
			},
			{
				id: 47,
				label: "品牌管理",
				href: "/brand/index",
				icon: "ion-navicon",
				meta: "品牌管理",
				children: []
			},
			// {
			//   id: 48,
			//   label: "栏目管理",
			//   href: "/category/index",
			//   icon: "ion-image",
			//   meta: "栏目管理",
			//   children: []
			// },
			// {
			//   id: 49,
			//   label: "文章管理",
			//   href: "/article/index",
			//   icon: "ion-paintbrush",
			//   meta: "文章管理",
			//   children: []
			// },
			// {
			//   id: 50,
			//   label: "作者管理",
			//   href: "/article/author",
			//   icon: "ion-person-add",
			//   meta: "作者管理",
			//   children: []
			// },
			// {
			//   id: 51,
			//   label: "来源管理",
			//   href: "/article/sources",
			//   icon: "ion-network",
			//   meta: "来源管理",
			//   children: []
			// },
			{
				id: 23,
				label: "楼宇管理",
				icon: "ion-android-apps",
				href: "/build/manager",
				meta: {},
				children: []
			},
			// {
			//   id: 66,
			//   label: "插件管理",
			//   href: "/plugin/index",
			//   icon: "ion-settings",
			//   meta: "插件管理",
			//   children: []
			// },
			{
				id: 88,
				label: '资产类别',
				href: "/assetTypes/index",
				icon: "ion-person-add",
				meta: "资产类别管理",
				children: []
			},
			{
				id: 30,
				label: '行业管理',
				href: "/industry/index",
				icon: "ion-person-add",
				meta: "行业管理",
				children: []
			},

			{
				id: 79,
				label: "中介管理",
				href: `/cooperation/index`,
				icon: "icon ion-clipboard",
				meta: {},
				children: []
			},
			{
				id: 79,
				label: "合作商管理",
				href: `/coope/index`,
				icon: "icon ion-clipboard",
				meta: {},
				children: []
			},
			{
				id: 89,
				label: "物业管理",
				href: `/property/index`,
				icon: "icon ion-clipboard",
				meta: {},
				children: []
			},
			{
				id: 90,
				label: "部门管理",
				href: `/departments/index`,
				icon: "icon ion-clipboard",
				meta: {},
				children: []
			}
		]
	}
];
const second = [
	{
		id: 23,
		label: "环境变量",
		icon: "icon-dongtai",
		href: "/dev/index",
		meta: {},
		children: []
	},
	{
		id: 24,
		label: "数据持久化",
		href: `/store/index`,
		icon: "icon-huanyingye",
		meta: {},
		children: []
	},
	{
		id: 25,
		label: "剪切板",
		href: `/clipboard/index`,
		icon: "icon-canshu",
		meta: {},
		children: []
	}
];
export const menu = [first, second];
