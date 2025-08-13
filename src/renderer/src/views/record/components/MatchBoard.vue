<template>
  <div class="game-board">
    <div v-if="game">
      <img :src="getChampionIconUrl(game?.participants[0].championId)" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Game } from '@renderer/types'
import { getChampionIconUrl } from '@renderer/utils'
import { PropType } from 'vue'

const props = defineProps({
  game: Object as PropType<Game>
})
console.log('props: ', props)
</script>
