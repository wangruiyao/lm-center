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

export function orderlistbykeywords (params) {  //前台-关键字查询订单列表
  const url = process.env.NODE_ENV === 'development'
    // ? '/'
    ? 'ordercenter/orderlistbykeywords' //成功
    : 'ordercenter/orderlistbykeywords';
  return ajax({
    url,
    method: 'post',
    data: params,
    catchError: false
  });
}

export function orderdetailbyid (params) {  // 前台-订单详情
  const url = process.env.NODE_ENV === 'development'
    // ? '/5c510e3c-41d8-42e9-acc4-5f121486181b'
    ? 'ordercenter/orderdetailbyid' //成功
    : 'ordercenter/orderdetailbyid';
  return ajax({
    url,
    method: 'post',
    data: params,
    catchError: true
  });
}

export function ordermotifyuser (params) {  // 前台-订单详情
  const url = process.env.NODE_ENV === 'development'
    // ? '/5c510e3c-41d8-42e9-acc4-5f121486181b'
    ? 'ordercenter/ordermotifyuser' //成功
    : 'ordercenter/ordermotifyuser';
  return ajax({
    url,
    method: 'post',
    data: params,
    catchError: true
  });
}

export function applyrefundreason (params) {  //
  const url = process.env.NODE_ENV === 'development'
    // ? '/'
    ? 'lm/applyrefundreason.json' //成功
    : 'lm/applyrefundreason.json';
  return ajax({
    url,
    method: 'get',
    catchError: false
  });
}

export function applyrefundgood (params) {  // 前台-申请商品退款
  const url = process.env.NODE_ENV === 'development'
    // ? '/5c510e3c-41d8-42e9-acc4-5f121486181b'
    ? 'ordercenter/applyrefundgood' //成功
    : 'ordercenter/applyrefundgood';
  return ajax({
    url,
    method: 'post',
    data: params,
    catchError: true
  });
}

export function getrefundlist (params) {  // 前台-退款单列表
  const url = process.env.NODE_ENV === 'development'
    // ? '/5c510e3c-41d8-42e9-acc4-5f121486181b'
    ? 'ordercenter/getrefundlist' //成功
    : 'ordercenter/getrefundlist';
  return ajax({
    url,
    method: 'post',
    data: params,
    catchError: true
  });
}

export function getrefundinfor (params) {  // 前台-退款单详情
  const url = process.env.NODE_ENV === 'development'
    // ? '/5c510e3c-41d8-42e9-acc4-5f121486181b'
    ? 'ordercenter/getrefundinfor' //成功
    : 'ordercenter/getrefundinfor';
  return ajax({
    url,
    method: 'post',
    data: params,
    catchError: true
  });
}

export function getusertradenum (params) {  // 前台-订单量展示
  const url = process.env.NODE_ENV === 'development'
    // ? '/5c510e3c-41d8-42e9-acc4-5f121486181b'
    ? 'ordercenter/getusertradenum' //成功
    : 'ordercenter/getusertradenum';
  return ajax({
    url,
    method: 'post',
    data: params,
    catchError: true
  });
}

export function confirmorder (params) {  // 前台-订单量展示
  const url = process.env.NODE_ENV === 'development'
    // ? '/5c510e3c-41d8-42e9-acc4-5f121486181b'
    ? 'ordercenter/confirmorder' //成功
    : 'ordercenter/confirmorder';
  return ajax({
    url,
    method: 'post',
    data: params,
    catchError: true
  });
}

export function displayimg (params) {  // 前台-获取图片
  const url = process.env.NODE_ENV === 'development'
    // ? '/5c510e3c-41d8-42e9-acc4-5f121486181b'
    ? 'common/displayimg' //成功
    : 'common/displayimg';
  return ajax({
    url,
    method: 'post',
    data: params,
    catchError: true
  });
}

export function getrefundgoodsinfor (params) {  // 前台-获取退款商品信息
  const url = process.env.NODE_ENV === 'development'
    // ? '/5c510e3c-41d8-42e9-acc4-5f121486181b'
    ? 'ordercenter/getrefundgoodsinfor' //成功
    : 'ordercenter/getrefundgoodsinfor';
  return ajax({
    url,
    method: 'post',
    data: params,
    catchError: true
  });
}