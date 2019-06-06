<template>
  <div id="button"
       :class="isActive ? actType : 'lm-button'"
       @click="handleButtonClick">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "LmButton",
    props: {
      isActive: {
        type: Boolean,
        default: false
      },
      actType: {
        type: String,
        default: 'active-red'
      }
    },
    methods: {
      handleButtonClick() {
        this.$emit('click')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .active {
    color: red;
  }
  #button {
    @include flex-row(center);
    border-radius: 20px;
    width: 100%;
    height: 100%;
  }
  .lm-button {
    color: #666;
    border: solid $button-border-color 1px;
  }
  .active-red {
    @include btn-active-red;
  }
  .active-blue {
    @include btn-active-blue;
  }
</style>