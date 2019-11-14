import vueJsonp from 'vue-jsonp';

/*访问JSON接口地址*/
const JSON_API_ROOT =  'http://www.51186.com.cn';
const baseURL = process.env.NODE_ENV === 'development' ? '/json' : JSON_API_ROOT;

export default function jsonp({
  url,
}) {
  const reqUrl = JSON_API_ROOT + url;
  vueJsonp(reqUrl, {
    callbackQuery: 'callbackParam', // jsonp key //请求传递参数 1
    callbackName: 'success_jsonp', // jsonp key //请求传递参数 2
  }).then(json => {
    // resolve(json)
    console.log('success',json)
  }).catch(err => {
    // reject()
    console.log('err')
  })
  // return new Promise((resolve, reject) => {
  //
  // })
}