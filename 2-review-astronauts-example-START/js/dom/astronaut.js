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
// we know that astronaut is an object
// we can use the ideas of object destructuring inside of the function arguments

const renderAstronaut = ({
  nationality, // these are keys of the object passed in
  image, // these are keys of the object passed in
  name, // these are keys of the object passed in
  status, // these are keys of the object passed in
  date_of_birth, // these are keys of the object passed in
  agency, // these are keys of the object passed in
  bio // these are keys of the object passed in
}) => {

  // since nationality is an array I'm going to select the first one.
  // let's remove the astronaut. because we've destructure that obj.
  const NATIONALITY = nationality[0].name
  return `<li href="#" class="list-group-item list-group-item-action">
      <div class="d-flex w-100 justify-content-between">
          <img src="${image.thumbnail_url}" class="rounded float-start" alt=""">
          <h5 class="mb-1">${name}(${status.name})</h5>
          <small class="float-end">born ${date_of_birth}</small>
      </div>
      <small>${NATIONALITY} (${agency.abbrev})</small>
      <p class="mb-1">${bio} </p>
  </li>`
}

// that will take an object, as a parameter
// I want to use the above html in a template string
// with the data from the object where you will insert the object
// data inside
// export and use in you index.js
export {renderAstronaut}
