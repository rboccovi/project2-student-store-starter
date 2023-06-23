import React, { useState } from 'react';
import './Sidebar.css';
import CartItem from '../CartItem/CartItem'; // Import the CartItem component

const Sidebar = ({ cartItems, handleAddItemToCart, handleRemoveItemFromCart }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  // uses the reduce function to iterate through the cartItems array and 
  //calculate the subtotal by multiplying the price and quantity of each item and
  // accumulating the total value. The resulting subtotal is stored in the subtotal variable 
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const tax = 0.1 * subtotal; // Assuming a tax rate of 10%
  const total = subtotal + tax;

  return (
    //
    <section className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="toggle-button" onClick={handleToggle}>
        {isOpen ? '<' : '>'}
      </button>
      {isOpen && (
        <div className="sidebar-content">
          <div className="section">
            <h2>Shopping Cart</h2>
            <i className="material-icons">add_shopping_cart</i>
            {cartItems.length === 0 ? (
              <p>No items added to cart yet. Start shopping now!</p>
            ) : (
              <>
                <table>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                
                    {cartItems.map((item) => (
                      //iterates over each item of the array, passing the necessary props to each component. 
                      <CartItem
                        key={item.id}
                        item={item}
                        handleAddItemToCart={handleAddItemToCart}
                        handleRemoveItemFromCart={handleRemoveItemFromCart}
                      />
                    ))}
                  </tbody>
                </table>
                <div className="cart-summary">
                  <p>Subtotal: ${subtotal.toFixed(2)}</p>
                  <p>Tax: ${tax.toFixed(2)}</p>
                  <p>Total: ${total.toFixed(2)}</p>
                </div>
              </>
            )}
          </div>
          <div className="section">
            <h2>Payment Info</h2>
            <i className="material-icons">monetization_on</i>
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" value="" />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" value="" />
            </div>
            <div className="input-group">
              <label>
                <input type="checkbox" />
                I agree to the terms and conditions
              </label>
            </div>
            <button className="checkout-button">Checkout</button>
          </div>
          <div className="section">
            <h2>Checkout Info</h2>
            <i className="material-icons">fact_check</i>
            <p>
              This is the checkout information section.
              Add relevant content and instructions here.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Sidebar;
