import * as React from "react"
import "./Home.css"
import ProductGrid from "../ProductGrid/ProductGrid"


const Home = ({products}) => {
  return (
    <ProductGrid products={products} />
  )
}

export default  Home



{/* <div className="home">
   <h1> Product List</h1>
      <p>Home</p>
      <ul>
        {products.map (products => ( <li key={products.id}>{products.name}</li>
        
        ))}
      </ul>
    </div> */}