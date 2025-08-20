import { PRune, SummonerSpell } from '@renderer/types'
import { defineStore } from 'pinia'

export const useGameStore = defineStore('game', {
  state: () => {
    return {
      version: '',
      summoner: {} as SummonerSpell,
      pRunes: {} as PRune[]
    }
  }
})
export function getSpellIconUrl(spellId: number): string {
  const gameStore = useGameStore()
  const spell = Object.values(gameStore.summoner.data).find((s) => s.key === spellId.toString())
  if (spell) {
    return `https://ddragon.leagueoflegends.com/cdn/${gameStore.version}/img/spell/${spell.id}.png`
  }
  return ''
}

export function getPRuneIconUrl(perkId: number): string {
  const gameStore = useGameStore()
  const rune = gameStore.pRunes.find(p=> p.id === perkId)
  if (rune) {
    return `https://ddragon.leagueoflegends.com/cdn/img/${rune.icon}`
  }
  return ''
}
export function getItemIconUrl(itemId: number): string {
  const gameStore = useGameStore()
  if (gameStore.version) {
    return `https://ddragon.leagueoflegends.com/cdn/${gameStore.version}/img/item/${itemId}.png`
  }
  return ''
}
