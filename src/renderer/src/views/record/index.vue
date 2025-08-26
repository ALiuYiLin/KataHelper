
<script lang="ts" setup>
import { getCurrentSummonerMatches } from '@renderer/api/match-history'
import { Matches } from '@renderer/types'
import RecentMatches from './components/RecentMatches.vue'
import { onMounted, ref } from 'vue'
import RankStats from './components/RankStats.vue'
import Page from './page.vue'
import Overview from './overview.vue'
import ChampionUsed from './ChampionUsed.vue'
import Summoner from './summoner.vue'

const recentMatchs = ref<Matches>()
const page = ref({
  begIndex: 0,
  endIndex: 19
})

onMounted(async () => {
  await getRecentMatches()
})
async function getRecentMatches(): Promise<void> {
  console.log('page: ', page.value)
  recentMatchs.value = await getCurrentSummonerMatches<Matches>({
    begIndex: page.value.begIndex,
    endIndex: page.value.endIndex
  })
  console.log('recentMatchs.value: ', recentMatchs.value)
  // changeCurrentGame(recentMatchs.value.games.games[0].gameId)
}
</script>

<template>
  <div class="record">
    <div>
      <summoner></summoner>
      <div>
        <rank-stats></rank-stats>
        <rank-stats></rank-stats>
      </div>
    </div>
    <div>
      <div class="record-left">
        <Page></Page>
        <overview></overview>
        <champion-used></champion-used>
      </div>
      <recent-matches :matches="recentMatchs"></recent-matches>
    </div>
  </div>
</template>

<style lang="scss">
.record {
  .rank-stats + .rank-stats {
    margin-left: 10px;
  }
}
</style>
<style lang="scss" scoped>
.record {
  background-color: rgba(#1a1a1d, 1);
  padding-top: 30px;
  & > div:nth-child(1) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0px 50px 10px 10px;

    & img {
      width: 50px;
      height: 50px;
    }
    & > div:nth-child(1) {
      padding: 30px 20px;
    }
    & > div:nth-child(2) {
      display: flex;
      flex-direction: row;
    }
  }

  & > div:nth-child(2) {
    display: flex;
    flex-direction: row;

    .record-left {
      width: 300px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
}
</style>
