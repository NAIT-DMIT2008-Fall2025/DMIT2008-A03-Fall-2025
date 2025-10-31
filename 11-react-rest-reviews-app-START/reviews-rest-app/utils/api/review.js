
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
  const response = await fetch(`${BASE_URL}/reviews`,{
    method: "GET"
  })
  if (!response.ok) {
    throw new Error('Network request error')
  }
  const data = await response.json()
  return data
}

export const postReview = async (payload) => {
  // 1. make a post request to that server
  // to return this data.
  // it's going to need a body (JSON.stringify the payload)
  // it's going to need some headers
  const response = await fetch(`${BASE_URL}/reviews`, {
    method: "POST", // we're giving info to the server.
    headers: {
      "Content-Type": "application/json"
      // we're going to be sending json to the server
      // so we need to tell the server what type of
      // content we're sending.
      // This is also where you'd add your tokens
      // for authorization
    },
    body: JSON.stringify(payload)
    // sending json to the server of our payload.
  })
  if (!response.ok) {
    throw new Error('Network request error')
  }
  const data = await response.json()
  return data
}

// create a delete function a parameter of id
// use the id to delete.
export const deleteReview = async (id) => {
  // we're using the id in the url so that the backend
  // knows exactly which resource to remove here.
  const response = await fetch(`${BASE_URL}/reviews/${id}`, {
    method: "DELETE"
  })
  // this is important because we want to
  // throw an error to be caught if the response
  // is not 200s
  if (!response.ok) {
    throw new Error('Network request error')
  }
  const data = await response.json()
  return data
}