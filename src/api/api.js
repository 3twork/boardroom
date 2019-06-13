export const api = {
	product: 'http://api.3twork.com/api'
};
let API, PRODUCTAPI, PRODUCTV2;
if (process.env.NODE_ENV === 'production') {
	API = 'http://api.3twork.com';
	PRODUCTAPI = 'http://api.3twork.com/api';
	PRODUCTV2 = 'http://api.3twork.com/api2';
}
if (process.env.NODE_ENV === 'buildDev' || process.env.NODE_ENV === 'development') {
	API = 'http://api.zzkmd.com';
	PRODUCTAPI = 'http://api.zzkmd.com/api';
	PRODUCTV2 = 'http://api.zzkmd.com/api2';
}
export { API, PRODUCTAPI, PRODUCTV2 };
export const ERR_OK = 200;
// 获取用户接口 adminuser
export const USERINTER = PRODUCTAPI + '/adminusers';
export const USERAPI = PRODUCTAPI + '/adminuser';
// 添加用户 adminuser/create
export const USERCREATE = PRODUCTAPI + '/adminusers/create'
// 注销用户 adminuser/delete?id=
export const USERDELETE = PRODUCTAPI + '/adminusers/delete'
// 更改用户信息 adminuser/update
export const USERUPDATE = PRODUCTAPI + '/adminuser/update'
// 单个用户信息 adminuser/me?expand=profile,groups  这种用户查看自己信息  adminuser/{id} 这种只有管理员能访问，查看用户信息
export const EXPAND = PRODUCTAPI + '/adminuser/me?expand='
export const ADMINUSER = PRODUCTAPI + '/adminusers/'
// 路由json数据 surplus
export const SURPLUSJSON = PRODUCTAPI + '/rbac/routes/json'
// 登录接口
export const LOGIN = PRODUCTAPI + '/adminuser/login';

// 获取用户信息接口
export const USERINFO = PRODUCTAPI + '/adminuser/me';
export const GETME = PRODUCTAPI + '/adminuser/getme'
// rbac用户菜单接口
export const MENU = PRODUCTAPI + '/rbac/menus/user';
// 菜单接口 更新菜单 rbac/menus/update?id=
export const MENUUPDATE = PRODUCTAPI + '/rbac/menus/update?id='
// rbac所有菜单接口  删除 增加 rbac/menus  删除 id ->  rbac/menus/id
export const MENUALL = PRODUCTAPI + '/rbac/menus';

// rbac路由列表接口 已分配路由地址
export const ROUTERMAP = PRODUCTAPI + '/rbac/routes';

// rbac路由列表 未分配路由地址
export const SURPLUS = PRODUCTAPI + '/rbac/routes/surplus';

//rbac路由列表 添加路由接口
export const ROUTERS = PRODUCTAPI + '/rbac/routes';

// rbac路由列表 删除路由接口
export const REMOVE = PRODUCTAPI + '/rbac/routes/remove';

// rbac权限列表 返回可分配权限列表
export const PERMISSIONTable = PRODUCTAPI + '/rbac/permissions?page=';
// rbac权限列表 返回可分配权限列表
export const PERMISSION = PRODUCTAPI + '/rbac/permissions';

// rbac权限列表 权限详情 rbac/permissions/view?id=权限 id -> string
export const PERDETAILS = PRODUCTAPI + '/rbac/permissions/view?id='

// rbac权限删除权限 rbac/permissions/delete?id= id-> string
export const PERDELEATE = PRODUCTAPI + '/rbac/permissions/delete?id='

// rbac权限更新权限 rbac/permissions/update?id= id->string
export const PERUPDATE = PRODUCTAPI + '/rbac/permissions/update?id='

// rbac权限获取父类 rbac/permissions/parent-name
export const PARENTNAME = PRODUCTAPI + '/rbac/permissions/parent-name'
// 权限父类树 rbac/permissions/parent
export const PARENTREE = PRODUCTAPI + '/rbac/permissions/parent'

// 获取权限树 rbac/permissions/tree
export const RBACTREE = PRODUCTAPI + '/rbac/permissions/tree'
// rbac某个权限分配路由列表 rbac/permissions/assign-list?id= id->string
export const ASSIGNLIST = PRODUCTAPI + '/rbac/permissions/assign-list?id='

// rbac某个权限下增加路由 rbac/permissions/assign?id= id->string
export const ASSIGNADD = PRODUCTAPI + '/rbac/permissions/assign?id='

