import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from './service/axios'
import store from './store'
import 'babel-polyfill'
import Element from 'element-ui'
import 'normalize.css/normalize.css'
import './errorLog' // 错误日志
import '@/styles/index.scss' // global css
import '../theme/index.css'
import AVUE from '../packages/index.js'
import Avue from '@smallwei/avue/lib/index.js'
import * as urls from '@/config/env'
import { loadStyle } from '@/utils/util'
import { iconfontUrl, iconfontVersion } from '@/config/env'
import './filters'
import '@/permission'
import 'normalize.css/normalize.css'

Vue.config.productionTip = false

Vue.use(axios)
Vue.use(Element)

Object.keys(urls).forEach(key => {
	Vue.prototype[key] = urls[key]
})

iconfontVersion.forEach(ele => {
	loadStyle(iconfontUrl.replace("$key", ele))
})
new Vue({
	store,
	router,
  render: h => h(App),
}).$mount('#app')
