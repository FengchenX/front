<template>
  <div id="foot">
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="首页">
        <img slot="icon" src="../assets/img/首页.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="影视文章">
        <img slot="icon" src="../assets/img/列表导航_影视.png">
        影视文章
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="../assets/img/我的.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
    import cache from '@/utils/cache'
    export default {
        name: 'myFoot',
        data() {
            return {
                selected: ''
            }
        },
        watch: {
            selected: function(val, oldVal) {
                // 这里就可以通过 val 的值变更来确定去向
                if (val === oldVal) {
                    return
                }
                switch (val) {
                    case '首页':
                        this.$router.push('/index2')
                        break
                    case '影视文章':
                        this.$router.push('/video')
                        break
                    case '我的':
                        this.$router.push('/me')
                        break
                }
                cache.setSession('tabIndex', val)
            }
        },
        activated() {
            this.selected = cache.getSession('tabIndex')
        }
    }
</script>

<style scoped>

</style>
