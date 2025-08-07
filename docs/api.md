# 英雄联盟LCU API

## 当前召唤师信息

接口：**{{base_url}}/lol-summoner/v1/current-summoner**

```json
{
    "accountId": 2438639679219808,       // 账户的唯一标识符（长整型），用于区分不同用户
    "displayName": "",                   // 用户展示名称（当前为空）
    "gameName": "犀利哥",                // 游戏内昵称（召唤师名称）
    "internalName": "",                  // 内部使用的名称（通常为空或用于特殊场景）
    "nameChangeFlag": false,             // 是否已使用过免费改名服务（false表示未使用）
    "percentCompleteForNextLevel": 14,   // 当前等级升级进度百分比（14%）
    "privacy": "PUBLIC",                 // 账户隐私设置（PUBLIC表示公开可见）
    "profileIconId": 3494,               // 个人资料头像的ID（对应具体头像图片）
    "puuid": "c7f7a19c-b63f-5718-9829-7dec9cda458d",  // 玩家全局唯一标识符（跨游戏/平台）
    "rerollPoints": {                    // 极地大乱斗模式的重随点数信息
        "currentPoints": 332,            // 当前拥有的重随点数
        "maxRolls": 2,                   // 每场游戏最大可重随次数
        "numberOfRolls": 1,              // 当前已使用的重随次数
        "pointsCostToRoll": 250,         // 单次重随消耗的点数
        "pointsToReroll": 168            // 距离下次重随还需点数
    },
    "summonerId": 2438639679219808,      // 召唤师ID（与accountId可能相同，旧版兼容字段）
    "summonerLevel": 135,                // 当前召唤师等级
    "tagLine": "56399",                  // 玩家标签（用于区分同名账号）
    "unnamed": false,                    // 是否为未命名账户（false表示已命名）
    "xpSinceLastLevel": 449,             // 当前等级已获得经验值
    "xpUntilNextLevel": 3072             // 升到下一级所需经验值
}
```

## 获取图片数据

1. 请求https://ddragon.leagueoflegends.com/api/versions.json获取游戏版本号
2. 得到游戏版本号后请求https://ddragon.leagueoflegends.com/cdn/{versions}/img/profileicon/{profileIconId}.png得到用户头像

## 近期对局

**{{base_url}}/lol-match-history/v1/products/lol/current-summoner/matches**

