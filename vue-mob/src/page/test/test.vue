<template>
  <div id="test">
    <a id="a_id" @click="down">下载</a>
  </div>
</template>

<script>
    export default {
        name: 'test',
        data() {
            return {
                myData: [],
                keyword: '',
                now: 0,
                pageNum: 1,
                pageSize: 10
            }
        },
        methods: {
            down() {
                console.log('111111111111111')
                var a = $('#a_id').href('http://10.10.163.53:8090/files/static/batch/template/平台场景分类批量更新.xlsx')
                a.download = 'ab.xlsx'
                a.click()
                // this.download('http://10.10.163.53:8090/files/static/batch/template/平台场景分类批量更新.xlsx', 'ab.xlsx')
            }
        },
        mounted() {
        }
    }
</script>

<style lang="stylus" scoped>
  #test {
  }
</style>



