<template>
  <div id="item">
    <!-- 视频 -->
    <li v-if="section.url">
      <router-link :to="url(section)" class='video'>
        <div class="video_wrapper">
          <div class="video_info">
            <div class="video_title">
              <p v-html="section.name"></p>
            </div>
            <!--                <div class="totalTime">{{section.playtime}}</div>-->
            <img v-lazy.container="section.thumb">
          </div>
          <div class="playRound">
            <div class="playSan"></div>
          </div>
        </div>
        <!--        <list-info :json='section'></list-info>-->
      </router-link>
    </li>
    <!--    <li v-else-if='section.type' id="lookHere">-->
    <!--      <p>上次看到这里，点击刷新 <i class="icon-refresh"></i></p>-->
    <!--    </li>-->
  </div>
</template>

<script>
    export default {
        name: 'item',
        props: {
            section: {
                url: '',
                name: '',
                thumb: '',
                type: ''
            }
        },
        methods: {
            url(item) {
                return `/detail/small-video?id=${item.id}&url=${item.url}&name=${item.name}&thumb=${item.thumb}`
            }
        }
    }
</script>

<style scoped lang="stylus">
  small_height = 1.96875rem
  larger_height = 4.6875rem
  #item {
    li {
      margin: 0 0.4rem;
      border-bottom: 1px solid hsla(0, 0%, 87%, .6);
    }

    a {
      display: block;
      width: 100%;
      padding: 0.427rem 0;
      outline: none;
      color: #131313;
      -webkit-tap-highlight-color: rgba(0, 0, 0, .1);
      text-decoration: none;
    }

    a:visited h3 {
      color: #999;
    }
    a highlight{
    color: #fe3333!important
    font-weight: bold
  }

    img {
      background: #ddd;
    }

    img[lazy=loading] {
      height: 100%;
    }

    h3 {
      white-space: normal;
      font-size: 17px;
      line-height: 21px;
      color: #222;
      font-weight: 400;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .oneSmall {
      font-size: 0;

      & > div {
        display: inline-block;
        vertical-align: middle;
      }

      .news_title {
        width: 67%;
        overflow: hidden;

        h3 {
          margin-right: 0.32rem;
        }
      }

      .news_img {
        width: 33%;
        height: small_height;
        overflow: hidden;

        img {
          width: 100%;
          min-height: small_height;
        }
      }
    }

    .oneLarge {
      .news_img {
        width: 100%;
        margin-top: 0.16rem;
        overflow: hidden;
        height: larger_height;
      }

      img {
        width: 100%;
        min-height: larger_height;
      }
    }

    .threeSmall {
      .list_img {
        width: 100%;
        margin-top: 0.16rem;

        ul {
          width: 100%;
          /*display: flex;*/
          font-size: 0;
        }

        li {
          display: inline-block;
          width: 33.3%;
          height: small_height;
          overflow: hidden;
          margin: 0 !important;
          /*flex: 1;*/
        }

        li:nth-child(2) {
          padding: 0 2px;
        }

        img {
          width: 100%;
          min-height: small_height;
        }
      }
    }

    .video {
      video {
        width: 100%;
      }

      .video_wrapper {
        width: 100%;
        height: larger_height;
        position: relative;
        overflow: hidden;
        color: #999;

        .video_info {
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;

          img {
            position: absolute;
            width: 100%;
            min-height: larger_height;
            display: block;
            left: 0;
            top: 0;
            z-index: 111;
          }
        }

        .video_title {
          position: absolute;
          width: 100%;
          height: 80px;
          top: 0;
          left: 0;
          color: #fff;
          background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, rgba(0, 0, 0, .5)), color-stop(100%, transparent));
          z-index: 222;

          p {
            width: 100%;
            font-size: 14px;
            line-height: 24px;
            padding: 8px 0.4rem 0;
            margin: 0;
            color: #fff !important;
          }
        }

        .totalTime {
          position: absolute;
          display: inline-block;
          width: 40px;
          right: 5px;
          bottom: 5px;
          background: rgba(0, 0, 0, .5);
          color: #fff;
          font-size: 12px;
          text-align: center;
          height: 20px;
          line-height: 20px;
          border-radius: 10px;
          z-index: 222;
        }

        .playRound {
          position: absolute;
          width: 50px;
          height: 50px;
          left: 50%;
          top: 50%;
          margin-left: -25px;
          margin-top: -25px;
          border-radius: 50%;
          background: rgba(0, 0, 0, .3);
          z-index: 222;
          border: 1px solid #fff;
        }

        .playSan {
          position: absolute;
          width: 0;
          height: 0;
          font-size: 0;
          border: 16px solid white;
          border-color: transparent transparent transparent rgba(255, 255, 255, .6);
          left: 50%;
          top: 50%;
          margin-left: -5px;
          margin-top: -16px;
        }
      }
    }

    #lookHere {
      background: #f4f5f6;
      border: none !important;
      margin: 0 !important;

      p {
        font-size: 12px;
        line-height: 18px;
        color: #00939c;
        text-align: center;
        user-select: none;
        margin: 0;
        padding: 10px 0;
      }
    }
  }
</style>
