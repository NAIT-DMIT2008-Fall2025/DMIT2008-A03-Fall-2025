import {useEffect, useState} from 'react'

import { useRouter } from "next/router"

import Typography from '@mui/material/Typography'


import NavBar from '@components/NavBar'
import LoadingCircle from '@components/LoadingCircle'
import SimpleDetailsCard from '@components/SimpleDetailsCard'
// import the getSpaceCraft api
import { getSpaceCraft } from '@utils/api/spaceCraft'

export default function SpaceCraftPage() {
  const [spacecraft, setSpacecraft] = useState()
  const [loading, setLoading] = useState(true)

  const router = useRouter();

  // let's get the spacecraftId
  const { spacecraftId } = router.query


  // create an effect that listens to changes
  // in the spacecraftId
  useEffect(()=> {
    // check if exists if it doesn't return early.
    if (!spacecraftId) {
      return
    }

    renderSpacecraft()

  }, [spacecraftId])

  // in that effect check if it exsists
  // load the data if to does with the id
  const renderSpacecraft = async () => {
    setLoading(true)
    const spacecraftData = await getSpaceCraft(spacecraftId)
    setLoading(false)
    setSpacecraft(spacecraftData)
    // good practice to handle errors.
  }

  // create a loading state with a spinner
  if (loading) {
    return <>
      <NavBar />
      <LoadingCircle />
    </>
  }

  // I want list the following once the data
  // is loadeded:
  // name of the spacecraft title
  // description
  // an image and a wiki url.
  return <>
    <NavBar />
    <Typography variant="h3" component="h1" margin={2}>
      {spacecraft.name} ({spacecraft.agency.abbrev})
    </Typography>
    <SimpleDetailsCard
      title="details"
      description={spacecraft.details}
    />
    <SimpleDetailsCard
      title={"History"}
      description={
        spacecraft.history
      }
    />
    <SimpleDetailsCard
      title={"What it looks like"}
      description={
        <img src={spacecraft.image.image_url} style={{width: "100%"}}></img>
      }
    />
  </>
}