import { useConfigStore } from '@renderer/store/config'
import axios from 'axios'

export function getCurrentSummoner(): void {
  const configStore = useConfigStore()
  axios
    .get(`https://127.0.0.1:${configStore.appPort}/lol-summoner/v1/current-summoner`, {
      auth: {
        username: 'riot',
        password: configStore.remotingAuthToken.value as string
      }
    })
    .then((res) => {
      console.log('res: ', res)
    })
    .catch((e) => {
      console.log('e: ', e)
    })
}
