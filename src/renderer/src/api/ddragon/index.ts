import { useGameStore } from '@renderer/store/game'
import { PRune, SummonerSpell } from '@renderer/types'
import { requestDdragon } from '@renderer/utils'

const gameStore = useGameStore()
/**
 * 获取游戏版本号
 */
export const getGameVersion = async <T>(): Promise<T> => {
  return requestDdragon({
    url: '/api/versions.json',
    method: 'get'
  })
}

/**
 * 获取游戏英雄数据
 */
export const getChampionInfo = async <T>(): Promise<T> => {
  console.log('gameStore.version: ', gameStore.version)
  return requestDdragon({
    url: `/cdn/${gameStore.version}/data/zh_CN/champion.json`,
    method: 'get'
  })
}

/**
 * 获取召唤师技能数据
 */
export const getSummonerSpell = async (): Promise<SummonerSpell> => {
  return requestDdragon({
    url: `/cdn/${gameStore.version}/data/zh_CN/summoner.json`,
    method: 'get'
  })
}

/**
 * 获取符文
 */
export const getPRunes = async (): Promise<PRune[]> => {
  return requestDdragon({
    url: `/cdn/15.16.1/data/zh_CN/runesReforged.json`,
    method: 'get'
  })
}
