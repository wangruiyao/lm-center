
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
  return ajax({
    url: '/emarketOpenController/addressSearch',
    method: 'post',
    data: params,
    catchError: true
  });
}

export function userlogin (params) {  // 用户登录接口
  return '登录成功'
}