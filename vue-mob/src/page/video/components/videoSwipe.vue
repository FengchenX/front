<template>
  <router-link :to="title.path" style="font-size: medium; line-height: 12px">
    {{ title.name }}
    <mt-swipe :auto="4000" @change="handleChange" style="height: 150px; text-align: center">
      <mt-swipe-item>
        <img src="../../../assets/img/视频.png" style="height: 136px">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../../assets/img/视频.png" style="height: 136px">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../../assets/img/视频.png" style="height: 136px">
      </mt-swipe-item>
    </mt-swipe>
  </router-link>
</template>

<script>
    export default {
        name: 'videoSwipe',
        props: {
            title: {
                name: '',
                path: ''
            }
        },
        methods: {
            handleChange: function (index) {
                console.log(index)
            }
        }
    }
</script>

<style scoped>

</style>
