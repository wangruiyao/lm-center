export function getuserawardaccount (params) {  // 获取登录用户佣金账户
  const url = process.env.NODE_ENV === 'development'
    // ? '/6a4e6150-b864-4836-a351-62d3b4132747'//已绑定
    // ? '/0b1d6e3c-4d39-453c-aa20-735c2e062922' //未绑定
    ? 'awardcenter/getuserawardaccount'//已绑定
    : 'awardcenter/getuserawardaccount';
  return ajax({
    url,
    method: 'post',
    data: params,
    catchError: true
  });
}
export function getissueawardlist (params) {  // 获取用户提现佣金明细
  const url = process.env.NODE_ENV === 'development'
    // ? '/9a490802-f8ed-4090-9568-b15e60274ac3'
    // ? 'goods/listGoods' //成功
  ? 'awardcenter/getissueawardlist'
  : 'awardcenter/getissueawardlist';
  return ajax({
    url,
    method: 'post',
    data: params,
    catchError: true
  });
}

export function getawardissuelist (params) {  // 佣金提现查询列表
  const url = process.env.NODE_ENV === 'development'
    // ? '/81bf0436-dd07-486b-b82a-13c3e6cd6e3b'
    // ? 'goods/listGoods' //成功
    ? 'awardcenter/getawardissuelist'
    : 'awardcenter/getawardissuelist';
  return ajax({
    url,
    method: 'post',
    data: params,
    catchError: true
  });
}

export function getawarddetaillist (params) {  // 佣金明细查询列表
  const url = process.env.NODE_ENV === 'development'
    // ? '/c3706cc5-38b7-42f4-acfe-a72829381f54'
    // ? 'goods/listGoods' //成功
    ?'awardcenter/getawarddetaillist'
    : 'awardcenter/getawarddetaillist';
  return ajax({
    url,
    method: 'post',
    data: params,
    catchError: true
  });
}

export function bandalipayaccount (params) {  // 绑定佣金账户
  const url = process.env.NODE_ENV === 'development'
    // ? '/2b49b760-5c23-4b2b-bbf3-53522b017f68'
    // ? 'goods/listGoods' //成功
    ?'awardcenter/bandalipayaccount'
    : 'awardcenter/bandalipayaccount';
  return ajax({
    url,
    method: 'post',
    data: params,
    catchError: true
  });
}

export function getwechatbyopenid (params) {  // 根据openid获取当前微信用户信息
  const url = process.env.NODE_ENV === 'development'
    // ? '/81c0a56a-5a16-4268-bff2-be060e86b7b0'
    // ? 'goods/listGoods' //成功
    ? 'awardcenter/getwechatbyopenid'
    : 'awardcenter/getwechatbyopenid';
  return ajax({
    url,
    method: 'post',
    data: params,
    catchError: true
  });
}

export function querylatestopertion (params) {  // 获取提现记录最新操作记录
  const url = process.env.NODE_ENV === 'development'
    // ? '/ecb41552-a2f1-489b-92ad-24452d620c0e'
    // ? 'goods/listGoods' //成功
    ? 'awardcenter/querylatestopertion'
    : 'awardcenter/querylatestopertion';
  return ajax({
    url,
    method: 'post',
    data: params,
    catchError: true
  });
}

export function userissueaward (params) {  // 获取提现记录最新操作记录
  const url = process.env.NODE_ENV === 'development'
    // ? '/ecb41552-a2f1-489b-92ad-24452d620c0e'
    // ? 'goods/listGoods' //成功
    ? 'awardcenter/userissueaward'
    : 'awardcenter/userissueaward';
  return ajax({
    url,
    method: 'post',
    data: params,
    catchError: true
  });
}