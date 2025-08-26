import { Game, TeamData } from '@renderer/types'
import { request } from '@renderer/utils'

/**
 * 当前用户近期对局
 */
export const getCurrentSummonerMatches = async <T>(params?: {
  begIndex: number
  endIndex: number
}): Promise<T> => {
  return request({
    url: '/lol-match-history/v1/products/lol/current-summoner/matches',
    method: 'get',
    params
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

// 获取当前游戏队伍数据
export const getCurrentGameTeamDatas = async (gameId: number): Promise<TeamData[]> => {
  const game = await getGameDetails<Game>(gameId)
  const teamDatas: TeamData[] = []
  // 是否存在 subteamPlacement不为0
  if (game.participants.find((p) => p.stats.subteamPlacement !== 0)) {
    //存在 按subteamPlacement字段划分
    const teamCount = new Set(game.participants.map((p) => p.stats.subteamPlacement)).size
    for (let i = 0; i < teamCount; i++) {
      const participants = game.participants.filter((p) => p.stats.subteamPlacement === i + 1)
      const teamData: TeamData = {
        participants: participants,
        participantIdentities: game.participantIdentities.filter((p) =>
          participants.find((a) => a.participantId === p.participantId)
        )
      }
      teamDatas.push(teamData)
    }
  } else {
    // 不存在 按win字段划分
    const playerCount = game.participants.length
    teamDatas.push({
      participants: game.participants.slice(0, playerCount / 2),
      participantIdentities: game.participantIdentities.slice(0, playerCount / 2)
    })
    teamDatas.push({
      participants: game.participants.slice(playerCount / 2, playerCount),
      participantIdentities: game.participantIdentities.slice(playerCount / 2, playerCount)
    })
  }
  return teamDatas
}
