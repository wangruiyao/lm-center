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
        payType: '' // 支付方式
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
          this.payType = 'PT00'
        } else {
          this.payType = 'PT01'

        }
        console.log(this.payType)
      },
      wxToPay() {
        const reqParams = {
          param: this.getUrlParams('param'),	//加密支付参数	STRING	必填
          paytype: this.payType,//	支付方式（PT00：微信公众号支付；PT01:微信H5支付）	STRING	必填
        }
        topay(reqParams).then(rsp => {
          // console.log(rsp)
          window.location.href=rsp.data.mweb_url
        })
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