import { useConfigStore } from '@renderer/store/config'
import { createRouter, createWebHistory } from 'vue-router'
const configStore = useConfigStore()

const routes = [
  {
    path: '/',
    name: 'career',
    component: () => import('@renderer/views/career/index.vue')
  },
  {
    path: '/game',
    name: 'game',
    component: () => import('@renderer/views/game/index.vue')
  },
  {
    path: '/rank',
    name: 'rank',
    component: () => import('@renderer/views/rank/index.vue')
  },
  {
    path: '/secondary',
    name: 'secondary',
    component: () => import('@renderer/views/secondary/index.vue')
  },
  {
    path: '/record',
    name: 'record',
    component: () => import('@renderer/views/record/index.vue')
  },
  {
    path: '/connect',
    name: 'connect',
    component: () => import('@renderer/views/connect/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (configStore.appPort === null && to.path !== '/connect') {
    next({
      path: '/connect'
    })
    return
  }
  next()
})

export default router
