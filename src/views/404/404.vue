<template>
  <div class="app-container">
    <van-nav-bar
      class="bar"
      fixed
      placeholder
      title="页面未找到"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-empty image="network" description="404-页面迷路了" />
  </div>
</template>
<script>
export default {
  name: "NOT",
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>
    
<style lang="less" scoped>
.app-container {
  height: 100vh;
  background: #ffffff;
  /deep/.van-nav-bar {
    background-color: #1092d4;
    color: #fff;
    .van-icon {
      color: #fff;
    }
    .van-nav-bar__title {
      color: #fff;
    }
  }
  /deep/ .van-nav-bar__text {
    color: #fff;
  }
}
</style>