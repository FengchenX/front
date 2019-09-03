<template>
  <div id="comment">
    <div class="bg_line"></div>
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
  </div>
</template>

<script>
    export default {
        name: 'comment',
        props: ['commentsJson'],
        data() {
            return {
                //   commentsJson: {
                //     comments: [
                //       {user: 'user1', content: '评论1'},
                //       {user: 'user1', content: '评论1'},
                //       {user: 'user1', content: '评论1'},
                //       {user: 'user1', content: '评论1'},
                //       {user: 'user1', content: '评论1'},
                //       {user: 'user1', content: '评论1'},
                //       {user: 'user1', content: '评论1'},
                //       {user: 'user1', content: '评论1'},
                //       {user: 'user1', content: '评论1'},
                //       {user: 'user1', content: '评论1'},
                //       {user: 'user1', content: '评论1'},
                //       ]
                //   }
            }
        },
        methods: {}
    }
</script>

<style lang="stylus" scoped>
  #test {
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



