
export function userisexist (params) {  // 用户账号是否存在
  const url = process.env.NODE_ENV === 'development'
    // ? '/5c510e3c-41d8-42e9-acc4-5f121486181b'
    ? '/4180e95d-a40f-41a7-a2b8-cba9ec784e97' //成功
    : 'authorize/userisexist';
  return ajax({
    url,
    method: 'post',
    data: params,
    catchError: true
  });
}

export function userregister (params) {  // 用户注册接口
  const url = process.env.NODE_ENV === 'development'
    // ? '/503e7e19-b1bd-4fbe-bdfc-81594ba523b9'
    ? '/440daa1b-5a34-4391-adcd-6e4cec4d8dde' //成功
    : 'portal/userregister';
  return ajax({
    url,
    method: 'post',
    data: params,
    catchError: true
  });
}

export function userloginbyphone (params) {  // 用户手机验证码登录
  const url = process.env.NODE_ENV === 'development'
    // ? '/401c452f-aa46-44f5-aa18-69ae71045268' // 失败
    ? '/a45b807e-2af6-4302-9fd9-35fd22bb6415' // 成功
    : 'authorize/userloginbyphone';
  return ajax({
    url,
    method: 'post',
    data: params,
    catchError: true
  })
}

export function userloginbyname (params) {  // 用户账号密码登录
  const url = process.env.NODE_ENV === 'development'
    // ? '/69c32cc2-525b-4bd3-a29c-707d4f052a6d' // 失败
    ? '/e4c7573b-94a5-44de-a043-1b522f7f809e' // 成功
    : 'authorize/userloginbyname';
  return ajax({
    url,
    method: 'post',
    data: params,
    catchError: true
  })
}

export function userinfor () {  // 获取登录用户信息
  const url = process.env.NODE_ENV === 'development'
    // ? '/c9b97292-c1b3-4b8c-ad7b-96e7a87cfbbe' // 失败
    ? '/004a2379-8c7c-4b4b-a930-812ba8f5b648' // 成功
    : 'personcenter/userinfor';
  return ajax({
    url,
    method: 'post',
    catchError: true
  })
}