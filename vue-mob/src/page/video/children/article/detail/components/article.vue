<template>
  <div id="article">
    <!-- 信息 -->
    <div class="article_info">
      <h1 class="title">{{art_name}}</h1>
<!--      <span class="befrom">{{json.befrom}}</span>-->
<!--      <span class="newstime">{{json.newstime}}</span>-->
    </div>
    <!-- 文字 & 图片 -->
    <template v-else>
      <section class="article_content">
        <div class="content_html" v-html='content' :class="{'content_html-close' : content_more}"></div>
        <div class='content_moreBtn' v-if="content_more" @click.stop="content_more = false">展开全文...</div>
      </section>
    </template>
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
                content: ''
            }
        },
        watch: {
            json(val) {
                this.shrinkArticle()
            }
        },
        methods: {
            ...mapActions('articleDetail', [
                'get_article_data'
            ]),
            // 是否显示查看全文
            shrinkArticle() {
                if (this.content && this.content.length >= 1400) {
                    this.content_more = true
                } else {
                    this.content_more = false
                }
            }
        },
        mounted() {
            console.log('111111111111111111111', this.json)
            this.get_Article_data({id: this.json.id}).then(res => {
                this.content = res.data.content
            })
        }
    }
</script>

<style scoped lang="stylus">
  #article {
    width: 100%;
    position: relative;
    .article_info {
      font-size: 12px;
      overflow: hidden;
      background: #fff;
      padding: 0 0.427rem 0.4rem;
      border-bottom: 1px solid #eee;
      background: #fff;
      .title {
        color: #000;
        font-size: 20px;
        font-weight: bold;
        padding: 0.4rem 0;
      }
      .befrom {
        margin-right: 5px;
      }
    }
    .article_content {
      position: relative;
      color: #333;
      font-size: 18px !important;
      line-height: 30px;
      padding: 0.4rem 0.427rem;
      .content_html {
        overflow: hidden;
        text-indent: none !important;
        font-size: inherit;
        &.content_html-close{
          height: 1200px;
        }
        img {
          width: 100% !important;
          height: auto !important;
        }
        img[type="icon"]{
          width: initial!important;
        }
        *{
          text-indent: inherit !important;
          font-size: inherit !important;
          font-family: inherit !important;
          line-height: inherit !important;
          text-align: justify !important;
        }
        div,p{
          width: 100% !important;
          padding-bottom: 15px;
        }
      }
      .content_moreBtn {
        margin-top: 15px;
        padding: 5px 0;
        text-align: center;
        font-size: 14px;
        color: #00939c;
      }
    }
  }
</style>
