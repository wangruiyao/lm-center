<template>
  <div id="pay-check-out-counter" class="lm-container">

    <lm-header>
      <div class="head-left" slot="left">收银台</div>
    </lm-header>
    <lm-scroll ref="wrapper"
               :pullup="true">
      <div class="check-out-inner-scroll">
        <pay-check-out-counter-result :pay-info="payInfo"></pay-check-out-counter-result>
        <pay-check-out-counter-way @wxToPay="wxToPay"></pay-check-out-counter-way>
      </div>

    </lm-scroll>

    <transition :enter-active-class="$route.meta.pageIn"
                :leave-active-class="$route.meta.pageOut">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import {decodeparams, topay} from 'api/pay'
  const LmHeader = resolve => require(['components/lmHeader/LmHeader'], resolve);
  const LmScroll = resolve => require(['components/lmScroll/LmScroll'], resolve);

  const PayCheckOutCounterResult = resolve => require(['./components/PayCheckOutCounterResult'], resolve);
  const PayCheckOutCounterWay = resolve => require(['./components/PayCheckOutCounterWay'], resolve);
  export default {
    name: "PayCheckOutCounter",
    components: {PayCheckOutCounterWay, PayCheckOutCounterResult, LmScroll, LmHeader},
    data(){
      return {
        payInfo:{},
        payType: '', // 支付方式
        openId: ''
      }
    },
    mounted() {
      this.decodeParams();
      this.judgeBrowser();
    },
    methods: {
      getUrlParams(name) {  // 获取地址栏参数
        let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
        let r = window.location.search.substr(1).match(reg);
        if (r != null) return decodeURIComponent(r[2]); return null;
      },
      decodeParams(){ //解密调取支付接口参数
        decodeparams({
          param: this.getUrlParams('param')
        }).then(rsp => {
          this.payInfo = rsp.data
        })
      },
      judgeBrowser() {  // 判断浏览器类型
        let ua = window.navigator.userAgent.toLowerCase();
        if(ua.match(/MicroMessenger/i) == 'micromessenger') {
          this.payType = 'PT00';  // 公众号
          if(!this.getUrlParams('openid')) {
            window.location.href = "http://nmg10010.cn/Wxapi/weixin/api/getopenidwithparam.jsp?appid=wx83643761e4cddf19&redirectcode=lmpayuser&m=getopenid&param="+this.getUrlParams('param')
          }else {
            this.openId = this.getUrlParams('openid');
          }
        } else {  // H5
          this.payType = 'PT01'

        }
        console.log(this.payType)
      },
      wxToPay() {
        const _this = this;
        const reqParams = {
          param: this.getUrlParams('param'),	//加密支付参数	STRING	必填
          paytype: this.payType,//	支付方式（PT00：微信公众号支付；PT01:微信H5支付）	STRING	必填
          openid: this.openId
        }
        topay(reqParams).then(rsp => {
          // console.log(rsp)
          if(_this.payType === 'PT00') {
            const timeStamp = rsp.data.timeStamp;
            const nonceStr = rsp.data.nonceStr;
            const _package = rsp.data.package;
            const signType = rsp.data.signType;
            const paySign = rsp.data.paySign;
            const appId = rsp.data.appId;
            const shopnumber = rsp.data.shopnumber;
            if (typeof WeixinJSBridge == "undefined"){
              if( document.addEventListener ){
                document.addEventListener('WeixinJSBridgeReady', this.onBridgeReady, false);
              }else if (document.attachEvent){
                document.attachEvent('WeixinJSBridgeReady', this.onBridgeReady);
                document.attachEvent('onWeixinJSBridgeReady', this.onBridgeReady);
              }
            }else{
              this.onBridgeReady(timeStamp,nonceStr,_package,signType,paySign,appId,shopnumber);
            }

          } else if(_this.payType === 'PT01') {
            window.location.href=rsp.data.mweb_url
          }
        })
      },
      onBridgeReady(timeStamp,nonceStr,_package,signType,paySign,appId,shopnumber){
        WeixinJSBridge.invoke(
          'getBrandWCPayRequest', {
            "appId":appId,     //公众号名称，由商户传入
            "timeStamp":timeStamp,//时间戳，自1970年以来的秒数
            "nonceStr":nonceStr, //随机串
            "package":_package,
            "signType":signType,         //微信签名方式：
            "paySign":paySign //微信签名
          },
          function(res){
            //支付成功
            if(res.err_msg == "get_brand_wcpay_request:ok" ){
              // 使用以上方式判断前端返回,微信团队郑重提示：
              //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
              setTimeout(function(){
                window.location.href='http://ruiyao.ngrok2.xiaomiqiu.cn/pay/result?paysn='+shopnumber;
              }, 5000);
            }
            //支付失败
            else{
            }
          }
        );
      }
    }
  }
</script>

<style lang="scss" scoped>
  #pay-check-out-counter {
    width: 375px;
    background: #fff;
    .head-left {
      line-height: 15px;
      margin-left: 10px;
    }

    .check-out-inner-scroll {
      margin-top: -10px;
    }
  }

</style>