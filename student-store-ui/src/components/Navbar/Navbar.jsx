import * as React from "react"
import "./Navbar.css"
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";


 function Navbar() {
  return (
    <><nav className="navbar">

         

           <Logo />

          <div className="socials">
              <img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-social-platform-icon-png-image_6315976.png" alt="Instagram logo" />
          </div>

          <div className="socials2">
              <img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png" alt="Twitter logo" />
          </div>

          <div className="socials3">

              <img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-facebook-social-media-icon-png-image_6315968.png" alt="Facebook logo" />
          </div>

          <Link to="/" className="NavbarElements">
              home
          </Link>


          <Link to="/about-us" className="NavbarElements">
              About us
          </Link>


          <Link to="/contact-us" className="NavbarElements">
              Contact Us
          </Link>



          <Link to="/buy-now" className="NavbarElements">
              Buy Now
          </Link>




  

      </nav></>




  ) 
  
}





export default Navbar;
