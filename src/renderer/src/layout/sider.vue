
<template>
  <div class="sider">
    <ul>
      <li
        v-for="(menu, index) in menus"
        :key="menu.path"
        :class="isActive(index)"
        @click="menuClick(menu.path, index)">
        <svg-icon :name="menu.icon"></svg-icon>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import SvgIcon from '@renderer/components/SvgIcon.vue'
import { routerPush } from '@renderer/router'
import { ref } from 'vue'
const menus: {
  icon: string
  path: string
}[] = [
  {
    icon: 'sider-search',
    path: '/record'
  },
  {
    icon: 'sider-playing',
    path: '/game'
  },
  {
    icon: 'sider-tools',
    path: '/secondary'
  },
  {
    icon: 'sider-rank',
    path: '/rank'
  },
  {
    icon: 'sider-connect',
    path: '/connect'
  }
]
const selectedMenu = ref(4)

function menuClick(path: string, index: number): void {
  routerPush({ path })
  selectedMenu.value = index
}
function isActive(index: number): string {
  if (index === selectedMenu.value) return 'active'
  return ''
}
</script>
<style scoped>
.sider {
  height: 100vh;
  border-right: 1px solid #ccd8e1;
  padding-top: 20px;
}
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}
li {
  align-items: center;
  font-size: 22px;
  padding: 10px;
  color: rgb(189, 169, 169);
}
li.active {
  /* border-left: 4px solid #68aae3; */
  border-left: 4px solid #a61415;
  color: #a61415;
}
.icon:hover {
  cursor: pointer;
}
</style>
