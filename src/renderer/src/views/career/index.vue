<template>
  <div class="career">
    <ul>
      <li v-for="game in games" :key="game['gameId']">
        <span>{{ game['gameCreationDate'] }}</span
        ><img :src="getUrl(game['participants'][0]['championId'])" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { getCurrentSummonerMatches } from '@renderer/api/match-history';
import { useConfigStore } from '@renderer/store/config';
import { getChampionIconUrl } from '@renderer/utils';
import { onMounted, ref } from 'vue'
const configStore = useConfigStore()
const games = ref<any[]>([])
function getUrl(id:number):string{
  console.log('id: ', id);
  const urlE = getChampionIconUrl(id)
  console.log('urlE: ', urlE);
  return urlE
}
console.log('configStore: ', configStore.appPort.value);
onMounted(async () => {
  getCurrentSummonerMatches<any>().then((res) => {
    games.value = res['games']['games']
  })
})
</script>

<style scoped>
</style>
