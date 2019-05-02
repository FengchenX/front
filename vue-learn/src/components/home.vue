<template>
	<div>
		<el-row :gutter="20">
			<el-col :span="6" v-for="video in videos">
        <div class="grid-content bg-purple">
          <VideoItem :video=video></VideoItem>
        </div>
      </el-col>
		</el-row>
	</div>
</template>

<script>
import VideoItem from 'components/VideoItem'
import { mapGetters } from 'vuex'

export default {
	data() {
		return {
			videos: [
        {id: '1', name: 'video1', url: '', describe: '', thumb:''},
			  {id: '2', name: 'video2', url: '', describe: '', thumb:''},
				{id: '3', name: 'video3', url: '', describe: '', thumb:''},
			  {id: '4', name: 'video4', url: '', describe: '', thumb:''},
				{id: '5', name: 'video5', url: '', describe: '', thumb:''},
			  {id: '6', name: 'video6', url: '', describe: '', thumb:''},
				{id: '7', name: 'video7', url: '', describe: '', thumb:''}
			]
		}
  },
  components: {
    VideoItem
  },
  computed: {
		...mapGetters([
			'requesting',
			'error',
			'toplist'
		])
  },
  mounted(){
    this.$store.dispatch('toplist')
  }
}

</script>

<style scoped>
  .el-row {
	margin-bottom: 20px;
	/* &:last-child {
		margin-bottom: 0;
	} */
  }
  .el-row:last-child {
	margin-bottom: 0;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>