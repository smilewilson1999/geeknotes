/// <reference types="vite/client" />

declare global {
  interface Window {
    context: {
      locale: string
    }
  }
}
