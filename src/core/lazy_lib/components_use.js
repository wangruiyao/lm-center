import {Toast, MessageBox} from 'mint-ui'

const ToastFun = function(params) {
  return new Promise(reject => {console.log(typeof params);
    let config = {
      message: '',
      position: 'center',
      duration: 3000
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

// 引入自定义组件
import Loading from 'components/lmLoading';
window.Loading = Loading;