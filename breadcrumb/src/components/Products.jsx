import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Products() {
  const [products, setProducts] = useState([]);

  const fetchProduct = async () => {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();
    setProducts(data.products)
  }

  useEffect(() => {
    fetchProduct()
  }, [])
  return (
    <>
      {products.map((i) => (
        <div key={i.id}>
          <Link to={`product/${i.id}`}>{i.title}</Link>
        </div>
      ))}
    </>
  )
}

export default Products
