export function indexgoodstype (params) {  //
  const url = process.env.NODE_ENV === 'development'
    // ? '/'
    ? 'lm/indexgoodstype.json' //成功
    : 'lm/indexgoodstype.json';
  return ajax({
    url,
    method: 'get',
    catchError: false
  });
}

export function hotsale (params) {  //
  const url = process.env.NODE_ENV === 'development'
    // ? '/'
    ? 'lm/hotsale.json' //成功
    : 'lm/hotsale.json';
  return ajax({
    url,
    method: 'get',
    catchError: false
  });
}

export function hotcategory (params) {  // 热门分类
  const url = process.env.NODE_ENV === 'development'
    // ? '/'
    ? 'lm/hotcategory.json' //成功
    : 'lm/hotcategory.json';
  return ajax({
    url,
    method: 'get',
    catchError: false
  });
}

export function hotsalescroll (params) {  //热销热门
  const url = process.env.NODE_ENV === 'development'
    ? 'goodscenter/hotsaletop'
    // ? 'lm/hotsale.json' //成功
    : 'goodscenter/hotsaletop';
  return ajax({
    url,
    method: 'post',
    catchError: true
  });
}

export function viewbanner (params) {  //首页轮播图
  const url = process.env.NODE_ENV === 'development'
    // ? '/dc443b58-ae73-4d8a-af41-09b695e56e87'
    ? 'busconfcenter/viewbanner' //成功
    : 'busconfcenter/viewbanner';
  return ajax({
    url,
    method: 'post',
    catchError: true
  });
}

export function topsearchcollect (params) {  //首页热搜收集
  const url = process.env.NODE_ENV === 'development'
    // ? '867950e3-ca8c-44c4-8815-c66a266f5818'
    ? 'busconfcenter/topsearchcollect' //成功
    : 'busconfcenter/topsearchcollect';
  return ajax({
    url,
    method: 'post',
    data: params,
    catchError: false
  });
}

export function viewsearchcollect (params) {  //首页热搜显示
  const url = process.env.NODE_ENV === 'development'
    // ? '760c7121-ad06-451c-9190-797df8fe10bd'
    ? 'busconfcenter/viewsearchcollect' //成功
    : 'busconfcenter/viewsearchcollect';
  return ajax({
    url,
    method: 'post',
    catchError: false
  });
}

export function viewhotsale (params) {  // 热销货架商品展示
  const url = process.env.NODE_ENV === 'development'
    // ? '47d7cfff-ca37-4361-b1dd-57dabbeaf36a'
    ? 'goodscenter/viewhotsale' //成功
    : 'goodscenter/viewhotsale';
  return ajax({
    url,
    data: params,
    method: 'post',
    catchError: false
  });
}

