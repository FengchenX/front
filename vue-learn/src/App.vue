<template>
  <div id="app">
<!--    <TopContainer></TopContainer>-->
<!--    <BHeader></BHeader>-->
<!--    <BContent :rows="rows"></BContent>-->
<!--    <BNavSide :options="options" v-on:change="isShowMask"></BNavSide>-->
<!--    <div class="wnd-mask" ref="mask" v-show="showMask"></div>-->
    <el-container>
      <el-header>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" text-color="#303133" router>
          <el-menu-item index="/home" >主页</el-menu-item>
          <el-menu-item index="/document">文档</el-menu-item>
          <el-menu-item index="/about">关于我</el-menu-item>
        </el-menu>
      </el-header>


      <el-main>
        <el-row :gutter="20">
          <el-col :span="4"><div class="grid-content bg-both-sides"></div></el-col>
          <el-col :span="16">
            <div class="grid-content bg-purple">
              <router-view></router-view>
            </div>
          </el-col>
          <el-col :span="4"><div class="grid-content bg-both-sides"></div></el-col>
        </el-row>
      </el-main>

      
      <el-footer>
        Footer
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      activeIndex: '/home',
      activeIndex2: '/home'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: #409EFF;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-menu{
    background: #409EFF;
  }  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .el-row {
    margin-bottom: 20px;
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
  /* .bg-both-sides {

  } */
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
