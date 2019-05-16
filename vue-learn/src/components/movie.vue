<template>
  <el-row :gutter="20">
    <el-col :span="4"><div class="grid-content bg-both-sides"></div></el-col>
    <el-col :span="16">
      <div class="grid-content bg-purple">
        <el-row :gutter="20">
          <el-col :span="6" v-for="video in getVideos">
            <div class="grid-content bg-purple">
              <VideoItem :video=video></VideoItem>
            </div>
          </el-col>
        </el-row>
        <div class="block">
          <el-pagination
            layout="prev, pager, next"
            :page-size="pageSize"
            :current-page="currentPage"
            @current-change="handleCurrentChange"
            :total="movieList.total">
          </el-pagination>
        </div>
      </div>
    </el-col>
    <el-col :span="4"><div class="grid-content bg-both-sides"></div></el-col>
  </el-row>
</template>

<script>
import VideoItem from 'components/common/VideoItem'
import { mapGetters } from 'vuex'
export default {
  name: "movie",
  data() {
    return {
      currentPage: 1,
      pageSize: 5,
      pageFilter: {
        sort: '',
        order: '',
        limit: '5',
        offset: '0'
      },
    }
  },
  components: {
    VideoItem
  },
  computed: {
    ...mapGetters([
      'requesting',
      'error',
      'movieList'
    ]),
    getVideos() {
      let videos = []
      this.movieList.movies.forEach((movie)=>{
        let {id, name, describe}=movie
        let video = {id, name, describe, type:'movie'}
        console.log(video)
        videos.push(video)
      })
      return videos
    }
  },
  mounted(){
    this.$store.dispatch('getMovies', this.pageFilter);
  },
  methods: {
    handleCurrentChange(page) {
      this.currentPage = page;
      this.pageFilter.offset = (this.currentPage-1)*this.pageSize
      this.$store.dispatch('getMovies', this.pageFilter);
    },
  }
}
</script>

<!--lang="stylus"-->
<style scoped>
  .bg-purple {
    background: #d3dce6;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
