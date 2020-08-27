<template>
  <div class="app-container">
    <van-nav-bar
      class="bar"
      fixed
      placeholder
      title="预约监测中心"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="login-box">
      <van-form ref="loginForm" @submit="save365ReTaskData" :show-error-message="false">
        <van-row type="flex" justify="center" class="border-line">
          <van-field
            class="input-box"
            label="选择孩子"
            readonly
            clickable
            :value="appointObj.stuName"
            placeholder="请输选择孩子"
            @click="showStudents=true"
            :rules="[{ required: true, message: '请填写姓名' }]"
          />
          <van-action-sheet v-model="showStudents" :actions="actions" @select="onSelect" />
        </van-row>
         <van-row type="flex" justify="center" class="border-line">
          <van-field
            class="input-box"
            label="手机号码"
            v-model="appointObj.reviewTel"
            placeholder="手机号码"
            :rules="[{ required: true, message: '手机号码' }]"
          />
        </van-row>
        <van-row type="flex" justify="center" class="border-line">
          <van-field
            readonly
            clickable
            name="datetimePicker"
            :value="appointObj.appointDate"
            label="预约日期"
            placeholder="点击选择预约时间"
            @click="showPicker = true"
             :rules="[{ required: true, message: '预约时间' }]"
          />
        </van-row>
       
         <van-row type="flex" justify="center" class="border-line">
          <van-field
            class="input-box"
            label="预约时间"
            readonly
            clickable
            :value="appointObj.appointTime"
            placeholder="预约时间"
            @click="showTimes=true"
            :rules="[{ required: true, message: '预约时间' }]"
          />
          <van-action-sheet v-model="showTimes" :actions="timesList" @select="onSelectTimes" />
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
          <van-button round block class="submit" native-type="submit">确认预约</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>
<script>

import {save365ReTask} from "@/api/reviewTask";
import { queryWxMember  } from "@/api/user";
import {monitorCenterById} from "@/api/monitor";
const appointDefault={
  id:"",
  appointDate: "",
  appointTime: "",
  studentId: "",
  reviewTotal:"",
  memberInfoId:"",
  monitorCenterId:"",
  reviewNo:"",
  reviewType:2,
  reviewTel:""
}
export default {
  name: "monAppoint",
  data() {
    return {
      value: "",
      showStudents:false,
      actions: [],
      showTimes:false,
      timesList:[],
      appointObj:Object.assign({},appointDefault),
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
  mounted(){
     let id = this.$route.query.id;
     this.appointObj.monitorCenterId=id;
    this.queryStudentsData();
    this.monitorCenterByIdData(id);
  },
  methods: {
      onSelectTimes(item){
        this.appointObj.appointTime=item.name;
        this.showTimes=false;
      },
      monitorCenterByIdData(id){
        this.timesList=[];
        monitorCenterById(id).then(res=>{
            if(res.code==200){
              let data=res.dataList[0].workTimes;
              for(let item of data){
                let param={
                  name:item
                }
                this.timesList.push(param)
              }
            }
        })
      },
      queryStudentsData(){
        this.actions=[];
        queryWxMember().then(res=>{
          if(res.code==200){
            let data=res.dataList;
            for(let item of data){
              let param={
                id:item.id,
                name:item.stuName,
                memberInfoId:item.memberInfoId,
                subname:"剩余次数"+item.reviewNo,
                stuTel:item.stuTel,
              }
              this.actions.push(param)
            }
          }
        })
      },
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
     onSelect(item) {
       this.appointObj.studentId=item.id;
       this.appointObj.stuName=item.name;
       this.appointObj.reviewTel=item.stuTel;
       this.appointObj.memberInfoId=item.memberInfoId;
      this.showStudents = false;
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
      this.appointObj.appointDate = this.formatDate(value);
      this.showPicker = false;
    },
     save365ReTaskData(){
     
      save365ReTask(this.appointObj).then(res=>{
        if(res.code==200){
          this.$toast("保存成功")
          this.$router.push("/record")
        }
      })
    },
    updateInviteData(){
      updateInvite(this.reTaskObj).then(res=>{
        if(res.code==200){
          this.dialogVisible=false;
          this.reTaskObj=Object.assign({},reTaskDefault);
          this.stuName="";
          this.getList();
        }
      })
    },
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