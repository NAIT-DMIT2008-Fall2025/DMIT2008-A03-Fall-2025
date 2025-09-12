// bump version from 2.2.0 to 2.3.0
const BASE_URL = "https://lldev.thespacedevs.com/2.3.0"

// api functions here.

// we're going to create a function called
// get astronaut list, which will fetch the astronaut
// data from the docs here https://ll.thespacedevs.com/docs/#/astronauts

const getAstronautList = async () => {
  // we're going to create the url
  const URL = `${BASE_URL}/astronauts/?mode=list&search=canadian`
  // make the fetch request
  const response = await fetch(URL, {method: "GET"})
  // let's get some json
  const data = await response.json()

  return data

}

// we're export this function
export { getAstronautList }