
import React, { useState } from 'react';
import './ManageOrdersPage.css';

const ManageOrdersPage = () => {
  const [orders, setOrders] = useState([
    { id: 1, customer: 'John Doe', product: 'Leather Wallet', status: 'Shipped' },
    { id: 2, customer: 'Jane Smith', product: 'Leather Belt', status: 'Processing' },
    // Add more orders as needed
  ]);

  const updateOrderStatus = (id, status) => {
    setOrders(prevOrders =>
      prevOrders.map(order => (order.id === id ? { ...order, status } : order))
    );
  };

  return (
    <div className="manage-orders">
      <h2>Manage Orders</h2>
      <div className="filters">
        <label>
          Filter by Status:
          <select>
            <option value="all">All</option>
            <option value="processing">Processing</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
          </select>
        </label>
      </div>
      <div className="orders-list">
        {orders.map(order => (
          <div key={order.id} className="order-item">
            <h3>Order #{order.id}</h3>
            <p>Customer: {order.customer}</p>
            <p>Product: {order.product}</p>
            <p>Status: {order.status}</p>
            <div className="actions">
              <button onClick={() => updateOrderStatus(order.id, 'Processing')}>Mark as Processing</button>
              <button onClick={() => updateOrderStatus(order.id, 'Shipped')}>Mark as Shipped</button>
              <button onClick={() => updateOrderStatus(order.id, 'Delivered')}>Mark as Delivered</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageOrdersPage;
