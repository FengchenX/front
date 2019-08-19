<template>
  <div id="my">
    <div class="pd10 first">
      <mt-cell title="王大锤" label="微信号：18813364620" :is-link="false" to="/me/information">
        <img slot="icon" src="../../assets/img/我的.png" class="avatar">
<!--        <span>-->
<!--          <img slot="icon" src="../../assets/img/我的.png" style="width: 18px;height: 18px;">-->
<!--        </span>-->
      </mt-cell>
    </div>

<!--    <div class="pd10">-->
<!--      <mt-cell title="钱包" is-link to="/me/wallet">-->
<!--        <img slot="icon" src="../../assets/image/wallet.png">-->
<!--      </mt-cell>-->
<!--    </div>-->

<!--    <div class="pd10">-->
<!--      <mt-cell title="收藏" is-link to="/me/collection">-->
<!--        <img slot="icon" src="../../assets/image/collection.png">-->
<!--      </mt-cell>-->
<!--      <mt-cell title="相册" is-link>-->
<!--        <img slot="icon" src="../../assets/image/album.png">-->
<!--      </mt-cell>-->
<!--      <mt-cell title="卡包" is-link to="/me/card">-->
<!--        <img slot="icon" src="../../assets/image/card_package.png">-->
<!--      </mt-cell>-->
<!--      <mt-cell title="表情" is-link>-->
<!--        <img slot="icon" src="../../assets/image/expression.png">-->
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
    import { mapActions } from 'vuex'
    export default {
        name: 'me',
        data() {
          return {
              nick: '',
              name: '',
              icon: ''
          }
        },
        methods: {
            ...mapActions(
                'me', [
                    'get_user_info'
                ]
            )
        },
        mounted() {
            this.get_user_info().then(
                res => {
                    if (res.code !== 0) {
                    } else {
                        this.nick = res.data.nick
                        this.name = res.data.name
                    }
                }
            )
        }
    }
</script>

<style scoped>

</style>
