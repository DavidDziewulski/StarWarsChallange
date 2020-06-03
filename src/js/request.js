export const request = async () => {
  const heros = []
  const getHeros = (args) => {
    heros.push(...args)
  }
  const response = await fetch(`https://swapi.dev/api/people/?page=1`)
  if (response.status === 200) {
    const data = await response.json()
    getHeros(data.results)
  } else {
    throw new Error('Unable to fetch the country')
  }
  const response2 = await fetch(`https://swapi.dev/api/people/?page=1`)
  if (response2.status === 200) {
    const data2 = await response2.json()
    getHeros(data2.results)
  } else {
    throw new Error('Unable to fetch the country')
  }

  const response3 = await fetch(`https://swapi.dev/api/people/?page=1`)
  if (response3.status === 200) {
    const data3 = await response3.json()
    getHeros(data3.results)
  } else {
    throw new Error('Unable to fetch the country')
  }
  const response4 = await fetch(`https://swapi.dev/api/people/?page=1`)
  if (response4.status === 200) {
    const data4 = await response4.json()
    getHeros(data4.results)
  } else {
    throw new Error('Unable to fetch the country')
  }
  const response5 = await fetch(`https://swapi.dev/api/people/?page=1`)
  if (response5.status === 200) {
    const data5 = await response5.json()
    getHeros(data5.results)
  } else {
    throw new Error('Unable to fetch the country')
  }
  const response6 = await fetch(`http://swapi.dev/api/people/?page=6`)
  if (response6.status === 200) {
    const data6 = await response6.json()
    getHeros(data6.results)
  } else {
    throw new Error('Unable to fetch the country')
  }
  const response7 = await fetch(`http://swapi.dev/api/people/?page=7`)
  if (response7.status === 200) {
    const data7 = await response7.json()
    getHeros(data7.results)
  } else {
    throw new Error('Unable to fetch the country')
  }
  const response8 = await fetch(`http://swapi.dev/api/people/?page=8`)
  if (response8.status === 200) {
    const data8 = await response8.json()
    getHeros(data8.results)
  } else {
    throw new Error('Unable to fetch the country')
  }
  const response9 = await fetch(`http://swapi.dev/api/people/?page=9`)
  if (response9.status === 200) {
    const data9 = await response9.json()
    getHeros(data9.results)
  } else {
    throw new Error('Unable to fetch the country')
  }
  return heros.sort((a, b) => a.name.localeCompare(b.name))
}
