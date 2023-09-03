import { useRouter } from 'next/router'
 
export default function slug() {
  const router = useRouter()
  return <p>Post: {router.query.slug}</p>
}