(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74b89a6c"],{"104d":function(e,r,n){"use strict";n.r(r);var t=function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("div",{attrs:{id:"number-check-item"},on:{click:e.click}},[n("div",{staticClass:"number"},[n("span",[e._v(e._s(e.numberInfo.serialnumber.substr(0,3)))]),n("span",{staticClass:"blue"},[e._v(e._s(e.numberInfo.serialnumber.substr(3,4)))]),n("span",[e._v(e._s(e.numberInfo.serialnumber.substr(7,4)))])]),n("div",{staticClass:"number-info"},[n("span",[e._v(e._s(e.cityName))]),n("span",{staticClass:"red"},[e._v("￥\n      "),n("span",[e._v(e._s(Number(e.numberInfo.price).toFixed(2).toString().split(".")[0]))]),n("span",[e._v(".")]),e._v(e._s(Number(e.numberInfo.price).toFixed(2).toString().split(".")[1])+"\n    ")])])])},a=[],s={name:"OrderNumberCheckItem",props:{numberInfo:{type:Object,default(){return{}}},cityName:{type:"",default:""}},methods:{click(){this.$emit("click")}}},i=s,c=(n("d5c2"),n("17cc")),o=Object(c["a"])(i,t,a,!1,null,"5c68209a",null);r["default"]=o.exports},1391:function(e,r,n){r=e.exports=n("690e")(!1),r.push([e.i,".blue[data-v-5c68209a]{color:#5f8eee}.red[data-v-5c68209a]{color:#ff2d00}#number-check-item[data-v-5c68209a]{width:4.346667rem;height:1.733333rem;background:#fff;border:.026667rem solid #e1e1e1;box-shadow:0 2PX 0 0 rgba(4,0,0,.24);-webkit-border-radius:.133333rem;-moz-border-radius:.133333rem;border-radius:.133333rem;margin-bottom:.426667rem;color:#666;padding:.266667rem;display:-webkit-flex;display:flex;flex-direction:column;justify-content:space-between;align-items:center}#number-check-item .number span[data-v-5c68209a]{font-size:.426667rem;padding:.08rem}#number-check-item .number-info>span[data-v-5c68209a]{margin-right:.133333rem}#number-check-item .number-info>span>span[data-v-5c68209a]{font-size:.373333rem}",""])},d5c2:function(e,r,n){"use strict";var t=n("d978"),a=n.n(t);a.a},d978:function(e,r,n){var t=n("1391");"string"===typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);var a=n("85cb").default;a("4bb03938",t,!0,{sourceMap:!1,shadowMode:!1})}}]);