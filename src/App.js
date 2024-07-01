import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import ProductPage from './Components/ProductPage';
import OrderPage from './Components/OrderPage';
import CustomerPage from './Components/CustomerPage';
import RegistrationPage from './Components/RegistrationPage';
import LoginPage from './Components/LoginPage';

const App = () => {
  const [username, setUsername] = useState('');

  const fetchUsernameFromFirebase = () => {
    setUsername(/* Username fetched from Firebase */);
  };

  useEffect(() => {
    fetchUsernameFromFirebase();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/orders/*" element={<OrderPage />} />
        <Route path="/customers" element={<CustomerPage username={username} />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;
