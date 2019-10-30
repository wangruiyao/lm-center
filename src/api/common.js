/*通用接口*/
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