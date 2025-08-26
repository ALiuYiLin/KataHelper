<template>
  <div class="equips">
    <item v-for="itemId in items" :id="itemId" :key="itemId" type="item"></item>
  </div>
</template>
<script lang="ts" setup>
import { PropType } from 'vue'
import Item from './item.vue'

defineProps({
  items: {
    type: Object as PropType<number[]>,
    require: true
  }
})
</script>

<style scoped>
.equips {
  display: flex;
  flex-direction: row;
}
</style>
