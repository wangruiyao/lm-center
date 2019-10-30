
const commonUrl = 'http://192.168.0.133:9004/';
const state = {
  avatarImg: commonUrl + 'usercenter/getUserAvatar?userId=',
  displayImg: commonUrl + 'common/displayimg?fileId='
};

export default {
  namespaced: true,
  state
}