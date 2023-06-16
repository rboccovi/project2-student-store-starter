import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductGrid.css";

const ProductGrid = ({ products }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="product-grid">
      <div className="category-filter">
        <button onClick={() => handleCategoryFilter(null)}>All</button>
        <button onClick={() => handleCategoryFilter("clothing")}>Clothing</button>
        <button onClick={() => handleCategoryFilter("food")}>Food</button>
        <button onClick={() => handleCategoryFilter("Accesories")}>Accessories</button>
        <button onClick={() => handleCategoryFilter("tech")}>Tech</button>
        {/* Add more category buttons as needed */}
      </div>
      <div className="products">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;