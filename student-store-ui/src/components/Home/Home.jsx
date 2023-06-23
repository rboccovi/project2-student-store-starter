import React, { useState, useEffect } from 'react';
import ProductGrid from '../ProductGrid/ProductGrid';
import "./Home.css"
import Footer from '../Footer/Footer';

const Home = ({ products, handleAddItemToCart, handleRemoveItemFromCart, cartItems }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    const filterProducts = () => {
      const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filteredProducts);
    };

    filterProducts();
  }, [products, searchQuery]);

  return (
    <>
      <div className="SearchBar">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search..."
        />
        <i className="material-icons">search</i>
      </div>
      <ProductGrid
        products={filteredProducts}
        cartItems={cartItems} // Pass the cartItems state as a prop
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemFromCart={handleRemoveItemFromCart}
        quanity
      />
      <Footer />
    </>
  );
};

export default Home;
