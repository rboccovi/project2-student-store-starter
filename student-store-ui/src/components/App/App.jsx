
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Home from '../Home/Home';
import Hero from '../Hero/Hero';
import axios from 'axios';
import ProductDetail from '../ProductDetail/ProductDetail';
import Subnavbar from '../Subnavbar/Subnavbar';
import AboutUs from '../AboutUs/AboutUs';
import ContactUs from '../ContactUs/ContactUs';

const App = () => {
  const [products, setProducts] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios
      .get('https://codepath-store-api.herokuapp.com/store')
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleAddItemToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveItemFromCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem && existingItem.quantity > 1) {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    } else {
      setCartItems((prevItems) =>
        prevItems.filter((item) => item.id !== product.id)
      );
    }
  };

  return (
    <div className="app">
      <Router>
        <Navbar />
        <Hero />
        <Subnavbar />
        <Sidebar
          cartItems={cartItems}
          isOpen={isSidebarOpen}
          setCartItems={setCartItems} // Pass the setCartItems function to the Sidebar component
          handleRemoveItemFromCart={handleRemoveItemFromCart}
        />
        <Routes>
          <Route
            path="/product/:productId"
            element={<ProductDetail setCartItems={setCartItems} />}
          />
          <Route
            path="/"
            element={
              <Home
                products={products}
                setCartItems={setCartItems} // Pass the setCartItems function to the Home component
                cartItems={cartItems}
                handleAddItemToCart={handleAddItemToCart}
                handleRemoveItemFromCart={handleRemoveItemFromCart}
              />
            }
          />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/buy-now" />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
