<template>
  <div class="app-container">
    <van-nav-bar
      class="bar"
      fixed
      placeholder
      title="会员列表"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="list" v-for="(item,index) in list" :key="index" @click="memberInfo(item.id)">
      <div class="flex-wrap">
        <div class="flex-center">
          <van-icon name="contact" color="#00D231" />
          <span>{{item.stuName}}</span>
        </div>
        <div>
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="flex-wrap" v-if="item.memberInfoState==1">
        <div>到期日期</div>
        <div>
          <span>{{item.expiryDate}}</span>
        </div>
      </div>
      <div class="flex-wrap" v-else-if="item.memberInfoState==2">
        <div>会员状态</div>
        <div>
          <span>已过期</span>
        </div>
      </div>
      <div class="flex-wrap" v-else>
        <div>会员状态</div>
        <div>
          <span>未启用</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { queryMembers } from "@/api/member";
export default {
  name: "member",
  data() {
    return {
      list: []
    };
  },
  filters: {
    formatMemberState(val) {
      switch (val) {
        case "1":
          return "正常";
          break;
        case "2":
          return "左肩高";
          break;
        case "3":
          return "右肩高";
          break;
      }
    }
  },
  mounted() {
    queryMembers().then(res => {
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