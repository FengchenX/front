<template>
  <div id="me">
    <div class="pd10 first">
      <mt-cell :title="nick" :label="label" is-link to="/me/information">
        <img slot="icon" :src="icon" class="avatar">
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
              icon: '',
              phone: '',
              we_chat: ''
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
                    this.nick = res.data.nick
                    this.name = res.data.name
                    this.icon = res.data.thumb
                    this.phone = res.data.telephone
                    this.we_chat = res.data.we_chat
                }
            )
        },
        computed: {
            label: function() {
                return `账号: ${this.we_chat}`
            }
        }
    }
</script>

<style lang='stylus'>
    #me{
        line-height 10px;
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
