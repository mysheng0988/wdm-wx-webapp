<template>
  <div class="app-container">
    <van-nav-bar
      class="bar"
      fixed
      placeholder
      title="首页"
    />
    
    <van-overlay :show="show" @click="show = false" >
      <div class="wrapper">
        <van-loading  class="block" size="50px" vertical type="spinner"> 加载中...</van-loading>
      </div>
    </van-overlay>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "home",
  data() {
    return {}
  },
  mounted() {
    // this.medicalRecordId = this.$route.query.id;
    // this.getMedicalReadRecordData();
  },
  methods: {
    tabClick(){
     
    },
    
  }
};
</script>
<style lang="less" scoped>

</style>
