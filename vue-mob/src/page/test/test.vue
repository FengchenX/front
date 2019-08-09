<template>
  <div id="test">
    <h1 class="title">标题</h1>
    <div class="information">
      <div class="userLogo">
        <img src="../../assets/img/首页.png"/>
      </div>
      <div class="userName">
        <span class="name">作者名</span><img src=""/><br/>
        <span class="time">2019-08-09 17:01:00</span>
      </div>
      <a href="#" class="about">+关注</a>
    </div>
<!--    <p class="content" v-html="" :class="{more:moreContent}">-->
<!--      <div class="moreContetn" @click="getmore" v-show="!moreContent">展开全文</div>-->
<!--    </p>-->
  </div>
</template>

<script>
    export default {
        name: 'test'
    }
</script>

<style scoped lang="stylus">
  #test{
    .title{
      font-size 25px;
      padding-top 16px;
      line-height 34px;
      font-weight bolder;
      color #222;
    }
    .information{
      margin-top 12px;
      position relative;
      .userLogo{
        height 32px;
        width 32px;
        border-radius 32px;
        overflow hidden;
        float: left;
      }
    }
  }
</style>
