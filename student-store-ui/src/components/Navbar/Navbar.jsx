import * as React from "react"
import "./Navbar.css"


 function Navbar() {
  return (
   
   
   <nav className="navbar">
  
   

      
<div className="socials">
    <img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-social-platform-icon-png-image_6315976.png" alt= "Instagram logo"/>
</div>

<div className="socials2">
    <img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png" alt= "Twitter logo"/>
</div>

<div className="socials3">

<img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-facebook-social-media-icon-png-image_6315968.png" alt= "Facebook logo"/>
</div>



<a href="#Home" className="NavbarElements"> Home</a>
<a href="#AboutUs"className="NavbarElements"> About Us</a>
<a href="#ContactUs"className="NavbarElements"> ContactUs</a>
<a href="BuyNow"className="NavbarElements">Buy Now</a>
  

    </nav>




  ) 
  
}





export default Navbar;
