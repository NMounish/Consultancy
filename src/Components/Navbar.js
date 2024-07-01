
import React from 'react';
import Cart from './Cart'; // Import the Cart component

const Navbar = ({ cart }) => {
  return (
    <nav className="navbar">
      {/* Add other navbar content */}
      <Cart cart={cart} /> {/* Render the Cart component and pass cart data */}
    </nav>
  );
};

export default Navbar;
