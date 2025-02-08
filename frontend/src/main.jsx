import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;