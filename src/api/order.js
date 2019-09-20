export function searchorderdetail (params) {  // 订单中心订单详情
  const url = process.env.NODE_ENV === 'development'
    // ? '/5c510e3c-41d8-42e9-acc4-5f121486181b'
    ? '/57c4b60b-42ca-427b-befc-c1fd6046a97f' //成功
    : 'ordercenter/searchorderdetail';
  return ajax({
    url,
    method: 'post',
    data: params,
    catchError: true
  });
}

export function ordergoodsinfor (params) {  // 订单中心订单详情
  const url = process.env.NODE_ENV === 'development'
    // ? '/5c510e3c-41d8-42e9-acc4-5f121486181b'
    ? 'goodscenter/ordergoodsinfor' //成功
    : 'goodscenter/ordergoodsinfor';
  return ajax({
    url,
    method: 'post',
    data: params,
    catchError: true
  });
}

export function orderserialnumberarea (params) {  // 下单-选号区域
  const url = process.env.NODE_ENV === 'development'
    // ? '/5c510e3c-41d8-42e9-acc4-5f121486181b'
    ? 'ordercenter/orderserialnumberarea' //成功
    : 'ordercenter/orderserialnumberarea';
  return ajax({
    url,
    method: 'post',
    data: params,
    catchError: true
  });
}

export function orderserialnumber (params) {  // 下单-下单-号码选择
  const url = process.env.NODE_ENV === 'development'
    // ? '/5c510e3c-41d8-42e9-acc4-5f121486181b'
    ? 'goodscenter/orderserialnumber' //成功
    : 'goodscenter/orderserialnumber';
  return ajax({
    url,
    method: 'post',
    data: params,
    catchError: true
  });
}

export function effecttype (params) {  //生效方式
  const url = process.env.NODE_ENV === 'development'
    // ? '/'
    ? 'lm/effecttype.json' //成功
    : 'lm/effecttype.json';
  return ajax({
    url,
    method: 'get',
    catchError: false
  });
}

export function createorder (params) {  //运营商产品下单
  const url = process.env.NODE_ENV === 'development'
    // ? '/'
    ? 'ordercenter/createorder' //成功
    : 'ordercenter/createorder';
  return ajax({
    url,
    method: 'post',
    data: params,
    catchError: false
  });
}

export function createphysicalorder (params) {  //实物商产品下单
  const url = process.env.NODE_ENV === 'development'
    // ? '/'
    ? 'ordercenter/createphysicalorder' //成功
    : 'ordercenter/createphysicalorder';
  return ajax({
    url,
    method: 'post',
    data: params,
    catchError: false
  });
}

export function uploadimage (params) {  //下单-身份证图片上传
  console.log(params)
  const url = process.env.NODE_ENV === 'development'
    // ? '/'
    ? 'ordercenter/uploadimage' //成功
    : 'ordercenter/uploadimage';
  return ajax({
    url,
    method: 'post',
    type: 'formData',
    data: params,
    catchError: false
  });
}

export function orderlistbycondition (params) {  //前台-条件查询订单列表
  const url = process.env.NODE_ENV === 'development'
    // ? '/'
    ? 'ordercenter/orderlistbycondition' //成功
    : 'ordercenter/orderlistbycondition';
  return ajax({
    url,
    method: 'post',
    data: params,
    catchError: false
  });
}