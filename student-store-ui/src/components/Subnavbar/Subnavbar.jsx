import React, { useState } from 'react';
import './Subnavbar.css';

const Subnavbar = () => {
  
  
  

const Subnavbar = ({ products }) => {
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
        <button onClick={() => handleCategoryFilter('clothing')}>Clothing</button>
        <button onClick={() => handleCategoryFilter('food')}>Food</button>
        {/* Add more category buttons as needed */}
      </div>
      <div className="products">
        {filteredProducts.map((product) => (
          <div className="product" key={product.id}>
            <h3>{products.name}</h3>
            <p>{product.description}</p>
            {/* Render other product details */}
          </div>
        ))}
      </div>
    </div>
  );
};



        <div className="categories-container">
          <ul className="category-menu">
            <li>
//               <button className="Subnav-buttons">All Categories</button>
//             </li>
//             <li>
//               <button className="Subnav-buttons">Clothing</button>
//             </li>
//             <li>
//               <button className="Subnav-buttons">Food</button>
//             </li>
//             <li>
//               <button className="Subnav-buttons">Accessories</button>
//             </li>
//             <li>
//               <button className="Subnav-buttons">Tech</button>
//             </li>
//           </ul>
//         </div>
    
  // );
};

 export default Subnavbar