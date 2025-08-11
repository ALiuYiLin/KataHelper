<template>
  <div class="career">
    <ul>
      <li
        v-for="game in recentMatchs?.games.games"
        :key="game['gameId']"
        @click="changeCurrentGame(game.gameId)">
        <img :src="getChampionIconUrl(game['participants'][0]['championId'])" />
        <div class="game-info">
          <div class="gameType">{{ getQueue(game['queueId'])?.tag }}</div>
          <div>{{ getKdaByIndex(game, 0) }}</div>
        </div>
      </li>
    </ul>
    <div class="game-details">
      <div class="game-info"></div>
      <div class="game">
        <div v-if="currentTeamDatas">
          <div v-for="(teamData, i) in currentTeamDatas" :key="'team' + i">
            <div v-for="j in teamData.participants.length" :key="'player' + j">
              <img :src="getChampionIconUrl(teamData.participants[j - 1].championId)" />
              <span>{{ teamData.participantIdentities[j - 1].player.gameName }}</span>
              <span>{{ teamData.participantIdentities[j - 1].player.gameName }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  getCurrentSummonerMatches,
  getGameDetails,
  getKdaByIndex
} from '@renderer/api/match-history'
import { getQueue } from '@renderer/constant/queues'
import { Game, Matches, TeamData } from '@renderer/types'
import { getChampionIconUrl } from '@renderer/utils'
import { onMounted, ref } from 'vue'
const recentMatchs = ref<Matches>()
const currentTeamDatas = ref<TeamData[]>()

onMounted(async () => {
  recentMatchs.value = await getCurrentSummonerMatches<Matches>()
  console.log('recentMatchs.value: ', recentMatchs.value)
  changeCurrentGame(recentMatchs.value.games.games[0].gameId)
})

async function changeCurrentGame(gameId: number): Promise<void> {
  const game = await getGameDetails<Game>(gameId)
  const teamDatas: TeamData[] = []
  // 是否存在 subteamPlacement不为0
  if (game.participants.find((p) => p.stats.subteamPlacement !== 0)) {
    //存在 按subteamPlacement字段划分
    const teamCount = new Set(game.participants.map((p) => p.stats.subteamPlacement)).size
    for (let i = 0; i < teamCount; i++) {
      const participants = game.participants.filter((p) => p.stats.subteamPlacement === i + 1)
      const teamData: TeamData = {
        participants: participants,
        participantIdentities: game.participantIdentities.filter((p) =>
          participants.find((a) => a.participantId === p.participantId)
        )
      }
      teamDatas.push(teamData)
    }
  } else {
    // 不存在 按win字段划分
    const playerCount = game.participants.length
    teamDatas.push({
      participants: game.participants.slice(0, playerCount / 2),
      participantIdentities: game.participantIdentities.slice(0, playerCount / 2)
    })
    teamDatas.push({
      participants: game.participants.slice(playerCount / 2, playerCount),
      participantIdentities: game.participantIdentities.slice(playerCount / 2, playerCount)
    })
  }
  currentTeamDatas.value = teamDatas
  console.log('currentTeamDatas.value: ', currentTeamDatas.value)
}
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
.game-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 12px;
}
</style>
