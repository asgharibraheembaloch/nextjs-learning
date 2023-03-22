import { useRouter } from "next/router"

export default function Docs() {
  const router = useRouter()
  const {params} = router.query
  console.log(params)
  return (
    <div>
      <h1>
        Docs Home Page
      </h1>
    </div>
  )
}
