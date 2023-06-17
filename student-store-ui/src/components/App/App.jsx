import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
// import Logo from '../Logo/Logo';
import Home from '../Home/Home';
import Hero from '../Hero/Hero';
// import Subnavbar from '../Subnavbar/Subnavbar';
import axios from 'axios';
import ProductDetail from '../ProductDetail/ProductDetail';
import ProductView from '../ProductView/ProductView';
import Subnavbar from "../Subnavbar/Subnavbar"
import ProductGrid from '../ProductGrid/ProductGrid';
import AboutUs from '../AboutUs/AboutUs'
import ContactUs from '../ContactUs/ContactUs'
import Logo from '../Logo/Logo';
// import AboutUs from "./component/aboutUs/aboutUs"

const App = () => {
  const [products, setProducts] = useState([]);

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

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return ( 
    <div className="app">
    <Router>
      
      <Navbar />
    
     
      <Hero />

     
      <Subnavbar />
     
      {/* <Home products={products}/> */}


    
      <Routes>
        
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/" element={<Home products={products}/>}/>
        <Route path="/about-us" element={ <AboutUs />}></Route>
        <Route path="/contact-us" element={ <ContactUs />}></Route> 
        <Route path="/buy-now" />
        <Route path="/"element={<Logo/>}></Route>



        {/* IMPLEMENT NOT FOUND COMPONENT */}
        {/* <Route path="*" element={<NotFound />} */}
      </Routes>

      {/* Render the Sidebar component */}
      {isSidebarOpen && <Sidebar isOpen={isSidebarOpen} />}
    </Router>
  </div>
  );
};

export default App;
