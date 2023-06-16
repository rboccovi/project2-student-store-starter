import React from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen }) => {
  return (
    <><button className="toggle-button button closed"><i className="material-icons md-48">arrow_forward</i></button><><div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-content">
        <div className="cart-image">
          <img src="/path/to/cart-icon.png" alt="Cart" />
        </div>
        <div className="money-image">
          <img src="/path/to/money-icon.png" alt="Money" />
        </div>
      </div>
    </div>
    <div className="cart-icons"><span className="cart-icon icon button"><i className="material-icons md-48">add_shopping_cart</i></span>
    <span className="cart-icon icon button"><i className="material-icons md-48">monetization_on</i></span><span className="cart-icon icon button">
     <i className="material-icons md-48">fact_check</i></span></div></></>
  );
};

export default Sidebar;
