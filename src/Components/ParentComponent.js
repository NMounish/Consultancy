// ParentComponent.js
import React, { useState } from 'react';
import Cart from './Cart';

const ParentComponent = () => {
  const [cartItems, setCartItems] = useState([]);

  const removeFromCart = (itemId) => {
    // Logic to remove item from cart
    const updatedCartItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  return (
    <div>
      {/* Other components */}
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
};

export default ParentComponent;
