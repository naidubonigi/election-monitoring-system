// src/pages/CitizenPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './CitizenPage.css'; // Import the CSS file

const CitizenPage = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Define the functions to handle button clicks and navigation
  const handleViewElections = () => {
    navigate('/elections'); // Navigate to the Elections page
  };

  const handleCheckVoterStatus = () => {
    navigate('/voter-status'); // Navigate to the Voter Status page
  };

  const handleViewVotingHistory = () => {
    navigate('/voting-history'); // Navigate to the Voting History page
  };

  const handleReportIssue = () => {
    navigate('/report-issue'); // Navigate to the Report Issue page
  };

  return (
    <div className="citizen-page-container">
      <h2>Citizen Dashboard</h2>

      <section className="election-info">
        <h3>Election Information</h3>
        <p>Stay informed about upcoming elections in your region.</p>
        <button className="action-button" onClick={handleViewElections}>View Elections</button>
      </section>

      <section className="voter-status">
        <h3>Voter Status</h3>
        <p>Check your voter registration and voting status.</p>
        <button className="action-button" onClick={handleCheckVoterStatus}>Check Voter Status</button>
      </section>

      <section className="voting-history">
        <h3>Your Voting History</h3>
        <p>Review your past voting records.</p>
        <button className="action-button" onClick={handleViewVotingHistory}>View Voting History</button>
      </section>

      <section className="report-issues">
        <h3>Report Election Issues</h3>
        <p>Report any issues you encounter during elections.</p>
        <button className="action-button" onClick={handleReportIssue}>Report an Issue</button>
      </section>

      <section className="footer">
        <h3>Contact Election Helpdesk</h3>
        <p>If you need assistance, please contact the election helpdesk at <a href="mailto:helpdesk@example.com">helpdesk@example.com</a>.</p>
      </section>
    </div>
  );
};

export default CitizenPage;
