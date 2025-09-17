// the first thing I'm going to do here
// which is common for javvascript bundlers
// packaging is to import your css.
import 'bootstrap/dist/css/bootstrap.min.css';

// inside of the index.js we're going to import this.
import { getAstronautList } from './api/astronaut';



const app = async () => {
  console.log('our astronauts app')
  // we're going to need to call our get astronaut list to get the data
  // to populate on the page.
  // call this function
  // call our getAstronautData and console it out to the page.
  const astronautData = await getAstronautList()
  console.log('astronaut data fetched')
  console.log(astronautData)
  // I'm going to loop through each astronaut
  console.log(Array.isArray(astronautData)) // is not an array it's an obj.
  console.log(Array.isArray(astronautData.results)) // is  an array

  astronautData.results.map((astronaut, index)=> {
    // On the page I want to render each astronaut
    console.log("Astronaut: " + index)
    console.log(astronaut)

  })
}

// a note here this is async but we're not using the result of the function
// so we can just call it without the await

app()