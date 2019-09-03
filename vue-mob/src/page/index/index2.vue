<template>
  <div id="index">
    <!-- 头部 -->
    <!--    <my-header/>-->
    <!-- 内容区域 -->
    <pullContainer2></pullContainer2>
    <!-- 底部 -->
    <my-foot></my-foot>
  </div>
</template>

<script>
    import pullContainer2 from './components/pullContainer2'

    export default {
        name: 'index2',
        components: {
            pullContainer2
        }
    }
</script>

<style scoped>
  #index {
    height: 92%;
    overflow: auto;
  }
</style>
