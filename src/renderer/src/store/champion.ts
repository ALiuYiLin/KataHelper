import { defineStore } from 'pinia'

export const useChampionStore = defineStore('champion', {
  state: () => {
    return {
      champions: {}
    }
  }
})
