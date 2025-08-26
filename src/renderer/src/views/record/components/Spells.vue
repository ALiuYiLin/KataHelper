<template>
  <div class="spells">
    <item v-for="spellId in spellIds" :id="spellId" :key="spellId" type="spell"></item>
  </div>
</template>
<script lang="ts" setup>
import { PropType } from 'vue'
import Item from './item.vue'
defineProps({
  spellIds: {
    type: Object as PropType<number[]>,
    require: true
  }
})
</script>
