import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductDetail.css'
const ProductDetail = ({ handleAddItemToCart, handleRemoveItemToCart }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios

      .get(`https://codepath-store-api.herokuapp.com/store/${productId}`)
    
      .then(response => {
        console.log(response.data)
        setProduct(response.data.product);
        setIsLoading(false);
        console.log(productId)
      })
      .catch(error => {
        setIsLoading(false);
        // console.error(error);
      });
  }, [productId]);

  if (isLoading) {
    return <h1 className="loading">Loading...</h1>;
  }

  if (!product) {
    return <h1 className="not-found">Product not found.</h1>;
  }
console.log("name",  product.name)

  return (
    <div className="product-detail">
   
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      
     <img  className="Product-detail-img" src={product.image} ></img>
     
      <p>Price: {product.price}</p>

      <button onClick={() => handleAddItemToCart(product)}>Add to Cart</button>
      <button onClick={() => handleRemoveItemToCart(product)}>Remove from Cart</button>
    </div>
  )
 };



export default ProductDetail;

