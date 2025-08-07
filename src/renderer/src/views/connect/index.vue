<template>
  <div>
    <h1 @click="connect">手动连接</h1>
    <h1>app-port:{{ configStore.appPort }}</h1>
    <h1>remoting-auth-token:{{ configStore.remotingAuthToken }}</h1>
  </div>
</template>
<script lang="ts" setup>
import { useConfigStore } from '@renderer/store/config'
const configStore = useConfigStore()

async function connect(): Promise<void> {
  const gameInfo = await window.api.gameInfo()
  configStore.appPort.value = gameInfo['app-port']
  configStore.remotingAuthToken.value = gameInfo['remoting-auth-token']
}
</script>
<style scoped>
h1:hover {
  cursor: pointer;
}
</style>
