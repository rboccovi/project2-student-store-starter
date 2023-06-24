// //what should CartItem do ?
// CartItem component represents a single item in the shopping cart. 
// It displays the item's name, quantity, price, and total price. 
// It also provides buttons to increment and decrement the quantity,
//  calling the handler functions passed as props.



import React from 'react';

// Define the CartItem component and destructure the props
const CartItem = ({ item, handleAddItemToCart, handleRemoveItemFromCart }) => {
 
  const { id, name, quantity, price } = item;

  // Define a function to handle incrementing the item quantity
  const handleIncrement = () => {
    handleAddItemToCart(item);
  };

  // Define a function to handle decrementing the item quantity
  const handleDecrement = () => {
    handleRemoveItemFromCart(item);
  };

  // Renders the JSX structure for a single cart item
  return (
    <tr>
      <td>{name}</td>
      <td>
        <button onClick={handleDecrement}>-</button>
        {quantity}
        <button onClick={handleIncrement}>+</button>
      </td>
      <td>${price.toFixed(2)}</td>
      <td>${(price * quantity).toFixed(2)}</td>
    </tr>
  );
};

// Export the CartItem component as the default export
export default CartItem;









