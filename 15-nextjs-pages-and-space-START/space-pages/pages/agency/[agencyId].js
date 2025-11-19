import {useEffect, useState} from 'react'

import {useRouter} from 'next/router'

import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

import LoadingCircle from '@components/LoadingCircle'
import NavBar from '@components/NavBar'
import SimpleDetailsCard from '@components/SimpleDetailsCard'

import { getAgency } from '@utils/api/agencies'

export default function AgencyPage() {
  const [agency, setAgency] = useState()
  const [loading, setLoading] = useState(true)

  const router = useRouter()

  // get the agencyId which is the dynamic Path
  // console.log(router)
  // our file name is [agencyId].js
  // this is where we're gitting this data
  const { agencyId } = router.query

  useEffect(()=> {
    // you'll need to add this line
    if (!agencyId) {
      return
    }
    // so this is only going to trigger
    // the the agencyId exists.
    renderAgency()
  }, [])

  // get agency data
  const renderAgency = async () => {
    setLoading(true)
    const data = await getAgency(agencyId)
    console.log(data)
    setLoading(false)
    setAgency(data)
  }

  // we're going to use this loading to create the app.
  if (loading) {
    return <>
      <NavBar />
      <LoadingCircle />
    </>
  }

  return <>
    <NavBar />
    <Container>
    <Typography variant="h3" component="h1" margin={2}>
      Agency: {agency.name} ({agency.abbrev})
    </Typography>
    <SimpleDetailsCard
      title={"Administrator"}
      description={agency.administrator}
    />
    <SimpleDetailsCard
      title={"Description"}
      description={agency.description}
    />
    <Typography variant="h3" component="h1" margin={2}>
      SpaceCraft List
    </Typography>
    { agency.spacecraft_list.map((spacecraft)=> {
      return <SimpleDetailsCard
        key={spacecraft.id}
        description={spacecraft.name}
        buttonName={`Go to SpaceCraft Page`}
        buttonCallback={()=> {
          // in this call back to navigate to a page that is called
          // /spacecraft/spacecraftId where spacecraftId is dynamic
          // in a new file you'll create do the following.
          // create the page so that it doesn't 404
          // get the spacecraftId and render it on the page.
        }}

      />
    })}

    {/* using the siple details card
      3 cards
        1. title: "Description"
           description: from the data
        2. title "Administrator"
           description: from the data
        3. Create a list of space_craft from the data.
            you can create these as cards.
    */}

    </Container>
  </>
}