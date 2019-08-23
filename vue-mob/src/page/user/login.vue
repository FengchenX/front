//登录
<template>
  <div class="login" id="login">
    <div class="log-bg">
      <div class="log-cloud cloud1"></div>
      <div class="log-cloud cloud2"></div>
      <div class="log-cloud cloud3"></div>
      <div class="log-cloud cloud4"></div>
    </div>
    <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="account"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    <mt-button type="primary" size="large" @click="login">登录</mt-button>
    <div style="text-align: right; font-size: 20px; padding-right: 30px"><a href="/register" style="color: #2a90d7">没有账号? 点击注册</a></div>
  </div>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        name: 'login',
        data() {
            return {
                account: '',
                password: ''
            }
        },
        components: {
        },
        methods: {
            ...mapActions(
                'login', [
                    'put_login_data'
                ]
            ),
            // 登录逻辑
            login() {
                if (this.account !== '' && this.password !== '') {
                    this.toLogin(this.account, this.password)
                }
            },

            // 登录请求
            toLogin(account, pwd) {
                let params = {name: account, pwd: pwd}
                this.put_login_data(params).then(
                    res => {
                        // 跳转到我的页面
                        if (res.code === 0) {
                          if (this.$route.query.redirect) {
                            this.$router.push(this.$route.query.redirect)
                          } else {
                            this.$router.push('/me')
                          }
                        }
                    }
                )
            }
        },
        mounted() {
        }
    }
</script>

<style scoped lang="stylus">
  .login {
    text-align center;
    .log-cloud{background-image: url(../../assets/img/login/login-cloud.png); width: 63px ;height: 40px; position: absolute; z-index: 1}
    .cloud1{top:21px; left: -30px; transform: scale(.6); animation: cloud1 20s linear infinite;}
    .cloud2{top:87px; right: 20px; animation: cloud2 19s linear infinite;}
    .cloud3{top:160px; left: 5px;transform: scale(.8);animation: cloud3 21s linear infinite;}
    .cloud4{top:150px; left: -40px;transform: scale(.4);animation: cloud4 19s linear infinite;}
    .log-bg{background: url(../../assets/img/login/login-bg.jpg); width: 100%; height: 312px; overflow: hidden;}
  }
  @-webkit-keyframes cloud1 {
    0%{left: 200px}
    100%{left:-130px;}
  }
  @keyframes cloud1{
    0%{left: 200px}
    100%{left:-130px;}
  }
  @-webkit-keyframes cloud2 {
    0%{left:500px;}
    100%{left:-90px;}
  }
  @keyframes cloud2{
    0%{left:500px;}
    100%{left:-90px;}
  }
  @-webkit-keyframes cloud3 {
    0%{left:620px;}
    100%{left:-70px;}
  }
  @keyframes cloud3{
    0%{left:620px;}
    100%{left:-70px;}
  }
  @-webkit-keyframes cloud4 {
    0%{left:100px;}
    100%{left:-70px;}
  }
  @keyframes cloud4{
    0%{left:100px;}
    100%{left:-70px;}
  }
</style>
