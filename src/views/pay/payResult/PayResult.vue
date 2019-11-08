<template>
  <div id="pay-result" class="lm-container-blank">
    <img :src="payResultPic">
    <p class="result">{{payResult}}</p>
    <p>{{payResultDesc}}</p>
    <p>您可以<span class="link" @click="go('shopCenter')">继续购物</span>或者查看<span class="link" @click="go('shopCenter')">该笔订单</span></p>
  </div>
</template>

<script>
  import {getPayResult} from 'api/pay'
  export default {
    name: "PayResult",
    data() {
      return {
        paysn: '',
        status: 'PS00'  // 支付状态结果, PS00:待支付 PS01:支付成功 PS02：支付失败
      }
    },
    mounted() {
      // this.paysn = this.getUrlParams('paysn');
      getPayResult({
        paysn: this.getUrlParams('paysn')
      }).then(rsp => {
        this.status = rsp.data.status
      })
    },
    computed: {
      payResult() { // 支付结果
        return this.status === 'PS01' ? '支付成功!'
          : this.status === 'PS02' ? '支付失败!'
            : '等待支付结果...'
      },
      payResultPic() {  // 支付结果图片
        return this.status === 'PS01' ? require('assets/images/pay/pay-result-success.png')
          : this.status === 'PS02' ? require('assets/images/pay/pay-result-fail.png')
            : require('assets/images/pay/pay-result-waiting.png')
      },
      payResultDesc() {
        return this.status === 'PS01' ? '恭喜您成功支付，'
          : this.status === 'PS02' ? ""
            : ""
      }
    },
    methods: {
      getUrlParams(name) {  // 获取地址栏参数
        let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
        let r = window.location.search.substr(1).match(reg);
        if (r != null) return decodeURIComponent(r[2]); return null;
      },
      go(path) {
        goforward(path);
      }
    }
  }
</script>

<style lang="scss" scoped>
  #pay-result {
    >img {
      width: 186px;
    }
    z-index: 1000;
    background: #fff;
    @include flex-column(center);
    >p {
      font-size: 14px;
      .link {
        color: $blue-color-link;
      }
    }
    .result {
      font-size: 24px;
      padding: 20px 0;
    }

  }
</style>