/// <reference types="vite/client" />
declare module 'react-dom/client';

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly ADMIN_SECRET: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}