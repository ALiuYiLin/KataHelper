<template>
  <div class="runes">
    <item v-for="runeId in runeIds" :id="runeId" :key="runeId" type="runes"></item>
  </div>
</template>
<script lang="ts" setup>
import { PropType } from 'vue'
import Item from './item.vue'
defineProps({
  runeIds: {
    type: Object as PropType<number[]>,
    require: true
  }
})
</script>
