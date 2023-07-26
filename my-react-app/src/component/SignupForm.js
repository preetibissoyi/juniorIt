// src/components/SignUpForm.js
import React, { useState } from 'react';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    mobilePhoneNumber: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send the form data to the backend using fetch or any other method you prefer
      const response = await fetch('/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data); // Response from the server
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input type="text" name="username" onChange={handleChange} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" onChange={handleChange} required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" onChange={handleChange} required />
      </div>
      <div>
        <label>First Name:</label>
        <input type="text" name="firstName" onChange={handleChange} required />
      </div>
      <div>
        <label>Last Name:</label>
        <input type="text" name="lastName" onChange={handleChange} required />
      </div>
      <div>
        <label>Mobile Phone Number:</label>
        <input type="text" name="mobilePhoneNumber" onChange={handleChange} required />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;

