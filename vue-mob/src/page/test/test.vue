<template>
  <div id="test">
    <mt-cell title="头像"><img src="../../assets/img/首页.png" height="40px"></mt-cell>
    <mt-cell title="微信号"><input type="text" v-model="wx_number"/></mt-cell>
    <mt-cell title="手机号"><input type="text" v-model="phone"/></mt-cell>
    <mt-cell title="昵称"><input type="text" v-model="nick"/></mt-cell>
  </div>
</template>

<script>
    export default {
        name: 'test',
        data() {
            return {
              wx_number: '',
              phone: '',
              nick: ''

            }
        },
        methods: {
        }
    }
</script>

<style lang="stylus" scoped>
  #test{
    line-height 10px;
  }
</style>



