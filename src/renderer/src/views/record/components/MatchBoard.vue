<script lang="ts" setup>
import { Game, TeamData } from '@renderer/types'
import { getChampionIconUrl } from '@renderer/utils'
import { PropType, ref } from 'vue'
import Equips from './Equips.vue'
import Runes from './runes.vue'
import Spells from './Spells.vue'
import MatchInfos from './MatchInfos.vue'
import { getQueue } from '@renderer/constant'
import SvgIcon from '@renderer/components/SvgIcon.vue'
import { getCurrentGameTeamDatas } from '@renderer/api'
import MatchDetail from './MatchDetail.vue'
const props = defineProps({
  game: Object as PropType<Game>
})
const teamDatas = ref<TeamData[]>()
const showMatchDetails = ref(false)
function getItems(game: Game): number[] {
  return [
    game.participants[0].stats.item0,
    game.participants[0].stats.item1,
    game.participants[0].stats.item2,
    game.participants[0].stats.item3,
    game.participants[0].stats.item4,
    game.participants[0].stats.item5,
    game.participants[0].stats.item6
  ]
}
function getRuneIds(game: Game): number[] {
  return [game.participants[0].stats.perkPrimaryStyle, game.participants[0].stats.perkSubStyle]
}
function getSpellIds(game: Game): number[] {
  return [game.participants[0].spell1Id, game.participants[0].spell2Id]
}
function getMatchInfos(game: Game): {
  win: boolean
  mode: string
  startTime: number
  gameTime: number
} {
  const modeName = getQueue(game.queueId)?.tag
  return {
    win: game.participants[0].stats.win === true ? true : false,
    mode: modeName ? modeName : '',
    startTime: game.gameCreation,
    gameTime: game.gameDuration
  }
}

async function showGameDetail(): Promise<void> {
  if (props.game && teamDatas.value === undefined) {
    teamDatas.value = await getCurrentGameTeamDatas(props.game.gameId)
  }
  showMatchDetails.value = !showMatchDetails.value
}
</script>

<template>
  <div>
    <div
      v-if="game"
      class="game-board"
      :class="game.participants[0].stats.win === true ? 'win' : 'fail'">
      <match-infos :match-infos="getMatchInfos(game)"></match-infos>
      <div class="game-board-middle">
        <div class="flex-row">
          <img class="hero" :src="getChampionIconUrl(game.participants[0].championId)" />
          <spells :spell-ids="getSpellIds(game)"></spells>
          <runes :rune-ids="getRuneIds(game)"></runes>
          <div class="kda">
            <p>1/2/3</p>
            <p>5.80:1 KDA</p>
          </div>
        </div>
        <equips :items="getItems(game)"></equips>
      </div>
      <div>
        <p>战斗得分：88</p>
        <p>击杀参与 67%</p>
        <p>MVP</p>
        <p>5杀</p>
      </div>
      <div class="options">
        <div><svg-icon name="options-more"></svg-icon></div>
        <div @click="showGameDetail"><svg-icon name="options-expend"></svg-icon></div>
      </div>
    </div>
    <match-detail v-show="showMatchDetails" :team-datas="teamDatas"></match-detail>
  </div>
</template>
<style>
.game-board .item {
  height: 23px;
  width: 23px;
}
</style>
<style lang="scss" scoped>
.game-board {
  display: flex;
  flex-direction: row;
  background-color: rgba(40, 52, 78, 0.8);
  padding: 10px;
  margin: 5px 10px 5px 10px;
  border-radius: 10px;

  &.win {
    background-color: rgba(40, 52, 78, 0.8);
  }
  &.fail {
    background-color: rgba(69, 42, 47, 0.9);
  }

  & > div:nth-last-child(2) {
    flex: 1;
  }
}

.hero {
  border-radius: 100%;
  height: 48px;
}

.game-board-middle {
  margin-right: 30px;
}

.game-board-middle > div:nth-child(1) {
  padding-block: 10px;
  gap: 5px;
}

.options {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
}

.options > div {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
}

.options > div:hover {
  background-color: rgba($color: #fff, $alpha: 0.3);
}
</style>
