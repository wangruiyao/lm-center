/*通用接口*/
import router from 'router';
import store from 'store'

export function uploadpictures (params) {  //前台-通用-上传图片
  const url = process.env.NODE_ENV === 'development'
    // ? '/'
    ? 'common/uploadpictures' //成功
    : 'common/uploadpictures';
  return ajax({
    url,
    method: 'post',
    type: 'formData',
    data: params,
    catchError: false
  });
}

export function linkto (pageName, params) {  //获取json配置跳转路由
  goforward(pageName, {params})
}

export function goEslint() {
  window.location.href = 'http://m.enms.cn/#/user/enlist/'+store.state.users.userInfo.developerId;
}

