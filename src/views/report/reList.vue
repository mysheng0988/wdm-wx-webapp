<template>
  <div class="app-container">
    <van-nav-bar
      class="bar"
      fixed
      placeholder
      title="报告列表"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-tabs v-model="active" @click="tabsClick" title-active-color="#00D232" color="#00D232">
      <van-tab title="筛查报告"></van-tab>
      <van-tab title="复查报告"></van-tab>
    </van-tabs>
    <!-- <div v-if="list.length!=0"> -->
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
    <!-- </div> -->
    <!-- <van-empty v-else description="暂时没有数据" /> -->
  </div>
</template>
<script>
import { queryPreTaskByParent, queryReviewTasksByParent } from "@/api/report";
export default {
  name: "list",
  data() {
    return {
      active: 0,
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
  mounted() {
   // this.queryPreTaskByParentData();
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    queryPreTaskByParentData() {
      this.loading=true;
      queryPreTaskByParent(this.queryList).then(res => {
        this.loading=false;
        if (res.code == 200) {
          this.list =[...this.list,...res.dataList] ;
          this.finished=this.list.length===res.pageInfo.total;
        }else{
          this.finished=true;
        }
      });
    },
    queryReviewTasksByParentData() {
       this.loading=true;
      queryReviewTasksByParent(1, this.queryList).then(res => {
        this.loading=false;
        if (res.code == 200) {
          this.list =[...this.list,...res.dataList] ;
          this.finished=this.list.length===res.pageInfo.total;
        }else{
           this.finished=true;
        }
      });
    },
     readReport(id){
       let path="/pdf"
        if(this.active==1){
          path="/review"
        }else{
          path="/pdf"
        }
        this.$router.push({
            path: path,
            query: {
              id: id,
            }
        })
     },
    tabsClick() {
      this.list = [];
      switch (this.active) {
        case 0:
          this.queryPreTaskByParentData();
          break;
        case 1:
          this.queryReviewTasksByParentData();
          break;
      }
    },
    onLoad(){
     
      if(this.list.length==0){
        this.pageNum=1;
      }else{
        this.pageNum++;
      }
       switch (this.active) {
        case 0:
          this.queryPreTaskByParentData();
          break;
        case 1:
          this.queryReviewTasksByParentData();
          break;
      }
    },
    onRefresh(){
      this.list=[];
      this.refreshing=true;
       switch (this.active) {
        case 0:
          this.queryPreTaskByParentData();
          this.refreshing=false
          break;
        case 1:
          this.queryReviewTasksByParentData();
          this.refreshing=false
          break;
      }
    },
  }
};
</script>
    
<style lang="less" scoped>
.app-container {
  min-height: 100vh;
  background: #f4f4f4;
}
.list-box{
  min-height: calc(100vh - 100px);
}
.list {
  height: 100%;
  margin: 5px 10px;
  padding: 10px;
  border-radius: 10px;
  font-size: 14px;
  background: #fff;
  line-height: 35px;
  color: #626262;
}
</style>