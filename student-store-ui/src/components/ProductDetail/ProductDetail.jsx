import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductDetail.css';

const ProductDetail = ({ handleAddItemToCart, handleRemoveItemFromCart, setCartItems }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://codepath-store-api.herokuapp.com/store/${productId}`)
      .then(response => {
        setProduct(response.data.product);
        setIsLoading(false);
      })
      .catch(error => {
        setIsLoading(false);
        // console.error(error);
      });
  }, [productId]);

  const handleAddToCart = () => {
    handleAddItemToCart(product);
    setCartItems(prevItems => [...prevItems, product]);
  };

  const handleRemoveFromCart = () => {
    handleRemoveItemFromCart(product);
    setCartItems(prevItems => prevItems.filter(item => item.id !== product.id));
  };

  if (isLoading) {
    return <h1 className="loading">Loading...</h1>;
  }

  if (!product) {
    return <h1 className="not-found">Product not found.</h1>;
  }

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <img className="Product-detail-img" src={product.image} alt={product.name} />
      <p>Price: ${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
      <button onClick={handleRemoveFromCart}>Remove from Cart</button>
    </div>
  );
};

export default ProductDetail;

