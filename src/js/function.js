import { tableBody } from './main.js'
const createBox = (value) => {
  const box = document.createElement('th')
  box.setAttribute('class', 'table__item')
  box.textContent = value
  return box
}
const createTableBox = (letter) => {
  const tableBox = document.createElement('tr')
  tableBox.setAttribute('class', ` table__box ${letter}letter`)
  return tableBox
}
export const createContainer = (letters) => {
  const container = []
  const createBox = letters.forEach((letter) => {
    const box = document.createElement('tr')
    box.setAttribute('class', 'table__box-title')
    box.setAttribute('id', `${letter}`)
    const title = document.createElement('td')
    title.setAttribute('class', 'table__title')
    title.setAttribute('scope', 'row')
    title.setAttribute('colspan', '6')
    title.textContent = `${letter}`
    box.appendChild(title)
    container.push(box)
  })
  return container
}
export const sortFirstLetterByName = (heros) => {
  const firstLettersByName = []
  const filter = heros.forEach((item) => {
    const name = item.name
    const firstLetter = name.charAt(0)
    firstLettersByName.push(firstLetter)
  })
  return [...new Set(firstLettersByName)]
}
export const createElementsHeros = (heros) => {
  const elementsHeros = []

  heros.forEach(({ name, eye_color, gender, hair_color, height, mass }) => {
    const heroName = createBox(name)
    const heroEyeColor = createBox(eye_color)
    const heroGender = createBox(gender)
    const heroHairColor = createBox(hair_color)
    const heroHeight = createBox(height)
    const heroMass = createBox(mass)
    const firstLetter = name.charAt(0)
    const container = createTableBox(firstLetter)
    container.append(
      heroName,
      heroEyeColor,
      heroGender,
      heroHairColor,
      heroHeight,
      heroMass
    )

    elementsHeros.push(container)
  })

  return elementsHeros
}
export const addHerosToDom = (container, heros) => {
  container.forEach((element) => {
    const search = heros.filter((item) => {
      const itemClass = item.attributes.class.value
      return itemClass.includes(`${element.id}letter`)
    })
    tableBody.append(element)
    element.after(...search)
  })
}
