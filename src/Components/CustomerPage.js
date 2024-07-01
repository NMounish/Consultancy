import React from 'react';
import './CustomerPage.css';

const CustomerPage = ({ username, email }) => {
  return (
    <div className="customer-page">
      <nav className="navbar">
        <div className="navbar-brand">
          <h1>Welcome, {username}!</h1>
        </div>
        <div className="navbar-links">
          <button className="logout-button">Logout</button>
        </div>
      </nav>
      <div className="content">
        <div className="user-details">
          <div className="user-card">
            <h2>User Profile</h2>
            <div className="profile-info">
              <p><strong>Name:</strong> {username}</p>
              <p><strong>Email:</strong> {email}</p>
            </div>
          </div>
        </div>
        <div className="other-content">
          <div className="order-history">
            <h2>Order History</h2>
            <div className="order-list">
              <div className="order-item">
                <div className="order-details">
                  <h3>Product Name</h3>
                  <p>Order Date: 01/01/2023</p>
                  <p>Order ID: 123456</p>
                  <p>Price: 2500</p>
                </div>
              </div>
              {/* Add more order items */}
            </div>
          </div>
          <div className="recommendations">
            <h2>Personalized Recommendations</h2>
            <div className="recommendation-list">
              <div className="recommendation-item">
                <img src="/images/recommendation1.jpg" alt="Recommendation" />
                <h3>Recommended Product</h3>
                <p>Price: 4000</p>
                <button>Add to Cart</button>
              </div>
              {/* Add more recommendation items */}
            </div>
          </div>
          <div className="settings">
            <h2>Settings</h2>
            <div className="settings-options">
              <div className="setting-option">
                <i className="fas fa-user"></i>
                <p>Edit Profile</p>
              </div>
              <div className="setting-option">
                <i className="fas fa-key"></i>
                <p>Change Password</p>
              </div>
              {/* Add more setting options */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerPage;
