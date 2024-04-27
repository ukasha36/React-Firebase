import { useEffect, useState } from "react"
import { getAllProducts } from "./services/products.service"
import ProductCard from "./components/product/ProductCard"
import logo from '/src/assets/img.jpg';


function App() {
  const [products, setProducts] = useState(null)
  useEffect(() => {
    (async () => {
      const productsResponse = await getAllProducts()
      setProducts(productsResponse)
    })()
  }, [])


  if (!products) return null
  
  return (
    <>
       <img className="logo" src={logo} alt="" />

      <h1>Products List</h1>
      <div className="main">
      {
        products.map((product, idx) => {
          return <  ProductCard key={idx} {...product}  />
        })
      }
      </div>
    </>
  )
}

export default App
