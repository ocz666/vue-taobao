<template>
  <div>
    <el-menu 
      :default-active="activeIndex" 
      class="el-menu-demo el-row" 
      mode="horizontal" 
      @select="handleSelect" 
      router
      background-color="#F5F5F5"
      unique-opened>
        <template v-for="(item,index) in routers">
              <el-submenu v-if="item.children" :index="item.path" class="el-col el-col-2" :key="index">
                <template slot="title">
                  <svg-icon :icon="item.icon"/>
                  {{item.name}}
                </template>
                <template v-for="(subItem,subindex) in item.children">
                  <el-menu-item :key="index+''+subindex" :index="subItem.path">{{subItem.name}}</el-menu-item>
                </template>
              </el-submenu>

              <el-menu-item v-else :index="item.path" :span="2" class="el-col el-col-2" :key="index">
                <template slot="title">
                  <svg-icon :icon="item.icon"/>
                  {{item.name}}
                  </template>
                <template v-for="(subItem,subindex) in item.children">
                  <el-menu-item :key="index+''+subindex" :index="subItem.path">{{subItem.name}}</el-menu-item>
                </template>
              </el-menu-item>

              
              <div v-if="index===3" class="el-col el-col-2" :key="index+8"></div>
        </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "headMenu",
  data() {
    return {
      routers: this.$router.options.routes,
      activeIndex: '2',
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  mounted(){
  },
  created(){
    this.routers.shift();
    this.routers.shift();
  },
};
</script>

<style lang="scss" scoped>
.el-menu-demo{
  height:20px;
  line-height: 0;
}
</style>
