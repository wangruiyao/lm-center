export function indexgoodstype (params) {  //
  const url = process.env.NODE_ENV === 'development'
    // ? '/'
    ? 'lm/indexgoodstype.json' //成功
    : 'lm/indexgoodstype.json';
  return ajax({
    url,
    method: 'get',
    catchError: true
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
    catchError: true
  });
}

export function hotsalescroll (params) {  //热销热门
  const url = process.env.NODE_ENV === 'development'
    ? '/3491c31f-9b2f-465b-8340-be5cfcde0e3d'
    // ? 'lm/hotsale.json' //成功
    : 'busconfcenter/hotsaletop';
  return ajax({
    url,
    method: 'post',
    catchError: true
  });
}

export function viewbanner (params) {  //首页轮播图
  const url = process.env.NODE_ENV === 'development'
    ? '/dc443b58-ae73-4d8a-af41-09b695e56e87'
    // ? 'lm/hotsale.json' //成功
    : 'busconfcenter/viewbanner';
  return ajax({
    url,
    method: 'post',
    catchError: true
  });
}

export function topsearchcollect (params) {  //首页轮播图
  const url = process.env.NODE_ENV === 'development'
    ? 'lmfrontstage/goodscenter/hotsalelist'
    // ? 'lm/hotsale.json' //成功
    : 'lmfrontstage/goodscenter/hotsalelist';
  return ajax({
    url,
    method: 'post',
    catchError: true
  });
}