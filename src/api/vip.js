export function vipinfor (params) {  // 获取用户VIP信息
  const url = process.env.NODE_ENV === 'development'
    // ? '/'
    ? '/a761c48b-01dc-4881-8dc1-a8a6106e1fb5' //成功
    : 'usercenter/vipinfor';
  return ajax({
    url,
    method: 'post',
    data: params,
    catchError: true
  });
}

export function golddetailweek (params) {  // 最近一周升级金
  const url = process.env.NODE_ENV === 'development'
    // ? '/423558d2-9e9d-4eaa-ac06-be9187057452'
    ? '/765c8f18-78b6-4f80-85e6-f1ded5c7fa2d' //成功
    : 'usercenter/golddetailweek';
  return ajax({
    url,
    method: 'post',
    data: params,
    catchError: true
  });
}

export function despoitdetail (params) {  // 保证金缴纳提取记录
  const url = process.env.NODE_ENV === 'development'
    ? '/7bbf1760-a570-4275-903c-fb637e117d0d'
    : 'usercenter/despoitdetail';

  return ajax({
    url,
    method: 'post',
    data: params,
    catchError: true
  })
}

export function golddetail (params) {  // 用户升级金明细
  const url = process.env.NODE_ENV === 'development'
    ? '/34f00804-cd7d-499e-a389-f46db9b72244'
    : 'usercenter/golddetail';

  return ajax({
    url,
    method: 'post',
    data: params,
    catchError: true
  })
}