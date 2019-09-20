import types from '../types'

const state = {
  // submitOrderParams: {
  goodsid: '',
  serialprice: '',
  goodsprice: '',
  // },
  goodsDetailList: [1]
};

const getters = {};

const mutations = {
  /*运营商商品信息*/
  [types.SET_ORDER_INFO](state, params) {
    state.submitOrderParams = Object.assign(state, params);
    console.log('运营商下单页信息：'+JSON.stringify(state.submitOrderParams))
  },
  /*实物商品列表信息*/
  [types.SET_ORDER_LIST_INFO](state, params) {
    state.goodsDetailList=[];
    state.goodsDetailList = params;
    // console.log('实物下单页信息：'+JSON.stringify(state.goodsDetailList))
    // state.submitOrderParams = Object.assign(state.submitOrderParams, params);
    // console.log('下单页信息：'+JSON.stringify(state.submitOrderParams))
  },
  [types.ClEAR_ORDER_INFO](state, params) {
    state.submitOrderParams = {};
    state.goodsDetailList = [];
    // console.log('下单页信息：'+JSON.stringify(state.submitOrderParams))
  }
};

const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}