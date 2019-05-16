<template>
  <div>
    <el-row class="movie-status">
      <el-col :span="4">
        <div style="height: 36px"></div>
      </el-col>
      <el-col :span="16">
        <el-steps :active="active" finish-status="success">
          <el-step title="步骤 1" icon="el-icon-edit"></el-step>
          <el-step title="步骤 2" icon="el-icon-upload"></el-step>
        </el-steps>
      </el-col>
      <el-col :span="4">
        <div style="height: 36px"></div>
      </el-col>
    </el-row>

    <div style="height:calc(100vh - 348px);">
      <MovieStep1 ref="MovieStep1" v-if="showStep1"></MovieStep1>
      <MovieStep2 ref="MovieStep2" v-if="showStep2"></MovieStep2>
    </div>
    <el-row>
      <el-col :span="20" style="height: 36px"></el-col>
      <el-col :span="4"><el-button style="margin-top: 12px;" @click="next">下一步</el-button></el-col>
    </el-row>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  import MovieStep1 from 'components/operation/MovieStep1'
  import MovieStep2 from 'components/operation/MovieStep2'

  var conf = require('config/conf.js');

  export default {
    name: 'AddMovie',
    data() {
      return {
        active: 0,
        showStep1: true,
        showStep2: false,
      };
    },
    components: {
      MovieStep1,
      MovieStep2
    },
    methods: {
      next: function() {
        switch (this.active) {
          case 0:
            this.showStep1= false;
            this.showStep2= true;
            this.$refs.MovieStep1.onSubmit();
            break;
          case 1:
            this.showStep1= true;
            this.showStep2= false;
            this.$refs.MovieStep2.handleClick();
            break;
        }
        if (this.active++ > 1) this.active = 0;
      }
    }
  }

</script>

<style scoped>
  .movie-status{
    line-height: 30px;
    text-align: left;
  }
</style>