// rbac某个权限下删除路由 rbac/permissions/remove?id=权限
export const ASSIGNREMOVE = PRODUCTAPI + '/rbac/permissions/remove?id='

// rbac角色 rbac角色增加 rbac/roles
export const ROLES = PRODUCTAPI + '/rbac/roles'
// rbac删除角色 rbac/roles/delete?id=string
export const ROLESDELETE = PRODUCTAPI + '/rbac/roles/delete?id='
// rbac更新角色 rbac/permissions/update?id=string
export const ROLESUPDATE = PRODUCTAPI + '/rbac/permissions/update?id='

// rbac角色权限分配 rbac/roles/assign-list?id=
export const ROLESASSIGN = PRODUCTAPI + '/rbac/roles/assign-list?id='
// rbac角色分配增加分配 删除分配 rbac/roles/assign?id=
export const ROLESASSIGNCONTROL = PRODUCTAPI + '/rbac/roles/assign?id='

// rbac用户组 rbac/groups
export const GROUP = PRODUCTAPI + '/rbac/groups'
// rbac用户组增加分组 rbac/groups/create
export const GROUPCREATE = PRODUCTAPI + '/rbac/groups/create'
// rbac用户组删除分组 rbac/groups/delete?id= id-> int
export const GROUPDELETE = PRODUCTAPI + '/rbac/groups/delete?id='
// rbac用户组修改分组 rbac/groups/update?id= id-> int
export const GROUPUPDATE = PRODUCTAPI + '/rbac/groups/update?id='
// rbac用户组修改分组状态 rbac/groups/status?id=1
export const GROUPSTATUS = PRODUCTAPI + '/rbac/groups/status?id'

// rbac角色批量分配列表 rbac/assignments/assign-users?id=
export const ASSIGNMENT = PRODUCTAPI + '/rbac/assignments/assign-users?id='
// rbac角色批量分配 rbac/assignments/assign-batch?id=
export const ASSIGNBATCH = PRODUCTAPI + '/rbac/assignments/assign-batch?id='
// rbac角色批量删除角色下的用户rbac/assignment/remove-users?id=
export const ASSIGNMENTREMOVE = PRODUCTAPI + '/rbac/assignment/remove-users?id='


// rbac用户分配列表 rbac/assignments/assign-list?id=
export const ASSIGNMENTLIST = PRODUCTAPI + '/rbac/assignments/assign-list?id='
// rbac用户增加分配 rbac/assignments/assign?id=
export const ASSIGNADDUSER = PRODUCTAPI + '/rbac/assignments/assign?id='
// rbac用户删除分配 rbac/assignments/revoke?id=
export const ASSIGNUSERREMOVE = PRODUCTAPI + '/rbac/assignments/revoke?id='


//地址接口 system/areas/json
export const AREAS = PRODUCTAPI + '/system/areas/json'


// https://www.zzkmd.com.php/attachment/up?action=user  上传地址接口
export const ATTACHMENT = PRODUCTAPI + '/attachment/up?action=user'

// 招商管理 客户列表 增加客户  customer/defaults?page=2&sort=-id page-> int sort-> int
export const CUSTOM = PRODUCTAPI + '/customer/defaults'
export const CUSTOMV2 = PRODUCTV2 + '/customer/defaults'

// 招商管理 字典 customer/defaults/select
export const CUSTOMDIC = PRODUCTAPI + '/customer/defaults/select '

// 招商管理 统计数量 customer/defaults/count
export const CUSTOMCOUNT = PRODUCTAPI + '/customer/defaults/count'

// 招商管理 customer/phone?page=1 customer_id
export const PHONES = PRODUCTAPI + '/customer/phones'

// 招商管理 customer/logs
export const LOGS = PRODUCTAPI + '/customer/logs'
// 招商管理 customer/logs/select
export const LOGSDIC = PRODUCTAPI + '/customer/logs/select'
// 招商管理 获取社区 customer/logs/community
export const CUSTOM_COMMUNITY = PRODUCTAPI + '/customer/logs/community'
// 招商管理 获取类型 customer/logs/types
export const CUSTOM_TYPES = PRODUCTAPI + '/customer/logs/types'
// 招商管理 获取房间号 customer/logs/office
export const CUSTOM_OFFICE = PRODUCTAPI + '/customer/logs/office'

