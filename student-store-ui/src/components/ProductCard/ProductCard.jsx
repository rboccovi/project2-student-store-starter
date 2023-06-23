import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css'

const ProductCard = ({
  product,
  quantity,
  handleAddItemToCart,
  handleRemoveItemFromCart,
  showDescription
}) => {
  const { id, name, price, description, image } = product;

  const handleAddToCart = () => {
    handleAddItemToCart(product);
  };

  const handleRemoveFromCart = () => {
    handleRemoveItemFromCart(product);
  };

  return (
    <div className="product-card">
      <div className="media">
        <Link to={`/product/${id}`}>
          <img className="product-image" src={image} alt={name} />
        </Link>
      </div>
      <div className="product-name">{name}</div>
      <div className="product-price">${price.toFixed(2)}</div>
      {showDescription && <div className="product-description">{description}</div>}
      <div className="product-actions">
        <button className="add" onClick={handleAddToCart}>
          Add +
        </button>
        <button className="remove" onClick={handleRemoveFromCart}>
          Remove -
        </button>
        {quantity > 0 && <div className="product-quantity">Quantity: {quantity}</div>}
      </div>
    </div>
  );
};

export default ProductCard;



          
        
