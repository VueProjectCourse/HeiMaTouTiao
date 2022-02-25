/// <reference types="vitepress/client" />

declare module 'wltheme/config' {
  import { UserConfig } from 'vitepress'
  const config: () => Promise<UserConfig>
  export default config
}

declare module 'wltheme/highlight' {
  const createHighlighter: () => Promise<(input: string) => string>
  export default createHighlighter
}
