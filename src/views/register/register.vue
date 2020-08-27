<template>
  <div class="app-container">
    <van-nav-bar
      class="bar"
      fixed
      placeholder
      title="用户注册"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="login-box">
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
              type="primary"
              :disabled="second!=120"
              @click="verificationCode"
            >{{secondStr}}</van-button>
          </van-col>
        </van-row>
        <van-row type="flex" justify="center" class="border-line">
          <van-field
            class="input-box"
            v-model="username"
            placeholder="设置密码"
            :rules="[{ required: true, message: '设置密码' }]"
          />
        </van-row>
        <van-row type="flex" justify="center" class="border-line">
          <van-field
            class="input-box"
            v-model="username"
            placeholder="再次输入"
            :rules="[{ required: true, message: '再次输入' }]"
          />
        </van-row>
        <div class="agree flex-center">
            <van-checkbox v-model="checked"></van-checkbox>
            <div>已阅读 <span>《使用指南》</span>，同意注册。</div>
        </div>
        <div style="margin: 32px 0;">
          <van-button round block class="submit" native-type="submit">确认登录</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>
<script>
export default {
  name: "register",
  data() {
    return {
         timer: null,
         checked:false,
      second: 120,
      loading: false,
      secondStr: "获取验证码",
      username: "",
      password: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    verificationCode(){

    },
    handleLogin(){

    }
  }
};
</script>
    
<style lang="less" scoped>
.app-container {
  height: 100vh;
  background: #ffffff;
  /deep/.van-nav-bar {
    background-color: #f5f5f5;
   
  }
}

 .login-box {
    padding-top: 100px;
    margin: 5px 10px;
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    .border-line {
      border-bottom: 1px solid #ccc;
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
    .agree{
        margin: 10px 0;
        color:#333333;
        .van-checkbox{
            margin: 0 10px;
        }
        span{
            color: #1989FA
        }
    }
    .input-box {
      background: transparent;
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