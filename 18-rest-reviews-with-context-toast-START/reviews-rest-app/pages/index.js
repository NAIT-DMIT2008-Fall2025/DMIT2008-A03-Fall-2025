import {useState, useEffect } from 'react'

import Container from '@mui/material/Container';

import AdaptationReviewList from '../components/AdapatationReviewList';
import AdaptationReviewForm from '../components/AdaptationReviewForm';
import NavBar from '../components/NavBar'
import SEO from '../components/SEO'

// let's import useNotification
import { useNotification } from '../state/AppNotification';

import { getReviews } from '../utils/api/reviews'

export default function Home() {
  const [reviews, setReviews] = useState([])

  const { showNotification } = useNotification()

  useEffect(()=> {
    loadAllReviews()
  }, [])

  const removeReview = (id) => {
    let currentReviews = reviews.filter((review)=> {
      return review.id !== id
    })
    setReviews(currentReviews)
    // use our notification
    showNotification({
      type: "success",
      text: "Review Deleted successfully"
    })
  }

  const loadAllReviews = () => {
    getReviews().then((data)=> {
      setReviews(data)
      // informational message about fetching the data.
      showNotification({
        type: "info",
        text: "reviews fetched successfully"
      })
    }).catch((error) => {
      showNotification({
        type: "error",
        text: "Error fetching data"
      })
    })
  }

  return <>
    <SEO />
    <NavBar title={'Adaptation Reviews'} />
    <Container
      sx={{
        pt: 2,
        pb: 2,
      }}
      maxWidth="md"
      component="main"
    >
      <AdaptationReviewForm
        reviews={reviews}
        setReviews={setReviews}
      />
      <AdaptationReviewList
        reviews={reviews}
        removeReview={removeReview}
      />
    </Container>
  </>
}
