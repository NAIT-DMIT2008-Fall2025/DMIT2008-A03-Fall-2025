'use client'

import {useState, useEffect} from 'react'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { getRandomQuote } from '@/utils/api/quotes.js'  

export default function QuotesGenerator() {
  const DEFAULT_QUOTE = "Quote here"
  const DEFAULT_AUTHOR = "Author here"
  const [quoteData, setQuoteData] = useState({
    quote: DEFAULT_QUOTE,
    author: DEFAULT_AUTHOR
  })
  const [numberOfQuotes, setNumberOfQuotes] = useState(0)

  useEffect(()=> {
    console.log("Home Mounted, see me in the console!")
    changeQuote()
  }, [])

  useEffect(()=> {
    if (!quoteData) { return }
    if (quoteData.quote !== DEFAULT_QUOTE &&
        quoteData.author !== DEFAULT_AUTHOR) {
      setNumberOfQuotes(numberOfQuotes + 1)
    }
  }, [quoteData])

  const changeQuote = () => {
    getRandomQuote().then((data)=> {
      setQuoteData({
        quote: data.content,
        author: data.author
      })
    })
  }

  return <>
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
      }}
    >
      <Typography
        variant="h5"
        align="center"
        color="text.primary"
        paragraph
        data-testid="quote"
      >
        {quoteData.quote}
      </Typography>
      <Typography
        component="h1"
        variant="h4"
        align="center"
        color="text.secondary"
        data-testid="author"
        gutterBottom
      >
        {quoteData.author}
      </Typography>
      <Box
        display="flex"
        justifyContent="center"

      >
        <Button
          variant="contained"
          onClick={changeQuote}
          data-testid="new-quote-button"
        >
          Get New Quote
        </Button>

      </Box>
      <Typography
        sx={{pt: 4}}
        variant="h5"
        align="center"
        color="text.primary"
        paragraph
      >
        You have fetched {numberOfQuotes} quotes
      </Typography>
    </Box>
  </>
}