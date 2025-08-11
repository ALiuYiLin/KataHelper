<template>
  <div>
    <h1 @click="connect">手动连接</h1>
    <h1>app-port:{{ configStore.appPort }}</h1>
    <h1>remoting-auth-token:{{ configStore.remotingAuthToken }}</h1>
    <h1>游戏版本{{ gameStore.version }}</h1>
    <h1 @click="currentSummoner">获取用户数据</h1>
  </div>
</template>
<script lang="ts" setup>
import { getCurrentSummoner } from '@renderer/api'
import { getChampionInfo, getGameVersion } from '@renderer/api/ddragon'
import router from '@renderer/router'
import { useChampionStore } from '@renderer/store'
import { useConfigStore } from '@renderer/store/config'
import { useGameStore } from '@renderer/store/game'

const configStore = useConfigStore()
const gameStore = useGameStore()
const championStore = useChampionStore()

async function connect(): Promise<void> {
  const gameInfo = await window.api.gameInfo()
  configStore.appPort.value = gameInfo['app-port']
  configStore.remotingAuthToken.value = gameInfo['remoting-auth-token']
  const gameVersion = await getGameVersion<any>()
  gameStore.version = gameVersion[0]
  console.log('gameStore.version: ', gameStore.version)

  const champions = await getChampionInfo<any>()
  console.log('champions: ', champions)
  championStore.champions = champions['data']
  router.push({ path: '/record' })
}
async function currentSummoner(): Promise<void> {
  getCurrentSummoner<any>().then((res) => {
    console.log('res: ', res)
  })
}
</script>
<style scoped>
</style>
