<template>
  <div class="app-container">
    <van-nav-bar
      class="bar"
      fixed
      placeholder
      title="成长计划"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-image class="image" :src="plan01"></van-image>
    <van-image class="image" :src="plan02"></van-image>
    <van-image class="image" :src="plan03"></van-image>
    <div class="btn-box">
       <div class="submit">立即加入</div>
    </div>
   
  </div>
</template>
<script>
import plan01 from "@/assets/image/365plan_01.jpg"
import plan02 from "@/assets/image/365plan_02.jpg"
import plan03 from "@/assets/image/365plan_03.jpg"
export default {
  name: "plan",
  data() {
    return {
      plan01:plan01,
      plan02:plan02,
      plan03:plan03,
    };
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
  background: #00D231;
  padding-bottom: 50px;;
  /deep/.van-image{
    margin: 0;
    padding: 0;
    display: block;
  }
  .btn-box{
     position: fixed;
     width: 100%;
     padding: 0 18px;
     box-sizing: border-box;
     bottom: 30px;
     .submit{
        background: #E56B15;
        line-height: 50px;
        height: 50px;
        color: #fff;
        text-align: center;
        border-radius: 40px;
      }
  }
  
}
</style>