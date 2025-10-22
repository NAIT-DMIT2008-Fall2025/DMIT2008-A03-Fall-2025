// let's make a plan
// need state from react (year, search)
// we're going to move these into this component

// we're going to need a couple props for the state
import { useState } from 'react';
// that we're passing down movies, setMovies

// functions from Home
// formHandler
// filterMovies
// validate

export default function MovieFilterForm(
  {movies, setMovies}
) {
  // I want you make thse variables for the text fields "controlled"
  // controlled means the input is updating the state for those values.
  // and value is equal to the stateful value.
  // create stateful variables for all of the text fields
  const [search, setSearch] = useState('')
  const [year, setYear] = useState('')

  return <>
  </>
}