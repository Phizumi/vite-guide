const Koa = require('koa')
const fs = require('fs')
const path = require('path')

const app = new Koa()

app.use(async (ctx) => {
  if (ctx.request.url === '/') {
    const indexContent = await fs.promises.readFile(path.resolve(__dirname, './index.html'))
    ctx.response.body = indexContent
    ctx.response.set('Content-Type', 'text/html')
  }

  if (ctx.request.url === '/main.js') {
    const mainContent = await fs.promises.readFile(path.resolve(__dirname, './main.js'))
    ctx.response.body = mainContent
    ctx.response.set('Content-Type', 'text/javascript')
  }

  if (ctx.request.url === '/App.vue') {
    const vueContent = await fs.promises.readFile(path.resolve(__dirname, './App.vue'))
    ctx.response.body = vueContent
    ctx.response.set('Content-Type', 'text/javascript')
  }

})

app.listen(5173, () => {
  console.log('vite dev serve listening on 5173')
})