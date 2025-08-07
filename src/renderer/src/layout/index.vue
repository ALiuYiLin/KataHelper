<script lang="ts" setup>
import sider from './sider.vue'
</script>

<template>
  <div id="classic-layout">
    <sider></sider>
    <div class="main">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style scoped>
#classic-layout {
  display: flex;
  flex-direction: row;
  overflow: hidden;
}
.main {
  flex: 1;
}
</style>
