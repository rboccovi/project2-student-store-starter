import React, { useState } from 'react';
import './Subnavbar.css'; // Import the CSS file for Subnavbar component

const Subnavbar = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <nav className="sub-navbar">
      <div className="content">
        <div className="row">
          <div className="search-bar">
            <input
              type="text"
              name="search"
              placeholder="Search"
              value={searchValue}
              onChange={handleSearchChange}
            />
            <i className="material-icons">search</i>
          </div>
          <div className="links">
            <span className="help">
              <i className="material-icons">help</i>Help
            </span>


            <div className="cart">
              <a href="/">My Cart<i className="material-icons">shopping_cart</i></a>
            </div>
          </div>
          <div className="hamburger-menu">
            <i className="material-icons">menu</i>
          </div>
          <ul className="category-menu open">
            <li>
              <button className="Subnav-buttons">All Categories</button>
            </li>
            <li>
              <button className="Subnav-buttons">Clothing</button>
            </li>
            <li className="is-active">
              <button className="Subnav-buttons">Food</button>
            </li>
            <li>
              <button className="Subnav-buttons">Accessories</button>
            </li>
            <li className="is-active">
              <button className="Subnav-buttons">tech</button>
            </li>
          
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Subnavbar;
