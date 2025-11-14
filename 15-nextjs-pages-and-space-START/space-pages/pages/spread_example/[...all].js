import {useRouter} from 'next/router';

export default function SpreadExample() {
  const router = useRouter()
  console.log(router)
  const { all } = router.query // object destructuring.

  return <>
    Spread Example
  </>
}