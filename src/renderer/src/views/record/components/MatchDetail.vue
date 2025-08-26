<script lang="ts" setup>
import { Participant, Stat, TeamData } from '@renderer/types'
import { getChampionIconUrl } from '@renderer/utils'
import { PropType } from 'vue'
import Equips from './Equips.vue'
import Spells from './Spells.vue'
import Runes from './runes.vue'
defineProps({
  teamDatas: {
    type: Object as PropType<TeamData[]>,
    require: true
  }
})
function getKda(state: Stat): string {
  return ((state.kills + state.assists) / state.deaths).toFixed(2)
}
function getItemIds(state: Stat): number[] {
  return [state.item0, state.item1, state.item2, state.item3, state.item4, state.item5, state.item6]
}
function getSpellIds(participent: Participant): number[] {
  return [participent.spell1Id, participent.spell2Id]
}
function getRuneIds(state: Stat): number[] {
  return [state.perkPrimaryStyle, state.perkSubStyle]
}
</script>

<template>
  <div class="MatchDetail">
    <table
      v-for="(teamData, index) in teamDatas"
      :key="'team' + index"
      :class="teamData.participants[0].stats.win === true ? 'win' : 'fail'">
      <thead>
        <tr>
          <th>
            {{ teamData.participants[0].stats.win === true ? '胜利' : '失败' }}（{{
              teamData.participants[0].teamId === 100 ? '蓝队' : '红队'
            }}）
          </th>
          <th>游戏昵称</th>
          <th>KDA</th>
          <th>伤害/承受</th>
          <th>眼</th>
          <th>补兵数</th>
          <th>金币</th>
          <th>装备</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="i in teamData.participants.length"
          :key="teamData.participants[i - 1].participantId">
          <td>
            <img class="hero" :src="getChampionIconUrl(teamData.participants[i - 1].championId)" />
            <spells :spell-ids="getSpellIds(teamData.participants[i - 1])"></spells>
            <runes :rune-ids="getRuneIds(teamData.participants[i - 1].stats)"></runes>
          </td>
          <td>{{ teamData.participantIdentities[i - 1].player.gameName }}</td>
          <td>{{ getKda(teamData.participants[i - 1].stats) }}</td>
          <td>
            {{ teamData.participants[i - 1].stats.totalDamageDealtToChampions }} /
            {{ teamData.participants[i - 1].stats.totalDamageTaken }}
          </td>
          <td>
            {{ teamData.participants[i - 1].stats.visionScore }}
          </td>
          <td>
            {{ teamData.participants[i - 1].stats.totalMinionsKilled }}
          </td>
          <td>
            {{ teamData.participants[i - 1].stats.goldEarned }}
          </td>
          <td>
            <equips :items="getItemIds(teamData.participants[i - 1].stats)"></equips>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
.MatchDetail .item {
  height: 15px;
  width: 15px;
}
.MatchDetail .spells {
  vertical-align: middle;
}
</style>

<style lang="scss" scoped>
.MatchDetail {
  padding: 0px 10px 0px 10px;
}
.MatchDetail table {
  width: 100%;
  padding: 5px;
  border-radius: 10px;
}

.hero {
  width: 30px;
  height: 30px;
  vertical-align: middle;
}
table {
  text-align: left;
}
tbody td {
  vertical-align: middle;
}
tbody tr > td:nth-child(1) {
  display: flex;
  flex-direction: row;
}
table.win {
  background: rgba(30, 38, 55, 0.9);
}
table.fail {
  background: rgba(69, 42, 47, 0.9);
}
</style>
