import React from 'react';

const CartItem = ({ item, handleAddItemToCart, handleRemoveItemFromCart }) => {
  const { id, name, quantity, price } = item;

  const handleIncrement = () => {
    handleAddItemToCart(item);
  };

  const handleDecrement = () => {
    handleRemoveItemFromCart(item);
  };

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

export default CartItem;
