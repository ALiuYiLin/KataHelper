/**
 * 排位系统核心数据结构
 */
export interface HighestRankedEntry {
  /** 本赛季为奖励而赢得的胜场数 */
  currentSeasonWinsForRewards: number

  /** 当前段位分段 (例如："I", "II", "III", "IV") */
  division: string

  /** 历史最高段位分段 */
  highestDivision: string

  /** 历史最高段位级别 (例如："DIAMOND", "MASTER") */
  highestTier: string

  /** 是否处于定级赛阶段 */
  isProvisional: boolean

  /** 当前胜点 (LP) */
  leaguePoints: number

  /** 本赛季失败场次 */
  losses: number

  /** 晋级赛进度 (例如："W-L-W") */
  miniSeriesProgress: string

  /** 上赛季结束时的段位分段 */
  previousSeasonEndDivision: string

  /** 上赛季结束时的段位级别 */
  previousSeasonEndTier: string

  /** 上赛季达到的最高段位分段 */
  previousSeasonHighestDivision: string

  /** 上赛季达到的最高段位级别 */
  previousSeasonHighestTier: string

  /** 上赛季为奖励而赢得的胜场数 */
  previousSeasonWinsForRewards: number

  /** 定级赛总场次要求 (通常为10场) */
  provisionalGameThreshold: number

  /** 剩余定级赛场次 */
  provisionalGamesRemaining: number

  /** 队列类型 (例如："RANKED_SOLO_5x5") */
  queueType: string

  /** 特殊评分 (用于特殊排位系统如无畏契约) */
  ratedRating: number

  /** 特殊段位级别 */
  ratedTier: string

  /** 当前段位级别 */
  tier: string

  /** 警告信息 (通常为undefined) */
  warnings?: any

  /** 本赛季胜利场次 */
  wins: number
}

/**
 * 召唤师峡谷排位数据规范 (与HighestRankedEntry相同)
 */
export interface HighestRankedEntrySR extends HighestRankedEntry {}

/**
 * 灵活组排排位数据
 */
export interface RANKED_FLEX_SR extends HighestRankedEntry {
  // 继承自HighestRankedEntry的所有字段
}

/**
 * 单双排排位数据
 */
export interface RANKED_SOLO_5x5 extends HighestRankedEntry {
  // 继承自HighestRankedEntry的所有字段
}

/**
 * 云顶之弈排位数据
 */
export interface RANKED_TFT extends HighestRankedEntry {
  // 继承自HighestRankedEntry的所有字段
}

/**
 * 云顶之弈双人作战排位数据
 */
export interface RANKED_TFT_DOUBLE_UP extends HighestRankedEntry {
  // 继承自HighestRankedEntry的所有字段
}

/**
 * 云顶之弈极速模式排位数据
 */
export interface RANKED_TFT_TURBO extends HighestRankedEntry {
  // 继承自HighestRankedEntry的所有字段
}

/**
 * 所有排位队列数据的映射
 */
export interface QueueMap {
  /** 灵活组排数据 */
  rANKED_FLEX_SR: RANKED_FLEX_SR

  /** 单双排数据 */
  rANKED_SOLO_5x5: RANKED_SOLO_5x5

  /** 云顶之弈标准模式数据 */
  rANKED_TFT: RANKED_TFT

  /** 云顶之弈双人模式数据 */
  rANKED_TFT_DOUBLE_UP: RANKED_TFT_DOUBLE_UP

  /** 云顶之弈极速模式数据 */
  rANKED_TFT_TURBO: RANKED_TFT_TURBO
}

/**
 * 单个排位队列数据结构
 */
export interface Queue extends HighestRankedEntry {
  // 继承自HighestRankedEntry的所有字段
}

/**
 * 赛季时间信息
 */
export interface SeasonBase {
  /** 当前赛季结束时间戳 */
  currentSeasonEnd: number

  /** 当前赛季ID */
  currentSeasonId: number

  /** 下赛季开始时间戳 */
  nextSeasonStart: number
}

/**
 * 各模式赛季时间信息映射
 */
export interface Season {
  /** 灵活组排赛季信息 */
  rANKED_FLEX_SR: SeasonBase

  /** 单双排赛季信息 */
  rANKED_SOLO_5x5: SeasonBase

  /** 云顶之弈标准模式赛季信息 */
  rANKED_TFT: SeasonBase

  /** 云顶之弈双人模式赛季信息 */
  rANKED_TFT_DOUBLE_UP: SeasonBase

  /** 云顶之弈极速模式赛季信息 */
  rANKED_TFT_TURBO: SeasonBase
}

/**
 * 赛季分段进度 (目前为空对象)
 */
export interface SplitsProgress {}

/**
 * 排位系统根数据结构
 */
export interface RankStats {
  /** 当前赛季赛段点数 (用于纪念藏品系统) */
  currentSeasonSplitPoints: number

  /** 已获得的纪念藏品奖励ID列表 */
  earnedRegaliaRewardIds: any[]

  /** 本赛季在召唤师峡谷达到的最高段位级别 */
  highestCurrentSeasonReachedTierSR: string

  /** 历史赛季结束时的最高段位分段 */
  highestPreviousSeasonEndDivision: string

  /** 历史赛季结束时的最高段位级别 */
  highestPreviousSeasonEndTier: string

  /** 所有队列中的最高排位记录 */
  highestRankedEntry: HighestRankedEntry

  /** 召唤师峡谷模式中的最高排位记录 */
  highestRankedEntrySR: HighestRankedEntrySR

  /** 上赛季的赛段点数 */
  previousSeasonSplitPoints: number

  /** 各排位队列数据映射 */
  queueMap: QueueMap

  /** 所有排位队列数据列表 */
  queues: Queue[]

  /** 纪念藏品等级 */
  rankedRegaliaLevel: number

  /** 各模式的赛季时间信息 */
  seasons: Season

  /** 赛季分段进度 */
  splitsProgress: SplitsProgress
}
