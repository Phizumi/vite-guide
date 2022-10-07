import {defineConfig, loadEnv} from 'vite'
import viteBaseConfig from './vite.base.config'
import viteDevConfig from './vite.dev.config'
import viteProdConfig from './vite.prod.config'

const envResolver = {
  build: () => {
    console.log('build')
    return { ...viteBaseConfig, ...viteProdConfig }
  },
  serve: () => {
    // console.log('serve')
    return Object.assign({}, viteBaseConfig, viteDevConfig)
  }
}

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  console.log('env',env.ZEN_APP_KEY)
  return envResolver[command]()
})
