export const getDataHeros = async () => {
  const heros = []
  const pushHero = (args) => {
    heros.push(...args)
  }
  try {
    let loadHeros = await fetch(`https://swapi.dev/api/people/`)
    let loadDataHeros = await loadHeros.json()
    console.log(loadDataHeros)
    pushHero(loadDataHeros.results)
    do {
      loadHeros = await fetch(`${loadDataHeros.next}`)
      loadDataHeros = await loadHeros.json()
      pushHero(loadDataHeros.results)
    } while (loadDataHeros.next)
  } catch (error) {
    alert(`Unfortunately We have problem with dowload Heros `)
  }
  return heros.sort((a, b) => a.name.localeCompare(b.name))
}
