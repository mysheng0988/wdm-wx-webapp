<template>
  <div class="app-container">
    <van-nav-bar
      class="bar"
      fixed
      placeholder
      title="孩子列表"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="list" v-for="(item,index) in list" :key="index">
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
                性别
            </div>
            <div>
                {{item.sex==1?"男":"女"}}
            </div>
        </div>
        <div class="flex-wrap">
            <div>
                出生日期
            </div>
            <div>
               {{item.birthDate}}
            </div>
        </div>
        <div class="flex-wrap">
            <div>
                身份证号码
            </div>
            <div>
               {{item.idCard}}
            </div>
        </div>
    </div>
    <div class="btn-box">
        <van-button round block class="submit" @click="addUser">添加孩子</van-button>
    </div>
  </div>
</template>
<script>
import { queryStudents } from "@/api/user";
export default {
  name: "emption",
  data() {
    return {
        list:[],
    };
  },
  mounted(){
      queryStudents().then(res=>{
          if(res.code==200){
              this.list=res.dataList;
          }
      })
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    addUser(){
       this.$router.push({ path: "/userAdd" })
    },
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
.btn-box{
    padding: 30px;
    .submit {
    font-size: 20px;
    .bg();
    color: #fff;
  }
}

.bg(@start :#00d232,@end :#66e484) {
  background: -webkit-gradient(@start, @end);
  background: -webkit-linear-gradient(@start, @end);
  background: -o-linear-gradient(@start, @end);
  background: -ms-linear-gradient(@start, @end);
  background: linear-gradient(@start, @end);
}
</style>