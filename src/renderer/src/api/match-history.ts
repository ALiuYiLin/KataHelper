import { Game } from '@renderer/types'
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
/**
 * 获取对局详情
 */
export const getGameDetails = async <T>(gameId: number): Promise<T> => {
  return request({
    url: `/lol-match-history/v1/games/${gameId}`,
    method: 'get'
  })
}

/**
 * 根据游戏数据获取kda
 */
export const getKdaByIndex = (game: Game, index: number): string => {
  return (
    game.participants[index].stats.kills +
    '/' +
    game.participants[index].stats.deaths +
    '/' +
    game.participants[index].stats.assists
  )
}

export const getKdaByParticipantId = (game: Game, participantId: number): string => {
  const p = game.participants.find((pp) => pp.participantId === participantId)
  if (p) return p.stats.kills + '/' + p.stats.deaths + '/' + p.stats.assists
  return ''
}

/**
 * 获取召唤师名称
 */
export const getGameNameByGame = (game: any, index: number): string => {
  return game['participantIdentities'][index]['player']['gameName']
}
/**
 * 获取召唤师昵称编号
 */
export const getTagLineByGame = (game: any, index: number): string => {
  return game['participantIdentities'][index]['player']['tagLine']
}

/**
 * 获取召唤师昵称和编号
 */
export const getNameWithTagLineByGame = (game: any, index: number): string => {
  return (
    getGameNameByGame(game, index) + '#' + game['participantIdentities'][index]['player']['tagLine']
  )
}
