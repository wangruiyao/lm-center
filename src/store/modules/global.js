
const commonUrl = 'http://192.168.0.210:7700/lmfrontstage/';
const state = {
  avatarImg: commonUrl + 'usercenter/getUserAvatar?userId=',
  displayImg: commonUrl + 'common/displayimg?fileId='
};

export default {
  namespaced: true,
  state
}