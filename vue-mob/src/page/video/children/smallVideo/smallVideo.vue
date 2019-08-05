<template>
  <div id="smallVideo">
    <my-header fixed :title='title' v-goTop:click='true'>
      <a slot="left" class="back-black" @click.stop='$router.go(-1)'></a>
<!--      <a slot="right" class="menu" @click.stop='$refs.share.toggle()'></a>-->
    </my-header>

    <div class="content">
      <div class="container" v-swiper:swiperRight='true'>
        <pullContainer></pullContainer>
      </div>
    </div>
  </div>
</template>

<script>
    // eslint-disable-next-line no-unused-vars
  import pullContainer from './components/pullContainer'
export default {
        name: 'smallVideo',
      components: {
            pullContainer
      },
      data() {
            return {
                title: '小视频'
            }
      },
      mounted() {
          $('#detail .container').scrollTop(0)    // 初始化返回顶部
      }
}
</script>

<style scoped lang="stylus">
#smallVideo{
  height: 100%;
  overflow: auto;
  header {
    background: #fff;
    color: #333;
    font-size: 16px;
    .menu {
      background: url(../../../../assets/img/menu.png) no-repeat center center;
      background-size: 20px;
    }
  }
}
</style>
