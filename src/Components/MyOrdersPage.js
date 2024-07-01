import React from 'react';
import "./MyOrdersPage.css";
const MyOrdersPage = () => {
  return (
    <div>
      <h2>My Orders</h2>
      <div className="order-list">
        {/* Example of an order item */}
        <div className="order-item">
          <h3>Order ID: 123456</h3>
          <p>Date: January 15, 2024</p>
          <p>Status: Delivered</p>
          <ul>
            <li>Product: Leather Jacket</li>
            <li>Price: $99.99</li>
            <li>Quantity: 1</li>
          </ul>
        </div>

        {/* Example of another order item */}
        <div className="order-item">
          <h3>Order ID: 789012</h3>
          <p>Date: February 22, 2024</p>
          <p>Status: Processing</p>
          <ul>
            <li>Product: Leather Boots</li>
            <li>Price: $149.99</li>
            <li>Quantity: 2</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyOrdersPage;
