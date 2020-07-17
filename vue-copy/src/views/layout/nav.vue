<template>
  <div class="nav-wrap">
    <div class="content-wrap" @mouseover="showPopover" @mouseleave="popVisible=false">
      <template v-for="(item,index) in firstCategory">
        <div  :key="index" class="category-wrap"  :data-index="index">
          <div v-for="(subitem,subindex) in item" :key="index +'-'+subindex" class="first-category-wrap">
            <p>{{subitem}}</p>
            <span v-if="subindex<2">/</span>
          </div>
          <svg-icon icon="right" className="nav-icon"/>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      firstCategory:[
        ["女装", "男装" , "内衣"],
        ["鞋靴", "箱包" , "配件"],
        ["童装玩具","孕产","用品"],
        ["家电" , "数码" , "手机"],
        ["美妆" , "洗护" , "保健品"],
        ["珠宝" , "眼镜" , "手表"],
        ["运动" , "户外" , "乐器"],
        ["游戏" , "动漫" , "影视"],
        ["美食" , "生鲜" , "零食"],
        ["鲜花" , "宠物" , "农资"],
        ["面料集采","装修" ,"建材"],
        ["家具" , "家饰" , "家纺"],
        ["汽车" , "二手车" , "用品"],
        ["办公" , "DIY" , "五金电子"],
        ["百货" , "餐厨" , "家庭保健"],
        ["学习" , "卡券" , "本地服务"]
      ],
      secondCategory:[
        [
          ["连衣裙", "半身裙", "毛针织衫", "T恤", "短外套", "卫衣", "汉服", "JK制服", "LOLITA", "衬衫", "百搭裤装", "裤裙", "牛仔裤", "西装", "大码女装", "时尚套装", "蕾丝衫/雪纺衫", "风衣", "休闲裤", "背心吊带", "马夹", "牛仔外套", "阔腿裤", "中老年女装", "婚纱礼服", "民族服装", "打底裤", "西装裤", "唐装", "旗袍"],
          ["春夏新品", "T恤", "衬衫", "POLO衫", "休闲裤", "牛仔裤", "套装", "外套", "夹克", "卫衣", "风衣", "西装", "牛仔外套", "棒球服", "品质好物", "皮衣", "针织衫/毛衣", "运动裤", "工装裤", "开衫", "马甲", "毛呢大衣", "羽绒服", "棉衣", "中老年", "情侣装", "大码", "民族风", "专柜大牌", "明星网红", "原创设计"],
          ["法式内衣", "无钢圈内衣", "内裤女", "文胸", "内裤男", "长袖睡衣", "睡裙", "真丝睡衣", "丝袜", "船袜", "情侣睡衣", "抹胸", "背心", "睡袍", "男士睡衣", "塑身衣", "内衣套装", "打底裤", "连体睡衣", "聚拢文胸", "男士袜子", "棉袜女", "卡通睡衣", "无痕内裤", "少女文胸"]
        ],
      ],
      popVisible:false,
      popIndex:0,
    }
  },
  watch:{
    popIndex(index){
      this.$emit('firstIndex',index);
    },
    popVisible(flag){
      this.$emit('popVisible',flag);
    }
  },
  methods: {
    showPopover(e){
      if(e.target.dataset.index){
        this.popVisible=true;
        this.popIndex=e.target.dataset.index;
      }
    }
  },
  routers:{}
}
</script>
<style lang="scss" scoped>

.nav-wrap{
  margin-top: 40px;
  left: 200px;
  position:absolute;
  border:1px solid rgb(255, 80, 0);
  width: 235px;
  line-height: 35px;
  font-size: 15px;
  .content-wrap{
    width:100%;
    height:100%;
    .category-wrap{
      padding-left: 30px;
      height:30px;
      padding-top: 5px;
      padding-bottom: 5px;
      .nav-icon{
        display: block;
        float: right;
        width: 15px;
        height: 15px;
        margin-right: 5px;
        margin-top: 10px;
      }
      .first-category-wrap{
        display: inline;
        p{
          display: inline;
        span{
          font-weight: bolder;
        }
        }
        p:hover{
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }
    .category-wrap:hover{
      background-color: rgb(255, 228, 220);
    }
  }
}
</style>