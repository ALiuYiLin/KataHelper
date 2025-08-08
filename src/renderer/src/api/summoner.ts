import { request } from '@renderer/utils'

/**
 * 当前用户信息
 */
export const getCurrentSummoner = async <T>(): Promise<T> => {
  return request({
    url: '/lol-summoner/v1/current-summoner',
    method: 'get'
  })
}
