<template>
  <el-row :gutter="20">
    <el-col :span="12">
      <el-form ref="form" :model="form" label-width="80px" class="form-video">
        <el-form-item label="视频名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="视频描述">
          <el-input v-model="form.describe"></el-input>
        </el-form-item>
        <el-form-item label="拇指图">
          <el-input v-model="form.thumb"></el-input>
        </el-form-item>
        <el-form-item label="视频类型">
          <el-radio-group v-model="form.type">
            <el-radio label="电影"></el-radio>
            <el-radio label="电视剧"></el-radio>
            <el-radio label="动漫"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <el-upload
            class="upload-demo"
            ref="upload"
            :action="fileUrl"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList"
            :before-upload="beforeUpload"
            :auto-upload="false"
            :multiple="false"
            :data="form">
            <el-button slot="trigger" size="small" type="primary">
              选取文件
            </el-button>
            <div slot="tip" class="el-upload__tip">
              上传视频可能需要较长时间, 请耐心等待!
            </div>
          </el-upload>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
import { mapGetters } from 'vuex'

var conf = require('config/conf.js');

export default {
  name: 'VideoUp',
	data() {
    return {
      form: {
        name: '',
        describe: '',
        thumb: '',
        type: '',
      },
      fileList: [],
      fileUrl: conf.File,
    }
  },
  // components: {
  // },
  // computed: {
	// 	...mapGetters([
	// 		'requesting',
	// 		'error',
	// 		'toplist'
	// 	])
  // },
  // mounted(){
  //   this.$store.dispatch('toplist')
  // },
  methods: {
    onSubmit: function() {
      console.log('submit!');
      // console.log(this.form)
      this.$refs.upload.submit();
    },

    submitUpload: function() {
      this.$refs.upload.submit();
    },
    handleRemove: function(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview: function(file) {
      console.log(file);
    },
    beforeUpload: function (file) {

    }
  }
}

</script>

<style scoped>
  .form-video{
    text-align: left;
  }
  .upload-demo{
    line-height: 50px;
  }
</style>
