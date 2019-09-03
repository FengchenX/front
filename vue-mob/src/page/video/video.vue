<template>
  <div id="myVideo">
    <mt-cell
      title="小视频"
      to="/small-video"
      is-link
      value="">
      <img slot="icon" src="../../assets/img/视频.png" width="24" height="24">
    </mt-cell>
    <mt-cell
      title="文章"
      to="/article"
      is-link
      value="">
      <img slot="icon" src="../../assets/img/视频.png" width="24" height="24">
    </mt-cell>
    <mt-cell
      title="木作过程"
      to="/small-video"
      is-link
      value="">
      <img slot="icon" src="../../assets/img/视频.png" width="24" height="24">
    </mt-cell>
    <mt-cell
      title="木作欣赏"
      to="/small-video"
      is-link
      value="">
      <img slot="icon" src="../../assets/img/视频.png" width="24" height="24">
    </mt-cell>
    <my-foot></my-foot>
  </div>
</template>

<script>
    // import VideoSwipe from './components/videoSwipe'
    export default {
        name: 'myVideo',
        data() {
            return {
                // titles: [{name: '小视频', path: '/small-video'}]
            }
        },
        components: {},
        methods: {}
    }
</script>

<style scoped>

</style>
