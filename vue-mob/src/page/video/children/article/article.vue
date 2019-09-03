<template>
  <div id="myArticle">
    <my-header fixed :title='title' v-goTop:click='true'>
      <a slot="left" class="back-black" @click.stop='$router.go(-1)'></a>
    </my-header>

    <div class="content">
      <div class="container" v-swiper:swiperRight='true'>
        <pullContainer></pullContainer>
      </div>
    </div>
  </div>
</template>

<script>
    import pullContainer from './components/pullContainer'

    export default {
        // name: 'article'
        data() {
            return {
                title: '老常工艺 * 文章'
            }
        },
        components: {
            pullContainer
        }
    }
</script>

<style scoped lang="stylus">
  #myArticle {
    height 100%
    overflow auto

    header {
      background: #fff;
      color: #333;
      font-size: 16px;
    }
  }
</style>
