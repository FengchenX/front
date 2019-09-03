<template>
  <div id="search">
    <div class="search-input">
      <!-- $event是实参，表示event对象 -->
      <!--
              输入搜索内容即时搜索，所以有一个keyup事件。
              按回车键有一个进入搜索内容页面，所以有一个keydown.enter事件
              按上下键可以选择列表条目
      -->
      <input
        type="text"
        v-model="keyword"
        @keyup="get($event)"
        @keydown.enter="search()"
        @keydown.down="selectDown()"
        @keydown.up.prevent="selectUp()"
      />
      <!-- 这是一个小叉叉，点击它可清除输入框内容 -->
      <span class="search-reset" @click="clearInput()">&times;</span>
      <button class="search-btn" @click="search()">搜一下</button>
      <div class="search-select">
        <!-- transition-group也是vue2.0中的新特性,tag='ul'表示用ul包裹v-for出来的li -->
        <transition-group name="itemfade" tag="ul" mode="out-in" v-cloak>
          <li
            v-for="(value,index) in myData"
            class="search-select-option search-select-list"
            @mouseover="selectHover(index)"
            @click="selectClick(index)"
            :key="value"
          >{{value}}
          </li>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
    import cache from '@/utils/cache'

    export default {
        name: 'search',
        data() {
            return {
                myData: [],
                keyword: '',
                now: 0
            }
        },
        methods: {
            // &event是实参，表示event对象
            get: function (ev) {
                // 如果按得键是上或者下，就不进行ajax
                // eslint-disable-next-line eqeqeq
                if (ev.keyCode == 38 || ev.keyCode == 40) {
                    return
                }
                // this.$http.jsonp('https://sug.so.360.cn/suggest?word=' + this.keyword + '&encodein=utf-8&encodeout=utf-8').then(function(res) {
                //     this.myData = res.data.s;
                // });
                // 调用搜索接口
                switch (this.keyword) {
                    case '0':
                        this.myData = ['关键字1', '关键字2']
                        break
                    case '1':
                        this.myData = ['key1', 'key2']
                        break
                    case '':
                        this.myData = []
                        break
                }
            },
            selectDown: function () {
                this.now++
                // 到达最后一个时，再按下就回到第一个
                // eslint-disable-next-line eqeqeq
                if (this.now == this.myData.length) {
                    this.now = 0
                }
                this.keyword = this.myData[this.now]
            },
            selectUp: function () {
                this.now--
                // 同上
                // eslint-disable-next-line eqeqeq
                if (this.now == -1) {
                    this.now = this.myData.length - 1
                }
                this.keyword = this.myData[this.now]
            },
            search: function () {
                // 打开对应的搜索界面
                // window.open(this.logoData[this.searchIndex].searchSrc + this.keyword)
                console.log('search')
            },
            selectHover: function (index) {
                this.now = index
            },
            selectClick: function (index) {
                this.keyword = this.myData[index]
                this.search()
            },
            clearInput: function () {
                console.log('clearInput')
                this.keyword = ''
                this.$http
                    .jsonp(
                        'https://sug.so.360.cn/suggest?word=' +
                        this.keyword +
                        '&encodein=utf-8&encodeout=utf-8'
                    )
                    .then(function (res) {
                        this.myData = res.data.s
                    })
            },
            getIndex: function (index) {
                this.searchIndex = index
            }
        },
        mounted() {
            cache.removeLocal('userID')
            cache.removeLocal('session')
        }
    }
</script>

<style lang="stylus" scoped>
  #search {
    .search-input {
      height: 45px;
      margin: 0 auto;
      margin-top: 10px;
      position: relative;

      input {
        border: 1px solid #e4e4e4;
        box-sizing: border-box;
        width: 200px;
        height: 45px;
        font-size: 18px;
        float: left;
        padding-left: 10px;
        padding-right: 10px;
        overflow: hidden;
      }

      .search-btn {
        height: 45px;
        width: 50px;
        border: 1px solid mediumseagreen;
        background-color: mediumseagreen;
        color: white;
        font-size: 16px;
        font-weight: bold;
        float: left;
      }

      .search-btn {
        cursor: pointer;
      }

      .search-reset {
        width: 21px;
        height: 21px;
        position: absolute;
        display: block;
        line-height: 21px;
        text-align: center;
        cursor: pointer;
        font-size: 20px;
        right: 175px;
        top: 12px;
      }

      .search-select {
        position: absolute;
        top: 45px;
        width: 200px;
        box-sizing: border-box;
        z-index: 999;

        li {
          border: 1px solid #d4d4d4;
          border-top: none;
          border-bottom: none;
          background-color: #fff;
          width: 100%;
        }
      }
    }
  }
</style>



