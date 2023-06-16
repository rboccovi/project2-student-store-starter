
import React from 'react';

const ProductView = ({ product, handleAddItemToCart, handleRemoveItemToCart }) => {
  return (
    <div className="product-view">
      {/* Render the product details */}
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>

      {/* Example usage of handleAddItemToCart and handleRemoveItemToCart */}
      <button onClick={() => handleAddItemToCart(product)}>Add to Cart</button>
      <button onClick={() => handleRemoveItemToCart(product)}>Remove from Cart</button>
    </div>
  );
};

export default ProductView;