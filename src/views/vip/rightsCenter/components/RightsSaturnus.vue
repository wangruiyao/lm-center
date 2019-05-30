<template>
  <div id="right-saturn">
    <div class="rect">
      <slot></slot>
    </div>
    <div class="desc-top">
      <span>vip4</span>
      <span>vip5</span>
    </div>
    <div class="desc-bottom">
      <div>
        <span>
          <span class="price">229</span>
          元
        </span>
        <span>VIP4</span>

      </div>
      <div class="next-grade-price">
        <span>
          <span class="price">559</span>
          元
        </span>
        <span>VIP5</span>
      </div>
    </div>
    <div class="diamond">
      <div class="top"></div>
      <div class="bottom"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RightsSaturnus"
  }
</script>

<style lang="scss" scoped>
 #right-saturn {
   width: 330px;
   height: 80px;
   @include flex-column(center);
   position: relative;
    .rect {
      @include flex-column(center);
      color: #fff;
      z-index: 20;
      width: 70px;
      height: 70px;
      position: absolute;
      background-image: -moz-linear-gradient( -90deg, rgb(99,135,238) 45%, rgb(91,239,225) 100%);
      background-image: -webkit-linear-gradient( -90deg, rgb(99,135,238) 45%, rgb(91,239,225) 100%);
      background-image: -ms-linear-gradient( -90deg, rgb(99,135,238) 45%, rgb(91,239,225) 100%);
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
    }
   .desc-top {
     @include flex-row();
     width: 100%;
     position: absolute;
     /*padding: 0 5px;*/
     top: 19px;
     color: #6D7EFC;
     z-index: 888;
     span {
       min-width: 80px;
       text-align: center;
     }
   }
   .desc-bottom {
     span {
       min-width: 80px;
       text-align: center;
     }
     z-index: 888;
     line-height: 14px;
     @include flex-row();
     width: 100%;
     position: absolute;
     bottom: 5px;
     /*padding: 0 5px;*/
     .price {
       font-size: 18px;
     }
     div {
       @include flex-column();
     }

     .next-grade-price {
       color: $line-deep;
     }
   }
    .diamond {
      position: absolute;
      z-index: 10;
      background-image: -moz-linear-gradient( 0deg, rgb(194,111,229) 0%, rgb(99,135,238) 49%, rgb(91,239,225) 100%);
      background-image: -webkit-linear-gradient( 0deg, rgb(194,111,229) 0%, rgb(99,135,238) 49%, rgb(91,239,225) 100%);
      background-image: -ms-linear-gradient( 0deg, rgb(194,111,229) 0%, rgb(99,135,238) 49%, rgb(91,239,225) 100%);
      >div {
        border-width: 3px 165px;
        height: 0;
        width: 0;
        border-style: solid;
        border-color: transparent;
      }
      .top {
        border-color: #FFF #FFF transparent #FFF ;
      }
      .bottom {
        border-color:  transparent #FFF #FFF #FFF;
      }
    }
 }
</style>