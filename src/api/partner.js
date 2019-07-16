export function parterinfor (params) {  // 获取商品列表
  const url = process.env.NODE_ENV === 'development'
    // ? '/14a77935-c14b-4719-81b7-59482def8767'
    ? 'usercenter/parterinfor' //成功
    : 'usercenter/parterinfor';
  return ajax({
    url,
    method: 'post',
    data: params,
    catchError: true
  });
}