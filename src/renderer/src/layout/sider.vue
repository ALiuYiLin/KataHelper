<script lang="ts" setup>
import { routerPush } from '@renderer/router';

</script>
<template>
  <div class="sider">
    <div>
      <img src="" >
    </div>
    <ul>
      <li @click="routerPush({ path: '/record' })">战绩查询</li>
      <li @click="routerPush({ path: '/game' })">对局助手</li>
      <li @click="routerPush({ path: '/secondary' })">辅助功能</li>
      <li @click="routerPush({ path: '/rank' })">英雄排行</li>
      <li @click="routerPush({ path: '/connect' })">手动连接</li>
    </ul>
  </div>
</template>

<style scoped>
.sider {
  width: 150px;
  height: 100vh;
}
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}

ul {
  display: flex;
  flex-direction: column;
}
li {
  display: block;
  height: 40px;
}
li:hover {
  cursor: pointer;
}
</style>
