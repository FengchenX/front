<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-col :span="20">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
                   @select="handleSelect" text-color="#303133" :router="true">
            <el-menu-item v-for="menu in menus" :index="menu.path">{{ menu.label }}</el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="4">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
                   @select="handleSelect" text-color="#303133" :router="true">
            <el-menu-item v-for="menu in right" :index="menu.path">{{ menu.label }}</el-menu-item>
          </el-menu>
        </el-col>
      </el-header>

      <el-main style="height:calc(100vh - 120px);">
        <router-view></router-view>
      </el-main>

      <el-footer>
        Footer
        <el-button v-on:click="testClick">test player</el-button>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

var conf = require('config/conf')

export default {
  name: 'app',
  data() {
    return {
      activeIndex: '/home',
      menus: conf.menus,
      right: conf.rightMenus,
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    testClick() {
      // let routeData = this.$router.resolve({path: '/player', query: {video:'/file/go/a.txt'}});
      // window.open(routeData.href, '_blank');
      window.open('/test', '_blank')
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
    height: 100%;
    padding: 0px;
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
