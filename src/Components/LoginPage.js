// LoginPage.js
import React, { useRef } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config'; // Import the auth instance directly
import './LoginPage.css'; // Import CSS file for styling

const LoginPage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      // Sign in user with email and password
      await signInWithEmailAndPassword(auth, email, password);
      // Redirect to homepage upon successful login
      window.location.href = '/'; // Redirect to homepage
    } catch (error) {
      console.error('Error signing in:', error.message);
      // Handle error (display error message, etc.)
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" ref={emailRef} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" ref={passwordRef} />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
