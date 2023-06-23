import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductGrid.css";

const ProductGrid = ({ products, cartItems, handleAddItemToCart, handleRemoveItemFromCart }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  // Function to get the quantity for a specific product
  const getQuantityForProduct = (productId) => {
    const cartItem = cartItems.find((item) => item.id === productId);
    return cartItem ? cartItem.quantity : 0;
  };

  return (
    <div className="product-grid">
      <div className="category-filter">
        <button onClick={() => handleCategoryFilter(null)}>All</button>
        <button onClick={() => handleCategoryFilter("clothing")}>Clothing</button>
        <button onClick={() => handleCategoryFilter("food")}>Food</button>
        <button onClick={() => handleCategoryFilter("accessories")}>Accessories</button>
        <button onClick={() => handleCategoryFilter("tech")}>Tech</button>
        {/* Add more category buttons as needed */}
      </div>
      <div className="products">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            cartItems= {cartItems}
            product={product}
            quantity={getQuantityForProduct(product.id)} // Pass the quantity prop
            handleAddItemToCart={handleAddItemToCart}
            handleRemoveItemFromCart={handleRemoveItemFromCart}
            
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
