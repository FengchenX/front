<template>
  <div id="test">
    <h1 class="title">标题</h1>
    <div class="information">
      <div class="userLogo">
        <img src="../../assets/img/首页.png"/>
      </div>
      <div class="userName">
        <span class="name">作者名</span><img src="../../assets/img/首页.png"/><br/>
        <span class="time">2019-08-09 17:01:00</span>
      </div>
      <a href="#" class="about">+关注</a>
    </div>
    <!--文章的内容-->
    <p class="content" v-html="article.content" :class="{more:moreContent}"></p>
    <div class="moreContent" @click="getmore" v-show="!moreContent">展开全文</div>
  </div>
</template>

<script>
    export default {
        name: 'test',
        data() {
            return {
                article: {
                    content: '<p>千万不要碍着大熊猫吃东西，即使你是小熊猫也不行</p><img src=\'./image/1.gif\'/><h2>完全符合气质</h2><img src=\'./image/2.gif\'/><h2>要是没人进来那多尴尬</h2><img src=\'./image/4.gif\'/><h2>走，去澳大利亚抓袋鼠去</h2><img src=\'./image/3.gif\'/>'
                },
                moreContent: false
            }
        },
        methods: {
            getmore() {
                this.moreContent = true
            }
        }
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
        img{
          width: 30px;
          height: 30px;
        }
      }
      .userName{
        font-size:12px;
        line-height:16px;
        margin-left: 40px;
        .name{
          color: #406599
        }
        .time{
          color: #999;
        }
        img{
          width: 15px;
          height: 15px;
        }
      }
      .about{
        background-color:#2a90d7;
        border: none;
        border-radius: 5px;
        color:#fff;
        letter-spacing: 5px;
        text-decoration: none;
        width:72px;
        height:28px;
        line-height:28px;
        text-align: center;
        position:absolute;
        top:50%;
        margin-top: -14px;
        right:0px;
        font-size small;
      }
    }
    .content {
      padding-top: 24px;
      max-height:500px;
      overflow: hidden;
      .more{
        max-height none
      }
      h2 {
        font-size: 18px;
        border-left-width: 3px;
        border-left: solid #ed4040;
        padding-left: 6px;
        line-height: 28px;
        margin: 12px 0;
      }
      p {
        margin-bottom:24px;
        word-wrap: break-word;
        font-size: 18px;
        line-height: 28px;
        color: #333;
      }
    }
    .moreContent{
      margin-top: 22px;
      text-align: center;
      height: 20px;
      line-height: 20px;
      color: #54a0dc;
    }
  }
</style>