// 空间管理 community/defaults
export const COMMUNITY = PRODUCTAPI + '/community/defaults'
// 空间管理 字典 community/defaults/select
export const COMMUNITYDIC = PRODUCTAPI + '/community/defaults/select'

// 空间管理 获取社区经理 community/defaults/manager
export const COMMUNITYMG = PRODUCTAPI + '/community/defaults/manager'
// 楼层信息 community/floors/search/2  2-> cid
export const FLOOR = PRODUCTAPI + '/community/floors/search'
// 调整楼层 community/floors
export const RESETFLOOR = PRODUCTAPI + '/community/floors'
// 调整服务 community/servers
export const SERVERS = PRODUCTAPI + '/community/servers'
// 查看服务列表接口 community/servers/json
export const SERVERAPI = PRODUCTAPI + '/community/servers/json'
// 会议室列表 community/councils
export const COUNCILS = PRODUCTAPI + '/community/councils'
// 获取会议室字典 community/councils/select
export const COUNCILSDIC = PRODUCTAPI + '/community/councils/select'

// 办公室列表 community/offices
export const OFFICES = PRODUCTAPI + '/community/offices'
export const OFFICESV2 = PRODUCTV2 + '/community/offices'
export const OFFICESDIC = PRODUCTAPI + '/community/offices/select'

// 共享工位办公位列表 community/opens
export const OPENS = PRODUCTAPI + '/community/opens'
export const OPENSDIC = PRODUCTAPI + '/community/opens/select'
// 路演厅 community/roads
export const ROADS = PRODUCTAPI + '/community/roads'
export const ROADSDIC = PRODUCTAPI + '/community/roads/select'

// 社区管理 统计defaults/count
export const COMMUNITYCOUNT = PRODUCTAPI + '/community/defaults/count'
// 获取社区信息选项 community/defaults/search
export const COMMUNITYSEARCH = PRODUCTAPI + '/community/defaults/search'

// 获取社区信息服务列表
export const SERVERLIST = PRODUCTAPI + '/system/servers'
// 获取社区信息字典 服务选项字典 system/servers/select
export const SERVICEDIC = PRODUCTAPI + '/system/servers/select'

// 超级办公室接口 super/defaults?page=1
export const SUPER = PRODUCTAPI + '/super/defaults'
// 超级办公室字典 super/defaults/select
export const SUPERDIC = PRODUCTAPI + '/super/defaults/select'
// 超级办公室社区构成 super/constitutes/search
export const CONSTITUES_SEARCH = PRODUCTAPI + '/super/constitutes/search'
// 超级办公室社区调整类型 super/constitutes
export const CONSTITUTES = PRODUCTAPI + '/super/constitutes'
// 超级办公室调整服务
export const SUPERSERVER = PRODUCTAPI + '/super/servers'
// 超级办公室查看服务 super/servers/json
export const SUPERSERVERDIC = PRODUCTAPI + '/super/servers/json'

// 活动列表接口 activity/defaults
export const ACTIVITY = PRODUCTAPI + '/activity/defaults'
// 活动批量删除接口 activity/batch-delete
export const ACTIVEDELETE = PRODUCTAPI + '/activity/batch-delete'
// 活动接口字典 activity/select
export const ACTIVITYDIC = PRODUCTAPI + '/activity/defaults/select'
// 活动类型字典 activity/types/json
export const ACTIVITYTYPES = PRODUCTAPI + '/activity/types/json'

// 空间记录列表 super/leases?page
export const SUPERLEASES = PRODUCTAPI + '/enter/leases'
//超级办公室统计数据 super/defaults/count
export const SUPERCOUNT = PRODUCTAPI + '/super/defaults/count'
//空间管理type类型字典 enter/leases/select
export const LEASESDIC = PRODUCTAPI + '/enter/leases/select'
//空间检索用户列表 enter/defaults/json
export const ENDTERUSERDIC = PRODUCTAPI + '/enter/defaults/json'


// 团队管理获取选项字典 enter/defaults/select
export const ENTERDEFAULTDIC = PRODUCTAPI + '/enter/defaults/select'
// 团队管理列表 enter/defaults
export const ENTERDEFAULTS = PRODUCTAPI + '/enter/defaults'
// 团队管理添加时字典 enter/defaults/community
export const ENTERCOMMUNITY = PRODUCTAPI + '/enter/defaults/community'

