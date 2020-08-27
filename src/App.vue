<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
@import './styles/function.less'; 
*{
  margin: 0;
  padding:0;
}
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .block {
    width: 80px;
    height: 80px;
    padding: 10px 20px;
    background-color: #fff;
    border-radius: 10px;
  }
  .flex-wrap{
  display: flex;
  display: -webkit-flex;
  align-items: center;
  justify-content: space-between;
}

</style>
