<template>
  <div @click="click" id="number-check-item">
    <div class="number">
      <span>{{numberInfo.serialnumber.substr(0,3)}}</span>
      <span class="blue">{{numberInfo.serialnumber.substr(3,4)}}</span>
      <span>{{numberInfo.serialnumber.substr(7,4)}}</span>
    </div>
    <div class="number-info">
      <span>{{cityName}}</span>
      <span class="red">￥
        <span>{{Number(numberInfo.price).toFixed(2).toString().split('.')[0]}}</span>
        <span>.</span>{{Number(numberInfo.price).toFixed(2).toString().split('.')[1]}}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "OrderNumberCheckItem",
    props: {
      numberInfo: {
        type: Object,
        default() {
          return {}
        }
      },
      cityName: {
        type: '',
        default: ''
      }
    },
    methods: {
      click() {
        this.$emit('click')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .blue{
    color: $blue-color-link
  }
  .red {
    color: #FF2D00;
  }
  #number-check-item {
    width: 163px;
    height: 65px;
    background: #fff;
    border: solid #E1E1E1 1px;
    box-shadow: 0 2PX 0 0 rgba(4, 0, 0, 0.24);
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    margin-bottom: 16px;
    color: #666;
    padding: 10px;
    @include flex-column()
    .number {
      span {
        font-size: 16px;
        padding: 3px;
      }
    }
    .number-info {
      >span {
        margin-right: 5px;
        >span {
          font-size: 14px;
        }
      }
    }
  }
</style>