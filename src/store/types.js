/*
* 内定义常量，使用常量替代mutation事件类型
* */

const SET_PAGE_STATION = 'SET_PAGE_STATION';    // 切换页面动画状态
const SET_USER_INFO = 'SET_USER_INFO';    // 添加用户信息
const USER_UPDATE_INFO = 'USER_UPDATE_INFO';    // 更新用户信息
const SET_HISTORY_PAGE = 'SET_HISTORY_PAGE';    // 记录上一页地址
const SET_VIP_INFO = 'SET_VIP_INFO';  // 记录VIP信息
const SET_PAGE_SCROLL_STATE = 'SET_PAGE_SCROLL_STATE';  // 更新路由过渡动效状态
const SET_HOME_TAB = 'SET_HOME_TAB';
const SET_SHOP_SCROLL_TOP = 'SET_SHOP_SCROLL_TOP';  // 更新商城首页滚动位置
const SET_HOT_CATEGORY = 'SET_HOT_CATEGORY'; //
const SET_GOODS_LIST_QUERY_PARAMS = 'SET_GOODS_LIST_QUERY_PARAMS';  // 更新商品列表查询参数
const SET_ORDER_INFO = 'SET_ORDER_INFO';  // 添加运营商下单参数
const ClEAR_ORDER_INFO = 'ClEAR_ORDER_INFO'; // 清除下单参数
const SET_ORDER_LIST_INFO = 'SET_ORDER_LIST_INFO';// 添加实物商品下单参数
const SET_USER_AWARD_ACCOUNT = 'SET_USER_AWARD_ACCOUNT';// 更新登录用户佣金账户

export default {
  USER_UPDATE_INFO,
  SET_PAGE_STATION,
  SET_HISTORY_PAGE,
  SET_USER_INFO,
  SET_VIP_INFO,
  SET_PAGE_SCROLL_STATE,
  SET_HOME_TAB,
  SET_SHOP_SCROLL_TOP,
  SET_HOT_CATEGORY,
  SET_GOODS_LIST_QUERY_PARAMS,
  SET_ORDER_INFO,
  ClEAR_ORDER_INFO,
  SET_ORDER_LIST_INFO,
  SET_USER_AWARD_ACCOUNT
}