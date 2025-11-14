import {useRouter} from 'next/router'

export default function AgencyPage() {
  const router = useRouter()

  // get the agencyId which is the dynamic Path
  console.log(router)
  // our file name is [agencyId].js
  // this is where we're gitting this data
  const { agencyId } = router.query

  return <>
    <h1>Agency {agencyId}</h1>
  </>
}