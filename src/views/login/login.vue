<template>
  <div class="app-container">
    <div class="login-box">
      <van-image class="img" :src="logo"></van-image>
      <p class="label">脊柱健康管理中心</p>
      <van-form ref="loginForm" @submit="handleLogin" :show-error-message="false">
        <van-row type="flex" justify="center" class="border-line">
          <van-field
            class="input-box"
            v-model="username"
            placeholder="请输入手机号码"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
        </van-row>
         <van-row type="flex" justify="center" class="border-line">
          <van-col span="10">
            <van-field
              class="input-box"
              v-model="password"
              placeholder="请输入验证码"
              :rules="[{ required: true, message: '请填写验证码' }]"
            />
          </van-col>
          <van-col span="14" style="text-align: right;">
            <van-button
              class="btn-box"
              native-type="button"
              type="default"
              :disabled="second!=120"
              @click="verificationCode"
            >{{secondStr}}</van-button>
          </van-col>
        </van-row>
        
        <!-- <p class="forget">忘记密码?</p> -->
        <div style="margin: 32px 0;">
          <van-button round block class="submit" native-type="submit">确认登录</van-button>
        </div>
        <p class="register" @click="registerUser">还没有账户?<span>去注册</span></p>
      </van-form>
    </div>
    <!-- <van-overlay :show="loading" @click="show = false">
      <div class="wrapper">
        <van-loading class="block" size="50px" vertical type="spinner">加载中...</van-loading>
      </div>
    </van-overlay> -->
  </div>
</template>

<script>
import logo from "@/assets/image/logo.png"
import { Notify } from 'vant';
import { smsCode } from "@/api/login";
import { Toast } from 'vant';
export default {
  name: "home",
  data() {
    return {
      timer: null,
      second: 120,
      logo:logo,
      loading: false,
      secondStr: "获取验证码",
      username: "15628547874",
      password: ""
    };
  },
  mounted(){
  },
  methods: {
    verificationCode() {
      if(this.username==""){
        Notify({
              message:"手机号不能为空",
              type: 'warning',
              duration: 3 * 1000
            })
            return;
      }
    
      smsCode(this.username).then(res => {
        if (res.code == 200) {
          this.timer = setInterval(() => {
            this.second--;
            if (this.second <= 0) {
              clearInterval(this.timer);
              this.secondStr = "获取验证码";
              this.second = 120;
            } else {
              this.secondStr = this.second + "秒后重新发送";
            }
          }, 1000);
        }
      }).catch(res=>{
      });
    },
    registerUser(){
       this.$router.push({ path: "/register" })
    },
    handleLogin() {
      let values = {
        username: this.username,
        password: this.password
      };
      this.$store
        .dispatch("Login", values)
        .then(res => {
          if (res.code == "200") {
            this.$router.push({ path: "/" })
          } else {
             Notify({
              message:res.message,
              type: 'warning',
              duration: 3 * 1000
            })
           // this.$message.error(res.msg);
          }
        })
        .catch(() => {
  
        });
    }
  }
};
</script>
<style lang="less" scoped>
.app-container {
  width: 100%;
  box-sizing: border-box;
  height: 100vh;
  display: flex;
  padding: 0 20px;
  display: -webkit-flex;
  align-items: center;
  /deep/ .van-field__control {
    color: #000;
  }
  .login-box {
    margin: 5px 10px;
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    .img{
      width: 102px;
      height: 32px;
      overflow: hidden;
      vertical-align: middle;
    }
    .label{
      line-height: 35px;
      font-size: 14px;
      color: #242424;
      margin-bottom: 40px;
    }
    .forget{
      color: #909090;
      text-align: right;
    }
    .register{
      color: #909090;
      span{
        color: #00D232
      }
    }
    .van-form{
      width: 80%;
    }
    .border-line {
      margin-bottom: 20px;
      border-bottom: 1px solid #ccc;
    }
    .btn-box {
      margin: 10px 0;
      height: 30px;
      line-height: 30px;
      border-radius: 10px;
    }
    .submit {
      font-size: 20px;
      .bg();
      color: #fff;
    }
    .input-box {
      background: transparent;
    }
  }
}
.bg(@start :#00D232,@end :#66E484){
      background: -webkit-gradient(@start, @end);
      background: -webkit-linear-gradient(@start,@end);
      background: -o-linear-gradient(@start,@end);
      background: -ms-linear-gradient(@start,@end);
      background: linear-gradient(@start,@end);
}
</style>
