<template>
  <el-row :gutter="20">
    <el-col :span="6" style="height: 36px;"></el-col>
    <el-col :span="12">
      <Pop1 :msg="msg" :centerDialogVisible="centerDialogVisible" :closeDialog="closeDialog"></Pop1>
      <el-form ref="form" :model="movie" label-width="80px">
        <el-form-item label="视频名称">
          <el-input v-model="movie.name"></el-input>
        </el-form-item>
        <el-form-item label="视频描述">
          <el-input v-model="movie.describe"></el-input>
        </el-form-item>
        <el-form-item label="拇指图">
          <el-input v-model="movie.thumb"></el-input>
        </el-form-item>
        <el-form-item label="电影类型">
          <el-checkbox-group v-model="movie.types">
            <el-checkbox label="爱情" name="type"></el-checkbox>
            <el-checkbox label="恐怖" name="type"></el-checkbox>
            <el-checkbox label="喜剧" name="type"></el-checkbox>
            <el-checkbox label="动作" name="type"></el-checkbox>
            <el-checkbox label="科幻" name="type"></el-checkbox>
            <el-checkbox label="悬疑" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </el-form>
    </el-col>
    <el-col :span="6" style="height: 36px;"></el-col>
  </el-row>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Pop1 from 'components/common/Pop1'

  export default {
    name: "MovieStep1",
    props:{
    },
    data() {
      return {
        movie: {
          name: '',
          describe: '',
          thumb: '',
          types:[],
          main_players: []
        },
        centerDialogVisible: false
      };
    },
    computed: {
      ...mapGetters([
        'requesting',
        'error',
        'msg',
      ])
    },
    methods:{
      onSubmit: function () {
        this.$store.dispatch('addMovie', this.movie).then(()=>{
          this.centerDialogVisible = true;
        });
      },
      closeDialog: function () {
        this.centerDialogVisible = false;
      }
    },
    components: {
      Pop1
    }
  }
</script>

<style scoped>

</style>

