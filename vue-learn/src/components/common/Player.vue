<template>
    <div class="bg">
      <el-row style="height:calc(100vh - 250px); background: rgb(31,31,31)">
        <el-col :span="18" style="text-align: left">
          <video class="player" src="http://vjs.zencdn.net/v/oceans.mp4" controls="controls"></video>
        </el-col>
        <el-col :span="6" style="text-align: left">
          <div style="background: white; height:calc(100vh - 250px);">
          </div>
        </el-col>
      </el-row>
    </div>
</template>

<script>
    export default {
        name: "Player",
      created() {
          console.log(this.$route)
      }
    }
</script>

<style scoped>
  .bg {
    background: rgb(38,39,46);
    height:calc(100vh - 120px);
    padding-top: 60px;
    padding-left: 65px;
    padding-right: 128px;
  }
  .player{
    width: 100%;
    height: 630px;
  }
</style>
