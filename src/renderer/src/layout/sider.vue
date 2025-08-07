<script lang="ts" setup>
async function getGameInfo(): Promise<void> {
  const gameInfo = await window.api.gameInfo()
  console.log('gameInfo: ', gameInfo)
}
</script>
<template>
  <div class="sider">
    <button @click="getGameInfo">获取游戏数据</button>
    <ul>
      <li>战绩查询</li>
      <li>对局助手</li>
      <li>辅助功能</li>
      <li>英雄排行</li>
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
  /* align-items: center; */
}
li {
  display: block;
  height: 40px;
}
li:hover {
  cursor: pointer;
}
</style>
