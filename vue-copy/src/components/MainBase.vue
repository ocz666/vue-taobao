<template>
  <div>
    <div class="left-top-wrap">
        <div class="block">
          <el-carousel trigger="click" height="350px">
            <el-carousel-item v-for="(item,index) in carouselImgTop" :key="index">
              <img :src="require('../static/imgs/carousel/top/'+item)">            
            </el-carousel-item>
          </el-carousel>
  </div>
    </div>
        <div class="right-top-wrap">
      <img :src="require('../static/imgs/'+imgTop)" alt="bottom">
        </div>
    <div class="left-bottom-wrap">
      <el-carousel trigger="click" height="250px">
      <el-carousel-item v-for="(item,index) in carouselImgBottom" :key="index">
        <img v-for="(subItem,subindex) in item" :src="require('../static/imgs/carousel/bottom/'+subItem)" :key="subindex">            
      </el-carousel-item>
    </el-carousel>
    </div>
    <div class="right-bottom-wrap">
      <img :src="require('../static/imgs/'+imgBottom)" alt="top">
    </div>
  </div>  
</template>
<script>
export default {
  data(){
    return {
      carouselImgTop:[
        "first.jpg",
        "second.jpg",
        "third.jpg",
        "forth.jpg",
        "fifth.jpg",
      ],
      carouselImgBottom:[
        ["fifth-1.jpg","fifth-2.jpg"],
        ["sixth-1.png","sixth-2.jpg",],
      ],
      imgTop:"rightTop.jpg",
      imgBottom:"rightBottom.jpg",
    }
  }
}
</script>
<style lang="scss" scoped>
.left-top-wrap{
  margin:7px 10px;
  float: left;
  height: 350px;
  width: 430px;
  img{
    height: 100%;
    width: 100%;
  }
}
.left-bottom-wrap{
  margin:7px 10px;
  float: left;
  width: 430px;
  height: 250px;
  img{
    height: 100%;
          margin:0 20px;
    width: 40%;
  }
}
.right-top-wrap{
  margin:7px 10px;
  float: left;
  width: 230px;
  height: 350px;
  img{
    height: 100%;
    width: 100%;
  }
}
.right-bottom-wrap{
  margin:7px 10px;
  float: left;
  width: 230px;
  height: 250px;
  img{
    height: 100%;
    width: 100%;
  }
}
</style>