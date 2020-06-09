import { getDataHeros } from './request.js'
import {
  createElementsHeros,
  sortFirstLetterByName,
  createContainer,
  addHerosToDom,
} from './function.js'
export const tableBody = document.querySelector('.table__body')
const buildApi = async () => {
  const dataHeros = await getDataHeros()

  const alphabetByName = sortFirstLetterByName(dataHeros)

  const containerByHeros = createContainer(alphabetByName)

  const elementsHeros = createElementsHeros(dataHeros)

  const addHeros = addHerosToDom(containerByHeros, elementsHeros)
}
buildApi()
