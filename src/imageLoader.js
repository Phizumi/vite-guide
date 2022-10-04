import hero from '@assets/images/yixk.jpeg'

console.log('hero', hero)

import { name } from './assets/json/config.json'

console.log('user', name)

const img = document.createElement('img')
img.src = hero

document.body.appendChild(img)