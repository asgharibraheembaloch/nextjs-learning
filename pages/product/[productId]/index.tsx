import { useRouter } from 'next/router'
import React from 'react'

export default function ProductDetails() {
    const router = useRouter()
    const productId = router.query.productId
  return (
    <div>
      <h1>Product Detail Page {productId}</h1>
    </div>
  )
}