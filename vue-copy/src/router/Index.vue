<template>
<div>
    <!-- 广告图片 -->
    <img src="../static/imgs/head.png" alt="广告招商，欢迎致电18096228307">

    <!-- 搜索框 -->
    <searchBox />

    <!-- 控制台 -->
    <console />
</div>
</template>

<script>
import searchBox from "../components/search";
import console from "../views/console/Console";
export default {
  components:{
    searchBox,
    console
  }
}
</script>

<style lang="scss" scoped>
img{
  width: 1536px;
}
img:hover{
    cursor:pointer;
}
</style>