<template>
  <div id="pay-check-out-counter-way">
    <div class="title">选择支付方式</div>
    <div class="pay-way">
      <div class="pay-way-item"
           @click="go()"
           v-for="(i, idx) in payList" :style="{borderBottom:idx === (payList.length-1) ? 'none' : 'solid #D9D9D9 1px'}">
        <div class="left">
          <span :style="{color: i.color}" class="lm-icon icon iconfont">{{i.code}}</span>
        </div>
        <div class="right">
          <span class="pay-way-title">{{i.title}}</span>
          <span class="pay-way-desc">{{i.desc}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PayCheckOutCounterWay",
    data() {
      return {
        payList: [
          {
            code: '\ue63a',
            color: '#40ba49',
            title: '微信支付',
            desc: '推荐微信内使用连萌平台用户支付'
          },
          {
            code: '\ue625',
            color: '#1296db',
            title: '支付宝',
            desc: '推荐阿里系使用连萌平台用户支付'
          },
          {
            code: '\ue6f5',
            color: '#6e70fc',
            title: '推送支付',
            desc: '用户可以将支付链接发送给他人由他人代支付'
          }
        ]
      }
    },
    methods: {
      go() {
        goforward('payLineAddress')
      }
    }
  }
</script>

<style lang="scss" scoped>
  #pay-check-out-counter-way {
    padding: 15px 25px;
    .title {
      font-size: 14px;
    }

    .pay-way {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(3, 90px);
      >.pay-way-item {
        background: #fff;
        @include flex-row(baseline);

        .left{
          flex-shrink: 0;
          >span {
            font-size: 50px;
          }
        }

        .right {
          padding-left: 15px;
          @include flex-column(center,baseline);
          flex-grow: 1;

          .pay-way-title {
            font-size: 16px;
          }

          .pay-way-desc {
            color: #666666;
          }

        }
      }
    }
  }
</style>