```json
{
    "accountId": 2438639679219808,       // 账户唯一ID
    "games": {
        "gameBeginDate": "",              // 查询的游戏记录开始日期（当前为空）
        "gameCount": 20,                  // 总游戏场次
        "gameEndDate": "",                // 查询的游戏记录结束日期（当前为空）
        "gameIndexBegin": 0,              // 查询结果的起始索引
        "gameIndexEnd": 19,               // 查询结果的结束索引（20条记录对应0-19）
        "games": [                        // 游戏记录数组
            {
                "endOfGameResult": "GameComplete",  // 游戏结束状态（正常完成）
                "gameCreation": 1752038186895,       // 游戏创建时间戳（毫秒）
                "gameCreationDate": "2025-07-09T05:16:26.895Z",  // 游戏创建时间（ISO格式）
                "gameDuration": 2068,                // 游戏时长（秒）≈34.5分钟
                "gameId": 10060902308,               // 本局游戏全局唯一ID
                "gameMode": "CLASSIC",               // 游戏模式（经典召唤师峡谷）
                "gameModeMutators": [],              // 特殊模式变异器（空表示常规模式）
                "gameType": "MATCHED_GAME",          // 游戏类型（匹配模式）
                "gameVersion": "15.13.693.4876",     // 游戏客户端版本
                "mapId": 11,                         // 地图ID（11=召唤师峡谷）
                "participantIdentities": [           // 玩家身份信息
                    {
                        "participantId": 3,          // 本局内玩家ID
                        "player": {
                            "accountId": 0,          // 保留字段（旧版兼容）
                            "currentAccountId": 0,    // 保留字段
                            "currentPlatformId": "HN1",  // 玩家所在大区（海峡服）
                            "gameName": "犀利哥",     // 游戏昵称
                            "matchHistoryUri": "",    // 比赛历史记录URI（当前为空）
                            "platformId": "HN1",      // 玩家注册大区
                            "profileIcon": 3494,      // 头像ID
                            "puuid": "c7f7a19c-b63f-5718-9829-7dec9cda458d",  // 玩家全局ID
                            "summonerId": 2438639679219808,  // 召唤师ID
                            "summonerName": "",       // 召唤师名称（旧版字段）
                            "tagLine": "56399"        // 玩家标签
                        }
                    }
                ],
                "participants": [          // 游戏内玩家数据
                    {
                        "championId": 268, // 英雄ID（268=沙漠皇帝·阿兹尔）
                        "highestAchievedSeasonTier": "",  // 本赛季最高段位（当前为空）
                        "participantId": 3,  // 参与者ID（需与participantIdentities对应）
                        "spell1Id": 4,     // 召唤师技能1（4=闪现）
                        "spell2Id": 12,    // 召唤师技能2（12=传送）
                        "stats": {          // 本局详细数据统计
                            "assists": 10,              // 助攻数
                            "causedEarlySurrender": false, // 是否导致提前投降
                            "champLevel": 17,           // 英雄等级
                            // ...（此处省略中间统计数据）...
                            "kills": 5,                 // 击杀数
                            "deaths": 7,                // 死亡数
                            "win": true                 // 是否获胜
                        },
                        "teamId": 100,       // 所属队伍ID（100=蓝色方）
                        "timeline": {        // 游戏时间线数据
                            "lane": "MIDDLE",  // 分路（中路）
                            "role": "SOLO"     // 定位（单人线）
                        }
                    }
                ],
                "platformId": "HN1",     // 游戏所在大区
                "queueId": 420,          // 队列ID（420=单双排）
                "seasonId": 0,           // 赛季ID（0表示当前赛季）
                "teams": [               // 队伍全局数据
                    {
                        "bans": [        // 蓝色方禁用英雄
                            {"championId": 15, "pickTurn": 1},   // 1楼禁英雄（15=战争之影）
                            {"championId": 711, "pickTurn": 2},  // 2楼禁英雄（711=残月之肃）
                            {"championId": -1, "pickTurn": 3},   // 空Ban位
                            {"championId": 157, "pickTurn": 4},  // 4楼禁英雄（157=亚索）
                            {"championId": 99, "pickTurn": 5}    // 5楼禁英雄（99=光辉女郎）
                        ],
                        "baronKills": 1,      // 击杀纳什男爵次数
                        "dragonKills": 3,     // 击杀小龙次数
                        "firstBaron": true,    // 是否首杀男爵
                        "firstBlood": true,    // 是否一血
                        "firstDargon": true,   // 是否首条小龙（拼写错误，应为Dragon）
                        "firstInhibitor": true, // 是否首个摧毁水晶
                        "firstTower": true,     // 是否首座防御塔
                        "inhibitorKills": 2,    // 摧毁水晶数
                        "riftHeraldKills": 1,   // 击杀峡谷先锋次数
                        "teamId": 100,          // 队伍ID（蓝色方）
                        "towerKills": 7,        // 摧毁防御塔数
                        "win": "Win"            // 胜利
                    },
                    {
                        // 红色方数据（结构同上）
                        "bans": [
                            {"championId": 122, "pickTurn": 6},  // 暗裔剑魔
                            {"championId": 893, "pickTurn": 7},  // 含羞蓓蕾
                            {"championId": 53, "pickTurn": 8},   // 机械先驱
                            {"championId": 30, "pickTurn": 9},   // 死亡颂唱者
                            {"championId": 111, "pickTurn": 10}  // 深海泰坦
                        ],
                        "dragonKills": 1,       // 仅获1条小龙
                        "teamId": 200,          // 队伍ID（红色方）
                        "towerKills": 3,        // 推塔数较少
                        "win": "Fail"           // 失败
                    }
                ]
            }
        ]
    },
    "platformId": "HN1"  // 账户所在大区（海峡服）
}
```

## 获取英雄数据

**https://ddragon.leagueoflegends.com/cdn/{versionId}/data/zh_CN/champion.json**

```json
{
    "type": "champion",
    "format": "standAloneComplex",
    "version": "15.15.1",
    "data": {
        "Aatrox": {
            "version": "15.15.1",
            "id": "Aatrox",
            "key": "266",
            "name": "暗裔剑魔",
            "title": "亚托克斯",
            "blurb": "亚托克斯和他的同胞曾是为恕瑞玛对抗虚空的守护者一族。曾经满载荣誉的他们，却成了符文之地上更大的威胁，最后被人类设下的圈套所击败。在被囚禁数个世纪后，亚托克斯率先找到了重获自由的方法：他的精魂被封印在了那把神奇武器之中，而那些妄图挥舞它的愚昧之徒都会被他腐蚀、侵占。如今，他凭借偷来的身躯，以一种近似他曾经形态的凶残外表行走于符文之地，寻求着一次毁天灭地、迟来许久的复仇。",
            "info": {
                "attack": 8,
                "defense": 4,
                "magic": 3,
                "difficulty": 4
            },
            "image": {
                "full": "Aatrox.png",
                "sprite": "champion0.png",
                "group": "champion",
                "x": 0,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Fighter"
            ],
            "partype": "鲜血魔井",
            "stats": {
                "hp": 650,
                "hpperlevel": 114,
                "mp": 0,
                "mpperlevel": 0,
                "movespeed": 345,
                "armor": 38,
                "armorperlevel": 4.8,
                "spellblock": 32,
                "spellblockperlevel": 2.05,
                "attackrange": 175,
                "hpregen": 3,
                "hpregenperlevel": 0.5,
                "mpregen": 0,
                "mpregenperlevel": 0,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 60,
                "attackdamageperlevel": 5,
                "attackspeedperlevel": 2.5,
                "attackspeed": 0.651
            }
        }
    }
}
```

## 获取英雄头像

请求'https://ddragon.leagueoflegends.com/cdn/{versionId}/img/champion/{championName}.png'



