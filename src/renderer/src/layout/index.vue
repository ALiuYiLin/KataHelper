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
  position: relative;
  color: white;
}
#classic-layout::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-image: url('../assets/images/kata.webp');
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
  /* opacity: 0.3; */
}
.main {
  flex: 1;
  overflow: auto;
  height: 100vh;
}
</style>
