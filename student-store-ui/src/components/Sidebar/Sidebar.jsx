import React, { useState } from 'react';
import './Sidebar.css';
import CartItem from '../CartItem/CartItem'; 
import CheckoutForm from '../CheckoutForm/CheckoutForm';



// Contains cart item and checkoutform
const Sidebar = ({ cartItems, handleAddItemToCart, handleRemoveItemFromCart,clearCart }) => {
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
                      //iterates over each item of the array,
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
          <CheckoutForm clearCart={clearCart}
           />

        </div>
      )}
    </section>
  );
};

export default Sidebar;
