import {useEffect, useState} from 'react'

import {useRouter} from 'next/router'

import LoadingCircle from '@components/LoadingCircle'
import NavBar from '@components/NavBar'

import { getAgency } from '@utils/api/agencies'

export default function AgencyPage() {
  const [agency, setAgency] = useState()
  const [loading, setLoading] = useState(true)

  const router = useRouter()

  // get the agencyId which is the dynamic Path
  console.log(router)
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
    <h1>Agency: {agency.name} ({agency.abbrev})</h1>
  </>
}