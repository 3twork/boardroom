const room = {
	state: {
		tablist: [
			{
				name: 'all',
				label: '全部'
			},
			{
				name: 'money',
				label: '待审核'
			},
			{
				name: 'yajin',
				label: '已通过'
			},
			{
				name: 'zujin',
				label: '未通过'
			},
			{
				name:'end',
				label:'已取消'
			}
		],
		roomCurrent:'all'
	},
	mutations: {
		ORDER_CURRENT: (state, action) => {
			state.roomCurrent = action
		},
	}

};

export default room;