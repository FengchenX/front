<template>
    <div class="bg">
      <el-row>
        <el-col :span="20">
          <video src="C:/Users/TITAN/Downloads/vue视频学习/1-什么是路由以及使用步骤 - 妙味课堂.mp4"></video>
        </el-col>
        <el-col :span="4"></el-col>
      </el-row>
    </div>
</template>

<script>
    export default {
        name: "Player"
    }
</script>

<style scoped>
  .bg {
    background: rgb(34,38,45);
  }
  .el-main {
    padding: 0px;
  }
</style>