// 团队管理 enter/defaults/office
export const ENTEROFFICE = PRODUCTAPI + '/enter/defaults/office'
// 团队成员性别 enter/teams/select
export const TEAMSEX = PRODUCTAPI + '/enter/teams/select'
// 添加成员 enter/teams
export const TEAM = PRODUCTAPI + '/enter/teams'
//团队成员列表 teams/search
export const TEAMLIST = PRODUCTAPI + '/enter/teams/search'
//团队认证管理字典 enter/defaults/count
export const TEAMCOUNTDIC = PRODUCTAPI + '/enter/defaults/count'
// 团队管理认证审核驳回 enter/defaults/state
export const TEAMSTATE = PRODUCTAPI + '/enter/defaults/state'

// 服务商列表 facilitator/defaults
export const FACILITATOR = PRODUCTAPI + '/facilitator/defaults'
// 服务商字典接口 facilitator/defaults/select
export const FACILITATORDIC = PRODUCTAPI + '/facilitator/defaults/select'
//获取审核列表 facilitator/logs
export const FACILITATORLOG = PRODUCTAPI + '/facilitator/logs'
// 优惠列表
export const FACILITATORYOUHUI = PRODUCTAPI + '/facilitator/discounts'
// 工单管理 work/defaults
export const WORK = PRODUCTAPI + '/work/defaults'
//工单回复列表组件 work/res
export const WORKCOMMENTS = PRODUCTAPI + '/work/res'


// 预约参观管理 bespeak/visits
export const BESPEAKVISITS = PRODUCTAPI + '/bespeak/visits';

// 预约入驻管理 bespeak/enters
export const BESPEAKENTERS = PRODUCTAPI + '/bespeak/enters'


// 财务管理 项目 finance/defaults
export const FINANCE = PRODUCTAPI + '/finance/defaults'
// 财务管理 押金管理 finance/deposits
export const DEPOSITS = PRODUCTAPI + '/finance/deposits'
// 财务管理 租金情况 finance/rents
export const RENTS = PRODUCTAPI + '/finance/rents'
// 财务管理 中介费 finance/medis
export const MEDIS = PRODUCTAPI + '/finance/medis'
// 财务管理 物业费 暖气费 空调 finance/pros  cost_type => 1 物业费 2 暖气费 3 中央空调
export const PROPERTY = PRODUCTAPI + '/finance/properties'
// 财务管理 水电 finance/waters cost_type  => 4 水费 5 电费
export const WATERS = PRODUCTAPI + '/finance/waters'
// 财务管理 全部费用 finance/unions
export const UNIONS = PRODUCTAPI + '/finance/unions'
// 硬装费 finance/hards
export const HARDS = PRODUCTAPI + '/finance/hards'
// 硬装费押金 finance/hardpays
export const HARDSPAY = PRODUCTAPI + '/finance/hardpays'
// 软装费 finance/softs
export const SOFTS = PRODUCTAPI + '/finance/softs'
// 软装费、信息费、配套费 finance/softpays
export const SOFTSPAY = PRODUCTAPI + '/finance/softpays'
//财务管理 获取社区字典 finance/select
export const SELECT = PRODUCTAPI + '/finance/select'
// 财务管理 获取项目类别 finances/selects/types
export const SELECTS = PRODUCTAPI + "/system/selects"

// 财务管理 账号管理 finance/accounts
export const ACCOUNT = PRODUCTAPI + '/finance/accounts'

export const WORKCLASS = PRODUCTAPI + '/work/clas'

// 财务管理费用导出excel finance/unions/excel
export const EXCEL = PRODUCTAPI + "/finance/unions/excel"

// 工单管理 附件上传 work/attachments/up
export const WORKUPLOAD = PRODUCTAPI + "/work/attachments/up"
// 租户管理 获取行业父类 enter/industries/json
export const INDUSTRY = PRODUCTAPI + "/enter/industries/json"

// 合同管理 contract
export const CONTRACT = PRODUCTAPI + "/contract"

// 栏目管理 category/defaults
export const CATEGORY = PRODUCTAPI + "/category/defaults"

// 栏目管理 article/defaults
export const ARTICLE = PRODUCTAPI + "/article/defaults";
// 栏目管理 artical/authors
export const AUTHORS = PRODUCTAPI + "/article/authors";
// 栏目管理 来源管理 article/sources
export const SOURCES = PRODUCTAPI + "/article/sources";
// 发票管理 ticket/defaults
export const INVOICE = PRODUCTAPI + "/ticket/defaults";
// 订单管理 order/defaults
export const ORDER = PRODUCTAPI + "/order/defaults";
// 插件管理 order/plugins
export const PLUGIN = PRODUCTAPI + "/order/plugins";

