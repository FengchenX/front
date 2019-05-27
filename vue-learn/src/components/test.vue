<template>
    <div class="login">
      <div class="log-bg">
        <div class="log-cloud cloud1"></div>
        <div class="log-cloud cloud2"></div>
        <div class="log-cloud cloud3"></div>
        <div class="log-cloud cloud4"></div>

        <div class="log-logo">agfun</div>
        <div class="log-text">www.qq.com</div>
      </div>
      <div class="log-email">

      </div>
    </div>
</template>

<script>
export default {
    name: "test"
}
</script>

<style scoped>
  .login{position: fixed; overflow: hidden;left: 50%; margin-left: -250px; top:50%; margin-top: -350px;
    width: 500px; min-height: 555px; z-index: 10; right: 140px; background: #fff;-webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
    border-radius: 5px; -webkit-box-shadow:  0px 3px 16px -5px #070707; box-shadow:  0px 3px 16px -5px #070707;
    line-height: 20px;
  }
  .log-bg{
    background: url("../assets/images/login/login-bg.jpg");
    width: 100%;
    height: 312px;
    overflow: hidden;
  }
  .log-cloud{
    background-image: url(../assets/images/login/login-cloud.png);
    width: 63px;
    height: 40px;
    position: absolute;
    z-index: 1;
  }
  .cloud1{
    top: 21px;
    left: -30px;
    transform: scale(.6);
    animation: cloud1 20s linear infinite;
  }
  .cloud2{
    top:87px;
    right: 20px;
    animation: cloud2 19s linear infinite;
  }
  .cloud3{
    top:160px;
    left: 5px;
    transform: scale(.8);
    animation: cloud3 21s linear infinite;
  }
  .cloud4{
    top:150px;
    left: -40px;
    transform: scale(.4);
    animation: cloud4 19s linear infinite;
  }
  .log-logo{
    height: 80px;
    margin: 120px auto 25px;
    text-align: center;
    color: #1fcab3;
    font-weight: bold;
    font-size: 40px;
  }
  .log-logo, .log-text{
    z-index: 2;
  }
  .log-text{
    color: #57d4c3;
    font-size: 13px;
    text-align: center;
    margin: 0 auto;
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
  }@-webkit-keyframes cloud4 {
     0%{left:100px;}
     100%{left:-70px;}
   }
  @keyframes cloud4{
    0%{left:100px;}
    100%{left:-70px;}
  }
</style>
