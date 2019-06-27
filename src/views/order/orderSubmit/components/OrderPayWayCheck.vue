<template>
  <div id="order-pay-way-check">
    <nut-actionsheet :is-visible="isVisible"
                     @close="switchActionSheet('isVisible')"
                     cancelTxt="关闭"
    >
      <div slot="custom" class="custom-wrap">
        <div class="title">选择支付方式</div>
        <div class="pay-way-check"
             v-for="(item,idx) in checkList"
             :key="item.value">
          <span>{{item.name}}</span>
          <div class="check" @click="checkSelf(item,idx)">
            <span class="lm-icon icon iconfont" v-show="item.checked">&#xe68f;</span>
          </div>
        </div>

      </div>
    </nut-actionsheet>
  </div>
</template>

<script>
  export default {
    name: "OrderPayWayCheck",
    props: {
      isVisible: {
        type: Boolean,
        default: true
      },
      checkList: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        group: []
      }
    },
    methods: {
      checkSelf(item, index) {
        item.checked = !item.checked;
        const newCheckList = this.checkList;
        newCheckList.map((i, idx)=> {
          if(idx !== index) {
            newCheckList[idx].checked = false;
          }
        });
        this.$emit('checkPayWay', newCheckList);
      },
      switchActionSheet() {
        this.$emit('closeSelf', '')
      }
    }
  }
</script>

<style lang="scss" scoped>
  #order-pay-way-check {
    height: 500px;

    .custom-wrap {
      min-height: 400px;
      .title {
        font-size: 14px;
        padding: 10px;
        height: $header-height;
        @include flex-row()
      }

      .pay-way-check {
        padding: 10px;
        height: $cell-height;
        @include flex-row();

        .check {
          @include flex-column(center);
          width: 20px;
          height: 20px;
          border: solid $line-deep 1px;
          span {
            color: #5475E5;
            font-size: 10px;
          }
        }
      }
    }

  }
</style>