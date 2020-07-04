<template>
  <div id="app">
    <!-- 顶部导航 -->
    <headMenu />

    <router-view />
  </div>
</template>

<script>
import headMenu from "./components/head"
export default {
  components:{
    headMenu
  }
}
</script>

<style lang="scss">

</style>
