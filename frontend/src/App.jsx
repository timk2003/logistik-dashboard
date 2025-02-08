import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Falls du React Router verwendest
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard'; // Beispiel-Dashboard-Komponente

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Geschützte Route */}
        {/* ... andere Routen ... */}
      </Routes>
    </Router>
  );
};

export default App;