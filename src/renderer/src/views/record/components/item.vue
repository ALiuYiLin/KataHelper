<template>
  <div class="item">
    <img v-if="id" :src="getImgUrl()" />
  </div>
</template>

<script lang="ts" setup>
import { getItemIconUrl, getPRuneIconUrl, getSpellIconUrl } from '@renderer/store';
import { ref } from 'vue'

const props = defineProps({
  type: {
    type: String
  },
  id: {
    type: Number
  }
})
const hasUrl = ref(false)
// console.log('props: ', props)
function getImgUrl(): string {
  let imgUrl = ''
  switch (props.type) {
    case 'item':
      if (props.id) imgUrl = getItemIconUrl(props.id)
      hasUrl.value = true
      break
    case 'runes':
      if (props.id) return getPRuneIconUrl(props.id)
      hasUrl.value = true
      break
    case 'spell':
      if (props.id) return getSpellIconUrl(props.id)
      hasUrl.value = true
      break
  }
  return imgUrl
}
</script>
<style scoped>
.item {
  height: 23px;
  width: 23px;
}
img {
  height: 100%;
}
</style>
