// TrackingPage.js

import React, { useState } from 'react';
import './TrackingPage.css';

const TrackingPage = () => {
  const [orderId, setOrderId] = useState('');
  const [orderStatus, setOrderStatus] = useState(null);

  const handleTrackOrder = () => {
    // Here you would implement logic to fetch order status from backend using the orderId
    // For demonstration purposes, let's assume the order status is fetched and set in state
    setOrderStatus('Shipped'); // Example order status, replace with actual logic
  };

  return (
    <div className="tracking-page">
      <h2>Track Your Order</h2>
      <div className="tracking-form">
        <input
          type="text"
          placeholder="Enter Order ID"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
        />
        <button onClick={handleTrackOrder}>Track Order</button>
      </div>
      {orderStatus && (
        <div className="order-status">
          <p>Order ID: {orderId}</p>
          <p>Status: {orderStatus}</p>
        </div>
      )}
    </div>
  );
};

export default TrackingPage;
