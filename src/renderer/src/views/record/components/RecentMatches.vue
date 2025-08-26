<template>
  <div class="recent-matches">
    <match-board v-for="game in matches?.games.games" :key="game.gameId" :game="game"></match-board>
  </div>
</template>
<script lang="ts" setup>
import { Matches } from '@renderer/types'
import { PropType } from 'vue'
import MatchBoard from './MatchBoard.vue'
const props = defineProps({
  matches: {
    type: Object as PropType<Matches>
  }
})

console.log('props: ', props)
</script>

<style scoped>
.recent-matches {
  flex: 1;
}
</style>