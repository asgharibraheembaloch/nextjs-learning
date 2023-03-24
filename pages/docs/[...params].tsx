import { useRouter } from "next/router"

export default function Docs() {
  const router = useRouter()
  const {params=[]} = router.query
  console.log(params)
  if (params.length == 2){
    return (
      <div>
        <h1>this is first parameter={params[0]} this is second param = {params[1]}</h1>
      </div>
    )
  } else if (params.length==1) {
    return (
    <div>
      <h1>this is first parameter={params[0]}</h1>
    </div>
    )
  }
  return (
    <div>
      <h1>
        Docs Home Page
      </h1>
    </div>
  )
}
