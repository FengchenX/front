<template>
  <el-card :body-style="{ padding: '0px' }">
<!--    <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">-->
    <div style="padding: 14px;">
      <el-link :underline="false" type="primary" :href="item.path" target="_blank">
        <span> {{ item.name }} </span>
      </el-link>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'OperateItem',
  props: {
		item: {
			type: Object
		}
	},
	data() {
    return {
      currentDate: new Date(),
      name: '好吃的汉堡'
    };
  },
  methods: {
    upload: function () {
    }
  }
}
</script>

<style scoped>
  .image {
    width: 100%;
    display: block;
  }
</style>
