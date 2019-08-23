<template>
  <div id="test">
     <router-link to="/me">我的</router-link>
  </div>
</template>

<script>
    export default {
        name: 'test',
        data() {
            return {
              commentsJson: {
                comments: [
                  {user: 'user1', content: '评论1'},
                  {user: 'user1', content: '评论1'},
                  {user: 'user1', content: '评论1'},
                  {user: 'user1', content: '评论1'},
                  {user: 'user1', content: '评论1'},
                  {user: 'user1', content: '评论1'},
                  {user: 'user1', content: '评论1'},
                  {user: 'user1', content: '评论1'},
                  {user: 'user1', content: '评论1'},
                  {user: 'user1', content: '评论1'},
                  {user: 'user1', content: '评论1'},
                  ]
              }
            }
        },
        methods: {
        }
    }
</script>

<style lang="stylus" scoped>
  #test{
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



