<template>
  <div class="app-container">
    <van-nav-bar
      class="bar"
      fixed
      placeholder
      title="会员信息"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="order">
      <p>基本信息</p>
      <van-cell title="会员号" :value="info.memberNo" />
      <van-cell title="会员姓名" :value="info.stuName" />
      <van-cell title="会员性别" :value="info.sex==1?'男':'女'"/>
      <van-cell title="证件号码" :value="info.idCard" />
      <van-cell title="出生日期" :value="info.birthDate" />
    </div>
    <div class="user">
      <p>会员信息</p>
      <van-cell title="会员产品" :value="info.productType==1?'365计划':'其他'" />
      <van-cell title="会员状态" :value="info.state|formatMemberState" />
      <van-cell title="复查次数" :value="info.reviewNo+'/'+info.reviewTimes" />
      <van-cell title="购买日期" :value="info.createDate" />
      <van-cell title="有效期" :value="info.expiryDate" />
      <van-cell title="负责客服" :value="info.memberManager" />
      <van-cell title="联系电话" :value="info.memberTel" />
    </div>
  </div>
</template>
<script>
import { queryMembersInfo } from "@/api/member";
export default {
  name: "mem-info",
  data() {
    return {
      id:"",
      info:"",
    };
  },
   filters: {
    formatMemberState(val) {
      switch (val) {
        case 1:
          return "有效";
          break;
        case 2:
          return "已过期";
          break;
        case 3:
          return "未启用";
          break;
      }
    }
  },
  mounted(){
     this.id = this.$route.query.id;
    queryMembersInfo(this.id).then(res=>{
      if(res.code==200){
        this.info=res.dataList[0]
      }
      
    })
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
.order,
.user {
  margin: 5px 10px;
  padding: 10px;
  border-radius: 10px;
  font-size: 14px;
  background: #fff;
  line-height: 35px;
}
</style>