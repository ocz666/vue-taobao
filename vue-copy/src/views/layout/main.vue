<template>
  <div class="main-wrap" @mouseleave="closePop">
    <component :is="showWhat" :firstIndex="index"></component>
  </div>
</template>
<script>
import mainComponent from "../../components/MainBase";
import mainCategory from "../../components/mainCategory"
export default {
  props:{
    index:{
      default:0
    },
    popVisible:{
      default:false
    }
  },
  data(){
    return {
      showWhat:"mainComponent",
      stayFlag:false
    }
  },
  components:{
    mainComponent,
    mainCategory
  },
  watch: {
    popVisible(popVisible){
      if(popVisible){
        this.showWhat="mainCategory";
      }
    }
  },
  methods:{
    closePop(){
      this.stayFlag=false;
      if(!this._props.popVisible){
        this.showWhat="mainComponent";
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.main-wrap{
  margin-top: 45px;
  left: 440px;
  position:absolute;
  height: 637px;
  width: 700px;
}
</style>