(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-360c13c4"],{"361a":function(e,o,r){"use strict";var t=r("ad08"),a=r.n(t);a.a},"63f9":function(e,o,r){o=e.exports=r("690e")(!1),o.push([e.i,'.red[data-v-f2864ea0]{color:#ff2d00}.blue[data-v-f2864ea0]{color:#5f8eee}#order-detail-good-info[data-v-f2864ea0]{width:10rem;background:#fff;box-shadow:0 .053333rem .053333rem 0 rgba(0,0,0,.13);margin-bottom:.266667rem;padding:0 .266667rem .266667rem;border-radius:0 0 .106667rem .106667rem}#order-detail-good-info .header[data-v-f2864ea0]{padding:0 .24rem;height:.933333rem;display:-webkit-flex;display:flex;justify-content:space-between;align-items:center}#order-detail-good-info .header .header-left img[data-v-f2864ea0]{margin-right:.266667rem;margin-bottom:.133333rem}#order-detail-good-info .header .header-left .iconfont[data-v-f2864ea0]{margin-left:.266667rem;color:#999}#order-detail-good-info .header .header-right .close-time[data-v-f2864ea0]{font-size:.24rem;color:#999}#order-detail-good-info .header .header-right .order-type[data-v-f2864ea0]{color:#f75929}#order-detail-good-info .header>div[data-v-f2864ea0]{height:100%;display:-webkit-flex;display:flex;justify-content:space-between;align-items:center}#order-detail-good-info .header img[data-v-f2864ea0]{width:.533333rem}#order-detail-good-info .goods-box[data-v-f2864ea0]:after{content:"";position:absolute;width:100%;height:.026667rem;bottom:0;left:0;background-image:-moz-linear-gradient(0deg,#5befe1 0,#6984ee 50%,#c372e6 100%);background-image:-webkit-linear-gradient(0deg,#5befe1,#6984ee 50%,#c372e6);background-image:-ms-linear-gradient(0deg,#5befe1 0,#6984ee 50%,#c372e6 100%)}#order-detail-good-info .goods-box[data-v-f2864ea0]{padding:0 .133333rem .133333rem;position:relative;margin-bottom:.266667rem}#order-detail-good-info .goods-box .center[data-v-f2864ea0]{display:-webkit-flex;display:flex;justify-content:baseline;align-items:end}#order-detail-good-info .goods-box .center>img[data-v-f2864ea0]{flex-shrink:0;width:2.213333rem;height:2.213333rem}#order-detail-good-info .goods-box .center .order-info[data-v-f2864ea0]{color:#666;margin-left:.266667rem;height:2.213333rem;display:-webkit-flex;display:flex;flex-direction:column;justify-content:space-between;align-items:baseline}#order-detail-good-info .goods-box .center .order-info>span[data-v-f2864ea0]{color:#999}#order-detail-good-info .goods-box .center .order-info .title[data-v-f2864ea0]{line-height:.373333rem}#order-detail-good-info .goods-box .center .order-info .title>span[data-v-f2864ea0]{color:#999}#order-detail-good-info .goods-box .center .order-info .price[data-v-f2864ea0]{line-height:.426667rem}#order-detail-good-info .goods-box .center .order-info .price span[data-v-f2864ea0]{font-size:.426667rem;margin-right:.133333rem}#order-detail-good-info .goods-box .footer[data-v-f2864ea0]{padding:.133333rem;display:-webkit-flex;display:flex;justify-content:space-between;align-items:center}#order-detail-good-info .goods-box .footer .btn[data-v-f2864ea0]{display:-webkit-flex;display:flex;flex-direction:column;justify-content:center;align-items:center;width:2.133333rem;height:.8rem;font-size:.373333rem;color:#666;border-radius:.106667rem;border:.026667rem solid #666}#order-detail-good-info .price-box .price-item[data-v-f2864ea0]{color:#7c7c7c;padding:0 .133333rem;display:-webkit-flex;display:flex;justify-content:space-between;align-items:center}#order-detail-good-info .price-box .price-total[data-v-f2864ea0]{font-size:.373333rem;padding:.133333rem;display:-webkit-flex;display:flex;justify-content:space-between;align-items:center}#order-detail-good-info .price-box .price-total .price-number[data-v-f2864ea0]{color:#ec4747}',""])},7621:function(e,o,r){"use strict";r.r(o);var t=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{attrs:{id:"order-detail-good-info"}},[t("div",{staticClass:"header"},[t("div",{staticClass:"header-left"},[t("img",{attrs:{src:r("9d64")}}),t("span",[e._v(e._s(e.netLabel))]),t("span",{staticClass:"lm-icon icon iconfont"},[e._v("")])]),t("div",{staticClass:"header-right"},[t("span",{directives:[{name:"show",rawName:"v-show",value:"0"===e.orderInfo.status,expression:"orderInfo.status === '0'"}],staticClass:"close-time"},[e._v("（交易关闭："+e._s(e.closeTime)+"）")]),t("span",{staticClass:"order-type"},[e._v(e._s(e.orderInfo.statusdesc))])])]),e._l(e.orderGoods,function(o){return t("div",{staticClass:"goods-box",on:{click:function(r){return e.goOrderDetail(o)}}},[t("div",{staticClass:"center"},[t("img",{attrs:{src:o.goodspic}}),t("div",{staticClass:"order-info"},[t("div",{staticClass:"title"},[e._v("\n          "+e._s(o.goodsname)+"\n          "),t("span",[e._v(e._s(o.goodstitle))])]),t("div",{directives:[{name:"show",rawName:"v-show",value:0===e.orderInfo.order_type,expression:"orderInfo.order_type === 0"}],staticClass:"title"},[e._v("\n          开户号码\n          "),t("span",[e._v(e._s(o.serialnumber))])]),t("div",{directives:[{name:"show",rawName:"v-show",value:1===e.orderInfo.order_type,expression:"orderInfo.order_type === 1"}],staticClass:"title"},[e._v("\n          装机地址\n          "),t("span",[e._v(e._s(e.resInfor.installaddr))])]),t("div",{directives:[{name:"show",rawName:"v-show",value:2===e.orderInfo.order_type,expression:"orderInfo.order_type === 2"}],staticClass:"title"},[e._v("\n          商品规格\n          "),e._l(o.specification.cursku,function(o){return t("span",[e._v(e._s(o)+"；")])})],2),t("div",{staticClass:"price"},[e._v("￥"),t("span",{staticClass:"red"},[e._v(e._s((Number(o.price)/100).toFixed(2)))]),t("span",[e._v("x"+e._s(o.amount))])])])]),t("div",{staticClass:"footer"},[e._m(0,!0),t("div",{directives:[{name:"show",rawName:"v-show",value:!["0","6","7"].includes(e.orderInfo.status)&&"0"===o.ordergoodsstate,expression:"(!(['0','6','7'].includes(orderInfo.status))) && order.ordergoodsstate === '0'"}],staticClass:"btn",on:{click:function(r){return e.goRefundApply(o.goodsid)}}},[e._v("申请退货")])])])}),t("div",{staticClass:"price-box"},[t("div",{staticClass:"price-item"},[t("span",[e._v("商品总价")]),t("span",[e._v("￥"+e._s(e.acountPrice(e.price.goods)))])]),t("div",{staticClass:"price-item"},[t("span",[e._v("新增预存款")]),t("span",[e._v("￥"+e._s(e.acountPrice(e.price.sundry)))])]),t("div",{staticClass:"price-item"},[t("span",[e._v("优惠金额")]),t("span",[e._v("￥-"+e._s(e.acountPrice(e.price.discount)))])]),t("div",{staticClass:"price-item"},[t("span",[e._v("运费")]),t("span",[e._v("￥"+e._s(e.acountPrice(e.price.logistics)))])]),t("div",{staticClass:"price-total"},[t("span",[e._v("订单金额")]),t("span",{staticClass:"price-number"},[e._v("￥"+e._s(e.acountPrice(e.price.order)))])])])],2)},a=[function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("div",[e._v("\n        [顺丰]121323142154325\n        "),r("span",{staticClass:"blue"},[e._v(" 复制单号")])])}],i={name:"OrderDetailGoodsInfo",props:{closeTime:{type:String,default:""},orderInfo:{type:Object,default(){return{}}},orderGoods:{type:Array,default(){return[]}},resInfor:{type:Object,default(){return{}}},price:{type:Object,default(){return{}}}},data(){return{netLabel:"",goodImg:r("ad2c")}},watch:{orderGoods(e){this.netLabel=""===e[0].netlabel?"钟华铭":e[0].netlabel}},methods:{acountPrice(e){return(Number(e)/100).toFixed(2)},goRefundApply(e){goforward("orderRefundApply",{orderinfo:JSON.stringify({orderid:this.orderInfo.orderid,goodsid:e})})},goOrderDetail(e){goforward("shopCenterDetail",{params:JSON.stringify({goodsid:e.goodsid,productid:e.productId})}),console.log(e)}}},d=i,s=(r("361a"),r("17cc")),n=Object(s["a"])(d,t,a,!1,null,"f2864ea0",null);o["default"]=n.exports},"9d64":function(e,o,r){e.exports=r.p+"img/logo.1e05f0c9.png"},ad08:function(e,o,r){var t=r("63f9");"string"===typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);var a=r("85cb").default;a("49135c74",t,!0,{sourceMap:!1,shadowMode:!1})},ad2c:function(e,o,r){e.exports=r.p+"img/good.a47d860f.png"}}]);