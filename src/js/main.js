import { request } from './request.js'
import { createHero } from './function.js'
const tableBoxTitle= document.querySelectorAll('.table__box-title')
const build = async () => {
  const response = await request()
  
  response.reverse().forEach((hero) => {
    tableBoxTitle.forEach((item) => {
      const lastLetter = item.id.charAt(item.id.length - 1)
      if (lastLetter === hero.name.charAt(0)) {
        createHero(item, hero)
      }
    })
  })
}
build()
