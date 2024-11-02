// src/pages/DataAnalyst.js
import React from 'react';
import './DataAnalyst.css'; // Import the CSS file

const DataAnalyst = () => {
  return (
    <div className="data-analyst-container">
      <h2 className="dashboard-title">Data Analyst Dashboard</h2>
      <p className="welcome-message">
        Welcome to the Data Analyst section of the Election Monitoring System. Your role is crucial in processing and interpreting election data to ensure a fair and transparent electoral process.
      </p>

      <div className="animated-box">
        <h3>Key Responsibilities:</h3>
        <ul>
          <li>Perform in-depth analyses of voting trends and patterns.</li>
          <li>Ensure data integrity through continuous monitoring and validation.</li>
          <li>Utilize statistical tools to forecast future voter behavior.</li>
          <li>Collaborate with election officials to develop data-driven strategies.</li>
          <li>Create visual reports to present findings effectively.</li>
        </ul>
      </div>

      <div className="report-list">
        <h3>Recent Insights:</h3>
        <ul>
          <li>
            <strong>Voter Engagement Report</strong> - Insights on participation trends 
            <p className="insight-description">
              This report analyzes voter turnout across different demographics and geographic regions. Key findings indicate a 15% increase in participation compared to previous elections. The report suggests targeted outreach efforts for first-time voters and underrepresented communities to further improve engagement.
            </p>
          </li>
          <li>
            <strong>Demographic Analysis</strong> - Understanding voter demographics 
            <p className="insight-description">
              An extensive analysis of voter demographics reveals shifts in voter age groups, with a significant rise in participation among younger voters (18-24 age group). Strategies for continued engagement with this demographic, including social media campaigns and informational workshops, are recommended.
            </p>
          </li>
          <li>
            <strong>Polling Station Anomalies</strong> - Identified issues and resolutions 
            <p className="insight-description">
              This report highlights irregularities reported at polling stations, including long wait times and discrepancies in voter registration. Immediate action plans have been developed, including staff training and improved resource allocation to enhance voter experience on election day.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DataAnalyst;
