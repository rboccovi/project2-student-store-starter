import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Home from '../Home/Home'
import Hero from '../Hero/Hero';
import Subnavbar from '../Subnavbar/Subnavbar';
import axios from "axios";
import { Route, Link } from 'react-router-dom';
const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://codepath-store-api.herokuapp.com/store")
      .then(response => {

        setProducts(response.data.products);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };







  return (

    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <Hero />
          <Subnavbar />
          <Sidebar isOpen={isSidebarOpen} />
          <Home products={products} />

        </main>
      </BrowserRouter>


    </div>

  );
};



export default App;