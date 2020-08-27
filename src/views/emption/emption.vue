<template>
  <div class="app-container">
    <van-nav-bar
      class="bar"
      fixed
      placeholder
      title="购买记录"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="list" v-for="(item,index) in list" :key="index" @click="orderInfo(item.id)">
        <div class="flex-wrap">
            <div class="flex-center">
                <van-icon name="contact" color="#00D231" />
                <span>{{item.stuName}}</span>
            </div>
            <div>
                <van-icon name="arrow" />
            </div>
        </div>
        <div class="flex-wrap">
            <div>
                购买日期
            </div>
            <div>
                {{item.orderDate}}
            </div>
        </div>
        <div class="flex-wrap">
            <div>
                购买产品
            </div>
            <div>
               成长计划
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import { queryWxOrders } from "@/api/order";
export default {
  name: "emption",
  data() {
    return {
      list:[],
    };
  },
  mounted(){
    queryWxOrders().then(res=>{
      if(res.code==200){
        this.list=res.dataList;
      }
    })
  },
  methods: {
    orderInfo(id){
      this.$router.push({
        path: "/info",
        query: {
          id: id
        }
      });
    },
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>
    
<style lang="less" scoped>
.app-container {
  min-height: 100vh;
  background: #F4F4F4;
}
.list{
  margin: 5px 10px;
  padding: 10px;
  border-radius: 10px;
  font-size: 14px;
  background: #fff;
  line-height: 35px;
  color: #626262;
}
</style>