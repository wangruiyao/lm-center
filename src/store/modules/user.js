import types from '../types'
import  {userlogin, userinfor} from 'api/user'

const state = {
  userInfo: sessionStorage.getItem('lmUserInfo') === null ? {} : JSON.parse(sessionStorage.getItem('lmUserInfo'))
};

let getters = {};

const mutations = {
  [types.SET_USER_INFO](state, params) {
    state.userInfo = params;
    setSession('lmUserInfo', params)
  }
};

const actions = {
  userInfo({commit}) {
    return new Promise((resolve, reject) => {
      userinfor()
        .then(data => {
          resolve(data);
          if(data.code === '0' && data.subcode === '10000') {
            if(data.data !== undefined && data.data !== null) {
              const userInfo = data.data;
              commit(types.SET_USER_INFO, userInfo)
            }
          }

        })
        .catch(data => {
          reject(data)
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
