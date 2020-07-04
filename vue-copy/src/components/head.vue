<template>
  <div>
    <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect" router>
      <template v-for="(item,index) in routers">
          <el-submenu v-if="item.children" :key="index" :index="item.path">
            <template slot="title">
              <svg-icon :icon="item.icon"/>
              {{item.name}}
            </template>
            <template v-for="(subItem,subindex) in item.children">
              <el-menu-item :key="index+''+subindex" :index="subItem.path">{{subItem.name}}</el-menu-item>
            </template>
          </el-submenu>

          <el-menu-item v-else :key="index" :index="item.path">
            <template slot="title">
              <svg-icon :icon="item.icon"/>
              {{item.name}}
              </template>
            <template v-for="(subItem,subindex) in item.children">
              <el-menu-item :key="index+''+subindex" :index="subItem.path">{{subItem.name}}</el-menu-item>
            </template>
          </el-menu-item>
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
};
</script>

<style lang="scss" scoped>
.menuWrap {
  background-color: rgb(245, 245, 245);
  font-size: 10px;
  font-family: "宋体";
  div:hover {
      color: rgb(242, 46, 0);
      cursor: pointer;
  }
}
</style>
