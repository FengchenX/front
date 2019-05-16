<template>
  <div class="grid-content bg-purple">
    <el-row :gutter="20">
      <el-col :span="6" v-for="app in items">
        <div class="grid-content bg-purple">
          <OperateItem :item=app></OperateItem>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import OperateItem from  'components/operation/OperateItem'

var conf = require('config/conf.js')

export default {
  name: 'OperateContent',
	data() {
		return {
      items:conf.items
		}
  },
  components: {
    OperateItem,
  },
  // computed: {
	// 	...mapGetters([
	// 		'requesting',
	// 		'error',
	// 		'toplist'
	// 	])
  // },
  // mounted(){
  //   this.$store.dispatch('toplist')
  // }
}

</script>

<style scoped>
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
