import { defineConfig } from "vite"

export default defineConfig({
  optimizeDeps: {
    exclude: [] // 排除预构建的依赖
  },
  envPrefix: '' // 配置 vite 注入客户端环境变量校验的 env 前缀
})