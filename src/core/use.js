import Vue from 'vue'
import 'lib-flexible'
import 'babel-polyfill'
// import style files
import 'assets'
import pinyin from 'js-pinyin'
pinyin.setOptions({checkPolyphone: false, charCase: 0});
window.pinyin = pinyin;

import 'core/lazy_lib/components_use'

// 引入ajax
import ajax from 'utils/axios/index.js'
window.ajax = ajax;
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

import mint from 'mint-ui'
Vue.use(mint);

import NutUI from '@nutui/nutui';
import '@nutui/nutui/dist/nutui.css';
NutUI.install(Vue);

import Vue2TouchEvents from 'vue2-touch-events'
Vue.use(Vue2TouchEvents);
