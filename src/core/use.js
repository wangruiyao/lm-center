import Vue from 'vue'
import 'lib-flexible'
// import style files
import 'assets'
// 引入ajax
import ajax from 'utils/axios/index.js'
window.ajax = ajax;
// 引入并配置全局加密方法
import {RSA} from 'utils/RSA'
Vue.prototype.$RSA = RSA;

// import mint-ui component
import { Popup, Picker, Checklist, Toast } from 'mint-ui'
Vue.component(Popup.name, Popup);
Vue.component(Picker.name, Picker);
Vue.component(Checklist.name, Checklist);
