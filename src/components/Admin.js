// src/pages/AdminPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './AdminPage.css'; // Import the CSS file

const AdminPage = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <div className="admin-page-container">
      <h2>Admin Dashboard</h2>

      <section className="user-management">
        <h3>User Management</h3>
        <p>Manage users and their roles efficiently.</p>
        <button className="action-button" onClick={() => navigate('/view-users')}>View Users</button>
        {/* Add the button with navigate function to redirect to AddUser page */}
        <button className="action-button" onClick={() => navigate('/add-user')}>Add New User</button>
      </section>

      <section className="election-management">
        <h3>Election Management</h3>
        <p>Oversee and create elections for a smooth electoral process.</p>
        <button className="action-button" onClick={() => navigate('/view-elections')}>View Elections</button>
        <button className="action-button" onClick={() => navigate('/create-election')}>Create New Election</button>
      </section>

      <section className="reporting">
        <h3>Reports</h3>
        <p>Generate comprehensive reports on election activities.</p>
        <button className="action-button" onClick={() => navigate('/view-reports')}>View Reports</button>
      </section>

      <section className="system-settings">
        <h3>System Settings</h3>
        <p>Configure application settings for optimal performance.</p>
        <button className="action-button" onClick={() => navigate('/update-settings')}>Update Settings</button>
      </section>

      <section className="footer">
        <h3>Admin Support</h3>
        <p>If you need assistance, please contact support at <a href="mailto:support@example.com">support@example.com</a>.</p>
      </section>
    </div>
  );
};

export default AdminPage;
