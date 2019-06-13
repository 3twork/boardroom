import smallogo from "@/assets/images/logo.png";
import biglogo from "@/assets/images/3Tlogo.png";
export default {
  title: "3TWORK会议室管理系统",
  logo: smallogo,
  biglogo: biglogo,
  author: "FED",
	whiteList: ["/login", "/404", "/401", "/lock", '/register', '/forget','/result'],
  lockPage: "/lock",
  info: {
    title: "3TWORK会议室管理系统",
    list: []
  },
  wel: {
    title: "3TWORK会议室管理系统",
    list: [
      "“3T.WORK共享办公”是郑州三体创业孵化器有限公司旗下的共享办公服务品牌。公司名字的灵感来源于获得雨果奖的著名科幻小说《三体》。",
      "3T.WORK是一个专注于研究并设计未来办公场景的品牌。我们以城市更新为契机、以线下共享办公空间为载体、以中小企业为主要服务对象，提供配备完善、即时入驻的办公空间，协助入驻团队应对一切办公问题，营造具有高度设计感和舒适度的办公社区。",
      "3T.WORK赛博创业社区是3T共享办公首个开放在成熟商场业态中的办公社区。"
    ]
  },
  //http的status默认放行不才用统一处理的,
  statusWhiteList: [400,201,204],
  //配置首页不可关闭
  isFirstPage: false,
  fistPage: {
		label: "首页",
		value: "/home",
    params: {},
    query: {},
    group: [],
    close: false
},

  //配置菜单的属性
  menu: {
    props: {
      label: "label",
      path: "path",
      icon: "icon",
      children: "children"
    }
  }
};
