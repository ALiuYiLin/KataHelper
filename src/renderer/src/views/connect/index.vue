<template>
  <div>
    <h1 @click="connect">手动连接</h1>
    <h1>app-port:{{ configStore.appPort }}</h1>
    <h1>remoting-auth-token:{{ configStore.remotingAuthToken }}</h1>
    <h1 @click="currentSummoner">获取用户数据</h1>
  </div>
</template>
<script lang="ts" setup>
import { useConfigStore } from '@renderer/store/config'
// import { AxiosRequestConfig } from 'axios'
// import { ipcRenderer } from 'electron'
const configStore = useConfigStore()

async function connect(): Promise<void> {
  const gameInfo = await window.api.gameInfo()
  configStore.appPort.value = gameInfo['app-port']
  configStore.remotingAuthToken.value = gameInfo['remoting-auth-token']
}
async function currentSummoner(): Promise<void> {
  // ipcRenderer
  //   .invoke('request', {
  //     url: '/lol-summoner/v1/current-summoner',
  //     baseURL: `https://127.0.0.1:${configStore.appPort}`,
  //     auth: {
  //       username: 'riot',
  //       password: configStore.remotingAuthToken.value
  //     },
  //     method: 'get'
  //   } as AxiosRequestConfig)
  //   .then((res) => {
  //     console.log('res: ', res)
  //   })

  window.api.request({
    url: '/lol-summoner/v1/current-summoner',
    baseURL: `https://127.0.0.1:${configStore.appPort.value}`,
    auth: {
      username: 'riot',
      password: configStore.remotingAuthToken.value as string
    },
    method: 'get'
  }).then((res)=>{
    console.log('res: ', res);

  })
  
}
</script>
<style scoped>
h1:hover {
  cursor: pointer;
}
</style>
