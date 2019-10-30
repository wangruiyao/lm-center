import { Toast ,MessageBox, Indicator } from 'mint-ui'
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

import Vue from 'vue'
import MoreTools from 'components/lmMoreTools';
Vue.use(MoreTools)