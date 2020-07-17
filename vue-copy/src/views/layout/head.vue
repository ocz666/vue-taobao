<template>
  <div class="head-wrap">
    <div class="theme-wrap">主题市场</div>
    <div class="title-wrap">
      <span v-for="(item,index) in title" :key="index" :class="{'span-over':item.hoverActive}">
        {{item.txt}}
      </span>
    </div>
  </div>  
</template>
<script>
export default {
  data(){
    return{
      title:[
        {txt:"天猫",hoverActive:true},
        {txt:"聚划算",hoverActive:true},
        {txt:"天猫超市",hoverActive:true},
        {txt:"|",hoverActive:false},
        {txt:"淘抢购",hoverActive:true},
        {txt:"电器城",hoverActive:true},
        {txt:"司法拍卖",hoverActive:true},
        {txt:"淘宝心选",hoverActive:true},
        {txt:"兴农脱贫",hoverActive:true},
        {txt:"|",hoverActive:false},
        {txt:"飞猪旅行",hoverActive:true},
        {txt:"智能生活",hoverActive:true},
        {txt:"苏宁易购",hoverActive:true},
      ],
    }
  }
}
</script>
<style lang="scss" scoped>
.head-wrap{
  height:40px;
  width:1200px;
  left: 200px;
  background-color: rgb(255,131,0);
  font-size: 15px;
  text-align: center;
  font-weight:bold;
  line-height: 35px;
  color:white;
  position:absolute;
  .theme-wrap{
    float: left;
    width: 235px;
    height: 100%;
    background-color: rgb(255, 80, 0);
  }
  .title-wrap{
    float: left;
    span{
      padding-left: 10px;
    }
    .span-over:hover{
        cursor: pointer;
      }
  }
}
</style>