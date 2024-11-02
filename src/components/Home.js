import React from 'react';
import './HomePage.css'; // Import the CSS file
import regimg from '../images/regimg.jpg'; // Correct image path
import mainimg from '../images/mainimg.jpeg'; // Correct image path

const HomePage = () => {
  return (
    <div className="homepage-container">
      <h2 className="homepage-title">Welcome to the Election Monitoring System</h2>

      <section className="intro animated-section">
        <h3>About Us</h3>
        <p>
          Ensuring transparency and integrity in elections, the Election Monitoring System equips citizens, observers, and officials with the tools to monitor elections effectively.
        </p>
        <img src={mainimg} alt="Election Monitoring" className="intro-image" />
      </section>

      <section className="features animated-section">
        <h3>Core Features</h3>
        <ul className="feature-list">
          <li><strong>Real-time Monitoring:</strong> Track live election processes.</li>
          <li><strong>Fraud Detection:</strong> Report and analyze irregularities.</li>
          <li><strong>Civic Engagement:</strong> Educate and encourage voter participation.</li>
          <li><strong>Role-based Access:</strong> Custom access for Admins, Citizens, Observers, and Analysts.</li>
          <li><strong>Data Insights:</strong> Analyze voting trends for informed decisions.</li>
        </ul>
      </section>

      <section className="get-involved animated-section">
        <h3>Get Involved</h3>
        <p>Be a part of the process:</p>
        <ul>
          <li>Register to vote and spread awareness.</li>
          <li>Report any irregularities during elections.</li>
          <li>Stay updated on election dates and procedures.</li>
          <li>Engage in discussions on election integrity.</li>
        </ul>
        <img src={regimg} alt="Get Involved" className="observer-image" />
      </section>

      <footer className="footer">
        <p>For assistance, contact <a href="mailto:support@example.com">support@example.com</a>.</p>
      </footer>
    </div>
  );
};

export default HomePage;
