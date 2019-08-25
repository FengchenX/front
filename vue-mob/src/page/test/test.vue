<template>
  <div id="test">
     <router-link to="/me">测试权限</router-link>
  </div>
</template>

<script>
import cache from '@/utils/cache'
    export default {
        name: 'test',
        data() {
            return {
            }
        },
        methods: {
        },
        mounted() {
            cache.removeLocal('userID')
            cache.removeLocal('session')
        }
    }
</script>

<style lang="stylus" scoped>
  #test{
  }
</style>



