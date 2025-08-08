import { useConfigStore } from '@renderer/store/config'
import { AxiosRequestConfig } from 'axios'

const configStore = useConfigStore()

export const request = async <T = any>(
  config: Omit<AxiosRequestConfig, 'auth' | 'baseURL'>
): Promise<T> => {
  const requestConfig = {
    baseURL: `https://127.0.0.1:${configStore.appPort.value}`,
    auth: {
      username: 'riot',
      password: configStore.remotingAuthToken.value as string
    }
  }
  return window.api.request({
    ...config,
    ...requestConfig
  })
}
//请求https://ddragon.leagueoflegends.com/api/versions.json获取游戏版本号
export const requestDdragon = async <T = any>(config: AxiosRequestConfig): Promise<T> => {
  const requestConfig = {
    baseURL: `https://ddragon.leagueoflegends.com`,
    ...config
  }
  return window.api.request({
    ...requestConfig
  })
}
