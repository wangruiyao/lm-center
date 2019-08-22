import types from '../types'
import  {goodslist, morecondition} from 'api/goods'
const state = {
  getHotCategory: [],
  queryListParams: {} //商品列表查询参数
};

const getters = {};

const mutations = {
  // [types.SET_SHOP_SCROLL_TOP](state, num) {
  //   state.shopScrollTop = num;
  // },
  [types.SET_HOT_CATEGORY](state, arr) {
    state.getHotCategory = arr;
  },
  [types.SET_GOODS_LIST_QUERY_PARAMS](state, params) {
    state.queryListParams = params;
    setSession('queryListParams', params);
  }
};

const actions = {
  // 查询商品列表
  queryGoodsListInfo({commit}, args) {
    const rspParams = {};
    args = args === undefined ? {} : args;
    commit(types.SET_GOODS_LIST_QUERY_PARAMS, args);
    return new Promise((resolve, reject) => {
      goodslist(args).then(rep => {
        rspParams.goodsList = rep.data;

        morecondition({goodstype: rep.data.goodstypes}).then(subRsp => {
          rspParams.moreCondition = subRsp.data;
          resolve(rspParams)
        });

      })
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