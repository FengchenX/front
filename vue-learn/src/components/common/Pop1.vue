<template>
  <el-dialog
    title="消息"
    :visible.sync="centerDialogVisible"
    :close="close"
    width="30%"
    :show-close="false"
    :close-on-click-modal="false"
    center>
    <span>{{ msg }}</span>
    <span slot="footer" class="dialog-footer">
  </span>
  </el-dialog>
</template>

<script>
  export default {
    name: "Pop1",
    props: {
      centerDialogVisible: false,
      msg: '',
      closeDialog: Function
    },
    data() {
      return {
        interval: Function,
        count: 1
      }
    },
    mounted() {
      this.startInterval();
    },
    methods: {
      startInterval() {
        //定时
        this.interval = setInterval(() => {
          if (this.centerDialogVisible === true){
            this.count++
            if (this.count > 4) {
              this.closeDialog();
              this.count = 1;
            }
          }
        }, 1000)
      },
      close: function () {
        this.closeDialog();
      }
    }
  }
</script>

<style scoped>

</style>
