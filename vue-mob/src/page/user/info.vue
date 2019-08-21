<template>
  <div id="info">
    <!-- <mt-cell title="头像"><img src="../../../assets/img/首页.png" height="40px"></mt-cell> -->
    <mt-cell title="微信号"><input type="text" v-model="we_chat"/></mt-cell>
    <mt-cell title="手机号"><input type="text" v-model="phone"/></mt-cell>
    <mt-cell title="昵称"><input type="text" v-model="nick"/></mt-cell>
  </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: 'info',
        data() {
            return {
              we_chat: '',
              phone: '',
              nick: ''

            }
        },
        mounted() {
          
        },
        computed: {
          ...mapGetters('me', [
            'info'
          ])
        },
        watch: {
          info: function(val) {
            if (val) {
              this.we_chat = val.we_chat
              this.phone = val.telephone
              this.nick =val.nick
            }
          }
        }
    }
</script>

<style scoped lang="stylus">
#info{
  line-height 10px;
}
</style>
