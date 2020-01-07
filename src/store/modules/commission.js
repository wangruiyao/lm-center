import types from '../types';
import {getuserawardaccount} from 'api/commission'

const state = {
  userAwardAccount: {}  // 用户账户信息
};

const getters = {};

const mutations = {
  /*用户账户信息*/
  [types.SET_USER_AWARD_ACCOUNT](state, params) {
    state.userAwardAccount = params;
    // console.log('用户账户信息：'+JSON.stringify(state.userAwardAccount))
  }
};

const actions = {
  // [types.GET_USER_AWARD_ACCOUNT]
  getUserAwardAccount({commit}) {
    getuserawardaccount().then(rsp => {
      commit(types.SET_USER_AWARD_ACCOUNT, rsp.data)
    })
  }
};


export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}