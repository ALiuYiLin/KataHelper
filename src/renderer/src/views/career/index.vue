<template>
  <div class="career">
    <ul>
      <li v-for="game in games" :key="game['gameId']">
        <img :src="getUrl(game['participants'][0]['championId'])" />
        <div class="game-info">
          <div class="gameType">{{ getQueue(game['queueId'])?.tag }}</div>
          <div>{{ game['participants'][0]['stats']['kills'] }}/{{ game['participants'][0]['stats']['deaths'] }}/{{ game['participants'][0]['stats']['assists'] }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { getCurrentSummonerMatches } from '@renderer/api/match-history'
import { getQueue } from '@renderer/constant/queues'
import { useConfigStore } from '@renderer/store/config'
import { getChampionIconUrl } from '@renderer/utils'
import { onMounted, ref } from 'vue'
const configStore = useConfigStore()
const games = ref<any[]>([])
function getUrl(id: number): string {
  const urlE = getChampionIconUrl(id)
  return urlE
}
console.log('configStore: ', configStore.appPort.value)
onMounted(async () => {
  getCurrentSummonerMatches<any>().then((res) => {
    games.value = res['games']['games']
    console.log('games.value: ', games.value)
  })
})
</script>

<style scoped>
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  display: flex;
  flex-direction: row;
  height: 55px;
  padding: 10px;
}
.game-info{
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 12px;
}
</style>
