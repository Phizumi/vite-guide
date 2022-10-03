import style from './cmpA.module.css'
import styleLess from './cmpA.module.less'

console.log('styleLess',styleLess)

const div = document.createElement('div')
div.className = style.footer

document.body.appendChild(div)