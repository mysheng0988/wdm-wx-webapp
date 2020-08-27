<template>
  <div class="app-container">
    <van-nav-bar
      class="bar"
      fixed
      placeholder
      title="复查结果"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="user-box">
        <div class="flex-wrap">
            <div>
                <van-image class="img" :src="avatar"></van-image>
                <p>小明</p>
            </div>
            <div class="item">
                <p>性别：男</p>
                <p>民族：汉</p>
                <p>出生日期：2008/01/01</p>
                <p>检测日期：2008/01/01</p>
            </div>
        </div>
    </div>
    <div class="result">
      <van-cell title="身高cm" value="小明" />
      <van-cell title="体温°C" value="男" />
       <van-cell title="视力（左）" value="小明" />
       <van-cell title="视力（右）" value="小明" />
      <van-cell title="脉率/次/分" value="男" />
       <van-cell title="血氧饱和度%" value="小明" />
      <van-cell title="肌肉量kg" value="男" />
       <van-cell title="体质指数BMI" value="小明" />
      <van-cell title="基础代谢率Kcal/日" value="男" />
       <van-cell title="体型" value="小明" />
      <van-cell title="坐高" value="男" />
       <van-cell title="腰臀比" value="小明" />
      <van-cell title="肺功能" value="男" />
       <van-cell title="剃刀背" value="小明" />
      <van-cell title="驼背" value="男" />
       <van-cell title="高低肩" value="小明" />
      <van-cell title="腰线是否对称" value="男" />
       <van-cell title="髋关节是否等高" value="小明" />
      <van-cell title="双下肢是否等长" value="男" />
       <van-cell title="膝关节检查结果" value="小明" />
      <van-cell title="足底压力分析" value="男" />
    </div>
    <div class="remarks">
        <p>备注</p>
        <p class="label">年龄≤12岁不检测肺功能与人体成分！</p>
    </div>
    <div class="label">
        <p>温馨提示：本次复查报告不能用于二次会诊</p>
        <p>或其他任何医学判断目的的使用</p>
    </div>
  </div>
</template>
<script>
import avatar from "@/assets/image/avatar.png"
export default {
  name: "info",
  data() {
    return {
        avatar:avatar,
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
  min-height: 100vh;
  background: #f4f4f4;
}
.user-box{
    box-sizing: border-box;
    padding: 20px 40px;
    background: #42B240;
    height: 150px;
    line-height: 2;
    font-size: 14px;
    text-align: center;
    color: #fff;
    margin-bottom: 10px;
    .img{
        width: 80px;
        height: 80px;
        overflow: hidden;
        vertical-align: middle
    }
    .item{
        text-align: left;
    }
}
.result, .remarks{
  margin: 5px 10px;
  padding: 10px;
  border-radius: 10px;
  font-size: 14px;
  background: #fff;
  line-height: 35px;
}
.label{
    padding: 20px 10px;
    font-size: 14px;
    text-align: center;
    color: #999999
}
</style>