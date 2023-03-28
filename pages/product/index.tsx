import Link from 'next/link'
import React from 'react'

export default function ProductList({productid=100}) {
  return (
    <div>
        <h1>
            Product Page
        </h1>
      <ul>
        <Link href='/product/1' ><li>Product 1</li></Link>
        <Link href='/product/2' ><li>Product 2</li></Link>
        <Link href={`/product/${productid}`} replace><li>Product {productid}</li></Link>
      </ul>
    </div>
  )
}
