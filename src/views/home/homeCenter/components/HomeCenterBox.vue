<template>
  <div id="center-box">
    <div class="box-head">
      <span class="mine">{{title}}</span>
      <span class="total" @click="handleClick">
        {{desc}}
        <span class="lm-icon icon iconfont">&#xe66c;</span>
      </span>
    </div>
    <div class="box-container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeCenterBox",
    props: {
      title: {
        type: String
      },
      desc: {
        type: String
      }
    },
    methods: {
      handleClick() {
        this.$emit('click')
      }
    }
  }
</script>

<style lang="scss" scoped>
  #center-box {
    width: 355px;
    background: #fff;
    margin-top: 10px;
    overflow: hidden;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;

    .box-head {
      @include flex-row();
      height: 40px;
      padding: 0 20px;
      border-bottom: solid $line-light 1px;

      .mine {
        font-size: 14px;
        color: #333;
        font-weight: bold;
      }
      .total {
        color: #999;
        span {
          font-size: 12px;
        }
      }
    }
    .box-container {

    }
  }
</style>