import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import errLog from './modules/errLog'
import user from './modules/user'
import common from './modules/common'
import room from './modules/room'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
		app,
		errLog,
		user,
		common,
		room
  },
  getters
})

export default store
