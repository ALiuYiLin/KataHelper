import { RankStats } from '@renderer/types/rank'
import { request } from '@renderer/utils'

/**
 * 获取当前用户排位状态
 */
export const getCurrentRankStats = async (): Promise<RankStats> => {
  return request({
    url: '/lol-ranked/v1/current-ranked-stats',
    method: 'get'
  })
}

/**
 * 获取用户排位状态根据PPUID
 */
export const getRankStatsByPPUID = async (ppuid: string): Promise<RankStats> => {
  return request({
    url: `/lol-ranked/v1/ranked-stats/${ppuid}`,
    method: 'get'
  })
}
