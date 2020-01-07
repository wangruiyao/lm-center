<template>
  <div class="account-check">
    <div class="account-check-item" v-for="item in iconList"
         :key="item.id"
         :style="{filter:(item.name ==='微信'&&!isWx)?'grayscale(100%)':'grayscale(0%)'}">
      <span class="icon iconfont" :style="{color: item.color}">{{item.icon}}</span>
      <div class="check-item-right">
        <span class="check-item-name">选择{{item.name}}作为佣金账户</span>
        <span class="check-item-desc">{{item.desc}}</span>
        <div class="check-item-btn" @click="goToBindAccount(item.id)">去绑定</div>
      </div>
    </div>
  </div>
</template>

<script>
  import {isWeiXin} from 'utils/basicMethods'
  export default {
    name: "CommissionAccountCheck",
    data() {
      return {
        iconList: [
          {
            id: 'AT00',
            icon: '\ue625',
            color: '#1293d7',
            name: '支付宝',
            desc: '支付宝账户姓名必须与连萌账号一致'
          },
          {
            id:'AT01',
            icon: '\ue63a',
            color: '#40ba49',
            name: '微信',
            desc: '微信打开佣金绑定页面并绑定该微信号'
          }
        ],
        isWx: false
      }
    },
    mounted() {
      this.isWx = isWeiXin()
    },
    methods: {
      goToBindAccount(awardType) {
        if(awardType === 'AT00') {  // 支付宝账户
          goforward('commissionChange', {
            awardType
          })
        } else if(awardType === 'AT01'){  // 微信账户
          console.log(this.$store.state.global.getOpenIdUrl)
          if(this.isWx) {
            window.location.href= this.$store.state.global.getOpenIdUrl;
          }
        }

      }
    }
  }
</script>

<style lang="scss" scoped>
  .account-check {
    @include flex-column(baseline, baseline);
    width: 375px;
    .account-check-item {
      margin-left: 30px;
      @include flex-row();
      >.icon {
        font-size: 76px;
      }

      .check-item-right {
        margin-left: 15px;
        height: 77px;
        flex-grow: 1;
        @include flex-column(space-between,baseline);
        .check-item-name {
          font-size: 14px;
          line-height: 12px;
        }
        .check-item-desc {
          color: #1296DB;
        }

        .check-item-btn {
          width:182px;
          height:21px;
          background:linear-gradient(25deg,rgba(71,201,255,0.95),rgba(8,82,249,0.95));
          border-radius:4px;
          @include flex-column(center);
          color: #fff;
          letter-spacing: 5px;
        }
      }
    }


  }
</style>