<template>
  <!-- 加载更多 -->
  <div class="container" v-infinite-scroll="loadBottomAjax" infinite-scroll-disabled="bottomLock" infinite-scroll-distance="10" infinite-scroll-immediate-check="false">
    <!-- 请求提示 -->
    <my-loading :visible="loading" :reload="init" />

    <!-- 顶部提示 -->
    <div class="globalTip">
      <div class="dataCount">已为你推荐{{dataCount}}条新内容</div>
      <div class="noNewData">没有最新的内容了</div>
      <div class="requestFail">网络请求失败,请检查网络</div>
    </div>

    <!-- 下拉加载 -->
    <mt-loadmore :top-method="loadTopAjax" @top-status-change="handleTopChange" ref="loadmore" :auto-fill='false'>
      <!-- 下拉提示 -->
      <div slot="top" class="mint-loadmore-top">
        <span v-show="topStatus == 'pull'"><img class='pullLoading' src="~@/assets/img/loading.png"> 下拉刷新↓</span>
        <span v-show="topStatus == 'drop'"><img class='pullLoading' src="~@/assets/img/loading.png"> 释放更新↑</span>
        <span v-show="topStatus == 'loading'"><img class='pullLoading' src="~@/assets/img/loading.gif"> 加载中...</span>
      </div>
      <!-- listItem -->
      <listItem :itemJson="contentJson" v-if='contentJson.length > 0'/>
      <!-- 底部提示 -->
      <div class="bottomLoad" v-if="contentJson.length > 0">
        <div class="loading" v-show='bottomLoading'>加载中...</div>
        <div class="noData" v-if='bottomNoData'>没有更多的内容了</div>
      </div>
    </mt-loadmore>
  </div>
</template>

<script>
    import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
    import listItem from './listItem'
