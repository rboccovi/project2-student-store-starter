import React from "react";
import "./Logo.css" 
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo">
    
      <img src="https://www.waltmire.com/blog/wp-content/uploads/2017/12/R-in-a-circle-trademark-1024x538.jpg" alt="Logo" />
      <Link to="/" className="logo">
              
          </Link>

  
       </div>
   );
};

export default Logo;
