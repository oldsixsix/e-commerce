<template>
  <div id="app">
    <router-view></router-view>
    <completeTabbar></completeTabbar>
  </div>
</template>

<script>
  import completeTabbar from "../../tabbar/src/components/maintabbar/completeTabbar";
  export default {
    name:'app',
    components:{
        completeTabbar
    }
  }
</script>

<style>
@import "assets/css/normalize/base.css";
</style>
