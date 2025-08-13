import { defineStore } from 'pinia'

export const useGameStore = defineStore('game', {
  state: () => {
    return {
      version: '',
      summoner: {}
    }
  }
})
