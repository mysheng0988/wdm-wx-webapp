<template>
  <div class="app-container">
    <van-nav-bar
      class="bar"
      fixed
      placeholder
      title="添加孩子"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="login-box">
      <van-form ref="loginForm" @submit="bindWxUserInfoData" :show-error-message="false">
        <van-row type="flex" justify="center" class="border-line">
          <van-field
            class="input-box"
            label="姓名"
            v-model="userObj.stuName"
            placeholder="请输入姓名"
            :rules="[{ required: true, message: '请填写姓名' }]"
          />
        </van-row>
        <van-row class="border-line">
          <van-field name="radio" label="性别"  :rules="[{ required: true, message: '选择性别' }]">
            <template #input>
              <van-radio-group v-model="userObj.sex" class="flex" direction="horizontal">
                <van-radio :name="1">男</van-radio>
                <van-radio :name="2">女</van-radio>
              </van-radio-group>
            </template>
          </van-field>
        </van-row>
        <van-row type="flex" justify="center" class="border-line">
          <van-field
            class="input-box"
            label="证件号码"
            v-model="userObj.idCard"
            placeholder="证件号码"
            :rules="[{ required: true, message: '证件号码' }]"
          />
        </van-row>
        <van-row type="flex" justify="center" class="border-line">
          <van-field
            readonly
            clickable
            name="datetimePicker"
            :value="userObj.birthDate"
            label="出生日期"
            placeholder="点击选择时间"
            @click="showPicker = true"
             :rules="[{ required: true, message: '选择出生日期' }]"
          />
        </van-row>
         <van-popup v-model="showPicker" position="bottom">
          <van-datetime-picker
            v-model="currentDate"
            type="date"
            title="选择年月日"
            :min-date="minDate"
            :max-date="maxDate"
             @confirm="onConfirm"
             :formatter="formatter"
            @cancel="showPicker = false"
          />
        </van-popup>
        <div style="margin: 32px 0;">
          <van-button round block class="submit" native-type="submit">确认添加</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>
<script>

import { bindWxUserInfo } from "@/api/user";
const userInfo={
    birthDate:"",
    idCard:"",
    sex:"",
    stuName:"",
}
export default {
  name: "user-add",
  data() {
    return {
      timer: null,
      checked: false,
      second: 120,
      value: "",
      userObj:Object.assign({},userInfo),
      showPicker: false,
      columns: ["男", "女"],
      loading: false,
      secondStr: "获取验证码",
      username: "",
      password: "",
      minDate: new Date(1949, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date()
    };
  },
  methods: {
      formatter(type, val) {
      if (type === 'year') {
        return val + '年';
      }
      if (type === 'month') {
        return val + '月';
      }
      if (type === 'day') {
        return val + '日';
      }
      return val;
    },
    onClickLeft() {
      this.$router.go(-1);
    },
     formatDate(date) {
         let month=(date.getMonth() + 1)>9?date.getMonth() + 1:"0"+(date.getMonth() + 1);
         let day=date.getDate()>9?date.getDate():"0"+date.getDate();
      return `${date.getFullYear() }-${month}-${day}`;
    },
    onConfirm(value) {
      this.userObj.birthDate = this.formatDate(value);
      this.showPicker = false;
    },
   bindWxUserInfoData(){

       bindWxUserInfo(this.userObj).then(res=>{
           if(res.code==200){
                this.$router.push({ path: "/" })
           }
       })
   }
  }
};
</script>
    
<style lang="less" scoped>
.app-container {
  min-height: 100vh;
  background: #ffffff;
  /deep/.van-nav-bar {
    background-color: #f5f5f5;
  }
}

.login-box {
  box-sizing: border-box;
  padding-top: 100px;
  margin: 5px 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  .border-line {
    border-bottom: 1px solid #ccc;
  }
  .van-form {
    width: 80%;
  }
  .btn-box {
    margin: 10px 0;
    height: 30px;
    line-height: 30px;
    border-radius: 10px;
  }
  .submit {
    margin: 30px 0;
    font-size: 20px;
    .bg();
    color: #fff;
  }
  .agree {
    margin: 10px 0;
    color: #333333;
    .van-checkbox {
      margin: 0 10px;
    }
    span {
      color: #1989fa;
    }
  }
  .input-box {
    background: transparent;
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