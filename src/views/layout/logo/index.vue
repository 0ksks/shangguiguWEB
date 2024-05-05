<template>
  <div class="Logo">
    <img :src="setting.logo" />
    <p>{{ setting.title }}</p>
  </div>
</template>

<script setup lang="ts">
  import setting from '@/settings'
</script>

<style scoped lang="scss">
  .Logo {
    width: 100%;
    display: flex;
    align-items: center;
  }
</style>
