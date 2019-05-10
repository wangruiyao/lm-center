/*
* 组装模块并导出 store
* */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import types from './types'
import getters from './getters'
import actions from './actions'
import users from './modules/user'
// import common from './modules/common'

const state = {
  pageState: 'turn-on',  // turn-on 为页面入栈，turn-off 是页面出栈
  pageInAnimate: 'slideInRight',
  pageOutAnimate: 'slideOutLeft'
};

const mutations  = {
  [types.SET_PAGE_STATION](state, states) {   // open: 打开新页面, back: 返回上一页
    if(states === 'open') {
      state.pageInAnimate = 'slideInRight';
      state.pageOutAnimate = 'slideOutLeft';
    } else if(states === 'back') {
      state.pageInAnimate = 'slideInLeft';
      state.pageOutAnimate = 'slideOutRight';
    }
  }
};
// 导出 store 对象
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules:{
    // common,
    users
  }
})