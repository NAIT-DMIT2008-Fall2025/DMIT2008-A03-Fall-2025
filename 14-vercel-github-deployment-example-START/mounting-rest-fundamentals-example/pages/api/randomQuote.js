

export default function handler(req, res) {
  // the data we had.
  const quoteData = [
    {
      "id": 1,
      "author": "Marcus Aurelius",
      "quote": "Whatever anyone does or says, I’m bound to the good. Whatever anyone does or says, I must be what I am and show my true colors."
    },
    {
      "id": 2,
      "author":"Ryan Holiday",
      "quote":"Great times are great softeners."
    },
    {
      "id": 3,
      "author": "Mingyur Rinpoche",
      "quote": "When we become fixed in our perceptions we lose our ability to fly."
    }
  ]
  // return a single
  const randomIndex = Math.floor(quoteData.length*Math.random())

  console.log("Any logs here are going to be on the server.")
  console.log("randomIndex")
  console.log(randomIndex)

  // first let's pass all of the data.
  res.status(200).json(quoteData[randomIndex])

}
