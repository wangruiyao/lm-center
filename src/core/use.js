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

// import mint-ui component
import { Popup, Picker, Checklist, Toast, Swipe, SwipeItem } from 'mint-ui'
import { InfiniteScroll } from 'mint-ui';

Vue.use(InfiniteScroll);

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Popup.name, Popup);
Vue.component(Picker.name, Picker);
Vue.component(Checklist.name, Checklist);
