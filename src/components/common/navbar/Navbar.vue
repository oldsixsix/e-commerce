<template>
  <div class="nav-bar">
<!--   插槽用div包起来用于控制样式-->
    <div class="left">
    <slot name="left"></slot>
  </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>

  </div>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>
  .nav-bar{
    /*横向布局*/
    display: flex;
    height: 44px;
    text-align:center;
  }
  .left, .right{
    width: 60px;

  }
  .center{
    flex: 1;

  }
</style>
