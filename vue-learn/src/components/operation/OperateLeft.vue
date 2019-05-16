<template>
  <div class="left-pane">
    <div class="left-title">
      <span style="display: inline-block;height: 40px;vertical-align: middle; line-height: 0px;">
        <img src="../../assets/images/operation/operation.png" style="position: relative;top: 8px;left: 22px; width: 20px">
      </span>
      <span style="display: inline-block;height: 40px;text-align:center;padding-left: 26px;">
        运维管理
      </span>
    </div>
    <el-menu
      class="el-menu-vertical-demo"
      @select="handleSelect"
      :router="true"
      background-color="#FFFFFF"
      text-color="#606266"
      active-text-color="#409EFF">
      <el-menu-item v-for="item in items" :index="item.path">
        <i :class="item.icon" ></i>
        <span slot="title">{{item.name}}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'OperateLeft',
  props: {
		items: {
			type: Array
		}
	},
	data() {
    return {};
  },
  methods: {
    handleSelect: function () {
    }
  }
}
</script>

<style scoped>
  .left-title{
    background: #409EFF;
    text-align: left;
    color: white;
    height: 40px;
    line-height: 40px;
  }
  .el-menu-vertical-demo{
    text-align: left;
  }
</style>
