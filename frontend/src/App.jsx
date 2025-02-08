import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import React, { useEffect } from 'react';
import apiService from './services/apiService';


function App() {
  useEffect(() => {
    apiService.get('/api/health')
      .then(response => console.log(response))
      .catch(error => console.error(error));
  },
    []);
  
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;