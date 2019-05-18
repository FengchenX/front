<template>
	<div class="grid-content">
    <el-row :gutter="20">
      <el-col :span="4">
        <div class="grid-content bg-both-sides">
          <operate-left :items="items"></operate-left>
        </div>
      </el-col>

      <el-col :span="20">
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
}

</script>

<style scoped>
  .grid-content {
    border-radius: 4px;
    padding: 20px;
  }
</style>