/**
 * @name 改版API接口/空间管理模块
 * @description 2018-11-02
 */
export const NEW_COMMUNITY = PRODUCTAPI + '/community/offices';
export const ASSET = PRODUCTAPI + '/asset';
export const ASSETV2 = PRODUCTV2 + '/asset';
export const ASSETS = PRODUCTAPI + '/assets';
export const COMMUNITYENTRY = PRODUCTAPI + '/community';
export const BILL = PRODUCTAPI + '/bill'
export const FLOW = PRODUCTAPI + '/flows'
export const SUPERBUILD = PRODUCTAPI + '/super/builds';
export const INDUSTRIES = PRODUCTAPI + "/enter/industries"
export const OPERATE = PRODUCTAPI + '/operate'
export const DELSTATION = PRODUCTAPI + '/community/postions'
export const DELSTATIONV2 = PRODUCTV2 + '/community/postions'

export const SYSTEM = PRODUCTAPI + '/system'
/***
 * @name 招商管理、预约管理、合作商管理
 */
export const CUSTOMDICS = PRODUCTAPI + '/enter/industries/json/0' //状态字典
export const CUSTOMDICZZ = PRODUCTAPI + '/customer/logs/select'  //行业字典
export const ADDPARTNERS = PRODUCTAPI + '/system/partners' //添加合作商
export const BESPEAKDIC = PRODUCTAPI + '/bespeak/defaults/select' // 预约管理字典
export const BESPEAK = PRODUCTAPI + '/bespeak/defaults' // 预约管理列表
export const BESPEAKOFFICE = PRODUCTAPI + '/bespeak/defaults/consult' // 办公室咨询
export const BESPEAKBATCHDEL = PRODUCTAPI + '/bespeak/defaults/batch-delete' //预约咨询批量删除
export const CUSTOMBATCHDEL = PRODUCTAPI + '/customer/defaults/batch-delete'//招商管理批量删除


export const PROPERTIES = PRODUCTAPI + '/system/properties'//物业管理
export const COOP = PRODUCTAPI + '/system/cooperates' //合作商
export const DEPARTMENT = PRODUCTAPI + '/system/departments' //部门管理
/**@name 自定义模型 */
export const MODEL = PRODUCTAPI + '/system/mods'
export const SETTING = PRODUCTAPI + '/system/configs'
export const SITECONFIG = PRODUCTAPI + '/site/config';
/**@name 客户统计 */
export const CUSTOM_SIGN_TOTAL = PRODUCTV2 + '/operate/customers/total'; //签到统计
export const CUSTOM_SEX_TOTAL = PRODUCTV2 + '/operate/customers/sex';//性别统计
export const CUSTOM_INDUSTRY_TOTAL = PRODUCTV2 + '/operate/customers/industry';//行业统计
export const CUSTOM_CHANNEL_TOTAL = PRODUCTV2 + '/operate/customers/channel';//了解渠道
export const CUSTOM_CONTRY_TOTAL = PRODUCTV2 + '/operate/customers/intention-contry';//区域统计
export const CUSTOM_NEED_TOTAL = PRODUCTV2 + '/operate/customers/need';//需求类型
export const CUSTOM_STATE_TOTAL = PRODUCTV2 + '/operate/customers/state';//目前状态
export const CUSTOM_FROM_TOTAL = PRODUCTV2 + '/operate/customers/from';//到访途径
export const CUSTOM_CNAME_TOTAL = PRODUCTV2 + '/operate/customers/cname';//到访社区统计
/**@name 合同管理v2 */
export const CONTRACTV2 = PRODUCTV2 + '/contract';
/**@name 空间房源历史价格 */
export const COMMUNITYPRICEV2 = PRODUCTV2 + '/community';
/**@name 超级办公室社区构成类型 */
export const CONSTITUTESV2 = PRODUCTV2 + '/super/constitutes';
/**@name 超级办公室添加 */
export const SUPERV2 = PRODUCTV2 + '/super/defaults'
/**
 * @name 财务管理
 */
export const FINANCEV2 = PRODUCTV2 + '/finance'
