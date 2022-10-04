require('./src/a')

const path = require('path')
const fs = require('fs')
const css = fs.readFileSync(path.resolve(__dirname, './variable.css'))

console.log('css', css.toString())
console.log(process.cwd())
console.log(__dirname)