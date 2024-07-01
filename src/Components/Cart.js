// Cart.js
import React from 'react';
import './Cart.css'; // Import the CSS file for styling


  const Cart = ({ cartItems, removeFromCart }) => {
    const handleRemoveItem = (itemId) => {
      // Call the removeFromCart function with the itemId to remove it from the cart
      removeFromCart(itemId);
    };

  return (
    <div className="cart">
      <div className="cart-icon">🛒</div>
      <div className="cart-count">{cartItems.length}</div>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <span className="item-name">{item.name}</span>
            <span className="item-price">Rs. {item.price}</span>
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
