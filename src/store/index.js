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
import vip from './modules/vip'
// import common from './modules/common'

const state = {
  // historyPage: '/',
  pageInAnimate: 'slideInRight',
  pageOutAnimate: 'slideOutLeft',
  historyPage: sessionStorage.getItem('historyPage') === null ? [] : JSON.parse(sessionStorage.getItem('historyPage'))
};

const mutations  = {
  /* 更改页面切换状态 */
  [types.SET_PAGE_STATION](state, states) {   // open: 打开新页面, back: 返回上一页
    if(states === 'open') {
      state.pageInAnimate = 'slideInRight';
      state.pageOutAnimate = 'slideOutLeft';
    } else if(states === 'back') {
      state.pageInAnimate = 'slideInLeft';
      state.pageOutAnimate = 'slideOutRight';
    }
  },

  /* 更改上一页 */
  [types.SET_HISTORY_PAGE](state, historyPage) {
    // state.historyPage = historyPage.name;
    if(historyPage.handle === 'forward'){ // 前进添加历史数组
      const i = state.historyPage.length-1;
      if (historyPage.page === state.historyPage[i]) {
        return false
      } else {
        state.historyPage.push(historyPage.page);
        setSession('historyPage', state.historyPage)
      }

    } else if(historyPage.handle === 'back') {  // 后退删除历史数组
      state.historyPage.pop();
      setSession('historyPage', state.historyPage)
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
    users,
    vip
  }
})