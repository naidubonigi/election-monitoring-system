import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Ensure you're using react-router-dom v6
import Navbar from './components/Navbar'; // Navbar component
import Home from './components/Home'; // Home component
import Admin from './components/Admin'; // Admin component
import ViewUsers from './pages/ViewUsers';
import AddUser from './pages/AddUser';
import ElectionManagement from './pages/ElectionManagement';
import Reports from './pages/Reports';
import SystemSettings from './pages/SystemSettings';

import Citizen from './components/Citizen'; // Citizen component
import Elections from './pages/Elections';
import VoterStatus from './pages/VoterStatus';
import VotingHistory from './pages/VotingHistory';
import ReportIssue from './pages/ReportIssue';
import ElectionObserver from './components/ElectionObserver'; // ElectionObserver component
import DataAnalyst from './components/DataAnalyst'; // DataAnalyst component
import Login from './components/Login'; // Login component
import SignUp from './components/Signup';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/view-users" element={<ViewUsers />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/election-management" element={<ElectionManagement />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/system-settings" element={<SystemSettings />} />

        <Route path="/citizen" element={<Citizen />} />
        <Route path="/elections" element={<Elections />} />
        <Route path="/voter-status" element={<VoterStatus />} />
        <Route path="/voting-history" element={<VotingHistory />} />
        <Route path="/report-issue" element={<ReportIssue />} />
        <Route path="/observer" element={<ElectionObserver />} />
        <Route path="/data-analyst" element={<DataAnalyst />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
