
import React from 'react';
import  "./SearchButton.css"

function SearchButton() {


  const Subnavbar = () => {
    const [searchValue, setSearchValue] = useState('');
  
    const handleSearchChange = (event) => {
      setSearchValue(event.target.value);
    };

 
  };


  return (

    // Create Button
    
    <>
      // Create Button
      <div className="search-bar">
        <><input
          type="text"
          name="search"
          placeholder="Search"
          value={searchValue}
          onChange={handleSearchChange} /><i className="material-icons">search</i></>
      </div><div className="links">
        <span className="help">
          <i className="material-icons">help</i>Help
        </span>


        <div className="cart">
          <a href="/">My Cart<i className="material-icons">shopping_cart</i></a>
        </div>
      </div></>


  );
}

export default SearchButton; 