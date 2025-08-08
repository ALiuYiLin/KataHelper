type Queue = {
  queueId: number
  map: string
  description: string
  notes?: string | null
  tag?: string
}

export const queues: Queue[] = [
  {
    queueId: 0,
    map: 'Custom games',
    description: '自定义游戏',
    notes: null,
    tag: '自定义'
  },
  {
    queueId: 400,
    map: "Summoner's Rift",
    description: '5v5 征召模式',
    notes: null
  },
  {
    queueId: 420,
    map: "Summoner's Rift",
    description: '5v5 单双排位',
    notes: null,
    tag: '单双排'
  },
  {
    queueId: 430,
    map: "Summoner's Rift",
    description: '5v5 盲选模式',
    notes: null,
    tag: '匹配赛'
  },
  {
    queueId: 440,
    map: "Summoner's Rift",
    description: '5v5 灵活排位',
    notes: null,
    tag: '灵活排位'
  },
  {
    queueId: 450,
    map: 'Howling Abyss',
    description: '5v5 极地大乱斗',
    notes: null,
    tag: '极地大乱斗'
  },
  {
    queueId: 490,
    map: "Summoner's Rift",
    description: '快速游戏',
    notes: null,
    tag: '快速游戏'
  },
  {
    queueId: 700,
    map: "Summoner's Rift",
    description: '召唤师峡谷冠军杯赛',
    notes: null,
    tag: '召唤师峡谷冠军杯赛'
  },
  {
    queueId: 720,
    map: 'Howling Abyss',
    description: '极地大乱斗冠军杯赛',
    notes: null,
    tag: '极地大乱斗冠军杯赛'
  },
  {
    queueId: 820,
    map: 'Twisted Treeline',
    description: '3v3 人机新手',
    notes: null,
    tag: '人机新手'
  },
  {
    queueId: 830,
    map: "Summoner's Rift",
    description: '5v5 人机入门',
    notes: '2024年3月被队列ID 870替代'
  },
  {
    queueId: 840,
    map: "Summoner's Rift",
    description: '5v5 人机新手',
    notes: '2024年3月被队列ID 880替代'
  },
  {
    queueId: 850,
    map: "Summoner's Rift",
    description: '5v5 人机中级',
    notes: '2024年3月被队列ID 890替代'
  },
  {
    queueId: 870,
    map: "Summoner's Rift",
    description: '5v5 人机入门',
    notes: null,
    tag: '人机入门'
  },
  {
    queueId: 880,
    map: "Summoner's Rift",
    description: '5v5 人机新手',
    notes: null,
    tag: '人机新手'
  },
  {
    queueId: 890,
    map: "Summoner's Rift",
    description: '5v5 人机中级',
    notes: null,
    tag: '人机中级'
  },
  {
    queueId: 900,
    map: "Summoner's Rift",
    description: '无限乱斗',
    notes: null,
    tag: '无限乱斗'
  },
  {
    queueId: 910,
    map: 'Crystal Scar',
    description: '飞升模式',
    notes: null,
    tag: '飞升模式'
  },
  {
    queueId: 920,
    map: 'Howling Abyss',
    description: '魄罗王模式',
    notes: null,
    tag: '魄罗王模式'
  },
  {
    queueId: 940,
    map: "Summoner's Rift",
    description: '围攻模式',
    notes: null,
    tag: '围攻模式'
  },
  {
    queueId: 950,
    map: "Summoner's Rift",
    description: '末日人机投票模式',
    notes: null,
    tag: '末日人机投票模式'
  },
  {
    queueId: 960,
    map: "Summoner's Rift",
    description: '末日人机标准模式',
    notes: null,
    tag: '末日人机标准模式'
  },
  {
    queueId: 980,
    map: 'Valoran City Park',
    description: '星之守护者：入侵普通模式',
    notes: null,
    tag: '星之守护者：入侵普通模式'
  },
  {
    queueId: 990,
    map: 'Valoran City Park',
    description: '星之守护者：入侵激战模式',
    notes: null,
    tag: '星之守护者：入侵激战模式'
  },
  {
    queueId: 1000,
    map: 'Overcharge',
    description: 'PROJECT：猎人模式',
    notes: null,
    tag: 'PROJECT：猎人模式'
  },
  {
    queueId: 1010,
    map: "Summoner's Rift",
    description: '雪地无限乱斗',
    notes: null,
    tag: '雪地无限乱斗'
  },
  {
    queueId: 1020,
    map: "Summoner's Rift",
    description: '无限火力',
    notes: null,
    tag: '无限火力'
  },
  {
    queueId: 1030,
    map: 'Crash Site',
    description: '奥德赛：萃取入门模式',
    notes: null,
    tag: '奥德赛：萃取入门模式'
  },
  {
    queueId: 1040,
    map: 'Crash Site',
    description: '奥德赛：萃取学员模式',
    notes: null,
    tag: '奥德赛：萃取学员模式'
  },
  {
    queueId: 1050,
    map: 'Crash Site',
    description: '奥德赛：萃取船员模式',
    notes: null,
    tag: '奥德赛：萃取船员模式'
  },
  {
    queueId: 1060,
    map: 'Crash Site',
    description: '奥德赛：萃取船长模式',
    notes: null,
    tag: '奥德赛：萃取船长模式'
  },
  {
    queueId: 1070,
    map: 'Crash Site',
    description: '奥德赛：萃取激战模式',
    notes: null,
    tag: '奥德赛：萃取激战模式'
  },
  {
    queueId: 1090,
    map: 'Convergence',
    description: '云顶之弈',
    notes: null,
    tag: '云顶之弈'
  },
  {
    queueId: 1100,
    map: 'Convergence',
    description: '云顶之弈排位',
    notes: null,
    tag: '云顶之弈排位'
  },
  {
    queueId: 1110,
    map: 'Convergence',
    description: '云顶之弈教程',
    notes: null,
    tag: '云顶之弈教程'
  },
  {
    queueId: 1111,
    map: 'Convergence',
    description: '云顶之弈测试',
    notes: null,
    tag: '云顶之弈测试'
  },
  {
    queueId: 1210,
    map: 'Convergence',
    description: '云顶之弈：胖胖龙宝藏模式',
    notes: null,
    tag: '云顶之弈：胖胖龙宝藏模式'
  },
  {
    queueId: 1300,
    map: 'Nexus Blitz',
    description: '极限闪击',
    notes: null,
    tag: '极限闪击'
  },
  {
    queueId: 1400,
    map: "Summoner's Rift",
    description: '终极魔典',
    notes: null,
    tag: '终极魔典'
  },
  {
    queueId: 1700,
    map: 'Rings of Wrath',
    description: '斗魂竞技场',
    notes: null,
    tag: '斗魂竞技场'
  },
  {
    queueId: 1710,
    map: 'Rings of Wrath',
    description: '斗魂竞技场（16人）',
    notes: null,
    tag: '斗魂竞技场'
  },
  {
    queueId: 1810,
    map: 'Swarm',
    description: '虫群模式（单人）',
    notes: null,
    tag: '虫群模式'
  },
  {
    queueId: 1820,
    map: 'Swarm',
    description: '虫群模式（双人）',
    notes: null,
    tag: '虫群模式'
  },
  {
    queueId: 1830,
    map: 'Swarm',
    description: '虫群模式（三人）',
    notes: null,
    tag: '虫群模式'
  },
  {
    queueId: 1840,
    map: 'Swarm',
    description: '虫群模式（四人）',
    notes: null,
    tag: '虫群模式'
  },
  {
    queueId: 1900,
    map: "Summoner's Rift",
    description: '自选无限火力',
    notes: null,
    tag: '自选无限火力'
  },
  {
    queueId: 2000,
    map: "Summoner's Rift",
    description: '新手教程1',
    notes: null,
    tag: '新手教程1'
  },
  {
    queueId: 2010,
    map: "Summoner's Rift",
    description: '新手教程2',
    notes: null,
    tag: '新手教程2'
  },
  {
    queueId: 2020,
    map: "Summoner's Rift",
    description: '新手教程3',
    notes: null,
    tag: '新手教程3'
  }
]

export const getQueue = (queueId: number): Queue | undefined => {
  return queues.find((q) => q.queueId === queueId)
}
