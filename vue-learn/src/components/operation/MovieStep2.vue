<template>
  <div>
    <el-table
      ref="multipleTable"
      :data="videoList"
      tooltip-effect="dark"
      style="width: 100%;"
      :height="540"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="name"
        label="视频"
        width="180">
      </el-table-column>
      <el-table-column
        prop="url"
        label="链接地址"
        width="180">
      </el-table-column>
      <el-table-column
        prop="describe"
        label="描述">
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        layout="prev, pager, next"
        :page-size="pageSize"
        :current-page="currentPage"
        @current-change="handleCurrentChange"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: "MovieStep2",
    props:{
    },
    data() {
      return {
        currentPage: 1,
        pageSize: 5,
        pageFilter: {
          sort: '',
          order: '',
          limit: '',
          offset: ''
        },
        selectRow:[]
      }
    },
    computed: {
      ...mapGetters([
        'requesting',
        'error',
        'videoList',
        'total',
        'movie'
      ])
    },
    mounted() {
      this.pageFilter.offset = this.currentPage -1;
      this.pageFilter.limit = this.pageSize;
      this.$store.dispatch('getVideos', this.pageFilter);
    },
    methods: {
      handleSelectionChange(val) {
        this.selectRow = val
      },
      handleCurrentChange(page) {
        this.currentPage = page;
        this.pageFilter.offset = (this.currentPage-1)*this.pageSize
        this.$store.dispatch('getVideos', this.pageFilter);
      },
      handleClick: function(){
        this.selectRow.forEach((row)=>{
          let mv = {movie_id: this.movie.id, meta: row.id}
          this.$store.dispatch('addMV', mv).then(()=>{})
        })
      }
    }
  }
</script>

<style scoped>

</style>
