import { ElectronAPI } from '@electron-toolkit/preload'
import { AxiosRequestConfig } from 'axios'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      gameInfo: () => Promise<{ [key: string]: string }>,
      request: (config: AxiosRequestConfig) => Promise<unknown>
    }
  }
}
