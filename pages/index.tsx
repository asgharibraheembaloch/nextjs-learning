import Link from "next/link";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter()

  const handleClick = () => {
    console.log('Placing your order')
    router.push('/product')
  }
  return (
    <div>
      <h1>Home Page</h1>
      <Link href={'/blog'} >Blog</Link>{' | '}
      <Link href={'/product'} >Products</Link>{' | '}
      <Link href={'/users'} >Users</Link>{' | '}
      <Link href={'/posts'} >Posts</Link>{ ' | '}
      <Link href={'/products'} >Fake Json Products</Link>{' | '}
      <p>
        this is our <em>secenrio 1</em> where root page is shown
      </p>
      <button onClick={handleClick}>
        Place Order
      </button>
    </div>
  );
}

export default Home;
