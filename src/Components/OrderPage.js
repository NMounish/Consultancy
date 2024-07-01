import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './OrderPage.css';
import DashboardPage from './DashboardPage';
import ManageOrdersPage from './ManageOrdersPage';
import TrackingPage from './TrackingPage';
import MyOrdersPage from './MyOrdersPage';

const OrderPage = () => {
  return (
    <div className="order-page">
      <div className="sidebar">
        <h2>Asia Tan Orders</h2>
        <ul>
          <li><Link to="/orders/my-orders">My Orders</Link></li>
          <li><Link to="/orders/tracking">Track Your Order</Link></li>
          <li><Link to="/orders/dashboard">Dashboard</Link></li>
          <li><Link to="/orders/manage">Manage Orders</Link></li>
        </ul>
      </div>
      <div className="main-content">
        <Routes>
          <Route path="my-orders" element={<MyOrdersPage />} />
          <Route path="tracking" element={<TrackingPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="manage" element={<ManageOrdersPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default OrderPage;
