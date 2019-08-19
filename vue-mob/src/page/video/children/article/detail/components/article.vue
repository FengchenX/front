<template>
  <div id="article">
    <h1 class="title">{{art_name}}</h1>
    <div class="information">
      <div class="userLogo">
        <img :src="creator_icon"/>
      </div>
      <div class="userName">
        <span class="name">{{creator_name}}</span><img src="../../../../../../assets/img/首页.png"/><br/>
        <span class="time">{{create_at}}</span>
      </div>
      <a href="#" class="about">+关注</a>
    </div>
    <!--文章的内容-->
    <p class="content" v-html="content" :class="{more:content_more}"></p>
    <div class="moreContent" @click="shrinkArticle" v-show="!content_more">展开全文</div>
  </div>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        name: 'article',
        props: ['json'],
        data() {
            return {
                content_more: false,
                art_name: '',
                content: '',
                creator_icon: '',
                creator_name: '',
                create_at: ''
            }
        },
        watch: {
            json(val) {
                // this.shrinkArticle()
                this.get_article_data({id: this.json.id}).then(res => {
                    this.content = res.content
                    this.art_name = res.name
                    this.creator_icon = res.creator_icon
                    this.creator_name = res.creator_name
                    this.create_at = res.create_at
                })
            }
        },
        methods: {
            ...mapActions('articleDetail', [
                'get_article_data'
            ]),
            // 是否显示查看全文
            shrinkArticle() {
                this.content_more = true
                // if (this.content && this.content.length >= 1400) {
                //     this.content_more = true
                // } else {
                //     this.content_more = false
                // }
            }
        },
        mounted() {
        }
    }
</script>

<style scoped lang="stylus">
  #article {
    padding:0 17px;
    background-color: #f8f8f8;
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
    .more{
      max-height 545px;
      overflow: scroll;
      &::-webkit-scrollbar{
        display none
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
