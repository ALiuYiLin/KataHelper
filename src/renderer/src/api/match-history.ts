import { request } from '@renderer/utils'

/**
 * 当前用户近期对局
 */
export const getCurrentSummonerMatches = async <T>(): Promise<T> => {
  return request({
    url: '/lol-match-history/v1/products/lol/current-summoner/matches',
    method: 'get'
  })
}
