<template>
  <div class="search-wrap">
    <el-row>
      <el-col :span="3">
        <p>&nbsp;</p>
      </el-col>
      <el-col :span="3">
        <img src="../static/imgs/logo.png" alt="logo图片">
      </el-col>
      <el-col :span="12">
        <div class="title-wrap" @click="selectTitle">
          <span v-for="(item,index) in title" :key="index" :data-index="index" :class="{'span-active':item.active}">{{item.txt}}</span>
          </div>
        <div class="input-wrap">
          <svg-icon icon="search" className="search-icon"/>
          <input type="text" placeholder="微粒积木 高难度">
          <svg-icon icon="camera" className="camera-icon"/>
          <button>搜索</button>
        </div>
        <div class="search-history-wrap">
          <span v-for="(item,index) in searchHistory" :key="index" :data-index="index">{{item}}</span>
        </div>
      </el-col>
    </el-row>
      <!-- 广告 -->
      <div class="pos_abs" v-show="advActive">
        <svg-icon icon="delete" className="delete-icon" @click.native="advActive=false"/>
        <img src='../static/imgs/QrCode.png'>
        </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      title:[
        {txt:"宝贝",active:true},
        {txt:"天猫",active:false},
        {txt:"店铺",active:false}
      ],
      searchHistory:[
        "新款连衣裙",
        "四件套",
        "潮流T恤",
        "时尚女鞋",
        "短裤",
        "半身裙",
        "男士外套",
        "墙纸",
        "行车记录仪",
        "新款男鞋",
        "耳机",
        "时尚女包",
        "沙发"
      ],
      advActive:true
    }
  },
  methods: {
    selectTitle(e) {
      if (e.target.nodeName.toLowerCase() === 'span') {
        const index = parseInt(e.target.dataset.index)
        this.changeStyle(index)
      }
    },
    changeStyle(index) {
      this.title.forEach(element => {
        element.active=false;
      });
      this.title[index].active=true;
    }
  },
}
</script>
<style lang="scss" scoped>
.search-history-wrap{
  margin-top: 5px;
  margin-left: 60px;
  font-size: 12px;
  font-family: "宋体";
  span{
    padding: 3px;
  }
}
.search-wrap{
  background-color: white;
  height: 150px;
}
img{
  margin-top: 35px;
  width: 190px;
  height: 80px;
}
img:hover{
    cursor:pointer;
}
.title-wrap{
  margin-top: 30px;
  font-family:"宋体";
  color:rgb(255, 84, 47);
  span{
    margin-right:5px;
    padding-bottom: 0;
  }
  margin-left: 85px;
  span:hover{
        cursor:pointer;
        background-color: rgb(255, 238, 229);
  }
}
.span-active{
    color:white !important;
    border-top-right-radius:5px;
    border-top-left-radius:5px;
    background-color:rgb(255, 80, 0) !important;
}
.input-wrap{
  border:3px solid rgb(255, 80, 0);
  margin-left: 60px;
  margin-right: 60px;
  height:40px;
  border-radius:25px;
  input{
    border:0;
    outline: none;
    height: 90%;
    width: 80%;
    font-size: 15px;
    font-family: "宋体";
  }
  .search-icon{
    width: 20px;
    height: 20px;
  }
  .camera-icon{
    width: 20px;
    height: 20px;
    margin-right: 2px;
  }
  button{
    border:0;
    outline: none; 
    border-top-right-radius:25px;
    border-bottom-right-radius:25px;
    font-size: 20px;
    font-family:"宋体";
    width: 83px;
    display: inline-block;
    color: white;
    height: 100%;
    background-color: rgb(255, 80, 0);
  }
  button:hover{
      cursor: pointer;
    }
}
.pos_abs
{
  position:absolute;
  left:1200px;
  top:120px;
  img{
    margin-top: 0;
    float: left;
    width: 100px;
    height: 110px;
  }
  .delete-icon:hover{
    cursor: pointer;
  }
  .delete-icon{
    width: 15px;
    height: 15px;
    display: block;
    float: left;
  }
}
</style>