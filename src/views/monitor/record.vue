<template>
  <div class="app-container">
    <van-nav-bar
      class="bar"
      fixed
      placeholder
      title="预约记录"
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
        <!-- <div>
          <van-icon name="arrow" />
        </div>-->
      </div>
      <div class="flex-wrap">
        <div>预约日期</div>
        <div>
          <span>{{item.expiryDate}}</span>
        </div>
      </div>
      <div class="flex-wrap">
        <div>预约状态</div>
        <div>
          <span>{{item.reviewStatus|formatReviewStatus}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { queryWxReviewTasks } from "@/api/reviewTask";
export default {
  name: "record",
  data() {
    return {
      list: [],
      queryList: {
        pageSize: 100,
        pageNum: 1
      }
    };
  },
  filters: {
    formatReviewStatus(val) {
      switch (val) {
        case 0:
          return "待登记";
          break;
        case 1:
             return "待复查";
          break;
        case 2:
             return "已取消";
          break;
        case 3:
             return "复查中";
          break;
        case 4:
             return "已复查";
          break;
      }
    }
  },
  mounted() {
    queryWxReviewTasks(this.queryList).then(res => {
      if (res.code == 200) {
        this.list = res.dataList;
      }
    });
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    memberInfo(id) {
      this.$router.push({
        path: "/memInfo",
        query: {
          id: id
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
}
.list {
  margin: 5px 10px;
  padding: 10px;
  border-radius: 10px;
  font-size: 14px;
  background: #fff;
  line-height: 35px;
  color: #626262;
}
</style>