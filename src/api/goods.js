export function listGoods (params) {  // 用户账号是否存在
  const url = process.env.NODE_ENV === 'development'
    // ? '/5c510e3c-41d8-42e9-acc4-5f121486181b'
    ? '/af723eed-b176-4d0a-ba0d-9afa2cc20690' //成功
    : 'authorize/listGoods';
  return ajax({
    url,
    method: 'post',
    data: params,
    catchError: true
  });
}