<template>
  <div class="app-container">
    <van-nav-bar
      class="bar"
      fixed
      placeholder
      title="康复中心"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="recovery">正在升级，敬请期待 ~</div>
  </div>
</template>
<script>
export default {
  name: "recovery",
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
  background: #F4F4F4;
  .recovery{
      width: 100%;
      position: absolute;
      left: 0;
      top:50%;
      text-align: center;
      color: #00D131;
  }
}
</style>