// let's make a plan
// need state from react (year, search, errorMessage)
// we're going to move these into this component

// we're going to need a couple props for the state
import { useState } from 'react';
// need to import the MUI pieces here
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField'

import { MOVIE_LIST } from '../utils/movies'


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
  const [errorMessage, setErrorMessage] = useState('')

  // on the form I want you folks
  // I want you folks to create a form event handler
  // that it's going to validate the inputs
  // - year needs to be a number
  // - it needs to be 4 characters.
  // If it's invalid I want you folks to show
  // an Alert in the JSX with an appropriate error
  // message.
  const formHandler = (event) => {
    event.preventDefault()
    const isValid = validate()
    if (isValid) {
      filterMovies()
    } else {
      setMovies([])
    }
  }

  // I want you to create function
  // that will filter based on search only if it has value
  // that will filter based on year only if it has value
  // and will filter both if entered.
  // I want you to update the state for this with setMovies
  // hint I want you folks to use filter
  const filterMovies = () => {
    // make a copy of the array
    let filteredMovieList = [...MOVIE_LIST]
    // I'm going to check to see if each year and search
    // is not empty
    console.log([...MOVIE_LIST])
    if (search.trim() !== "") {
      // inside of the if I'm going to use knowledge of filter
      // we're going to reassign to the result of hte filter
      filteredMovieList = filteredMovieList.filter((movie)=> {
        // remember true to keep it, false to remove it from the list.
        // this is just a special loop
        let lowerMovieName = movie.name.toLowerCase()
        let lowerSearch = search.toLowerCase()
        // if anything weird is happening
        // console log the variables here.
        // strings in js a character arrays
        return lowerMovieName.includes(lowerSearch)
      })
    }

    // three mins do the year.
    if (year.trim() !== "") {
      filteredMovieList = filteredMovieList.filter((movie)=> {
        // I'm going to check to see if it's the same year
        const yearAsNumber = parseInt(year)
        // are the years the same.
        return yearAsNumber === movie.year
      })
    }

    // set the movieList to my new filtered movieList
    setMovies(filteredMovieList)
  }

  const validate = () => {
    // return true or false
    // I'm going to check if year is a number
    // check for isNumber
    // if it's empty it's valid.
    if (year.trim() === '') {
      setErrorMessage('')
      return true
    }

    // we're only going to validate if there is
    // a number
    if (isNaN(year)) {
      setErrorMessage(`"${year}" is not a valid year, need to be number`)
      return false
    }

    if (year.length !== 4) {
      setErrorMessage(`"${year}" needs to be when we're alive.`)
      return false
    }

    // if it return true
    // we need to clear error message
    setErrorMessage('')
    return true
  }

  return <form
      onSubmit={formHandler}
      style={{width: '100%'}}
    >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          {/* normally for controlling inputs
          you just directly put the in the
          onChange */}
          <TextField
            id="search-field"
            label="search..."
            variant="standard"
            sx={{width: '100%'}}
            onChange={(event)=> {
              setSearch(event.target.value)
            }}
            value={search}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="year-field"
            label="year"
            variant="standard"
            sx={{width: '100%'}}
            onChange={(event)=> {
              setYear(event.target.value)
            }}
            value={year}
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            type="submit"
            variant="contained"
          >Filter</Button>
        </Grid>
        <Grid item xs={10}>
          {/* Add the error message here */}
          {errorMessage !== '' &&
            <Alert severity='error'>
              {errorMessage}
            </Alert>
          }
        </Grid>
      </Grid>
    </form>
}