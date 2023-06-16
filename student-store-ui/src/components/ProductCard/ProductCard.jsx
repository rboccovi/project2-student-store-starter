import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, handleAddItemToCart, handleRemoveItemToCart }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} />
        <h2 id= "Link-name"> {product.name } </h2>
      </Link>
      <p>Price: ${product.price}</p>
      <button onClick={() => handleAddItemToCart(product)}>Add to Cart</button>
      <button onClick={() => handleRemoveItemToCart(product)}>Remove from Cart</button>
    </div>
  );
};

// export default ProductCard;


// import React from "react";
// import { Link } from "react-router-dom";
// import "./ProductCard.css";

// const ProductCard = ({ product }) => {
//   return (
//     <div className="product-card">
//       <img src={product.image} alt={product.name} />
//       <h3>{product.name}</h3>
//       <p>{product.description}</p>
//       <Link to={`/product/${product.id}`}>View Details</Link>
//     </div>
//   );
// };

 export default ProductCard;
          
          
        
