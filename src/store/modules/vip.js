import types from '../types'
import  {vipinfor} from 'api/vip'

const state = {
  vipInfo: sessionStorage.getItem('vipInfo') === null
    ? {}
    : JSON.parse(sessionStorage.getItem('vipInfo'))
};

const getters = {};

const mutations = {
  [types.SET_VIP_INFO](state, params) {
    state.vipInfo = params;
    setSession('vipInfo', params);
  }
};

const actions = {
  vipInfo({commit}) {
    return new Promise((resolve, reject) => {
      vipinfor().then(data => {
        resolve(data);
        if(data.code === '0' && data.subcode === '10000') {
          if(data.data !== undefined && data.data !== null) {
            const vipInfo = data.data;
            commit(types.SET_VIP_INFO, vipInfo);
          }
        }
      }).catch(data=> {
        reject(data);
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