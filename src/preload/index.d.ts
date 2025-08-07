import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      gameInfo: () => Promise<{ [key: string]: string }>
    }
  }
}
