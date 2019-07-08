import types from '../types'
import global from './global'
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
          const userInfo = data.data;
          userInfo.avatar = global.state.avatarImg +userInfo.userId +'&stamp='+ timest();
          commit(types.SET_USER_INFO, userInfo)
        })
        .catch(data => {
          reject(data)
        })
    })
  }
};

function timest() {
  let tmp = Date.parse( new Date() ).toString();
  tmp = tmp.substr(0,10);
  return tmp;
}


export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
