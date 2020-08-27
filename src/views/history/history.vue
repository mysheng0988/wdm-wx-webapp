<template>
  <div class="app-container">
    <van-nav-bar
      class="bar"
      fixed
      placeholder
      title="报告列表"
    />
    <div class="list-box">
      <div v-if="list.length!=0">
        <div class="list-item flex-wrap" v-for="(item,index) in list" :key="index" @click="handelReport(item)">
            <div class="item">
                 <div class="item flex-wrap"> 
                   <div>姓名:{{item.realName}}</div>
                   <div>测评类型:{{item.examinationTypeCode|examinationFormat}}</div>
                </div>
                <div class="item flex-wrap"> 
                  <div>报告时间:{{item.createTime}}</div>
                </div>
            </div >
          
           <van-icon name="arrow" />
        </div>
        </div>
         <van-empty description="暂时没有数据" v-else />
    </div>
    
     <van-overlay :show="show" @click="show = false" >
      <div class="wrapper">
        <van-loading  class="block" size="50px" vertical type="spinner"> 加载中...</van-loading>
      </div>
    </van-overlay>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
import {medicalRecordPatientList} from '@/api/medicalRecord'
export default {
  name: "history",
  data() {
    return {
      show:false,
        list:[]
    };
  },
  computed:{
      info(){
            return this.$store.state.user.info
      }, 
    },
     
    filters: {      
      examinationFormat (val) { 
        let str="综合测评"
        if(val=="20001"){
          str="筛查测评"
        }else if(val=="20002"){
          str="专科测评"
        }
        return str;
      } 
    },   
  mounted() {
     this.getMedicalRecordPatientList()
  },
  methods: {
    getMedicalRecordPatientList(){
      let  listQuery= {
          examinationId: "",
          examinationStatus: "100",
          patientId: this.info.patientId,
          pageNum: 1,
          pageSize: 10
        }
        this.show=true;
      medicalRecordPatientList(listQuery).then(res=>{
        this.show=false;
                if(res.code==200){
                    this.list=res.dataList;
                }
            })
    },
    handelReport(val){
      if(val.examinationTypeCode===20001){
         this.$router.push({path:"/home",query:{id:val.id}})
      }else{
         this.$router.push({path:"/rep",query:{id:val.id}})
      }
      
    },
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>
    
<style lang="less" scoped>
.app-container {
  height: 100vh;
  background: #f5f5f5;
  /deep/.van-nav-bar {
    background-color: #1092d4;
    color: #fff;
    .van-icon {
      color: #fff;
    }
    .van-nav-bar__title {
      color: #fff;
    }
  }
  /deep/ .van-nav-bar__text {
    color: #fff;
  }
}
.list-box{
    .list-item{
        margin-top:5px;
        padding:  20px;
        background:#fff;
        border: 1px solid #eee;
        font-size: 14px;
        color: #666;
        .item{
          line-height:35px;
           margin-right: 10px;
          flex:1
        }
    }
}
</style>