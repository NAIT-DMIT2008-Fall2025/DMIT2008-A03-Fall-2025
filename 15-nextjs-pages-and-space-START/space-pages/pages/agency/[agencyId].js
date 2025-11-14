import {useRouter} from 'next/router'

export default function AgencyPage() {
  const router = useRouter()

  // get the agencyId which is the dynamic Path
  console.log(router)
  const { agencyId } = router.query

  return <>
    <h1>Agency {agencyId}</h1>
  </>
}