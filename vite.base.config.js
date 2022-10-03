import { defineConfig } from "vite"

export default defineConfig({
  optimizeDeps: {
    exclude: []
  },
  envPrefix: "ZEN_",
  css: {
    modules: {
      // localsConvention: "camelCase", // key 命名风格
      // scopeBehaviour: "local", // local-模块化 global-全局化
      // generateScopedName: "[name]_[local]_[hash:5]", // 生成模块化类名的规则
      // hashPrefix: "zen", // hash salt
      // globalModulePaths: [], // 不进行模块化的路径
    },
    preprocessorOptions: {
      less: {
        math: "always",
        globalVars: {
          mainColor: "#262626"
        }
      }
    },
    devSourcemap: true
  }
})