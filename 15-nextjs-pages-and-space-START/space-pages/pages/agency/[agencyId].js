import {useEffect} from 'react'

import {useRouter} from 'next/router'

export default function AgencyPage() {
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

  }, [])

  // get agency data
  // import the state
  // create a stateful variable for agency
  // handle the loading state
  // just put the title.


  return <>
    <h1>Agency {agencyId}</h1>
  </>
}