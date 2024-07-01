// Header.js
import React from 'react';
import Cart from './Cart'; // Import the Cart component
import './Header.css'; // Import the CSS file for styling

const Header = ({ cartItems }) => {
  return (
    <header className="header">
      <center><h1>My Online Store</h1></center>
      <Cart cartItems={cartItems} />
    </header>
  );
};

export default Header;
