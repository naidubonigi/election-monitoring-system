// src/pages/AddUser.js
import React, { useState } from 'react';

const AddUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you can make an API call to save the user data to the backend
    console.log('User Details:', { name, email, role });

    // Simulate a success message after form submission
    setSuccessMessage('User added successfully!');

    // Clear form fields
    setName('');
    setEmail('');
    setRole('');
  };

  return (
    <div className="add-user-container">
      <h2>Add New User</h2>

      <form onSubmit={handleSubmit} className="add-user-form">
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Role:</label>
          <select value={role} onChange={(e) => setRole(e.target.value)} required>
            <option value="">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="Observer">Observer</option>
            <option value="Citizen">Citizen</option>
          </select>
        </div>
        <div>
          <button type="submit">Add User</button>
        </div>
      </form>

      {/* Display success message */}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </div>
  );
};

export default AddUser;
