import Vue from 'vue'
import { Toast ,MessageBox, Indicator,Popup,Swipe, SwipeItem } from 'mint-ui'
const ToastFun = function(params) {
  return new Promise(reject => {
    let config = {
      message: '',
      position: 'center',
      duration: 3000,
      iconClass: ''
    };
    if(typeof params === 'string') {
      config.message = params;
    }else if(typeof params === 'object'){
      for(let idx in params) {
        config[idx] = params[idx];
      }
    }
    Toast(config);
    setTimeout(function() {
      reject();
    }, config.duration)
  })
};
window.Toast = ToastFun;
window.Message = MessageBox;
window.Indicator = Indicator;

// 引入自定义组件
import Loading from 'components/lmLoading';
window.Loading = Loading;

import MoreTools from 'components/lmMoreTools';
Vue.use(MoreTools);

// 引入mint-ui组件
Vue.component(Popup.name, Popup);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

// 引入nutui组件

import Swiper from '@nutui/nutui/dist/packages/swiper/swiper.js';
import '@nutui/nutui/dist/packages/swiper/swiper.css';
Swiper.install(Vue);

import Badge from '@nutui/nutui/dist/packages/badge/badge.js';
import '@nutui/nutui/dist/packages/badge/badge.css';
Badge.install(Vue);

import TextInput from '@nutui/nutui/dist/packages/textinput/textinput.js';
import '@nutui/nutui/dist/packages/textinput/textinput.css';
TextInput.install(Vue);

import Scroller from '@nutui/nutui/dist/packages/scroller/scroller.js';
import '@nutui/nutui/dist/packages/scroller/scroller.css';
Scroller.install(Vue);

import Icon from '@nutui/nutui/dist/packages/icon/icon.js';
import '@nutui/nutui/dist/packages/icon/icon.css';
Icon.install(Vue);