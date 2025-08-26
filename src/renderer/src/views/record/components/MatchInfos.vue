<template>
  <div v-if="matchInfos" class="match-infos">
    <p>{{ matchInfos.mode }}</p>
    <p>{{ covertTimestampToMMDD(matchInfos.startTime) }}</p>
    <p>{{ matchInfos.win ? '胜利' : '失败' }}</p>
    <p>{{ covertGameTimeToHMD(matchInfos.gameTime) }}</p>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';

defineProps({
  matchInfos: {
    type: Object as PropType<{
      win: boolean
      mode: string
      startTime: number
      gameTime: number
    }>,
    require: true
  }
})

function covertTimestampToMMDD(timestamp: number): string{
  const date = new Date(timestamp)
  const month = date.getMonth() + 1
  const day = date.getDate()
  return `${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`
}
function covertGameTimeToHMD(gameTime: number): string {
  const h = gameTime > 3600 ? Math.floor(gameTime / 3600) : 0
  const m = Math.floor((gameTime % 3600) / 60)
  const s = (gameTime % 3600) % 60
  return `${h === 0 ? '' : h + 'h'}${m.toString().padStart(2, '0')}m${s.toString().padStart(2, '0')}s`
}
</script>
<style scoped>
.match-infos {
  margin-right: 30px;
  color: #8b99a0;
}
.match-infos > p:nth-child(1){
  color: #5383e8;
}
</style>
