<template>
  <div id="filter-list">
    <!-- 商品类型-->
    <div class="filter-item">
      <div class="filter-spec">
        <div class="title">
          {{filterList.type.title}}
        </div>
        <div class="item-container">
          <div v-for="(i, idx) in filterList.type.value"
               :class="i.typeid === filterParams.goodstype ? 'act' : ''"
               @click="changeType(idx, i.typeid)">
            {{i.typename}}
          </div>
        </div>
      </div>
    </div>
    <!--筛选参数-->
    <div class="filter-item" v-for="item in filterList.spec">
      <div class="filter-spec">
        <div class="title">
          {{item.title}}
        </div>
        <div class="item-container">
          <div v-for="(i, idx) in item.value"
               @click="handleClick(item.title, i)"
               :class="filterParams.props[item.title] === i?'act':''">
            {{i}}
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import {morecondition} from 'api/goods'
  export default {
    name: "GoodsListFilterList",
    components: {},
    props: {
      filterList: {
        type: Object,
        default() {
          return {}
        }
      },
      goodsTypes: {
        type: String,
        default: ''
      },
    },
    data() {
      return {
        filterParams: {
          goodstype: '',
          props: {}
        },
        actType: ''
      }
    },
    // watch: {
    //   filterList:{ //深度监听，可监听到对象、数组的变化
    //     handler (newV) {
    //       if(newV.type.value.length === 1) {
    //         this.actType = 0
    //       } else {
    //         this.actType = ''
    //       }
    //     },
    //     deep:true
    //   }
    // },
    methods: {
      changeType(idx, typeid) {
        this.filterParams.props = {};
        if(this.filterParams.typeid === typeid) {
          this.$set(this.filterParams, 'goodstype', '');
          this.getMoreCondition({goodstype: this.goodsTypes})
        } else {
          this.$set(this.filterParams, 'goodstype', typeid);
          this.getMoreCondition({goodstype: typeid})
        }
      },
      getMoreCondition(params, type) {
        morecondition(params).then(moreconditionRsp => {
          this.$emit('updateCondition', moreconditionRsp.data.spec)
        })

      },
      handleClick(title, spec) {
        this.$set(this.filterParams.props, title, spec);
      },
      filterConfirm() {
        this.$emit('filterConfirm', this.filterParams);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .filter-item {
    margin-bottom: 15px;
    .act {
      color: #fff;
      @include blue-gradient;
      border: none !important;
    }
    .title {
      color: #000;
      margin-bottom: 10px;
    }
    .item-container {
      width: 100%;
      @include flex-row(baseline);
      flex-wrap: wrap;
      div {
        margin-bottom: 10px;
        margin-right: 5px;
        border: solid $line-deep 1px;
        width: 75px;
        height: 23px;
        @include flex-row(center);
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
      }
    }
  }
</style>