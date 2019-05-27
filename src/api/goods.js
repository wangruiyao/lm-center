export function listGoods (params) {  // 获取商品列表
  const url = process.env.NODE_ENV === 'development'
    // ? '/5c510e3c-41d8-42e9-acc4-5f121486181b'
    ? '/af723eed-b176-4d0a-ba0d-9afa2cc20690' //成功
    : 'goods/listGoods';
  return ajax({
    url,
    method: 'post',
    data: params,
    catchError: true
  });
}

export function getGoodsDetail (params) {  // 获取商品基本信息
  const url = process.env.NODE_ENV === 'development'
    ? '/27201d1b-6ad3-45fa-a208-68301b331962' //成功
    : 'goods/getGoodsDetail';
  return ajax({
    url,
    method: 'post',
    data: params,
    catchError: true
  });
}