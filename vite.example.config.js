import { defineConfig } from "vite"

export default defineConfig({
  optimizeDeps: {
    exclude: [] // 排除预构建的依赖
  },
  envPrefix: '', // 配置 vite 注入客户端环境变量校验的 env 前缀
  css: {
    modules: {
      localsConvention: "camelCase", // key 命名风格
      scopeBehaviour: "local", // local-模块化 global-全局化
      generateScopedName: "[name]_[local]_[hash:5]", // 生成模块化类名的规则
      hashPrefix: "zen", // hash salt
      globalModulePaths: [], // 不进行模块化的路径
    }
  }
})