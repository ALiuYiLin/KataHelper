<template>
  <div id="connect">
    <h1>请先启动英雄联盟客户端然后再运行卡特助手</h1>
    <button @click="connect">手动连接</button>
    <h1>appPort: {{ configStore.appPort }}</h1>
    <h1>remotingAuthToken: {{ configStore.remotingAuthToken }}</h1>
    <h1></h1>
    <Loading v-if="showLoading"></Loading>
  </div>
</template>
<script lang="ts" setup>
import { getChampionInfo, getGameVersion, getSummonerSpell } from '@renderer/api/ddragon'
import { useChampionStore } from '@renderer/store'
import { useConfigStore } from '@renderer/store/config'
import { useGameStore } from '@renderer/store/game'
import Loading from './components/loading.vue'
import { ref } from 'vue'
import { routerPush } from '@renderer/router'
const configStore = useConfigStore()
const gameStore = useGameStore()
const championStore = useChampionStore()
const showLoading = ref(false)

async function connect(): Promise<void> {
  showLoading.value = true
  const gameInfo = await window.api.gameInfo()
  console.log('gameInfo: ', gameInfo)
  configStore.appPort.value = gameInfo['app-port']
  configStore.remotingAuthToken.value = gameInfo['remoting-auth-token']
  if (!configStore.appPort) {
    showLoading.value = false
    return
  }
  const gameVersion = await getGameVersion<any>()
  gameStore.version = gameVersion[0]
  gameStore.summoner = await getSummonerSpell()
  console.log('gameStore.summoner: ', gameStore.summoner)
  console.log('gameStore.version: ', gameStore.version)

  const champions = await getChampionInfo<any>()
  console.log('champions: ', champions)
  championStore.champions = champions['data']
  showLoading.value = false
  routerPush({ path: '/record' })
}
</script>

<style scoped>
#connect {
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
