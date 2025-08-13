export interface Datavalue {}

export interface Image {
  full: string
  sprite: string
  group: string
  x: number
  y: number
  w: number
  h: number
}

export interface Spell {
  id: string
  name: string
  description: string
  tooltip: string
  maxrank: number
  cooldown: number[]
  cooldownBurn: string
  cost: number[]
  costBurn: string
  datavalues: Datavalue
  effect: any[]
  effectBurn: any[]
  vars: any[]
  key: string
  summonerLevel: number
  modes: string[]
  costType: string
  maxammo: string
  range: number[]
  rangeBurn: string
  image: Image
  resource: string
}
export interface SummonerSpell {
  data: {
    [key: string]: Spell
  }
  type: string
  version: string
}
