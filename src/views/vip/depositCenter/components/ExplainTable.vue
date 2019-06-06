<template>
  <div id="explain-table">
    <div class="line line-1"></div>
    <div class="line line-2"></div>
    <div class="line line-3"></div>
    <div class="line line-4"></div>
    <div class="line line-5"></div>
    <div class="explain-table-title">
      <div class="item2">VIP等级</div>
      <div class="item1">V0</div>
      <div class="item2">V1</div>
      <div class="item2">V2</div>
      <div class="item2">V3</div>
      <div class="item3">V4</div>
    </div>
    <div class="explain-table-list" ref="explainWarpper">
      <div class="scroll-inner">
        <!-- 保证金 -->
        <div class="table-list-item" v-for="item in infoList">
          <div class="item item2">{{item.clumn1}}</div>
          <div class="item item1">{{item.clumn2}}</div>
          <div class="item item2">{{item.clumn3}}</div>
          <div class="item item2">{{item.clumn4}}</div>
          <div class="item item2">{{item.clumn5}}</div>
          <div class="item item3">{{item.clumn6}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "explain-table",
    mounted() {
      setTimeout(() => {
        this.scroll = new BScroll(this.$refs.explainWarpper, {
          mouseWheel: true,
          click: true
        })
      }, 20)
    },
    data() {
      return {
        infoList: [
          {
            clumn1: '保证金',
            clumn2: '0',
            clumn3: '99',
            clumn4: '199',
            clumn5: '299',
            clumn6: '399'
          },
          {
            clumn1: '升级',
            clumn2: '无法升级',
            clumn3: '赚取100升级金可申请升级V1',
            clumn4: '赚取200升级金可申请升级V2',
            clumn5: '赚取300升级金可申请升级SVIP',
            clumn6: '赚取300升级金可申请升级SVIP'
          },
          {
            clumn1: '退还保证金',
            clumn2: '/',
            clumn3: '赚取100升级金可退还99，等级降为V0',
            clumn4: '赚取200升级金可退还199，等级降为V0',
            clumn5: '赚取400升级金可退还299，等级降为V0',
            clumn6: '赚取800升级金可退还599，等级降为V0'
          },
          {
            clumn1: '导师激励',
            clumn2: '/',
            clumn3: '被推荐人保证金的50%（发放标准：辅助推荐人完成任意首单归档后）',
            clumn4: '被推荐人保证金的50%（发放标准：辅助推荐人完成任意首单归档后）赚取200升级金可退还199，等级降为V0',
            clumn5: '被推荐人保证金的50%（发放标准：辅助推荐人完成任意首单归档后）',
            clumn6: '被推荐人保证金的50%（发放标准：辅助推荐人完成任意首单归档后）'
          },
          {
            clumn1: '一次性佣金',
            clumn2: '30',
            clumn3: '50',
            clumn4: '60',
            clumn5: '70',
            clumn6: '80'
          },
          {
            clumn1: '分成佣金',
            clumn2: '/',
            clumn3: '/',
            clumn4: '/',
            clumn5: '70',
            clumn6: '80'
          },
          {
            clumn1: '权益',
            clumn2: '号卡',
            clumn3: '号卡',
            clumn4: '号卡',
            clumn5: '号卡',
            clumn6: '号卡'
          },
          {
            clumn1: '',
            clumn2: '宽带',
            clumn3: '宽带',
            clumn4: '宽带',
            clumn5: '宽带',
            clumn6: '宽带'
          },{
            clumn1: '',
            clumn2: '融合',
            clumn3: '融合',
            clumn4: '融合',
            clumn5: '融合',
            clumn6: '融合'
          },{
            clumn1: '',
            clumn2: '/',
            clumn3: '/',
            clumn4: '老用户',
            clumn5: '老用户',
            clumn6: '老用户'
          },{
            clumn1: '',
            clumn2: '/',
            clumn3: '特权商品，达量奖励',
            clumn4: '特权商品，达量奖励',
            clumn5: '特权商品，达量奖励',
            clumn6: '特权商品，达量奖励'
          },{
            clumn1: '',
            clumn2: '/',
            clumn3: '/',
            clumn4: '/',
            clumn5: '统一培训',
            clumn6: '统一培训，一对一支撑，营销工具政策申请等等'
          },{
            clumn1: '',
            clumn2: '/',
            clumn3: '/',
            clumn4: '/',
            clumn5: '/',
            clumn6: '可开启SVIP'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  $sinpleW : 7.7%;
  #explain-table {
    position: relative;
    width: 100%;
    height: 90%;
    .item {
      padding: 10px 5px;
      border-bottom: solid $line-light 1px;
      @include flex-column(center)
    }
    .item1 {
      text-align: center;
      width: $sinpleW;
    }
    .item2 {
      text-align: center;
      width: $sinpleW*2;
    }
    .item3 {
      text-align: center;
      width: $sinpleW*4;
    }
    .explain-table-title {
      border-top: solid $line-light 1px;
      border-left: solid $line-light 1px;
      border-right: solid $line-light 1px;
      position: absolute;
      top: 0;
      width: 100%;
      height: $header-height;
      @include flex-row(space-between, stretch);
      div {
        height: 100%;
        @include flex-column(center);
      }
    }

    .explain-table-list {
      position: absolute;
      width: 100%;
      top: $header-height;
      bottom: 0;
      overflow: hidden;
      border: solid $line-light 1px;
      .scroll-inner {
        .table-list-item {
          @include flex-row(space-around, stretch)
        }
      }

    }
    .line {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      border-right: solid $line-light 1px;
    }
    .line-1 {
      width: 2*$sinpleW;
    }
    .line-2 {
      width: 3*$sinpleW;
    }
    .line-3 {
      width: 5*$sinpleW;
    }
    .line-4 {
      width: 7*$sinpleW;
    }
    .line-5 {
      width: 9*$sinpleW;
    }

  }
</style>