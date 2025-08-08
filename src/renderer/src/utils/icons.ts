import { useChampionStore, useGameStore } from '@renderer/store'

const championStore = useChampionStore()
const gameStore = useGameStore()
export const getChampionIconUrl = (id: number): string => {
  const name = Object.keys(championStore.champions).find(
    (c) => championStore.champions[c]['key'] === id.toString()
  )
  return `https://ddragon.leagueoflegends.com/cdn/${gameStore.version}/img/champion/${name}.png`
}
