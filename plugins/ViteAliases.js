import { readdirSync, statSync } from 'fs'
import { resolve } from 'path'

const getTotalAlias = (separator = "@", basePath = './') => {
  const names =  readdirSync(resolve(__dirname, basePath))
  const alias = {}
  // src alias
  alias[`${separator}`] = resolve(__dirname, `${basePath}`)

  // src sub-dirs alias
  names.forEach(name => {
    const currentAbsPath = resolve(__dirname, `${basePath}/${name}`)
    const state = statSync(currentAbsPath)
    if (state.isDirectory()) {
      const key = `${separator}${name}`
      alias[key] = currentAbsPath
    }
  })
  console.log('alias',alias)
  return alias
}

export const ViteAliases =  ({
  separator = '@'
} = {}) => {
  return {
    name: 'vite-aliases',
    config: (config, env) => {
      const alias = getTotalAlias(separator, '../src')
      return {
        resolve: { alias }
      }
    }
  }
}