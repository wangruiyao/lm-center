<template>
  <div id="button"
       :class="isActive ? 'lm-active-button' : 'lm-button'" >
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
      }
    }
  }
</script>

<style lang="scss" scoped>
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
  .lm-active-button {
    @include btn-active;
  }

</style>