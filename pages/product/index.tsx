import Link from 'next/link'
import React from 'react'

export default function ProductList({productid=100}) {
  return (
    <div>
        <h1>
            Product Page
        </h1>
      <ul>
        <Link href='/product/1' ><li>Product {productid}</li></Link>
        <Link href='/product/2' ><li>Product {productid}</li></Link>
        <Link href='/product/3' replace><li>Product {productid}</li></Link>
      </ul>
    </div>
  )
}
