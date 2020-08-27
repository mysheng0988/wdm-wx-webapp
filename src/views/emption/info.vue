<template>
  <div class="app-container">
    <van-nav-bar
      class="bar"
      fixed
      placeholder
      title="订单信息"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="order">
      <p>订单信息</p>
      <van-cell title="订单号" :value="info.orderId" />
      <van-cell title="下单日期" :value="info.orderDate" />
    </div>
    <div class="user">
      <p>用户信息</p>
      <van-cell title="会员姓名" :value="info.stuName" />
      <van-cell title="会员性别" :value="info.stuSex==1?'男':'女'" />
      <van-cell title="出生日期" :value="info.birthDate" />
      <van-cell title="证件号码" :value="info.idCard" />
      <van-cell title="所在机构" :value="info.orderId" />
      <van-cell title="所在年级" :value="info.firstOrg" />
      <van-cell title="所在班级" :value="info.secondOrg" />
      <van-cell title="联系人" :value="info.linkman" />
      <van-cell title="联系电话" :value="info.linkTel" />
      <van-cell title="联系地址" :value="info.address" />
    </div>
  </div>
</template>
<script>
import { queryOrder } from "@/api/order";
export default {
  name: "info",
  data() {
    return {
      info:"",
    };
  },
  mounted(){
     this.id = this.$route.query.id;
    queryOrder(this.id).then(res=>{
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