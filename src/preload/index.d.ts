// import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    context: {
      locale: string
    }
  }
}

export {}
