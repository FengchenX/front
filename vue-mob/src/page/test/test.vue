<template>
  <div id="test">
    <div class="pd10 first">
      <mt-cell title="王大锤" label="微信号：18813364620" is-link to="/me/information">
        <img slot="icon" src="../../assets/img/我的.png" class="avatar">
<!--        <span>-->
<!--          <img slot="icon" src="../../assets/img/我的.png" style="width: 18px;height: 18px;">-->
<!--        </span>-->
      </mt-cell>
    </div>
<!--    <div class="pd10">-->
<!--      <mt-cell title="钱包" is-link to="/me/wallet">-->
<!--        <img slot="icon" src="../../assets/img/我的.png" style="height: 48px">-->
<!--      </mt-cell>-->
<!--    </div>-->

<!--    <div class="pd10">-->
<!--      <mt-cell title="设置" is-link to="/me/settings">-->
<!--        <img slot="icon" src="../../assets/image/setting.png">-->
<!--      </mt-cell>-->
<!--    </div>-->
  </div>
</template>

<script>
    export default {
        name: 'test',
        data() {
            return {
            }
        },
        methods: {
        }
    }
</script>

<style lang="stylus">
  #test{
    .pd10 {
      padding: 10px 0;
    }
    .first {
      .avatar {
        width 48px;
        height 48px;
      }
      .mint-cell-title {
        position: relative;
        .mint-cell-text {
          position absolute;
          left 56px;
          top 7px;
        }
        .mint-cell-label {
          position absolute;
          top 20px;
          margin-left 57px;
        }
      }
      .mint-cell-wrapper {
        padding 10px;
      }
    }
  }
</style>



