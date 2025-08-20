<template>
  <div v-if="game" class="game-board">
    <div>
      <p>单双排</p>
      <p>08-14</p>
      <p>胜利</p>
      <p>15m 03s</p>
    </div>
    <div>
      <div class="flex-row">
        <img class="hero" :src="getChampionIconUrl(game.participants[0].championId)" />
        <div class="spells">
          <item :id="game.participants[0].spell1Id" type="spell"></item>
          <item :id="game.participants[0].spell2Id" type="spell"></item>
        </div>
        <div class="runes">
          <item :id="game.participants[0].stats.perkPrimaryStyle" type="runes"></item>
          <item :id="game.participants[0].stats.perkSubStyle" type="runes"></item>
        </div>
        <div class="kda">
          <p>1/2/3</p>
          <p>5.80:1 KDA</p>
        </div>
      </div>
      <div class="flex-row">
        <item :id="game.participants[0].stats.item0" type="item"></item>
        <item :id="game.participants[0].stats.item1" type="item"></item>
        <item :id="game.participants[0].stats.item2" type="item"></item>
        <item :id="game.participants[0].stats.item3" type="item"></item>
        <item :id="game.participants[0].stats.item4" type="item"></item>
        <item :id="game.participants[0].stats.item5" type="item"></item>
        <item :id="game.participants[0].stats.item6" type="item"></item>
      </div>
      <div>
        <p>战斗得分：88</p>
        <p>击杀参与 67%</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Game } from '@renderer/types'
import { getChampionIconUrl } from '@renderer/utils'
import { PropType } from 'vue'
import Item from './item.vue'
const props = defineProps({
  game: Object as PropType<Game>
})
console.log('props: ', props)
</script>

<style scoped>
.game-board {
  display: flex;
  flex-direction: row;
  background-color: rgba(40, 52, 78, 0.8);
}

.hero {
  border-radius: 100%;
  height: 48px;
}
</style>
