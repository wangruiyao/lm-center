import router from 'router'
import store from 'store'
import types from 'store/types'

export function go(page, params) {  // 前进
  if(params && params.direction) {
    store.commit(types.SET_PAGE_STATION, params.direction);
  } else {
    store.commit(types.SET_PAGE_STATION, 'open');
  }

  router.replace({name: page, params});
}

export function goback(params) {  // 后退
  store.commit(types.SET_PAGE_STATION, 'back');
  let pageName = store.state.historyPage[store.state.historyPage.length - 2];
  if(pageName === undefined) {
    router.replace({name: 'userLogin', params})
  } else {
    router.replace({path:pageName, query:params})
  }
}

export function uploadImg(e,config) { // 上传图片
  return new Promise(resolve => {
    let configParam = config || {
      sizeLimit: 5
    };
    let returnParams = {};

    let $target = e.target || e.srcElement;
    let file = $target.files[0];
    returnParams.file = file;
    const fileSize = file.size/1024;
    // if(type!=".jpg"&&type!=".gif"&&type!=".jpeg"&& type!=".png")
    if(fileSize >= (configParam.sizeLimt*1024)) {
      Toast(`图片不能大于${configParam.sizeLimt}M`);
    }
    let reader = new FileReader();
    reader.onload = function(e) {
      returnParams.imgUrl = e.target.result;
      resolve(returnParams)
      // console.log(JSON.stringify(returnParams.imgUrl))
    };
    reader.readAsDataURL(file);
  })
  
}

export function isWeiXin() {  // 判断是否是微信浏览器
  const ua = window.navigator.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i) == 'micromessenger') {
    return true; // 是微信端
  } else {
    return false;
  }
}
export function getUrlParams(name) {  // 获取地址栏参数
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
  let paramsStr = "?"+window.location.href.split('?')[1];
  let r = paramsStr.substr(1).match(reg);
  if (r != null) return decodeURIComponent(r[2]); return null;
}
