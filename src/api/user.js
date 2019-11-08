import store from 'store'
export function userisexist (params) {  // 用户账号是否存在
  const url = process.env.NODE_ENV === 'development'
    // ? '/5c510e3c-41d8-42e9-acc4-5f121486181b'
    // ? '/4180e95d-a40f-41a7-a2b8-cba9ec784e97' //成功
    ? 'usercenter/userisexist' //成功
    : 'usercenter/userisexist';
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
    // ? '/440daa1b-5a34-4391-adcd-6e4cec4d8dde' //成功
    ? 'usercenter/userregister'
    : 'usercenter/userregister';
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
    // ? '/a45b807e-2af6-4302-9fd9-35fd22bb6415' // 成功
    ? 'usercenter/userloginbyphone'
    : 'usercenter/userloginbyphone';
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
    // ? '/e4c7573b-94a5-44de-a043-1b522f7f809e' // 成功
    ? 'usercenter/userloginbyname'
    : 'usercenter/userloginbyname';
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
    // ? '/004a2379-8c7c-4b4b-a930-812ba8f5b648' // 成功
    ? 'usercenter/userinfor'
    : 'usercenter/userinfor';
  return ajax({
    url,
    method: 'post',
    catchError: true
  })
}

export function updateuserinfor (params) {  // 更新用户信息
  // console.log(JSON.stringify(params))
  const url = process.env.NODE_ENV === 'development'
    // ? '/fdeb6107-1448-48e0-8a1c-914f9f701f66' // 失败
    // ? '/946b043a-d238-4f11-aa9a-0901272efc37' // 成功
    ? 'usercenter/updateuserinfor' // 成功
    : 'usercenter/updateuserinfor';
  return ajax({
    url,
    method: 'post',
    type: 'formData',
    data: params,
    catchError: true
  })
}

export function updatemobile (params) {  // 更新用户信息
  const url = process.env.NODE_ENV === 'development'
    // ? '/fdeb6107-1448-48e0-8a1c-914f9f701f66' // 失败
    // ? '/946b043a-d238-4f11-aa9a-0901272efc37' // 成功
    ? 'usercenter/updatemobile' // 成功
    : 'usercenter/updatemobile';
  return ajax({
    url,
    method: 'post',
    data: params,
    catchError: true
  })
}

export function chooseuser(params) {  // 用户手机登录选择账号
  const url = process.env.NODE_ENV === 'development'
    // ? '/fdeb6107-1448-48e0-8a1c-914f9f701f66' // 失败
    ? 'usercenter/chooseuser' // 成功
    : 'usercenter/chooseuser';
  return ajax({
    url,
    method: 'post',
    data: params,
    catchError: true
  })
}

export function sendcodeforlogin(params) {  // 根据用户手机号发送验证码，用于登录。中间会校验有没有手机号是这个的账号
  const url = process.env.NODE_ENV === 'development'
    // ? '/fdeb6107-1448-48e0-8a1c-914f9f701f66' // 失败
    ? 'usercenter/sendcodeforlogin' // 成功
    : 'usercenter/sendcodeforlogin';
  return ajax({
    url,
    data: params,
    method: 'post',
    catchError: true
  })
}

export function searchsendcode(params) {  // 根据用户账号发送验证码
  const url = process.env.NODE_ENV === 'development'
    // ? '/fdeb6107-1448-48e0-8a1c-914f9f701f66' // 失败
    ? 'usercenter/searchsendcode' // 成功
    : 'usercenter/searchsendcode';
  return ajax({
    url,
    data: params,
    method: 'post',
    catchError: true
  })
}

export function verifyuser(params) {  // 用户验证
  const url = process.env.NODE_ENV === 'development'
    // ? '/fdeb6107-1448-48e0-8a1c-914f9f701f66' // 失败
    ? 'usercenter/verifyuser' // 成功
    : 'usercenter/verifyuser';
  return ajax({
    url,
    data: params,
    method: 'post',
    catchError: true
  })
}

export function sendcodeforchangephone(params) {  // 更改手机号码发送验证码
  const url = process.env.NODE_ENV === 'development'
    // ? '/fdeb6107-1448-48e0-8a1c-914f9f701f66' // 失败
    ? 'usercenter/sendcodeforchangephone' // 成功
    : 'usercenter/sendcodeforchangephone';
  return ajax({
    url,
    data: params,
    method: 'post',
    catchError: true
  })
}

export function checksetpwd(params) {  // 找回密码-验证码验证
  const url = process.env.NODE_ENV === 'development'
    // ? '/fdeb6107-1448-48e0-8a1c-914f9f701f66' // 失败
    ? 'usercenter/checksetpwd' // 成功
    : 'usercenter/checksetpwd';
  return ajax({
    url,
    data: params,
    method: 'post',
    catchError: true
  })
}

export function setpwd(params) {  // 找回密码-设置新密码
  const url = process.env.NODE_ENV === 'development'
    // ? '/fdeb6107-1448-48e0-8a1c-914f9f701f66' // 失败
    ? 'usercenter/setpwd' // 成功
    : 'usercenter/setpwd';
  return ajax({
    url,
    data: params,
    method: 'post',
    catchError: true
  })
}

export function changepwd(params) {  // 用户修改密码
  const url = process.env.NODE_ENV === 'development'
    // ? '/fdeb6107-1448-48e0-8a1c-914f9f701f66' // 失败
    ? 'usercenter/changepwd' // 成功
    : 'usercenter/changepwd';
  return ajax({
    url,
    data: params,
    method: 'post',
    catchError: true
  })
}

export function sendcodeforregister(params) {  // 找回密码-验证码验证
  const url = process.env.NODE_ENV === 'development'
    // ? '/fdeb6107-1448-48e0-8a1c-914f9f701f66' // 失败
    ? 'usercenter/sendcodeforregister' // 成功
    : 'usercenter/sendcodeforregister';
  return ajax({
    url,
    data: params,
    method: 'post',
    catchError: true
  })
}