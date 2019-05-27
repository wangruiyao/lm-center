import Vue from 'vue'
import 'lib-flexible'
import 'babel-polyfill'
// import style files
import 'assets'

// 引入ajax
import ajax from 'utils/axios/index.js'
window.ajax = ajax;
// 引入并配置全局加密方法
import {RSA} from 'utils/RSA'
Vue.prototype.$RSA = RSA;

// 引入页面跳转方法
import {go, goback} from 'utils/basicMethods'
window.goforward = go;
window.goback = goback;

// 引入 session 存储
import {setSession, getSession} from "utils/session";
window.setSession = setSession;
window.getSession = getSession;

import mint from 'mint-ui'
Vue.use(mint);
import {Toast, MessageBox} from 'mint-ui'
window.Toast = Toast;
window.Message = MessageBox;

// 引入自定义组件
import Loading from 'components/lmLoading'
window.Loading = Loading