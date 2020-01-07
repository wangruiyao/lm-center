
// const commonUrl = 'http://192.168.0.210:7700/lmfrontstage/';
const commonUrl = 'http://m.enms.cn/lmfrontstage/';

const state = {
  avatarImg: commonUrl + 'usercenter/getUserAvatar?userId=',
  displayImg: commonUrl + 'common/displayimg?fileId=',
  getOpenIdUrl: 'http://kdcx.enms.cn/externallogic/weixin/getopenid?m=getopenid&appid=wx88811728ad990813&code=lm&redirectcode=lm'
};

export default {
  namespaced: true,
  state
}