import store from 'store'
export function decodeparams (params) {  // 解密调取支付接口参数
  const url = process.env.NODE_ENV === 'development'
    // ? '/503e7e19-b1bd-4fbe-bdfc-81594ba523b9'
    // ? '/440daa1b-5a34-4391-adcd-6e4cec4d8dde' //成功
    ? 'paycenter/decodeparams'
    : 'paycenter/decodeparams';
  return ajax({
    url,
    method: 'post',
    data: params,
    catchError: true
  });
}

export function topay (params) {  // 调起收银台
  const url = process.env.NODE_ENV === 'development'
    // ? '/503e7e19-b1bd-4fbe-bdfc-81594ba523b9'
    // ? '/440daa1b-5a34-4391-adcd-6e4cec4d8dde' //成功
    ? 'paycenter/topay'
    : 'paycenter/topay';
  return ajax({
    url,
    method: 'post',
    data: params,
    catchError: true
  });
}

export function getPayResult (params) {  // 获取支付结果
  const url = process.env.NODE_ENV === 'development'
    // ? '/503e7e19-b1bd-4fbe-bdfc-81594ba523b9'
    // ? '/440daa1b-5a34-4391-adcd-6e4cec4d8dde' //成功
    ? 'paycenter/getPayResult'
    : 'paycenter/getPayResult';
  return ajax({
    url,
    method: 'post',
    data: params,
    catchError: true
  });
}

export function gotopay(params) { // 调起收银台
  let goToPayBaseUrl = 'http://192.168.0.210:7700/lmfrontstage/pay/topay?userid='+store.state.users.userInfo.userId;
  if(params) {
    Object.keys(params).forEach(key => {
      goToPayBaseUrl += '&'+key+'='+params[key]
    })
  }
  window.location.href = goToPayBaseUrl;
}