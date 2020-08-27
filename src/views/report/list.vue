<template>
  <div class="app-container">
    <van-nav-bar
      class="bar"
      fixed
      placeholder
      title="动态监测报告列表"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list class="list-box" v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" :offset="100">
          <div class="list" v-for="(item,index) in list" :key="index" @click="readReport(item.id)">
            <div class="flex-wrap">
              <div class="flex-center">
                <van-icon name="contact" color="#00D231" />
                <span>{{item.studentName}}</span>
              </div>
              <div>
                <van-icon name="arrow" />
              </div>
            </div>
            <div class="flex-wrap">
              <div>报告日期</div>
              <div>{{item.auditTime}}</div>
            </div>
          </div>
        </van-list>
      </van-pull-refresh>
  </div>
</template>
<script>
import { queryReviewTasksByParent } from "@/api/report";
export default {
  name: "list",
  data() {
    return {
       list: [],
       loading: false,
      finished: false,
      refreshing: false,
      queryList: {
        pageSize: 10,
        pageNum: 1
      }
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    readReport(id){
        this.$router.push({
            path: '/report',
            query: {
              id: id,
            }
        })
     },
     queryReviewTasksByParentData() {
       this.loading=true;
      queryReviewTasksByParent(2, this.queryList).then(res => {
        this.loading=false;
        if (res.code == 200) {
          this.list =[...this.list,...res.dataList] ;
          this.finished=this.list.length===res.pageInfo.total;
        }else{
           this.finished=true;
        }
      });
    },
     onLoad(){
     
      if(this.list.length==0){
        this.pageNum=1;
      }else{
        this.pageNum++;
      }
      this.queryReviewTasksByParentData();
    },
    onRefresh(){
      this.list=[];
      this.refreshing=true;
      this.queryReviewTasksByParentData();
      this.refreshing=false
    },
  }
};
</script>
    
<style lang="less" scoped>
.app-container {
  min-height: 100vh;
  background: #F4F4F4;
}
.list-box{
  min-height: calc(100vh - 90px);
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