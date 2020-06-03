let counter = 0
export const createHero = (item, hero) => {
  // Add Counter
  counter++
  // Add Visible
  item.classList.add('table__box-title--visible')
  // // Container
  const tableBox = document.createElement('tr')
  if (counter % 2 == 0) {
    tableBox.setAttribute('class', 'table__box table__box--gray')
  } else {
    tableBox.setAttribute('class', 'table__box ')
  }

  item.parentNode.insertBefore(tableBox, item.nextSibling)

  // Hero-Name
  const heroName = document.createElement('th')
  heroName.setAttribute('class', 'table__item')
  heroName.textContent = hero.name
  tableBox.appendChild(heroName)
  // Hero-Eyes
  const heroEyes = document.createElement('th')
  heroEyes.textContent = hero.eye_color
  heroEyes.setAttribute('class', 'table__item')
  tableBox.appendChild(heroEyes)
  // Hero-Gender
  const heroGender = document.createElement('th')
  heroGender.textContent = hero.gender
  heroGender.setAttribute('class', 'table__item')
  tableBox.appendChild(heroGender)
  // Hero-HairColor
  const heroHairColor = document.createElement('th')
  heroHairColor.textContent = hero.hair_color
  heroHairColor.setAttribute('class', 'table__item')
  tableBox.appendChild(heroHairColor)
  // Hero-Height
  const heroHeight = document.createElement('th')
  heroHeight.textContent = hero.height
  heroHeight.setAttribute('class', 'table__item')
  tableBox.appendChild(heroHeight)
  // Hero-Mass
  const heroMass = document.createElement('th')
  heroMass.textContent = hero.mass
  heroMass.setAttribute('class', 'table__item')
  tableBox.appendChild(heroMass)
}
