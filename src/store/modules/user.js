import types from '../types'
import  {userlogin} from 'api/user'

const state = {
  count: 5,
  userInfo: {}
};

let getters = {
  count(state){
    return state.count
  }
};

const mutations = {
  [types.USER_UPDATE_INFO](state, params) {
    state.userInfo = params
  }
};

const actions = {
  // 用户登录
  // userLogin({commit}) {
  //   return new Promise((resolve, reject) => {
  //     userlogin()
  //       .then(data => {
  //         commit(USER_UPDATE_INFO, data)
  //         resolve(data)
  //         console.log(data)
  //       })
  //       .catch(data => {
  //         reject(data)
  //       })
  //   })
  // }
};


export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
