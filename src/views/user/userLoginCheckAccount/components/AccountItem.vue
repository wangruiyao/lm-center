<template>
  <div id="account-item">

    <div class="account-head">
      <img :src="imgUrl"/>
    </div>

    <div class="account-container">
      <div class="account-info">
        <div class="username">{{userInfo.username}}</div>
        <div class="userInfo">
          <span>{{userInfo.vip}}</span>
          <span>{{userInfo.usertypedesc}}</span>
        </div>
      </div>
      <div class="check-btn-bgm"></div>
      <div class="check-btn" @click="chooseUser(userInfo)">进入</div>
    </div>


  </div>
</template>

<script>
  export default {
    name: "AccountItem",
    props: {
      userInfo: {
        type: Object,
        default: {}
      }
    },
    data() {
      return {
        imgUrl:''
      }
    },

    mounted() {
      this.imgUrl = this.$store.state.global.avatarImg + this.userInfo.id;
    },
    methods: {
      chooseUser(params) {
        this.$emit('chooseUser',params)
      }
    }
  }
</script>

<style lang="scss" scoped>
  $blue-deep: #182eca;
  $blue-light: #42b0fd;

  #account-item {
    margin: 20px 0;
    position: relative;
    color: #fff;
    @include flex-row();
    width: 290px;
    height: 50px;
    margin-left: 25px;
    .account-head {
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
      z-index: 777;
      position: absolute;
      width: 50px;
      height: 50px;
      left: -25px;
      overflow: hidden;
      img{
        width: 100%;
      }
    }

    .account-container {
      overflow: hidden;
      position: relative;
      @include flex-row();
      background: $blue-deep;
      width: 290px;
      height: 100%;
      border-radius: 15px;
      .account-info {
        margin-left: 30px;
        .username {
          font-size: 16px;
        }
        
        .userInfo {
          font-size: 12px;
          span {
            margin-right: 5px;
          }
        }
      }
      .check-btn-bgm {
        width: 35%;
        height: 200%;
        background: #6dc5ea;
        position: absolute;
        right: -20px;
        transform:rotate(-20deg);
        -ms-transform:rotate(-20deg); 	/* IE 9 */
        -moz-transform:rotate(-20deg); 	/* Firefox */
        -webkit-transform:rotate(-20deg); /* Safari 和 Chrome */
        -o-transform:rotate(-20deg);
      }

      .check-btn {
        @include flex-row(center);
        width: 30%;
        height: 100%;
        position: absolute;
        right: 0;
        z-index: 777;
      }
    }
  }

/*  #account-item {
    background: $blue-deep;
    color: #fff;
    @include flex-row();
    position: relative;
    border-radius: 15px;
    width: 290px;
    height: 50px;
    margin: 10px 0 10px 25px;
    .account-head {
      position: absolute;
      width: 50px;
      height: 50px;
      left: -25px;
      img{
        width: 100%;
      }
    }

    .account-info {
         @include flex-column(center,baseline);
         background: $blue-deep;
         width: 70%;
         height: 100%;
         padding-left: 35px;
       }

    .check-btn {
      @include flex-row(center);
      overflow: hidden;
      width: 30%;
      height: 100%;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      background: $blue-light;
    }
  }*/
</style>