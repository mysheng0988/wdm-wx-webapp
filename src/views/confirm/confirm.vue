<template>
  <div class="app-container">
    <van-nav-bar
      class="bar"
      fixed
      placeholder
      title="确诊通道"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-swipe class="swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <van-image :src="confirm01"></van-image>
      </van-swipe-item>
      <van-swipe-item>
        <van-image :src="confirm02"></van-image>
      </van-swipe-item>
    </van-swipe>
    <div class="container">
      <div class="title">北京协和医院青少年脊柱畸形诊断治疗协作中心</div>
      <div
        class="text"
      >北京协和医院骨科专家团队成立了“北京协和医院青少年脊柱畸形诊断治疗协作中心”。该中心全面关注全国青少年的脊柱健康，致力于脊柱侧凸（侧弯）畸形的学校筛查、监测、诊断、治疗、康复锻炼等的规范化建设。中心同时联合中华少年儿童慈善救助基金会的“豌豆苗脊柱健康公益项目”，通过走进全国中小学进行入校筛查、科普宣教、脊柱健康监测、脊柱康复治疗等措施，形成系统化的青少年脊柱健康管理体系。中心专家将为患儿开设确诊绿色通道。</div>
      <div
        class="text"
      >我们的目标：走进全国中小学，对于青少年脊柱侧凸畸形做到早关注、早预防、早发现、早治疗。帮助青少年远离脊柱侧凸（侧弯）畸形危害，有效遏制脊柱侧凸畸形的发展，挺起中华民族的脊梁，是我们义不容辞的责任。</div>
      <div class="text">中心顾问：北京协和医院骨科邱贵兴院士 中心负责人：北京协和医院骨科仉建国主任</div>
      <div class="text">中心专家组组长：北京协和医院骨科仉建国主任</div>
      <div
        class="text"
      >中心专家组成员：北京协和医院骨科王以朋教授、沈建雄教授、赵宏教授、田野教授、胡建华教授、赵宇教授、李书纲教授、于斌教授、余可谊副教授、李其一副教授、庄乾宇副教授、王海副教授</div>
      <div class="btn-box">
        <van-button round block class="submit" native-type="button" @click="callPhone">快速预约</van-button>
      </div>
    </div>
  </div>
</template>
<script>
import confirm01 from "@/assets/image/confirm01.png";
import confirm02 from "@/assets/image/confirm02.jpg";
export default {
  name: "confirm",
  data() {
    return {
      confirm01,
      confirm02
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    callPhone () {
        window.location.href = 'tel:4006537532';
    }
  }
};
</script>
    
<style lang="less" scoped>
.app-container {
  min-height: 100vh;
  background: #f4f4f4;
}
.container {
  margin-top: 10px;
  padding: 18px 30px;
  background: #fff;
  line-height: 30px;
  font-size: 14px;
  .title {
    margin: 10px 0;
    color: #00d132;
    font-weight: bold;
  }
  .text {
    text-indent: 2em;
  }
}
.btn-box {
  margin: 30px 0;
  padding: 0 30px;
  .submit {
    color: #fff;
    background: #00d132;
  }
}
</style>