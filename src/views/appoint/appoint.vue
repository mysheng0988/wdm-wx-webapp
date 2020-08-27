<template>
  <div class="app-container">
    <van-nav-bar
      class="bar"
      fixed
      placeholder
      title="快速预约"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="item-box">
      <div class="item flex-column" @click="tabChange(1)">
        <van-image class="img" :src="confim"></van-image>
        <p>确诊通道</p>
      </div>
      <div class="item flex-column" @click="tabChange(2)">
        <van-image class="img" :src="recovery"></van-image>
        <p>康复中心</p>
      </div>
      <div class="item flex-column" @click="tabChange(3)">
        <van-image class="img" :src="monitor"></van-image>
        <p>监测中心</p>
      </div>
    </div>
    <van-image class="footer" :src="footer"></van-image>
  </div>
</template>
<script>
import confim from "@/assets/image/icon-confim.png";
import recovery from "@/assets/image/icon-recovery.png";
import monitor from "@/assets/image/icon-monitor.png";
import footer from "@/assets/image/index-footer.png";
export default {
  name: "appoint",
  data() {
    return {
      confim,
      recovery,
      monitor,
      footer
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    tabChange(val) {
      switch (val) {
        case 1:
            this.$router.push({path: "/confirm"});
          break;
        case 2:
             this.$router.push({path: "/recovery"});
          break;
        case 3:
             this.$router.push({path: "/monitor"});
          break;
      }
    }
  }
};
</script>
    
<style lang="less" scoped>
.app-container {
  height: 100vh;
  background: #e5faea;
  .item-box {
    margin: 70px 30px;
    .item {
      margin: 10px 0;
      background: #fff;
      height: 100px;
      p {
        color: #525252;
      }
      .img {
        margin: 10px 0;
        width: 45px;
        height: 45px;
        overflow: hidden;
        vertical-align: middle;
      }
    }
  }
  .footer {
    position: fixed;
    right: 20px;
    bottom: 0;
    height: 134px;
    width: 104px;
  }
}
</style>