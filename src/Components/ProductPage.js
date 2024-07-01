// ProductPage.js
import React, { useState } from 'react';
import Header from './Header'; // Import the Header component
import './ProductPage.css'; // Import the CSS file for styling

const ProductPage = () => {
  const [cartItems, setCartItems] = useState([]); // State to store cart items

  const addToCart = (productDetails) => {
    const newItem = {
      id: cartItems.length + 1, // Generate unique ID
      ...productDetails,
    };
    setCartItems([...cartItems, newItem]); // Add item to cart
  };

  return (
    <div className="product-page">
      <Header cartItems={cartItems} />
      {/* Product 1 */}
      <div className="product">
        <div className="product-image">
          {/* Image for Product 1 */}
        </div>
        <div className="product-details">
          <h2>Product Name 1</h2>
          <p className="price">Rs.2000</p>
          <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus condimentum justo ut tellus lobortis, a pharetra metus dignissim. Morbi semper velit ut velit ultricies, ut viverra arcu vehicula.</p>
          <button className="add-to-cart" onClick={() => addToCart({name:"Product Name 1", price:2000})}>Add to Cart</button>
        </div>
      </div>

      {/* Product 2 */}
      <div className="product">
        <div className="product-image">
          {/* Image for Product 2 */}
        </div>
        <div className="product-details">
          <h2>Product Name 2</h2>
          <p className="price">Rs.2500</p>
          <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus condimentum justo ut tellus lobortis, a pharetra metus dignissim. Morbi semper velit ut velit ultricies, ut viverra arcu vehicula.</p>
          <button className="add-to-cart" onClick={() => addToCart({name:"Product Name 2", price: 2500})}>Add to Cart</button>
        </div>
      </div>

      {/* Product 3 */}
      <div className="product">
        <div className="product-image">
          {/* Image for Product 3 */}
        </div>
        <div className="product-details">
          <h2>Product Name 3</h2>
          <p className="price">Rs.3000</p>
          <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus condimentum justo ut tellus lobortis, a pharetra metus dignissim. Morbi semper velit ut velit ultricies, ut viverra arcu vehicula.</p>
          <button className="add-to-cart" onClick={() => addToCart({name:"Product Name 3", price:3000})}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
