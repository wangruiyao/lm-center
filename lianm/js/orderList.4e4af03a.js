(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["orderList"],{"3f9b":function(t,r,e){"use strict";var o=e("f789"),n=e.n(o);n.a},"4e00":function(t,r,e){r=t.exports=e("690e")(!1),r.push([t.i,"#order-list[data-v-1c3ed2c4]{width:10rem}#order-list .header-right[data-v-1c3ed2c4]{margin-left:-.266667rem}#order-list .header-right span[data-v-1c3ed2c4]{margin-right:.266667rem}#order-list .header-right .header-icon[data-v-1c3ed2c4]{font-size:.48rem}#order-list .slider-right .contition-item[data-v-1c3ed2c4]{font-size:.373333rem}#order-list .order-list-scroll[data-v-1c3ed2c4]{margin-top:1.173333rem;padding:.266667rem}#order-list .order-list-scroll .search-no-list[data-v-1c3ed2c4]{width:10rem;height:2.666667rem;display:-webkit-flex;display:flex;flex-direction:column;justify-content:center;align-items:center}",""])},"703e":function(t,r,e){"use strict";e.r(r);var o=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"lm-container",attrs:{id:"order-list"}},[e("lm-header",{attrs:{title:"订单查询"}},[e("div",{staticClass:"header-right",attrs:{slot:"right"},slot:"right"},[e("span",{staticClass:"lm-icon icon iconfont header-icon",on:{click:function(r){return r.stopPropagation(),t.go("orderListCheck")}}},[t._v("")]),e("span",{staticClass:"lm-icon icon iconfont"},[t._v("")])])]),e("order-list-tab-bar",{attrs:{"act-tab":t.actTab},on:{handleFilterClick:t.handleFilterClick,changeTab:t.changeTab}}),e("lm-slide-right",{staticClass:"slider-right",attrs:{"slide-visiblity":t.slideVisiblity},on:{reset:t.resetConditon,confirm:t.changeTab,handleMaskClick:t.maskClick}},[e("div",{staticClass:"contition-item"},[e("nut-textinput",{attrs:{label:"订单：",placeholder:"请输入订单号",clearBtn:!0,hasBorder:!1,disabled:!1},model:{value:t.ordersn,callback:function(r){t.ordersn=r},expression:"ordersn"}})],1),e("div",{staticClass:"contition-item"},[e("nut-textinput",{attrs:{label:"联系人：",placeholder:"请输入联系人姓名",hasBorder:!1,clearBtn:!0,disabled:!1},model:{value:t.contact,callback:function(r){t.contact=r},expression:"contact"}})],1),e("div",{staticClass:"contition-item"},[e("nut-textinput",{attrs:{label:"联系方式：",placeholder:"请输入联系电话",hasBorder:!1,clearBtn:!0,disabled:!1},model:{value:t.contacttel,callback:function(r){t.contacttel=r},expression:"contacttel"}})],1)]),e("lm-scroll",{ref:"wrapper",attrs:{pullup:!0,listenScroll:!0},on:{setScroll:t.setScroll,scrollToEnd:t.scrollToEnd}},[e("div",{staticClass:"order-list-scroll"},[e("order-ad",[e("div",{attrs:{slot:"close-btn"},slot:"close-btn"},[e("nut-icon",{attrs:{type:"cross",size:"15px",color:"#fff"}})],1)]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.noOrder,expression:"noOrder"}],staticClass:"search-no-list"},[t._v("您还没有相关订单~")]),t._l(t.orderList,function(r){return e("order-list-item",{attrs:{"goods-info":r},on:{goDetail:function(e){return t.goDetail(r)}}})})],2)]),e("transition",{attrs:{"enter-active-class":t.$route.meta.pageIn,"leave-active-class":t.$route.meta.pageOut}},[e("router-view",{on:{searchByKeyWords:t.searchByKeyWords}})],1)],1)},n=[],a=e("f8b7");const i=t=>e.e("chunk-4c7d6adb").then(function(){var r=[e("9335")];t.apply(null,r)}.bind(this)).catch(e.oe),s=t=>Promise.all([e.e("chunk-2d230a62"),e.e("chunk-7eedab92")]).then(function(){var r=[e("1ff0")];t.apply(null,r)}.bind(this)).catch(e.oe),c=t=>Promise.all([e.e("chunk-2d230a62"),e.e("chunk-6c64d678")]).then(function(){var r=[e("fd2c")];t.apply(null,r)}.bind(this)).catch(e.oe),d=t=>e.e("chunk-5007ba81").then(function(){var r=[e("6ed4")];t.apply(null,r)}.bind(this)).catch(e.oe),l=t=>e.e("chunk-62d1a094").then(function(){var r=[e("8c75")];t.apply(null,r)}.bind(this)).catch(e.oe),u=t=>e.e("chunk-10e3942e").then(function(){var r=[e("ef87")];t.apply(null,r)}.bind(this)).catch(e.oe);var h={name:"OrderList",components:{OrderAd:u,OrderListItem:l,LmScroll:s,LmSlideRight:c,OrderListTabBar:d,LmHeader:i},data(){return{actTab:0,slideVisiblity:!1,pagenum:1,pagesize:10,orderList:[],total:0,keywords:"",ordersn:"",contact:"",contacttel:"",searchType:"",noOrder:!1}},mounted(){if(this.$route.params.hasOwnProperty("type")){const t=this.$route.params.type;this.actTab=t+1}this.orderListByCondition()},methods:{setScroll(t){this.scroll=t},maskClick(){this.slideVisiblity=!1},handleFilterClick(){this.slideVisiblity=!this.slideVisiblity},changeTab(t){this.scroll.finishPullUp(),this.actTab=t,this.pagenum=1,this.orderList=[],this.orderListByCondition()},goDetail(t){goforward("orderDetail",{orderinfo:JSON.stringify({orderid:t.key})})},go(t){goforward(t)},resetConditon(){this.ordersn="",this.contact="",this.contacttel=""},orderListByCondition(){this.searchType="orderListByCondition",this.maskClick();const t=this,r={state:(this.actTab-1>=0?this.actTab-1:"").toString(),ordersn:this.ordersn,contact:this.contact,contacttel:this.contacttel,pagenum:this.pagenum,pagesize:this.pagesize};Object(a["n"])(r).then(r=>{t.orderList.push(...r.data.orderlist),t.noOrder=0===t.orderList.length,t.total=r.data.total,t.orderList.length<t.total&&(t.scroll.finishPullUp(),t.scroll.refresh())})},searchByKeyWords(t){this.keywords=t.keywords,this.pagenum=1,this.orderList=[],this.orderListByKeyWords(t)},orderListByKeyWords(t){this.searchType="orderListByKeyWords";const r=this,e=Object.assign(t,{pagenum:r.pagenum,pagesize:r.pagesize});Object(a["o"])(e).then(t=>{r.orderList.push(...t.data.orderlist),r.noOrder=0===r.orderList.length,r.total=t.data.total,r.orderList.length<r.total&&(r.scroll.finishPullUp(),r.scroll.refresh())})},scrollToEnd(){this.pagenum++,"orderListByCondition"===this.searchType?this.orderListByCondition():"orderListByKeyWords"===this.searchType&&this.orderListByKeyWords({keywords:this.keywords})}}},f=h,p=(e("3f9b"),e("17cc")),m=Object(p["a"])(f,o,n,!1,null,"1c3ed2c4",null);r["default"]=m.exports},f789:function(t,r,e){var o=e("4e00");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=e("85cb").default;n("e4c27854",o,!0,{sourceMap:!1,shadowMode:!1})},f8b7:function(t,r,e){"use strict";function o(t){const r="goodscenter/ordergoodsinfor";return ajax({url:r,method:"post",data:t,catchError:!0})}function n(t){const r="ordercenter/orderserialnumberarea";return ajax({url:r,method:"post",data:t,catchError:!0})}function a(t){const r="goodscenter/orderserialnumber";return ajax({url:r,method:"post",data:t,catchError:!0})}function i(t){const r="lm/effecttype.json";return ajax({url:r,method:"get",catchError:!1})}function s(t){const r="ordercenter/createorder";return ajax({url:r,method:"post",data:t,catchError:!1})}function c(t){const r="ordercenter/createphysicalorder";return ajax({url:r,method:"post",data:t,catchError:!1})}function d(t){console.log(t);const r="ordercenter/uploadimage";return ajax({url:r,method:"post",type:"formData",data:t,catchError:!1})}function l(t){const r="ordercenter/orderlistbycondition";return ajax({url:r,method:"post",data:t,catchError:!1})}function u(t){const r="ordercenter/orderlistbykeywords";return ajax({url:r,method:"post",data:t,catchError:!1})}function h(t){const r="ordercenter/orderdetailbyid";return ajax({url:r,method:"post",data:t,catchError:!0})}function f(t){const r="ordercenter/ordermotifyuser";return ajax({url:r,method:"post",data:t,catchError:!0})}function p(t){const r="lm/applyrefundreason.json";return ajax({url:r,method:"get",catchError:!1})}function m(t){const r="ordercenter/applyrefundgood";return ajax({url:r,method:"post",data:t,catchError:!0})}function g(t){const r="ordercenter/getrefundlist";return ajax({url:r,method:"post",data:t,catchError:!0})}function y(t){const r="ordercenter/getrefundinfor";return ajax({url:r,method:"post",data:t,catchError:!0})}function b(t){const r="ordercenter/getusertradenum";return ajax({url:r,method:"post",data:t,catchError:!0})}function v(t){const r="ordercenter/confirmorder";return ajax({url:r,method:"post",data:t,catchError:!0})}function k(t){const r="common/displayimg";return ajax({url:r,method:"post",data:t,catchError:!0})}function x(t){const r="ordercenter/getrefundgoodsinfor";return ajax({url:r,method:"post",data:t,catchError:!0})}e.d(r,"m",function(){return o}),e.d(r,"r",function(){return n}),e.d(r,"q",function(){return a}),e.d(r,"g",function(){return i}),e.d(r,"d",function(){return s}),e.d(r,"e",function(){return c}),e.d(r,"s",function(){return d}),e.d(r,"n",function(){return l}),e.d(r,"o",function(){return u}),e.d(r,"l",function(){return h}),e.d(r,"p",function(){return f}),e.d(r,"b",function(){return p}),e.d(r,"a",function(){return m}),e.d(r,"j",function(){return g}),e.d(r,"i",function(){return y}),e.d(r,"k",function(){return b}),e.d(r,"c",function(){return v}),e.d(r,"f",function(){return k}),e.d(r,"h",function(){return x})}}]);