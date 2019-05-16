<template>

  <el-button style="padding: 0px" v-on:click="handleClick">
    <el-card :body-style="{ padding: '0px' }">
      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
      <div style="padding: 14px; line-height: 14px; height: 60px; text-align: left">
        <span> {{ video.name }} </span>
        <div> {{ video.describe }} </div>
      </div>
    </el-card>
  </el-button>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'VideoItem',
  props: {
		video: {
		  id: '',
			name: '',
      describe: '',
      type: '',
      score: 0
		}
	},
  computed: {
    ...mapGetters([
      'requesting',
      'error',
      'mvList'
    ])
  },
	data() {
    return {
      currentDate: new Date(),
      name: '好吃的汉堡'
    };
  },
  methods:{
    async handleClick(){
      if (this.video.type === 'movie'){
        let args = {movie_id: this.video.id, params: {}};
        await this.$store.dispatch('getMVs', args);
        let a = this.mvList.movie_videos[0];
        // a.meta
        await this.$store.dispatch('getVideo', a.meta).then(()=>{});
        let url = this.$store.state.videoStore.video.url.replace("File:/videos", "fileApi/files/static/videos")
        window.open(url, "_blank")
        // window.open('/player', "_blank")
      }
    }
  }
}
</script>

<style scoped>
  .image {
    width: 100%;
    display: block;
    max-height: 265px;
  }

</style>
