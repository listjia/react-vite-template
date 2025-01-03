/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_SERVER_URL: string; // 明确声明 VITE_SERVER_URL 的类型
    // 可以继续添加其他环境变量
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }