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