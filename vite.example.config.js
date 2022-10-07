import { defineConfig } from "vite"
import path from "path"

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
    },
    preprocessorOptions: { // 预处理器配置
      less: {
        math: "always",
        globalVars: { // 全局变量
          mainColor: "#262626"
        }
      },
      // sass: {}
    },
    devSourcemap: true,
    // postcss: {
    //   plugins: [
    //     postcssPresetEnv()
    //   ]
    // }
  },
  resolve: {
    alias: {
      "@": path.resovle(__dirname, './src')
    }
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: "[hash].[name].[ext]"
      }
    },
    assetsInlineLimit: 4096, // 4KB
    outDir: 'dist',
    assetsDir: 'static'
  }
})