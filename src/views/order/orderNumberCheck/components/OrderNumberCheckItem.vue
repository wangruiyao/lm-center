<template>
  <div id="number-check-item">
    <div class="number">
      <span>151</span>
      <span class="blue">6511</span>
      <span>360</span>
    </div>
    <div class="number-info">
      <span>济南</span>
      <span class="red">￥<span>200</span>.00</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "OrderNumberCheckItem"
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