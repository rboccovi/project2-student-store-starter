

// export default CheckoutForm;
import React, { useState } from 'react';
import './CheckoutForm.css';

const CheckoutForm = ({ clearCart }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [agree, setAgree] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

   

    // Display the purchase confirmation
    setIsSubmitted(true);

    // Clear the shopping cart (assuming you have a function called `clearCart`)
    clearCart();

    // Reset the input fields
    // setName('');
    // setEmail('');
    // setAgree(false);
  };


  
  return (
    <div className="checkout-form">
      <h2>Checkout</h2>
      {isSubmitted ? (
        <div>
          <p>Thank you for your purchase! We have received the following information: 
           
          </p>

          
          <p>Name: {name}</p>
          <p>Email: {email}</p>


          
        </div>
      ) :
      
      
      (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="agree">
              <input
                type="checkbox"
                id="agree"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
              />
              I agree to the terms and conditions
            </label>
          </div>
          
          <button type="submit" disabled={!agree}>
            Checkout
          </button>
          
        </form>
      )}
    </div>
  );
};

export default CheckoutForm;





