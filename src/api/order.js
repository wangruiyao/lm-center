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