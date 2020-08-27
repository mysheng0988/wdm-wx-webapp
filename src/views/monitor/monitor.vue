<template>
  <div class="app-container">
    <van-nav-bar
      class="bar"
      fixed
      placeholder
      title="监测中心"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="notice flex-center">
      <van-icon name="volume-o" size="30px" color="#00D232" />
      <div class="text" style="color:#656565">点击下方要前往的监测中心，填写提交预约信息，完成预约。</div>
    </div>
    <div
      class="flex-wrap item"
      v-for="(item,index) in list"
      :key="index"
      @click="monitorCenterAppoint(item.id)"
    >
      <div class="img-box"></div>
      <div class="content">
        <div class="titel">{{item.monitorName}}</div>
        <div>服务时间：周一至周日9：00-17：00</div>
        <div>地址：{{item.area}}{{item.address}}</div>
        <van-button round block class="submit" native-type="submit">确认添加</van-button>
      </div>
    </div>
    <div class="submit-box"  @click="recordPage">
        <van-button round block class="submit">预约记录</van-button>
    </div>
  </div>
</template>
<script>
import { monitorCenterList } from "@/api/monitor";
export default {
  name: "monitor",
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.monitorCenterListData();
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    recordPage(){
        this.$router.push({path:"/record"})
    },
    monitorCenterAppoint(id) {
      this.$router.push({
        path: "/monAppoint",
        query: {
          id: id
        }
      });
    },
    monitorCenterListData() {
      monitorCenterList().then(res => {
        if (res.code == 200) {
          this.list = res.dataList;
        }
      });
    }
  }
};
</script>
    
<style lang="less" scoped>
.app-container {
  min-height: 100vh;
  background: #f4f4f4;
  .notice {
    padding: 10px 20px;
    background: #dbf1e0;
    font-size: 14px;
    line-height: 1.5;
    color: "#656565" !important;
    .text {
      margin-left: 10px;
    }
  }
  .item {
    margin: 10px 0;
    padding: 15px 20px;
    background: #fff;
    font-size: 12px;
    line-height: 30px;
    .img-box {
      width: 115px;
      height: 115px;
      border-radius: 10px;
      background: #ccc;
    }
    .titel {
      font-weight: bold;
    }
    .submit {
      width: 150px;
      height: 35px;
      margin: 0 auto;
      font-size: 16px;
      line-height: 35px;
      background: #00d131;
      color: #fff;
    }
  }
  .submit-box {
    margin-top: 50px;
    padding: 0 30px;
    .submit {
      box-sizing: border-box;
      font-size: 20px;
      background: #00d131;
      color: #fff;
    }
  }
}
</style>