<template>
  <div class="LayoutContainer">
    <div class="LayoutSlider">
      <Logo></Logo>
    </div>
    <div class="LayoutTabbar">456</div>
    <div class="LayoutMain">
      <p style="height: 100000px; background: red">789</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from './logo/index.vue'
</script>

<style scoped lang="scss">
  .LayoutContainer {
    width: 100%;
    height: 100vh;
    .LayoutSlider {
      width: $menu-width;
      height: 100vh;
      background: $menu-background;
    }
    .LayoutTabbar {
      position: fixed;
      left: $menu-width;
      top: 0px;
      width: calc(100% - $menu-width);
      height: $tabbar-height;
      background: $tabbar-background;
    }
    .LayoutMain {
      position: absolute;
      left: $menu-width;
      top: $tabbar-height;
      width: calc(100% - $menu-width);
      height: calc(100vh - $tabbar-height);
      padding: 20px;
      overflow: auto;
    }
  }
</style>