export default {
        // name: 'container',
        data() {
            return {
                classPage: 1,           // 当前栏目的翻页页数
                contentJson: [],        // 整个列表数据
                dataCount: 0,           // 推荐文章数量
                topStatus: '',          // 下拉状态
                bottomLock: false,      // 上滑开关
                bottomLoading: true,    // 底部loading
                bottomNoData: false,    // 底部nothing
                loading: false,
                pageSize: 10   // 每页大小
            }
        },
        components: {
            listItem
        },
        computed: {
            ...mapState('smallVideo', [
                'currentContent',
                'page',
                'location'
            ]),
            ...mapGetters('smallVideo', [
                'meta'
            ])
        },
        methods: {
            ...mapActions('smallVideo', [
                'get_listItem_cache',
                'get_listItem_data'
            ]),
            ...mapMutations('smallVideo', [
                'setLocation'
            ]),
            // 底部上滑请求
            loadBottomAjax () {
                this.bottomLock = true  // 上滑开关
                /******************************************************/
                let params = {limit: `${this.pageSize}`, offset: `${(this.classPage - 1) * this.pageSize}`}
                /******************************************************/
                this.get_listItem_data(params)
                    .then(res => {
                        console.log(res.data)
                        if (res && res.data.videos) {
                            // this.contentJson.push(...res)
                            /***************************************************/
                            this.contentJson.push(...res.data.videos)
                            /***************************************************/
                            this.classPage++
                        } else {
                            this.bottomLoading = false
                            this.bottomNoData = true
                        }
                        this.bottomLock = false
                    })
            },
            // 顶部下拉请求
            loadTopAjax() {
                /******************************************************/
                let params = {limit: `${this.pageSize}`, offset: `${(this.classPage - 1) * this.pageSize}`}
                /******************************************************/
                // this.get_listItem_data(this.classPage)
                this.get_listItem_data(params)
                    .then(res => {
                        console.log(res.data)
                        this.loading = false
                        if (res && res.data.videos) {
                            /********************************************/
                            this.contentJson.unshift(...res.data.videos)
                            this.dataCount = res.data.total
                            /********************************************/
                            this.classPage++
                            // 文章数量提示
                            $(`.container.${this.type} .dataCount`).slideDown(200).delay(1000).slideUp(200)
                            // 加载历史记录方法
                            // this.newLookHere()
                        } else {
                            // 没有文章数据提示
                            $(`.container.${this.type} .noNewData`).slideDown(200).delay(1000).slideUp(200)
                        }
                        this.$refs.loadmore.onTopLoaded()   // mint-ui 下拉组件的方法
                        this.loading = false
                        $(`.container.${this.type} .requestFail`).hide()
                    })
                    .catch(err => {
                        console.log('loadTop发生错误', err)
                        if (this.contentJson.length > 0) {
                            $(`.container.${this.type} .requestFail`).show()
                            this.loading = false
                        } else {
                            this.loading = 'error'
                        }
                    })
            },
            // mint-ui 下拉组件的状态
            handleTopChange(status) {
                this.topStatus = status
            },
            // 创建historyLook元素
            // newLookHere() {
            //     if (this.dataCount >= 10) {
            //         let lookIndex = this.contentJson.findIndex((n) => n.type === 'lookHere')
            //         this.contentJson.splice(lookIndex, 1)   // 删除数据里面的look数据
            //         this.contentJson.splice(10, 0, {type: 'lookHere'})  // 始终在第11个位置里添加look数据
            //     }
            //     this.$nextTick(() => {
            //         $(`#lookHere`).prev().css('border', 'none')    // 去除look元素的上一个元素的border边框
            //     })
            // },
            init() {
                // 栏目第一次请求数据
                if (this.contentJson.length === 0) {
                    this.loading = 'loading'
                    this.classPage = this.meta.page
                    // 栏目的缓存？缓存 : 发送请求
                    if (this.meta.content) {
                        this.contentJson = this.meta.content
                        this.handleLocaltion('get')
                        this.loading = false
                    } else {
                        this.loadTopAjax()
                    }
                }
            },
            // 处理滚动条位置的方法
            handleLocation(type) {
                if (type === 'get') {
                    this.$nextTick(() => {
                        $(`.container`).scrollTop(this.meta.location)
                    })
                } else if (type === 'set') {
                    let scrollTop = $(`.container`).scrollTop()
                    if (scrollTop >= 0) {
                        this.setLocation(scrollTop)
                        // this.location = scrollTop
                    }
                }
            },
            // handleLocation(type) {
            //     if (type === 'get') {
            //         this.$nextTick(() => {
            //             $(`.container.${this.type}`).scrollTop(this.meta.location)
            //         })
            //     } else if (type === 'set') {
            //         let scrollTop = $(`.container.${this.type}`).scrollTop()
            //         if (scrollTop >= 0) {
            //             this.location = scrollTop
            //         }
            //     }
            // },
            saveScroll() {
                this.handleLocation('set')
            }
        },
        mounted() {
            this.init()
            // this.lookHereClick()
        },
        activated() {
            this.handleLocation('get')
            window.addEventListener('beforeunload', this.saveScroll) // 为了刷新之后保持当前滚动条位置，监听方法不能带参数
        },
        deactivated() {
            this.handleLocation('set')
            window.removeEventListener('beforeunload', this.saveScroll) // 为了刷新之后保持当前滚动条位置，监听方法不能带参数
        }
    }
</script>

<style scoped lang="stylus">
  .container {
    height: 100%;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    position: relative;
    .globalTip{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 999;
      div{
        height: 32px;
        line-height: 34px;
        font-size: 14px;
        color: #2a90d7;
        background: rgba(213, 233, 247, .9);
        text-align: center;
        display: none;
        &.requestFail {
          color: #f56767;
          background: #FBE9EF;
        }
      }
    }
    .mint-loadmore-top {
      height: 50px;
      line-height: 50px;
      font-size: 14px;
    }
    .pullLoading{
      width: 24px;
      height: 24px;
      vertical-align: middle;
      margin-top: -4px;
      margin-right: 3px;
    }
  }
</style>
