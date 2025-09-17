/*
HTML of an astronaut list item.
replace the instances that have "THIS FORMAT HERE" with the astronautData.

<li href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
        <img src="PROFILE THUMBNAIL HERE" class="rounded float-start" alt=""">
        <h5 class="mb-1">ASTRONAUT NAME (ASTRONAUT STATUS HERE)</h5>
        <small class="float-end">born DATE OF BIRTH HERE</small>
    </div>
    <small>ASTRONAUT NATIONALITY HERE (ASTRONAUT AGENCY NAME)</small>
    <p class="mb-1">ASTRONAUT BIO HERE </p>
</li>
*/

// we're going to create a function that is going to use some destructuring
// to get some of this data.

// I want you to create a function called "renderAstronaut"
const renderAstronaut = (astronaut) => {
  // since nationality is an array I'm going to select the first one.
  const NATIONALITY = astronaut.nationality[0].name
  return `<li href="#" class="list-group-item list-group-item-action">
      <div class="d-flex w-100 justify-content-between">
          <img src="${astronaut.image.thumbnail_url}" class="rounded float-start" alt=""">
          <h5 class="mb-1">${astronaut.name}(${astronaut.status.name})</h5>
          <small class="float-end">born ${astronaut.date_of_birth}</small>
      </div>
      <small>${NATIONALITY} (${astronaut.agency.abbrev})</small>
      <p class="mb-1">${astronaut.bio} </p>
  </li>`
}

// that will take an object, as a parameter
// I want to use the above html in a template string
// with the data from the object where you will insert the object
// data inside
// export and use in you index.js
export {renderAstronaut}
