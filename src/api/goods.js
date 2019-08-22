import store from 'store'
export function listGoods (params) {  // 获取商品列表
  const url = process.env.NODE_ENV === 'development'
    // ? '/5c510e3c-41d8-42e9-acc4-5f121486181b'
    ? 'goods/listGoods' //成功
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

//goodslist

export function goodslist (params) {  // 商品列表
  params = params === undefined ? {} : params;
  const url = process.env.NODE_ENV === 'development'
    ? 'goodscenter/goodslist' //成功
    : 'goodscenter/goodslist';
  const reqConfig = {
    query: '',  // 关键字
    netop: '', // 运营商
    props: {},
    sort: 'SR00', //SR00：综合排序；SR01：销量排序；
    sortrules: '0',   //	0：升序；1：倒序
    pagenum: '0',
    pagesize: '10',
    goodstype: '', //商品类型
    catalog: '' //类目
  };
  const reqParams = Object.assign(reqConfig, params);
  return ajax({
    url,
    method: 'post',
    data: reqParams,
    catchError: true
  });
}

export function morecondition (params) {  // 商品列表更多筛选条件
  const url = process.env.NODE_ENV === 'development'
    ? 'goodscenter/morecondition' //成功
    : 'goodscenter/morecondition';
  return ajax({
    url,
    method: 'post',
    data: params,
    catchError: true
  });
}


export function goodinfor (params) {  // 商品详情
  const url = process.env.NODE_ENV === 'development'
    ? 'goodscenter/goodinfor' //成功
    : 'goodscenter/goodinfor';
  return ajax({
    url,
    method: 'post',
    data: params,
    catchError: true
  });
}