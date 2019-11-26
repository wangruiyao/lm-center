import Vue from 'vue'
import 'lib-flexible'
import 'babel-polyfill'
// import 'utils/vconsole'
// import style files
import 'assets'
import pinyin from 'js-pinyin'
pinyin.setOptions({checkPolyphone: false, charCase: 0});
window.pinyin = pinyin;

import 'core/lazy_lib/components_use'

// 引入ajax
import ajax from 'utils/axios/index.js'
window.ajax = ajax;

import jsonp from 'utils/jsonp/index.js'
window.jsonp = jsonp;
// 引入并配置全局加密方法
import {RSA} from 'utils/RSA'
Vue.prototype.$RSA = RSA;

// 引入页面跳转方法
import {go, goback, uploadImg} from 'utils/basicMethods'
window.goforward = go;
window.goback = goback;
window.uploadImg = uploadImg;

// 引入 session 存储
import {setSession, getSession} from "utils/session";
window.setSession = setSession;
window.getSession = getSession;

// 引入浮点数计算方法
import {accAdd, accSub, accDiv, accMul} from 'utils/basicMethods/computeFloat';
window.accAdd = accAdd;
window.accSub = accSub;
window.accDiv = accDiv;
window.accMul = accMul;


import Vue2TouchEvents from 'vue2-touch-events'
Vue.use(Vue2TouchEvents);

//引入 lottie
// import lottie from 'vue-lottie';
// Vue.component('lottie', lottie);

//引入clipboard
import clipboard from 'clipboard';
Vue.prototype.$clipboard = clipboard;

