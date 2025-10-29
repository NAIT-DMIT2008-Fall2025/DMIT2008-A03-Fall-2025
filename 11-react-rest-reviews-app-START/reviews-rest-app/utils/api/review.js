const BASE_URL = 'http://localhost:5000'

export const getReviews = async () => {
  // 1. create a fetch request
  // using the async/await syntax
  // that will return the reviews from the
  // /reviews endpoint on the BASE_URL
  const response = await fetch(`${BASE_URL}/reviews`)
}