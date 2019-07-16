export function vipinfor (params) {  // 获取用户VIP信息
  const url = process.env.NODE_ENV === 'development'
    // ? '/'
    ? 'usercenter/vipinfor' //成功
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
    ? 'usercenter/golddetailweek' //成功
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
    ? 'usercenter/despoitdetail'
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
    ? 'usercenter/golddetail'
    : 'usercenter/golddetail';

  return ajax({
    url,
    method: 'post',
    data: params,
    catchError: true
  })
}