<template>
  <div>
    <headLayout/>
    <mainLayout :index="index" :popVisible="popVisible"/>
    <navLayout @firstIndex="getIndex" @popVisible="getPopVisible"/>
    <userLayout/>
  </div>
</template>
<script>
import headLayout from "../layout/head"
import mainLayout from "../layout/main"
import navLayout from "../layout/nav"
import userLayout from "../layout/user"
export default {
  components:{
    headLayout,
    mainLayout,
    navLayout,
    userLayout
  },
  data(){
    return {
      index:0,
      popVisible:false,
    }
  },
  methods:{
    getIndex(firstIndex){
      this.index=firstIndex;
    },
    getPopVisible(popVisible){
      this.popVisible=popVisible;
    }
  }
}
</script>
<style lang="scss" scoped>
</style>