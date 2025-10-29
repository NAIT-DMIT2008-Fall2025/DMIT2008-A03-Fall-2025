
// later on when you deploy to a production environment
// this url will be an environment variable and thisis
// really handy so that you can point to the production
// version of this and only update it one spot.
const BASE_URL = 'http://localhost:5000'

export const getReviews = async () => {
  // 1. create a fetch request
  // using the async/await syntax
  // that will return the reviews from the
  // /reviews endpoint on the BASE_URL
  const response = await fetch(`${BASE_URL}/reviews`)
  if (!response.ok) {
    throw new Error('Network request error')
  }
  const data = await response.json()
  return data
}

export const postReview = (payload) => {
  // 1. make a post request to that server
  // to return this data.
}