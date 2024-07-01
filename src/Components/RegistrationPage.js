import React, { useRef, useState } from 'react';
import { firestore } from '../firebase/config'; // Import the firestore instance directly
import { addDoc, collection } from 'firebase/firestore';
import './RegistrationPage.css';

export default function RegistrationPage() {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [registrationMessage, setRegistrationMessage] = useState('');

  // Define a reference to the 'users' collection
  const usersCollectionRef = collection(firestore, 'users');

  const handleSave = async (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    // Create an object with all the user data
    const userData = {
      username: username,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };

    try {
      // Add the user data to the 'users' collection in Firestore
      await addDoc(usersCollectionRef, userData);
      setRegistrationMessage('User registered successfully!');
      console.log('User registered successfully!');
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className="registration-container">
      <div className="registration-card">
        <h2>Create an Account</h2>
        <form onSubmit={handleSave}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" ref={usernameRef} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" ref={emailRef} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" ref={passwordRef} />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" ref={confirmPasswordRef} />
          </div>
          <button type="submit">Register</button>
        </form>
        {registrationMessage && <p>{registrationMessage}</p>}
      </div>
    </div>
  );
}
