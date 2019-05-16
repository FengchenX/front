<template>
	<div class="grid-content">
    <el-row :gutter="20">
      <el-col :span="4">
        <div class="grid-content bg-both-sides">
          <operate-left :items="items"></operate-left>
        </div>
      </el-col>

      <el-col :span="20">
<!--        <div class="grid-content bg-purple">-->
<!--          <el-row :gutter="20">-->
<!--            <el-col :span="6" v-for="app in items">-->
<!--              <div class="grid-content bg-purple">-->
<!--                <OperateItem :item=app></OperateItem>-->
<!--              </div>-->
<!--            </el-col>-->
<!--          </el-row>-->
<!--        </div>-->
        <router-view></router-view>
      </el-col>

    </el-row>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import OperateItem from  'components/operation/OperateItem'
import OperateLeft from 'components/operation/OperateLeft'

var conf = require('config/conf.js');


export default {
  name: 'operation',
	data() {
		return {
		  items: conf.items
    }
  },
  components: {
    OperateItem,
    OperateLeft,
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
  }
</style>
