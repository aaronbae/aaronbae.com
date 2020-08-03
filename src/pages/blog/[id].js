import { useRouter } from 'next/router'

export default function PostViewr() {
  const router = useRouter()
  const { id } = router.query
  return (
    <p>Post: {id}</p>
  )
}