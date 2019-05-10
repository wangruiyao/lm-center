
const state = {
  pageState: 'turn-on'  // turn-on 为页面入栈，turn-off 是页面出栈
};

let getters = {};

const mutations  = {
  setPageState(state, states) {
    state.pageState = states
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
