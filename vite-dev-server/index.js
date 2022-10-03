const Koa = require('koa')
const fs = require('fs')
const path = require('path')

const app = new Koa()

app.use(async (ctx) => {
  if (ctx.request.url === '/') {
    ctx.response.body = await fs.promises.readFile(path.resolve(__dirname, './index.html'))
    ctx.response.set('Content-Type', 'text/html')
  }

  if (ctx.request.url === '/main.js') {
    ctx.response.body = await fs.promises.readFile(path.resolve(__dirname, './main.js'))
    ctx.response.set('Content-Type', 'text/javascript')
  }

  if (ctx.request.url === '/App.vue') {
    ctx.response.body = await fs.promises.readFile(path.resolve(__dirname, './App.vue'))
    ctx.response.set('Content-Type', 'text/javascript')
  }

})

app.listen(5173, () => {
  console.log('vite dev serve listening on 5173')
})