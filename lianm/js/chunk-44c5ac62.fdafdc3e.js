(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44c5ac62"],{"0f8b":function(t,e,r){e=t.exports=r("690e")(!1),e.push([t.i,".right-info[data-v-459d88b1]{white-space:nowrap;min-width:1.333333rem}.number-check[data-v-459d88b1]{width:3.466667rem;color:#333}#order-common-info[data-v-459d88b1]{width:10rem;background:#fff;box-shadow:0 .133333rem .133333rem -.133333rem #ccc}#order-common-info .cell-input[data-v-459d88b1]{width:100%;color:#333}#order-common-info .info-operator .force-type[data-v-459d88b1]{color:#333;margin-right:.4rem}#order-common-info .info-operator .advance[data-v-459d88b1]{width:2.666667rem;display:-webkit-flex;display:flex;justify-content:flex-end;align-items:center}#order-common-info .info-operator .advance input[data-v-459d88b1]{text-align:center;width:1.333333rem}#order-common-info .info-operator .address[data-v-459d88b1]{color:#5f8eee;font-size:.533333rem!important}",""])},3337:function(t,e,r){"use strict";var i=r("3a49"),o=r.n(i);o.a},"3a49":function(t,e,r){var i=r("0f8b");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=r("85cb").default;o("2b459294",i,!0,{sourceMap:!1,shadowMode:!1})},4390:function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"order-common-info"}},["0"===t.goodType||"1"===t.goodType?r("div",{staticClass:"info-operator"},[r("div",{directives:[{name:"show",rawName:"v-show",value:"0"===t.goodType,expression:"goodType === `0`"}]},[r("lm-cell",{attrs:{title:"选择号码",disable:!1,"font-large":!0},on:{click:function(e){return t.goNumberCheck()}}},[r("div",{staticClass:"right-info number-check",attrs:{slot:"right-text"},slot:"right-text"},[r("span",[t._v(t._s(t.serialNumber))])])]),r("lm-cell",{attrs:{title:"生效方式",fontSize:"14px",disable:!1,"font-large":!0},on:{click:function(e){return t.showPopup("生效方式")}}},[r("div",{staticClass:"right-info force-type",attrs:{slot:"right-text"},slot:"right-text"},[t._v(t._s(t.effectType.name))])])],1),r("div",{directives:[{name:"show",rawName:"v-show",value:"1"===t.goodType,expression:"goodType === `1`"}]},[r("lm-cell",{attrs:{title:"查询宽带标准地址",disable:!0,"font-large":!0,rightStyle:t.rightStyle}},[r("div",{staticClass:"right-info",attrs:{slot:"right-text"},on:{click:function(e){return e.stopPropagation(),t.go("OrderBroadBand")}},slot:"right-text"},[r("span",{staticClass:"lm-icon icon iconfont address"},[t._v("")])])]),r("lm-cell",{attrs:{title:"装机地址",disable:!0,rightStyle:t.rightStyle,"font-large":!0}},[r("div",{staticClass:"cell-input",attrs:{slot:"cellInput"},slot:"cellInput"},[r("nut-textinput",{attrs:{placeholder:"请填写或查询宽带装机地址",disabled:!1,clearBtn:!1,hasBorder:!1},model:{value:t.installaddr,callback:function(e){t.installaddr=e},expression:"installaddr"}})],1)])],1),r("lm-cell",{attrs:{title:"增加预存款",disable:!0,rightStyle:t.rightStyle,"font-large":!0}},[r("div",{staticClass:"right-info advance",attrs:{slot:"right-text"},slot:"right-text"},[r("label",[r("input",{directives:[{name:"model",rawName:"v-model.number",value:t.serialprice,expression:"serialprice",modifiers:{number:!0}}],attrs:{type:"number",placeholder:"0",min:"0"},domProps:{value:t.serialprice},on:{input:function(e){e.target.composing||(t.serialprice=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),t._v("\n          元")])])],1):t._e()])},o=[];const a=t=>r.e("chunk-2557159a").then(function(){var e=[r("8b1a")];t.apply(null,e)}.bind(this)).catch(r.oe);var n={name:"OrderCommonInfo",components:{LmCell:a},props:{goodType:{type:String,default:"commodity"},installAddr:{type:String,default:""},serialNumber:{type:String,default:""},serialProvince:{type:String,default:""},serialCuity:{type:String,default:""},effectType:{type:Object,default(){return{}}}},data(){return{installaddr:"",serialprice:"",goodsNum:1,rightStyle:{color:"#333"}}},methods:{go(t){goforward(t)},showPopup(t){this.$emit("showPop",t)},goNumberCheck(){this.$emit("goNumberCheck")},onPhysicalSubmit(){return{}},operatorSubmit(){const t={};return t.serialprice=""===this.serialprice?"0":accMul(Number(this.serialprice),100).toString(),"0"===this.goodType?!!this.checkNumberInfo()&&(t.effecttype=this.effectType.id,t.serialnumber=this.serialNumber,t.serialprovince=this.serialProvince,t.serialcity=this.serialCuity,t):"1"===this.goodType?!!this.checkBroadBandInfo()&&(t.installaddr=this.installaddr,t):void 0},checkNumberInfo(){return""!==this.serialNumber||(Toast("请选择号码!"),!1)},checkBroadBandInfo(){return""!==this.installaddr||(Toast("请选择装机地址！"),!1)}},watch:{installAddr(t){if(this.installaddr=t,Number(1===t))return!1;console.log("宽带标准地址",this.installaddr)},serialprice(t){if(t=t.toString(),t<0)Message("预存款金额不能低于0元"),this.serialprice=0;else{if(-1!==t.indexOf(".")){const e=t.substring(t.indexOf(".")+1,t.length);e.length>2&&(Toast("预存款金额最小单位为分"),this.serialprice=Number(t).toFixed(2))}const e={serialprice:accMul(Number(t),100).toString()};this.$emit("setSerialPrice",e)}}}},s=n,l=(r("3337"),r("17cc")),c=Object(l["a"])(s,i,o,!1,null,"459d88b1",null);e["default"]=c.exports}}]);