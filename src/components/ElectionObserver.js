// src/pages/ElectionObserver.js
import React, { useState } from 'react';
import './ElectionObserver.css'; // Import the CSS file

const ElectionObserver = () => {
  // State for controlling modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent('');
  };

  return (
    <div className="election-observer-container">
      <h2>Election Observer Dashboard</h2>
      <p>
        Welcome, Election Observer! You are responsible for monitoring the election process and ensuring fairness and transparency.
        Below are your available tools and actions:
      </p>

      <div className="monitoring-actions-section">
        <h3>Monitoring Actions:</h3>
        <ul>
          <li>Track polling stations in real-time</li>
          <li>View election data and statistics</li>
          <li>Submit reports on suspicious activities</li>
          <li>Access post-election reviews</li>
        </ul>
      </div>

      <div className="tools-section">
        <h3>Available Tools:</h3>
        <ul>
          <li><button onClick={() => openModal('Real-time monitoring dashboard')}>Real-time monitoring dashboard</button></li>
          <li><button onClick={() => openModal('Incident reporting form')}>Incident reporting form</button></li>
          <li><button onClick={() => openModal('Live data visualization tools')}>Live data visualization tools</button></li>
          <li><button onClick={() => openModal('Communication with officials')}>Communication channels with officials</button></li>
        </ul>
      </div>

      <div className="footer">
        <p>If you encounter any issues, please contact the support team at <a href="mailto:support@example.com">support@example.com</a>.</p>
      </div>

      {/* Modal for displaying content */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>{modalContent}</h3>
            <p>This is where you would interact with the {modalContent}.</p>
            <button className="close-modal" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ElectionObserver;
