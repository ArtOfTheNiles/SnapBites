/// <reference types="vite/client" />
declare module 'react-dom/client'
declare module '*.css' {
  const content: { [className: string]: string }
  export default content
}

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly ADMIN_SECRET: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}