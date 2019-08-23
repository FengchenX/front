<template>
  <div id="detail">
    <my-header fixed :title='title' v-goTop:click='true'>
      <a slot="left" class="back-black" @click.stop='$router.go(-1)'></a>
      <a slot="right" class="menu" @click.stop='$refs.share.toggle()'></a>
    </my-header>

    <div class="content">
      <div class="container" v-swiper:swiperRight='true'>
        <!-- 正文 -->
        <my-article :json="{id: this.id}"></my-article>
        <!-- 标签 -->
        <!--                <my-tags v-if="articleJson.infotags" :json='articleJson.infotags'/>-->
        <!-- 热点评论 -->
        <template>
          <!-- 分割线 -->
          <div class="bg_line" ></div>
          <div class="comment-hot">
            <div class="comment_title">
              <div class="Line">
                <div class="title">用户热评</div>
              </div>
            </div>
            <comment-item v-for='(item,index) in commentsJson.comments' :itemJson='item' :key='index'></comment-item>
            <div>
              <mt-field label="评论" placeholder="请输入评论" v-model="message">
                <mt-button type="primary" v-on:click="commentBtnClick">评论</mt-button>
              </mt-field>
            </div>
          </div>
        </template>
        <!-- 分割线 -->
        <div class="bg_line"></div>
      </div>
    </div>
    <!-- 分享组件 -->
    <!--        <my-share ref="share"/>-->
    <!-- 请求提示 -->
    <my-loading :visible='loading' :reload='init'/>
  </div>
</template>
<script>
    import myArticle from './components/article'
    // import myTags from './components/tags'
    // import myRecommend from './components/recommend'
    // import myShare from './components/share'
    import { mapState, mapMutations, mapActions } from 'vuex'
    export default {
        name: 'detail',
        components: { myArticle },
        data() {
            return {
                title: '老常工艺',   // header的title
                loading: 'loading',
                error: false,
                commentsJson: {}, // 评论数据
                message: '',
                id: ''
            }
        },
        computed: {
            // ...mapState('smallVideoDetail', [
            //     'location'
            // ])
        },
        watch: {
            $route(val) {
                if (val.query.url) {
                    this.init() // 自己调用自己，重新初始化
                }
            }
        },
        methods: {
            // ...mapMutations('smallVideoDetail', [
            //     'set_location'
            // ]),
            ...mapActions('articleComments', [
                'post_comments_data',
                'get_comments_data'
            ]),
            async init() {
                this.id = this.$route.query.id
                $('#detail .container').scrollTop(0)    // 初始化返回顶部
                await this.handleTitle()
                this.getComments()
            },
            // 获取title分类
            async handleTitle() {
                this.title = `${this.title} * 文章`
            },
            handleLocation(type) {
                if (type === 'get') {
                    this.$nextTick(() => {
                        if (this.location) {
                            $('#detail .container').scrollTop(this.location)
                        }
                    })
                } else if (type === 'set') {
                    let ret = $('#detail .container').scrollTop()
                    this.set_location(ret)
                }
            },
            /*****************************************************************************/
            // 获取评论数据
            getComments() {
                this.loading = 'loading'
                let params = {
                    'id': this.id
                }
                this.get_comments_data(params)
                    .then(res => {
                        if (res) {
                            this.commentsJson = res
                            this.handleLocation('get')
                        }
                        this.loading = false
                    })
                    .catch(err => {
                        console.log(err)
                        this.loading = 'error'
                    })
            },
            commentBtnClick() {
                this.post_comments_data({id: this.id, user: '', content: this.message}).then(res => {
                    this.getComments()
                })
            }
            /*****************************************************************************/
        },
        mounted() {
            this.init()
        },
        // 离开路由钩子
        beforeRouteLeave(to, from, next) {
            this.handleLocation('set')
            next() // 一定要调用next() 不然路由不会跳转
        },
        // 重复调用组件的钩子
        beforeRouteUpdate(to, from, next) {
            this.handleLocation('set')
            next()
        }
    }
</script>
<style lang='stylus' scoped>
  #detail {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #f8f8f8;
    header {
      background: #fff;
      color: #333;
      font-size: 16px;
      .menu {
        background: url(../../../../../assets/img/menu.png) no-repeat center center;
        background-size: 20px;
      }
    }
    .comment-hot {
      padding: 0.533rem 0 0;
      background: #f9f9f9;
      .comment_title {
        margin-bottom: 0.4rem;
        position: relative;
        .Line {
          position: relative;
          width: 2.8rem;
          margin: 0 auto;
          text-align center &:before {
            content: "";
            border-top: 2px solid #aaa;
            display: block;
            position: absolute;
            width: 0.4rem;
            top: 50%;
            left: 0
          }
          &:after {
            content: "";
            border-top: 2px solid #aaa;
            display: block;
            position: absolute;
            width: 0.4rem;
            top: 50%;
            right: 0
          }
        }
        .title {
          font-size: 14px;
          font-weight: bold;
        }
      }
    }
    .bg_line {
      height: 0.1333rem;
      background: #eee;
    }
  }
</style>
